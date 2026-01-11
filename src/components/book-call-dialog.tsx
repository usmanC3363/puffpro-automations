"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SlCalender } from "react-icons/sl";
import ContactForum from "@/components/contact-forum";

export function BookCallDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild className="group relative">
        <Button className="max-w-fit rounded-full shadow-xl" variant="outline">
          <span className="absolute translate-x-0 scale-0 rounded border border-current bg-background px-2.5 py-px text-sm font-normal text-current opacity-0 transition-all duration-150 ease-linear group-hover:-translate-x-[5.5rem] group-hover:scale-100 group-hover:opacity-100">
            Book a Call
          </span>

          <SlCalender className="size-1" />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg bg-[#101010]">
        <DialogHeader>
          <DialogTitle className="ml-2 text-lg font-normal text-mycolors-white">
            Book a Call
          </DialogTitle>
        </DialogHeader>

        <ContactForum />
      </DialogContent>
    </Dialog>
  );
}
