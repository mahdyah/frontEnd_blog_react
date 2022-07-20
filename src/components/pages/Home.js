import NavBar from "../layout/Navbar";
import CreateBlog from "../forms/CreateBlog";
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "../layout/Footer";
const Home = (props) => {
    const history = useHistory()
    const [blogs, setBlogs] = useState(null)
 console.log(props, 'from home!')

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
       <div style={{margin:'150px'}}></div>
            {blogs && blogs.map((blog) => (
                  <Container style={{padding:'0'}}>
                    <Row className="px-4 my-5">
                    <Col> 
                <div key={blog._id}>
                 <h1 class="font-weigh-light">{blog.blog_title}</h1>
                    <p>By: {blog.created_by}</p>
                    <p>Published: {blog.created_at}</p>
                    <p class="mt-4">{blog.blog_content}</p>
                   
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

export default Home