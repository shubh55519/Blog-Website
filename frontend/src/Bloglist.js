import { useEffect, useState } from "react";
import axios from 'axios'

function Bloglist(){
    const [blogs, setBlogs] = useState('');

    useEffect(()=>{
        try {
            const fetchBloglist = async()=>{
                const res = await axios.get('http://localhost:3000/api/blog/all?name=title&direction=asc');
                setBlogs(res.data)
                console.log(res.data);
            }
            fetchBloglist()
        } catch (err) {
            console.log(err.message);
        }
    },[])
        
    return (
    <>
    <h1>Bloglist</h1>
    {blogs && blogs.map((blog, index)=>(
        
        <div key={index}>
        <h3>{blog.title}</h3>
        <p>{blog.category}</p>
        <p>{blog.creater}</p>
        </div>
    ))}
    </>
    )
}
export default Bloglist;