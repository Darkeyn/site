import React, {Component, useState} from 'react'
import "./SecondPage.css"
import TextSecond from './TextSecond'
import ZagSecond from './ZagSecond'


function Second(){

        return(
            <div className="Second-div">
            <ZagSecond/>
            <TextSecond/>
            </div>
        )
    
}

export default Second