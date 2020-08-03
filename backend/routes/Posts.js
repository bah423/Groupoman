const express = require("express")
const posts = express.Router()
const cors = require("cors")

const Post = require("../models/Post")
posts.use(cors())

//GET list posts
posts.get('/list', (req, res, next) => { 
    Post.findAll() 
    .then(posts => { res.json(posts) })
    .catch(err => { res.send('error : '+err) }) 
})

//GET list posts
posts.post('/create', (req, res, next) => { 
    if(!req.body.labels || !req.body.description || !req.body.path || !req.body.user_id) {
         res.status(400)
         res.json({ error: 'Field are empty or fill all fields ' }) 
        }else{ 
            var label = req.body.labels 
            var slug = label.replace(/\s/g, "-"); 
        const postData = { 
            labels : label, 
            slug: slug, 
            description: req.body.description, 
            path: req.body.path, 
            post_type:req.body.post_type, 
            user_id: req.body.user_id, status:1 
        } 
        Post.create(postData) 
        .then(() =>{ res.send({'status':true, 'message' : 'Post added'})})
        .catch(err => { res.send('error :'+err) }) }
})

module.exports = posts
