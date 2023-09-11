import { useState } from "react";

import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

export const Home = () => {
	const [postList, setPostList] = useState(null);
	const postRef = collection(db, "posts");

	const getPosts = async () => {
		const data = await getDocs(postRef);
    console.log(data);
	};

  getPosts();

	return <div>Home Page</div>;
};
