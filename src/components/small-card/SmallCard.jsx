import { StyledSmallCard,SmallCardTop,SmallCardTitle,SmallCardSocial,SmallCardBottom,SmallCardAmount,SmallCardStats,SmallCardStatsInfo } from './styles';
import Icon from '../icon/Icon';

const SmallCard = ({ social, title, number, results, positive,dark }) => {
	return <StyledSmallCard dark={dark}>
		<SmallCardTop>
			<SmallCardTitle dark={dark}>{title}</SmallCardTitle>
			<SmallCardSocial {...social}/>
		</SmallCardTop>
		<SmallCardBottom>
			<SmallCardAmount dark={dark}>{number}</SmallCardAmount>
			<SmallCardStats>
			<Icon state={positive}></Icon>
			<SmallCardStatsInfo positive={positive}>{results}</SmallCardStatsInfo>
			</SmallCardStats>
		</SmallCardBottom>


	</StyledSmallCard>;
};

export default SmallCard;
