import Button from "./Button"

const imagePath = "/assets/images/"
const imageName = "image-hero-"
const deviceNames = ["mobile", "tablet", "desktop"]
const imageTypes = [".webp", "@2x.webp 2x", ".png", "@2x.png 2x"]

const imageSources = deviceNames.map((deviceName) => {
  const imageNames = imageTypes.map((type) => {
    return `${imagePath}${imageName}${deviceName}${type}`
  })
  return {
    deviceName: deviceName,
    sources: imageNames,
  }
})

const getSrcSet = (deviceName) => {
  let srcSet = ""
  imageSources.find((source) => {
    if (source.deviceName === deviceName) {
      srcSet = source.sources.join(", ")
    }
  })
  return srcSet
}

const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <h1>Maximize skill, minimize budget</h1>
        <p>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <Button link="#" variant="primary">
          Get Started
        </Button>
      </div>

      <picture className="heroImage">
        <source media="(min-width: 1440px)" srcSet={getSrcSet("desktop")} />
        <source media="(min-width: 768px)" srcSet={getSrcSet("tablet")} />
        <source srcSet={getSrcSet("mobile")} />
        <img
          srcSet={getSrcSet("mobile")}
          src="/assets/images/image-hero-mobile.png"
          alt="woman holding mug"
        />
      </picture>
    </section>
  )
}
export default Hero
