"use client";
import { Github, Youtube, Twitter, Briefcase, SearchIcon, Menu } from 'lucide-react';
import MenuButton from './MenuButton';
import MenuSchema from './MenuSchema';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const navItems = [{title :'About Me',path :"/About-me" }, {title :'Projects',path: "/projects"}];
  const menuItems = ['Resources', 'Skills'];
  const socialIcons = [
    { icon: Github, title: 'GitHub' },
    { icon: Youtube, title: 'YouTube' },
    { icon: Briefcase, title: 'Portfolio' },
    { icon: Twitter, title: 'Twitter' },
  ];
  const skillsMenu = ['React', 'Redux', 'TypeScript', 'Tailwind'];
  const resourcesMenu = ['Docs', 'Tutorials', 'GitHub', 'Community'];
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-0 mb-0  backdrop-blur-2xl border-b border-[#242121] px-6 h-[52px] text-white flex items-center justify-between">

      <div className="flex items-center gap-6">
        <Link className="text-2xl font-bold" to={'/'}>YOS</Link>
        <div className="bg-[#1f1e1eb7] rounded flex items-center h-9 px-2 max-md:hidden">
          <SearchIcon className="w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            aria-label="Search"
            className="bg-transparent pl-2 text-sm outline-none text-white"
          />
        </div>
      </div>

      <div className="hidden min-lg:flex items-center justify-between flex-1 absolute translate-x-171    ">
        <ul className="flex space-x-5 items-center">
          {navItems.map((item) => (
                 <Link to={item.path}  key={item.title} className={`cursor-pointer font-[600] font-inter text-[rgb(189,189,181)] hover:text-white text-[15px] transition-all flex justify-center items-center `}>{item.title}</Link>

          ))}
          {menuItems.map((title) => (
            <li key={title}>
              <MenuButton
                title={title}
                setActiveMenuId={setActiveMenuId}
                activeMenuId={activeMenuId}
              />
            </li>
          ))}
        </ul>

        <MenuSchema
          isactive={activeMenuId !== null}
          id={activeMenuId}
          setIsActive={setActiveMenuId}
        />

        <div className="flex items-center gap-5 pl-5 text-2xl">
          {socialIcons.map(({ icon: Icon, title }) => (
            <Icon
              key={title}
              title={title}
              className="hover:scale-110 transition duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>

      <button className="min-lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <Menu className="w-6 h-6" />
      </button>

      {mobileMenuOpen && (
  <div className="fixed top-0 left-0 w-full h-screen bg-black z-50 flex flex-col items-start px-6 pt-16 gap-6 text-white overflow-auto">
    <h1 className="text-3xl font-bold mb-4">YOS</h1>
    <button
      className="absolute right-10 top-6 text-2xl font-bold"
      onClick={() => setMobileMenuOpen(false)}
    >
      ✕
    </button>

    <input
      type="text"
      placeholder="Search"
      className="w-full bg-[#1f1e1eb7] p-2 rounded outline-none text-white"
    />

    <ul className="flex flex-col gap-4 text-lg mt-4 w-full">
      {navItems.map((item) => (
                <Link to={item.path}  key={item.title} className="hover:text-gray-300">{item.title}</Link>

      ))}

      {menuItems.map((title) => (
        <li key={title} className="w-full">
          <button
            onClick={() =>
              setActiveMenuId(activeMenuId === title ? null : title)
            }
            className="flex justify-between items-center w-full text-left hover:text-gray-300"
          >
            {title}
            <span className="text-sm">{activeMenuId === title ? '▲' : '▼'}</span>
          </button>

          {activeMenuId === title && (
            <ul className="ml-4 mt-2 space-y-1 text-sm text-gray-300">
              {(title === 'Skills' ? skillsMenu : resourcesMenu).map((item) => (
                <li key={item} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>

    <div className="mt-auto mb-10 flex gap-6">
      {socialIcons.map(({ icon: Icon, title }) => (
        <Icon key={title} title={title} className="w-6 h-6 hover:scale-110" />
      ))}
    </div>
  </div>
)}

    </nav>
  );
};

export default NavBar;
