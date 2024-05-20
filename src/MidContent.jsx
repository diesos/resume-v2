import IconMail from "./assets/Iconmail.png"

export default function MidContent(){
	return(
	<div className="mid-container">
		<h1>Omer Ozturk</h1>
		<h4>Web Developer</h4>
		<p className="mail">ozturk@live.fr</p>
		<button onClick={() => window.location.href = 'mailto:ozturk@live.fr'}>
			<img src={IconMail} alt="mail-icon"/>Email
		</button>
		<h2>About</h2>
		<p className="main-paragraph">I am a passionate web developer constantly seeking new
		challenges and knowledge. With a focus on user experience and efficiency,
		I build creative solutions that save users time. Honesty and a strong work ethic are core values that guide my approach to every project.</p>
		<h2>Interests</h2>
		<p className="main-paragraph">Exploring new culinary experiences (Pizza🍕)<br></br>
		🎮Getting lost in video games from my childhood<br></br>
		📷Creating memories with my wife and son (family & happy moments)</p>
	</div>
	)
}
