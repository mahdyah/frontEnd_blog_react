import CreateBlog from "../forms/CreateBlog"
import NavBar from "../layout/Navbar"
import axios from "axios";
import {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import Footer from "../layout/Footer";
const NewPost=(props)=>{
    const history =useHistory()
    const [blogs, setBlogs]=useState(null)
useEffect(()=>{
    axios.get(`http://localhost:5000/blogs`,{
        headers:{
            "x-auth-token":localStorage.getItem('userToken') } })
.then((res)=>setBlogs(res.data))

.catch((err)=>console.error(err))
},[])


return(
    <div>
            <NavBar user={props.user}/>
            <h1>New Blog</h1>
            <CreateBlog setBlogs={setBlogs} blogs={blogs} />
            <Footer/>
    </div>
)


}
export default NewPost