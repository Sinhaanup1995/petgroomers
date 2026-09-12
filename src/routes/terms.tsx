import { createFileRoute } from "@tanstack/react-router";
import { ProseDoc, type DocSection } from "@/components/site/ProseDoc";
import { JsonLd } from "@/components/site/JsonLd";
import { LEGAL, POLICY_UPDATED } from "@/data/legal";
import { BRAND, HOURS, PHONE_DISPLAY, services } from "@/data/site";
import { breadcrumbSchema, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      title: "Terms of Service",
      description:
        "Booking, pricing, payment and cancellation terms for Petgroomers doorstep dog and cat grooming, plus what we will and will not do during a session.",
      path: "/terms",
    }),
  component: TermsPage,
});

function TermsPage() {
  const who = LEGAL.entityName ?? BRAND;
  const priceList = services.map((s) => `${s.name} — ${s.price}`);

  const sections: DocSection[] = [
    {
      heading: "Who you are contracting with",
      body: [
        `These terms apply when you book a grooming session with ${who}. Booking a session means you accept them.`,
      ],
    },
    {
      heading: "How a booking is made",
      body: [
        `Bookings are made by phone or WhatsApp on ${PHONE_DISPLAY}. There is no online checkout on this site. A booking exists once we have confirmed a date, a time window and an address with you — not when you send the first message.`,
        `We operate ${HOURS.replace("7 Days a Week: ", "seven days a week, ")}. Slots are subject to a groomer being available in your area on the day.`,
      ],
    },
    {
      heading: "Prices",
      body: ["Our published package prices are:"],
      list: priceList,
    },
    {
      heading: "When the price can change",
      body: [
        "The package price covers a standard session for most pets. Some jobs genuinely take longer — a severely matted coat, a very large double-coated dog, or a pet who needs to be worked with slowly over a longer session.",
        "Where that applies we will tell you the revised price before the groomer starts, and you can decline. We will not increase a price after the work is done, and we will not start work and then ask for more money to finish.",
        "There is no call-out charge in the areas we normally serve. For locations well outside those areas we will tell you any travel cost on the call, before you confirm.",
      ],
    },
    {
      heading: "Payment",
      body: [
        "You pay after the session is finished and you have seen your pet. We accept UPI and cash. We do not take deposits or advance payment to hold a slot, and we will never ask you for card details, net banking credentials or an OTP.",
      ],
    },
    {
      heading: "Changing or cancelling",
      body: [
        "You can reschedule or cancel at no charge by giving us reasonable notice — a call the day before, or as early as you can manage on the day. Nothing is deducted, because nothing was paid up front.",
        "If our groomer cannot reach you because of weather, traffic, a vehicle problem or illness, we will tell you as soon as we know and offer you the next slot we have. You owe nothing for a session that did not happen.",
      ],
    },
    {
      heading: "What we need from you on the day",
      body: ["We come to you, so a few things have to be in place for the session to work:"],
      list: [
        "Access to water and a power point for the dryer",
        "A space where the pet can be handled safely — a bathroom, balcony, terrace or utility area is usually ideal",
        "Someone over 18 present for the whole session",
        "Anything you know about your pet that affects handling: bites, fear of dryers, recent surgery, skin conditions, or a vet instruction",
      ],
    },
    {
      heading: "What we will not do",
      body: [
        "We are groomers, not veterinarians. We do not diagnose, prescribe, medicate or sedate. We will not use sedatives, and we will not groom a pet who has been sedated for our convenience.",
        "We will stop a session if continuing would distress or hurt the animal — and we will tell you why rather than forcing the job through. Where we have completed part of the work we will charge for that part only, or nothing if we have barely started.",
        "We do not shave double-coated breeds on request alone, because it damages the coat and removes insulation the dog needs in heat. We will explain the alternative and, if you still want it done, we will decline the job rather than harm the coat.",
      ],
    },
    {
      heading: "If something goes wrong",
      body: [
        "Tell us straight away. Grooming involves sharp tools on a moving animal and nicks occasionally happen even with care — if one does, we will tell you before we leave rather than let you find it later, and we will cover the cost of a vet visit where it was our doing.",
        "We are not responsible for pre-existing conditions found during a groom, for the natural condition of a coat that has been neglected before we saw it, or for a pet's reaction to being handled where you did not tell us about a known behavioural or medical issue.",
      ],
    },
    {
      heading: "Photographs",
      body: [
        "We will ask before photographing your pet, and we will not publish a photograph of your pet, your home or you without your permission.",
      ],
    },
    {
      heading: "Governing law",
      body: ["These terms are governed by the laws of India."],
    },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <ProseDoc
        crumb="Terms of Service"
        title="Terms of Service"
        standfirst="How booking, pricing, payment and cancellation work — and what we will and will not do during a session."
        updated={POLICY_UPDATED}
        sections={sections}
      />
    </>
  );
}
