import { cn } from "../../lib/utils";

export default function Footer() {
  return (
    <footer className="bg-[#F6F3EE] border-t border-[#DFC0B7] flex flex-col justify-center items-center min-h-[237px]">
      <div className="container flex justify-between gap-4 px-4 md:px-16">
        <div className="space-y-4">
          <h1 className="text-[28px] text-[#C8522A] font-semibold">Recipely</h1>
          <p className="text-[#9A9080]">
            © 2024 Recipely. Cultivating the art of slow cooking.
          </p>
        </div>
        <div
          className={cn(
            "flex items-center gap-6 text-[#9A9080]",
            "[&_a]:hover:opacity-80 [&_a]:cursor-pointer"
          )}
        >
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
          <a href="#">Newsletter</a>
        </div>
      </div>
    </footer>
  );
}
