import React from 'react';
import {FaPizzaSlice} from 'react-icons/fa';

export const Header = () => {
    return <header className = "header" data-testid="header">
        <nav>
            <div className="logo">
                <img src="/images/logo.png" alt="Todoist"/>

            </div>
            <dic className = "settings">
                <ul>
                    <li>+</li>
                    <lis>
                        <FaPizzaSlice/>
                    </lis>
                </ul>
            </dic>
        </nav>
    </header>
}