import React from 'react';
import '../index.css';

const Navbar = ({ nav1, nav2, nav3, classList, test }) => {
    return (
        <ul id='navigation' data-test={test}>
            <li className={classList}>{nav1}</li>
            <li className={classList}>{nav2}</li>
            <li className={classList}>{nav3}</li>
        </ul>
    )
}

    Navbar.defaultProps = {
        nav1: 'Fotografia',
        nav2: 'O mne',
        nav3: 'Kontakt',
        classList: 'navList',
        test: 'testNav'
    }


export default Navbar;