import { useNavigate } from "react-router-dom";

interface LinkbuttonProps {
  to: string;
  text?: string;
}

function Linkbutton({ to, text }: LinkbuttonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#222] text-white py-2 px-4 duration-70 hover:text-[#FFBB33]"
    >
      {text}
    </button>
  );
}

export { Linkbutton };
