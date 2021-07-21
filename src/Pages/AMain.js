import React, {useState, useEffect} from 'react';
import AdressMain from './AdressMain';
import "./MainPage.css";

function AMain() {

    const [t1,setT1] = useState('');

        fetch("http://site/aMain.php",{
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

        const [t2,setT2] = useState('');

        fetch("http://site/adressMain.php",{
            method : 'POST',
            header : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({action : 1})
        })
        .then (response => response.text())
        .then(response => {
            console.log(response);
            setT2(response);
        })

    return(
        <>
            <a href={t2} className="Main-a"> {t1} </a>
        </>
    )
}

export default AMain;