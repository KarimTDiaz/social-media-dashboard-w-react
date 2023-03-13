import { StyledSmallCardContainer, StyledSmallCardsTitle } from './styles';
import { SMALL_CARDS_INFO } from '../../constants/consts';
import SmallCard from '../small-card/SmallCard';

const SmallCardsContainer = ({dark}) => {
	return (
		<>
		<StyledSmallCardsTitle dark={dark}>Overview - Today</StyledSmallCardsTitle>
		<StyledSmallCardContainer>
			
			{SMALL_CARDS_INFO.map(card => (
				<SmallCard dark={dark} {...card} key={card.id} />
			))}
		</StyledSmallCardContainer>
		</>
	);
};

export default SmallCardsContainer;
