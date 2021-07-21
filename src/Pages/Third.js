import axios from 'axios'
import React, {Component} from 'react'
import TextThird from './TextThird'
import "./ThirdPage.css"
import ZagThird from './ZagThird'



function Third(){

        return(
            <div className="Third-div">
                <ZagThird/>
                <TextThird/>
            </div>
        )
    
}

export default Third