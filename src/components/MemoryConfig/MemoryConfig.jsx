import React, {useState} from 'react'; // состояние и весь остальной код по аналогии как в ColorCheck
import './MemoryConfig.css';
import memories from "./memoryData";

// Выбор конфигурации памяти айфона
// все так же по аналогии с выбором цвета

function MemoryConfig() {

    const [activedMemory, setActivedMemory] = useState(0); 
    const memoryName = memories[activedMemory];
    const handleClick = (event, target) => { // задаю команду, которую я хочу вызывать при клике на div с картинками
        setActivedMemory(target); // - установить активный бокс
    } 

    return ( 

    <div className="memory-check">
        <h3 className="heading3">Конфигурация памяти: <strong>{memoryName}</strong></h3>
        <div className="memory-btn">


            {memories.map((memory, index) => {
                const actived = index === activedMemory; // ставлю например значение нулевого индекса из массива, т.е 128Гб
                const checkedMemory = actived ? 'checked-btn' : '';
                return ( 
                    <button className={`memory-btn__btn btn ${checkedMemory}`} key={memory} onClick={(event) => handleClick(event, index)}>{memory}</button>
                )
            })}



        </div>
    </div>

    );
}
    export default MemoryConfig;