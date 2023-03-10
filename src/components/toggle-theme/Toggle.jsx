import { StyledToggle } from './styles';
import { useState } from 'react';

const Toggle = ({ dark, setDark }) => {
	return <StyledToggle dark={dark} onClick={() => setDark(!dark)} />;
};

export default Toggle;
