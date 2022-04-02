import React from "react";
import '../App.css';

function Form() {
    let data = {
        email: '',
        password: ''
    };

    function handlerChanger(target) {
        console.log(target.value);
        data[target.className] = target.value;
    }

    return (
        <div>
            <form onSubmit={() => {
                if (data.email.length !== 0 || data.password.length !== 0) {
                    alert(data.email + " " + data.password)
                }
            }} className="form_auth">


                <input onChange={(event) => {
                    handlerChanger(event.target)
                }} className="email" type="email" placeholder="Введите e-mail"/>


                <input onChange={(event) => {
                    handlerChanger(event.target)
                }} className="password" type="password" placeholder="Введите пароль"/>


                <button className="enter">Войти</button>
            </form>
        </div>
    )
}

export default Form;