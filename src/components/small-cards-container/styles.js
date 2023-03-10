import styled from 'styled-components';

const StyledSmallCardContainer = styled.div``;

const SmallCardDiv = styled.div``;
const SmallCardTitle = styled.p``;
const SmallCardSocial = styled.img``;
const SmallCardBottom = styled.div``;
const SmallCardBottomInfo = styled.span`
	color: ${({ positive }) => (positive ? '#1EB589' : '#DC414C')};
	font-weight: 600;
	font-size: 12px;
	margin-left: 10px;
`;

export {
	StyledSmallCardContainer,
	SmallCardDiv,
	SmallCardTitle,
	SmallCardSocial,
	SmallCardBottomInfo,
	SmallCardBottom
};
