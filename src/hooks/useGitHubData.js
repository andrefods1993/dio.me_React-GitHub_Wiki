import { useState } from "react";
import { fetchUserData, fetchUserRepos } from "../services/githubService";

const useGitHubData = () => {
	const [user, setUser] = useState("");
	const [userData, setUserData] = useState(null);
	const [repositories, setRepositories] = useState([]);
	const [error, setError] = useState(null);

	const handleClick = async () => {
		if (user.trim()) {
			try {
				const userData = await fetchUserData(user.trim());
				setUserData(userData);
				const reposData = await fetchUserRepos(user.trim());
				setRepositories(reposData);
				setError(null);
			} catch (err) {
				setUserData(null);
				setRepositories([]);
				setError(err.message);
			}
		} else {
			setError("Por favor, insira um nome de usuário.");
		}
	};

	return {
		user,
		setUser,
		userData,
		repositories,
		error,
		handleClick,
	};
};

export default useGitHubData;
