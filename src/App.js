import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import FirstPage from "./page/FirstPage";
import SecondPage from "./page/SecondPage";
import ThreePage from "./page/ThreePage";
import FourPage from "./page/FourPage";
import FivePage from "./page/FivePage";
import SixPage from "./page/SixPage";
import SevenPage from "./page/SevenPage";
import EightPage from "./page/EightPage";
import NightPage from "./page/NightPage";
import TenPage from "./page/TenPage";
import DataPage from "./page/DataPage";
import PricePage from "./page/PricePage";
import { Provider } from "react-redux";
import store from "./store/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'


const App = () => {
  return (
    <Provider store={store}>
      <div>
        <HashRouter>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <LinkContainer to="/DataPage">
                    <Nav.Link>DataPage</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/PricePage">
                    <Nav.Link>PricePage</Nav.Link>
                  </LinkContainer>
                  <NavDropdown title="TestPage" id="basic-nav-dropdown">
                    <LinkContainer to="/FirstPage">
                      <Nav.Link>FirstPage</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/SecondPage">
                      <Nav.Link>SecondPage</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/ThreePage">
                      <Nav.Link>ThreePage</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/FourPage">
                      <Nav.Link>FourPage</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/FivePage">
                      <Nav.Link>FivePage</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/SixPage">
                      <Nav.Link>SixPage</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/SevenPage">
                      <Nav.Link>SevenPage</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/EightPage">
                      <Nav.Link>EightPage</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/NightPage">
                      <Nav.Link>NightPage</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/TenPage">
                      <Nav.Link>TenPage</Nav.Link>
                    </LinkContainer>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/FirstPage" element={<FirstPage />} />
            <Route path="/SecondPage" element={<SecondPage />} />
            <Route path="/ThreePage" element={<ThreePage />} />
            <Route path="/FourPage" element={<FourPage />} />
            <Route path="/FivePage" element={<FivePage />} />
            <Route path="/SixPage" element={<SixPage />} />
            <Route path="/SevenPage" element={<SevenPage />} />
            <Route path="/EightPage" element={<EightPage />} />
            <Route path="/NightPage" element={<NightPage />} />
            <Route path="/TenPage" element={<TenPage />} />
            <Route path="/DataPage" element={<DataPage />} />
            <Route path="/PricePage" element={<PricePage />} />
          </Routes>
        </HashRouter>
      </div>
    </Provider>
  );
};

export default App;
