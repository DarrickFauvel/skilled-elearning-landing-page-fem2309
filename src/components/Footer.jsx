import Button from "./Button"
import Logo from "./Logo"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <Logo variant="light" />

        <Button href="#" variant="secondary">
          Get Started
        </Button>
      </div>
      <p className="copyright">
        &copy; 2023 Skilled E-Learning. All rights reserved.
      </p>
    </footer>
  )
}
export default Footer
