import React, {useState, useEffect} from 'react';
import "./MainPage.css";

function TextMain() {

    const [t1,setT1] = useState('');

        fetch("http://site/textMain.php",{
            method : 'POST',
            header : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({action : 1})
        })
        .then (response => response.text())
        .then(response => {
            console.log(response);
            setT1(response);
        })

    return(
        <>
            <text className="Main-text">
                {t1}
            </text>
        </>
    )
}

export default TextMain;