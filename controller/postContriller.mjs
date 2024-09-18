import Post from "../model/Post.mjs";

const getAllPosts = async (req, res) => {
    const posts = await Post.find({});
    res.send(posts);
}

const createPost = async (req, res) => {
    const post = new Post(req.body);
    try {
        await post.save();
    } catch (error) {
        res.status(500).send(error);
    }
    res.send(post);
}

const deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
    } catch (error) {
        res.status(500).send(error);
    }
}

export default { getAllPosts, createPost, deletePost }