import { useState } from 'react'
import BtnInputGroup from './Input-group-btn'
export default function ListGroup({content, onClick, onRemove, completed}) {
    
    return (
        <div className="list-elem" style={{opacity: completed ? '0.8' : 'none'}}>
            <div className="list-elem__wrapper">
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
            </div>
            <BtnInputGroup style={{transform: 'rotate(45deg)'}} onClick={onRemove} />
        </div>
    )
}