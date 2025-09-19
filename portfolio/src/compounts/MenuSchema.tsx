"use client"
import React, { useEffect, useRef } from 'react';

const MenuSchema = ({ isactive, id, setIsActive }) => {
  const dropdownRef = useRef(null);

  const skillsMenu = ['React', 'Redux', 'TypeScript', 'Tailwind'];
  const resourcesMenu = ['Docs', 'Tutorials', 'GitHub', 'Community'];

  const positionMap = {
    Skills: 'left-63',
    Resources: 'left-32',
  };

  const links =
    id === 'Skills' ? skillsMenu :
    id === 'Resources' ? resourcesMenu :
    [];

  const leftClass = positionMap[id] || 'left-0';

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(null);
      }
    };

    if (isactive) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isactive, setIsActive]);

  return (
    <div
      ref={dropdownRef}
      className={`w-40 bg-[#242121] ${
        isactive ? 'flex' : 'hidden'
      } border-1 absolute p-2 py-5 list-none ${leftClass} flex-col gap-2 rounded-2xl top-10 border-[#363535] z-50`}
    >
      {links.map((link, idx) => (
        <li key={idx} className="text-[15px] font-semibold text-[rgb(189,189,181)] pl-5 py-1 rounded-xl hover:bg-[rgb(58,58,55)] hover:text-white cursor-pointer transition-all">{link}</li>
      ))}
    </div>
  );
};

export default MenuSchema;
