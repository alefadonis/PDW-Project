import axios from "axios";
import { FormState, SignupFormSchema } from "../lib/definitions";

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const { data } = await axios.post("/user", {
      name: validatedFields.data.name,
      email: validatedFields.data.email,
      password: validatedFields.data.password,
    });

    return {
      user: data.userDetails,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { error: `There was an ${error}` };
    } else {
      return { error: `There was an ${error}` };
    }
  }
}