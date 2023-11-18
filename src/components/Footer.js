import "../styles/Footer.css";

function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer>
			<p>
				<span>Created for educational purposes.</span>
			</p>
			<p>
				By Kassandra Haftner & Amy Turton
				<br />
				&copy; {currentYear} FWD 33
			</p>
		</footer>
	);
}

export default Footer;
