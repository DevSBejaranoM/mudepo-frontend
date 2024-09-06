"use client"
import { useTeamStore } from "@/app/store/useTeamStore";

interface CustomTabProps {
  options: string[];
}

const CustomTab = ({ options }: CustomTabProps) => {
    const { team, setTeam } = useTeamStore()

  return (
    <div className="bg-white">
      <nav className="flex flex-col sm:flex-row">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setTeam(option)}
            className={`py-4 px-6 block hover:text-[#75ab4d] focus:outline-none ${
              team === option
                ? "text-[#75ab4d] border-b-2 font-medium border-[#75ab4d]"
                : "text-gray-600"
            }`}
          >
            {option}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default CustomTab;
