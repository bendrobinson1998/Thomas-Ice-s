import React from 'react'
import vince_van from '../../assets/vince_van.jpg'
const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src={vince_van} />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Enjoy the authentic
        <br className="hidden lg:inline-block" /> ice cream man experience 🍦
      </h1>
      <p className="mb-8 leading-relaxed">The family business started way back in the early 1950's when Mr Vincent Urso moved to the United Kingdom from his home country of Sicily.</p>
      <div className="flex justify-center">
     <a href="https://www.facebook.com/Thomasices/"><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Our Facebook</button></a>
           </div>
    </div>
  </div>
</section>
  )
}

export default Hero