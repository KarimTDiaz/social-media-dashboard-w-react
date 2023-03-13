import { StyledToggle } from '../toggle-theme/styles';
import Toggle from '../toggle-theme/Toggle';
import {
	HeaderInfo,
	HeaderTitle,
	HeaderToggleContainer,
	StyledHeader
} from './styles';
import { BIG_CARDS_INFO } from '../../constants/consts';

const Header = ({ dark, setDark }) => {
	return (
		<StyledHeader dark={dark}>
			<HeaderTitle dark={dark}>Social Media Dashboard</HeaderTitle>
			<HeaderInfo size='1rem'>Total Followers: {amount.toLocaleString('de-DE')}</HeaderInfo>
			<HeaderToggleContainer>
				<HeaderInfo size='0.9rem'>{dark ? 'Dark Mode' : 'Light Mode'}</HeaderInfo>
				<Toggle dark={dark} setDark={setDark} />
			</HeaderToggleContainer>
		</StyledHeader>
	);
};
let amount =0;

const totalFollowers = () => {
	BIG_CARDS_INFO.forEach(card => {
		amount += card.number
	})
}
totalFollowers()

export default Header;
