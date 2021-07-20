import React, {Component} from 'react'
import "./SecondPage.css"

export default class Second extends Component {
    render() {
        return(
            <div className="Second-div">
            <h1 className="Second-zag">    Заголовок второй страницы    </h1>
            <text className="Second-text">
                Текст второй страницы
            </text>
            </div>
        )
    }
}