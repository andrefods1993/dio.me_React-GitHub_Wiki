import styled from "styled-components";

import gitHubLogo from "../assets/github-logo.png";

const HeaderContainer = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	border-bottom: 1px solid #3d444d;
	background: #010409;

	img {
		width: 90px;
	}
`;

const Header = () => {
	return (
		<HeaderContainer>
			<img src={gitHubLogo} alt="GitHub Logo" />
		</HeaderContainer>
	);
};

export default Header;
