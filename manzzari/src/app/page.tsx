import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Categories from '@/components/Categories'
import Trendy from '@/components/Trendy'
import Images from "@/components/Images"
import Spotted from '@/components/Spotted'
import Purity from '@/components/Purity'
import Footer from '@/components/Footer'


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <Categories/>
      <Trendy/>
      <Images/>
      <Spotted/>
      <Purity/>
      <Footer/>


    </div>
  )
}
export default HomePage