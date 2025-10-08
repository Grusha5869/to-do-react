export default function InputGroupBtn({onClick, style}) {
    return (
        <button onClick={onClick} className="input-group__btn">
            <div className="add"  style={style}>
                <div className="add__base add1"></div>
                <div className="add__base add2"></div>
            </div>
        </button>
    )
}