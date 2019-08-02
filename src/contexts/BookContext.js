import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1'


export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'name of the wind', id: uuid() },
        { title: 'the way of kings', id: uuid() },
        { title: 'the final empire', id: uuid() },
        { title: 'the hero of ages', id: uuid() },
    ])
    return (
        <BookContext.Provider value={{ books }}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;