import { useState ,useEffect } from 'react'
import InfoBtn from './Info-btn'
export default function InfoBlock({showInfo, setShowInfo}) {

    const [className, setClassName] = useState('to-do-base to-do-info-proj');
    useEffect(() => {
        const timer = setTimeout(() => {
            setClassName('to-do-base to-do-info-proj animOpacity')
        }, 100)
        return () => clearTimeout(timer)
    }, []);

    return (
        <div className={className}>
            <div className="title">
                <h1>To-Do список дел</h1>
                <InfoBtn src='src/assets/watch_15501836.png' alt='О проекте' onClick={() => setShowInfo(!showInfo)} title='Скрыть' />
            </div>
            <p className="text-info">Сервис "Список дел" — это удобное и интуитивно понятное приложение, которое поможет вам организовать свои задачи и повысить продуктивность. <br /> <br />
            С его помощью вы сможете создавать, редактировать и удалять задачи, а также отслеживать прогресс.</p>
            <strong className='info-function__title'>Основные функции:</strong>
            <ul className="info-function">
                <li>Создание и удаление задач: Легко добавляйте и удаляйте новые задачи</li>
                <li>Интерфейс: Простой и понятный интерфейс, который доступен на разных устройствах.</li>
            </ul>
        </div>
    )
}