import Button from "./Button"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="header">
      <Logo variant="dark" />

      <Button link="#">Get Started</Button>
    </header>
  )
}
export default Header
