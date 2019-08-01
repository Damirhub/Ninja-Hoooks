import React, { createContext, Component, useState } from 'react'

export const ThemeContext = createContext()

export default class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: {syntax: '#555', ui: '#ddd', bg: '#eee'},
        dark:  {syntax: '#ddd', ui: '#333', bg: '#555'}
    }

    render() {
        return (
            <ThemeContext.Provider value = {{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

// const ThemeContextProvider = ( {children}) => {
//     const [state] = useState({
//         isLightTheme: true,
//         light: {syntax: '#555', ui: '#ddd', bg: '#eee'},
//         dark:  {syntax: '#ddd', ui: '#333', bg: '#555'}
//     })

//         return (
//             <ThemeContext.Provider value = {{...state}}>
//                 {children}
//             </ThemeContext.Provider>
//         )
    
// }

// export default ThemeContextProvider