export default function InfoBtn({src, alt}) {
    return (
        <button className="to-do-btn">
            <img src={src} alt={alt} className="to-do-btn__img" />
        </button>
    )
}