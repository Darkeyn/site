import React, {useState, useEffect} from 'react';
import "./MainPage.css";

function TextSecond() {

    const [t1,setT1] = useState('');

        fetch("http://site/textSecond.php",{
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
            <text className="Second-text">
                {t1}
            </text>
        </>
    )
}

export default TextSecond;