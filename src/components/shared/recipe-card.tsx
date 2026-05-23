import { RiStarFill } from "react-icons/ri";
import { LuClock4 } from "react-icons/lu";
import { cn } from "../../lib/utils";
import { Link } from "react-router";

interface RecipeCardProps {
  id: string | number;
  src: string;
  type: string;
  rating: number;
  duration: string;
  name: string;
  difficulty: string;
}

export default function RecipeCard({
  id,
  src,
  type,
  rating,
  duration,
  name,
  difficulty,
}: RecipeCardProps) {
  // const navigate = useNavigate();
  return (
    <Link to={`/recipes/${id}`}>
      <div
        className="rounded-[8px] overflow-hidden"
        // onClick={() => {
        //   navigate(`/recipes/${id}`);
        // }}
      >
        {/* image container */}
        <div className="relative h-[256px]">
          <img className="w-full h-full object-cover" src={src} />
          <span
            className={cn(
              "absolute top-2.5 left-2.5 bg-[#FFFFFF]/90 text-sm text-[#4A7C59]",
              "font-medium px-3 py-1 rounded-[12px]"
            )}
          >
            {type}
          </span>
        </div>

        {/* body */}
        <div className="bg-white p-8 space-y-3">
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <RiStarFill className="text-[#C8882A]" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <LuClock4 className="text-[#9A9080]" />
              <span className="text-sm font-medium text-[#9A9080]">
                {duration}
              </span>
            </div>
          </div>

          <h1 className="text-[28px] font-semibold">{name}</h1>

          <div className="">
            <span
              className={cn(
                "bg-[#F0EDE9] text-sm text-[#58423B] font-medium px-4 py-1.5",
                "rounded-[12px]"
              )}
            >
              {difficulty}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
