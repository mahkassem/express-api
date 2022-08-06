import { Post } from '../models/post.model'
import DB from '../utils/database'

export const getAllPosts = async (): Promise<Post[]> => {
    const queryText = `SELECT * FROM posts`
    const { rows } = await DB.query(queryText)
    return rows
}

export const getPostById = async (id: number): Promise<Post> => {
    const queryText = `SELECT * FROM posts WHERE id = $1`
    const { rows } = await DB.query(queryText, [id])
    return rows[0]
}

export const isTitleUnique = async (title: string): Promise<boolean> => {
    const queryText = `SELECT * FROM posts WHERE title = $1`
    const { rows } = await DB.query(queryText, [title])
    return rows.length === 0
}

export const createPost = async (post: Post): Promise<Post> => {
    const { title, content, user_id } = post;
    const queryText = `INSERT INTO posts (title, body, user_id) VALUES ($1, $2, $3) RETURNING *`
    const { rows } = await DB.query(queryText, [title, content, user_id])
    return rows[0]
}

export const updatePost = async (post: Post): Promise<Post> => {
    const { id, title, content } = post;
    const queryText = `UPDATE posts SET title = $1, body = $2 WHERE id = $3 RETURNING *`
    const { rows } = await DB.query(queryText, [title, content, id])
    return rows[0]
}

export const deletePost = async (id: number): Promise<void> => {
    const queryText = `DELETE FROM posts WHERE id = $1`
    await DB.query(queryText, [id])
}