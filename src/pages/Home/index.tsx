import { useEffect, useState } from "react";

import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

import { Post } from "./post";

// eslint-disable-next-line @typescript-eslint/no-redeclare
export interface Post {
	id: string;
	userId: string;
	username: string;
	title: string;
	description: string;
}

export const Home = () => {
	const [postList, setPostList] = useState<Post[] | null>(null);
	const postRef = collection(db, "posts");

	const getPosts = async () => {
		const data = await getDocs(postRef);
		setPostList(
			data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
		);
	};

	// getPosts();

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div>
			{postList?.map((post) => {
				return (
					<Post post={post}/>
				);
			})}
		</div>
	);
};
