import { Button } from "./ui/button";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Badge } from "./ui/badge";
import { SlCalender } from "react-icons/sl";
import { ModeToggle } from "./helper/mode-toggle";

interface CtaButtonsProps {
  className?: string;
}

export const CtaButtons = ({ className }: CtaButtonsProps) => {
  return (
    <div className="fixed bottom-8 right-6 flex min-w-40 flex-col items-end gap-y-3">
      {/* WIP */}
      <div className="">
        <ModeToggle />
      </div>
      <Link
        href="/contact"
        className="group flex items-center gap-x-2 rounded-lg shadow-xl"
      >
        <Button className="max-w-fit">
          <Badge
            variant={"custom"}
            className="absolute translate-x-0 text-base font-normal opacity-0 transition-all duration-150 ease-linear group-hover:-translate-x-[5.5rem] group-hover:scale-x-100 group-hover:opacity-100"
          >
            See Demo
          </Badge>
          <Phone className="size-7 transition-all duration-150 ease-linear group-hover:scale-125" />
        </Button>
      </Link>
      <Link
        href="/contact"
        className="group flex items-center gap-x-2 rounded-lg shadow-xl"
      >
        <Button className="max-w-fit" variant="outline">
          <Badge
            variant={"custom"}
            className="absolute translate-x-0 text-base font-normal opacity-0 transition-all duration-150 ease-linear group-hover:-translate-x-[5.5rem] group-hover:scale-x-100 group-hover:opacity-100"
          >
            Book a Call
          </Badge>
          <SlCalender className="size-7" />
        </Button>
      </Link>
    </div>
  );
};
