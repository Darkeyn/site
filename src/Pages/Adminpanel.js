import React, {Component} from 'react'
import { Container, Col, Tab, Nav, Row, Form } from 'react-bootstrap'

export default class Adminpanel extends Component {

    MainPage = () => {
        document.getElementById("Zag1").value = 3
        document.getElementById("Text1").value = 5
    }

    SecondPage = () => {
        document.getElementById("Zag2").value = 2
        document.getElementById("Text2").value = 5
    }

    ThirdPage = () => {
        document.getElementById("Zag3").value = 3
        document.getElementById("Text3").value = 3
    }

    render() {
        return(
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="fir">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="felx-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" > Главная страница </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" > Вторая страница </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" > Третья страница </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <br></br>
                                    <Form.Label>Заголовок главной страницы:</Form.Label>
                                    <Form.Control type="text" id="Zag1"/>
                                    <br></br>
                                    <Form.Label>Наименование ссылки главной страницы:</Form.Label>
                                    <Form.Control type="text" id="A1"/>
                                    <br></br>
                                    <Form.Label>Адрес ссылки главной страницы:</Form.Label>
                                    <Form.Control type="text" id="Ad1"/>
                                    <br></br>
                                    <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Картинка на главной странице:</Form.Label>
                                        <br></br>
                                        <Form.Control type="file" />
                                    </Form.Group>
                                    <br></br>
                                    <Form.Label>Текст главной страницы страницы:</Form.Label>
                                    <Form.Control as="textarea" rows={3} id="Text1"/>
                                    <br></br>
                                    <button onClick={this.MainPage}> Применить изменения </button>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <br></br>
                                    <Form.Label>Заголовок второй страницы:</Form.Label>
                                    <Form.Control type="text" id="Zag2"/>
                                    <br></br>
                                    <Form.Label>Текст второй страницы:</Form.Label>
                                    <Form.Control as="textarea" rows={3} id="Text2"/>
                                    <br></br>
                                    <button onClick={this.SecondPage}> Применить изменения </button>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <br></br>
                                    <Form.Label>Заголовок третьей страницы:</Form.Label>
                                    <Form.Control type="text" id="Zag3"/>
                                    <br></br>
                                    <Form.Label>Текст третьей страницы:</Form.Label>
                                    <Form.Control as="textarea" rows={3} id="Text3"/>
                                    <br></br>
                                    <button onClick={this.ThirdPage}> Применить изменения </button>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}