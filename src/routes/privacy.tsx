import { createFileRoute } from "@tanstack/react-router";
import { ProseDoc, type DocSection } from "@/components/site/ProseDoc";
import { JsonLd } from "@/components/site/JsonLd";
import { LEGAL, POLICY_UPDATED } from "@/data/legal";
import { BRAND, PHONE_DISPLAY, SITE_URL } from "@/data/site";
import { breadcrumbSchema, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      title: "Privacy Policy",
      description:
        "How Petgroomers handles your personal data: what we collect when you book, why, how long we keep it, and your rights under India's DPDP Act 2023.",
      path: "/privacy",
    }),
  component: PrivacyPage,
});

/** Where to send a privacy request. Falls back to the phone line if no officer is configured. */
function contactRoute() {
  if (LEGAL.grievanceContact)
    return `${LEGAL.grievanceContact.name} at ${LEGAL.grievanceContact.contact}`;
  return `our phone line on ${PHONE_DISPLAY}`;
}

function PrivacyPage() {
  const who = LEGAL.entityName ?? BRAND;
  const sections: DocSection[] = [
    {
      heading: "Who this policy is from",
      body: [
        `This policy covers ${SITE_URL} and the grooming service booked through it, operated by ${who}.`,
        `If you want to reach us about anything on this page, contact ${contactRoute()}.`,
      ],
    },
    {
      heading: "This website has no forms",
      body: [
        "There is no sign-up, no contact form, no comment box and no account on this site. You cannot submit information to us through a web page, and we do not store anything you type here, because there is nothing to type into.",
        "Every booking button on the site opens either your phone dialler or WhatsApp. Your details reach us through that conversation, not through this website.",
      ],
    },
    {
      heading: "What we collect when you book",
      body: [
        "When you call or message us to arrange a grooming session, we collect only what is needed to turn up at the right place and groom the right animal:",
      ],
      list: [
        "Your name and the phone number you contact us from",
        "The address where the grooming is to happen",
        "Your pet's name, species, breed, age and anything you tell us about their temperament, coat or health that affects handling",
        "What you booked and what you paid",
      ],
    },
    {
      heading: "Why we keep it, and for how long",
      body: [
        "We use these details to schedule and carry out the appointment, to recognise you and your pet if you book again, and to keep a record of the session. We keep booking records for as long as you remain a customer, and afterwards only as long as tax and accounting rules require.",
        "We do not sell your data. We do not share it with advertisers, data brokers or other pet businesses. The only people who see it are the groomer assigned to your appointment and whoever handles our bookings.",
      ],
    },
    {
      heading: "WhatsApp and phone calls",
      body: [
        "When you message us on WhatsApp, that conversation is carried by WhatsApp (Meta) under their own privacy terms, not ours. We can read and retain the messages you send us. Do not send us anything in a WhatsApp message that you would not want stored in a chat history — we never need your bank details, card numbers, ID documents or passwords, and we will not ask for them.",
        "Phone calls to our number are not recorded.",
      ],
    },
    {
      heading: "Cookies and Google advertising",
      body: [
        "This site loads Google's advertising tag (Google Ads). It sets cookies in your browser and reports to Google when someone who clicked one of our ads later visits the site, so we can tell which ads are working. That is measurement of ad performance — it is the only third-party tracking on the site.",
        "We do not run our own analytics, heatmaps, session recording, retargeting pixels or social media trackers. The only other third-party requests a page makes are to Google Fonts for the typefaces.",
        "You can block or delete these cookies in your browser settings, or opt out of personalised Google advertising through Google's own ad settings. Nothing on this site stops working if you do.",
      ],
    },
    {
      heading: "Your rights under the DPDP Act 2023",
      body: [
        "India's Digital Personal Data Protection Act 2023 gives you rights over the personal data we hold about you. You can ask us to:",
      ],
      list: [
        "Tell you what personal data we hold about you and what we have done with it",
        "Correct anything that is inaccurate, incomplete or out of date",
        "Erase data we no longer need for the purpose you gave it for",
        "Withdraw consent you previously gave, at any time",
        "Nominate someone to exercise these rights on your behalf if you die or become incapacitated",
      ],
    },
    {
      heading: "How to make a request or a complaint",
      body: [
        `Contact ${contactRoute()} and tell us what you want. We will respond within a reasonable period and will not charge you for it.`,
        "If you are not satisfied with how we have handled your request, you may complain to the Data Protection Board of India.",
      ],
    },
    {
      heading: "Children",
      body: [
        "This is a service for pet owners and is not directed at children. We do not knowingly collect personal data from anyone under 18. If you believe we hold a child's data, contact us and we will delete it.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: [
        "If we change how we handle your data — for example if we add a booking form or a new tracking tool — we will update this page and change the date at the top.",
      ],
    },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <ProseDoc
        crumb="Privacy Policy"
        title="Privacy Policy"
        standfirst="What we collect when you book a groomer, why we keep it, and what you can ask us to do with it."
        updated={POLICY_UPDATED}
        sections={sections}
      />
    </>
  );
}
