import { useContext } from "react";
import Card from "./Card";
import IdContext from "../contexts/IdContext";

const CardList = () => {
  const [myId] = useContext(IdContext);
  const lookup = JSON.parse(localStorage.getItem("lookup"));

  return (
    <div className="w-1/3 m-auto cursor-pointer">
      {lookup &&
        Object.keys(lookup).map((id) => {
          const { firstName, lastName } = JSON.parse(localStorage.getItem(id));
          return (
            <Card
              key={id}
              firstName={firstName}
              lastName={lastName}
              id={id}
              isMe={myId === id ? true : false}
            />
          );
        })}
    </div>
  );
};

export default CardList;
