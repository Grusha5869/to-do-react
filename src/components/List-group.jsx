import RemoveBtn from './Input-group-btn'
import EditBtn from './Info-btn'
import DeadlineBtn from './Deadline-btn'
import CalendarDeadline from './Input-deadline'
import { useEffect, useRef, useState } from 'react'

export default function ListGroup({identif, content, onClick, onRemove, completed, items, setItems}) {
    const [valueMain, setValueMain] = useState(content)
    const [edit, setEdit] = useState(false)
    const inputRef = useRef(null)

    const [inputDd, setInputDd] = useState(false)
    const [inputValueDd, setInputValueDd] = useState('')
    const inputDdRef = useRef(null)
    const currentItem = items.find(item => item.id === identif)
    const [dateDd, setDateDd] = useState(currentItem?.deadline || null)


    useEffect(() => {
        const item = items.find(item => item.id === identif)
        setDateDd(item?.deadline || null)
    }, [items, identif])
    useEffect(() => {
        if (edit && inputRef.current) {
            inputRef.current.focus()
            inputRef.current.select()
        }
    }, [edit])
    useEffect(() => {
        if (inputDd && inputDdRef.current) {
            inputDdRef.current.focus()
            inputDdRef.current.select()
        }
    }, [inputDd])
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime()
            const date = new Date(dateDd).getTime()
            const difference = date - now
            if (difference >= 0) {
                removeDeadline()
            }
        }, 60 * 60 * 1000)

        return () => clearInterval(interval)
    }, [dateDd])

    function onKeyDownEnterListInput(event) {
        if (event.key === 'Enter') {   
            
            if (valueMain.trim() === '') {
                setValueMain(content)
                setEdit(false)
            } else {
                setItems(prevItems => prevItems.map(elem => elem.text === content ? {...elem, text: valueMain.trim()} : elem)
                )
                setEdit(false)
            }
        } else if (event.key === 'Escape') {
            setValueMain(content)
            setEdit(false)
        }
    }
    function onBlurEdit() {
        if (valueMain.trim() === '') {
            setValueMain(content)
            setEdit(false)
        } else {
            setItems(prevItems => prevItems.map(elem => elem.text === content ? {...elem, text: valueMain.trim()} : elem)
            )
            setEdit(false)
        }
    }
    function handleChange(event) {
        let value = event.target.value;
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;
        
        
        if (dateString <= value) {

            setItems(prevItems => prevItems.map(item => 
                identif === item.id ? { ...item, deadline: value} : item
            ))
            setInputValueDd(value)
            inputDdRef.current.style.border = ''
            setInputDd(false)
            setDateDd(true)
        } else {
            inputDdRef.current.style.border = '1px solid red'
        }
    } 
    function onBlurDeadline() {
        setInputDd(false)
    }
    function removeDeadline() {
        setDateDd(false)
        setItems(prevItems => prevItems.map(item => 
            identif === item.id ? {...item, deadline: null} : item 
        ))
    }
    return (
        <div className="list-elem" style={{opacity: completed ? '0.5' : '1'}}>
            <div className="top">
                <div className="list-elem__wrapper">
                    {edit ? (
                        <input 
                            ref={inputRef}
                            type="text"
                            name='list-input'
                            className="list-elem__input"  
                            value={valueMain}
                            onChange={event => setValueMain(event.target.value)}
                            onKeyDown={event => onKeyDownEnterListInput(event)}
                            onBlur={onBlurEdit}
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
                    {dateDd && (
                        <div onDoubleClick={removeDeadline} className="time-deadline">
                            <span className='time-deadline-imoji'>📅</span>
                            {inputValueDd ? inputValueDd : dateDd}
                        </div>
                    )}
                    {inputDd ? (
                        <CalendarDeadline
                            type={'date'}
                            ref={inputDdRef}
                            onChange={event => handleChange(event)}
                            onBlur={onBlurDeadline}
                            value={inputValueDd}
                        />
                    ) : (
                        <DeadlineBtn 
                            src='/images/deadline.svg'
                            alt='Запланировать задачу'
                            title='Запланировать задачу'
                            onClick={() => completed ? setInputDd(false) : setInputDd(!inputDd)}
                        />
                    )}

                    <EditBtn 
                        src='/images/353430-checkbox-edit-pen-pencil_107516.svg' alt='Редактировать задачу'
                        title='Редактировать задачу'
                        onClick={() => setEdit(!edit)}
                    />

                    <RemoveBtn style={{transform: 'rotate(45deg)'}} onClick={onRemove} title={'Удалить задачу'} />
                </div>
            </div>
        </div>
        
    )
}