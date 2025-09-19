import { ChevronDown } from 'lucide-react'

type MenuButtonProps = {
  title: string;
}

const MenuButton = ({ title, setActiveMenuId, activeMenuId }) => {
  const isActive = activeMenuId === title;

  const handleClick = () => {
    setActiveMenuId((prev) => (prev === title ? null : title)); // toggle
  };

  return (
    <li
      onClick={handleClick}
      className={`cursor-pointer font-[600] font-inter text-[rgb(189,189,181)] hover:text-white text-[15px] transition-all flex justify-center items-center ${
        isActive ? "text-white" : ""
      }`}
    >
      {title}
      <span className="text-white scale-60 ml-2">
        <ChevronDown />
      </span>
    </li>
  );
};


export default MenuButton
