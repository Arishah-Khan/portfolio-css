"use client";
import "@/styles/project-btn.css"; 
import { useRouter } from "next/navigation";

interface ButtonProps {
  label: string; 
  link: string; 
  bgColor: string; 
  textColor: string; 
  hoverBgColor: string; 
  hoverTextColor: string; 
}

// Button component definition
const ProjectButton = ({
  label,
  link,
  bgColor,
  textColor,
  hoverBgColor,
  hoverTextColor,
}: ButtonProps) => {
  const router = useRouter(); // Initialize the router

  // Function to handle button click for navigation
  const handleClick = () => {
    router.push(link); // Navigate to the URL on button click
  };

  return (
    <button
      onClick={handleClick} 
      className="project-button" 
      style={{
        backgroundColor: bgColor, 
        color: textColor, 
        '--hover-bg-color': hoverBgColor, 
        '--hover-text-color': hoverTextColor, 
      } as React.CSSProperties}
    >
      {label} 
    </button>
  );
};

export default ProjectButton;
