import Button from "./Button"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Logo variant="dark" />
        <Button link="#">Get Started</Button>
      </div>
    </header>
  )
}
export default Header
