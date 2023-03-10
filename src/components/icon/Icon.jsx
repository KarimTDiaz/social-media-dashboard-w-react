import { StyledIcon } from './styles';

const Icon = ({ state }) => {
	return state ? (
		<StyledIcon src='./public/images/icon-up.svg' />
	) : (
		<StyledIcon src='./public/images/icon-down.svg' />
	);
};

export default Icon;
