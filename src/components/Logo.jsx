/* eslint-disable react/prop-types */
import logoDark from "@/assets/logo-dark.svg"
import logoLight from "@/assets/logo-light.svg"

const Logo = ({ variant }) => {
  return (
    <img
      className="logo"
      src={variant === "dark" ? logoDark : logoLight}
      alt="Dark Logo"
    />
  )
}
export default Logo
