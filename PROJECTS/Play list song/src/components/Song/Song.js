import React from "react";
import "./Song.css";

function Song({ song, removeSong }) {
  const { id, name, artist, category, language, years } = song;

  return (
    <div className="Song">
      <h3>
        {name} from {artist},
      </h3>
      <br />
      <h4>
        {category},{language},{years}
      </h4>
      <button className="button-remove" onClick={() => removeSong(id)}>
        🗑️
      </button>
    </div>
  );
}

export default Song;
