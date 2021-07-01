import rainbg from "./rain.webp";
import clearbg from "./clear.webp";
import hazebg from "./haze.webp";
import fogbg from "./fog.webp";
import cloudsbg from "./clouds.webp";
import drizzlebg from "./drizzle.webp";
import mistbg from "./mist.webp";
import snowbg from "./snow.webp";
import sunnybg from "./sunny.webp";
import thunderstormbg from "./thunderstorm.webp";
// -----------------------------------------------------
import rainjpg from "./rain.jpg";
import clearjpg from "./clear.jpg";
import hazejpg from "./haze.jpg";
import fogjpg from "./fog.jpg";
import cloudsjpg from "./clouds.jpg";
import drizzlejpg from "./drizzle.jpg";
import mistjpg from "./mist.jpg";
import snowjpg from "./snow.jpg";
import sunnyjpg from "./sunny.jpg";
import thunderstormjpg from "./thunderstorm.jpg";

export const backgrounds = {
	Rain: rainbg || rainjpg,
	Clear: clearbg || clearjpg,
	Haze: hazebg || hazejpg,
	Fog: fogbg || fogjpg,
	Clouds: cloudsbg || cloudsjpg,
	Drizzle: drizzlebg || drizzlejpg,
	Mist: mistbg || mistjpg,
	Snow: snowbg || snowjpg,
	Sunny: sunnybg || sunnyjpg,
	Thunderstorm: thunderstormbg || thunderstormjpg,
};
