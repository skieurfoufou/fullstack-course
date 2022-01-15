import "./AddItemForm.css";

function AddItemForm({ addSongToList }) {
  function addToList(event) {
    event.preventDefault();

    const formData = new FormData(event.target); // here we give the form to the FormData

    const songData = Object.fromEntries(formData.entries()); // transform Iterator to Object
    event.target.reset();
    addSongToList(songData);
  }

  return (
    <form onSubmit={addToList} className="add-item">
      <label className="label-add-item">Name's song</label>
      <input name="name" className="input-add-item"></input>
      <label className="label-add-item">Name'artist</label>
      <input name="artist" className="input-add-item"></input>
      <button type="submit" className="add-button">
        Add to the List
      </button>
    </form>
  );
}
export default AddItemForm;
