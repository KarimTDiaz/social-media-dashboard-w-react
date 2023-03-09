import { StyledToggle } from './styles';
import { useState } from 'react';

const Toggle = () => {
	const [theme, setTheme] = useState(false);
	return <StyledToggle onClick={() => setTheme(!theme)} translate={theme} />;
};

export default Toggle;
