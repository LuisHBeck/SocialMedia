import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface NewPostData {
  title: string;
  description: string;
}

export const NewPostForm = () => {
	const navigate = useNavigate();
	
	const [user] = useAuthState(auth);

	const schema = yup.object().shape({
		title: yup.string().required("Title is required"),
		description: yup.string().required("Description is required"),
	});

	const {
		register,
		handleSubmit,
    formState: { errors },
	} = useForm<NewPostData>({
		resolver: yupResolver(schema),
	});

	const postsRef = collection(db, "posts");

	const onSubmit = async (data: NewPostData) => {
		await addDoc(postsRef, {
      ...data,
			username: user?.displayName,
			userId: user?.uid,
    });
		navigate("/");
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type="text" placeholder="Title..." {...register("title")} />
      <p style={{ color: "red" }}> {errors?.title?.message} </p>

      <textarea placeholder="Description..." {...register("description")} />
      <p style={{ color: "red" }}> {errors?.description?.message} </p>

			<input type="submit" />
		</form>
	);
};
