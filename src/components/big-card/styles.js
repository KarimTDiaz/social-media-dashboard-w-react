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
	background-color: ${({ dark }) => (dark ? '#252b42' : '#F7F9FF')};
	border-radius: 4px;
	transition: background-color 0.3s;
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 326px;
		height: 4px;
		background: ${({ borderColor }) => borderColor};
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
	}
	@media screen and (min-width: 768px) {
		width: 255px;
		height: 216px;
		&::after {
			width: 255px;
		}
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
	color: ${({ dark }) => (dark ? '#8C98C6' : '#63687D')};
	transition: background-color 0.3s;
`;

const BigCardContent = styled.div``;

const BigCardAmount = styled.p`
	margin: 0;
	font-size: 56px;
	font-weight: 600;
	color: ${({ dark }) => (dark ? 'white' : '#1D1F29')};
`;

const BigCardTarget = styled.p`
	margin: 0;
	font-size: 12px;
	color: ${({ dark }) => (dark ? '#8C98C6' : '#63687D')};
	transition: background-color 0.3s;
	letter-spacing: 0.4rem;
`;

const BigCardBottom = styled.div``;
const BigCardBottomInfo = styled.span`
	color: ${({ positive }) => (positive ? '#1EB589' : '#DC414C')};
	font-weight: 600;
	font-size: 12px;
	margin-left: 10px;
`;

export {
	StyledBigCard,
	BigCardTop,
	BigCardSocial,
	BigCardUser,
	BigCardContent,
	BigCardAmount,
	BigCardBottom,
	BigCardBottomInfo,
	BigCardTarget
};
