import React from "react";
import { createClient } from "@/prismicio";
import { paddingClass } from "@/app/utils/constants";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Button } from "./ui/button";
// import { PrismicLink } from "@prismicio/react";

export default async function Footer() {
  const client = createClient();
  const [pages] = await Promise.all([
    client.getAllByType("page"),
    // client.getAllByType("home"),
  ]);

  const allPages = [...pages];
  const footer = await client.getSingle("footer");
  return (
    // Flex Container
    <footer
      className={`${paddingClass} flex h-full flex-col items-center justify-center border-t border-mycolors-white px-4 py-8 md:max-h-[26rem] lg:max-h-[30rem] 2xl:max-h-[40rem]`}
    >
      {/* Main Grid */}

      <div className="grid h-fit w-full max-w-full gap-y-7 md:grid-cols-[1fr_1fr] md:gap-x-[10%] lg:h-[80%] lg:justify-between lg:gap-x-[8%] xl:grid-cols-[4fr_5fr] xl:justify-items-center xl:gap-x-[15%] xl:place-self-center 2xl:max-w-screen-2xl 2xl:py-10 max-sm:h-full max-md:grid-rows-[2fr_3fr]">
        {/* Description Flex */}

        <div className="flex h-full w-full flex-col gap-y-12 lg:gap-y-24">
          <div className="flex h-full w-full flex-col gap-y-5">
            <div className="relative h-12 w-28">
              <PrismicNextImage
                field={footer.data.website_logo}
                className="object-fit absolute h-full w-fit"
              />
            </div>
            <span className="text-[18px]">{footer.data.description}</span>
          </div>
          {/* NewsLetter */}

          <div className="flex flex-col gap-y-3">
            <span className="fade-up block text-[18px]">
              Sign up for our newsletter
            </span>
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="name@example.com"
                className="fade-up dark:bg-mycolors-cardbg max-w-full flex-1 rounded-md border border-current bg-transparent/50 py-4 pl-4 text-base placeholder-mycolors-grey focus:outline-none dark:border-white/40 dark:placeholder-white/30"
              />
              <Button
                size="lg"
                className="fade-up text-mywhite-50 absolute right-2 text-base"
              >
                Subscribe
              </Button>
            </div>
            <span className="fade-up block text-sm">
              You can unsubscribe anytime
            </span>
          </div>
        </div>

        {/* Grid Second column Container */}
        <div className="flex flex-col pt-2">
          <div className="grid gap-x-10 gap-y-14 lg:grid-cols-[1fr_1fr_3fr] lg:gap-x-24 max-lg:grid-cols-2">
            {/* First Inner Page loop 1-3 */}
            <div className="flex w-fit flex-col gap-y-3 2xl:gap-y-5">
              {footer.data.inner_pages.map((innerPage, index) => (
                <PrismicNextLink
                  className="fade-up"
                  field={innerPage.page_link}
                  key={index}
                  style={{
                    transitionDelay: `${150 + index * 120}ms`,
                  }}
                >
                  <span className="text-nowrap text-[18px] leading-[133%]">
                    {innerPage.page_title}
                  </span>
                </PrismicNextLink>
              ))}
            </div>
            {/* Second Inner Page loop 4-6 */}
            <div className="flex w-fit flex-col gap-y-3 2xl:gap-y-5">
              {allPages.map((innerPage, index) => (
                <PrismicNextLink
                  className="fade-up"
                  document={innerPage}
                  key={index}
                  style={{
                    transitionDelay: `${150 + index * 120}ms`,
                  }}
                >
                  <span className="text-nowrap text-[18px] capitalize leading-[133%]">
                    {innerPage.uid}
                  </span>
                </PrismicNextLink>
              ))}
            </div>
            {/* Social Links loop */}

            <div className="flex w-fit flex-col gap-y-3 2xl:gap-y-5">
              {footer.data.social_links.map((social, index) => (
                <PrismicNextLink
                  className="fade-up group relative"
                  field={social.social_url}
                  key={index}
                  style={{
                    transitionDelay: `${150 + index * 120}ms`,
                  }}
                >
                  <span className="text-nowrap text-[18px] leading-[133%]">
                    {social.social_title}
                    <PrismicNextImage
                      field={social.social_icon}
                      className={`${index === 0 ? "-top-2 h-10 w-10" : "-top-1 h-7 w-7"} absolute right-0 opacity-0 transition-all duration-200 ease-linear group-hover:translate-x-[150%] group-hover:opacity-100 lg:group-hover:translate-x-[130%]`}
                    />
                  </span>
                </PrismicNextLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
