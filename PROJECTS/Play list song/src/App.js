import { React, useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AddItemForm from "./components/AddItemForm/AddItemForm";
import SongsList from "./components/SongsList/SongsList";

const songsList = [
  { id: 0, name: "song1", artist: "artist1" },
  { id: 1, name: "song2", artist: "artist2" },
  { id: 2, name: "song3", artist: "artist3" },
  { id: 3, name: "song4", artist: "artist4" },
  { id: 4, name: "song5", artist: "artist5" },
  { id: 5, name: "song6", artist: "artist6" },
  { id: 6, name: "song7", artist: "artist7" },
];
let idCounter = songsList.length;

function App() {
  const [songs, setSongs] = useState(songsList);

  const addSongToList = (song) => {
    const { name, artist } = song;

    setSongs([...songs, { id: idCounter++, name, artist }]);
  };

  const removeSong = (id) => {
    setSongs(songs.filter((song) => song.id !== id));
  };

  return (
    <div>
      <Header />
      <AddItemForm addSongToList={addSongToList} />
      <SongsList songsList={songs} removeSong={removeSong} />
    </div>
  );
}

export default App;
