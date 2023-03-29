import React from 'react'
import cl from './MyModal.module.css'

const MyModal = ({ children, visible, setVisible }) => {
    const rootClasses = [cl.myModal]

    if (visible) {
        rootClasses.push(cl.active) // добавляем класс active при клике
    }
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={e => e.stopPropagation()}>
                {' '}
                {/*e.stopPropagation() делает так чтобы онКлик не срабатывал на этом блоке */}
                {children}
            </div>
        </div>
    )
}

export default MyModal
