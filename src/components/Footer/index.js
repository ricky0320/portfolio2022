import React from 'react';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';

const Footer = () => {
	return (
		<footer className="foot">
			<div>
				<a className="icon is-large" href="https://github.com/ricky0320">
					<BsGithub />
				</a>
				<a className="icon is-large" href="https://www.linkedin.com/in/ricky-leung-826a7713a/">
					<ImLinkedin />
				</a>
				<a className="icon is-large" href="https://twitter.com/ricxx0320">
					<BsTwitter />
				</a>
			</div>
		</footer>
	);
};

export default Footer;