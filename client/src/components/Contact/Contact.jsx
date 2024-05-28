import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter, TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";

import "./Contact.scss";
const Contact = () => {
	return (
		<section className="contacts">
			<div className="wrapper">
				<span>Be in touch with us!</span>
				<div className="mail">
					<input
						type="text"
						placeholder="Your Email"
					/>
					<button>Join Us</button>
				</div>
				<div className="icons">
					<TiSocialFacebook size={24} />
					<TiSocialInstagram size={24} />
					<TiSocialTwitter size={24} />
					<TiSocialLinkedin size={24} />
					<TiSocialGithub size={24} />
				</div>
			</div>
		</section>
	);
};

export default Contact;
