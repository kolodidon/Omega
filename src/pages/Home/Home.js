import React from 'react'
import { InfoSection, Pricing } from '../../components'
import { homeObjectOne, homeObjectTwo, homeObjectThree, homeObjectFour } from './Data'

const Home = () => {
    return (
        <>
           <InfoSection {...homeObjectOne}/>
           <InfoSection {...homeObjectTwo}/>
           <Pricing/>
           <InfoSection {...homeObjectThree}/>
           <InfoSection {...homeObjectFour}/>
        </>
    )
}

export default Home