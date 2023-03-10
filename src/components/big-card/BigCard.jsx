import {
	BigCardBottomInfo,
	BigCardContent,
	BigCardAmount,
	BigCardSocial,
	BigCardTop,
	BigCardUser,
	StyledBigCard,
	BigCardBottom,
	BigCardTarget
} from './styles';
import Icon from '../icon/Icon';

const BigCard = ({
	borderColor,
	social,
	name,
	number,
	target,
	results,
	positive,
	dark
}) => {
	return (
		<StyledBigCard borderColor={borderColor} dark={dark}>
			<BigCardTop>
				<BigCardSocial {...social} />
				<BigCardUser dark={dark}>{name}</BigCardUser>
			</BigCardTop>

			<BigCardContent>
				<BigCardAmount dark={dark}>
					{number.toLocaleString('de-DE')}
				</BigCardAmount>
				<BigCardTarget dark={dark}>{target}</BigCardTarget>
			</BigCardContent>
			<BigCardBottom>
				<Icon state={positive}></Icon>
				<BigCardBottomInfo positive={positive}>{results}</BigCardBottomInfo>
			</BigCardBottom>
		</StyledBigCard>
	);
};
export default BigCard;
