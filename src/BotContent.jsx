import LogoGithub from "./assets/logo-github.svg"
import LogoLinkedin from "./assets/logo-linkedin.svg"
import LogoWhatsapp from "./assets/logo-whatsapp.svg"

export default function BotContent(){
	return(
		<div className="bot-container">
			<a href="https://www.linkedin.com/in/ozturk-omer/" target="_blank"><img src={LogoLinkedin} alt="linkedin logo"/></a>
			<a href="https://github.com/diesos" target="_blank"><img src={LogoGithub} alt="github logo"/></a>
			<a href="https://api.whatsapp.com/send?phone=0669211513" target="_blank"><img src={LogoWhatsapp} alt="insta logo"/></a>
		</div>
	)
}
