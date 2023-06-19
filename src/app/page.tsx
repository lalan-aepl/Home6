
import HeroSection from '@/pages/HeroSection'
import OnlineEducation from '@/pages/onlineEducation'
import Services from '@/pages/Services'
import WorkingProcess from '@/pages/workingProcess'
import Visitors from '@/pages/visitors'
import Pricing from '@/pages/Pricing'
import MakingEassy from '@/pages/makingEassy'
 import Instructor from '@/pages/instructor'
 import Contact from '@/pages/Contact'
import Download from '@/pages/download'
import Hero from '@/pages/hero'
export default function Home() {
  return (
    <main>
      <Hero/>
      {/* <HeroSection/> */}
      <OnlineEducation/>
      <Services/>

      <WorkingProcess/>
      <Visitors/>
      <Pricing/>
      <MakingEassy/>
      <Instructor/>
      <Contact/>
      <Download/>
    </main>
       
  )
}
