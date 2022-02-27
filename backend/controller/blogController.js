const BLOG = require('../models/blog');


exports.blogPost = async (req, res) => {
    const {title, details} = req.body;

    const newBlog = new BLOG({
        title,
        details
    });

    await newBlog.save((err, blog) => {
        if(err) {
            res.status(400).json({msg: 'Bad Request'});
        }
        else {
            res.status(200).json({blog: blog, msg: 'Blog Successful'});
        }
    })
}

exports.blogList = async (req, res) => {
    await BLOG.find({}).exec((err, blogs) => {
        if(!blogs) {
            res.status(200).json({msg: 'No Blogs Found'})
        }
        else if (err) {
            res.status(400).json({msg: 'Bad Request'})
        }
        else {
            res.status(200).json({blogs: blogs, msg: 'Blogs List Found'})
        }
    })
}