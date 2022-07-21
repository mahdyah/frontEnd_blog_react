import { useState } from "react"
import axios from "axios"
import { useHistory } from 'react-router-dom'
import Footer from "../layout/Footer";
const CreateBlog = (props) => {
    // console.log(props,'from here!')
    const history = useHistory()
    const [formData, setFormData] = useState({
        blog_title: '',
        blog_content: '',
        created_by: '',
        created_at:''

    })
    const handleSubmit = (event) => {
        event.preventDefault()
        try {
            axios.post(`http://localhost:5000/blogs`, formData, {
                headers: {
                    'x-auth-token': localStorage.getItem('userToken')
                }
            })
                .then(res => props.setBlogs([ res.data,...props.blogs]))
                .then(history.push('/'))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>

<div style={{margin:'150px 0 0 0'}}>
<h1 style={{margin:'0 0 0 25%'}}> Create New Content</h1>
            <div className="mb-3">
                <label className="form-label" htmlFor="blog_title">Title</label>
                <input type="text"
                 className="form-control"
                    id="blog_title"
                    name='blog_title'
                    value={formData.blog_title}
                    onChange={(e) =>
                        setFormData({ ...formData, [e.target.id]: e.target.value })
                    } />
            </div>

            <div className="mb-3">
            <label className="form-label" htmlFor="blog_content">Content</label>
                <textarea  className="form-control" 
                rows={10}
                 name="blog_content"
                  id="blog_content"
                    value={formData.blog_content} 
                    onChange={(e) => {
                        setFormData({ ...formData, [e.target.id]: e.target.value })
                    }}>
                </textarea> </div>

            <input style={{margin:'20px 20px 180px 40%'}}  className='btn btn-dark' type="submit" />
            </div>
        </form>
    )


}
export default CreateBlog