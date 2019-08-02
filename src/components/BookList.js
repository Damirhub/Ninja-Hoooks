import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';
import uuid from 'uuid/v1'

// export default class BookList extends Component {
//   static contextType = ThemeContext
//   render() { 
//     const {isLightTheme, light, dark} = this.context
//     const theme = isLightTheme ? light : dark
//     const bg = { background : theme.ui }
//     const txt = ["the way of kings", "the name of the wind", "the final empire"]

//     return ( 
//       <div className="book-list" style = {{ color: theme.syntax, background: theme.bg}}>
//         <ul>
//           {
//             txt.map(x => <li key = {x} style = {bg}>{x}</li>)
//           }
//         </ul>
//       </div>
//     );
//   }
// }



const BookList = () => {


  
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const { books } = useContext(BookContext)

  console.log('books', books)

  const theme = isLightTheme ? light : dark
  const bg = { background: theme.ui }
  const txt = ["the way of kings", "the name of the wind", "the final empire"]

  return (
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {/* {
          txt.map(x => <li key={x} style={bg}>{x}</li>)
        } */}
        {
          books.map(book => <li key={uuid()} style={bg}>{book.title}</li>)
        }
      </ul>
    </div>
  );
};

export default BookList;