// Home page components
import Header from '../../components/Header'
import Showcase from '../../components/Showcase'
import Videos from '../../components/Videos'
import Plans from './../../components/Plans'
// import Testimonial from './../../components/Testimonial';
import Footer from './../../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <Showcase />
      <Videos />
      <Plans />
      {/* <Testimonial /> */}
      <Footer />
    </>
  )
}

export default Home
