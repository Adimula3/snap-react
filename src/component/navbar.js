import React from "react";
import '../styles/style.css';
import {NavDropdown} from "react-bootstrap";
import IconCalender from '../assets/icon-calendar.svg';
import IconPlanning from '../assets/icon-planning.svg';
import IconRemainder from '../assets/icon-reminders.svg';
import IconTodo from '../assets/icon-todo.svg';


const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg d-flex">
            <div className="container">
                <a className="navbar-brand" href="https://">snap</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <NavDropdown title="Features" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1"><img src={IconTodo} alt=""/>Todo list</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2"><img src={IconCalender} alt=""/>
                           Calender
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3"><img src={IconRemainder} alt=""/>Remainders</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4"><img src={IconPlanning} alt=""/>
                            Planning
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Company" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">History</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Our Team
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
                    </NavDropdown>
                    <li className="nav-item">
                        <a className="nav-link" href="https://">Careers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link right-nav" href="https://">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link box" href="https://">Register</a>
                    </li>
                </ul>
            </div>
        </nav>


    )
};


export default Navbar;
