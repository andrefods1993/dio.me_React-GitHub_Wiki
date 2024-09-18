import { getGitHubUser, getGitHubRepos } from "../api/api";

const fetchUserData = async (username) => {
	try {
		const data = await getGitHubUser(username);
		return data;
	} catch (error) {
		throw new Error("Não foi possível recuperar os dados do usuário do GitHub. Por favor, tente novamente.");
	}
};

const fetchUserRepos = async (username) => {
	try {
		const data = await getGitHubRepos(username);
		return data;
	} catch (error) {
		throw new Error(
			"Não conseguimos obter os dados dos repositórios do GitHub. Tente novamente em alguns minutos."
		);
	}
};

export { fetchUserData, fetchUserRepos };
