import React from "react";
import Song from "../Song/Song";
import "./SongsList.css";

function SongsList({ songsList, addSongToList, removeSong }) {
  return (
    <div className="Songs-list">
      {songsList.map((song) => (
        <Song
          key={song.id}
          song={song}
          addSongToList={addSongToList}
          removeSong={removeSong}
        />
      ))}
    </div>
  );
}

export default SongsList;
