import React from "react";
import { createClient } from "@/prismicio";
import HeaderShell from "@/components/helper/HeaderShell";
import HeaderContent from "@/components/helper/HeaderContent";
import { Content } from "@prismicio/client";

type HeaderDocument = Content.HeaderDocument;
type HeaderData = HeaderDocument["data"];

export default async function Header() {
  const client = createClient();
  const header = await client.getSingle("header");

  const headerData: HeaderData = header.data;

  return (
    <header>
      <HeaderShell>
        <HeaderContent newdata={headerData} />
      </HeaderShell>
    </header>
  );
}
