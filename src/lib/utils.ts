import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: string[]) => {
  return twMerge(clsx(args));
};


// e.g [0,1,2,3,4,5]
export const sum = (...args: number[]) => {
    return args.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}