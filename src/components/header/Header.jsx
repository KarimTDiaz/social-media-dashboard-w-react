import { StyledToggle } from '../toggle-theme/styles';
import Toggle from '../toggle-theme/Toggle';
import {
	HeaderInfo,
	HeaderTitle,
	HeaderToggleContainer,
	StyledHeader
} from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<HeaderTitle>Social Media Dashboard</HeaderTitle>
			<HeaderInfo size='1rem'>Total Followers:</HeaderInfo>
			<HeaderToggleContainer>
				<HeaderInfo size='0.9rem'>Dark Mode</HeaderInfo>
				<Toggle />
			</HeaderToggleContainer>
		</StyledHeader>
	);
};

export default Header;
