import MainContainer from './components/main-container/MainContainer';
import { GlobalStyle } from './styles/globalStyles';
import { useState } from 'react';

const App = () => {
	const [dark, setDark] = useState(true);

	return (
		<>
			<GlobalStyle dark={dark} />
			<MainContainer dark={dark} setDark={setDark} />;
		</>
	);
};

export default App;
