import { useState,useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import axios from "axios"
import NavBar from "../layout/Navbar"
import Footer from "../layout/Footer";

const UpdateBlog=(props)=>{
 
const [blog,setBlog]=useState(null)
const{id}=useParams()
const history=useHistory()
console.log(blog, 'updateBlog1')

useEffect(()=>{
    axios.get(`http://localhost:5000/blogs/${id}`,{
        headers:{
            'x-auth-token': localStorage.getItem('userToken')
        }
    }).then(res=>{setBlog(res.data)
        .catch((err) => console.error(err));
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
    <form onSubmit={handleSubmit}>

    <div style={{margin:'150px 0 0 0'}}>
    <h1 style={{margin:'0 0 0 35%'}}> Edit Your Blog</h1>
                <div className="mb-3">
                    <label className="form-label" htmlFor="blog_title">Title</label>
                    <input type="text"
                     className="form-control"
                        id="blog_title"
                        name='blog_title'
                        value={blog.blog_title}
                        onChange={(e) =>
                            setBlog({ ...blog, [e.target.id]: e.target.value })
                        } />
                </div>
    
                <div className="mb-3">
                <label className="form-label" htmlFor="blog_content">Content</label>
                    <textarea  className="form-control" 
                    rows={10}
                     name="blog_content"
                      id="blog_content"
                        value={blog.blog_content} 
                        onChange={(e) => {
                            setBlog({ ...blog, [e.target.id]: e.target.value })
                        }}>
                    </textarea> </div>
    
                <input style={{margin:'20px 20px 180px 40%'}}  className='btn btn-dark' type="submit" value="Edit"/>
                </div>
            </form>
//     <div>
//  <NavBar user={props.user} />
//  <h1>Edit The Blog</h1>
//         {
//         blog && (

//             <form onSubmit={handleSubmit}>
               
//   <div style={{margin:'150px 0 0 0'}}>
//   <h1 style={{margin:'0 0 0 25%'}}> Edit</h1>

//                 <label htmlFor="blog_title">Edit Title</label>
//                 <input type="text"
//                     id="blog_title"
//                     name='blog_title'
//                     value={blog.blog_title}
//                     onChange={(e) =>
//                         setBlog({ ...blog, [e.target.id]: e.target.value })
//                     } />
//             </div>

//             <div>
//                 <textarea name="blog_content" id="blog_content"
//                     value={blog.blog_content} 
//                     onChange={(e) => {
//                         setBlog({ ...blog, [e.target.id]: e.target.value })
//                     }}>
//                 </textarea> </div>

//             <div>

//                 <label htmlFor="created_by">Edit Name</label>
//                 <input type="text"
//                     id="created_by"
//                     name='created_by'
//                     value={blog.created_by}
//                     onChange={(e) =>
//                         setBlog({ ...blog, [e.target.id]: e.target.value })
//                     } />
//             </div>

//             <input type="submit" value="Edit"/>

//         </form>
//         )
//     }
//     </div>
    
)

}
export default UpdateBlog