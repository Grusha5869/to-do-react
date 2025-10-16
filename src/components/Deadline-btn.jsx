export default function DeadlineBtn({src, alt, onClick, title}) {
    return (
        <button className="to-do-btn" title={title} onClick={onClick}>
            <img src={src} alt={alt} className="to-do-btn-deadline__img" />
        </button>
    )
}