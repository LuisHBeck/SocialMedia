import { useNavigate } from "react-router-dom";

import { auth, provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";

export const Login = () => {
	const navigate = useNavigate();

	const signInWithGoogle = async () => {
		const response = await signInWithPopup(auth, provider);
		console.log(response);
		navigate("/");
	};

	return (
		<div>
			<p> SignIn with Google to continue </p>
			<button onClick={signInWithGoogle}> Google Sign In </button>
		</div>
	);
};
