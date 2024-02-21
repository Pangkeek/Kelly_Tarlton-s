import React from "react";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from './page3'
import Page4 from './page4';

export default function Final() {
  return (
    <div className="">
      <Page1 />
      <section class="container mx-auto py-10 bg-neutral-900">
        <div class="mx-auto w-5/6 border-t-2 border-zinc-600"></div>
      </section>
      <Page2 />
      <section class="container mx-auto py-10 bg-neutral-900">
        <div class="mx-auto w-5/6 border-t-2 border-zinc-600"></div>
      </section>
      <Page3 />
      <section class="container mx-auto py-10 bg-neutral-900">
        <div class="mx-auto w-5/6 border-t-2 border-zinc-600"></div>
      </section>
      <Page4 />
    </div>
  );
}
