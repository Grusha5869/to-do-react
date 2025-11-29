import { useState } from "react"

export default function SortBtn({onClick, textContent, setTextContent}) {
    return (
        <button onClick={onClick} className="to-do-sort">Сортировать: {textContent}
            <img className='to-do-sort__img' src="/images/angle_down-48_46776.png" alt="раскрыть" />
        </button>
    )
}