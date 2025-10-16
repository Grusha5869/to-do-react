import Button from './Sort-drop-btn'
export default function SortDrop({items, setItems, drop, setDrop, textContent, setTextContent}) {
    function handleClick(text) {
        setDrop(false)
        setTextContent(text)
    }
    function dataSortMore() {
        handleClick('По дате');
        setItems([...items].sort((a, b) => b.id - a.id))
    }
    function dataSortLess() {
        handleClick('По дате');
        setItems([...items].sort((a, b) => a.id - b.id))
    }
    function completedFirstSort() {
        handleClick('По статусу выполнения'); 
        setItems([...items].sort((a, b) => {
            if (a.completed < b.completed) return 1;
            if (a.completed > b.completed) return -1;
            return 0;
        }))
    }
    function notCompletedFirstSort() {
        handleClick('По статусу выполнения'); 
        setItems([...items].sort((a, b) => {
            if (a.completed > b.completed) return 1;
            if (a.completed < b.completed) return -1;
            return 0;
        }))
    }

    return (
        <div className='sort-drop-wrapper'>
            <Button 
                text={'По умолчанию'}
                onClick={() => handleClick('По умолчанию')}
            />
            <hr className='sort-hr'/>
            <span>По дате</span>
            <Button 
                text={'Сначала новые'}
                onClick={dataSortLess}
            />
            <Button 
                text={'Сначала старые'}
                onClick={dataSortMore}
            />
            <hr className='sort-hr'/>
            <span>По статусу выполнения</span>
            <Button 
                text={'Сначала выполненные'}
                onClick={completedFirstSort}
            />
            <Button 
                text={'Сначала не выполненные'}
                onClick={notCompletedFirstSort}
            />
            <hr className='sort-hr'/>
            <span>По дедлайну</span>
            <Button 
                text={'Сначала новые'}
                onClick={() => handleClick('По дедлайну')}
            />
            <Button 
                text={'Сначала старые'}
                onClick={() => handleClick('По дедлайну')}
            />
        </div>
    )
}