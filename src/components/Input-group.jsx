export default function InputGroup({placeholder, type}) {
    return (
        <div className="input-group">
            <input placeholder={placeholder} class="input-group__user-input" type={type}></input>
            <button class="input-group__btn">
                <div class="add">
                    <div class="add__base add1"></div>
                    <div class="add__base add2"></div>
                </div>
            </button>
        </div>
    )
}