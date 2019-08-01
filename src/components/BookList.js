import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext
  render() { 
    const {isLightTheme, light, dark} = this.context
    const theme = isLightTheme ? light : dark
    const bg = { background : theme.ui }
    const txt = ["the way of kings", "the name of the wind", "the final empire"]

    return ( 
      <div className="book-list" style = {{ color: theme.syntax, background: theme.bg}}>
        <ul>
          {
            txt.map(x => <li key = {x} style = {bg}>{x}</li>)
          }
        </ul>
      </div>
    );
  }
}
 
export default BookList;