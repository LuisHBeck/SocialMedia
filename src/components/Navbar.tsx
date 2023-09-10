import { Link } from "react-router-dom";

import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export const Navbar = () => {
	const [user] = useAuthState(auth);

	const logout = async () => {
    await signOut(auth);
  };

	return (
		<div className="navbar">
			<div className="links">
				<Link to="/"> Home </Link>
				<Link to="/login"> Login </Link>
			</div>

      { user && (
        <div className="user">
				  <p> {user?.displayName} </p>
        
          <img
  					src={user?.photoURL || ""}
  					alt="userPicture"
  					width="20"
  					height="20"
  				/>
  				<button onClick={logout}> Log Out </button>
			  </div>
      )}
		
		</div>
	);
};
