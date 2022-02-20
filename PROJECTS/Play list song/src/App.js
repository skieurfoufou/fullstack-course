import { React, useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AddItemForm from "./components/AddItemForm/AddItemForm";
import SongsList from "./components/SongsList/SongsList";
import Filters from "./components/Filters/Filters";
import ReactPlayer from "react-player";

const songsList = [
  {
    id: 0,
    name: "song1",
    artist: "artist1",
    category: "Pop",
    language: "English",
    years: "2015-2025",
  },
  {
    id: 1,
    name: "song2",
    artist: "artist2",
    category: "Rock",
    language: "English",
    years: "2005-2014",
  },
  {
    id: 2,
    name: "song3",
    artist: "artist3",
    category: "Rap",
    language: "French",
    years: "1995-2004",
  },
  {
    id: 3,
    name: "song4",
    artist: "artist4",
    category: "Latina",
    language: "Spanish",
    years: "1985-1994",
  },
  {
    id: 4,
    name: "song5",
    artist: "artist5",
    category: "Rock",
    language: "English",
    years: "1975-1984",
  },
  {
    id: 5,
    name: "song6",
    artist: "artist6",
    category: "Rap",
    language: "French",
    years: "2015-2025",
  },
  {
    id: 6,
    name: "song7",
    artist: "artist7",
    category: "Pop",
    language: "Hebrew",
    years: "2015-2025",
  },
];
let idCounter = songsList.length;

function App() {
  const [songs, setSongs] = useState(songsList);

  const addSongToList = (song) => {
    const { name, artist, category, language, years } = song;

    setSongs([
      ...songs,
      { id: idCounter++, name, artist, category, language, years },
    ]);
  };

  const removeSong = (id) => {
    setSongs(songs.filter((song) => song.id !== id));
  };

  return (
    <div>
      <Header />
      {/* <Filters filters={filtersValues} onFilterChange={onFilterChange}/> */}
      <AddItemForm addSongToList={addSongToList} />
      <div className="div-ReactPlayer">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=lor9IFbUZQM"
          playing="true"
          controls="true"
        />
      </div>
      <SongsList songsList={songs} removeSong={removeSong} />
    </div>
  );
}

export default App;
