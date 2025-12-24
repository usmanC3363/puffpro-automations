import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ContactForum from "@/components/contact-forum";
import Bounded from "@/components/helper/Bounded";
import clsx from "clsx";

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
      className={clsx("mb-10 mt-16 flex h-[85vh] w-screen items-center")}
    >
      <ContactForum />
    </Bounded>
  );
};

export default ContactForm;
