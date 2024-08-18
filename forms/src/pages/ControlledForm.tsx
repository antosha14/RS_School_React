import { useState } from "react";
import { userSchema } from "@models/formSchema";
import { ValidationError } from "yup";
import { passwordStrengthCheck } from "@services/passwordStrengthCheck";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "@store/UserSlice";
import { selectCountries } from "@store/selectors";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormInputState {
  name: string;
  age: number;
  email: string;
  password: string;
  passwordConfirm: string;
  gender: string;
  terms: boolean;
  picture?: FileList;
  country: string;
}

export function ControlledForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    trigger,
  } = useForm({
    resolver: yupResolver(userSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormInputState> = async (data) => {
    try {
      if (data?.picture) {
        const file = data.picture[0];
        const reader = new FileReader();
        reader.onload = () => {
          dispatch(
            addUser({
              ...data,
              picture: reader.result as string,
            }),
          );
        };
        reader.readAsDataURL(file);
      }
      navigate("/");
    } catch (err) {
      if (err instanceof ValidationError) {
        const validationErrors: { [key: string]: string } = {};
        err.inner.forEach((error) => {
          if (error.path) {
            validationErrors[error.path] = error.message;
          }
        });
      }
    }
  };

  const countries = useSelector(selectCountries);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [passwordStrength, setPasswordStrength] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("password", e.target.value);
    trigger("password");
    const passwordInput = e.target.value;
    setPasswordStrength(passwordStrengthCheck(passwordInput || ""));
  };

  const checkErrors = () => {
    return Object.values(errors).some((value) => value !== undefined);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    e.preventDefault();
    setSuggestions([]);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("country", e.target.value);
    trigger("country");
    const value = e.target.value;
    if (value.length > 0) {
      const filteredSuggestions = countries.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase()),
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (country: string) => {
    setValue("country", country);
    trigger("country");
    setSuggestions([]);
  };

  return (
    <div className="flex-col flex m-4 text-red-500 content-center flex-wrap">
      <form
        className="md:w-1/2 border border-red-500 p-6 bg-gray-900"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col mb-3">
          <label htmlFor="name" className="flex flex-col mb-3">
            Name:
          </label>
          <input
            id="name"
            {...register("name")}
            className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
          ></input>
          {errors?.name ? (
            <p className="text-yellow-400 h-4">{`${errors.name.message}`}</p>
          ) : (
            <p className="text-yellow-400 h-4"></p>
          )}
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            {...register("age")}
            className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
          ></input>
          {errors?.age ? (
            <p className="text-yellow-400 h-4">{`${errors.age.message}`}</p>
          ) : (
            <p className="text-yellow-400 h-4"></p>
          )}
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            {...register("email")}
            className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
          ></input>
          {errors?.email ? (
            <p className="text-yellow-400 h-4">{`${errors.email.message}`}</p>
          ) : (
            <p className="text-yellow-400 h-4"></p>
          )}
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            {...register("password")}
            type="password"
            onChange={handlePasswordChange}
            className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
          ></input>
          {passwordStrength != "" && (
            <p
              className={
                passwordStrength == "Strong" ||
                passwordStrength == "Very Strong"
                  ? "text-green-500"
                  : "text-gray-500"
              }
            >{`Password strength is: ${passwordStrength}`}</p>
          )}
          {errors?.password ? (
            <p className="text-yellow-400 h-4">{`${errors.password.message}`}</p>
          ) : (
            <p className="text-yellow-400 h-4"></p>
          )}
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="passwordConfirm">Confirm password:</label>
          <input
            id="passwordConfirm"
            {...register("passwordConfirm")}
            type="password"
            className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
          ></input>
          {errors?.passwordConfirm ? (
            <p className="text-yellow-400 h-4">{`${errors.passwordConfirm.message}`}</p>
          ) : (
            <p className="text-yellow-400 h-4"></p>
          )}
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            {...register("gender")}
            defaultValue=""
            className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
          >
            <option value="" disabled hidden>
              Select an option
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors?.gender ? (
            <p className="text-yellow-400 h-4">{`${errors.gender.message}`}</p>
          ) : (
            <p className="text-yellow-400 h-4"></p>
          )}
        </div>

        <div className="relative flex flex-col mb-3">
          <label htmlFor="country">Country</label>
          <input
            id="country"
            {...register("country")}
            onChange={handleCountryChange}
            className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
          ></input>
          {suggestions.length > 0 && (
            <ul className="" onMouseLeave={handleMouseLeave}>
              {suggestions.map((suggestion, index) => (
                <li
                  className="px-3 bg-white text-black border border-gray-100 hover:border-red-600 hover:bg-slate-500 cursor-pointer"
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
          {errors?.country ? (
            <p className="text-yellow-400 h-4">{`${errors.country.message}`}</p>
          ) : (
            <p className="text-yellow-400 h-4"></p>
          )}
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="picture">Profile picture</label>
          <input
            id="picture"
            {...register("picture")}
            type="file"
            className="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          ></input>
          {errors?.picture ? (
            <p className="text-yellow-400 h-4">{`${errors.picture.message}`}</p>
          ) : (
            <p className="text-yellow-400 h-4"></p>
          )}
        </div>

        <div className="flex flex-col mb-3">
          <div className="flex items-center">
            <label htmlFor="terms" className="mr-3">
              I agree with Terms and Conditions agreement
            </label>
            <input
              id="terms"
              {...register("terms")}
              type="checkbox"
              className="w-4 h-4 text-red-500 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            ></input>
          </div>

          {errors?.terms ? (
            <p className="text-yellow-400 h-4">
              You must agree with Terms and Conditions
            </p>
          ) : (
            <p className="text-yellow-400 h-4"></p>
          )}
        </div>

        <div className="w-full">
          {checkErrors() ? (
            <button
              type="submit"
              disabled={true}
              className="w-full text-black bg-gray-400 border border-red-500 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:text-white text-xl cursor-pointer"
            >
              Send
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-gray-900 border border-red-500 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-red-500 hover:text-white text-xl cursor-pointer"
            >
              Send
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
