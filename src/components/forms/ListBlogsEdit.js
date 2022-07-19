import NavBar from "../layout/Navbar";
import CreateBlog from "../forms/CreateBlog";
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios";

const ListBlogsEdit=(props)=>{
    const history = useHistory()
    const [blogs, setBlogs] = useState(null)
 console.log(blogs, 'from home!')

    useEffect(() => {
        axios.get(`http://localhost:5000/blogs`, {
            headers: {
                "x-auth-token": localStorage.getItem('userToken')
            }
        })
            .then((res) => setBlogs(res.data))
            .catch((err) => console.error(err))
    }, [])

    const handleDelete = (blog) => {
        axios.delete(`http://localhost:5000/blogs/${blog._id}`, {
            headers: {
                "x-auth-token": localStorage.getItem("userToken")
            }
        }
        ).then((res) => {
            setBlogs([...blogs.filter((b) => b._id !== blog._id)])
        })
            .catch((error) => console.error(error))
    }
    const handleUpdate = (blog) => {
        history.push(`/update/${blog._id}`)
    }

    return (
        <div>
            <NavBar user={props.user} />
            <h1>Edit Blogs</h1>
            {/* <CreateBlog setBlogs={setBlogs} blogs={blogs} /> */}

            {blogs && blogs.map((blog) => (

                // blog.user === props.user._id && 
                 <div key={blog._id}>
{blog.user === props.user._id && 
                   ( <h6>{blog.blog_title}</h6>)
                }

                {blog.user === props.user._id && 
                   (    <p>By: {blog.created_by}</p>)}
                     {blog.user === props.user._id && 
                   (    <p>Published: {blog.created_at}</p>)}

                {blog.user === props.user._id && 
                   (    <p>{blog.blog_content} </p>)}

             {blog.user === props.user._id && 
                   (       <span className="btn btn-danger" onClick={() => handleDelete(blog)}>Delete</span>)}
                 {blog.user === props.user._id && 
                   (   <span   className="btn btn-info" onClick={() => handleUpdate(blog)}>Edit</span>)}
                
                  </div>
            
             ))
            }

        </div>
    )


}
export default ListBlogsEdit