import React, {useState, useEffect} from 'react';
import "./MainPage.css";

function TextThird() {

    const [t1,setT1] = useState('');

        fetch("http://site/textThird.php",{
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
            <text className="Third-text">
                    {t1}
                </text>
        </>
    )
}

export default TextThird;