//вычисляем количество страниц: делим общее количество элементов на количество элементов на странице и округляем
export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}
