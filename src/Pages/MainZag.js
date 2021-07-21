import React, {useState, useEffect} from 'react';
import "./MainPage.css";

function MainZag() {

    const [t1,setT1] = useState('');

        fetch("http://site/zagMain.php",{
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
            <h1 className="Main-zag">    {t1}   </h1>
        </>
    )
}

export default MainZag;