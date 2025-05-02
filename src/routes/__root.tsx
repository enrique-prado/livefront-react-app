import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import nasaLogo from "../nasa-logo.svg";

export const Route = createRootRoute({
	component: () => (
		<>
      {/* Top Navbar, always visible  */}
			<header>
				<nav className="navbar">
          <div className="navbar-header">
            <img src={nasaLogo} className="nasa-logo" alt="logo" />
            <h1 className="navbar-title">NASA Image and Video API Viewer</h1>
          </div>
          <div className="navbar-links">
            <Link
              className="LinkTab hover:bg-gray-200"
              activeProps={{
                className: "bg-blue-500 text-white",
              }}
              to="/"
            >
              List View
            </Link>
            <Link
              className="LinkTab hover:bg-gray-200"
              activeProps={{
                className: "bg-blue-500 text-white",
              }}
              to="/credits"
            >
              Credits
            </Link>
          </div>
				</nav>
			</header>
			<Outlet />
		</>
	),
});
