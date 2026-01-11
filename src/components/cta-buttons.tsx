import { ModeToggle } from "./helper/mode-toggle";
import { BookCallDialog } from "./book-call-dialog";

interface CtaButtonsProps {
  className?: string;
}

export const CtaButtons = ({ className }: CtaButtonsProps) => {
  return (
    <div className="fixed bottom-6 right-4 flex min-w-40 flex-col items-end gap-y-3.5">
      {/* WIP */}
      <div className="group relative">
        <ModeToggle className="" />
        <span className="absolute -left-[100%] bottom-2 scale-0 text-nowrap rounded border border-current bg-background px-2 py-px text-[13px] font-normal opacity-0 transition-all duration-200 ease-linear group-hover:-translate-x-[5rem] group-hover:scale-100 group-hover:opacity-100">
          switch theme
        </span>
      </div>

      <BookCallDialog />
    </div>
  );
};
