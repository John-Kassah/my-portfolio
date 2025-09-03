import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Socials from '../components/Socials'

const HomePage = () => {
    // State to control fade-in
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 1000); // small delay before showing
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="w-full ">
                <div
                    className="
                        max-w-7xl 
                        ml-5
                        px-6 
                        pt-[25vh] 
                        pb-16 
                        flex 
                        flex-col 
                        items-start 
                        text-left 
                        md:px-12
                    "
                >
                    <p className="text-sm uppercase text-gray-400 mb-4">
                        Welcome to my world
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Hi, I’m{' '}
                        <span
                            className="
                                bg-gradient-to-r 
                                via-purple-500 
                                from-indigo-400 
                                to-blue-400 
                                bg-clip-text 
                                text-transparent
                            "
                        >
                            John Kassah
                        </span>
                    </h1>

                    <h2 className="text-xl md:text-2xl font-medium text-gray-200 mt-2">
                        a Professional Fullstack Developer.
                    </h2>

                    <p className="max-w-xl text-gray-400 mt-6 leading-relaxed">
                        I am a full-stack web, user-centric web developer. I specialize in back-end design,
                        user research, and front-end development—crafting seamless experiences that
                        delight both users and stakeholders.
                    </p>
                </div>

                <div className='flex justify-center'>

                <div className="w-[26rem] absolute top-[35rem] mx-[12%] mt-[4.5rem] sm:absolute sm:top-[35rem] sm:w-[65%] sm:mt-8 sm:mx-0 sm:left-[17.5%] md:w-1/2 md:ml-5 md:left-0 md:pl-12 flex justify-center md:justify-end lg:absolute lg:top-[30rem] lg:left-[40%]">
                    {/* Image wrapper */}
                    <div
                        className="
                            relative 
                            w-[35rem] 
                            h-[40rem]
                            bg-gradient-to-tr 
                            from-white/10 
                            via-transparent 
                            to-white/10 
                            rounded-2xl 
                            overflow-hidden 
                            shadow-lg
                        "
                    >
                        {/* 
                            👉 Drop your <img> here.
                            Example:
                            <img
                                src={yourImageUrl}
                                alt="John Kassah"
                                className="object-cover w-full h-full"
                            />
                        */}
                    </div>
                    </div>
                    
                </div>

                <div className='relative ml-5 px-6 lg:left-[4.2rem] lg:top-[35rem] md:absolute md:top-[30rem] md:left-[64%] sm:ml-5 sm:px-6'>
                    <p className='text-sm italic text-gray-400 mb-4 ml-2'>Find me on</p>
                    <Socials />
                </div>

                {/* About Me Section */}
                    <div
                        className={`max-w-[60%] mt-8 left-[4%] top-[25rem] sm:max-w-[60%] sm:left-[10%] sm:top-[20rem] md:max-w-[40%] md:mr-1 md:left-[30rem] md:top-[6rem] lg:max-w-[35%] lg:left-[4.2rem] lg:top-[10rem] lg:ml-5 p-6 rounded-2xl 
                            bg-white/10 backdrop-blur-md border border-white/20 
                            text-gray-200 relative transform transition-all duration-1000 ease-out 
                            shadow-[0_0_20px_rgba(59,130,246,0.4)] 
                            ${visible ? "opacity-100" : "opacity-0"}
                             
                            `}
                    >
                        <h2 className="text-2xl font-bold text-cyan-300 mb-3"><em>Quick </em>About Me</h2>

                        <p className="text-gray-300 leading-relaxed">
                            I’m a passionate Fullstack Developer who thrives at the intersection of
                            creativity and technology. With my background in{" "}
                            <span className="text-cyan-400 font-medium">backend design</span>,{" "}
                            <span className="text-purple-400 font-medium">frontend development</span>,
                            and <span className="text-pink-400 font-medium">user research</span>,
                            I craft experiences that feel natural, seamless, and engaging.
                        </p>

                        <p className="text-gray-400 leading-relaxed mt-3">
                            My mission is to build web solutions that don’t just function — they inspire,
                            delight, and solve real-world problems. Whether it’s creating intuitive
                            interfaces, optimizing backend performance, or designing user-centered
                            experiences, I bring both precision and passion to every project.
                        </p>
                    </div>
            </section>
        </div>
    )
}

export default HomePage
