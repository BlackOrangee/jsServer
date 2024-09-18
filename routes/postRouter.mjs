import express from 'express';
import PostContriller from '../controller/postContriller.mjs';
const postRouter = express.Router();

postRouter.get('/', PostContriller.getAllPosts);
postRouter.post('/', PostContriller.createPost);

postRouter.delete('/:id', PostContriller.deletePost);

export default postRouter;