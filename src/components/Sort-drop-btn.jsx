export default function SortDropBtn({text, onClick}) {
    return (
        <button onClick={onClick} className="sort-drop-wrapper__btn">{text}</button>
    )
}