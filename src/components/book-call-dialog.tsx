"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SlCalender } from "react-icons/sl";
import ContactForum from "@/components/contact-forum";
import { Arrow } from "./helper/Arrow";

export function BookCallDialog({
  type = "ctabutton",
}: {
  type?: "ctabutton" | "fixedbtn";
}) {
  return (
    <Dialog>
      <DialogTrigger asChild className="group relative">
        {type === "fixedbtn" ? (
          <Button
            className="h-9 w-12 max-w-fit rounded-full border-mycolors-grey bg-background shadow-inner dark:shadow-mycolors-dark-grey/5"
            variant="outline"
          >
            <span className="absolute translate-x-0 scale-0 rounded border border-current bg-background px-4 py-[3px] text-sm font-normal text-current opacity-0 transition-all duration-150 ease-linear group-hover:-translate-x-[5.95rem] group-hover:scale-100 group-hover:opacity-100">
              Book a Call
            </span>

            <SlCalender className="size-2" />
          </Button>
        ) : (
          <Button variant="outline" className="w-fit">
            <span className="pb-0.5 text-base font-normal">Contact Now</span>
            <div className="flex items-center">
              <Arrow svgClass="h-full w-full" name="main" />
            </div>
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="max-w-md bg-[#101010] md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="ml-2.5 text-lg font-normal text-mycolors-white">
            Book a Call
          </DialogTitle>
        </DialogHeader>

        <ContactForum label />
      </DialogContent>
    </Dialog>
  );
}
