import { FaRegClock } from "react-icons/fa";
import { BiStopwatch } from "react-icons/bi";
import { FaUtensils } from "react-icons/fa6";
import { MdOutlineLocalFireDepartment } from "react-icons/md";

export interface SingleRecipeDetailType {
  icon: "clock" | "stopwatch" | "cutlery" | "burn";
  label: string;
  value: string | number;
}

export default function SingleRecipeDetail({
  icon,
  label,
  value,
}: SingleRecipeDetailType) {
  const iconMap = {
    clock: <FaRegClock className="text-[#9A9080]" />,
    stopwatch: <BiStopwatch className="text-[#9A9080] text-lg" />,
    cutlery: <FaUtensils className="text-[#9A9080]" />,
    burn: <MdOutlineLocalFireDepartment className="text-[#9A9080] text-lg" />,
  };

  return (
    <div className="">
      <div className="flex items-center gap-2">
        {iconMap[icon]}
        <p className="text-[#9A9080] text-sm font-medium leading-[16.8px] tracking-[0.7px]">
          {label}
        </p>
      </div>
      <h1 className="text-[28px] font-semibold">{value}</h1>
    </div>
  );
}
