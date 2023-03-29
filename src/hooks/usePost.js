import { useMemo } from 'react'

export const useSortedPosts = (posts, sort) => {
    // useMemo кеширует выполнение вычислений и срабатывает, только тогда, когда меняется что-то из массива [selectedSort, posts]
    const sortedPosts = useMemo(() => {
        console.log('Отработала функция сортировки')
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort])) //sort мутирует массив поэтому копируем его. localeCompare сравнивает звуки
        }
        return posts
    }, [sort, posts])

    return sortedPosts
}

export const usePosts = (posts, sort, query) => {
    //для поиска. тут получиться и отсортированный и отфильтрованный массив
    const sortedPosts = useSortedPosts(posts, sort)

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPosts])
    return sortedAndSearchedPosts
}
