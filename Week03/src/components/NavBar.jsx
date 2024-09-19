import { NavLink } from "react-router-dom";
import cx from "classnames";

export const NavBar = () => {
  let isActive;
  const classes = cx("text-blue-500");
  return (
    <nav className="sticky top-0 overflow-y-scroll flex flex-col item-start h-screen p-4">
      <NavLink to="/" classNames={classes}>
        Buttons
      </NavLink>
      <NavLink to="/accordion" classNames={classes}>
        Accordion
      </NavLink>
      <NavLink to="/dropdown" classNames={classes}>
        Dropdown
      </NavLink>
      <NavLink to="/modal" classNames={classes}>
        Modal
      </NavLink>
      <NavLink to="/iconSelector" classNames={classes}>
        IconSelector
      </NavLink>
    </nav>
  );
};
