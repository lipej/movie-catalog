import { removeCookies } from "cookies-next";
import { Fragment } from "react";

export default function UserMenu() {
  const handleLogout = () => {
    removeCookies("token");
    window.location.pathname = "/";
  };

  if (typeof window !== "undefined") {
    return (
      <div className='dropdown dropdown-end'>
        <label tabIndex={0} className='avatar'>
          <div className='w-[32px] rounded-full'>
            <img
              src={`https://www.gravatar.com/avatar/${window.localStorage.getItem(
                "gravatarHash"
              )}`}
            />
          </div>
        </label>
        <ul
          tabIndex={0}
          className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
        >
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    );
  }
  return <Fragment />;
}
