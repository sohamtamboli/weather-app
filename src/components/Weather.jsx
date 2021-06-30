import React, { useState } from "react";
import styled from "styled-components";

const WeatherComponentWrapper = styled.div`
	min-height: 100vh;
	width: 100%;
	display: flex;
`;
const Left = styled.div`
	flex: 0.7;
	/* background-color: red; */
	display: flex;
	flex-direction: column;
`;
const TopBar = styled.div`
	flex: 0.1;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 12px;
	padding: 2rem 2rem 2rem 3rem;
`;
const GithubLink = styled.a`
	display: grid;
	place-self: center;
`;
const MainContent = styled.div`
	flex: 0.9;
	color: #fff;
	/* background-color: green; */
`;
const Right = styled.div`
	flex: 0.3;
	padding: 2rem;
	color: #fff;
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);
`;
const InputWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	gap: 32px;
`;
const Input = styled.input`
	width: 100%;
	padding: 0.8rem;
	font-size: 1.2rem;
	font-weight: 600;
	letter-spacing: 1px;
	outline: none;
	border: none;
	background-color: transparent;
	/* border-top: 1px solid #fff; */
	border-bottom: 1px solid #fff;
	/* border-left: 1px solid #fff; */
	color: #fff;
	:focus {
		outline: none;
	}

	::placeholder {
		color: #aaaaaa;
	}
`;
const Button = styled.button`
	padding: 0.8rem 1.2rem;
	font-size: 1rem;
`;

const Hr = styled.hr`
	/* width: 105%; */
	/* margin-left: -10px;
	margin-top: 3rem;
	margin-bottom: 3rem; */
	width: 90%;
	margin: 3rem auto;
	border: none;
	border-top: 1px solid #aaa;
`;
const DetailsWrapper = styled.div``;
const Title = styled.h3`
	font-size: ${(props) => props.fs || "1rem"};
	font-weight: ${(props) => props.fw || 400};
	color: ${(props) => props.color || "#fff"};
	margin: 0;
	padding: ${(props) => props.padding};
`;

const Weather = () => {
	const [city, setCity] = useState();
	const getCity = (e) => {
		setCity(e.target.value);
	};

	const searchCity = () => {
		console.log(city);
		setCity("");
	};

	function getCurrentDate() {
		let options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
			hour12: true,
		};

		// return new Date().toLocaleString("en-GB", options);
		return new Date().toLocaleTimeString([], options);
	}
	getCurrentDate();

	return (
		<WeatherComponentWrapper>
			<Left>
				<TopBar>
					<Title fs='1.3rem' fw='700'>
						the.weather
					</Title>
					<GithubLink
						target='_blank'
						className='github-link'
						href='https://github.com/sohamtamboli/ReactJs'>
						<box-icon
							size='sm'
							color='#fff'
							type='logo'
							name='github'></box-icon>
					</GithubLink>
				</TopBar>
				<MainContent></MainContent>
			</Left>
			<Right>
				<InputWrapper>
					<Input
						type='text'
						placeholder='Type City Name'
						value={city || ""}
						onChange={getCity}
					/>
					<Button onClick={searchCity}>Search</Button>
				</InputWrapper>
				<Hr />
				<DetailsWrapper>
					<Title fs='1.1rem' fw='400'>
						Weather Details
					</Title>
				</DetailsWrapper>
			</Right>
		</WeatherComponentWrapper>
	);
};

export default Weather;
