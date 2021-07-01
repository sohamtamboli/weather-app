import React, { useState, useEffect } from "react";
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
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	padding: 0 0 6rem 6rem;
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
	letter-spacing: ${(props) => props.ls};
`;
const GuideText = styled.h1`
	margin: 0;
	font-size: 5rem;
	padding: 3rem;
`;
const ContentWrapper = styled.div`
	margin: 1rem;
	display: flex;
	align-items: center;
	gap: 16px;
`;
const Temperature = styled.h1`
	font-size: 7rem;
	font-weight: 800;
`;
const LocationWrapper = styled.div``;
// const DateTime = styled.p`
// 	margin: 0;
// `;
const WSubInfo = styled.p`
	margin: 0;
`;
const WeatherInfoWrapper = styled.div``;
const Icon = styled.img``;
const Wtype = styled.p`
	margin: 0;
`;
const DataList = styled.ul`
	margin: 2.5rem 0;
`;
const DataHolder = styled.li`
	list-style: none;
	display: flex;
	justify-content: space-between;
	padding: 1rem 0;
	color: #aaa;
`;
const DataSpan = styled.span`
	font-size: 1rem;
	font-weight: 500;
	color: #aaa;
`;

const Weather = ({ setChangeBackground }) => {
	const [city, setCity] = useState();
	const [weatherData, setWeatherData] = useState({});
	const [arrayData, setArrayData] = useState([]);
	const [show, setShow] = useState(false);
	const [cod, setCod] = useState(false);

	useEffect(() => {
		setShow(true);
	}, []);

	const getCity = (e) => {
		setCity(e.target.value);
	};

	const searchCity = (e) => {
		if (e.key === "Enter") {
			console.log(city);

			const fetchWeatherData = async () => {
				const res = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b1fb91a0f456e84a7667c0a94073fc9e`
				);
				const weatherInfo = await res.json();
				console.log("Data", weatherInfo);
				if (weatherInfo.cod === 200) {
					setWeatherData(weatherInfo);
					setArrayData(weatherInfo.weather[0]);
					setChangeBackground(weatherInfo.weather[0].main);
					setCod(false);
				} else {
					setWeatherData(weatherInfo);
					setCod(true);
				}
			};
			fetchWeatherData();
			console.log("out of func", weatherData);
			setCity();
			setShow(false);
		}
	};

	// TRIED TO GET SEARCHED QUERIES DATE AND TIME But ITS A BIT COMPLICATED FOR SIMPLE PROJECT LIKE THIS
	// function getCurrentDate() {
	// 	// let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	// 	let options = {
	// 		weekday: "long",
	// 		year: "numeric",
	// 		month: "long",
	// 		day: "numeric",
	// 		hour: "2-digit",
	// 		minute: "2-digit",
	// 		hour12: true,
	// 	};

	// 	// return new Date().toLocaleString("en-GB", { timezone: timezone });
	// 	return new Date().toLocaleTimeString([], options);
	// }

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
				<MainContent>
					{show ? (
						<GuideText>Type City</GuideText>
					) : (
						<>
							{cod ? (
								<GuideText> {weatherData?.message} </GuideText>
							) : (
								<>
									<ContentWrapper>
										<Temperature>
											{weatherData?.main?.temp?.toString().split(".")[0]}°
										</Temperature>
										<LocationWrapper>
											<Title fs='4rem' ls='1px' fw='700'>
												{weatherData?.name}
											</Title>
											{/* <DateTime></DateTime> */}
											<WSubInfo>{arrayData?.description}</WSubInfo>
										</LocationWrapper>
										<WeatherInfoWrapper>
											<Icon
												src={`http://openweathermap.org/img/w/${arrayData?.icon}.png`}
												alt='icon'
											/>
											<Wtype>{arrayData?.main}</Wtype>
										</WeatherInfoWrapper>
									</ContentWrapper>
								</>
							)}
						</>
					)}
				</MainContent>
			</Left>
			<Right>
				<InputWrapper>
					<Input
						type='text'
						placeholder='Type City Name'
						value={city || ""}
						onChange={getCity}
						onKeyDown={searchCity}
					/>
					<Button onClick={searchCity}>Search</Button>
				</InputWrapper>
				<Hr />
				<DetailsWrapper>
					<Title fs='1.2rem' fw='400'>
						Weather Details {` of ${weatherData.name || "Searched City"}`}
					</Title>
					<DataList>
						<DataHolder>
							<Title color='#aaa' fs='1rem' fw='600'>
								Recorded Temperature
							</Title>
							<DataSpan>{weatherData?.main?.temp} °C</DataSpan>
						</DataHolder>
						<DataHolder>
							<Title color='#aaa' fs='1rem' fw='600'>
								What it feels like
							</Title>
							<DataSpan>{weatherData?.main?.feels_like} °C</DataSpan>
						</DataHolder>
						<DataHolder>
							<Title color='#aaa' fs='1rem' fw='600'>
								Minimum Temperature
							</Title>
							<DataSpan>{weatherData?.main?.temp_min} °C</DataSpan>
						</DataHolder>
						<DataHolder>
							<Title color='#aaa' fs='1rem' fw='600'>
								Maximum Temperature
							</Title>
							<DataSpan>{weatherData?.main?.temp_max} °C</DataSpan>
						</DataHolder>
						<DataHolder>
							<Title color='#aaa' fs='1rem' fw='600'>
								Recorded Pressure
							</Title>
							<DataSpan>{weatherData?.main?.pressure}</DataSpan>
						</DataHolder>

						<DataHolder>
							<Title color='#aaa' fs='1rem' fw='600'>
								Recorded Humidity
							</Title>
							<DataSpan>{weatherData?.main?.humidity}</DataSpan>
						</DataHolder>
					</DataList>
				</DetailsWrapper>
			</Right>
		</WeatherComponentWrapper>
	);
};

export default Weather;
