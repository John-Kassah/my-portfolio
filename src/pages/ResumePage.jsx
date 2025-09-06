import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

/*
  ResumePage.jsx
  - Paste into: src/pages/ResumePage.jsx (replace existing copy)
  - Place your printable PDF at: public/resume.pdf
  - ONLY change from your previous file: entrance animations added.
  - Everything else (layout, styles, text, download control) is unchanged.
*/

export default function ResumePage() {
  const resume = {
    name: "John Kassah",
    address: "K19, 00233 Tema, Ghana",
    phones: ["+233558845533", "+233505764298"],
    email: "johnkassah23@gmail.com",
    linkedin: "http://www.linkedin.com/in/john-kassah-best-choice",
    portfolio: "",
    github: "",
    profile: `With a background in mechanical engineering, I have transitioned into web development, combining analytical skills with a passion for creating seamless digital experiences. Proficient in HTML, CSS, and JavaScript, I develop responsive and user-friendly interfaces that prioritize engagement. My growth mindset led to a notable achievement: building the backend of an e-commerce platform while focusing on performance and user satisfaction. I am motivated to build innovative web solutions that raise standards and offer lasting value.`,
    experience: [
      {
        title: "Backend Developer (Freelance)",
        company: "Rouje Naturel Shea Ecommerce Platform",
        period: "02/2025 – Present",
        bullets: [
          "Developed and maintained backend systems for an e-commerce website, ensuring robust functionality and performance.",
          "Optimized server-side processes with MongoDB indexes to improve site speed and user experience, applying analytical skills from engineering.",
          "Collaborated with frontend developers to integrate APIs, delivering a seamless and user-centric platform.",
        ],
      },
      {
        title: "Operations Assistant",
        company: "Desfasmens Solutions, Tema, Ghana",
        period: "09/2023 – 01/2025",
        bullets: [
          "Streamlined inventory planning processes, enhancing resource allocation and operational efficiency, showcasing critical thinking and problem-solving. ",
          "Coordinated project planning and task assignments, ensuring timely completion through effective monitoring, demonstrating organizational leadership, and team coordination.",
          "Analyzed operational workflows, leveraging data-driven insights to boost team productivity and project outcomes, highlighting analytical reasoning and a continuous improvement mindset.",
        ],
      },
      {
        title: "Mechanical Site Inspector",
        company: "Sunon Asogli Power Ghana LTD, Tema, Ghana",
        period: "02/2021 – 08/2023",
        bullets: [
          "Designed and implemented an inspection routine that increased efficiency by streamlining equipment safety checks, demonstrating process optimization and systematic problem-solving.",
          "Analyzed operational data to identify and report safety hazards, showcasing attention to detail and proactive problem-solving, showcasing attention to detail, risk analysis, and proactive problem-solving.",
          "Tracked and documented equipment performance metrics, ensuring compliance with operational standards, highlighting meticulous documentation and quality assurance practices.",
        ],
      },
      {
        title: "Education Gap (Mechanical Engineering Studies)",
        company: "Tema, Ghana",
        period: "09/2017 – 01/2021",
        bullets: [
          "Full-time student pursuing a degree in Mechanical Engineering.",
        ],
      },
      {
        title: "Science and Math Tutor",
        company: "Peniel Victory School, Tema, Ghana",
        period: "05/2017 – 08/2017",
        bullets: [
          "Developed engaging exercises and exams, enhancing student comprehension through clear communication and tailored content, demonstrating effective communication skills.",
          "Designed creative science experiments with limited resources, fostering innovative thinking and adaptability, showcasing resourcefulness and creative problem-solving.",
          "Improved student performance by delivering personalized feedback, achieving consistent academic progress across the class.",
        ],
      },
      {
        title: "Laboratory Assistant",
        company: "Cal Ghana, Tema, Ghana",
        period: "06/2016 – 04/2017",
        bullets: [
          "Conducted precise pH and sugar tests on samples, ensuring product quality through rigorous data analysis, demonstrating laboratory precision and analytical rigor.",
          "Monitored and recorded equipment performance metrics, maintaining operational accuracy within strict tolerances..",
          "Inspected production line outputs, applying meticulous attention to detail to uphold quality standards.",
        ],
      },
    ],
    education: [
      {
        degree: "Bachelor's in Mechanical Engineering | BTech",
        school: "Koforidua Technical University",
        period: "01/10/2020 – 01/11/2022",
      },
      {
        degree: "Higher National Diploma (HND) in Mechanical Engineering",
        school: "Koforidua Technical University",
        period: "01/09/2017 – 01/09/2020",
      },
      {
        degree: "Pure Science | WASSCE Certificate",
        school: "Methodist Day Senior High School",
        period: "01/05/2013 – 01/05/2016",
      },
    ],
    skills: {
      frontend: ["HTML", "CSS", "JavaScript", "React", "Axios", "Responsive web design"],
      backend: ["Node.js", "Express.js", "MongoDB", "API integration"],
      tools: ["Git", "GitHub", "VS Code", "SolidWorks", "Microsoft Office Suite", "Adobe Premiere Pro"],
      soft: ["Report writing", "Communication and Public Speaking", "Leadership", "Resource management", "Proactivity"],
    },
    projects: [
      "Developed the full backend of an e-commerce website from scratch with secure JWT authentication and role-based authorization for users, product and account management, payment processing with Paystack, and automated email alerts for every order.",
      "Led a team named PHLO in the first Vice-Chancellors' Innovation Challenge",
      "Investigation of the wear rate of milling blades and levels of heavy metal deposition on milled food samples",
      "Conducted a review of the processing and characterization of coconut shell waste composite with epoxy base.",
    ],
  };

  // Container variant used to stagger children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.12,
      },
    },
  };

  // Item variant: custom determines incoming direction
  const itemVariants = {
    hidden: (dir = "center") => {
      // dir: "left", "right", "top", or "center"
      switch (dir) {
        case "left":
          return { opacity: 0, x: -60, y: 8, rotate: -8, scale: 0.98 };
        case "right":
          return { opacity: 0, x: 60, y: 8, rotate: 8, scale: 0.98 };
        case "top":
          return { opacity: 0, x: 0, y: -30, rotate: -6, scale: 0.98 };
        default:
          return { opacity: 0, x: 0, y: 12, rotate: 4, scale: 0.98 };
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <Navbar />

      {/* main container animates children in sequence */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="py-20 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto mt-[6.7rem]"
      >
        {/* Header - comes from top */}
        <motion.header variants={itemVariants} custom={"top"} className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            {resume.name}
          </h1>
          <p className="mt-2 text-sm text-gray-300">{resume.address}</p>
          <p className="mt-1 text-sm text-gray-400">
            {resume.phones.join(" / ")} •{" "}
            <a href={`mailto:${resume.email}`} className="underline">
              {resume.email}
            </a>
          </p>
          <p className="mt-1 text-sm text-gray-400">
            <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="underline">
              LinkedIn
            </a>
          </p>
        </motion.header>

        {/* Profile box - gently drop in */}
        <motion.section variants={itemVariants} custom={"center"} className="bg-white/3 border border-white/6 rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-purple-200 mb-3">PROFILE</h2>
          <p className="text-sm text-gray-200 leading-relaxed">{resume.profile}</p>
        </motion.section>

        {/* Grid: left (aside) and right (main) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6">
          {/* LEFT COLUMN - stagger its children (skills, education) */}
          <motion.aside variants={containerVariants} className="space-y-6">
            <motion.div variants={itemVariants} custom={"left"} className="bg-white/3 border border-white/6 rounded-2xl p-5">
              <h4 className="text-lg font-semibold text-purple-200 mb-3">SKILLS</h4>
              <div className="text-sm text-gray-200">
                <div className="font-medium">Frontend</div>
                <ul className="list-disc list-inside ml-3 mt-2 text-xs">
                  {resume.skills.frontend.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>

                <div className="font-medium mt-3">Backend</div>
                <ul className="list-disc list-inside ml-3 mt-2 text-xs">
                  {resume.skills.backend.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>

                <div className="font-medium mt-3">Tools</div>
                <ul className="list-disc list-inside ml-3 mt-2 text-xs">
                  {resume.skills.tools.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>

                <div className="font-medium mt-3">Soft Skills</div>
                <ul className="list-disc list-inside ml-3 mt-2 text-xs">
                  {resume.skills.soft.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} custom={"left"} className="bg-white/3 border border-white/6 rounded-2xl p-5">
              <h4 className="text-lg font-semibold text-purple-200 mb-3">EDUCATION</h4>
              <div className="text-sm text-gray-200 space-y-3">
                {resume.education.map((e, i) => (
                  <div key={i}>
                    <div className="font-medium">{e.degree}</div>
                    <div className="text-xs text-gray-400">
                      {e.school} • {e.period}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.aside>

          {/* RIGHT COLUMN - experiences and projects, staggered from right */}
          <motion.section variants={containerVariants} className="space-y-6">
            <motion.div variants={itemVariants} custom={"right"} className="bg-white/3 border border-white/6 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-200">WORK EXPERIENCE</h3>
              {resume.experience.map((exp, idx) => (
                <div key={idx} className="mb-4">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <div className="font-medium">{exp.title}</div>
                      <div className="text-sm text-gray-400">{exp.company}</div>
                    </div>
                    <div className="text-sm text-gray-400">{exp.period}</div>
                  </div>
                  <ul className="mt-2 text-sm text-gray-200 list-disc list-inside space-y-1">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} custom={"right"} className="bg-white/3 border border-white/6 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-200">PROJECTS</h3>
              <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
                {resume.projects.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </motion.div>
          </motion.section>
        </div>

        <footer className="mt-8 text-xs text-gray-500">
          This page mirrors my uploaded CV content. Kindly download it if you need to with the button on the bottom right.
        </footer>
      </motion.main>

      {/* Cinematic fixed download control: always visible, unobtrusive */}
      <motion.aside
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className="fixed right-6 bottom-6 z-50"
        aria-hidden={false}
      >
        {/* outer shell: gradient edge + heavy backdrop blur so content behind distorts */}
        <div
          className="p-1 rounded-3xl shadow-2xl"
          style={{
            // soft gradient border/edge
            background: "linear-gradient(90deg, rgba(124,58,237,0.12), rgba(6,182,212,0.06))",
            // strong backdrop blur & subtle saturation to distort background text
            backdropFilter: "blur(12px) saturate(80%)",
            WebkitBackdropFilter: "blur(12px) saturate(80%)",
            // faint glass border
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* inner card: semi-transparent, low opacity, keeps the same layout & actions */}
          <div
            className="flex items-center gap-4 rounded-2xl px-4 py-3 md:px-5 md:py-4 hover:scale-105 transform transition-transform duration-250"
            style={{
              // make the card itself very slightly translucent so the blurred content shows through
              background: "rgba(255,255,255,0.04)",
              // add a faint inner-gloss to enhance the glass feel
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)",
              // ensure text still reads crisply on top
              color: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          >
            <div className="flex flex-col text-left">
              <span className="text-xs uppercase tracking-wide opacity-80">Curriculum Vitae</span>
              <span className="font-semibold">Download Resume</span>
            </div>

            <div className="flex items-center gap-2">

              <a
                href="/John'sCV.pdf"
                download="John-Kassah-Resume.pdf"
                className="text-sm px-3 py-2 rounded-full bg-white/80 text-slate-900 font-medium hover:bg-white transition-opacity duration-200"
                aria-label="Download resume"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </motion.aside>
    </div>
  );
}
