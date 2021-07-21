import React, {Component} from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import Main from '../Pages/Main';
import Second from '../Pages/Second';
import Third from '../Pages/Third';
import AdminMain from '../Pages/AdminMain';
import AdminSecond from '../Pages/AdminSecond';
import AdminThird from '../Pages/AdminThird';


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
                            <Nav.Link href="/admin">Админ панель - первая страница</Nav.Link>
                            
                            <Nav.Link href="/admin2">Админ панель - вторая страница</Nav.Link> 
                            <Nav.Link href="/admin3">Админ панель - третья страница</Nav.Link> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/second" component={Second} />
                    <Route exact path="/third" component={Third} />
                    <Route exact path="/admin" component={AdminMain} />
                    <Route exact path="/admin2" component={AdminSecond} />
                    <Route exact path="/admin3" component={AdminThird} />
                </Switch>
            </Router>

            </>
        )
    }
}