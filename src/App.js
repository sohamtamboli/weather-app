import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import Wapp from "./components/Wapp";
// import "./App.css";

import Weather from "./components/Weather";
import { backgrounds } from "./assets/backgrounds";

const AppWrapper = styled.div`
	min-height: 100vh;
	background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
		url(${(props) => backgrounds[props.url]});
	background-image: image-set(url(${(props) => backgrounds[props.url]}));
	background-size: cover;
	background-repeat: no-repeat;
`;

function App() {
	const [changeBackground, setChangeBackground] = useState();

	useEffect(() => {
		setChangeBackground("Rain");
	}, []);
	// console.log(backgrounds["clouds"]);
	console.log(changeBackground);
	return (
		//  <Wapp />
		<AppWrapper url={changeBackground}>
			<Weather setChangeBackground={setChangeBackground} />
		</AppWrapper>
	);
}

export default App;
