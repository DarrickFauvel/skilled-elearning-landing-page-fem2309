/* eslint-disable react/prop-types */

const Logo = ({ variant = "dark" }) => {
  return (
    <img
      className="logo"
      src={`/assets/logos/logo-${variant}.svg`}
      alt="Dark Logo"
    />
  )
}
export default Logo
