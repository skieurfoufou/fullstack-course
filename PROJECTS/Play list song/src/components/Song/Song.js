import React from "react";
import "./Song.css";

function Song({ song, removeSong }) {
  const { id, name, artist } = song;

  return (
    <div className="Song">
      <h3>
        {name} from {artist}
      </h3>
      <button className="button-remove" onClick={() => removeSong(id)}>
        🗑️
      </button>
    </div>
  );
}

export default Song;
