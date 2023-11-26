import imageHeroMobile from "@/assets/image-hero-mobile.png"

import Button from "./Button"

const Hero = () => {
  return (
    <section className="hero">
      <h1>Maximize skill, minimize budget</h1>

      <p>
        Our modern courses across a range of in-demand skills will give you the
        knowledge you need to live the life you want.
      </p>

      <Button link="#" variant="primary">
        Get Started
      </Button>

      <img src={imageHeroMobile} />
    </section>
  )
}
export default Hero
