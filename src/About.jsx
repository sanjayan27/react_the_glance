import React from 'react'
import image from './components/saan.jpg'

const About = () => {
  return (
    <section className="section-about">
      <section className="section2-about">
        <figure>
          <img src={image}  alt="" className='saan-image' />
        </figure>
        <h2>
          heyyyy ...! here sanjay
        </h2>
        <p>
          this is the right platform to post your thougths , queries anything you have.
        </p>
      </section>
    </section>
  )
}

export default About