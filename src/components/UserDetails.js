import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import IdContext from "../contexts/IdContext";
import Button from "./Button";

const UserDetails = () => {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem(id));
  const [myId] = useContext(IdContext);
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState(user.notes);
  const { firstName, lastName } = JSON.parse(localStorage.getItem(myId));

  useEffect(() => {
    console.log(user);
  }, [user]);

  const sendNote = (e) => {
    e.preventDefault();
    const noteObj = {
      name: `${firstName} ${lastName}`,
      message: note,
    };

    localStorage.setItem(
      id,
      JSON.stringify({
        ...user,
        notes: [...user.notes, noteObj],
      })
    );
    setNotes([...notes, noteObj]);
  };

  return (
    <div className="w-2/3 h-screen m-auto flex flex-col justify-center items-center">
      <h1 className="text-5xl text-center">
        {user.firstName} {user.lastName}
      </h1>
      <div className="w-full h-1/2 bg-gray-800 text-white py-6 px-12 my-6 overflow-y-scroll">
        {notes.map((note) => (
          <p>
            {note.name}: <span className="px-2">{note.message}</span>
          </p>
        ))}
      </div>
      <form className="w-full text-center" onSubmit={sendNote}>
        <input
          className="w-1/2 mx-3"
          onChange={(e) => setNote(e.target.value)}
          value={note}
          type="text"
          placeholder="Send note"
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default UserDetails;
