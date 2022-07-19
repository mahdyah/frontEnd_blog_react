import { useState,useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import axios from "axios"
import NavBar from "../layout/Navbar"

const UpdateBlog=(props)=>{
 
const [blog,setBlog]=useState(null)
const{id}=useParams()
const history=useHistory()
console.log(blog, 'updateBlog')

useEffect(()=>{
    axios.get(`http://localhost:5000/blogs/${id}`,{
        headers:{
            'x-auth-token': localStorage.getItem('userToken')
        }
    }).then(res=>{
        console.log(res.data, 'updateBlog!!!!!!!!!')
        setBlog(res.data)
    })
},[])

console.log(blog, 'updateBlog 2')

const handleSubmit=(e)=>{
    e.preventDefault()
    axios.put(`http://localhost:5000/blogs/${id}`,blog,{
        headers:{
            'x-auth-token': localStorage.getItem('userToken')
        }
    }).then(res=>history.push('/update'))
}
return(
    <div>
 <NavBar user={props.user} />
 <h1>Edit The Blog</h1>
        {
        blog && (

            <form onSubmit={handleSubmit}>
               
  <div>
                <label htmlFor="blog_title">Edit Title</label>
                <input type="text"
                    id="blog_title"
                    name='blog_title'
                    value={blog.blog_title}
                    onChange={(e) =>
                        setBlog({ ...blog, [e.target.id]: e.target.value })
                    } />
            </div>

            <div>
                <textarea name="blog_content" id="blog_content"
                    value={blog.blog_content} 
                    onChange={(e) => {
                        setBlog({ ...blog, [e.target.id]: e.target.value })
                    }}>
                </textarea> </div>

            <div>

                <label htmlFor="created_by">Edit Name</label>
                <input type="text"
                    id="created_by"
                    name='created_by'
                    value={blog.created_by}
                    onChange={(e) =>
                        setBlog({ ...blog, [e.target.id]: e.target.value })
                    } />
            </div>

            <input type="submit" value="Edit"/>

        </form>
        )
    }
    </div>
    
)

}
export default UpdateBlog