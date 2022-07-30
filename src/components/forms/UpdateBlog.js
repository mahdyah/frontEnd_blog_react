import { useState,useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import axios from "axios"
import NavBar from "../layout/Navbar"
import Footer from "../layout/Footer";

const UpdateBlog=(props)=>{
 
const [blogs,setBlogs]=useState(null)
const{id}=useParams()
const history=useHistory()


console.log(blogs, 'updateBlog1')

useEffect(()=>{
    axios.get(`https://mah-blog-api.herokuapp.com/blogs/${id}`,{
        headers:{
            'x-auth-token': localStorage.getItem('userToken')
        }
    }).then(res=>{setBlogs(res.data)
        .catch((err) => console.error(err));
    })
},[])


const handleSubmit=(e)=>{
    e.preventDefault()
    axios.put(`https://mah-blog-api.herokuapp.com/blogs/${id}`,blogs,{
        headers:{
            'x-auth-token': localStorage.getItem('userToken')
        }
    }).then(res=>history.push('/update'))
}
return(
    <div>
   {blogs && (<form onSubmit={handleSubmit}>

    <div style={{margin:'150px 0 0 0'}}>
    <h1 style={{margin:'0 0 0 35%'}}> Edit Your Blog</h1>
                <div className="mb-3">
                    <label className="form-label" htmlFor="blog_title">Title</label>

                    <input type="text"
                     className="form-control"
                        id="blog_title"
                        name='blog_title'
                        value={blogs.blog_title}
                        onChange={(e) =>
                            setBlogs({ ... blogs, [e.target.id]: e.target.value })
                        } />
                </div>
    
                <div className="mb-3">
                <label className="form-label" htmlFor="blog_content">Content</label>
                    <textarea  className="form-control" 
                    rows={10}
                     name="blog_content"
                    id="blog_content"
                    value={blogs.blog_content} 
                        onChange={(e) => {
                            setBlogs({ ... blogs, [e.target.id]: e.target.value })
                        }}>
                    </textarea> </div>
    
                <input style={{margin:'20px 20px 180px 40%'}}  className='btn btn-dark' type="submit" value="Edit"/>
                </div>
            </form>)
                    }




</div>
)}
export default UpdateBlog