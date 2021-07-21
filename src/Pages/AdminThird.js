import { Form } from "react-bootstrap"
import React, { Component, useState } from 'react'
import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://site/',
});

function AdminThird() {

    const aaa = {
        data: {
            zag: '', text: ''
        }
    }

    const [state, setState] = useState(aaa);

    const onChangeValue = (e) => { setState({ ...state, data: { ...state.data, [e.target.name]: e.target.value } }); }

    const Otpr = async (page) => {
        const sendInfo = await Axios.post('otpr3.php', {
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
                <h1> Заголовок третьей страницы </h1>
                <input name="zag" type="text" defaultvalue={state.data.zag} onChange={onChangeValue}></input>
                <h1> Текст третьей страницы </h1>
                <input name="text" type="text" defaultvalue={state.data.text} onChange={onChangeValue}></input>
                <br></br>
                <br></br>
                <button type="submit"> Сохранить содержимое третьей страницы </button>
            </Form>

        </>
    )
}

export default AdminThird