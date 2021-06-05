import { useHistory } from "react-router-dom";
const Card = ({ firstName, lastName, isMe, id }) => {
  const history = useHistory();

  const getUserDetails = () => history.push(`/user/${id}`);

  return (
    <div
      onClick={getUserDetails}
      className="w-full text-center pt-3 pb-6 mb-6 bg-white shadow-md"
    >
      <h2 className="text-xl">
        {isMe && "*"}
        {firstName} {lastName}
      </h2>
    </div>
  );
};

export default Card;
