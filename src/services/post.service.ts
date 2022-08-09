import { createPost, deletePost, getAllPosts, getPostById, getPostsByUserId, updatePost } from "../entities/posts.entity";
import { getUserById } from "../entities/user.entity";
import { Post } from "../models/post.model";
import { User } from "../models/user.model";
import { sanitizedUserResponse } from "../utils/helpers";

export const getPostByIdService = async (id: number): Promise<Post> => {
    try {
        const post = await getPostById(id)
        return post
    } catch (err) {
        throw new Error(`Error: Could not get post. ${err}`)
    }
}

export const getAllPostsService = async () : Promise<Post[]> => {
    try {
        const posts = await getAllPosts();
        return posts; 
    } catch (error) {
        throw new Error(`can not get the posts`);
    }
}

export const createPostService = async (post: Post): Promise<Post> => {
    try {
        const result = await createPost(post)
        return result
    } catch (err) {
        throw new Error(`Error: Could not create post. ${err}`)
    }
}

export const updatePostService = async (post: Post): Promise<Post> => {
    try {
        const result = await updatePost(post)
        return result
    } catch (err) {
        throw new Error(`Error: Could not update post. ${err}`)
    }
}

export const deletePostService = async (id: number): Promise<boolean> => {
    try {
        const result = await deletePost(id)
        return result
    } catch (err) {
        throw new Error(`Error: Could not delete post. ${err}`)
    }
}

export const getPostsByUserIdService = async (user_id: number): Promise<User> => {
    try {
        let user = await getUserById(user_id);
        const posts = await getPostsByUserId(user_id);
        user.posts = posts;
        user = sanitizedUserResponse(user);
        return user;
    } catch (error) {
        throw new Error(`can not get the posts`);
    }
}