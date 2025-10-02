export default function InfoBtn({src, alt, onClick, title}) {
    return (
        <button className="to-do-btn" title={title}>
            <img src={src} alt={alt} className="to-do-btn__img" onClick={onClick} />
        </button>
    )
}