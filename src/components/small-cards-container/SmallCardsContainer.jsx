import { StyledSmallCardContainer } from './styles';
import { SMALL_CARDS_INFO } from '../../constants/consts';
import SmallCard from '../small-card/SmallCard';

const SmallCardsContainer = () => {
	return (
		<StyledSmallCardContainer>
			{SMALL_CARDS_INFO.map(card => (
				<SmallCard {...card} key={card.id} />
			))}
		</StyledSmallCardContainer>
	);
};

export default SmallCardsContainer;
