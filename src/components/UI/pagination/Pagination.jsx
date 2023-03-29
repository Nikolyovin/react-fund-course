import React from 'react'
import { usePagination } from '../../../hooks/usePagination'

const Pagination = ({ page, totalPages, setPage }) => {
    //хук который считает пагинацию и useMemo чтобы избежать лишних перерендеров
    let pagesArray = usePagination(totalPages)
    return (
        <div className='page__wrapper'>
            {pagesArray.map(p => (
                <span className={page === p ? 'page page__current' : 'page'} key={p} onClick={() => setPage(p)}>
                    {p}
                </span>
            ))}
        </div>
    )
}

export default Pagination
