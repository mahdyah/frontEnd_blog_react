import NavBar from "../layout/Navbar";
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios";
import Footer from "../layout/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ListBlogsEdit=(props)=>{

    const history = useHistory()
    const [blogs, setBlogs] = useState(null)


 useEffect(() => {
    axios.get(`https://mah-blog-api.herokuapp.com/blogs`, {
        headers: {
            "x-auth-token": localStorage.getItem('userToken')
        }
    })
        .then((res) => setBlogs(res.data))
        .catch((err) => console.error(err))
}, [])


    const handleDelete = (blog) => {
        axios.delete(`https://mah-blog-api.herokuapp.com/blogs/${blog._id}`, {
            headers: {
                "x-auth-token": localStorage.getItem("userToken")
            }
        }
        ).then((res) => {
            console.log(res.data, 'from list blogs to be edited')
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
<div style={{margin:'150px'}}></div>
            {blogs && blogs.map((blog) => (

<Container style={{padding:'0'}}>
                    <Row className="px-4 my-5" key={blog._id}>
                    <Col>

            <div key={blog._id}>
                {blog.user === props.user._id && (<h1 class="font-weigh-light">{blog.blog_title}</h1>)}
                {blog.user === props.user._id && (<p>By: {blog.created_by}</p>)}
                {blog.user === props.user._id && (<p>Published: {blog.created_at}</p>)}
                {blog.user === props.user._id && (<p class="mt-4">{blog.blog_content}</p>)}
                {blog.user === props.user._id && (<span style={{margin:'0px 20px 0px 0',}}className="btn btn-dark" onClick={() => handleDelete(blog)}>Delete</span>)}
                {blog.user === props.user._id && (<span className="btn btn-dark" onClick={() => handleUpdate(blog)}>Edit</span>)}
                
                  </div>
                  </Col>
                     </Row>
                     </Container>
             ))
            }
<Footer/>
        </div>
    )


}
export default ListBlogsEdit