// City landing-page content for Petgroomers doorstep pet grooming.
// Every entry is hand-written: intros, coat advice and FAQs are city-specific
// on purpose, because near-duplicate pages get treated as doorway spam.

import type { City, Region } from "./types";

export const cities: City[] = [
  {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi",
    region: "North",
    areas: [
      "Vasant Kunj",
      "Saket",
      "Greater Kailash",
      "Dwarka",
      "Rohini",
      "Hauz Khas",
      "Defence Colony",
      "Punjabi Bagh",
    ],
    nearby: ["gurgaon", "noida", "ghaziabad", "faridabad"],
    intro:
      "Few Indian cities are as hard on a pet's coat as Delhi. The 45-degree dry heat of June bakes the undercoat into a brittle mat, and by November the smog settles into it as a grey film that plain water will not shift. Our groomers drive to homes from Dwarka to Defence Colony with their own water, dryers and a folding table, so your dog never has to sit in Ring Road traffic on the way to a salon.",
    coatTip:
      "Between October and January, wipe your dog down every evening with a damp microfibre cloth — Delhi's particulate smog clings to oily guard hairs and is a common trigger for the itching pet parents mistake for a food allergy.",
    faqs: [
      {
        q: "Do you actually come to my flat, or do I have to drop my dog somewhere?",
        a: "We are a doorstep service across Delhi, so a groomer arrives at your address in Saket, Rohini, Dwarka or anywhere else in the city with all the equipment packed in. Nothing leaves your home and you can watch the entire session. Call +91 99905 99189 to pick a slot.",
      },
      {
        q: "What should I do about my dog's coat during Delhi winter smog?",
        a: "A deep clarifying bath every three to four weeks makes a visible difference in Delhi's November-to-January air, because pollutants bind to the sebum in the coat rather than just sitting on top. Our Grooming with Extra Care package at Rs. 2,500 includes the second lather and a longer blow-dry that gets the residue out properly.",
      },
      {
        q: "Which parts of Delhi do you cover?",
        a: "All of it, from Punjabi Bagh and Rohini in the west and north to Greater Kailash, Hauz Khas and Vasant Kunj in the south. If you are just across the border in Gurgaon, Noida, Ghaziabad or Faridabad we cover those too under the same doorstep rates.",
      },
    ],
  },
  {
    slug: "gurgaon",
    name: "Gurgaon",
    state: "Haryana",
    region: "North",
    areas: [
      "DLF Phase 1",
      "DLF Phase 5",
      "Golf Course Road",
      "Sohna Road",
      "Sushant Lok",
      "South City",
      "Palam Vihar",
      "Sector 56",
    ],
    nearby: ["delhi", "faridabad", "noida"],
    intro:
      "Gurgaon is a high-rise city, and high-rise living changes what a dog's coat needs. Pets here spend most of the day in air conditioning and then get walked on Golf Course Road pavement that is still radiating heat at nine at night, which dries out paw pads and thins the coat unevenly. We groom inside the apartment — balcony, bathroom or utility area — so there is no lift-lobby drama and no society gate paperwork for a van.",
    coatTip:
      "If your dog walks on Gurgaon's concrete sectors in May and June, check the paw pads weekly for cracking and ask the groomer to trim the fur between the toes short so grit does not get trapped and abrade the skin.",
    faqs: [
      {
        q: "Can you groom a large breed inside a Gurgaon apartment?",
        a: "Yes — Labradors, Goldens, German Shepherds and Huskies are the bulk of what we do in DLF Phase 5, Sushant Lok and the Sohna Road condominiums. The groomer works on a mat in the bathroom or balcony and the blow-dry is done on a low, quiet setting so neighbours are not disturbed.",
      },
      {
        q: "Do you need society permission to come in?",
        a: "Usually just a name at the gate. Let your Gurgaon RWA or guard know a Petgroomers groomer is expected, or share our number, +91 99905 99189, so they can confirm. We arrive on two-wheelers with a kit bag rather than a van, which keeps entry simple.",
      },
      {
        q: "How often should a Husky or Golden be groomed here?",
        a: "Double-coated breeds in Gurgaon do best on a four-week cycle through summer, because the constant switch between air-conditioned rooms and 43-degree afternoons makes them blow coat unpredictably. Our Full Grooming at Rs. 2,000 includes the de-shedding work that keeps it under control.",
      },
    ],
  },
  {
    slug: "noida",
    name: "Noida",
    state: "Uttar Pradesh",
    region: "North",
    areas: [
      "Sector 62",
      "Sector 18",
      "Sector 50",
      "Sector 93",
      "Sector 137",
      "Noida Extension",
      "Sector 15A",
      "Greater Noida",
    ],
    nearby: ["delhi", "ghaziabad", "gurgaon"],
    intro:
      "Wide sectors, green belts and a lot of first-time dog parents — that is Noida. The green cover along the Sector 50 and Sector 93 stretches is lovely for evening walks but it is also where ticks pick up passengers, and the dust that blows off construction sites in Noida Extension settles straight into a long coat. A groomer at your door means the tick check happens at home, where you can see what is being found.",
    coatTip:
      "After walks through Noida's park belts in the monsoon, run your fingers along the ear flaps, armpits and the base of the tail — ticks in this part of the NCR attach in those three spots far more often than on the back.",
    faqs: [
      {
        q: "Do you cover Greater Noida and Noida Extension as well?",
        a: "We do. Sector 137, Noida Extension and the Greater Noida societies are regular stops, along with the older sectors like 15A and 18. Ring +91 99905 99189 and we will tell you the next available slot for your sector.",
      },
      {
        q: "My dog panics in a car. Is home grooming easier on him?",
        a: "Much easier. A large share of our Noida bookings are dogs who used to arrive at a salon already shaking from the drive, and grooming them on their own floor in their own flat removes that entirely. There is no cage, no waiting with other animals and no journey at either end.",
      },
      {
        q: "What time slots do you have in Noida?",
        a: "We run seven days a week in Noida from 8 AM to 8 PM, and early-morning slots tend to be the calmest for nervous dogs. Weekends fill first, so book two or three days ahead if you want a Saturday.",
      },
    ],
  },
  {
    slug: "ghaziabad",
    name: "Ghaziabad",
    state: "Uttar Pradesh",
    region: "North",
    areas: [
      "Indirapuram",
      "Vaishali",
      "Vasundhara",
      "Raj Nagar Extension",
      "Kaushambi",
      "Crossings Republik",
      "Sahibabad",
    ],
    nearby: ["delhi", "noida", "faridabad"],
    intro:
      "Ghaziabad sits right in the NCR dust corridor, and pet parents in Indirapuram and Vasundhara notice it fastest on white and cream coats, which go dull within days of a bath. Add the industrial haze that drifts over Sahibabad in winter and you have a city where a coat needs rinsing properly rather than quickly. Our groomers bring their own dryers and shampoo and set up inside your flat.",
    coatTip:
      "Light-coated dogs in Ghaziabad benefit from a mild whitening or clarifying shampoo rather than a general one, because the fine grey dust here greys out a white coat much faster than it dirties a dark one.",
    faqs: [
      {
        q: "Is doorstep grooming available in Raj Nagar Extension?",
        a: "Yes, Raj Nagar Extension is one of our regular Ghaziabad routes, as are Crossings Republik, Indirapuram and Kaushambi. Call +91 99905 99189 with your society name and we will schedule a groomer.",
      },
      {
        q: "How long does a full session take?",
        a: "Plan for about ninety minutes for a medium-sized dog in Ghaziabad, and closer to two hours for a heavily coated or badly matted one. We would rather take the extra twenty minutes on the dry than send you a damp dog in winter.",
      },
      {
        q: "Do you groom cats too?",
        a: "We do, and Persians and mixed-breed Indian cats are a steady part of our Ghaziabad work. Cats are handled without restraint tools, on a towel in a closed room, and if a cat genuinely will not settle we stop rather than force it.",
      },
    ],
  },
  {
    slug: "faridabad",
    name: "Faridabad",
    state: "Haryana",
    region: "North",
    areas: [
      "Sector 15",
      "Sector 21C",
      "Sector 46",
      "Greenfield Colony",
      "NIT Faridabad",
      "Neharpar",
      "Ballabhgarh",
    ],
    nearby: ["delhi", "gurgaon", "noida"],
    intro:
      "Between the old NIT sectors and the newer Neharpar side, Faridabad has a lot of independent houses with terraces and courtyards, which is honestly the ideal setting for grooming a big dog. The Aravalli edge keeps summers dry and gritty here, so coats hold dust deep at the root. We come to you, use your outside tap or our own water, and clean up before leaving.",
    coatTip:
      "Faridabad's dry Aravalli air pulls moisture out of a coat quickly, so ask for a conditioning rinse in summer rather than skipping it — untreated, the coat gets static, breaks at the tips and mats faster.",
    faqs: [
      {
        q: "Can you groom on my terrace or in the courtyard?",
        a: "Happily. Many Faridabad houses in Sector 15, Greenfield Colony and Ballabhgarh have exactly that space, and outdoor grooming means less hair indoors for you. We just need a water point and a plug for the dryer.",
      },
      {
        q: "What does grooming cost in Faridabad?",
        a: "The same rates as the rest of our network: Spa Bath Rs. 1,500, Full Grooming Rs. 2,000, Grooming with Extra Care Rs. 2,500 and Hair Cut Only Rs. 1,500. There is no separate travel charge anywhere in Faridabad.",
      },
      {
        q: "My dog has never been groomed before. Will he cope?",
        a: "First-timers usually do better at home than at a salon, because nothing about the environment is unfamiliar to them. Our Faridabad groomers start slow with handling and the clipper noise, and if a dog is genuinely distressed we split the work rather than pushing through.",
      },
    ],
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    region: "West",
    areas: ["Bandra", "Andheri", "Powai", "Juhu", "Worli", "Malad", "Chembur", "Colaba"],
    nearby: ["thane", "navi-mumbai", "pune", "goa"],
    intro:
      "Salt air, ninety percent humidity and four months of rain: Mumbai is a fungal city for dogs. Coats here rarely dry fully on their own between June and September, and that lingering damp at the skin is what turns into hot spots, yeasty ears and that unmistakable monsoon smell. Sending a dog across Bandra or Andheri in traffic to fix it makes no sense, so we bring the dryer to your flat instead.",
    coatTip:
      "In a Mumbai monsoon the blow-dry matters more than the bath — a coat left to air-dry in this humidity stays damp at the root for hours and that is precisely where fungal infections start.",
    faqs: [
      {
        q: "My flat is small and there is no balcony. Can you still groom here?",
        a: "Yes. Most Mumbai homes we work in, whether in Colaba or a Malad tower, are compact, and a bathroom plus a metre of floor is enough. The groomer contains the hair on a mat and takes it away, so a small Bandra or Worli flat is no obstacle.",
      },
      {
        q: "How often should I bathe my dog during the Mumbai monsoon?",
        a: "Roughly every two to three weeks through the rains, with a medicated or anti-fungal shampoo if your vet has flagged skin trouble. Our Grooming with Extra Care package at Rs. 2,500 is built for exactly this and includes ear cleaning, which Mumbai dogs need more than most.",
      },
      {
        q: "Do you come to Powai and the western suburbs?",
        a: "We cover the whole city — Powai, Juhu, Andheri, Chembur and south Mumbai — plus Thane and Navi Mumbai. Call +91 99905 99189 and tell us your building; we will give you the earliest slot on that route.",
      },
    ],
  },
  {
    slug: "thane",
    name: "Thane",
    state: "Maharashtra",
    region: "West",
    areas: [
      "Ghodbunder Road",
      "Hiranandani Estate",
      "Majiwada",
      "Vartak Nagar",
      "Kolshet",
      "Naupada",
      "Manpada",
    ],
    nearby: ["mumbai", "navi-mumbai", "nashik"],
    intro:
      "Thane has the lakes, the hills at Yeoor and a genuinely dog-friendly culture in the Ghodbunder Road townships — and all three mean muddy paws for a good part of the year. The city sits just far enough inland to be hotter than Mumbai in April, then just as soaked in July. Our groomers reach Hiranandani Estate, Kolshet and old Naupada alike without you having to move the car.",
    coatTip:
      "If you walk your dog around Upvan or the Yeoor foothills, comb out the belly and leg feathering the same evening — Thane's grass seeds and burrs work their way in overnight and are painful to remove once matted.",
    faqs: [
      {
        q: "Do you serve the Ghodbunder Road townships?",
        a: "Ghodbunder Road is one of our busiest Thane corridors, along with Hiranandani Estate and Manpada. Give the society name when you call +91 99905 99189 and we will slot you into the next run through that stretch.",
      },
      {
        q: "Can I book a haircut only, without a bath?",
        a: "Yes, Hair Cut Only is Rs. 1,500 and is a common pick in Thane between baths, especially for Shih Tzus and Lhasas whose face and paw fur grows into their eyes. Most trim-only visits finish in under an hour.",
      },
      {
        q: "Is a Sunday appointment possible?",
        a: "We work all seven days in Thane, 8 AM to 8 PM, Sundays included. Weekend mornings are the first to go, so a day or two of notice helps.",
      },
    ],
  },
  {
    slug: "navi-mumbai",
    name: "Navi Mumbai",
    state: "Maharashtra",
    region: "West",
    areas: ["Vashi", "Nerul", "Kharghar", "Airoli", "Belapur", "Seawoods", "Panvel"],
    nearby: ["mumbai", "thane", "pune"],
    intro:
      "Planned nodes, wide roads and a lot of space — Navi Mumbai is easier on pets than the island city, but the creek-side humidity from Vashi through Airoli is every bit as heavy. Dogs here get more outdoor time on the Kharghar hills and Seawoods promenades, which is great for them and hard on their paws and coat. We groom at home across every node, so no one crosses a bridge for a bath.",
    coatTip:
      "Rinse your dog's paws after walks along the Navi Mumbai creek and promenades — the salt residue left behind dries the pads and, once licked, is a frequent cause of the repeat paw chewing owners here complain about.",
    faqs: [
      {
        q: "Which nodes do you cover in Navi Mumbai?",
        a: "Vashi, Nerul, Seawoods, Belapur, Kharghar, Airoli and out to Panvel. Doorstep service is the whole point, so a groomer comes to your building rather than you driving to Vashi for an appointment.",
      },
      {
        q: "Do you carry your own water and power?",
        a: "We carry water for top-ups and rinses, but a working tap and one plug point make the session faster and the dry much better. If either is a problem in your Navi Mumbai flat, mention it when booking on +91 99905 99189 and the groomer will plan around it.",
      },
      {
        q: "How do I stop my dog smelling damp all monsoon?",
        a: "Most of it is an incomplete dry rather than a dirty dog. Navi Mumbai's creek humidity keeps the undercoat wet long after the top looks dry, so a proper forced-air dry after every bath, plus ear cleaning, clears the smell in one session.",
      },
    ],
  },
  {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    region: "West",
    areas: [
      "Koregaon Park",
      "Baner",
      "Kothrud",
      "Viman Nagar",
      "Hadapsar",
      "Aundh",
      "Wakad",
      "Kalyani Nagar",
    ],
    nearby: ["mumbai", "navi-mumbai", "nashik"],
    intro:
      "Pune's weather is the kindest on this list — dry winters, a merciful monsoon and cool nights — which is exactly why so many people here keep heavy-coated breeds that would struggle in Mumbai. The catch is the Deccan dust in March and April and the red mud that comes off the Baner and Bavdhan hills in July. Our groomers cover Koregaon Park to Wakad and work inside your home.",
    coatTip:
      "Pune's dry winter air is ideal for Huskies, Saint Bernards and other heavy coats, but brush right down to the skin twice a week — the undercoat compacts quietly in this climate and you only notice once it has felted.",
    faqs: [
      {
        q: "How much does dog grooming cost in Pune?",
        a: "Spa Bath is Rs. 1,500, Full Grooming Rs. 2,000, Grooming with Extra Care Rs. 2,500 and Hair Cut Only Rs. 1,500, with no travel fee anywhere in Pune. Ring +91 99905 99189 if you are unsure which suits your dog's coat.",
      },
      {
        q: "Do you cover Wakad, Baner and the Hinjewadi side?",
        a: "Yes — Baner, Wakad, Aundh and the western Pune corridor are among our most-booked areas, as are Koregaon Park, Kalyani Nagar, Viman Nagar and Kothrud. Doorstep means the groomer rides out to your society.",
      },
      {
        q: "My Saint Bernard mats badly. Can you handle it at home?",
        a: "We do a lot of heavy-coat work in Pune, and severe matting is booked as Grooming with Extra Care at Rs. 2,500 because de-matting safely takes time. If mats are tight against the skin we will clip them out rather than pull, since pulling on felted coat hurts and can tear skin.",
      },
    ],
  },
  {
    slug: "nashik",
    name: "Nashik",
    state: "Maharashtra",
    region: "West",
    areas: [
      "Gangapur Road",
      "College Road",
      "Indira Nagar",
      "Panchavati",
      "Nashik Road",
      "Cidco",
      "Deolali",
    ],
    nearby: ["mumbai", "thane", "pune"],
    intro:
      "Sitting at around 700 metres, Nashik gets properly cold nights in December and January — cold enough that clipping a dog too short in winter is a genuine mistake here, unlike in coastal Maharashtra. Vineyard country around Gangapur Road also means grass, seeds and a tick season that runs long. We bring grooming to homes from Panchavati to Deolali Camp.",
    coatTip:
      "Do not take a Nashik dog down to the skin in December — the nights near Gangapur and Deolali drop into single digits, and a short-clipped dog here will shiver through them; a tidy trim with length left on is the better call.",
    faqs: [
      {
        q: "Do you travel to Nashik Road and Deolali?",
        a: "We cover Nashik city end to end, including Nashik Road, Deolali, Cidco, Panchavati and the Gangapur Road belt. Call +91 99905 99189 with your locality and we will fit you into that day's route.",
      },
      {
        q: "How do you deal with ticks?",
        a: "Every Nashik session includes a hands-on tick check through the ears, neck folds, armpits and tail base, and we remove what we find and tell you where it was. Vineyard and grassland surroundings make this the single most useful part of grooming here, but treatment prescriptions stay with your vet.",
      },
      {
        q: "Can two dogs be groomed in the same visit?",
        a: "Yes, and it is common in Nashik. Each dog is charged for its own package, but one visit saves you a second appointment and dogs who live together tend to settle faster when the other is in the room.",
      },
    ],
  },
  {
    slug: "nagpur",
    name: "Nagpur",
    state: "Maharashtra",
    region: "Central",
    areas: [
      "Dharampeth",
      "Civil Lines",
      "Ramdaspeth",
      "Sadar",
      "Manish Nagar",
      "Wardha Road",
      "Pratap Nagar",
    ],
    nearby: ["raipur", "bhopal", "indore", "pune"],
    intro:
      "Nagpur summers are brutal in a way coastal pet parents do not quite believe — 47 degrees is a normal May afternoon, and heat stroke, not matting, is the real grooming risk here. A car ride to a salon at midday can be dangerous for a flat-faced dog in this city. Our groomers come to Dharampeth, Civil Lines or Manish Nagar and work in your cooled room instead.",
    coatTip:
      "Resist shaving a double-coated dog bald for Nagpur's summer: that coat reflects heat and protects against sunburn, so thinning and de-shedding the undercoat cools the dog far more effectively than a clipper ever will.",
    faqs: [
      {
        q: "Is it safe to groom my dog in Nagpur's summer heat?",
        a: "At home, yes, and it is the safest option in Nagpur — no car journey, no waiting in a warm salon and the fan or AC stays on throughout. We also book early-morning and evening slots in May and June precisely to avoid the worst hours.",
      },
      {
        q: "Should I get my Pug or Shih Tzu shaved down?",
        a: "For short-faced breeds in Nagpur we advise a close but not bald trim, plus careful cleaning of the facial folds where sweat and grime collect in this heat. A Full Grooming at Rs. 2,000 covers the trim, fold cleaning, ears and nails together.",
      },
      {
        q: "Which parts of Nagpur do you reach?",
        a: "Ramdaspeth, Sadar, Dharampeth, Civil Lines, Pratap Nagar, Manish Nagar and along Wardha Road. Give us a call on +91 99905 99189 and we will confirm the nearest available groomer.",
      },
    ],
  },
  {
    slug: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    region: "South",
    areas: [
      "Indiranagar",
      "Koramangala",
      "Whitefield",
      "HSR Layout",
      "Jayanagar",
      "Hebbal",
      "Electronic City",
      "Malleswaram",
    ],
    nearby: ["mysuru", "chennai", "hyderabad"],
    intro:
      "Bengaluru's mild year-round weather is the reason the city is full of Huskies, Retrievers and Saint Bernards that would suffer almost anywhere else in India. What catches owners out is the shedding: without a real winter to trigger a proper seasonal blow, coats here shed steadily all twelve months. Add a two-hour crawl from Whitefield to a salon in Indiranagar and doorstep grooming stops being a luxury.",
    coatTip:
      "Because Bengaluru has no sharp seasonal shift, double-coated dogs shed low-level all year instead of in one burst — a de-shedding session every four to six weeks controls the hair far better than waiting for a spring moult that never really arrives.",
    faqs: [
      {
        q: "Do you come out to Whitefield and Electronic City?",
        a: "We do, along with Indiranagar, Koramangala, HSR Layout, Hebbal, Jayanagar and Malleswaram. The whole point of doorstep grooming in Bengaluru is that nobody has to cross the city in traffic — the groomer absorbs the commute, not your dog.",
      },
      {
        q: "How do I control Husky hair all over the house?",
        a: "A proper de-shedding session strips the loose undercoat before it lands on your sofa, and in Bengaluru most Husky and Golden owners settle into a four-week rhythm. Full Grooming at Rs. 2,000 includes that undercoat work along with bath, dry, nails and ears.",
      },
      {
        q: "Can you groom cats at home in Bengaluru?",
        a: "Yes, and cat bookings are a real share of our Bengaluru work — Persians, Himalayans and rescued Indian cats. Home grooming suits cats particularly well, because a carrier ride is usually more stressful for them than the grooming itself.",
      },
    ],
  },
  {
    slug: "mysuru",
    name: "Mysuru",
    state: "Karnataka",
    region: "South",
    areas: [
      "Vijayanagar",
      "Kuvempunagar",
      "Jayalakshmipuram",
      "Gokulam",
      "Saraswathipuram",
      "Hebbal",
      "Bogadi",
    ],
    nearby: ["bengaluru", "coimbatore", "kochi"],
    intro:
      "Mysuru is unhurried, green and pleasantly cool, and it shows in its pets — more independent houses, more garden time, more dogs who genuinely live outdoors part of the day. That garden time is also why flea and tick loads here run higher than in apartment cities. Our groomers work at homes in Gokulam, Kuvempunagar and Jayalakshmipuram without you needing to head into town.",
    coatTip:
      "Garden dogs in Mysuru pick up fleas from shaded soil rather than from other dogs, so comb the lower back and tail base with a fine flea comb weekly — that is where the droppings show up first, long before you spot a live flea.",
    faqs: [
      {
        q: "Is home grooming available across Mysuru?",
        a: "Yes, from Vijayanagar and Bogadi through to Gokulam, Saraswathipuram and Hebbal. One call to +91 99905 99189 and a groomer comes to your gate with everything needed.",
      },
      {
        q: "My dog stays mostly in the garden. What does he need?",
        a: "Outdoor dogs in Mysuru typically need grooming more often than indoor ones — every three to four weeks — because soil, grass and sun do more to a coat. Grooming with Extra Care at Rs. 2,500 is the usual pick, with the longer tick and skin check built in.",
      },
      {
        q: "Do you groom older dogs?",
        a: "We do, and senior dogs are one of the strongest arguments for doorstep grooming in Mysuru: no stairs, no car, no standing around waiting. The groomer works in shorter stretches and lets an arthritic dog lie down rather than forcing a long stand.",
      },
    ],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    region: "South",
    areas: [
      "Gachibowli",
      "Banjara Hills",
      "Jubilee Hills",
      "Kondapur",
      "Madhapur",
      "Kukatpally",
      "Begumpet",
      "Miyapur",
    ],
    nearby: ["bengaluru", "vijayawada", "visakhapatnam", "nagpur"],
    intro:
      "Hyderabad runs hot and dry for most of the year, which sounds easy on a coat until you see what the rocky, dusty ground around Gachibowli and Kondapur does to paw pads. Dry skin and dandruff are the complaints we hear most in this city, usually from over-bathing with the wrong shampoo. We come to homes from Banjara Hills to Miyapur with pH-balanced products and a proper dry.",
    coatTip:
      "Hyderabad's dry air means fewer baths, not more — over-washing strips the natural oils and produces the flaky, itchy skin many owners here then try to fix with yet another bath; every three to four weeks with a moisturising shampoo is plenty.",
    faqs: [
      {
        q: "Do you cover both the old city and the IT corridor?",
        a: "Yes — Gachibowli, Madhapur, Kondapur and Miyapur on one side, Banjara Hills, Jubilee Hills, Begumpet and Kukatpally on the other. Wherever you are in Hyderabad, the groomer comes to your address.",
      },
      {
        q: "My dog has flaky, itchy skin. Can grooming help?",
        a: "Often, yes, because in Hyderabad this is usually dryness rather than infection, and a moisturising bath with a proper conditioning rinse settles it. Book Grooming with Extra Care at Rs. 2,500 for the fuller treatment, but if the skin is raw or smells off, please see a vet first.",
      },
      {
        q: "How soon can someone come?",
        a: "Often the same day in Hyderabad if you call early, since we operate 8 AM to 8 PM all seven days. Dial +91 99905 99189 and we will tell you what is open on your side of the city.",
      },
    ],
  },
  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    region: "South",
    areas: [
      "Adyar",
      "Anna Nagar",
      "T Nagar",
      "Velachery",
      "Sholinganallur",
      "Nungambakkam",
      "Porur",
      "Besant Nagar",
    ],
    nearby: ["bengaluru", "coimbatore", "vijayawada"],
    intro:
      "Chennai is humid in a way that never really lets up, and that constant moisture at the skin is behind most of the ear infections, hot spots and yeasty smells we are called out for here. Beach walks at Besant Nagar and Marina add sand and salt on top. Rather than putting a panting dog in a car to Adyar, we bring the grooming and the dryer to your home.",
    coatTip:
      "Chennai's humidity keeps ear canals damp year round, so make ear cleaning part of every single groom — floppy-eared breeds like Cockers and Bassets here develop infections faster than in almost any other Indian city.",
    faqs: [
      {
        q: "Do you serve OMR and Sholinganallur?",
        a: "Yes, the OMR stretch including Sholinganallur is a regular route, along with Velachery, Adyar, Besant Nagar, T Nagar, Nungambakkam, Anna Nagar and Porur. Call +91 99905 99189 with your area and we will confirm timing.",
      },
      {
        q: "My dog swims at the beach. How often should he be bathed?",
        a: "Rinse him with plain water after every Chennai beach trip — salt and sand left in the coat cause more irritation than the sea itself — and book a full bath every two to three weeks. Spa Bath at Rs. 1,500 is the usual choice for beach regulars.",
      },
      {
        q: "Is grooming safe during the Chennai monsoon and cyclone season?",
        a: "We work through the northeast monsoon, and home grooming is the sensible option then, since nobody wants a wet dog in a waterlogged street. If a session genuinely cannot go ahead because of flooding we reschedule without charge.",
      },
    ],
  },
  {
    slug: "coimbatore",
    name: "Coimbatore",
    state: "Tamil Nadu",
    region: "South",
    areas: [
      "R S Puram",
      "Saibaba Colony",
      "Peelamedu",
      "Race Course",
      "Vadavalli",
      "Singanallur",
      "Ganapathy",
    ],
    nearby: ["chennai", "kochi", "mysuru", "bengaluru"],
    intro:
      "The Palakkad gap gives Coimbatore a breeze that most Tamil Nadu cities would envy, and the air is drier than Chennai's — which makes this an unusually comfortable city for long-coated dogs. What it does bring is fine red dust off the Vadavalli and Thondamuthur side, the sort that settles deep into a Spitz or Pomeranian coat. Our groomers reach R S Puram, Peelamedu and Saibaba Colony at your convenience.",
    coatTip:
      "Coimbatore's breeze carries fine red dust that lodges at the root of a thick coat, so ask for a double lather on Spitz, Pomeranian and Indian Spitz types — one wash mostly moves it around rather than lifting it out.",
    faqs: [
      {
        q: "Which areas of Coimbatore do you visit?",
        a: "R S Puram, Saibaba Colony, Race Course, Peelamedu, Singanallur, Ganapathy and Vadavalli are all covered. Being a doorstep service, we come to your house or apartment rather than asking you to travel.",
      },
      {
        q: "Do you do nail clipping separately?",
        a: "Nail trimming is included in Full Grooming and in Grooming with Extra Care, and Coimbatore dogs who walk mostly on tiled indoor floors need it more often than you would think, since nothing wears the nails down. If nails are the only concern, say so when booking and we will advise.",
      },
      {
        q: "Can I be present during the session?",
        a: "Please do. Most Coimbatore pet parents stay in the room, and it helps, because the groomer can ask you about sensitive spots and old injuries as they go. The one thing we ask is that you stay calm — dogs read anxiety off their owners instantly.",
      },
    ],
  },
  {
    slug: "kochi",
    name: "Kochi",
    state: "Kerala",
    region: "South",
    areas: [
      "Kakkanad",
      "Panampilly Nagar",
      "Edappally",
      "Vyttila",
      "Palarivattom",
      "Fort Kochi",
      "Aluva",
      "Marine Drive",
    ],
    nearby: ["thiruvananthapuram", "coimbatore", "mysuru"],
    intro:
      "Kochi gets both monsoons and sits on backwater at sea level, so damp is not a season here, it is the baseline. Coats stay heavy with moisture, paws are permanently wet in June and July, and fungal skin trouble is the number one reason Kochi pet parents call us. Doorstep grooming with a proper forced-air dryer solves a problem that a quick bath at home simply cannot.",
    coatTip:
      "Dry between your dog's toes after every monsoon walk in Kochi — the webbing stays wet longest, and the reddish-brown staining and licking that follows is almost always a yeast overgrowth that started right there.",
    faqs: [
      {
        q: "Do you groom in Kakkanad and the Infopark side?",
        a: "Yes, Kakkanad is one of our busiest Kochi areas, along with Edappally, Palarivattom, Vyttila, Panampilly Nagar, Aluva and Fort Kochi. Phone +91 99905 99189 and we will send a groomer to your flat or house.",
      },
      {
        q: "My dog smells musty through the rains. What helps?",
        a: "That smell in Kochi is nearly always yeast thriving in a coat that never fully dries. An anti-fungal bath followed by a complete machine dry, plus ear cleaning, usually clears it; Grooming with Extra Care at Rs. 2,500 covers the whole routine.",
      },
      {
        q: "Will you come in heavy monsoon rain?",
        a: "We work through the Kerala monsoon, since that is exactly when Kochi dogs need grooming most. On days of red-alert flooding we will call you to move the appointment rather than have a groomer navigate waterlogged roads.",
      },
    ],
  },
  {
    slug: "thiruvananthapuram",
    name: "Thiruvananthapuram",
    state: "Kerala",
    region: "South",
    areas: [
      "Kowdiar",
      "Pattom",
      "Vellayambalam",
      "Kazhakkoottam",
      "Sasthamangalam",
      "Vazhuthacaud",
      "Kesavadasapuram",
    ],
    nearby: ["kochi", "coimbatore", "mysuru"],
    intro:
      "The capital is hillier and slightly breezier than Kochi, but it is still Kerala — humid, green, and wet for a large part of the year. Dogs here live well, with plenty of shade and garden space in Kowdiar and Sasthamangalam, though that same greenery is a reliable source of ticks. We come to homes across the city, including the Technopark side at Kazhakkoottam.",
    coatTip:
      "Thiruvananthapuram's shaded gardens keep ticks active nearly all year rather than in a single season, so treat tick checks as a monthly routine here instead of something you do only after the rains.",
    faqs: [
      {
        q: "Do you cover Technopark and Kazhakkoottam?",
        a: "Yes, Kazhakkoottam and the Technopark residential belt are on our regular Thiruvananthapuram route, as are Pattom, Kowdiar, Vazhuthacaud, Vellayambalam and Kesavadasapuram. The groomer travels to you.",
      },
      {
        q: "What is included in the Spa Bath?",
        a: "A Spa Bath at Rs. 1,500 covers shampoo and conditioner, a thorough machine dry, ear cleaning and a brush-out — which in Thiruvananthapuram's damp air is the difference between a clean dog and a musty one. Haircuts and nails come under Full Grooming at Rs. 2,000.",
      },
      {
        q: "Can I book grooming for two cats?",
        a: "You can, though we usually suggest doing one cat at a time in the same visit rather than together, because a stressed cat winds up the other. Our Thiruvananthapuram groomers are used to Persians and longhairs and will stop if a cat has genuinely had enough.",
      },
    ],
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    region: "East",
    areas: [
      "Salt Lake",
      "New Town",
      "Ballygunge",
      "Alipore",
      "Behala",
      "Park Street",
      "Garia",
      "Howrah",
    ],
    nearby: ["bhubaneswar", "patna", "ranchi", "guwahati"],
    intro:
      "Kolkata's summer is a wet blanket — mid-thirties with humidity to match, from April right through the monsoon — and dogs here pant, shed and develop skin trouble accordingly. The old-house stairwells of Ballygunge and Alipore are no fun to carry a nervous Labrador down either. Our groomers arrive at your flat, from a Salt Lake block to a Behala side street, with everything they need.",
    coatTip:
      "Through Kolkata's sticky pre-monsoon months, keep the belly and groin trimmed shorter than the rest of the coat — that is where heat and moisture collect and where the summer hot spots this city sees so many of usually begin.",
    faqs: [
      {
        q: "Do you come to Salt Lake and New Town?",
        a: "We cover Salt Lake and New Town along with Ballygunge, Alipore, Park Street, Garia, Behala and Howrah. Call +91 99905 99189 with your block or street and we will confirm the next groomer heading that way.",
      },
      {
        q: "My building has no lift and narrow stairs. Is that a problem?",
        a: "Not at all — it is one of the reasons doorstep grooming works so well in older parts of Kolkata. The groomer carries the kit up; your dog never has to come down.",
      },
      {
        q: "How do I keep my Labrador comfortable in Kolkata's summer?",
        a: "De-shedding rather than shaving is the answer: taking out the dead undercoat lets air reach the skin, while a shaved Lab loses its sun protection. Book Full Grooming at Rs. 2,000 every four weeks through the humid months.",
      },
    ],
  },
  {
    slug: "bhubaneswar",
    name: "Bhubaneswar",
    state: "Odisha",
    region: "East",
    areas: [
      "Patia",
      "Chandrasekharpur",
      "Saheed Nagar",
      "Jayadev Vihar",
      "Nayapalli",
      "Khandagiri",
      "Old Town",
    ],
    nearby: ["kolkata", "visakhapatnam", "ranchi"],
    intro:
      "Bhubaneswar swings hard between a fierce, dry April and a coastal monsoon that arrives with cyclone warnings. Pets feel both — dry, flaky skin in high summer, then damp-driven itching a few weeks later. Salons are few and mostly clustered near Saheed Nagar, so a groomer who comes to Patia or Chandrasekharpur saves a genuine cross-city trip.",
    coatTip:
      "Change what you ask for by season in Bhubaneswar: a moisturising, oil-replenishing bath in the dry April and May heat, and an anti-fungal one once the coastal monsoon sets in — using the same shampoo year round works against you here.",
    faqs: [
      {
        q: "Is doorstep grooming available in Patia and Chandrasekharpur?",
        a: "Yes, both are regular Bhubaneswar areas for us, along with Jayadev Vihar, Nayapalli, Saheed Nagar, Khandagiri and Old Town. Ring +91 99905 99189 and a groomer will come to your address.",
      },
      {
        q: "How far ahead should I book?",
        a: "Two to three days is comfortable in Bhubaneswar, and same-day is often possible if you call in the morning. We run 8 AM to 8 PM every day of the week, holidays included.",
      },
      {
        q: "Do you groom Indian breeds and rescues?",
        a: "Absolutely, and Indies are a big part of our Bhubaneswar bookings. Short-coated Indian dogs mostly need a bath, nails, ears and a tick check rather than a cut, which makes the Spa Bath at Rs. 1,500 the right fit for most of them.",
      },
    ],
  },
  {
    slug: "guwahati",
    name: "Guwahati",
    state: "Assam",
    region: "Northeast",
    areas: [
      "Zoo Road",
      "Beltola",
      "Six Mile",
      "Dispur",
      "Ganeshguri",
      "Chandmari",
      "Hatigaon",
      "Maligaon",
    ],
    nearby: ["kolkata", "bhubaneswar", "ranchi"],
    intro:
      "Guwahati gets rain on a scale most of India does not — months of it, heavy and relentless, with the Brahmaputra humidity sitting over the city in between. A dog here can go weeks without a coat that is genuinely dry to the skin, and the fungal and ear problems follow predictably. Our groomers reach Zoo Road, Beltola and Six Mile with proper dryers, which is the one tool that actually fixes this.",
    coatTip:
      "During Guwahati's long rains, a towel is not enough — a coat needs forced-air drying right down to the skin, because the trapped damp at root level is what causes the itching and odour, not the surface wetness you can feel.",
    faqs: [
      {
        q: "Which parts of Guwahati do you serve?",
        a: "Zoo Road, Chandmari, Beltola, Ganeshguri, Dispur, Six Mile, Hatigaon and Maligaon. Doorstep grooming makes particular sense in Guwahati during the rains, when nobody wants to move a wet dog across town.",
      },
      {
        q: "My dog's ears keep getting infected. Can grooming help?",
        a: "Guwahati's humidity makes ear trouble very common, and routine cleaning plus plucking or trimming the hair at the canal opening prevents a lot of it. Grooming includes ear cleaning as standard, but an ear that is already red, smelly or painful needs a vet before we touch it.",
      },
      {
        q: "Do you work through the monsoon months?",
        a: "We do, seven days a week, 8 AM to 8 PM. Guwahati grooming demand actually peaks in the rains; call +91 99905 99189 and we will find you a slot between downpours.",
      },
    ],
  },
  {
    slug: "patna",
    name: "Patna",
    state: "Bihar",
    region: "East",
    areas: [
      "Boring Road",
      "Kankarbagh",
      "Rajendra Nagar",
      "Patliputra Colony",
      "Bailey Road",
      "Ashiana Nagar",
      "Danapur",
    ],
    nearby: ["ranchi", "varanasi", "kolkata", "lucknow"],
    intro:
      "Patna's climate is a study in extremes — dusty 44-degree Junes, then Ganga-basin humidity once the rains come, then genuinely chilly January mornings. Coats take a beating across that cycle, and professional grooming options in the city are still thin on the ground. We bring the service to Boring Road, Kankarbagh and Patliputra Colony so you are not hunting for a salon.",
    coatTip:
      "Patna's Ganga-belt humidity peaks in August and September, and that is the window when skin folds on Pugs, Bulldogs and chubby Labradors need drying and cleaning weekly, not monthly.",
    faqs: [
      {
        q: "Is there really a doorstep pet groomer in Patna?",
        a: "Yes — Petgroomers operates across Patna, including Bailey Road, Rajendra Nagar, Ashiana Nagar and Danapur, with the groomer bringing the full kit to your home. Call +91 99905 99189 to book.",
      },
      {
        q: "What equipment does the groomer bring?",
        a: "Clippers with a full set of blades and combs, scissors, a forced-air dryer, shampoos and conditioners, ear and nail tools, towels and a mat to keep the hair off your floor. All we need from your Patna home is a tap and a plug point.",
      },
      {
        q: "How much does it cost?",
        a: "Spa Bath Rs. 1,500, Full Grooming Rs. 2,000, Grooming with Extra Care Rs. 2,500, Hair Cut Only Rs. 1,500 — the same across Patna with no delivery or visit charge added.",
      },
    ],
  },
  {
    slug: "ranchi",
    name: "Ranchi",
    state: "Jharkhand",
    region: "East",
    areas: ["Lalpur", "Harmu", "Kanke Road", "Ashok Nagar", "Doranda", "Hinoo", "Bariatu"],
    nearby: ["patna", "kolkata", "bhubaneswar", "varanasi"],
    intro:
      "Ranchi sits on a plateau, and the altitude makes it noticeably cooler than the plains below — one reason long-coated breeds do comparatively well here. The trade-off is a wet, forested monsoon that keeps ticks and leeches active around Kanke and the outskirts. Our groomers visit homes in Lalpur, Harmu, Doranda and Bariatu rather than asking you to find a salon.",
    coatTip:
      "Ranchi's plateau winters get cold enough that a damp dog can genuinely chill, so never let a coat air-dry in December or January — insist on a full machine dry before the dog goes anywhere near a window or verandah.",
    faqs: [
      {
        q: "Do you offer home grooming throughout Ranchi?",
        a: "We do — Lalpur, Harmu, Kanke Road, Ashok Nagar, Doranda, Hinoo and Bariatu are all covered by our doorstep service. Just call +91 99905 99189 with your locality.",
      },
      {
        q: "My dog gets ticks from the garden. What can you do?",
        a: "Every Ranchi session includes a careful manual tick sweep, and we will show you where on your dog they are attaching so you know what to watch. Grooming reduces the load and catches problems early, but a preventive product from your vet is what actually keeps them off.",
      },
      {
        q: "Can you groom in the evening after office hours?",
        a: "Yes, we take Ranchi bookings up to 8 PM, seven days a week, and evening slots are popular with working pet parents. Mention your preferred time when you call and we will try to hold it.",
      },
    ],
  },
  {
    slug: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    region: "North",
    areas: [
      "Gomti Nagar",
      "Hazratganj",
      "Indira Nagar",
      "Aliganj",
      "Mahanagar",
      "Jankipuram",
      "Alambagh",
    ],
    nearby: ["kanpur", "varanasi", "agra", "delhi"],
    intro:
      "Lucknow runs through all four seasons properly — a dry, dusty summer, a humid monsoon, and a real winter with fog thick enough to keep dogs indoors for days. That last stretch matters, because a dog groomed too short in December here will be miserable. We groom at home across Gomti Nagar, Aliganj, Indira Nagar and the older Hazratganj neighbourhoods.",
    coatTip:
      "Lucknow's January fog keeps the air damp and cold at once, so shorten the belly and paw fur to stop mud clinging while leaving the back and flanks long enough for the dog to stay warm.",
    faqs: [
      {
        q: "Do you serve Gomti Nagar?",
        a: "Gomti Nagar is one of our most-booked Lucknow areas, along with Indira Nagar, Aliganj, Mahanagar, Jankipuram, Hazratganj and Alambagh. The groomer arrives at your gate or flat door at the agreed time.",
      },
      {
        q: "Should I groom my dog in winter at all?",
        a: "Yes, just differently. A Lucknow winter coat still needs brushing out and bathing, otherwise dead hair felts under the top layer — we simply leave more length on and make certain the dog is bone dry before we leave.",
      },
      {
        q: "Can you handle an aggressive or fearful dog?",
        a: "Often, and home ground helps a great deal. Tell us honestly when you book on +91 99905 99189 if your dog has bitten or snapped before, so the Lucknow groomer can plan the session slowly; for genuinely dangerous cases we will recommend sedation arranged through your vet instead.",
      },
    ],
  },
  {
    slug: "kanpur",
    name: "Kanpur",
    state: "Uttar Pradesh",
    region: "North",
    areas: [
      "Swaroop Nagar",
      "Civil Lines",
      "Kakadeo",
      "Kidwai Nagar",
      "Govind Nagar",
      "Shyam Nagar",
      "Panki",
    ],
    nearby: ["lucknow", "agra", "varanasi"],
    intro:
      "Kanpur's industrial air is the defining fact for pets here. The particulate load around Panki and the tannery belt settles into coats quickly, and pale dogs look grubby within a week of a bath. Add a summer that regularly tops 45 degrees and you have a city where a clean, well-rinsed coat does real work. Our groomers come to Swaroop Nagar, Civil Lines and Kakadeo homes directly.",
    coatTip:
      "Kanpur's industrial dust is heavier and greasier than ordinary road dust, so a single soaping rarely gets a coat clean — ask for a clarifying wash followed by a conditioning one, especially on white and cream dogs.",
    faqs: [
      {
        q: "Which localities in Kanpur do you cover?",
        a: "Swaroop Nagar, Civil Lines, Kakadeo, Kidwai Nagar, Govind Nagar, Shyam Nagar and Panki. Being doorstep, we bring grooming to your house anywhere in the city — call +91 99905 99189 to fix a time.",
      },
      {
        q: "How often should I bathe my dog in Kanpur?",
        a: "Every three weeks or so is a reasonable rhythm in Kanpur, a bit more often for light-coloured coats that show the city's dust. Going much beyond a month lets grime bind into the undercoat, which takes a longer and more expensive session to undo.",
      },
      {
        q: "Do you do a trim without a full bath?",
        a: "Yes, Hair Cut Only is Rs. 1,500 and works well as a mid-cycle tidy-up. That said, clipping a dusty Kanpur coat blunts blades fast, so we will sometimes suggest a bath first if the coat is genuinely heavy with grit.",
      },
    ],
  },
  {
    slug: "varanasi",
    name: "Varanasi",
    state: "Uttar Pradesh",
    region: "North",
    areas: ["Sigra", "Lanka", "Bhelupur", "Mahmoorganj", "Cantonment", "Sarnath", "Assi Ghat"],
    nearby: ["lucknow", "patna", "kanpur", "ranchi"],
    intro:
      "Old Varanasi is all narrow lanes and stairs, and moving a dog through them to reach a salon is more trouble than it is worth — which is precisely why doorstep grooming suits this city. The Ganga keeps the air heavy through the monsoon, then summer turns sharply dry and dusty. Our groomers work at homes in Sigra, Lanka, Bhelupur and out towards Sarnath.",
    coatTip:
      "If your dog walks the ghats or the riverside lanes in Varanasi, wash and check the paws afterwards — hot stone in summer and slick, silty steps in the monsoon are equally hard on pads, and small cuts go unnoticed under fur.",
    faqs: [
      {
        q: "Can you reach houses in the old lanes near Assi Ghat?",
        a: "Yes. Our groomers travel on two-wheelers and carry everything in a kit bag, so the narrow Varanasi lanes around Assi Ghat and Bhelupur are not a problem the way a grooming van would be.",
      },
      {
        q: "Do you groom cats in Varanasi?",
        a: "We do — bathing, brushing, de-matting, nail trimming and ear cleaning, all at your home in Varanasi. Cats are worked with gently and at their pace, and we never use force to finish a session.",
      },
      {
        q: "What are your timings?",
        a: "Eight in the morning to eight at night, every day of the week including festival days. Varanasi mornings are the coolest and calmest slot in summer, so we would suggest one if your dog dislikes heat.",
      },
    ],
  },
  {
    slug: "agra",
    name: "Agra",
    state: "Uttar Pradesh",
    region: "North",
    areas: [
      "Taj Ganj",
      "Dayal Bagh",
      "Sikandra",
      "Kamla Nagar",
      "Civil Lines",
      "Trans Yamuna",
      "Shahganj",
    ],
    nearby: ["delhi", "faridabad", "jaipur", "kanpur"],
    intro:
      "Agra is hot, dry and dusty for most of the year, with a brief, sharp winter that catches out anyone who has clipped their dog short in November. The sandy grit that blows in from the Yamuna floodplain and the open stretches around Sikandra works deep into a coat. We come to homes in Dayal Bagh, Kamla Nagar, Civil Lines and Taj Ganj so your dog stays out of the heat.",
    coatTip:
      "The fine sandy grit in Agra's air is abrasive, and brushing a dry, dusty coat drags it through the hair shaft — mist the coat lightly with water or a leave-in spray before brushing to avoid breaking the hair.",
    faqs: [
      {
        q: "Do you offer pet grooming at home in Agra?",
        a: "Yes, across the city — Taj Ganj, Dayal Bagh, Sikandra, Kamla Nagar, Civil Lines, Shahganj and Trans Yamuna. Call +91 99905 99189 and a groomer will come to your address with everything needed.",
      },
      {
        q: "Is summer grooming a good idea here?",
        a: "It is, provided it happens at home. Agra afternoons regularly cross 45 degrees, so we schedule early morning and evening sessions in May and June and never ask a dog to travel in the peak of the day.",
      },
      {
        q: "How long before I need to book again?",
        a: "Four to six weeks suits most Agra dogs, shorter for long-coated breeds that trap the local dust. We will give you an honest interval for your dog's coat at the end of the session rather than a standard answer.",
      },
    ],
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    region: "North",
    areas: [
      "Malviya Nagar",
      "Vaishali Nagar",
      "Mansarovar",
      "C-Scheme",
      "Jagatpura",
      "Bani Park",
      "Raja Park",
      "Tonk Road",
    ],
    nearby: ["jodhpur", "udaipur", "agra", "delhi"],
    intro:
      "Desert-edge dust defines pet care in Jaipur. The fine sand that drifts in from the west settles into coats, eyes and ear canals, and in Mansarovar or Jagatpura you notice it on a dog within a day of a bath. Summers are searingly dry, winters short and cold. Our groomers reach C-Scheme, Malviya Nagar and Vaishali Nagar homes so nobody sits in Tonk Road traffic with a panting dog.",
    coatTip:
      "Jaipur's desert dust settles in the eye corners and ear folds as much as in the coat, so wipe both with a damp cotton pad every couple of days — the tear staining pet parents here blame on diet is usually just accumulated grit.",
    faqs: [
      {
        q: "Do you cover Mansarovar and Jagatpura?",
        a: "Yes, along with Malviya Nagar, Vaishali Nagar, C-Scheme, Bani Park, Raja Park and the Tonk Road stretch. Jaipur is spread out, which is exactly why a groomer coming to you beats driving across it.",
      },
      {
        q: "My dog's coat feels rough and dry. Why?",
        a: "Jaipur's arid air combined with airborne sand strips moisture and roughens the cuticle of each hair. A conditioning treatment and a proper rinse restores it, and the Grooming with Extra Care package at Rs. 2,500 includes the deeper coat treatment this climate calls for.",
      },
      {
        q: "Can I book for a weekend?",
        a: "We work all seven days in Jaipur from 8 AM to 8 PM, so weekends are available, though they book up first. A call to +91 99905 99189 a few days ahead gets you the slot you want.",
      },
    ],
  },
  {
    slug: "jodhpur",
    name: "Jodhpur",
    state: "Rajasthan",
    region: "North",
    areas: ["Ratanada", "Sardarpura", "Shastri Nagar", "Chopasni Housing Board", "Paota", "Basni"],
    nearby: ["jaipur", "udaipur", "ahmedabad"],
    intro:
      "On the edge of the Thar, Jodhpur is drier still than Jaipur, and summer here is a serious matter for any dog — 46 degrees with a hot wind that dehydrates a pet faster than owners expect. Coats go brittle, pads crack on hot stone, and grooming needs to be about protection rather than just neatness. We come to Ratanada, Sardarpura and Chopasni homes at cooler hours.",
    coatTip:
      "In Jodhpur, leave enough coat on to shield the skin from direct sun — a shaved dog in Thar-edge conditions is at real risk of sunburn on the nose bridge, ears and belly, particularly pale or thin-coated breeds.",
    faqs: [
      {
        q: "When is the best time of day for grooming in Jodhpur?",
        a: "Early morning, roughly 8 to 10 AM, or after six in the evening during the summer months. Jodhpur afternoons are punishing, and since we groom inside your home the dog never has to be outside in that heat anyway.",
      },
      {
        q: "Does the desert climate cause paw problems?",
        a: "It does — cracked pads are one of the most common things we see in Jodhpur. We trim the fur between the pads so sand does not collect and abrade, and check for splits; a paw balm from your vet helps between sessions.",
      },
      {
        q: "Which areas do you serve?",
        a: "Ratanada, Sardarpura, Shastri Nagar, Chopasni Housing Board, Paota and Basni are all covered. Call +91 99905 99189 with your address and we will send a groomer out.",
      },
    ],
  },
  {
    slug: "udaipur",
    name: "Udaipur",
    state: "Rajasthan",
    region: "North",
    areas: [
      "Hiran Magri",
      "Sector 14",
      "Fatehpura",
      "Bhuwana",
      "Sukher",
      "Ashok Nagar",
      "Panchwati",
    ],
    nearby: ["jaipur", "jodhpur", "ahmedabad", "vadodara"],
    intro:
      "The lakes and the Aravalli ring make Udaipur milder and greener than the rest of Rajasthan, and pets genuinely benefit — the summer is survivable and the monsoon is proper rather than token. That greenery does bring ticks, particularly for dogs walked around the lakes or the Sajjangarh side. Our groomers visit Hiran Magri, Fatehpura, Bhuwana and Sukher homes directly.",
    coatTip:
      "Udaipur's lake-side humidity in July and August is higher than people expect from Rajasthan, so dry a long coat thoroughly after a bath here rather than assuming the dry desert air will finish the job for you.",
    faqs: [
      {
        q: "Is home pet grooming available across Udaipur?",
        a: "Yes — Hiran Magri, Sector 14, Fatehpura, Ashok Nagar, Panchwati, Bhuwana and Sukher are all on our Udaipur map. Ring +91 99905 99189 and we will confirm a groomer and time.",
      },
      {
        q: "My dog walks by the lakes. Should I worry about ticks?",
        a: "Worth checking, yes. The greener Udaipur neighbourhoods and lakeside paths carry a higher tick load than the drier parts of Rajasthan, and every grooming session here includes a full manual check through the ears, neck and tail base.",
      },
      {
        q: "Do you groom puppies?",
        a: "We do, from around twelve weeks and once the vaccination course is underway. Early sessions in Udaipur are deliberately short and gentle — the aim is a puppy who accepts handling later, not a perfect haircut on day one.",
      },
    ],
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    region: "West",
    areas: [
      "Satellite",
      "Bodakdev",
      "Vastrapur",
      "Prahlad Nagar",
      "Thaltej",
      "SG Highway",
      "Maninagar",
      "Chandkheda",
    ],
    nearby: ["vadodara", "surat", "rajkot", "udaipur"],
    intro:
      "Ahmedabad summers are famously severe — long weeks above 43 degrees with dry, dusty winds — and that combination leaves coats dull and skin flaking. Then the monsoon arrives and the pendulum swings the other way for two months. Between the western suburbs like Bodakdev and Prahlad Nagar and old Maninagar, we cover the city end to end at your doorstep.",
    coatTip:
      "Through an Ahmedabad summer, a light conditioning spray two or three times a week keeps a coat from going brittle in the dry wind; save the full baths for every three weeks rather than washing more often out of habit.",
    faqs: [
      {
        q: "Do you serve the SG Highway and Satellite areas?",
        a: "Yes, Satellite, Bodakdev, Thaltej, Vastrapur, Prahlad Nagar and the SG Highway corridor are among our busiest Ahmedabad routes, and we also reach Maninagar and Chandkheda. The groomer comes to your flat or bungalow.",
      },
      {
        q: "Is it safe to groom during an Ahmedabad heatwave?",
        a: "At home it is, because there is no travel involved and the room stays cool. During heatwave weeks we shift Ahmedabad appointments to early morning or evening and keep sessions shorter with more breaks for water.",
      },
      {
        q: "What is the difference between the Rs. 2,000 and Rs. 2,500 packages?",
        a: "Full Grooming at Rs. 2,000 is the standard bath, haircut, blow-dry, nails and ears. Grooming with Extra Care at Rs. 2,500 adds the time-intensive work — de-matting, deep conditioning, a heavier de-shed and a more thorough skin check — which most double-coated Ahmedabad dogs need in summer.",
      },
    ],
  },
  {
    slug: "surat",
    name: "Surat",
    state: "Gujarat",
    region: "West",
    areas: ["Vesu", "Adajan", "Piplod", "Athwalines", "Citylight", "Pal", "Varachha"],
    nearby: ["vadodara", "ahmedabad", "mumbai", "rajkot"],
    intro:
      "Surat sits close enough to the coast that humidity, not heat, is the real issue — it is stickier than Ahmedabad and it shows in the skin problems we treat here. The city is also full of newer high-rise living in Vesu, Piplod and Pal, where dogs get less outdoor time and more indoor shedding. A groomer at your door means the hair is contained and taken away.",
    coatTip:
      "Surat's coastal stickiness makes skin-fold and armpit chafing common, so keep those areas trimmed and dry, and choose a mild, non-stripping shampoo rather than a strongly perfumed one that irritates already-damp skin.",
    faqs: [
      {
        q: "Which parts of Surat do you cover?",
        a: "Vesu, Adajan, Piplod, Athwalines, Citylight, Pal and Varachha. Call +91 99905 99189 with your society name and we will slot you into the next visit in that part of Surat.",
      },
      {
        q: "Will there be hair all over my flat afterwards?",
        a: "No — the groomer works on a mat, collects the clippings and takes them away, which is the main reason Surat apartment residents book us rather than attempting a bath themselves. We leave the area as we found it.",
      },
      {
        q: "Do you groom on public holidays?",
        a: "We operate all seven days in Surat, 8 AM to 8 PM, including most holidays. Festival weeks get busy, so book a few days in advance if you want your dog looking smart for Diwali or Navratri.",
      },
    ],
  },
  {
    slug: "vadodara",
    name: "Vadodara",
    state: "Gujarat",
    region: "West",
    areas: ["Alkapuri", "Gotri", "Akota", "Fatehgunj", "Manjalpur", "Sama", "Vasna"],
    nearby: ["ahmedabad", "surat", "rajkot", "udaipur"],
    intro:
      "Vadodara is the green one among Gujarat's big cities — plenty of tree cover, decent parks, and a manageable size that makes a doorstep groomer genuinely quick to reach you. The climate is a middle path: hotter and drier than Surat, more humid than Ahmedabad. Dogs here get good walk time, which means dust in the coat and a steady tick season. We work at homes in Alkapuri, Gotri, Akota and Sama.",
    coatTip:
      "Vadodara's tree-lined streets are pleasant to walk but drop seeds and pollen into feathered coats, so comb out the leg and tail feathering after park visits before it works itself into a mat.",
    faqs: [
      {
        q: "Do you visit Gotri and the newer western areas?",
        a: "Yes, Gotri and Sama are regular Vadodara stops along with Alkapuri, Akota, Fatehgunj, Manjalpur and Vasna. The groomer comes to your home with the full kit, so nothing is required from your side but a tap and a plug.",
      },
      {
        q: "How long does a cat grooming session take?",
        a: "Usually forty-five minutes to an hour for a Vadodara house cat, depending on coat length and temperament. We work in short bursts with rests, because pushing a cat past its limit is how both groomer and cat get hurt.",
      },
      {
        q: "Can I choose a specific haircut style?",
        a: "Of course — a teddy bear cut, a summer cut, a puppy cut or a simple tidy-up. Tell the groomer what you want when they arrive at your Vadodara home, and be honest about the state of the coat, since a matted coat limits how long a style can be left.",
      },
    ],
  },
  {
    slug: "rajkot",
    name: "Rajkot",
    state: "Gujarat",
    region: "West",
    areas: [
      "Kalawad Road",
      "University Road",
      "Mavdi",
      "Raiya Road",
      "Yagnik Road",
      "Nana Mava",
      "Gondal Road",
    ],
    nearby: ["ahmedabad", "vadodara", "surat"],
    intro:
      "Saurashtra heat is dry and unrelenting, and Rajkot gets the full force of it from March to June with very little relief in the way of humidity or sea breeze. Coats bleach in the sun, skin dries out, and long-coated breeds struggle. Professional grooming in the city is still limited, so bringing it to homes on Kalawad Road, Raiya Road and Mavdi fills a real gap.",
    coatTip:
      "The strong Saurashtra sun visibly bleaches and dries a dark coat in Rajkot, so keep midday walks short and ask for an oil-based conditioning treatment that puts moisture back into the hair shaft.",
    faqs: [
      {
        q: "Do you have groomers in Rajkot?",
        a: "Yes, Petgroomers covers Rajkot as a doorstep service across Kalawad Road, University Road, Raiya Road, Yagnik Road, Mavdi, Nana Mava and Gondal Road. Call +91 99905 99189 and we will send someone to your home.",
      },
      {
        q: "My dog hates the hair dryer. What then?",
        a: "That is common, and at home we have the space to go slowly — starting the dryer at a distance on a low setting and letting the dog get used to it. If a Rajkot dog remains genuinely frightened we towel dry and finish with a cool low-speed dryer rather than force the issue.",
      },
      {
        q: "Do prices change by area?",
        a: "No. Spa Bath Rs. 1,500, Full Grooming Rs. 2,000, Grooming with Extra Care Rs. 2,500 and Hair Cut Only Rs. 1,500 apply everywhere in Rajkot, with no separate travel or visit fee.",
      },
    ],
  },
  {
    slug: "indore",
    name: "Indore",
    state: "Madhya Pradesh",
    region: "Central",
    areas: [
      "Vijay Nagar",
      "Palasia",
      "Nipania",
      "AB Road",
      "Sudama Nagar",
      "Bhawarkua",
      "Scheme 78",
      "Rau",
    ],
    nearby: ["bhopal", "nagpur", "vadodara", "ahmedabad"],
    intro:
      "Indore sits high enough on the Malwa plateau to get a genuinely pleasant winter and a summer that, while hot, is dry rather than oppressive. Pet ownership has grown fast here, particularly around Vijay Nagar and Nipania, and grooming services have not entirely kept pace. Doorstep grooming means a slot at your convenience rather than a wait at a crowded salon.",
    coatTip:
      "The Malwa plateau's dry cold in December and January creates a lot of static and flyaway hair in Indore, so switch to a moisturising conditioner in winter — brushing a static-charged coat is what causes the breakage owners mistake for shedding.",
    faqs: [
      {
        q: "Is doorstep grooming available in Vijay Nagar and Nipania?",
        a: "Yes, both are among our most frequent Indore areas, along with Palasia, AB Road, Scheme 78, Bhawarkua, Sudama Nagar and Rau. We come to your address rather than the other way round.",
      },
      {
        q: "What if my dog does not let anyone touch his paws?",
        a: "Paw sensitivity is very common and home ground makes it easier to work through. Our Indore groomers will do a few nails at a time with breaks rather than restraining the dog, and if nails genuinely cannot be done safely we will tell you instead of pretending otherwise.",
      },
      {
        q: "Do you groom rabbits or other small pets?",
        a: "Our service in Indore covers dogs and cats only. For rabbits, guinea pigs or birds we would point you to an exotics vet, since their handling and coat needs are quite different from what we specialise in.",
      },
    ],
  },
  {
    slug: "bhopal",
    name: "Bhopal",
    state: "Madhya Pradesh",
    region: "Central",
    areas: [
      "Arera Colony",
      "Shahpura",
      "Kolar Road",
      "MP Nagar",
      "Hoshangabad Road",
      "Ayodhya Bypass",
      "Bairagarh",
    ],
    nearby: ["indore", "nagpur", "raipur"],
    intro:
      "Bhopal's lakes and hills make it one of the more comfortable big cities in central India for a dog, with a moderate summer and a decent monsoon. The lakeside greenery around Arera Colony and Shahpura, though, keeps ticks and fleas in play for much of the year. Our groomers come to you, whether that is a bungalow off Kolar Road or a flat near MP Nagar.",
    coatTip:
      "Bhopal's lake humidity lingers well after the monsoon ends, so keep checking ears and paw webbing into October — this is the window when the fungal issues that started in the rains usually surface.",
    faqs: [
      {
        q: "Which areas of Bhopal do you cover?",
        a: "Arera Colony, Shahpura, Kolar Road, MP Nagar, Hoshangabad Road, Ayodhya Bypass and Bairagarh. Phone +91 99905 99189 with your locality and we will arrange the nearest available groomer.",
      },
      {
        q: "Are the products you use safe for sensitive skin?",
        a: "We use pH-balanced pet shampoos, never human shampoo, and can work with a medicated product your vet has prescribed if you have it at home. Mention any known allergies when booking your Bhopal session so the groomer brings the right thing.",
      },
      {
        q: "How many people come for a session?",
        a: "One groomer for a routine appointment, which is usually right for a Bhopal home visit. For a very large or very anxious dog we can send a second pair of hands — flag it when you book so we plan for it.",
      },
    ],
  },
  {
    slug: "raipur",
    name: "Raipur",
    state: "Chhattisgarh",
    region: "Central",
    areas: [
      "Shankar Nagar",
      "Devendra Nagar",
      "Telibandha",
      "Pandri",
      "VIP Road",
      "Kabir Nagar",
      "Amanaka",
    ],
    nearby: ["nagpur", "bhopal", "bhubaneswar", "ranchi"],
    intro:
      "Raipur gets a hard, dry summer with temperatures pushing 45 degrees and then a monsoon heavy enough to change everything about a dog's skin within a fortnight. Pet grooming as an organised service is relatively new in Chhattisgarh, which is why home visits make sense here — you get a professional at your door in Shankar Nagar or Telibandha without hunting for a salon that may not exist nearby.",
    coatTip:
      "Raipur's shift from bone-dry May to soaking July is abrupt, and coats that were brittle suddenly stay damp — change to a drying, anti-fungal routine as soon as the rains break rather than waiting for the first hot spot.",
    faqs: [
      {
        q: "Do you offer pet grooming at home in Raipur?",
        a: "We do, across Shankar Nagar, Devendra Nagar, Telibandha, Pandri, VIP Road, Kabir Nagar and Amanaka. Just call +91 99905 99189 and a groomer will come to your house with all the equipment.",
      },
      {
        q: "What does a full grooming session include?",
        a: "Bath, shampoo and conditioner, complete blow-dry, haircut or trim, nail clipping, ear cleaning and a brush-out, for Rs. 2,000 anywhere in Raipur. Heavy matting or a serious de-shed moves it to the Rs. 2,500 Grooming with Extra Care package.",
      },
      {
        q: "Can you come the same day?",
        a: "Often yes, particularly if you call in the morning. Raipur slots run from 8 AM to 8 PM seven days a week, and we will be straight with you about availability rather than promising a time we cannot keep.",
      },
    ],
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    state: "Chandigarh",
    region: "North",
    areas: ["Sector 17", "Sector 35", "Sector 8", "Manimajra", "Mohali", "Panchkula", "Zirakpur"],
    nearby: ["ludhiana", "amritsar", "dehradun", "delhi"],
    intro:
      "Chandigarh has four clean seasons and more green per resident than almost any Indian city, which is wonderful for dogs and why the tricity keeps so many large breeds. The flip side is a real winter, a properly hot May and a lot of grass — meaning ticks in summer and thick winter coats that need managing. We groom at home across the sectors, Mohali and Panchkula.",
    coatTip:
      "Chandigarh's distinct seasons give double-coated dogs a genuine spring moult around March and April, so book a heavy de-shedding session then — it is the one city on our list where timing the coat blow actually works.",
    faqs: [
      {
        q: "Do you cover Mohali and Panchkula too?",
        a: "The whole tricity — Chandigarh sectors, Mohali, Panchkula, Zirakpur and Manimajra. One number, +91 99905 99189, covers all three, and there is no extra charge for crossing between them.",
      },
      {
        q: "When should I get my dog de-shedded?",
        a: "March to April is the prime window in Chandigarh, when the winter undercoat comes out in earnest, and again in October as the coat thickens. A Full Grooming at Rs. 2,000 in each of those months saves you months of hair on the furniture.",
      },
      {
        q: "Do you take walk-in bookings?",
        a: "There is no walk-in, since there is no salon — everything in Chandigarh is scheduled and comes to your door. Same-day slots do open up regularly, so it is always worth a call.",
      },
    ],
  },
  {
    slug: "ludhiana",
    name: "Ludhiana",
    state: "Punjab",
    region: "North",
    areas: [
      "Sarabha Nagar",
      "Model Town",
      "Civil Lines",
      "Dugri",
      "BRS Nagar",
      "Pakhowal Road",
      "Ferozepur Road",
    ],
    nearby: ["chandigarh", "amritsar", "delhi"],
    intro:
      "Ludhiana is industrial and it shows in the air, particularly in winter when smog settles over the city for weeks. Large breeds are popular here and Punjab winters are cold enough that people rightly hesitate to clip them short. The result is a lot of thick coats carrying a lot of industrial grime. Our groomers come to Sarabha Nagar, Model Town and Dugri homes with the gear to deal with both.",
    coatTip:
      "A thick winter coat in Ludhiana traps industrial particulates near the skin where you cannot see them, so brush right down to the root weekly through the smog months even if the coat looks clean on top.",
    faqs: [
      {
        q: "Which parts of Ludhiana do you serve?",
        a: "Sarabha Nagar, Model Town, Civil Lines, BRS Nagar, Dugri, Pakhowal Road and Ferozepur Road. Doorstep service means the groomer reaches your kothi or flat at the agreed time.",
      },
      {
        q: "Should I clip my dog short in the Punjab winter?",
        a: "We would advise against a very short clip in Ludhiana between December and February, since nights drop close to freezing. A tidy trim keeping the back and flanks long, with shorter fur only on the belly and paws, is the sensible middle ground.",
      },
      {
        q: "Do you handle badly matted coats?",
        a: "Yes, and we see plenty in Ludhiana where thick winter coats were left unbrushed. Severe matting is booked as Grooming with Extra Care at Rs. 2,500; where mats are tight against the skin we clip them out, because de-matting a felted coat by hand is painful for the dog.",
      },
    ],
  },
  {
    slug: "amritsar",
    name: "Amritsar",
    state: "Punjab",
    region: "North",
    areas: [
      "Ranjit Avenue",
      "Green Avenue",
      "Lawrence Road",
      "Mall Road",
      "Majitha Road",
      "Batala Road",
      "Hall Bazaar",
    ],
    nearby: ["ludhiana", "chandigarh", "delhi"],
    intro:
      "Amritsar gets the sharpest seasonal swing of any city we cover — near-freezing January fog and 44-degree June afternoons in the same year. Coats respond dramatically, thickening in autumn and blowing out in spring, and pet parents here often have large dogs in independent houses with courtyards. We groom on-site in Ranjit Avenue, Green Avenue and around Majitha Road.",
    coatTip:
      "Amritsar's temperature swing means your dog effectively has two coats a year, so plan a heavy de-shedding session in March as the winter coat releases and a lighter tidy in October when the new one comes in.",
    faqs: [
      {
        q: "Is home grooming offered across Amritsar?",
        a: "Yes — Ranjit Avenue, Green Avenue, Lawrence Road, Mall Road, Majitha Road, Batala Road and the older city around Hall Bazaar. Call +91 99905 99189 and a groomer comes to your home.",
      },
      {
        q: "It gets very cold here. Is a winter bath safe?",
        a: "It is, as long as the dog is dried completely, which is exactly why a machine dryer matters more in Amritsar than a warm bathroom does. Our groomers will not leave a damp dog in a January house.",
      },
      {
        q: "Do you groom German Shepherds and other big breeds?",
        a: "Constantly — GSDs, Labradors and Golden Retrievers make up much of our Amritsar work. Large double coats take longer, so allow around two hours and expect the groomer to spend most of it on de-shedding rather than cutting.",
      },
    ],
  },
  {
    slug: "dehradun",
    name: "Dehradun",
    state: "Uttarakhand",
    region: "North",
    areas: [
      "Rajpur Road",
      "Dalanwala",
      "Vasant Vihar",
      "Clement Town",
      "Sahastradhara Road",
      "Jakhan",
      "Prem Nagar",
    ],
    nearby: ["chandigarh", "delhi", "ghaziabad", "noida"],
    intro:
      "Tucked in the Doon valley, Dehradun is cool, wooded and blessed with a heavy monsoon that turns everything green and everything muddy. Dogs here walk on forest trails up Rajpur Road and towards Sahastradhara, which means burrs, leeches in the rains and a serious tick season. Our groomers come to your home rather than asking you to drive down winding roads with a wet dog.",
    coatTip:
      "Dehradun's forest trails leave burrs and grass seed deep in leg feathering and between the toes, so check and comb those areas after every hill walk — left alone through a valley monsoon they mat into hard, painful clumps.",
    faqs: [
      {
        q: "Do you come up Rajpur Road and towards Sahastradhara?",
        a: "Yes, the Rajpur Road belt, Jakhan and Sahastradhara Road are all covered, as are Dalanwala, Vasant Vihar, Clement Town and Prem Nagar. Call +91 99905 99189 and tell us your landmark.",
      },
      {
        q: "My dog gets muddy on valley walks. How often should he be bathed?",
        a: "Through the Dehradun monsoon, every two weeks is reasonable, with paw rinses in between rather than full baths. Over-bathing dries the skin, so it is better to clean the paws and belly often and do the full job less frequently.",
      },
      {
        q: "Can you groom outdoors in the garden?",
        a: "Weather permitting, gladly — many Dehradun houses have the space and it keeps the hair out of the house entirely. In the rains we simply move inside, so a covered verandah is always useful to have.",
      },
    ],
  },
  {
    slug: "visakhapatnam",
    name: "Visakhapatnam",
    state: "Andhra Pradesh",
    region: "South",
    areas: [
      "MVP Colony",
      "Dwaraka Nagar",
      "Madhurawada",
      "Seethammadhara",
      "Gajuwaka",
      "Rushikonda",
      "Beach Road",
    ],
    nearby: ["vijayawada", "bhubaneswar", "hyderabad"],
    intro:
      "Vizag is a coastal city with hills behind it, and the salt-laden sea air along Beach Road and Rushikonda reaches every part of a dog that goes near it. Salt dulls a coat, dries the pads and irritates skin that is already damp from the humidity. Since a lot of local dogs are regular beach-goers, we bring a proper rinse and dry to your home in MVP Colony, Madhurawada or Seethammadhara.",
    coatTip:
      "Salt air in Visakhapatnam settles on the coat even without a swim, leaving it dull and slightly sticky — a freshwater rinse twice a week does more for a Vizag dog's coat than an extra shampoo ever will.",
    faqs: [
      {
        q: "Which areas of Vizag do you cover?",
        a: "MVP Colony, Dwaraka Nagar, Seethammadhara, Madhurawada, Rushikonda, Beach Road and Gajuwaka. Being a doorstep service in Visakhapatnam, the groomer travels the hills and the coast so your dog does not have to.",
      },
      {
        q: "My dog swims in the sea. What grooming does he need?",
        a: "Regular sea swimmers in Vizag need salt out of the coat above all — a thorough freshwater bath with conditioner, a full dry and careful ear cleaning, since seawater in the ears is a fast route to infection. The Spa Bath at Rs. 1,500 covers this well.",
      },
      {
        q: "Do you work during cyclone season?",
        a: "We operate through it, 8 AM to 8 PM daily, but if a cyclone warning is active for Visakhapatnam we will call and reschedule rather than send a groomer out. Safety comes before the appointment.",
      },
    ],
  },
  {
    slug: "vijayawada",
    name: "Vijayawada",
    state: "Andhra Pradesh",
    region: "South",
    areas: [
      "Benz Circle",
      "Labbipet",
      "Patamata",
      "Gunadala",
      "Bhavanipuram",
      "Governorpet",
      "Auto Nagar",
    ],
    nearby: ["visakhapatnam", "hyderabad", "chennai"],
    intro:
      "Vijayawada is one of the hottest cities in the south, sitting in the Krishna basin with hills that trap the heat and push May afternoons past 45 degrees. Humidity from the river makes it feel worse. For a thick-coated dog this is a difficult place, and the right grooming here is about airflow to the skin, not a shorter haircut. We come to homes in Labbipet, Patamata and Benz Circle.",
    coatTip:
      "In Vijayawada's basin heat, thinning the undercoat so air can reach the skin cools a dog far better than clipping the topcoat short, which only removes the layer that reflects the sun.",
    faqs: [
      {
        q: "Is grooming at home possible across Vijayawada?",
        a: "Yes — Benz Circle, Labbipet, Patamata, Governorpet, Gunadala, Bhavanipuram and Auto Nagar are all covered. Dial +91 99905 99189 and a groomer will reach your house with everything needed.",
      },
      {
        q: "What is the best grooming schedule for this heat?",
        a: "Every four weeks through the Vijayawada summer, focused on de-shedding and keeping the belly and paws clipped short. We book morning or late-evening slots between April and June so the session never coincides with the worst of the day.",
      },
      {
        q: "Do you provide the water, or should I keep some ready?",
        a: "We bring water for rinsing, but a tap in the bathroom or on the balcony makes for a better wash. If water supply is limited at your Vijayawada address, tell us when booking and the groomer will carry extra.",
      },
    ],
  },
  {
    slug: "goa",
    name: "Goa",
    state: "Goa",
    region: "West",
    areas: [
      "Panaji",
      "Porvorim",
      "Margao",
      "Calangute",
      "Candolim",
      "Vasco da Gama",
      "Mapusa",
      "Ponda",
    ],
    nearby: ["mumbai", "pune", "navi-mumbai"],
    intro:
      "Goa is beaches, salt air and a monsoon that arrives like a wall in June and stays for three months — about the most demanding combination a dog's coat can face. Sand works into the undercoat, seawater dries out the skin, and nothing dries properly between June and September. With homes scattered from Porvorim to Margao, a groomer who drives to you is simply more practical than a salon.",
    coatTip:
      "Beach sand in Goa settles right at the skin rather than on the surface of the coat, so a rinse alone will not shift it — a proper lather, worked in with the fingers down to the root, is the only thing that gets sand out of a double coat.",
    faqs: [
      {
        q: "Do you cover both North and South Goa?",
        a: "We do — Panaji, Porvorim, Calangute, Candolim and Mapusa in the north, Margao, Vasco da Gama and Ponda in the south. Call +91 99905 99189 with your village or locality and we will arrange a groomer.",
      },
      {
        q: "How should I care for a beach dog's coat?",
        a: "Rinse with fresh water after every beach trip in Goa, dry the ears, and book a full bath every two to three weeks. Salt and sand left in the coat cause more skin trouble here than anything else we see.",
      },
      {
        q: "Do you groom during the Goa monsoon?",
        a: "Yes, and the rains are when Goan dogs need us most, because coats that never dry turn fungal quickly. A complete machine dry after each bath, which is difficult to manage yourself, is the core of what we do here in monsoon season.",
      },
    ],
  },
];

export const citiesBySlug: Record<string, City> = cities.reduce(
  (acc, city) => {
    acc[city.slug] = city;
    return acc;
  },
  {} as Record<string, City>,
);

export const cityRegions: Record<Region, string[]> = cities.reduce(
  (acc, city) => {
    if (!acc[city.region]) {
      acc[city.region] = [];
    }
    acc[city.region].push(city.slug);
    return acc;
  },
  {} as Record<Region, string[]>,
);
