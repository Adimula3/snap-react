import React from "react";
import '../styles/style.css';
import {NavDropdown} from "react-bootstrap";
import IconCalender from '../assets/icon-calendar.svg';
import IconPlanning from '../assets/icon-planning.svg';
import IconRemainder from '../assets/icon-reminders.svg';
import IconTodo from '../assets/icon-todo.svg';
import Logo from '../assets/logo.svg';
import IconArrowUp from "../assets/icon-arrow-up.svg";


const Navbar = () => {
    return (

        <nav id="navbar" className="navbar navbar-expand-lg d-flex">
            <div className="container">
                <a className="navbar-brand" href="https://"><img src={Logo} alt="" /></a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <NavDropdown title="Features" id="basic-nav-dropdown">
                        <NavDropdown.Item href="https://"><img src={IconTodo} alt=""/>Todo list</NavDropdown.Item>
                        <NavDropdown.Item href="https://"><img src={IconCalender} alt=""/>
                           Calender
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://"><img src={IconRemainder} alt=""/>Remainders</NavDropdown.Item>
                        <NavDropdown.Item href="https://"><img src={IconPlanning} alt=""/>
                            Planning
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Company" id="basic-nav-dropdown"> <img src={IconArrowUp} alt=""/>
                        <NavDropdown.Item href="https://">History</NavDropdown.Item>
                        <NavDropdown.Item href="https://">
                          Our Team
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://">Blog</NavDropdown.Item>
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
