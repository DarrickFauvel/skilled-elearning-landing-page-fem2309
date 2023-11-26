/* eslint-disable react/prop-types */

const Button = ({ link, children, variant = "default" }) => {
  const buttonClass =
    variant === "primary"
      ? "primary"
      : variant === "secondary"
      ? "secondary"
      : "default"

  return (
    <a href={link} className={`button ${buttonClass}`}>
      <span>{children}</span>
    </a>
  )
}

export default Button
