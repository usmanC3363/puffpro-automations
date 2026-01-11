import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { paddingClass } from "@/app/utils/constants";
import CSSLineReveal from "./helper/CssLineReveal";

export default async function Footer() {
  const client = createClient();
  const footer = await client.getSingle("footer");
  return (
    // Flex Container
    <footer
      className={`${paddingClass} flex h-full flex-col items-center justify-end border-t border-current px-4 pb-10 pt-14`}
    >
      {/* Main Grid */}

      <div className="grid h-fit w-full max-w-full gap-y-7 md:grid-cols-[1fr_1fr] md:gap-x-[10%] lg:h-[80%] lg:justify-between lg:gap-x-[8%] xl:grid-cols-[4fr_5fr] xl:justify-items-center xl:gap-x-[15%] xl:place-self-center 2xl:max-w-screen-2xl 2xl:py-10 3xl:max-w-screen-2xl max-sm:h-full max-md:grid-rows-[2fr_3fr]">
        {/* Logo and Description Flex */}
        <div className="flex h-full w-full flex-col justify-between lg:min-h-[29rem]">
          <div className="flex h-full w-full flex-col gap-y-10">
            <div className="relative w-full">
              <PrismicNextImage
                field={footer.data.website_logo}
                className="h-full object-cover"
              />
            </div>
            <span className="text-[24px] font-normal text-mycolors-dark-grey dark:text-mycolors-grey">
              {footer.data.description}
            </span>
          </div>

          <span className="text-[14px] font-normal tracking-wide">
            ©2025 PuffproAutomations, All Rights Reserved.
          </span>
        </div>

        {/* Second column Container */}
        <div className="flex flex-col justify-between font-normal max-lg:gap-y-10">
          <div className="grid gap-x-10 gap-y-14 lg:grid-cols-[1fr_1fr_3fr] xl:gap-x-14 max-lg:grid-cols-2">
            {/* 1st Inner Page loop */}

            <div className="flex w-fit flex-col gap-y-2">
              {footer.data.inner_pages.map((innerPage, index) => (
                // <PrismicNextLink
                //   className="fade-up"
                //   field={innerPage.page_link}
                //   key={index}
                //   style={{
                //     transitionDelay: `${150 + index * 120}ms`,
                //   }}
                // >
                <span
                  className="text-nowrap text-[18px] leading-[133%]"
                  key={index}
                  style={{
                    transitionDelay: `${150 + index * 120}ms`,
                  }}
                >
                  {innerPage.page_title}
                </span>
                // </PrismicNextLink>
              ))}
            </div>

            {/* 2nd contact details */}
            <div className="flex w-fit flex-col gap-y-2">
              <span className="text-nowrap text-[18px] leading-[133%]">
                {footer.data.phone_number}
              </span>
              <span className="text-nowrap text-[18px] leading-[133%]">
                {footer.data.email_address}
              </span>
            </div>

            {/* 3rd Social Links  */}
            <div className="flex w-fit flex-col gap-2">
              {footer.data.social_links.map((social, index) => (
                <PrismicNextLink
                  className="fade-up"
                  field={social.social_url}
                  key={index}
                  style={{
                    transitionDelay: `${150 + index * 120}ms`,
                  }}
                >
                  <span className="text-nowrap text-[18px] leading-[133%]">
                    {social.social_title}
                  </span>
                </PrismicNextLink>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-3">
            {/* NewsLetter */}
            <span className="fade-up text-[18px]">
              Sign up for our newsletter
            </span>
            <div className="flex items-center border-b border-current">
              <input
                type="email"
                placeholder="Type Your Email Address"
                className="fade-up flex-1 bg-transparent py-2 text-[14px] tracking-wide placeholder-mycolors-white/50 focus:outline-none"
              />
              <button className="fade-up text-[14px] tracking-wide">
                SEND
              </button>
            </div>

            <span className="py-1 text-[14px] font-normal">
              You can unsubscribe from our newsletter at anytime for free.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
