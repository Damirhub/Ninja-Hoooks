import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext
  render() { 
    const {isLightTheme, light, dark} = this.context
    const theme = isLightTheme ? light : dark
    const bg = { background : theme.ui }

    return ( 
      <div className="book-list">
        <ul>
          <li style = {bg}>the way of kings</li>
          <li style = {bg}>the name of the wind</li>
          <li style = {bg}>the final empire</li>
        </ul>
      </div>
    );
  }
}
 
export default BookList;