import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = e => {
        e.preventDefault() //кнопка когда находится в форме имеет тайп=сабмит и при ее нажатии обновляется страница e.preventDefault() убирает это поведение
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost) //добавляем новый пост путем полного копирования массива(чтобы не мутировать)
        setPost({ title: '', body: '' })
    }
    return (
        <form>
            {/* Управляемый компонент*/}
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type='text'
                placeholder='Название поста'
            />

            <MyInput
                onChange={e => setPost({ ...post, body: e.target.value })}
                value={post.body}
                type='text'
                placeholder='Описание поста'
            />
            {/* Неуправляемый\Неконтролируемый компонент*/}
            {/* <MyInput ref={bodyInputRef} type='text' placeholder='Описание поста' /> */}
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    )
}

export default PostForm
