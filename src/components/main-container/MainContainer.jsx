import BigCardContainer from '../big-cards-container/BigCardsContainer';
import Header from '../header/Header';
import SmallCardsContainer from '../small-cards-container/SmallCardsContainer';
import { StyledMainContainer } from './styles';

const MainContainer = ({ dark, setDark }) => {
	return (
		<StyledMainContainer dark={dark}>
			<Header dark={dark} setDark={setDark}></Header>
			<BigCardContainer dark={dark} />
			<SmallCardsContainer dark={dark} />
		</StyledMainContainer>
	);
};

export default MainContainer;
