import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as IoIcons from "react-icons/io5";

const allIcons = { ...FaIcons, ...FiIcons, ...IoIcons };

/**
 * Renders a react-icons icon by its string name (e.g. "FaCar", "FaLeaf").
 * Falls back to FaCar if the icon name is not found.
 */
const DynamicIcon = ({ iconName, size = 24, className = "", color = "" }) => {
  const Icon = allIcons[iconName] || FaIcons.FaCar;
  return <Icon size={size} className={className} color={color} />;
};

export default DynamicIcon;
