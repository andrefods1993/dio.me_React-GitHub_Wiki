import axios from "axios";

const BASE_URL = "https://api.github.com/users";

const getGitHubUser = async (username) => {
	try {
		const response = await axios.get(`${BASE_URL}/${username}`);
		return response.data;
	} catch (error) {
		throw new Error(
			"Falha ao buscar os dados do usuário do GitHub. Por favor, verifique o nome de usuário e tente novamente."
		);
	}
};

const getGitHubRepos = async (username) => {
	try {
		const response = await axios.get(`${BASE_URL}/${username}/repos`);
		return response.data;
	} catch (error) {
		throw new Error(
			"Falha ao buscar os repositórios do GitHub. Por favor, verifique o nome de usuário e tente novamente."
		);
	}
};

export { getGitHubUser, getGitHubRepos };
