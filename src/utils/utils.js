import { API_BASE_URL } from "./constants";

export const apiRoute = (route) => {
  let path = "";

  if (typeof route !== "string" && Array.isArray(route)) {
    path = route.join("/");
  } else {
    path = route;
  }

  if (!path.startsWith("/")) {
    path = "/" + path;
  }

  return `${API_BASE_URL}${path}`;
};
