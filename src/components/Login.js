import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import IdContext from "../contexts/IdContext";
import Button from "./Button";

const Login = () => {
  const history = useHistory();
  const [, setId] = useContext(IdContext);
  const lookup = JSON.parse(localStorage.getItem("lookup"));
  const requiredErrorMessage = "This is required.";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const displayErrorMessage = (error) =>
    error ? <p className="text-red-600">{error.message}</p> : null;

  const login = (data) => {
    for (const id in lookup) {
      if (
        data.firstName === lookup[id].firstName &&
        data.lastName === lookup[id].lastName &&
        data.password === lookup[id].password
      ) {
        setId(id);
        history.push("/");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(login)} className="flex flex-col">
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
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Login;
