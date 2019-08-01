import React, {useState} from 'react';

const NewSongForm = ({addSong}) => {

    const [title, setTitle] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addSong(title)
        setTitle('')
        
    }

    return (
        // <form onSubmit = {addSong}>
        <form onSubmit = {handleSubmit}>
            <label>Song name: </label>
            <input  value = {title} onChange = {(e) => setTitle(e.target.value)} type = "text" required />    
            <button  type = "submit"> ADD SONG </button>           
        </form>
    );
};

export default NewSongForm;