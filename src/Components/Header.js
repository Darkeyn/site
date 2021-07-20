import React, {Component} from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import Main from '../Pages/Main';
import Second from '../Pages/Second';
import Third from '../Pages/Third';
import Admin from '../Pages/Adminpanel';


export default class Header extends Component {
    render() {
        return(
            <>
            <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Главная страница</Nav.Link>
                            <Nav.Link href="/second">Вторая страница</Nav.Link>
                            <Nav.Link href="/third">Третья страница</Nav.Link> 
                            <Nav.Link href="/admin">Админ панель</Nav.Link> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/second" component={Second} />
                    <Route exact path="/third" component={Third} />
                    <Route exact path="/admin" component={Admin} />
                </Switch>
            </Router>

            </>
        )
    }
}