import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import '../component/Blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const loadBlogs = async () => {
    const { data } = await axios.get("http://localhost:5000/api/blog/list");
    setBlogs(data.blogs);
  }

  // setBlogs(res.data.blogs)
  // console.log(res.data);
  // console.log(blogs);
  useEffect(() => {
    loadBlogs();
  }, []);
  return (<div className='blog'>
    <h1>
      BLOG
    </h1>
    {blogs.map(blog => {
      return (

        <Card sx={{ minWidth: 345, minHeight: 100 }} className="blog1">
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='blog2'>
              {blog.title}
            </Typography>
            <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="blog"
          />
            <Typography variant="body2" color="text.secondary">
              {blog.details}
            </Typography>
          </CardContent>
        </Card>
      )
    })}
  </div>
  
  )
};
export default Blog;