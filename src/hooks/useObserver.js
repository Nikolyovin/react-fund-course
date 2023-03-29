import { useEffect, useRef } from 'react'

// принимает реф ссылку за каким наблюдать объектом и сам коллбэк, canLoad это будет булевое значение которое ограничивает выполнение(в случае бесконечной загрузки это page < totalPage )
export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef()
    useEffect(() => {
        if (isLoading) return //нужно чтобы лишнии перерендеры не происходили
        if (observer.current) observer.current.disconnect() //нужно чтобы лишнии перерендеры не происходили
        var cb = function (entries, observer) {
            //нужно чтобы срабатывало только по первому попаданию в зону видимости
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
            /* Content excerpted, show below */
        }
        observer.current = new IntersectionObserver(cb) // помещаем в current с помощью useRef
        observer.current.observe(ref.current) // указываем за каким элементом следить, lastElement это последний элемент тоже через useref
    }, [isLoading])
}
