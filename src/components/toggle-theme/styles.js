import styled from 'styled-components';

const StyledToggle = styled.div`
	position: relative;
	width: 48px;
	height: 24px;
	border-radius: 25px;
	margin: 1rem;
	background-image: linear-gradient(#388fe7, #40db82);
	&::after {
		content: '';
		position: absolute;
		top: 13%;
		left: 8%;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background-color: #1d1f29;
		transform: translateX(${({ dark }) => (dark ? 0 : '125%')});
		transition: transform 0.3s;
	}
`;

export { StyledToggle };
