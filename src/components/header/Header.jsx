import { StyledToggle } from '../toggle-theme/styles';
import Toggle from '../toggle-theme/Toggle';
import {
	HeaderInfo,
	HeaderTitle,
	HeaderToggleContainer,
	StyledHeader
} from './styles';

const Header = ({ dark, setDark }) => {
	return (
		<StyledHeader dark={dark}>
			<HeaderTitle dark={dark}>Social Media Dashboard</HeaderTitle>
			<HeaderInfo size='1rem'>Total Followers:</HeaderInfo>
			<HeaderToggleContainer>
				<HeaderInfo size='0.9rem'>Dark Mode</HeaderInfo>
				<Toggle dark={dark} setDark={setDark} />
			</HeaderToggleContainer>
		</StyledHeader>
	);
};

export default Header;
