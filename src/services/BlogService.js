import { resolve } from 'core-js/fn/promise'
import mockBlogs from '../views/blog/mockBlogs'

export const getBlogs = () =>{
    return new Promise((resolve) = () => {
        setTimeout(() => {
            resolve(mockBlogs)
        }, 500);
    })
}