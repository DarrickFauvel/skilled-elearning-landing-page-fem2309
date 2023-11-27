import Button from "./Button"
import Logo from "./Logo"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <section>
          <Logo variant="light" />
          <Button href="#" variant="secondary">
            Get Started
          </Button>
        </section>
      </div>
    </footer>
  )
}
export default Footer
