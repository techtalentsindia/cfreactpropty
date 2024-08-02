const laptop = new URL('./assets/resources.svg', import.meta.url)
const screens = new URL('./assets/screens.svg', import.meta.url)

const Content = () => {
  return (
    <>
      <section className="river">
        <img src={laptop} alt="Laptop with a play button" aria-hidden="true" />
        <article>
          <h1>
            <small>React + Contentful</small>
            Property Website using React Contentful 
          </h1>         
        </article>
      </section>
      <section className="river">
        <img src={screens} alt="React + Contentful" aria-hidden="true" />
        <article>
          <h2>Welcome to SRS Enterprises</h2>
        </article>
      </section>
    </>
  )
}

export default Content
