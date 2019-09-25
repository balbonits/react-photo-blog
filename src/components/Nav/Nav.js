import React from 'react';
import NavItem from './NavItem.js';
import './Nav.css';

const Nav = (props) => {
    return (<nav className={`${props.className} nav`}>
        <ul>
            <NavItem />
            <NavItem />
            <NavItem />
        </ul>
    </nav>);
}

export default Nav;