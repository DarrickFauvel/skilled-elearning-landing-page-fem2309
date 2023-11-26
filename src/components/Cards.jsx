import { courses } from "@/assets/data"
import Card from "./Card"

const Cards = () => {
  return (
    <section className="cards">
      <h2>Check out our most popular courses!</h2>

      {courses.map((course) => (
        <Card course={course} key={course.title} />
      ))}
    </section>
  )
}
export default Cards
