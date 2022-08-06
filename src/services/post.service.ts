import { getAllPosts, getPostById, isTitleUnique, createPost, updatePost, deletePost } from "../entities/post.entity";
import { Post } from "../models/post.model";

export const getPostByIdService = async (id: number): Promise<void> => {
    try {
        const post = await getPostById(id)
        return post
    } catch (err) {
        throw new Error(`Error: Could not get post. ${err}`)
    }
}

export const getAllPostsService = async () : Promise<Post> => {
    try {
        const posts = await getAllPosts();
        return posts; 
    } catch (error) {
        throw new Error(`can not get the posts`);
    }
}

export const isTitleUniqueService = async (title: string): Promise<Boolean> => {
    try {
        const result = await isTitleUnique(id)
        return result
    } catch (err) {
        throw new Error(`Error: Title is not unique. ${err}`)
    }
}

export const createPostService = async () : Promise<Post> => {
    try {
        c
    } catch {
        
    }
}

export const updatePostService = async (post: Post): Promise<void> => {
    try {
        const post = await updatePost(id)
        return post
    } catch (err) {
        throw new Error(`Error: Could not update post. ${err}`)
    }
}

export const deletePostService = async (post: Post) : Promise<Post> => {
    try {
        const post = await deletePost();
        return post; 
    } catch (error) {
        throw new Error(`Error: Could not delete post. ${err}`);
    }
}