import styled from "styled-components";

const Container = styled.article`
	display: flex;
	flex-direction: column;
	align-items: start;
	margin: 2rem 0;
	padding: 1rem 1.5rem;
	gap: 1rem;
	border-bottom: 2px solid #3d444d;

	h3 {
		text-transform: uppercase;
		color: #fff;
	}

	img {
		height: 2.5rem;
	}

	a {
		font-weight: bold;
		color: #ffa500;
		transition: color 0.4s ease;

		&:hover {
			color: #fff;
		}
	}
`;

const Repository = ({ repositories }) => {
	if (!repositories || repositories.length === 0) {
		return <p>Sem repositórios encontrados.</p>;
	}

	return (
		<>
			{repositories.map((repo) => (
				<Container key={repo.id}>
					<h3>{repo.name}</h3>
					<p>Descrição: {repo.description ? repo.description : "Nenhuma descrição disponível."}</p>
					{repo.language && (
						<img
							src={`https://skillicons.dev/icons?i=${repo.language.toLowerCase()}`}
							alt={repo.language}
						/>
					)}
					<a href={repo.html_url} target="_blank" rel="noopener noreferrer">
						Clica aqui para acessar o repositório.
					</a>
				</Container>
			))}
		</>
	);
};

export default Repository;
