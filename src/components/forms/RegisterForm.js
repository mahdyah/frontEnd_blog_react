import {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import NavBar from '../layout/Navbar'

const RegisterationForm=(props)=>{
    const history =useHistory()
    const[formdata,setFormData]=useState({
        username: '',
        email:'',
        password:''
    })

const handleSubmit=(event)=>{
event.preventDefault()
axios.post('http://localhost:5000/user',formdata)
.then(res =>{
    if(res.data.token && res.data.user){
    localStorage.setItem('userToken',res.data.token)
    props.setUser(res.data.user)
    history.push('/')
}else{
    console.error(res.data)
}
})
}

    return (
        <div>
                <NavBar user={props.user} />
<form onSubmit={handleSubmit}>

<div className="mb-3">
    <label className="form-label" htmlFor="username">Username</label>

<input type="text" 
 className="form-control"
id='username'
name='username'
value={formdata.username}
onChange={ (event)=>
    setFormData({...formdata, [event.target.id]:event.target.value})
}/></div>

<div className="mb-3">
    <label className="form-label" htmlFor="email">Email</label>
<input type="text" 
id='email'
className="form-control"
name='email'
value={formdata.email}
onChange={ (event)=>
    setFormData({...formdata, [event.target.id]:event.target.value}) }/>
</div>


<div className="mb-3">
<label className="form-label" htmlFor="password">Password</label>
<input type="password" 
id='password'
className="form-control"
name='password'
value={formdata.password}
onChange={ (event)=>
    setFormData({...formdata, [event.target.id]:event.target.value})
}/>
</div>




<input type="submit" className="btn btn-primary"/>
</form>

        </div>
    )
}
export default RegisterationForm