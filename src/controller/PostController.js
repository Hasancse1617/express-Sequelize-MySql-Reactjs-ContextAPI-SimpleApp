const Post = require("../models/Post");
const Comment = require("../models/Comment");

module.exports.allPost = async(req, res)=>{
    try {
        // const response = await Post.findAll({include: Comment, order:[['updatedAt','DESC']]});// HasMany Relation
        const response = await Post.findAll({order:[['updatedAt','DESC']]});
        return res.status(200).json({response});
    } catch (error) {
        return res.status(500).json({errors: [{msg: error.message}]});
    }
}
module.exports.createPost = async(req, res)=>{
    const {title, image, content} = req.body;
    const errors = [];
    if(title === ''){
        errors.push({msg: 'Title is required'});
    }
    if(image === ''){
        errors.push({msg:'Image is required'});
    }
    if(content === ''){
        errors.push({msg:'Content is required'});
    }
    const checkPost = await Post.findOne({where:{title:title}});
    if(checkPost){
        errors.push({msg:'Post is already exists'});
    }

    if(errors.length !== 0){
        return res.status(400).json({errors});
    }else{
        try {
            const response = await Post.create({
                title,
                image,
                content
            });
            return res.status(200).json({message: "Post added Successfully"});
        } catch (error) {
            return res.status(500).json({errors: [{msg: error.message}]});
        }
    }
}
module.exports.editPost = async(req, res)=>{
    const id = req.params.id;
    try {
        const response = await Post.findOne({where:{id}});
        return res.status(200).json({response});
    } catch (error) {
        return res.status(500).json({errors: [{msg: error.message}]});
    }
}
module.exports.updatePost = async(req, res)=>{
    const id = req.params.id;
    const {title, image, content} = req.body;
    const errors = [];
    if(title === ''){
        errors.push({msg: 'Title is required'});
    }
    if(image === ''){
        errors.push({msg:'Image is required'});
    }
    if(content === ''){
        errors.push({msg:'Content is required'});
    }

    if(errors.length !== 0){
        return res.status(400).json({errors});
    }else{
        try {
            const response = await Post.update({
                title,
                image,
                content
            },{where:{id:id}});
            return res.status(200).json({message: "Post updated Successfully"});
        } catch (error) {
            return res.status(500).json({errors: [{msg: error.message}]});
        }
    }
}
module.exports.deletePost = async(req, res)=>{
    const id = req.params.id;
    try {
        const response = await Post.destroy({where:{id}});
        return res.status(200).json({message: "Post deleted Successfully"});
    } catch (error) {
        return res.status(500).json({errors: [{msg: error.message}]});
    }
}

module.exports.createComment = async(req, res)=>{
    const post_id = req.params.id;
    const {comment} = req.body;
    const errors = [];
    if(comment === ''){
        errors.push({msg: 'Comment is required'});
    }
    if(errors.length !== 0){
        return res.status(400).json({errors});
    }else{
        try {
            const response = await Comment.create({
                post_id,
                comment
            });
            const respone2 = await Comment.findAll({where:{post_id: post_id}, order:[['updatedAt','DESC']]})
            return res.status(200).json({message: "Comment added Successfully", response:respone2});
        } catch (error) {
            return res.status(500).json({errors: [{msg: error.message}]});
        }
    }
}
module.exports.allComment = async(req, res)=>{
    const post_id = req.params.id;
    try {
        const response = await Comment.findAll({ where:{post_id}, order:[['updatedAt','DESC']]});
        return res.status(200).json({response});
    } catch (error) {
        return res.status(500).json({errors: [{msg: error.message}]});
    }
}