import logoUrl from "../assets/logo.svg";

function Logo() {
  return (
    <span className="logo" aria-label="ROSSI">
      <img src={logoUrl} alt="ROSSI" className="logo-img" />
    </span>
  );
}

export default Logo;
