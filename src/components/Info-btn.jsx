export default function InfoBtn({src, alt, onClick}) {
    return (
        <button className="to-do-btn">
            <img src={src} alt={alt} className="to-do-btn__img" onClick={onClick} />
        </button>
    )
}