import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import NavBar from '../layout/Navbar'
import Footer from "../layout/Footer";

const RegisterationForm = (props) => {
    const history = useHistory()
    const [formdata, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:5000/user', formdata)
            .then(res => {
                if (res.data.token && res.data.user) {
                    localStorage.setItem('userToken', res.data.token)
                    props.setUser(res.data.user)
                    history.push('/')
                } else {
                    console.error(res.data)
                }
            })
    }

    return (
        <div>
            <NavBar user={props.user} />
            
            <div style={{margin:'150px 0 0 0'}}>
            <form onSubmit={handleSubmit} >
            <h1 style={{margin:'0 0 0 35%'}}>Register</h1>
                <div className="mb-3" >
                    <label className="form-label" htmlFor="username">Username</label>
                   <input type="text"
                        className="form-control"
                        id='username'
                        name='username'
                        value={formdata.username}
                        onChange={(event) =>
                            setFormData({ ...formdata, [event.target.id]: event.target.value })
                        } /></div>

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




                <input type="submit"  style={{margin:'0px 0 0px 45%',}} className='btn btn-dark' />
            </form>
            </div>
        </div>
    )
}
export default RegisterationForm