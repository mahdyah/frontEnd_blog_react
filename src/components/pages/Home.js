import NavBar from "../layout/Navbar";
import CreateBlog from "../forms/CreateBlog";
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios";

const Home = (props) => {
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

    return (
        <div>
            <NavBar user={props.user} />
            <h1>Home</h1>
       
            {blogs && blogs.map((blog) => (
                <div key={blog._id}>
                    <h6>{blog.blog_title}</h6>
                    <p>By: {blog.created_by}</p>
                    <p>Published: {Date(blog.created_at) }</p>
                    <p>
                        {blog.blog_content}
                   
                    </p>


                </div>
             ))
            }

        </div>
    )
}

export default Home