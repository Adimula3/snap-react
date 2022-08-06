import React from "react";
import { slide as Menu } from 'react-burger-menu';
import {NavDropdown} from "react-bootstrap";
import IconTodo from "../assets/icon-todo.svg";
import IconCalender from "../assets/icon-calendar.svg";
import IconRemainder from "../assets/icon-reminders.svg";
import IconPlanning from "../assets/icon-planning.svg";
import IconMenu from "../assets/icon-menu.svg";
import IconCloseMenu from "../assets/icon-close-menu.svg";
import '../styles/style.css';

const MobileNav = () => {
    return (
        <div className="mobileNav">
            <Menu width={ '270px' }  right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }
                  customBurgerIcon={<img src={IconMenu} alt=""/>} customCrossIcon={ <img src={IconCloseMenu} alt=""/> } >
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
                    <NavDropdown title="Company" id="basic-nav-dropdown">
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
                    <li className="nav-items">
                        <a className="nav-link " href="https://">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link boxs" href="https://">Register</a>
                    </li>
                </ul>
            </Menu>
        </div>
    );
}
export default MobileNav;
