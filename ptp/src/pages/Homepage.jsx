import React from 'react'
import Header from '../components/Header'
import WatWeDo from '../components/sections/WatWeDo'
import Connect from '../components/sections/Connect'
import WhatsInForYou from '../components/sections/WhatsInForYou'
import ConsultSection from '../components/sections/ConsultSection'


const Homepage = () => {
  return (
    <div>
     <Header />
     <WatWeDo />
     <Connect />
     <WhatsInForYou />
     <ConsultSection />
    </div>
  )
}

export default Homepage
