import { Link } from "react-router-dom";

function Navbar({ setThemeIndex, themeIndex, themeCount }) {
    function handleSetTheme() {
        if (themeIndex == themeCount) setThemeIndex(0);
        else setThemeIndex(themeIndex + 1);
    }

    return (
        <div className="navbar text-primary-content z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
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
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-primary-content text-primary"
                    >
                        <li>
                            <Link to={"/projects"}>Projects</Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost">
                    Devontae
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to={"/projects"}>Projects</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end menu menu-horizontal">
                <ul>
                    <li>
                        <button
                            className="text-primary-content"
                            onClick={handleSetTheme}
                        >
                            Theme Switch {themeIndex + 1}/{themeCount + 1}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
