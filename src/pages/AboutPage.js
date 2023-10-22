import NavigationBar from '../components/NavigationBar'
import About from '../components/About'
import Footer from '../components/Footer'




function AboutPage() {
  return (
    <div className='home'>
      <header>
        <NavigationBar />
        <About />
        <Footer />
      </header>
    </div>
  )
}

export default AboutPage