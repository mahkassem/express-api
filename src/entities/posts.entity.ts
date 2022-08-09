import { Post } from '../models/post.model'
import DB from '../utils/database'

export const getAllPosts = async (): Promise<Post[]> => {
    const queryText = `SELECT
                        p.id, p.title, p.content, p.created_at, p.user_id,
                        u.name AS user_name
                        FROM posts p
                        JOIN users u ON u.id = p.user_id`
    const { rows } = await DB.query(queryText)
    return rows
}

export const getPostById = async (id: number): Promise<Post> => {
    const queryText = `SELECT
                        p.id, p.title, p.content, p.created_at, p.user_id,
                        u.name AS user_name
                        FROM posts p
                        JOIN users u ON u.id = p.user_id
                        WHERE p.id = $1`
    const { rows } = await DB.query(queryText, [id])
    return rows[0]
}

export const getPostByTitle = async (title: string): Promise<Post> => {
    const queryText = `SELECT * FROM posts WHERE title = $1`
    const { rows } = await DB.query(queryText, [title])
    return rows[0]
}

export const createPost = async (post: Post): Promise<Post> => {
    const { title, content, user_id } = post;
    const queryText = `INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3) RETURNING *`
    const { rows } = await DB.query(queryText, [title, content, user_id])
    return rows[0]
}

export const updatePost = async (post: Post): Promise<Post> => {
    const { id, title, content } = post;
    const queryText = `UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *`
    const { rows } = await DB.query(queryText, [title, content, id])
    return rows[0]
}

export const deletePost = async (id: number): Promise<boolean> => {
    const queryText = `DELETE FROM posts WHERE id = $1`
    const result = await DB.query(queryText, [id])
    return result.rowCount === 1
}

export const getPostsByUserId = async (id: number): Promise<Post[]> => {
    const queryText = `SELECT
                        p.id, p.title, p.content, p.created_at, p.user_id,
                        u.name AS user_name
                        FROM posts p
                        JOIN users u ON u.id = p.user_id
                        WHERE p.user_id = $1`
    const { rows } = await DB.query(queryText, [id])
    return rows
}