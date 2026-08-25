import VendorEmailLayout from "../components/VendorEmailLayout";
import VendorEmailButton from "../components/VendorEmailButton";

function SignUp({
  // default value is used only where no name is provided during signup,  and the link is used to redirect the user to the godokan website
  name="user",   
  link="https://godokan.com/"
}) {
  return (
    <VendorEmailLayout>
      <article className="signup-email" aria-labelledby="signup-title">
        <p className="signup-eyebrow">WELCOME TO GODOKAN</p>

        {/*dynamic user name*/}
        <h1 id="signup-title">Thank you for signing up, {name}!</h1>

        <p className="signup-message">
          We&apos;re excited to have you on GoDokan!
          <br />
          Your account is currently pending verification.
          <br/>
          Once verified, you will be able to log in.
        </p>

        {/* The link prop controls where the CTA sends the user */}
        <VendorEmailButton href={link} showArrow>
          EXPLORE GODOKAN
        </VendorEmailButton>

        <p className="signup-description">
          Discover products from multiple sellers
          <br />
          all in one place.
        </p>
        <br />
      </article>
    </VendorEmailLayout>
  );
}

export default SignUp;
