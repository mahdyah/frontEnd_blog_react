
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
const Login = (props) => {
    const history = useHistory()
    const [formdata, setFormData] = useState({
        email: '',
        password: ''
    })
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:5000/auth', formdata)
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
            <form onSubmit={handleSubmit}>


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




                <input type="submit" className="btn btn-primary" />
            </form>

        </div>
    )
}

export default Login