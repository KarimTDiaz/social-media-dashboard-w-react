import { StyledBigCardContainer } from './styles';
import { BIG_CARDS_INFO } from '../../constants/consts';
import BigCard from '../big-card/BigCard';

const BigCardContainer = ({ dark }) => {
	return (
		<StyledBigCardContainer>
			{BIG_CARDS_INFO.map(card => (
				<BigCard dark={dark} {...card} key={card.id} />
			))}
		</StyledBigCardContainer>
	);
};

export default BigCardContainer;
