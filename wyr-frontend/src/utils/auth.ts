import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

type TokenPayload = {
  _id: string;
  name: string;
  role: string;
  exp: number;
};

export const getUserRole = (): string | null => {
  const token = Cookies.get("token");
  if (!token) return null;

  try {
    const decoded = jwtDecode<TokenPayload>(token);
    return decoded.role;
  } catch {
    return null;
  }
};
