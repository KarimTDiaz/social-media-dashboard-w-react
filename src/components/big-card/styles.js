import styled from 'styled-components';

const StyledBigCard = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 326px;
	height: 216px;
	padding: 1rem;
	text-align: center;
	background-color: #252b42;
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 326px;
		height: 4px;
		background: ${({ borderColor }) => borderColor};
	}
`;

const BigCardTop = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
`;
const BigCardSocial = styled.img``;

const BigCardUser = styled.h2`
	margin: 0;
	font-size: 12px;
`;

const BigCardContent = styled.div``;

const BigCardContentItem = styled.p`
	margin: 0;
	font-size: ${({ size }) => size};
	color: ${({ color }) => color};
	letter-spacing: ${({ space }) => space};
`;

const BigCardBottom = styled.div``;

export {
	StyledBigCard,
	BigCardTop,
	BigCardSocial,
	BigCardUser,
	BigCardContent,
	BigCardContentItem,
	BigCardBottom
};
