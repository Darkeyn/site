import { Form } from "react-bootstrap"
import React, { Component, useState } from 'react'
import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://site/',
});

function AdminSecond() {

    const aaa = {
        data: {
            zag: '', text: ''
        }
    }

    const [state, setState] = useState(aaa);

    const onChangeValue = (e) => { setState({ ...state, data: { ...state.data, [e.target.name]: e.target.value } }); }

    const Otpr = async (page) => {
        const sendInfo = await Axios.post('otpr2.php', {
            zag: page.zag,
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
                <h1> Заголовок второй страницы </h1>
                <input name="zag" type="text" defaultvalue={state.data.zag} onChange={onChangeValue}></input>
                <h1> Текст второй страницы </h1>
                <input name="text" type="text" defaultvalue={state.data.text} onChange={onChangeValue}></input>
                <br></br>
                <br></br>
                <button type="submit"> Сохранить содержимое второй страницы </button>
            </Form>

        </>
    )
}

export default AdminSecond