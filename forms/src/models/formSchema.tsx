import { object, string, number, InferType, ref, boolean, mixed } from "yup";
import { countryList } from "./countryList";

export const userSchema = object({
  name: string()
    .required("Name is required")
    .matches(
      /^[A-Z][a-zA-Z]*$/,
      "Name must start with an uppercase letter and contain only letters",
    ),
  age: number()
    .required("Age is required")
    .positive("Age cannot be negative")
    .integer()
    .typeError("Age must be a number"),
  email: string().required("Email is required").email("Invalid email address"),
  password: string()
    .required("Password is required")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character",
    ),
  passwordConfirm: string()
    .required("Password confirmation is required")
    .oneOf([ref("password")], "Passwords must match"),
  gender: string().required("Gender is required"),
  terms: boolean()
    .required("You must accept the Terms and Conditions")
    .oneOf([true], "You must accept the Terms and Conditions"),
  picture: mixed<FileList>()
    .test("required", "Profile picture is required", (value) => {
      return !!value;
    })
    .test("fileSize", "File size is too large", (value) => {
      if (!value) {
        return true;
      }
      return value && value[0]?.size <= 2000000;
    })
    .test("fileType", "Unsupported file type", (value) => {
      if (!value) {
        return true;
      }
      return ["image/png", "image/jpeg"].includes(value[0]?.type);
    }),
  country: string()
    .required("Country is required")
    .oneOf(countryList, "Must be a valid country"),
});

export type User = InferType<typeof userSchema>;
