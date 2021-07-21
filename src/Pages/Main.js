import React, {Component} from 'react'
import image from "../Image/icon.png";
import AMain from './AMain';
import "./MainPage.css"
import MainZag from './MainZag';
import TextMain from './TextMain';

export default class Main extends Component {


    render() {


        return(
            <div className="Main-div">
                <MainZag/>
                <AMain/>
            <h2> </h2>
            <img
                src={image}
                height="300"
                width="300"
                className="Main-img"
                alt="Img"
            />
            <h3> </h3>
            <TextMain/>
        </div>
        )
    }
}