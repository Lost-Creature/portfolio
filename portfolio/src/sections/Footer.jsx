import facebook from '../assets/Icons/SocialMedia_ICO/facebook.svg';
import instagram from '../assets/Icons/SocialMedia_ICO/instagram.svg';
import twitter from '../assets/Icons/SocialMedia_ICO/twitter.svg';

const Footer = () => {
  const socialMedia = [
    { src: facebook, alt: "Facebook logo", link: "https://facebook.com" },
    { src: instagram, alt: "Instagram logo", link: "https://instagram.com" },
    { src: twitter, alt: "Twitter logo", link: "https://twitter.com" },
  ];

  const links = [ { title: "Our Team", items: ["Yos", "Google","StackoverFlow" , "Github", "Indian Videos", "", ""] },
   { title: "Company", items: ["About Us", "Careers", "Contact", "Terms & Conditions"] }
   , { title: "Support", items: ["Help Center", "Privacy Policy", "Refund Policy"] }
   , ];

  return (
<footer className="bg-black px-6 py-20 md:px-12 text-white border-t-1 border-[#555555]">
      <div className="flex flex-wrap justify-between gap-8 max-w-7xl mx-auto">
        <div className="flex-1">
          <a href="/">
            <h1 className="text-4xl font-bold font-Bauhaus text-white flex">Yos<p className='text-gray-300'>Inc</p></h1>
          </a>
          <p className="mt-6 text-base text-gray-400 max-w-sm">
            Get your products ready in our offline markets.
          </p>
          <div className="flex items-center gap-4 mt-8">
            {socialMedia.map((item, index) => (
              <a 
                key={index} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <img src={item.src} alt={item.alt} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-[2] justify-between flex-wrap gap-8">
          {links.map((section, index) => (
            <div key={index}>
              <h4 className="text-xl font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-wrap justify-between items-center text-gray-400 text-sm max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          
          <p>© {new Date().getFullYear()} YosStore. All rights reserved.</p>
        </div>
        <a 
          href="#" 
          className="hover:text-white transition-colors duration-300"
        >
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;