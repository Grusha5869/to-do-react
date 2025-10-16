export default function InputDeadlineBtn({ref, type, onChange, onKeyDown, onBlur}) {
    return (
        <input 
            type={type} 
            className="input-deadline" 
            ref={ref}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
        />
    )
}