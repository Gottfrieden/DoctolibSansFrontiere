import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/user/patient'>Register as a Patient</Link>
                    </li>
                    <li>
                        <Link to='/user/doctor'>Register as a Doctor</Link>
                    </li>
                    <li>
                        <Link to='/user/patient/:id/agenda'>Agenda</Link>
                    </li>
                    <li>
                        <Link to='/user/patient/:id/prescription'>My Prescriptions</Link>
                    </li>
                    <li>
                        <Link to='/user/patient/:id'>My account</Link>
                    </li>
                    <li>
                        <Link to='/user/doctor/:id/prescription/new'>New Prescription</Link>
                    </li>
                    <li>
                        <Link to='/user/doctor/:id/prescription/history'>Prescriptions History</Link>
                    </li>
                    <li>
                        <Link to='/user/doctor/:id'>My account</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
