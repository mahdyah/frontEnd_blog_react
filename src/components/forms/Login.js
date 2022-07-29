
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import NavBar from '../layout/Navbar'
import Footer from "../layout/Footer";

const Login = (props) => {
    const history = useHistory()
    const [formdata, setFormData] = useState({
        email: '',
        password: ''
    })
    // useEffect=(()=>{
    //     const formData=window.localStorage.getItem('everything-and-nothing')
    //     setFormData(JSON.parse(formData))
    //     },[])
    // useEffect=(()=>{
    //     window.localStorage.setItem('everything-and-nothing',JSON.stringify(formdata))
    // })

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('https://mah-blog-api.herokuapp.com/auth', formdata)
            .then(res => {
                if (res.data.token && res.data.user) {
                    localStorage.setItem('userToken', res.data.token)
                    props.setUser(res.data.user)
                    history.push('/new')
                } else {
                    console.error(res.data)
                }
            })
    }

    return (
        <div>
                <NavBar user={props.user} />
            <form onSubmit={handleSubmit}>

<div style={{margin:'150px 0 0 0'}}>
    <h1 style={{margin:'0 0 0 35%'}}> Login</h1>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input type="text"
                        id='email'
                        className="form-control"
                        name='email'
                        value={formdata.email}
                        onChange={(event) =>
                            setFormData({ ...formdata, [event.target.id]: event.target.value })} />
                </div>


                <div className="mb-3">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password"
                        id='password'
                        className="form-control"
                        name='password'
                        value={formdata.password}
                        onChange={(event) =>
                            setFormData({ ...formdata, [event.target.id]: event.target.value })
                        } />
                </div>
                </div>



                <input type="submit" style={{margin:'40px 0 425px 40%',}} className='btn btn-dark' />
            </form>

        </div>
    )
}

export default Login