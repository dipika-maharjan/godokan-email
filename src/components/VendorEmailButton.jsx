function EmailButton({ children, href = "#", showArrow = false }) {
  return (
    <a className="email-button" href={href}>
      {showArrow && (
        <span className="email-button__icon" aria-hidden="true">
          &rarr;
        </span>
      )}
      <span>{children}</span>
    </a>
  );
}

export default EmailButton;
