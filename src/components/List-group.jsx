import RemoveBtn from './Input-group-btn'
import EditBtn from './Info-btn'
import { useEffect, useRef, useState } from 'react'

export default function ListGroup({content, onClick, onRemove, completed, items, setItems}) {
    const [value, setValue] = useState(content)
    const [edit, setEdit] = useState(false)
    const inputRef = useRef(null)

    useEffect(() => {
        if (edit && inputRef.current) {
            inputRef.current.focus()
            inputRef.current.select()
        }
    }, [edit])

    function onKeyDownEnter(event) {
        //по клику p меняеться на инпут и обратно
        //при нажатии на enter или кликнуть вне элемента, будет изменяться значение content. 
        
        if (event.key === 'Enter') {   
            
            if (value.trim() === '') {
                setValue(content)
                setEdit(false)
            } else {
                setItems(prevItems => prevItems.map(elem => elem.text === content ? {...elem, text: value.trim()} : elem)
                )
                setEdit(false)
            }
        } else if (event.key === 'Escape') {
            setValue(content)
            setEdit(false)
        }
    }
    function onBlur() {
        if (value.trim() === '') {
            setValue(content)
            setEdit(false)
        } else {
            setItems(prevItems => prevItems.map(elem => elem.text === content ? {...elem, text: value.trim()} : elem)
            )
            setEdit(false)
        }
    }

    return (
        <div className="list-elem" style={{opacity: completed ? '0.5' : '1'}}>
            <div className="list-elem__wrapper">
                {edit ? (
                    <input 
                        ref={inputRef}
                        type="text"
                        name='list-input'
                        className="list-elem__input"  
                        value={value}
                        onChange={event => setValue(event.target.value)}
                        onKeyDown={event => onKeyDownEnter(event)}
                        onBlur={onBlur}
                    />
                ) : (
                    <>
                        <input 
                            type="checkbox" 
                            name="list-checkbox" className="list-elem__checkbox" 
                            checked={completed} 
                            onChange={onClick}
                        />
                    
                        <p 
                            style={{
                                textDecoration: completed ? 'line-through' : 'none'
                            }} 
                            className="list-elem__text"
                            onClick={onClick}
                        >{content}</p>
                    </>
                )}

                
            </div>
            
            <div className="list-elem__wrapper-btn">
                <EditBtn 
                    src='src/assets/353430-checkbox-edit-pen-pencil_107516.svg' alt='Редактировать задачу'
                    title='Редактировать задачу'
                    onClick={() => setEdit(!edit)}
                />
                <RemoveBtn style={{transform: 'rotate(45deg)'}} onClick={onRemove} title={'Удалить задачу'} />
            </div>
        </div>
    )
}