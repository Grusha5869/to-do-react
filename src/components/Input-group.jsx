import { useEffect, useRef, useState } from 'react'
import BtnInputGroup from './Input-group-btn'
import ListGroup from './List-group'

export default function InputGroup({placeholder, type}) {
    const [items, setItems] = useState(getLocalStorage('tasks') || [])
    const inputRef = useRef(null)
    function onKeyDownEnter(event) {
        if (event.key === 'Enter') {
            addItem()
        }
    }
    function addItem() {
        const inputValue = inputRef.current.value
        if (inputValue.trim()) {
            setItems(prevItems => [...prevItems, {
                id: Date.now().toString(),
                text: inputValue,
                completed: false
            }])
            inputRef.current.value = '';
            inputRef.current.style.border = ''
        } else {
            inputRef.current.style.border = '1px solid red'
        }
    }
    function setLocalStorage(task, data) {
        localStorage.setItem(task, JSON.stringify(data))
    }
    function getLocalStorage(nameItem) {
        return JSON.parse(localStorage.getItem(nameItem))
    }
    function removeItem(id) {
        setItems(prevItems => prevItems.filter(item => item.id !== id))
    }
    function completedTask(id) {
        setItems(prevItems => prevItems.map(item => 
            item.id === id ? { ...item, completed: !item.completed } : item
        ));
    }

    useEffect(() => {
        setLocalStorage('tasks', items)
        
    }, [items])
    return (
        <>
            <div className="input-group">
                <input 
                    ref={inputRef}
                    placeholder={placeholder} 
                    className="input-group__user-input" 
                    type={type} 
                    onKeyDown={onKeyDownEnter}>
                </input>
                <BtnInputGroup onClick={addItem} />
            </div>
            <div className="list-group">
                {items.map((item) => (
                    <ListGroup 
                        key={item.id} 
                        content={item.text} 
                        onClick={() => {
                            completedTask(item.id)
                        }}
                        onRemove={() => removeItem(item.id)}
                        completed={item.completed}
                        items={items}
                        setItems={setItems}
                     />
                ))}
            </div>
        </>
    )
}