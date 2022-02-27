import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";

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
  return (<div>
    {blogs.map(blog => {
      return (
        <Card sx={{ maxWidth: 345 }}>
          {/* <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {blog.title}
            </Typography>
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