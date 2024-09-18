import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 1rem;
	border: 1px solid #3d444d;
	background-color: #010409;
	border-radius: 1rem;
	padding: 1rem 1.5rem;

	.user {
		display: flex;
		align-items: center;
		gap: 1rem;

		img {
			width: 120px;
			border-radius: 50%;
		}

		h1 {
			width: 80%;
			margin-bottom: 0.5rem;
			color: #f0f6fc;
		}

		p {
			color: #8b949e;
		}
	}

	.info {
		display: flex;
		justify-content: space-between;
		width: 100%;
		font-size: 1.2rem;
		color: #8b949e;

		strong {
			color: #f0f6fc;
		}
	}
`;

const UserCard = ({ avatar_url, name, login, bio, public_repos }) => {
	return (
		<Container>
			<div className="user">
				<img src={avatar_url} alt="Foto Usuário GitHub" />
				<div>
					<h1>{name}</h1>
					<p>{bio}</p>
				</div>
			</div>
			<div className="info">
				<p>{login}</p>
				<p>
					Repositórios Públicos: <strong>{public_repos}</strong>
				</p>
			</div>
		</Container>
	);
};

export default UserCard;
