import { useNavigate } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';

const BackBtn = () => {
  const navigate = useNavigate();

  const goBackOnHome = () => {
    navigate('/');
  };

  return (
    <div className="p-2 sm:p-3">
      <button
        onClick={goBackOnHome}
        className="
          flex items-center justify-center gap-1.5
          rounded-full
          bg-gradient-to-r from-[#c25700] to-white
          px-4 py-1.5
          text-sm font-semibold
          text-[#c25700]
          cursor-pointer
          transition-all duration-200
          hover:scale-105
          hover:shadow-md
          sm:gap-2
          sm:px-5 sm:py-2
          sm:text-base
        "
      >
        <MoveLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        <span>Back</span>
      </button>
    </div>
  );
};

export default BackBtn;