import React, {Component} from 'react'
import "./ThirdPage.css"

export default class Third extends Component {
    render() {
        return(
            <div className="Third-div">
                <h1 className="Third-zag">    Заголовок третьей страницы    </h1>
                <text className="Third-text">
                    Текст третьей страницы
                </text>
            </div>
        )
    }
}