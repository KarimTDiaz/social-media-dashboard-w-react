import styled from 'styled-components';

const StyledSmallCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	@media screen and (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(4, 255px);
		column-gap: 2rem;
		justify-content: center;
	}
`;
const StyledSmallCardsTitle = styled.h2`
	padding: 1rem 1.5rem;
	color: ${({ dark }) => (dark ? 'white' : '#1D1F29')};
	@media screen and (min-width: 768px) {
		padding-left: 10rem;
	}
`;

export { StyledSmallCardContainer, StyledSmallCardsTitle };
