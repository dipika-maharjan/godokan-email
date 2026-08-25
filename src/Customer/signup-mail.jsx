import EmailButton from "../components/EmailButton";
import Icon from "../components/Icons";

function SignupMail() {
	return (
		<article className="signup-mail" aria-labelledby="signup-title">
			<div className="signup-mail__heading">
				<Icon name="check" />
				<h1 id="signup-title">Thank you for signing up!</h1>
			</div>

			<section className="signup-mail__card">
				<p>
					Welcome to Godokan,
					<br />
					{"{{name}}"}.
				</p>
				<p>
					Your account is currently
					<br />
					pending verification. We are
					<br />
					reviewing your details and will
					<br />
					notify you once your
					<br />
					professional logistics account
					<br />
					is active.
				</p>

				<EmailButton href="https://godokan.com/account/status">
					View Account Status
				</EmailButton>
			</section>

			<div className="signup-mail__notice">
				<Icon name="info" />
				<p>
					Verification typically takes 1-2
					<br />
					business days.
				</p>
			</div>
		</article>
	);
}

export default SignupMail;
