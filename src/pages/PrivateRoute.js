import { Navigate } from "react-router-dom";
import { useState } from "react";

const PrivateRoute = ({ children }) => {
  const [isLoggedin] = useState(false);
  return isLoggedin ? children : <Navigate to="/" />;
};

export default PrivateRoute;
