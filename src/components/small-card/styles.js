import styled from 'styled-components';

const StyledSmallCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 326px;
	height: 125px;
	padding: 1.3rem;
	background-color: ${({ dark }) => (dark ? '#252b42' : '#F7F9FF')};
	border-radius: 4px;
	@media screen and (min-width: 768px) {
		width: 255px;
		padding: 1rem;
	}
`;
const SmallCardTop = styled.div`
	display: flex;
	justify-content: space-between;
`;
const SmallCardTitle = styled.p`
	margin: 0;
	font-size: 14px;
	font-weight: 600;
	color: ${({ dark }) => (dark ? '#8C98C6' : '#63687D')};
	transition: background-color 0.3s;
`;
const SmallCardSocial = styled.img``;
const SmallCardBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const SmallCardAmount = styled.p`
	margin: 0;
	font-weight: 600;
	font-size: 32px;
	color: ${({ dark }) => (dark ? 'white' : '#1D1F29')};
`;
const SmallCardStats = styled.div``;
const SmallCardStatsInfo = styled.span`
	color: ${({ positive }) => (positive ? '#1EB589' : '#DC414C')};
	font-weight: 600;
	font-size: 12px;
	margin-left: 10px;
`;

export {
	StyledSmallCard,
	SmallCardTop,
	SmallCardTitle,
	SmallCardSocial,
	SmallCardBottom,
	SmallCardAmount,
	SmallCardStats,
	SmallCardStatsInfo
};
