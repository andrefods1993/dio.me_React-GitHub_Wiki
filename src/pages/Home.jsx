import styled from "styled-components";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import UserCard from "../components/UserCard";
import Repository from "../components/Repository";
import useGitHubData from "../hooks/useGitHubData";

const Container = styled.div`
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 2rem;
	}

	.search {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		width: 80%;
	}

	.result {
		width: 80%;
		margin-top: 2rem;
	}
`;

const Home = () => {
	const { user, setUser, userData, repositories, error, handleClick } = useGitHubData();

	return (
		<Container>
			<Header />
			<main>
				<div className="search">
					<Input value={user} onChange={(e) => setUser(e.target.value)} />
					<Button title="Buscar" onClick={handleClick} />
				</div>
				<div className="result">
					{error && <p>{error}</p>}
					{userData && (
						<UserCard
							avatar_url={userData.avatar_url}
							name={userData.name}
							login={userData.login}
							bio={userData.bio}
							public_repos={userData.public_repos}
						/>
					)}
					{repositories.length > 0 && <Repository repositories={repositories} />}
				</div>
			</main>
		</Container>
	);
};

export default Home;
