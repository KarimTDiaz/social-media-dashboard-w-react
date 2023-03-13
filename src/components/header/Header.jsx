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
			<HeaderInfo size='1rem'>
				Total Followers: {totalFollowers().toLocaleString('de-DE')}
			</HeaderInfo>
			<HeaderToggleContainer>
				<HeaderInfo size='0.9rem'>
					{dark ? 'Dark Mode' : 'Light Mode'}
				</HeaderInfo>
				<Toggle dark={dark} setDark={setDark} />
			</HeaderToggleContainer>
		</StyledHeader>
	);
};

const totalFollowers = () => {
	return BIG_CARDS_INFO.reduce((acc, current) => acc + current.number, 0);
};

export default Header;
