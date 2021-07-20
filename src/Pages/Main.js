import React, {Component} from 'react'
import image from "../Image/icon.png";
import "./MainPage.css"

export default class Main extends Component {
    render() {
        return(
            <div className="Main-div">
            <h1 className="Main-zag">    Заголовок главной страницы    </h1>
            <a href="/" className="Main-a"> Ссылка на главную страницу </a>
            <h2> </h2>
            <img
                src={image}
                height="300"
                width="300"
                className="Main-img"
                alt="Img"
            />
            <h3> </h3>
            <text className="Main-text">
                Текст главной страницы
            </text>
        </div>
        )
    }
}