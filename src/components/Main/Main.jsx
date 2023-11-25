import imageHeroMobile from "@/assets/image-hero-mobile.png"
import iconAnimation from "@/assets/icon-animation.svg"
import iconDesign from "@/assets/icon-design.svg"
import iconPhotography from "@/assets/icon-photography.svg"
import iconCrypto from "@/assets/icon-crypto.svg"
import iconBusiness from "@/assets/icon-business.svg"
import Button from "../Button/Button"

const Main = () => {
  return (
    <main>
      <h1>Maximize skill, minimize budget</h1>

      <p>
        Our modern courses across a range of in-demand skills will give you the
        knowledge you need to live the life you want.
      </p>

      <Button link="#" variant="primary">
        Get Started
      </Button>

      <img src={imageHeroMobile} />

      <h2>Check out our most popular courses!</h2>

      <img src={iconAnimation} alt="Animation icon" />
      <article>
        <h3>Animation</h3>
        <p>
          Learn the latest animation techniques to create stunning motion design
          and captivate your audience.
        </p>
      </article>

      <img src={iconDesign} alt="Design icon" />
      <article>
        <h3>Design</h3>
        <p>
          Create beautiful, usable interfaces to help shape the future of how
          the web looks.
        </p>
        <a href="#">Get Started</a>
      </article>

      <img src={iconPhotography} alt="Photgraphy icon" />
      <article>
        <h3>Photography</h3>
        <p>
          Explore critical fundamentals like lighting, composition, and focus to
          capture exceptional photos.
        </p>
        <a href="#">Get Started</a>
      </article>

      <img src={iconCrypto} alt="Crypto icon" />
      <article>
        <h3>Crypto</h3>
        <p>
          All you need to know to get started investing in crypto. Go from
          beginner to advanced with this 54 hour course.
        </p>
        <a href="#">Get Started</a>
      </article>

      <img src={iconBusiness} alt="Business icon" />
      <article>
        <h3>Business</h3>
        <p>
          A step-by-step playbook to help you start, scale, and sustain your
          business without outside investment.
        </p>
        <a href="#">Get Started</a>
      </article>
    </main>
  )
}
export default Main
