import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={s.LinkAuthNav} to="/register">
        Register
      </NavLink>
      <NavLink className={s.LinkAuthNav} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
