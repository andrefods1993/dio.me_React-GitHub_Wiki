import styled from "styled-components";

const ButtonContainer = styled.button`
	background-color: #010409;
	color: #f0f6fc;
	padding: 0.9rem 1.5rem;
	border-radius: 1rem;
	cursor: pointer;
	font-size: 1.2rem;
	border: 1px solid #3d444d;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #3d444d;
	}

	&:active {
		transform: scale(0.95);
	}
`;

const Button = ({ title, onClick }) => {
	return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
