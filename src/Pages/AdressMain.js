import React, {useState, useEffect} from 'react';
import "./MainPage.css";

function AdressMain() {

    const [t1,setT1] = useState('');

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
            setT1(response);
        })

    return(
        <>
            {t1}
        </>
    )
}

export default AdressMain;