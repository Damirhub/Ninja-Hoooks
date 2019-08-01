import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1'
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'almost home', id: 1 },
        { title: 'memory gospell', id: 2 },
        { title: 'this wild darkness', id: 3 },
    ])

    // const [numb, setNumb] = useState(1)


    // const addSong = () => {
    //     setNumb((numb) => numb + 1)
    //     setSongs([...songs, { title: `new song ${numb}`, id: uuid() }])

    //     console.log(numb);
    // }



    const addSong = (title) => {
        setSongs([...songs, { title , id: uuid() }])
    }

    // const addSong = (e) => {
    //     e.preventDefault()
    //     setSongs([...songs, { title: e.target.formId.title , id: uuid() }])
    // }

    const [age, setAge] = useState(20)

    useEffect(() => {
        console.log('useEff ran', songs)
    }, [songs])

    useEffect(() => {
        console.log('useEff ran', age)
    }, [age])

    return (
        <div className="song-list">
                {/* <button onClick={addSong}>Add a song</button> */}
            <ul>
                {
                    songs.map(song => <li key={song.id}>{song.title}</li>)
                }
            </ul>
            <NewSongForm addSong = {addSong} />
            <button onClick = {() => setAge(age + 1)}>Add 1 to age :{age}</button>
        </div>
    );
};

export default SongList;