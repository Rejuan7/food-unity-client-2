import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/availableFood">Available Foods</NavLink>
      </li>
      <li>
        <NavLink to="/addFood">Add Food</NavLink>
      </li>
      <li>
        <NavLink to="/myFood">My Food Request</NavLink>
      </li>
      <li>
        <NavLink to="/manageMyFood">Manage My Foods</NavLink>
      </li>
    </>
  );

  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  return (
    <div className="navbar bg-base-200 flex flex-wrap justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden pl-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl lg:text-3xl lg:font-bold ml-0">
          <img
            className="h-12 w-12 rounded-xl bg-base-200"
            src={"https://i.ibb.co/SnPVV97/restaurant9491-logowik-com.webp"}
            alt=""
          />
          Food Unity
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3 px-1">{navItems}</ul>
      </div>
      <div className="flex items-center">
        <div className="w-4 mr-2"></div>
        {user ? (
          <div className="flex items-center">
            <div className="tooltip" data-tip={user.displayName}>
              <img
                className="rounded-full w-10 mr-3 h-10 hover:opacity-80"
                alt=""
                src={user.photoURL}
              />
            </div>
            <button onClick={handleSignOut} className="btn btn-secondary">
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-success p-2">Login</button>
          </Link>
        )}
        {/* Conditionally render the "Register" button */}
        {!user && (
          <Link to="/register">
            <button className="ml-4 btn btn-success p-2">Register</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
