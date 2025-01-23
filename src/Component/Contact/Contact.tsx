
import { FaLinkedin, FaFacebook, FaInstagram, FaDribbble, FaGithub } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-8">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          You can connect with me on the following platforms:
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/giorgi-nadiradze-883b3a2b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-red-600 transition-colors duration-300"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://www.facebook.com/giorgi.nadiradze.490"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-red-600 transition-colors duration-300"
          >
            <FaFacebook size={32} />
          </a>
          <a
            href="https://www.instagram.com/nadiradzeg_23/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-red-600 transition-colors duration-300"
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~017c4872af786ada10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-red-600 transition-colors duration-300"
          >
            <SiUpwork size={32} />
          </a>
          <a
            href="https://dribbble.com/giorgi_nadiradze"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-red-600 transition-colors duration-300"
          >
            <FaDribbble size={32} />
          </a>
          <a 
          href="https://github.com/giorginadira"
          target="_blank"
          rel='noopener noreferrer'
           className="text-gray-600 hover:text-red-600 transition-colors duration-300"
          >
            <FaGithub size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
