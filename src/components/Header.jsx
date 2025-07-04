import HeaderImg from "../assets/react-logo.png";

export default function Header() {
  return (
    <header>
      <img src={HeaderImg} alt="logo image" />
      <h1>React Quiz</h1>
    </header>
  );
}
