import ImagesSection from './Components/ImagesSection'
import Landing from './Components/Landing'
import Navbar from './Components/Navbar'
import PlayReel from './Components/PlayReel'
import SpreadSection from './Components/SpreadSection'
import WorkSection from './Components/WorkSection'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='w-full'>
    <Navbar/>
    <Landing/>
    <WorkSection />
    <PlayReel/>
    <ImagesSection/>
    <SpreadSection/>

    </div>
  )
}

export default App
