import logoDark from "@/assets/logo-dark.svg"
import Button from "../Button/Button"

const Header = () => {
  return (
    <header>
      <img src={logoDark} alt="Dark Logo" />

      <Button link="#">Get Started</Button>
    </header>
  )
}
export default Header
