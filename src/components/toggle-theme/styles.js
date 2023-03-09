import styled from "styled-components";

const StyledToggle = styled.div`
position: relative;
	width: 48px;
	height: 24px;
	border-radius: 25px;
	margin: 1rem;
    background-image: linear-gradient(#388FE7 ,#40DB82 );
	&::after {
		content: '';
		position: absolute;
        top: 13%;
        left: 8%;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background-color: #1D1F29;
		transform: translateX(${({ translate }) => (translate ? '125%' : '0')});
        transition: transform 0.5s;
	}
`;

export { StyledToggle };