import { useState } from "react"
import axios from "axios"
import { useHistory } from 'react-router-dom'

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
                .then(res => props.setBlogs([...props.blogs, res.data]))
                .then(history.push('/'))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>


            <div>
                <label htmlFor="blog_title">Title</label>
                <input type="text"
                    id="blog_title"
                    name='blog_title'
                    value={formData.blog_title}
                    onChange={(e) =>
                        setFormData({ ...formData, [e.target.id]: e.target.value })
                    } />
            </div>

            <div>
                <textarea name="blog_content" id="blog_content"
                    value={formData.blog_content} onChange={(e) => {
                        setFormData({ ...formData, [e.target.id]: e.target.value })
                    }}>
                </textarea> </div>

            {/* <div>

                <label htmlFor="created_by">The Name To be displayed </label>
                <input type="text"
                    id="created_by"
                    name='created_by'
                    value={formData.created_by}
                    onChange={(e) =>
                        setFormData({ ...formData, [e.target.id]: e.target.value })
                    } />
            </div> */}

            <input type="submit" />

        </form>
    )


}
export default CreateBlog