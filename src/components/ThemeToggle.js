import React, { Component, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

// export default class ThemeToggle extends Component {
//     static contextType = ThemeContext
//     render() {
//         const {toggleTheme} = this.context
//         return (
//             <div>
//                 <button onClick = {toggleTheme}>Toggle the theme</button>
//             </div>
//         )
//     }
// }

const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext)
    return (
        <div>
            <button onClick = {toggleTheme}>Toggle the theme</button>
        </div>
    );
};

export default ThemeToggle;