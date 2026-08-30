function EmailButton({ children, href = "#" }) {
  return (
    <a className="email-button" href={href}>
      <span>{children}</span>
    </a>
  );
}

export default EmailButton;
