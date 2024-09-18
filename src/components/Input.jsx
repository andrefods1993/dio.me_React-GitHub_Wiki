import styled from "styled-components";

const InputContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;

	input {
		width: 100%;
		height: 2rem;
		border: 1px solid #3d444d;
		border-radius: 1rem;
		padding: 1.5rem;
		background: #010409;
		color: #f0f6fc;
		font-size: 1.5rem;
	}
`;

const Input = ({ value, onChange }) => {
	return (
		<InputContainer>
			<input type="text" value={value} onChange={onChange} placeholder="Digite o usuário do GitHub..." />
		</InputContainer>
	);
};

export default Input;
