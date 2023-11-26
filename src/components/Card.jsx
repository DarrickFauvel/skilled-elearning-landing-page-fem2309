/* eslint-disable react/prop-types */
const Card = ({ course }) => {
  const { title, text, icon, url } = course

  return (
    <article className="card">
      <img src={`/assets/${icon}`} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
      <a className="link" href={url}>
        Get Started
      </a>
    </article>
  )
}
export default Card
