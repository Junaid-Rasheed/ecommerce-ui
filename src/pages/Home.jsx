import React from 'react'
import Categories from '../components/Categories'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'

function Home() {
  return (
    <div>
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
    </div>
  )
}

export default Home