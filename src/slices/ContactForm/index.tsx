import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ContactForum from "@/components/contact-forum";
import Bounded from "@/components/helper/Bounded";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Arrow } from "@/components/helper/Arrow";

/**
 * Props for `ContactForm`.
 */
export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

/**
 * Component for "ContactForm" Slices.
 */
const ContactForm: FC<ContactFormProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        "my-12 flex h-full w-screen flex-col items-center gap-y-8",
      )}
    >
      {/* SECTION TITLE with border */}
      <div className="flex min-w-full justify-between border-b border-mycolors-dark-grey pb-3">
        <div className="flex gap-x-2">
          {/* WIP ADD ICON */}
          <h3 className="text-[16px]">{slice.primary.title}</h3>
        </div>
        <span className="">Lorem Ipsum</span>
      </div>
      <div className="grid h-full w-full gap-x-[8%] gap-y-12 lg:grid-cols-[1fr_1fr] xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl">
        <div className={`flex flex-col gap-y-8`}>
          <span className="text-5xl font-medium">Get in Touch</span>
          <div className={`flex flex-col gap-y-8 pl-24`}>
            <p className="min-w-96 text-lg">
              Have questions or want to upgrade your vape shop&apos;s? PuffPro
              Automations is here to help you streamline operations, boost
              sales, and stay compliant. <br /> <br /> Reach out today and
              let&apos;s build smarter systems for your vape shop.
            </p>
          </div>
        </div>

        <ContactForum className="mt-2 max-w-[500px] rounded-lg border border-muted-foreground/20 bg-muted" />
      </div>
    </Bounded>
  );
};

export default ContactForm;
