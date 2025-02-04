import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start md:gap-12">
        {/* სურათი */}
        <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src="/giorgi.png"
            alt="About me"
            className="rounded-lg shadow-xl border-4 border-red-500 w-3/4  transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
        {/* ტექსტი */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-red-600 mb-4 underline decoration-red-300 decoration-4">
            About Me
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Hello! I’m Giorgi Nadiradze, a passionate frontend developer with a knack for creating clean and user-friendly web designs. I specialize in React, JavaScript, and Tailwind CSS, and I love bringing ideas to life with code.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            In my free time, I enjoy learning new technologies and refining my skills. My goal is to contribute to impactful projects and continuously grow as a developer.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Beyond technical skills, I thrive in collaborative environments where innovative solutions emerge from teamwork. My goal is not only to meet technical requirements but to create web applications that provide meaningful and intuitive user experiences.
          </p>
          {/* სივი გადმოსაწერი ღილაკი */}
          <a
            href="/NEW2GN.pdf"
            download="Giorgi_Nadirdze_NEW2GN.pdf"
            className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-shake"
          >
            <FaDownload size={20} />
            Download My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
