import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import IdContext from "../contexts/IdContext";

const Settings = () => {
  const [id] = useContext(IdContext);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(id)));
  const [userWasUpdated, setUserWasUpdated] = useState(false);
  const { register, handleSubmit } = useForm();

  const updateUser = (data) => {
    const newUser = {
      ...user,
      age: data.age ? data.age : user.age,
      phone: data.phone ? data.phone : user.phone,
      password: data.password ? data.password : user.password,
    };

    if (data.password) {
      const lookup = JSON.parse(localStorage.getItem("lookup"));
      localStorage.setItem(
        "lookup",
        JSON.stringify({
          ...lookup,
          [id]: {
            ...lookup[id],
            password: data.password,
          },
        })
      );
    }

    localStorage.setItem(id, JSON.stringify(newUser));
    setUser(newUser);
    setUserWasUpdated(true);
    setTimeout(() => setUserWasUpdated(false), 1200);
  };

  return (
    <div className="flex flex-col divide-y divide-gray-300">
      <div className=" mb-3">
        <h1 className="text-lg">
          Name: {user.firstName} {user.lastName}
        </h1>
        <h3 className="text-lg">Age: {user.age ? user.age : "N/A"}</h3>
        <h3 className="text-lg">Phone: {user.phone}</h3>
      </div>
      <form
        onSubmit={handleSubmit(updateUser)}
        className="flex flex-col w-2/3 md:w-80 pt-3"
      >
        <h2 className="text-2xl mb-3">Update user info:</h2>
        {userWasUpdated && (
          <p className="text-green-600">Updated successfully</p>
        )}
        <label htmlFor="age">Age:</label>
        <input {...register("age")} type="number" id="age" />

        <label htmlFor="phone">Phone:</label>
        <input {...register("phone")} type="text" id="phone" />

        <label htmlFor="password">Password:</label>
        <input {...register("password")} type="password" id="password" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Settings;
