import LogoLight from "@/assets/logo-light.svg"
import Button from "../Button/Button"

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={LogoLight} alt="Light Logo" />
        <Button href="#" variant="secondary">
          Get Started
        </Button>
      </div>
      <p>&copy; 2023 Skilled E-Learning. All rights reserved.</p>
    </footer>
  )
}
export default Footer
