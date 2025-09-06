import React from 'react'
import Navbar from '../components/Navbar'

const AboutPage = () => {
  return (
    <div>
      <Navbar />

     <section className="relative mt-8 min-h-[65rem] text-white px-6 md:px-20 py-16">
      {/* Section Title */}
      <div className="text-center mb-12 mt-[5.5rem]">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          About Me
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          I'm a passionate Fullstack Developer dedicated to creating
          sleek, modern, and user-friendly digital experiences.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center lg:w-[100%]">
          <img
            src="https://via.placeholder.com/300x400"
            alt="profile"
            className="rounded-2xl shadow-lg border border-gray-700"
          />
        </div>

        {/* Info */}
        <div className=''>
          <h3 className="text-2xl font-semibold mb-4">Professional Fullstack Developer</h3>
          <p className="text-gray-400 mb-6">
            I specialize in crafting responsive websites and intuitive designs.
            With strong attention to detail, I aim to deliver work that enhances
            user interaction and overall experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300">
            <div>
              <p><span className="font-semibold text-white">Degree:</span> Mechanical Engineering Bachelors</p>
              <p><span className="font-semibold text-white">Email:</span> johnkassah23@gmail.com</p>
              <p><span className="font-semibold text-white">Availability:</span> Freelance 
              | Fulltime | Part-time</p>
            </div>

            <div>
              <p><span className="font-semibold text-white">Phone:</span> +233 55 884 5533/ +233 50 576 4298</p>
              <p><span className="font-semibold text-white">City:</span> Accra, Ghana</p>
            </div>
          </div>

          <p className="mt-6 text-gray-400">
            Always eager to take on new challenges and collaborate with creative
            minds. Let’s build something exceptional together.
          </p>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default AboutPage