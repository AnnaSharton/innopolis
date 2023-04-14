import React, {useState} from 'react';
import './Form.css';

export default function Form() {

const [name, setName] = useState (() => {
    const saved = localStorage.getItem('newUserName');
    return saved || '';
});   
const [score, setScore] = useState (() => {
    const saved = localStorage.getItem('newUserScore');
    return saved || '';
}); 
const [errorScore, setErrorScore] = useState (() => {
    const saved = localStorage.getItem('errorScore');
    return saved || '';
});
const [errorName, setErrorName] = useState (() => {
    const saved = localStorage.getItem('errorName');
    return saved || '';
});



let userName;
let userScore;
let showErrorName;
let showErrorScore;


        //создаю функцию которая срабатывает, когда пользователь вводит текст в поле инпут имя:
        function saveUserName(event) {
            userName = event.target.value; //получаю значения из поля инпут
            console.log(userName); //оставляю для теста
            localStorage.setItem('newUserName', userName); //сохраняю в локальной памяти 
            setName(userName);  // задаю новое значение для состояния переменной name
        }

        //все по аналогии для инпут "оценка":
        function saveUserScore(event) {
            userScore = event.target.value;
            console.log(userScore); 
            localStorage.setItem('newUserScore', userScore);
            setScore(userScore);
        }
        // функция скрывает сообщения об ошибках имени и оценки если юзер повторно кликает в поле инпут чтобы ввести другое значение
        function handleChangeText() {
            localStorage.removeItem('errorName');
            localStorage.removeItem('errorScore');
            setErrorName('');
            setErrorScore('');
        }
     
        //создаю функцию для отправки формы:
        function handleSubmit(event) {
        //предотвращаю отправку формы
           event.preventDefault();
        //условия валидации  
            if (!name) {
                showErrorName = 'Вы не заполнили поле с именем';
                console.log(showErrorName);    
                localStorage.setItem('errorName', showErrorName);
                setErrorName(showErrorName);
                
            }
            else if (name.length === 1) {    
                showErrorName = 'Имя не может быть меньше 2 символов'
                console.log(showErrorName); 
                localStorage.setItem('errorName', showErrorName);
                setErrorName(showErrorName);
            //     return;
             }
            else if (score < 1 || score > 5) { //тож самое для поля с оценкой:   
               showErrorScore =  'Оценка должна быть от 1 до 5'; 
               console.log(showErrorScore);
               localStorage.setItem('errorScore', showErrorScore);
               setErrorScore(showErrorScore);
            //     return;        
            }
            else { // если все ок, очищаю поля ввода и локальную память (наверно коряво сделано, но только так мне удалось очистить инпуты и локал сторэдж после отправки формы без ошибок в консоли...)
            // пробовала запись типа  setScore(localStorage.removeItem('newUserScore')) - НО консоль выдает ошибку (A component is changing a controlled input to be uncontrolled), хотя код работает
                alert('Форма успешно отправлена');
                localStorage.removeItem('newUserName');
                localStorage.removeItem('newUserScore');
                localStorage.removeItem('errorName');
                localStorage.removeItem('errorScore');
                setScore('');
                setName('');
                setErrorName('');
                setErrorScore('');
                return;   
            }
        }


    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-inner">
                <legend>
                    <span className="form-inner__span">Добавить свой отзыв</span>
                </legend>

                    {/* <div className="input-name-rate"> */}
                        
                        <div className="name-rate">
                            
                            {/* достаю из инпутов введенные пользователем значения с помощью событий onInput */}
                            <div className="name-box">
                                <input 
                                    onInput={saveUserName} 
                                    onClick={handleChangeText}
                                    className="name-rate__name" 
                                    type="text" 
                                    placeholder="Имя и фамилия" 
                                    value={name}>
                                </input>
                                {/* вывожу класс для бокса с ошибкой только в случае если существует значение в переменной errorName */}
                                <div className={`hidden-name ${errorName ? 'name-error' : ''}`}>{errorName}</div>
                            </div>

                            <div className="rate-box">

                                <input 
                                    onInput={saveUserScore} 
                                    onClick={handleChangeText}
                                    className="name-rate__rate" 
                                    type="text" 
                                    placeholder="Оценка" 
                                    value={score}>
                                </input>
                                <div className={`hidden-rate ${errorScore ? 'rate-error' : ''}`}>{errorScore}</div>

                            </div>

                        </div>

                <textarea className="form-inner__textarea-review" name="review" placeholder="Текст отзыва"></textarea>
                <input className="form-inner__btn btn-orange" type="submit"  value="Отправить отзыв"></input>
            
            </div>
        </form>
    );
}