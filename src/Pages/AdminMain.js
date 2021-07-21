import { Form } from "react-bootstrap"
import React, { Component, useState } from 'react'
import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://site/',
});

function AdminMain() {

    const aaa = {
        data: {
            zag: '', a: '', adress: '', text: ''
        }
    }

    const [state, setState] = useState(aaa);

    const onChangeValue = (e) => { setState({ ...state, data: { ...state.data, [e.target.name]: e.target.value } }); }

    const Otpr = async (page) => {
        const sendInfo = await Axios.post('otpr.php', {
            zag: page.zag,
            a: page.a,
            adress: page.adress,
            text: page.text
        });
        return sendInfo.data;
    }

    const submitForm = async (e) => {
        console.log(state.data);
        e.preventDefault();
        const data1 = await Otpr(state.data);
        setState({ ...aaa });
    }
    return (
        <>
            <Form onSubmit={submitForm}>
                <h1> Заголовок главной страницы </h1>
                <input name="zag" type="text" defaultvalue={state.data.zag} onChange={onChangeValue}></input>
                <h1> Ссылка главной страницы </h1>
                <input name="a" type="text" defaultvalue={state.data.a} onChange={onChangeValue}></input>
                <h1> Адрес ссылки главной страницы </h1>
                <input name="adress" type="text" defaultvalue={state.data.adress} onChange={onChangeValue}></input>
                <h1> Текст главной страницы </h1>
                <input name="text" type="text" defaultvalue={state.data.text} onChange={onChangeValue}></input>
                <br></br>
                <br></br>
                <button type="submit"> Сохранить содержимое главной страницы </button>
            </Form>

        </>
    )
}

export default AdminMain