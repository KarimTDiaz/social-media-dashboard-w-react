import BigCardContainer from '../big-cards-container/BigCardsContainer';
import Header from '../header/Header';
import { StyledMainContainer } from './styles';

const MainContainer = () => {
	return (
		<StyledMainContainer>
			<Header></Header>
			<BigCardContainer/>
		</StyledMainContainer>
	);
};

export default MainContainer;
