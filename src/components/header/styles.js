import styled from 'styled-components';

const StyledHeader = styled.div`
	width: 100%;
	height: 150px;
	margin: 0;
	padding: 2rem 1.5rem;
	background-color: ${({ dark }) => (dark ? '#20222F' : '#F7F9FF')};
	@media screen and (min-width: 768px) {
		padding-left: 10rem;
	}
`;
const HeaderTitle = styled.h1`
	color: ${({ dark }) => (dark ? 'white' : '#1D1F29')};
	margin: 0;
	margin-bottom: 0.5rem;
	font-size: 24px;
	@media screen and (min-width: 768px) {
		font-size: 28px;
	}
`;
const HeaderInfo = styled.p`
	margin: 0;
	font-size: ${({ size }) => size};
	font-weight: 600;
	color: ${({ dark }) => (dark ? '#8C98C6' : '#63687D')};
`;
const HeaderToggleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	@media screen and (min-width: 768px) {
		justify-content: start;
	}
`;
export { StyledHeader, HeaderTitle, HeaderInfo, HeaderToggleContainer };
