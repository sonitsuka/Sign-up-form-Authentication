import Google from "../img/google.png";
import Facebook from "../img/facebook.png";
import Apple from "../img/apple.png";

const SnsLogin = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  const apple = () => {
    window.open("http://localhost:5000/auth/apple", "_self");
  };

  return (
    <div className="social-icons">
      <div
        className="loginIcon google"
        href="/auth/google"
        role="button"
        onClick={google}
      >
        <img src={Google} alt="google icon" className="" />
      </div>
      <div
        className="loginIcon facebook"
        href="/auth/facebook"
        role="button"
        onClick={facebook}
      >
        <img src={Facebook} alt="facebook icon" />
      </div>
      <div
        className="loginIcon apple"
        href="/auth/apple"
        role="button"
        onClick={apple}
      >
        <img src={Apple} alt="apple icon" />
      </div>
    </div>
  );
};

export default SnsLogin;
