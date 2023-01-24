import * as yup from "yup";

export interface User {
  id: number;
  username: string;
  email: string;
  photo: string;
  follows: number;
  followers: number;
}

export const UserSchema = yup.object({
  username: yup
    .string()
    .min(8)
    .max(25, "Maximum: 25 characters")
    .required("Required field"),
  email: yup.string().required("Required field"), 
});
