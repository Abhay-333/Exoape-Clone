import ImagesSection from './Components/ImagesSection'
import Landing from './Components/Landing'
import Navbar from './Components/Navbar'
import PlayReel from './Components/PlayReel'
import WorkSection from './Components/WorkSection'

function App() {

  return (
    <div className='w-full'>
    <Navbar/>
    <Landing/>
    <WorkSection />
    <PlayReel/>
    <ImagesSection/>
    
    </div>
  )
}

export default App
