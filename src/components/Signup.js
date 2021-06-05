import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import IdContext from "../contexts/IdContext";

const Signup = () => {
  const [id, setId] = useContext(IdContext);
  const [userExists, setUserExists] = useState(null);
  const history = useHistory();
  const userExistsErrorMessage =
    "This user already exists. Please use a different first or last name.";
  const requiredErrorMessage = "This is required.";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const displayErrorMessage = (error) =>
    error ? <p className="text-red-600">{error.message}</p> : null;

  const submit = (formData) => {
    const currentUserLookup = JSON.parse(localStorage.getItem("lookup"));

    for (const id in currentUserLookup) {
      if (
        formData.firstName === currentUserLookup[id].firstName &&
        formData.lastName === currentUserLookup[id].lastName
      ) {
        return setUserExists({ message: userExistsErrorMessage });
      }
    }

    const id = uuidv4();
    setId(id);
    const user = { ...formData, id };
    const newUserLookup = {
      ...currentUserLookup,
      [id]: {
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
      },
    };

    localStorage.setItem("lookup", JSON.stringify(newUserLookup));
    localStorage.setItem(id, JSON.stringify(user));
    history.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col w-2/3 md:w-80"
    >
      {displayErrorMessage(userExists)}
      <label className={errors.firstName && "text-red-600"} htmlFor="firstName">
        First Name:
      </label>
      <input
        className={errors.firstName && "border-red-600"}
        {...register("firstName", { required: requiredErrorMessage })}
        type="text"
        id="firstName"
      />
      {displayErrorMessage(errors.firstName)}

      <label className={errors.lastName && "text-red-600"} htmlFor="lastName">
        Last Name:
      </label>
      <input
        className={errors.lastName && "border-red-600"}
        {...register("lastName", { required: requiredErrorMessage })}
        type="text"
        id="lastName"
      />
      {displayErrorMessage(errors.lastName)}

      <label htmlFor="age">Age:</label>
      <input {...register("age")} type="number" id="age" />

      <label className={errors.phone && "text-red-600"} htmlFor="phone">
        Phone:
      </label>
      <input
        className={errors.phone && "border-red-600"}
        {...register("phone", { required: requiredErrorMessage })}
        type="text"
        id="phone"
      />
      {displayErrorMessage(errors.phone)}

      <label className={errors.password && "text-red-600"} htmlFor="password">
        Password:
      </label>
      <input
        className={errors.password && "border-red-600"}
        {...register("password", { required: requiredErrorMessage })}
        type="password"
        id="password"
      />
      {displayErrorMessage(errors.password)}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
