import styled from 'styled-components';

const StyledBigCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: center;
		gap: 2rem;
	}
`;

export { StyledBigCardContainer };
