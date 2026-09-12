// City x service combination pages for Petgroomers doorstep grooming.
// Pages render at /pet-grooming/<citySlug>/<serviceSlug>.
//
// Every entry is written by hand. A combination page only deserves to exist if
// it says something true about THAT service in THAT city that would be false
// somewhere else, so the intros, local notes and FAQs below are deliberately
// not interchangeable.

import type { CityService } from "./types";

export const cityServices: CityService[] = [
  /* ----------------------------------------------------------------- delhi */
  {
    citySlug: "delhi",
    serviceSlug: "dog-grooming-at-home",
    title: "Dog Grooming at Home in Delhi | Petgroomers",
    description:
      "Doorstep dog grooming across Delhi at Rs. 2,000. Bath, full blow dry, trim, nails and ears done inside your own home. Call +91 99905 99189, open 7 days.",
    intro:
      "Delhi does not have one grooming season, it has two opposite ones. The dry 45-degree run through May and June bakes loose undercoat into felt behind the elbows and hips, and then from November the smog settles into the oily guard hairs as a grey film that a bucket bath mostly smears around. Because our groomer works inside your flat with a forced-air dryer, a winter bath finishes with a dog that is dry right down to the skin before the evening air drops. A full session is Rs. 2,000 and takes between 60 and 120 minutes depending on size and coat.",
    localNote:
      "Two things drive dog grooming demand in Delhi, and neither has much to do with looks. The first is distance: a Rohini or Dwarka pet parent has no realistic way of reaching a decent salon in Greater Kailash without putting a dog through an hour of Ring Road traffic each way, which is why doorstep bookings from the outer colonies outnumber the central ones. The second is air. Pet parents in Vasant Kunj, Hauz Khas and Defence Colony call us most often between late October and January, usually describing constant scratching that they assume is a food allergy and that turns out to be particulate matter bound into the coat. Punjabi Bagh and the older west Delhi houses tend to book on a longer cycle because more of those dogs are short-coated Indies and Labradors.",
    faqs: [
      {
        q: "What does dog grooming at home in Delhi cost?",
        a: "Full grooming at your Delhi address is Rs. 2,000, covering bath, complete blow dry, body trim, nails and ear cleaning. A spa bath without a haircut is Rs. 1,500, and Grooming with Extra Care at Rs. 2,500 buys the longer double lather that a smog-heavy winter coat usually needs.",
      },
      {
        q: "Is it safe to bathe my dog in Delhi during December and January?",
        a: "It is, as long as the drying is done properly, which is precisely the argument for grooming at home in Delhi rather than at a salon. Your dog is never handed back damp into a cold car park at dusk. Our groomer force-dries indoors with the windows shut and will not leave until the undercoat is dry at the root.",
      },
      {
        q: "Can you groom a dog in a Delhi flat that has no balcony?",
        a: "Yes. Most Delhi grooming we do happens in a bathroom, with a non-slip mat down and the door closed so hair does not travel. We need a running tap, one power socket for the dryer and roughly six feet of floor. Everything else, including towels, comes with the groomer.",
      },
    ],
  },
  {
    citySlug: "delhi",
    serviceSlug: "cat-grooming-at-home",
    title: "Cat Grooming at Home in Delhi",
    description:
      "Calm, carrier-free cat grooming at your Delhi home for Rs. 2,000. Combing, de-matting, nails and ears at your cat's own pace. Book on +91 99905 99189.",
    intro:
      "Very few Delhi cat parents have ever taken a cat to a groomer, and that is entirely reasonable, because the journey is usually worse for the cat than whatever the grooming was meant to fix. Delhi adds its own wrinkle in winter: room heaters and blowers pull the humidity out of a flat for weeks on end, and long-haired cats respond with dandruff along the spine and a ruff that felts faster than their owners expect. Grooming at home means no carrier, no lift, no car, and a session that can stop the moment your cat says so. Full cat grooming is Rs. 2,000.",
    localNote:
      "The Delhi cat population has grown fast and quietly, particularly in the barsati and builder-floor flats of Greater Kailash, Hauz Khas and Safdarjung Enclave, and in the newer Dwarka and Rohini societies where an indoor-only cat makes more sense than a dog. What we are called for is rarely a bath. It is a Persian whose belly has matted through a dry January, a senior cat in Defence Colony who has stopped reaching her own back, or a rescued Indian cat from a Punjabi Bagh household who has never been combed and needs a first session that is mostly patience. First visits in Delhi are deliberately short, and we would rather finish combing and nails and come back than win an argument with a frightened cat.",
    faqs: [
      {
        q: "My cat has never been groomed. How does a first Delhi session work?",
        a: "Tell us at booking so we plan a longer, slower visit. The groomer will often sit with the kit open and do nothing for the first ten minutes while your cat investigates. A first cat grooming session in Delhi frequently covers only combing, a mat check and nails, and we treat that as a success rather than an unfinished job.",
      },
      {
        q: "Does Delhi winter heating actually affect my cat's coat?",
        a: "It does. Weeks of blowers and closed windows drop indoor humidity sharply, and in long-haired cats that shows as flaky skin along the back, more static in the coat and mats that form closer to the skin. Regular combing removes the dead hair before it felts, which is more useful here than bathing more often.",
      },
      {
        q: "Which parts of Delhi do you send cat groomers to?",
        a: "All of them, from Rohini and Punjabi Bagh through to Saket, Greater Kailash, Vasant Kunj and the Dwarka sectors. Cat grooming is doorstep only in Delhi, because putting a cat in a carrier and into traffic undoes most of the calm we are trying to create.",
      },
    ],
  },
  {
    citySlug: "delhi",
    serviceSlug: "tick-and-flea-treatment",
    title: "Tick & Flea Treatment for Pets in Delhi",
    description:
      "Anti-tick and flea grooming bath at your Delhi home, Rs. 2,500. Manual tick removal, medicated wash and a full coat check. Trained groomers, open 7 days.",
    intro:
      "Tick pressure in Delhi is seasonal rather than constant, and it climbs sharply once the monsoon breaks. August through November is when we do most of this work, because the brown dog tick breeds hardest in that warm, damp window and the colony lawns and park edges are full of dogs picking them up from each other. This is a grooming treatment, not veterinary care: it clears what is on the coat today and tells you honestly how bad the load is. The session is Rs. 2,500 and includes a written note of where the heaviest activity was found.",
    localNote:
      "Delhi has a specific reinfestation problem that other cities do not share in quite the same way. A very large number of dogs here walk the same few green spaces every evening, whether that is the Deer Park circuit near Hauz Khas, a Defence Colony park, the Dwarka sector greens or the shared lawns of a Rohini block, so a tick load is genuinely a neighbourhood-level thing rather than a household one. The second issue is winter storage. Once the weather turns, blankets and dog beds go into steel almirahs and back out again, and the eggs travel with them. When we treat a dog in Saket or Punjabi Bagh, the groomer will point out the exact corner, rug or balcony crate that keeps putting ticks back on your pet, which is the part a salon bath can never do for you.",
    faqs: [
      {
        q: "When is tick season worst for dogs in Delhi?",
        a: "The heavy stretch runs from the start of the monsoon in July right through November, peaking once the rain stops and the weather is still warm. Delhi tick numbers drop in the cold of January and again in the very dry heat of late May, but they never fall to zero indoors, where a heated flat keeps them comfortable.",
      },
      {
        q: "Will one tick and flea session in Delhi clear the problem completely?",
        a: "Usually not by itself. The bath deals with what is on the animal now, but eggs sitting in your Delhi flat's bedding, floor cracks and balcony matting keep hatching for weeks, so most homes need a repeat visit plus a serious clean-out of the sleeping corner.",
      },
      {
        q: "Is this the same thing as taking my dog to a vet in Delhi?",
        a: "No, and we would rather be clear about it. We are groomers, so we do not prescribe or apply spot-on drops, tablets or injections. If your dog has scabs, pale gums, a heavy infestation or will not stop scratching, see a Delhi vet first, and we are happy to groom alongside whatever they prescribe.",
      },
    ],
  },

  /* ---------------------------------------------------------------- mumbai */
  {
    citySlug: "mumbai",
    serviceSlug: "dog-grooming-at-home",
    title: "Dog Grooming at Home in Mumbai | Petgroomers",
    description:
      "Dog grooming at your Mumbai flat for Rs. 2,000. Bath plus a complete monsoon-proof blow dry, trim, nails and ears. Call +91 99905 99189, 8 AM to 8 PM.",
    intro:
      "In Mumbai the bath is the easy part and the dry is the whole job. Between June and September the air sits at ninety percent humidity, a coat left to dry on its own stays wet at the root for hours, and that trapped damp is what becomes a hot spot, a yeasty ear or the smell you cannot wash out. Grooming inside your own flat means the forced-air dryer runs until the undercoat is genuinely dry, instead of your dog being carried damp through a lift lobby and a wet street. Full grooming is Rs. 2,000, including the long dry that this city actually needs.",
    localNote:
      "Mumbai grooming is shaped by floor space more than anything else. A Bandra or Worli flat rarely has a spare room, so our groomers work in the bathroom on a mat with the door shut, and in the Powai and Malad towers we often set up in the utility area beside the washing machine. Nobody needs a balcony. What Mumbai pet parents do need is someone who will not rush the drying: the single most common complaint we hear, from Juhu to Chembur, is a dog that smelt fine for a day and then turned musty. The other quiet advantage of doorstep work here is that your dog never crosses the city. A Sunday round trip from Colaba to a salon in Andheri can cost three hours, most of it spent with an anxious animal in a car.",
    faqs: [
      {
        q: "How often should a dog be groomed in Mumbai during the monsoon?",
        a: "Every two to three weeks through the rains is sensible, which is more often than the rest of the year. It is not about dirt; it is about not letting the coat stay damp for weeks at a stretch. If your vet has flagged skin trouble, Grooming with Extra Care at Rs. 2,500 covers a medicated wash and a longer dry.",
      },
      {
        q: "My Mumbai flat is tiny and has no balcony. Can a groomer still work there?",
        a: "Yes, and most of the homes we groom in look exactly like that. A bathroom plus about a metre of floor is enough. The groomer contains the hair on a mat, bags it and carries it out, so a compact flat in Malad or Colaba is genuinely not an obstacle.",
      },
      {
        q: "Do you need building or society permission in Mumbai?",
        a: "Usually just your name at the gate. Our groomers arrive on two-wheelers with a kit bag rather than a van, so there is no parking or vehicle-entry paperwork. If your building insists on a written intimation, mention it when you call +91 99905 99189 and we will send the groomer's details in advance.",
      },
    ],
  },
  {
    citySlug: "mumbai",
    serviceSlug: "cat-grooming-at-home",
    title: "Cat Grooming at Home in Mumbai | Rs. 2,000",
    description:
      "Gentle doorstep cat grooming in Mumbai at Rs. 2,000. No carrier, no lift, no cab. Combing, de-matting, nails and a calm pace set by your cat. Open 7 days.",
    intro:
      "Mumbai keeps more indoor-only cats than almost any Indian city, simply because a high-rise flat suits a cat far better than it suits a dog. That also means a Mumbai cat may never have left the flat in her life, and the first time she does it involves a carrier, a lift, a wet street and a cab, which is a lot to ask before the grooming has even started. We come to you instead, and the session goes at her speed with her own hiding spots still available. Full cat grooming is Rs. 2,000, and the humidity here is exactly why Persian coats felt so quickly between visits.",
    localNote:
      "Almost every cat booking we take in Mumbai comes from a flat rather than a house, and the pattern is consistent across Bandra, Andheri, Powai and Chembur: a long-haired cat, usually a Persian or a Persian mix, whose belly and armpits have matted during the rains while the top coat still looked fine. Sea-air humidity is a real factor, because damp fur mats far faster than dry fur does. We also do a steady amount of work with rescued Indian cats in south Mumbai and Juhu households, where the cat is friendly with the family and deeply suspicious of everyone else. Those visits are booked long on purpose. A groomer who spends fifteen minutes doing nothing at the start of a Mumbai cat session usually finishes the whole job; one who hurries rarely does.",
    faqs: [
      {
        q: "Why should I book cat grooming at home in Mumbai rather than a salon?",
        a: "Because the trip is the stressful part. A Mumbai salon visit means a carrier, a lift, a walk to the road and a cab in traffic, and many cats stay hidden under the bed for a day or two afterwards. Remove the journey and most cats settle within a few minutes of the groomer sitting down.",
      },
      {
        q: "My Persian mats every monsoon in Mumbai. Can the mats be removed at home?",
        a: "Usually yes. Tight mats sit flat against the skin and cannot be brushed out without hurting, so we clip them away with a guarded blade rather than pulling. Mumbai's damp makes this a recurring job, and a comb-through every four to six weeks is far kinder than an annual shave-down.",
      },
      {
        q: "Does my cat have to be bathed during the session?",
        a: "No, and in Mumbai we often skip it. A healthy cat keeps herself clean and mostly needs combing and nail care. We recommend a bath for greasy or dandruff-heavy coats, overweight cats who cannot reach their back, and seniors, and there is a waterless option for cats who panic at the tap.",
      },
    ],
  },
  {
    citySlug: "mumbai",
    serviceSlug: "tick-and-flea-treatment",
    title: "Tick & Flea Treatment in Mumbai",
    description:
      "Doorstep anti-tick and flea grooming bath in Mumbai, Rs. 2,500. Manual removal, medicated wash and a full coat check by trained groomers. Book on WhatsApp.",
    intro:
      "Mumbai never really gets a tick off-season. The city has no cold month to break the cycle, so the warm, humid baseline keeps the brown dog tick breeding more or less year round, with a pronounced surge once the monsoon ends in September and October. The compound-level problem here is specific: podium gardens, basement parking and building compounds are shared by a dozen dogs and a resident cat population, so reinfestation happens within the building rather than out on a walk. This is a grooming treatment at Rs. 2,500, not veterinary care.",
    localNote:
      "What makes tick control hard in Mumbai is that the reservoir is usually somewhere in the building. Society compounds in Andheri, Malad and Powai host free-roaming dogs and cats whose resting spots are the same corners your dog sniffs on the way to the lift, and podium landscaping stays damp enough for eggs to survive between rain spells. Inside the flat, the humidity means that the sofa base, the balcony matting and the bottom of the wardrobe stay hospitable all year, which is why Mumbai households that treat only the animal keep calling us back. When we treat a dog in Bandra or Chembur, the groomer walks through the flat afterwards and tells you which corners to strip and wash, and where the eggs are most likely sitting.",
    faqs: [
      {
        q: "Do ticks in Mumbai die off in any season?",
        a: "Not really. Mumbai has no genuinely cold spell, so tick activity carries on all twelve months and simply peaks from September to November after the monsoon. Pet parents here are better off treating tick checks as a routine part of every groom than waiting for a season that never fully ends.",
      },
      {
        q: "My dog keeps getting ticks even though he only walks in the building compound. Why?",
        a: "That compound is almost certainly the source. Mumbai society podiums, basement parking and landscaped strips are shared by many dogs and free-roaming cats, and ticks drop off, breed in the wall cracks and climb back on. Treating your dog alone will not hold unless the resting corners get cleaned too.",
      },
      {
        q: "Can you do the tick and flea bath in a small Mumbai bathroom?",
        a: "Yes, that is where most of them happen. We need the tap, a socket and enough space for the groomer to work section by section under good light. Anti-tick shampoo needs a proper contact time rather than a quick rinse, so budget a longer session than a normal bath.",
      },
    ],
  },

  /* ------------------------------------------------------------- bengaluru */
  {
    citySlug: "bengaluru",
    serviceSlug: "dog-grooming-at-home",
    title: "Dog Grooming at Home in Bengaluru | Rs. 2,000",
    description:
      "Doorstep dog grooming in Bengaluru at Rs. 2,000, with the undercoat work this city's year-round shedding needs. No traffic, no cages. Call +91 99905 99189.",
    intro:
      "Bengaluru's weather is the reason the city is full of Huskies, Retrievers and Saint Bernards, and also the reason their owners are permanently sweeping. Without a sharp seasonal change to trigger one big moult, double coats here shed at a low level all twelve months instead of blowing twice a year, so the dead undercoat never clears on its own. Our groomer comes to your home with a high-velocity dryer and proper rakes, which pulls that loose coat out at the source rather than letting it land on your sofa. Full grooming is Rs. 2,000 and includes the de-shedding pass.",
    localNote:
      "The practical case for at-home grooming in Bengaluru is written on the city's roads. A Whitefield or Electronic City pet parent who books a salon in Indiranagar is committing to two hours of driving on a weekday evening, with a dog in the back the whole way, and the grooming itself takes less time than the commute. So the groomer absorbs the traffic instead. Coat-wise, the heaviest work we do is in the tech corridors and HSR Layout, where the big double-coated breeds are concentrated, while Malleswaram and Jayanagar households lean more towards Indies, Spitz types and older dogs who need a gentler, shorter session. Across all of it, the four-to-six week rhythm matters more in Bengaluru than the individual haircut does.",
    faqs: [
      {
        q: "Why does my Husky shed all year in Bengaluru?",
        a: "Because there is no real winter to trigger a proper seasonal blow. In most of India a double coat sheds heavily twice a year, but Bengaluru's steady mild weather turns that into a constant low-level shed, so the dead undercoat needs to be pulled out mechanically every four to six weeks rather than waited out.",
      },
      {
        q: "Do you travel to Whitefield and Electronic City for home grooming?",
        a: "We do, along with Indiranagar, Koramangala, HSR Layout, Hebbal, Jayanagar and Malleswaram. Doorstep service in Bengaluru exists precisely so nobody has to cross the city at 6 PM with a dog in the car. Give us your area on +91 99905 99189 and we will tell you the next slot on that route.",
      },
      {
        q: "Will de-shedding help with hair on furniture, or should I shave my dog?",
        a: "De-shedding, not shaving. Removing the dead undercoat at the root drops visible shedding for several weeks, while shaving a double coat destroys the guard hairs that protect the skin and does nothing about the fur that is already loose underneath.",
      },
    ],
  },
  {
    citySlug: "bengaluru",
    serviceSlug: "cat-grooming-at-home",
    title: "Cat Grooming at Home in Bengaluru | Rs. 2,000",
    description:
      "Quiet, carrier-free cat grooming at your Bengaluru home for Rs. 2,000. Combing, de-matting, nails and ears, paced by your cat. Persians, Indies and rescues.",
    intro:
      "Bengaluru has one of the largest rescue and foster cat communities in the country, which means a lot of local cats arrived as adults with a history and a firm opinion about strangers. Grooming them in a salon is rarely worth attempting. The city's mild, unvarying climate also keeps cats shedding steadily all year rather than in a seasonal burst, so the hair a cat swallows while self-grooming builds up and hairballs become a standing complaint. Combing at home, at your cat's pace, is the fix, and a full session is Rs. 2,000.",
    localNote:
      "A striking share of Bengaluru cat bookings come from apartment households in HSR Layout, Koramangala and Whitefield where both people work and the cat is an indoor-only, deeply bonded animal who has never met a groomer. Those visits are booked with extra time and no expectation of a bath. Elsewhere, in the older bungalow pockets of Malleswaram and Jayanagar, we see more semi-outdoor cats and more genuine matting, because a cat who slips into the garden picks up burrs and grime her tongue cannot deal with. The year-round shedding is the common thread across the city: Bengaluru cat parents get more out of a comb-out every four to six weeks than they do from any amount of bathing.",
    faqs: [
      {
        q: "Can you groom a rescued cat in Bengaluru who hates strangers?",
        a: "Often, yes, but tell us the history when you book so we allocate a longer visit. Our Bengaluru groomers start by sitting still and letting the cat approach the tools. If she is genuinely not willing, we stop and reschedule rather than restrain her, and a first session that covers only nails still counts as progress.",
      },
      {
        q: "My Bengaluru cat has constant hairballs. Will grooming reduce them?",
        a: "It usually does. Hairballs are mostly swallowed loose coat, and because cats here shed at a steady rate all year, that loose coat is always there. A thorough comb and undercoat pass every four to six weeks removes it before your cat does, which most owners notice within a month.",
      },
      {
        q: "Do you handle cat nail trimming separately in Bengaluru?",
        a: "Nail work is included in the Rs. 2,000 cat grooming session, including the dew claws that curl into the pad if they are ignored. Indoor Bengaluru cats wear their nails down very little on tile and wood, so every three to four weeks is a reasonable rhythm.",
      },
    ],
  },
  {
    citySlug: "bengaluru",
    serviceSlug: "tick-and-flea-treatment",
    title: "Tick & Flea Treatment in Bengaluru",
    description:
      "Anti-tick and flea grooming treatment at your Bengaluru home for Rs. 2,500. Manual tick removal, medicated bath and honest advice on the source. Open 7 days.",
    intro:
      "The same mild climate that makes Bengaluru comfortable for pets also makes it comfortable for ticks. There is no cold snap hard enough to break the breeding cycle, so tick activity carries on through the year and simply thickens after the monsoon rains from August onwards. Bengaluru also has an unusual amount of greenery at ground level, and dogs pick ticks up off shaded soil and hedge lines rather than off other dogs. This is a grooming treatment at Rs. 2,500, not veterinary care, and a heavy infestation needs a vet.",
    localNote:
      "Where a Bengaluru dog lives changes the shape of the problem. In the older layouts of Jayanagar, Malleswaram and parts of Indiranagar, independent houses with gardens mean ticks are living in the soil, the hedge base and the shaded side of the compound wall, so the dog is being reinfested at home every single day. In the apartment clusters of HSR Layout, Hebbal and Whitefield, the source is usually the landscaped common area or the basement, shared with every other dog in the tower. Our groomers treat the coat and then tell you plainly which of the two you are dealing with, because a household that only keeps bathing the dog while the garden bed stays untouched will be booking us again in three weeks.",
    faqs: [
      {
        q: "Is there a tick season in Bengaluru, or is it year round?",
        a: "Effectively year round. Bengaluru never gets cold enough to interrupt the tick life cycle, so instead of a clear season you get a baseline that thickens noticeably after the rains from August through November. Monthly checks make more sense here than seasonal ones.",
      },
      {
        q: "My dog picks up ticks from our Bengaluru garden. What can grooming realistically do?",
        a: "Grooming clears the current load, removes what is attached and shows you where they are attaching, which is genuinely useful information. It cannot treat your garden. If ticks are living in the soil and hedge base, the coat treatment has to be paired with clearing that area and a preventive product prescribed by your vet.",
      },
      {
        q: "Is the tick and flea bath safe for puppies and cats in Bengaluru?",
        a: "We only use products labelled for that species and age. For very young puppies and kittens we stick to a mild bath and manual removal with a tick tool instead of a medicated wash. Mention your pet's age and species when booking so the groomer packs the right products.",
      },
    ],
  },

  /* ------------------------------------------------------------- hyderabad */
  {
    citySlug: "hyderabad",
    serviceSlug: "dog-grooming-at-home",
    title: "Dog Grooming at Home in Hyderabad | Rs. 2,000",
    description:
      "Doorstep dog grooming in Hyderabad at Rs. 2,000. Bath, blow dry, trim, nails and ears, with products chosen for the city's hard water and dry air. Open daily.",
    intro:
      "Hyderabad has a water problem that shows up directly in a dog's coat. Much of the city runs on bore water that is heavy with dissolved minerals, shampoo does not lather properly in it, and what does not lather does not rinse either, so residue is left sitting at the root and the coat dries dull and slightly gritty. Combine that with a dry climate and rocky ground around Gachibowli and Kondapur that cracks paw pads, and you get the flaky, itchy skin we are called about more than anything else here. Full grooming at home is Rs. 2,000.",
    localNote:
      "The most common mistake we see across Hyderabad is over-bathing. A pet parent notices dandruff, bathes the dog again to fix it, strips more of the natural oil and makes the flaking worse, and the hard water quietly compounds the whole cycle by leaving mineral residue behind each time. In practice our groomers in Banjara Hills and Jubilee Hills spend as much time talking owners down to a three or four week schedule as they do grooming. On the IT corridor side, in Madhapur, Kondapur, Gachibowli and out to Miyapur, the bigger issue is ground conditions: rocky, dusty walking surfaces wear pads and lodge grit between the toes, so the paw work in a Hyderabad session matters more than it does in a softer-surfaced city.",
    faqs: [
      {
        q: "Does Hyderabad's hard water affect how my dog is groomed?",
        a: "It does, and we plan around it. Hard bore water resists lathering and leaves mineral residue in the coat, which is part of why so many Hyderabad dogs look dull after a home bath. We use a clarifying wash and rinse considerably longer than you would need to elsewhere, then condition to put the softness back.",
      },
      {
        q: "How often should I bathe my dog in Hyderabad?",
        a: "Every three to four weeks is plenty for most dogs here, and fewer baths rather than more is usually the answer to flaky skin. Hyderabad's dry air already pulls moisture out of the coat, so washing weekly strips the oils that are keeping the skin settled.",
      },
      {
        q: "Do you cover both the old city and the Hyderabad IT corridor?",
        a: "Yes. Gachibowli, Madhapur, Kondapur and Miyapur on one side, and Banjara Hills, Jubilee Hills, Begumpet and Kukatpally on the other, all at the same Rs. 2,000 full grooming rate with no visit charge. Call +91 99905 99189 and we will tell you what is open on your side of the city.",
      },
    ],
  },
  {
    citySlug: "hyderabad",
    serviceSlug: "cat-grooming-at-home",
    title: "Cat Grooming at Home in Hyderabad | Rs. 2,000",
    description:
      "Doorstep cat grooming in Hyderabad for Rs. 2,000. No carrier and no clinic, with gentle handling and products suited to dry air and hard water. Book today.",
    intro:
      "Hyderabad is dry for most of the year, and that suits cats far better than a humid coastal city does, with one catch. The bore water most of the city runs on is mineral-heavy, and a Persian bathed in it at home often ends up with a coat that feels coarse and looks dusty within days, which owners then try to fix with another bath. Cats need very few baths to begin with. Most of what a Hyderabad cat actually needs is combing, mat control and nails, done without a carrier ride, and that is what the Rs. 2,000 session is built around.",
    localNote:
      "Cat grooming is still a new idea for a lot of Hyderabad households, and the most frequent thing we hear on a first call is a variation of whether cats need grooming at all. Our honest answer is that a short-coated Indian cat in a Kukatpally or Miyapur flat mostly needs nails and an occasional comb, while a Persian or Himalayan in Banjara Hills or Jubilee Hills, where those breeds are concentrated, genuinely does need regular de-matting whatever her owner has been told. The dry climate helps in one respect: coats mat more slowly here than in Chennai or Mumbai. It hurts in another, since dry indoor air plus hard water produces the dandruff along the spine that we see constantly in the Gachibowli and Kondapur apartments.",
    faqs: [
      {
        q: "Do cats in Hyderabad really need professional grooming?",
        a: "It depends on the coat. A short-haired Indian cat mostly needs nail trimming and an occasional comb, and we will tell you so rather than sell you a bath. A Persian, Himalayan or any long-haired cat does need regular de-matting, because the areas that felt first, behind the ears, the armpits and the belly, are exactly the areas a cat cannot reach.",
      },
      {
        q: "My Hyderabad cat gets dandruff along her back. What helps?",
        a: "That is usually dryness rather than dirt, and it is very common in air-conditioned Hyderabad flats. More bathing makes it worse. Combing to spread the natural oils, a conditioning wash only when it is genuinely needed, and a thorough rinse to clear hard-water residue tend to settle it. If the skin is red or scabbed, see a vet.",
      },
      {
        q: "How long does a cat grooming session at home in Hyderabad take?",
        a: "Between forty minutes and an hour and a half, and a first visit often runs longer because the first ten minutes are spent doing nothing at all. We work in short blocks with breaks, and if your cat has genuinely had enough we stop there rather than push to finish the list.",
      },
    ],
  },
  {
    citySlug: "hyderabad",
    serviceSlug: "tick-and-flea-treatment",
    title: "Tick & Flea Treatment in Hyderabad | Rs. 2,500",
    description:
      "At-home anti-tick and flea grooming in Hyderabad, Rs. 2,500. Manual removal, medicated bath and a check of the spots ticks hide in. Call +91 99905 99189.",
    intro:
      "The brown dog tick, which is the one Indian pet parents almost always mean, does particularly well in warm, dry conditions, so Hyderabad's climate suits it rather than suppressing it. Activity builds through the summer and peaks across the monsoon months from July to October. What is distinctive here is where they live between meals: in the cracks of stone compound walls, under loose flooring and in the gaps of the rocky ground that so many Hyderabad homes are built on. This is a grooming treatment at Rs. 2,500, and it does not replace a vet.",
    localNote:
      "Hyderabad tick calls have a recognisable pattern. A dog in a Jubilee Hills or Banjara Hills bungalow with a stone boundary wall keeps getting reinfested no matter how many baths are done, because the wall itself is the nursery, and the ticks simply climb back down at dusk. In the newer apartment blocks of Kondapur, Madhapur and Miyapur the reservoir is more often the basement parking and the shared dog-walking strip. Hard water makes the medicated bath a little harder to do properly here as well, since a shampoo that does not lather does not get the contact time it needs, so our groomers carry their own rinse plan for it. We will show you where we found the heaviest load and be honest if the answer is really a vet visit.",
    faqs: [
      {
        q: "When is tick trouble worst for pets in Hyderabad?",
        a: "It climbs through the hot months and peaks across the monsoon from roughly July to October. Unlike a cold-winter city, Hyderabad does not get a clean break, because the dry warmth that dominates the rest of the year actually suits the brown dog tick perfectly well.",
      },
      {
        q: "Ticks keep coming back even after a bath. What are we missing in Hyderabad?",
        a: "Almost always the environment. In Hyderabad that tends to be the cracks in a stone compound wall, the gap under the gate, the basement, or rocky ground beside the house. Ticks feed on the dog and then live off him, so unless those spots are cleaned and treated the dog gets recolonised within days.",
      },
      {
        q: "Can you use a tick shampoo on my cat in Hyderabad?",
        a: "Only a product specifically labelled for cats, never a dog tick shampoo, which can be genuinely dangerous for them. For most cats we rely on manual removal with a tick tool and a flea comb instead of a medicated bath, and anything heavy goes to a vet.",
      },
    ],
  },

  /* --------------------------------------------------------------- chennai */
  {
    citySlug: "chennai",
    serviceSlug: "dog-grooming-at-home",
    title: "Dog Grooming at Home in Chennai | Rs. 2,000",
    description:
      "Dog grooming at your Chennai doorstep for Rs. 2,000. Bath, full dry, trim, nails and the thorough ear cleaning this humid city makes essential. Open 7 days.",
    intro:
      "Chennai humidity does not let up, and it is the reason ear infections, hot spots and a persistent yeasty smell make up most of our callouts in this city. A coat here is rarely dry at the skin unless someone makes it dry, and the ear canal of a floppy-eared dog is damp essentially all year. Add the sand and salt from a Besant Nagar or Marina beach walk and the coat has work to do. Our groomer brings the dryer to your home, cleans the ears as standard, and finishes for Rs. 2,000 rather than sending a panting dog across town in a car.",
    localNote:
      "Two Chennai habits shape what we do. The first is beach walking, which is common from Besant Nagar through Adyar, and the sand and salt left in the coat and between the toes cause more irritation than the sea itself. We will tell you to rinse with plain water after every trip and book a proper bath every two to three weeks rather than washing daily. The second is the sheer number of floppy-eared breeds here, Cockers, Bassets and Retrievers, whose ear canals never dry out. Along the OMR stretch and Sholinganallur, where a lot of the newer apartment stock is, we also see the same dog groomed too rarely in summer because the owner worries about the heat, when the safest answer is simply grooming at home with the fan on.",
    faqs: [
      {
        q: "Why do Chennai dogs get so many ear infections, and does grooming help?",
        a: "Chennai's humidity keeps the ear canal damp all year, and a damp canal is where yeast and bacteria thrive. Routine cleaning at every groom plus trimming the hair at the canal opening prevents a good deal of it. An ear that is already red, smelly or painful needs a vet before a groomer touches it.",
      },
      {
        q: "My dog swims at the Chennai beach. How should that change his grooming?",
        a: "Rinse him with plain fresh water after every beach trip, paying attention to the paws and belly, and book a full bath every two to three weeks. Salt dries out the pads and coat, and sand trapped between the toes is a frequent cause of the licking that Chennai owners mistake for an allergy.",
      },
      {
        q: "Is it safe to groom during the Chennai summer or the northeast monsoon?",
        a: "Yes, and at home is the safest version of it, because there is no car journey in the heat and no wet walk in a waterlogged street. We run early morning and evening slots through April and May, and if a session genuinely cannot happen because of flooding we reschedule at no charge.",
      },
    ],
  },
  {
    citySlug: "chennai",
    serviceSlug: "cat-grooming-at-home",
    title: "Cat Grooming at Home in Chennai",
    description:
      "Calm cat grooming at your Chennai home for Rs. 2,000. No carrier, no travel in the heat, and gentle de-matting for humidity-felted Persian coats. Book now.",
    intro:
      "Moving a cat anywhere in Chennai is a bad trade. A carrier in an afternoon car is genuinely hot, and a cat who is already frightened will pant and stress before a comb has touched her, which is why almost every cat we groom here is groomed at home. Chennai humidity also does something specific to long coats: damp fur felts far faster than dry fur, so a Persian who looked fine a fortnight ago can have tight mats in the armpits and behind the ears by the next visit. Full cat grooming is Rs. 2,000, done at your cat's pace.",
    localNote:
      "Most Chennai cat parents we meet have never used a groomer before, and the first conversation is usually about what will not happen. No scruffing, no restraint bag, no closed room she cannot leave, and no finishing the checklist for the sake of it. Practically, our busiest cat areas are the apartment belts of Velachery, Anna Nagar and the OMR corridor through Sholinganallur, along with older homes in Adyar and T Nagar where semi-outdoor cats pick up grime and the occasional tick. Humidity is the technical problem in all of them. A Chennai long-hair needs combing right down to the skin every few weeks, and where mats have already felted flat we clip them out with a guarded blade instead of pulling on skin that is often already irritated underneath.",
    faqs: [
      {
        q: "Why do Persian cats in Chennai mat so quickly?",
        a: "Humidity. Damp fur tangles and felts far faster than dry fur, and a Chennai coat is rarely completely dry at the skin, so mats form close to the body in the armpits, the belly and behind the ears while the surface still looks groomed. A comb-out every four weeks prevents most of it.",
      },
      {
        q: "Is home cat grooming in Chennai better in the morning or evening?",
        a: "Mornings are usually calmest, particularly between April and June when afternoons are genuinely hot and a stressed cat overheats quickly. We run from 8 AM to 8 PM all seven days across Chennai, so pick the quietest hour in your household and we will work around it.",
      },
      {
        q: "What happens if my cat refuses to cooperate midway through the session?",
        a: "We stop. A Chennai cat session is built in short blocks with breaks, and if your cat has genuinely had enough, the groomer finishes what is safe, tells you what is still pending and suggests a follow-up. Forcing a cat to complete a groom buys one clean coat and a cat who fights every session after that.",
      },
    ],
  },
  {
    citySlug: "chennai",
    serviceSlug: "tick-and-flea-treatment",
    title: "Tick & Flea Treatment in Chennai",
    description:
      "Doorstep tick and flea grooming treatment in Chennai, Rs. 2,500. Manual removal, medicated bath and a full coat check. Trained groomers, 8 AM to 8 PM daily.",
    intro:
      "Chennai is one of the hardest tick cities in India for a simple reason: there is no cold season to break the cycle. Warm, humid conditions let the brown dog tick breed continuously, so instead of a season you get a permanent baseline with a spike after the northeast monsoon from October through December. Fleas behave the same way, and a household that clears them in March will often see them back by May. This is a grooming treatment at Rs. 2,500, not veterinary care, and a heavy infestation belongs with a vet.",
    localNote:
      "The Chennai homes we struggle with most are ground-floor houses with a compound or a garden, common in Adyar, Besant Nagar and the older parts of Anna Nagar and T Nagar, because ticks survive in the wall cracks and shaded soil right outside the door all year. Apartment dogs along OMR, Velachery and Porur have a different version of the same problem in the basement and the landscaped common strip. Humidity also matters for the treatment itself: after an anti-tick bath, the coat has to be force-dried completely, or the damp undercoat left behind creates the yeasty skin trouble this city is already prone to. Our groomers do the tick work and the full dry in the same visit, then tell you which corners of the house are keeping the cycle going.",
    faqs: [
      {
        q: "Does Chennai have a tick season, or are ticks a year-round problem?",
        a: "They are essentially year round here. Chennai never gets cold enough to interrupt breeding, so the load is always present and simply spikes after the northeast monsoon between October and December. Treat tick checks as a monthly routine rather than something you do once a year.",
      },
      {
        q: "How many tick and flea sessions will my Chennai home need?",
        a: "Most households need at least two, spaced two to three weeks apart, plus a hard clean of the sleeping area. The bath clears what is on your pet today; eggs in the bedding, floor cracks and compound wall keep hatching for weeks, and in Chennai's warmth they hatch faster than in a cooler city.",
      },
      {
        q: "Can you treat ticks and also do a normal groom in the same Chennai visit?",
        a: "Yes, and it usually makes sense. The Rs. 2,500 treatment already includes a medicated bath and a complete blow dry, which matters a great deal in Chennai because a damp undercoat after a tick bath causes its own skin problems. Tell us at booking if you also want a trim.",
      },
    ],
  },

  /* ------------------------------------------------------------------ pune */
  {
    citySlug: "pune",
    serviceSlug: "dog-grooming-at-home",
    title: "Dog Grooming at Home in Pune | Petgroomers",
    description:
      "Doorstep dog grooming across Pune at Rs. 2,000. Bath, deep rinse for Deccan dust, blow dry, trim, nails and ears. Call +91 99905 99189, open every day.",
    intro:
      "Pune is unusually kind to heavy coats, which is why so many Huskies, Saint Bernards and Golden Retrievers live here comfortably when they would struggle in Mumbai. The problem is not heat, it is grit. From late February through April the dry Deccan dust settles deep into a thick coat and sits at the root, and in July the red mud off the Baner and Bavdhan slopes replaces it. Both need a proper double lather and a real rinse, not a quick wash, and our groomer does that at your home for Rs. 2,000.",
    localNote:
      "The coat work we do in Pune is mostly undercoat management rather than styling. The dry winter air here lets a double coat compact quietly, and owners in Koregaon Park, Kalyani Nagar and Aundh usually only notice once it has already felted near the hips and behind the ears. Out along the western corridor through Baner, Wakad and towards Hinjewadi, most of our bookings come from apartment societies where the dog is large and the flat is not, so the groomer works in the bathroom or utility area and bags every bit of hair before leaving. Kothrud, Viman Nagar and Hadapsar sit somewhere in between, with a mix of independent houses where we can set up on a terrace. Across all of them, March and April are our dustiest months and the ones where a single soaping is not enough.",
    faqs: [
      {
        q: "How much does a home grooming session cost in Pune?",
        a: "Full grooming is Rs. 2,000 anywhere in Pune with no travel charge, and that covers bath, complete blow dry, body trim, nails and ear cleaning. A spa bath alone is Rs. 1,500, and heavily matted or anxious dogs are booked as Grooming with Extra Care at Rs. 2,500 because they honestly take longer.",
      },
      {
        q: "Does Pune's dust really change how a dog should be washed?",
        a: "It does, particularly in March and April. Fine Deccan dust lodges at the root of a thick coat, and one soaping mostly moves it around rather than lifting it out. We use a clarifying wash first and a conditioning one second, then rinse until the water is genuinely clear, which is the step most home baths skip.",
      },
      {
        q: "My Saint Bernard is badly matted. Can that be handled inside a Pune flat?",
        a: "Yes, and we do a lot of heavy-coat work in Pune. Severe matting is booked as Grooming with Extra Care at Rs. 2,500 because safe de-matting takes time. Where mats are tight against the skin we clip them out rather than pull, since pulling felted coat hurts and can tear the skin underneath.",
      },
    ],
  },
  {
    citySlug: "pune",
    serviceSlug: "cat-grooming-at-home",
    title: "Cat Grooming at Home in Pune",
    description:
      "Gentle doorstep cat grooming in Pune for Rs. 2,000. No carrier and no clinic visit, with careful de-matting for long coats and dusty ruffs. Open 7 days.",
    intro:
      "Pune's cool, dry climate is genuinely good for long-haired cats, and the city keeps plenty of Persians and Himalayans who would be miserable in a coastal summer. What catches owners out is the dust. Deccan grit settles into a thick ruff during the dry months and the cat grooms it down herself, which means she is swallowing it, and the coat still looks dull afterwards. Combing does more here than bathing ever will. A full at-home cat session is Rs. 2,000, with no carrier, no car and no stranger's clinic involved.",
    localNote:
      "Cat parents in Pune tend to be first-timers with a groomer, and a fair number arrive at the idea only after a mat has gone hard enough to worry them. We would rather see the cat earlier. In the older, greener parts of the city, Kothrud, Aundh and around Koregaon Park, semi-outdoor cats are common and pick up burrs, dust and the occasional tick from garden hedges, so those sessions include a proper coat check. In the newer Wakad, Baner and Hadapsar societies the cats are usually indoor-only and the issue is simply that nobody has combed the belly in months. Either way, a Pune cat visit is short, quiet and stoppable at any point, and we will happily leave half the job for a follow-up rather than hold a cat down to finish it.",
    faqs: [
      {
        q: "I have never taken my cat to a groomer in Pune. What actually happens?",
        a: "The groomer arrives at your flat, sits down and lets your cat approach the tools before anything begins. Then it is combing, a mat check, nails, a wipe of the ear flaps and a bath only if it is genuinely needed. There is no scruffing and no restraint bag, and the session ends when your cat has had enough.",
      },
      {
        q: "Does Pune dust affect my long-haired cat?",
        a: "Noticeably, in the dry stretch from February to April. Fine grit works into a thick ruff and down to the skin, and because your cat cleans herself with her tongue she ends up swallowing most of it. Regular combing pulls it out first, which reduces both the dull coat and the hairballs that follow.",
      },
      {
        q: "Can two cats be groomed in the same Pune appointment?",
        a: "They can, though we usually do them one at a time within the visit rather than together, because a stressed cat winds up the other one. Each cat is charged for its own session, and you save the second appointment. Let us know at booking so the groomer plans enough time.",
      },
    ],
  },
  {
    citySlug: "pune",
    serviceSlug: "tick-and-flea-treatment",
    title: "Tick & Flea Treatment for Pets in Pune",
    description:
      "Anti-tick and flea grooming bath at your Pune home for Rs. 2,500. Manual removal, medicated wash and advice on the real source. Book on +91 99905 99189.",
    intro:
      "Pune tick trouble follows the rain. Activity is modest through the dry winter, builds as the weather warms, and peaks from the monsoon into the post-monsoon stretch of August to November when the hill slopes and grass verges are thick and damp. Dogs who walk on Vetal Tekdi, along the Baner hill paths or through the green pockets of Koregaon Park pick them up off vegetation rather than off other dogs. This is a grooming treatment at Rs. 2,500 that clears the current load; it is not veterinary care.",
    localNote:
      "The Pune households that call us repeatedly usually have one of two situations. Either the dog walks regularly on scrub and hill trails, which is common on the western side through Baner, Bavdhan and Aundh, and is effectively walking through a tick nursery every evening in September. Or the home is an older independent house in Kothrud or near Koregaon Park with a garden, a compound wall and shaded soil where ticks survive between hosts. Apartment dogs in Wakad, Hadapsar and Viman Nagar tend to have lighter loads picked up from common landscaping. After the bath our groomer walks you through the bedding, the crate and the balcony corner, because that is where the eggs are, and tells you honestly if what we are seeing needs a vet rather than another bath.",
    faqs: [
      {
        q: "When is tick season at its worst in Pune?",
        a: "From the monsoon into the post-monsoon, roughly August to November, when the grass and hill vegetation stay damp and dense. Pune's dry winter genuinely does suppress numbers for a while, which is more than can be said for coastal cities, but indoor populations carry on quietly.",
      },
      {
        q: "My dog walks on the Pune hills. Should tick checks be more frequent?",
        a: "Yes. Dogs walking on Vetal Tekdi, the Baner slopes or any scrub path are brushing against vegetation where ticks wait for a host, so a check after every walk through the ears, neck folds, armpits and tail base is worth the two minutes. That is also where we concentrate during a treatment.",
      },
      {
        q: "Do I need a vet as well as the Pune tick and flea grooming session?",
        a: "If the load is heavy, the skin is broken or scabbed, or your dog seems weak or pale, then yes, see a vet first. We are groomers and we do not prescribe spot-on drops, tablets or injections. For prevention between grooms, a product from your vet is what actually keeps ticks off.",
      },
    ],
  },

  /* --------------------------------------------------------------- gurgaon */
  {
    citySlug: "gurgaon",
    serviceSlug: "dog-grooming-at-home",
    title: "Dog Grooming at Home in Gurgaon | Rs. 2,000",
    description:
      "Doorstep dog grooming in Gurgaon at Rs. 2,000. Groomers come up to your apartment with the full kit, no van and no society hassle. Call +91 99905 99189.",
    intro:
      "Gurgaon is a vertical city, and that changes the grooming problem in two ways. Dogs here spend the day in air conditioning and then walk on Golf Course Road concrete that is still throwing off heat at nine at night, which dries out paw pads and makes double coats shed unpredictably instead of seasonally. And getting a dog out for a salon appointment means a lift, a lobby, a gate register and a car, which is most of an evening. Our groomer comes up to your flat on a two-wheeler with everything in a kit bag, and full grooming is Rs. 2,000.",
    localNote:
      "The logistics are the real story for dog grooming in Gurgaon. Condominium security in DLF Phase 1 and Phase 5, along Sohna Road and in the Sushant Lok blocks, will generally wave through a named visitor with a bag but will make a grooming van fill in forms and wait, which is exactly why we do not use one. Service lifts, where a society insists on them, are fine. Inside the flat the work happens in a bathroom, balcony or utility area, and the blow dry is kept on a lower, quieter setting because these walls are thin and your neighbours did not book anything. Breed-wise, Gurgaon skews large: Labradors, Golden Retrievers, German Shepherds and Huskies make up the bulk of what our groomers handle in South City, Palam Vihar and Sector 56.",
    faqs: [
      {
        q: "Do I need society permission for a groomer to enter my Gurgaon condominium?",
        a: "Usually just an entry at the gate in your name. Tell your RWA or guard that a Petgroomers groomer is expected, or share +91 99905 99189 so they can confirm. We arrive on two-wheelers with a kit bag rather than a van, which keeps the gate formalities to a signature.",
      },
      {
        q: "Can a large dog be groomed inside a Gurgaon apartment?",
        a: "Yes, and large breeds are most of our Gurgaon work. A Labrador or a Husky is groomed on a non-slip mat in the bathroom or on the balcony, with the hair bagged and carried out. We need a tap, a socket and roughly six feet of floor, which almost every flat in DLF Phase 5 or Sohna Road has.",
      },
      {
        q: "How often does a double-coated dog need grooming in Gurgaon?",
        a: "Through summer, about every four weeks. The constant switch between an air-conditioned flat and a 43-degree afternoon confuses the coat cycle, so Huskies and Goldens here blow coat in unpredictable bursts rather than cleanly. The Rs. 2,000 full groom includes the de-shedding work that keeps it manageable.",
      },
    ],
  },
  {
    citySlug: "gurgaon",
    serviceSlug: "cat-grooming-at-home",
    title: "Cat Grooming at Home in Gurgaon | Rs. 2,000",
    description:
      "Doorstep cat grooming in Gurgaon at Rs. 2,000. No carrier, no lift lobby, no cab. Quiet handling, de-matting, nails and ears at your cat's own pace daily.",
    intro:
      "For a cat living on the fourteenth floor of a Gurgaon condominium, a grooming appointment elsewhere means a carrier, a service lift, a walk across a hot podium and a cab, all before anyone touches her coat. That is more distressing than the grooming. Gurgaon also runs heavily air-conditioned for eight months of the year, and long-coated cats in that dry indoor air develop flaky skin and mats that form close to the body rather than on the surface. Everything in the Rs. 2,000 session happens inside your own flat, at whatever pace your cat sets.",
    localNote:
      "Cat ownership in Gurgaon is concentrated in apartments, and the cats are almost always indoor-only, which has two consequences. They never wear their nails down, so nail work is the single most requested part of a session in Sushant Lok, South City and the Golf Course Road towers. And they have usually met very few strangers, so a groomer who walks in and reaches straight for the cat will get nowhere. Our Gurgaon cat visits are booked with extra time built in, and the groomer spends the first stretch sitting on the floor doing nothing while your cat decides. We also see a steady number of Persians in DLF Phase 1 and Phase 5 households whose owners were told cats groom themselves, which is true of the parts a cat can reach and not true of the armpits, belly or ruff.",
    faqs: [
      {
        q: "Will a groomer come up to my apartment in a Gurgaon high-rise for a cat?",
        a: "Yes, right to your door. Cat grooming in Gurgaon is doorstep only for the good reason that the carrier, the lift and the cab are the worst part of the day for a cat. The groomer signs in at the gate, takes the lift up with a kit bag and works inside your flat.",
      },
      {
        q: "My indoor Gurgaon cat scratches the sofa constantly. Can you trim her claws?",
        a: "Nail trimming is part of the Rs. 2,000 session and includes the dew claws people usually miss. Indoor cats in Gurgaon flats wear their nails down on nothing, so every three to four weeks is normal here. Trimming blunts the tips without declawing anything, and a scratching post still matters.",
      },
      {
        q: "Is air conditioning bad for my cat's coat in Gurgaon?",
        a: "Not bad, but it is drying, and eight months of it shows as flaking along the spine and a coat that mats closer to the skin. Combing regularly matters more than bathing, because it redistributes the natural oils. If the skin looks red or your cat is over-grooming a patch, that is a vet question rather than a grooming one.",
      },
    ],
  },
  {
    citySlug: "gurgaon",
    serviceSlug: "tick-and-flea-treatment",
    title: "Tick & Flea Treatment in Gurgaon",
    description:
      "At-home tick and flea grooming treatment in Gurgaon, Rs. 2,500. Manual removal, medicated bath and a check of the spots ticks hide. Open 8 AM to 8 PM daily.",
    intro:
      "Gurgaon tick loads climb from the start of the monsoon and stay high through November, and the condominium layout of the city gives the problem a particular shape. Dozens of dogs use the same landscaped lawn, the same basement ramp and the same lift lobby every evening, so a tick that drops off one dog has a very short journey to the next. This is a grooming treatment at Rs. 2,500 that removes what is on the coat now and shows you where the heaviest activity is. It is not veterinary care, and a serious infestation needs a vet.",
    localNote:
      "In a Gurgaon condominium, tick control is a building problem pretending to be a household one. The landscaped strips and shaded planters in DLF Phase 5, Sushant Lok and the Sohna Road towers stay damp through the monsoon, the basement parking is cool and dark all year, and the pet-walking area is shared by every dog in the complex. Treating one dog while the block goes untreated buys you about a fortnight. Independent houses in Palam Vihar and South City have a different version, with ticks surviving in boundary-wall cracks and garden soil. After the bath and manual removal, our groomer will tell you exactly where on your dog they were attaching and which corner of your flat, usually the crate or the bed, is holding the eggs.",
    faqs: [
      {
        q: "Why does my dog pick up ticks in Gurgaon without leaving the society?",
        a: "Because the society is the source. Shared lawns, planters, basement parking and lift lobbies in a Gurgaon condominium are used by every dog in the block, and ticks drop off, breed in the cracks and climb back on. Your dog does not need to leave the gate to get reinfested.",
      },
      {
        q: "What months are worst for ticks and fleas in Gurgaon?",
        a: "July through November, with the sharpest rise once the monsoon rain eases and the weather is still warm. Numbers fall in the cold of January and in the very dry heat of late May, though indoor populations in heated or air-conditioned flats carry on regardless of what is happening outside.",
      },
      {
        q: "Should I get my whole Gurgaon flat sprayed as well as treating the dog?",
        a: "Pest control for the flat is often the missing half, and we will say so when the evidence points that way. Our job is the coat: manual removal, a medicated bath and a clear picture of the load. Washing bedding hot, vacuuming the crate corner and treating the sleeping area is what stops the cycle.",
      },
    ],
  },

  /* ----------------------------------------------------------------- noida */
  {
    citySlug: "noida",
    serviceSlug: "dog-grooming-at-home",
    title: "Dog Grooming at Home in Noida | Petgroomers",
    description:
      "Doorstep dog grooming across Noida and Greater Noida at Rs. 2,000. Bath, blow dry, trim, nails, ears and a tick check at home. Call +91 99905 99189.",
    intro:
      "Noida is full of first-time dog parents, which is why so many of our sessions here include as much explaining as grooming. Two local conditions matter. The green belts along Sector 50 and Sector 93 are lovely for evening walks and are also where ticks change hosts, and the construction dust that blows across Noida Extension and the 137 stretch settles straight into a long coat and stays at the root. Grooming at home means you watch the coat check happen and hear what is actually found, and a full session is Rs. 2,000.",
    localNote:
      "Noida divides fairly neatly for us. The older sectors, 15A, 18 and 50, have more independent houses and mature trees, and the dogs there are often long-term family pets on a settled four to six week cycle. The newer high-rise belt through Sector 137, Sector 93 and Noida Extension is where the first-time owners are concentrated, along with a lot of construction dust and a lot of large breeds living in flats. Those sessions get more time on coat explanation: how often to bathe, why shaving a Husky for summer is the wrong instinct, and what the brushing gap behind the ears is doing to the coat. Greater Noida societies are on the same route and the same rates, and our groomers ride out rather than asking anyone to drive in.",
    faqs: [
      {
        q: "Do you cover Greater Noida and Noida Extension for home dog grooming?",
        a: "We do, along with Sector 137, Sector 93, Sector 62, Sector 50, Sector 18 and Sector 15A. The rate is the same Rs. 2,000 full groom with no travel charge. Ring +91 99905 99189 with your sector and society name and we will tell you the next slot on that route.",
      },
      {
        q: "My dog panics in cars. Is home grooming in Noida really easier on him?",
        a: "Considerably. A large share of our Noida bookings are dogs who used to reach a salon already shaking from the drive, and the grooming was never the part they minded. At home there is no journey at either end, no cage and no waiting alongside unfamiliar animals.",
      },
      {
        q: "What are your grooming timings in Noida?",
        a: "Eight in the morning to eight at night, seven days a week including Sundays. Early slots tend to be calmest for nervous dogs, and weekend mornings fill first across Noida, so two or three days of notice helps if you want a Saturday.",
      },
    ],
  },
  {
    citySlug: "noida",
    serviceSlug: "cat-grooming-at-home",
    title: "Cat Grooming at Home in Noida",
    description:
      "Doorstep cat grooming in Noida at Rs. 2,000. Carrier-free, unhurried handling for first-time cat parents, with de-matting, nails and ear care. Open 7 days.",
    intro:
      "Most Noida cat parents who call us are booking a groomer for the first time, and the honest first question is usually whether a cat needs one at all. Our answer depends on the coat: a short-haired Indian cat mainly needs nails and an occasional comb, while a Persian or a semi-long-hair genuinely does need de-matting, because the belly, armpits and ruff are exactly where a cat cannot reach. What none of them need is a carrier ride across the sectors. The groomer comes to your flat for Rs. 2,000, works in short blocks, and stops when your cat has had enough.",
    localNote:
      "Cat numbers have risen sharply in the Noida high-rises, where an indoor cat fits a two-bedroom flat and a working couple far better than a dog does, and Sector 137, Sector 93 and the Noida Extension societies are where most of our cat bookings now come from. Almost all of those cats are indoor-only, which means very little nail wear and a strong reaction to strangers. In the older sectors like 15A, 18 and 50, we see more semi-outdoor cats who slip into gardens and come back with grime, burrs and sometimes a tick, so those visits include a proper coat check. We do not bath every cat, and we will say so. A quiet comb-out and nail trim does more for most Noida cats than a bath they will resent for a week.",
    faqs: [
      {
        q: "Do cats in Noida actually need grooming, or do they manage themselves?",
        a: "They manage the parts they can reach. A short-coated Indian cat in a Noida flat mostly needs nail trimming and an occasional comb, and we will tell you that rather than sell you a bath. Long-haired cats do need help, because mats form in the armpits, belly and ruff where a tongue cannot get.",
      },
      {
        q: "This is my first time booking a cat groomer in Noida. How should I prepare?",
        a: "Keep one room quiet, put the food and litter where they usually are, and let your cat be loose rather than shut in a carrier. Tell us anything we should know about her temperament when you call. Beyond that, nothing. The groomer brings the combs, towels and nail tools and works around wherever she settles.",
      },
      {
        q: "Can you groom a cat in a Noida Extension high-rise flat?",
        a: "Yes. Cat grooming needs less space than dog grooming does, and a bedroom floor or a quiet corner is enough. The groomer signs in at the society gate, comes up with a small kit and works on a towel, so there is no mess and no equipment to move.",
      },
    ],
  },
  {
    citySlug: "noida",
    serviceSlug: "tick-and-flea-treatment",
    title: "Tick & Flea Treatment in Noida",
    description:
      "Anti-tick and flea grooming treatment at your Noida home for Rs. 2,500. Manual removal, medicated bath and a clear report of where the load was found.",
    intro:
      "Noida picks up ticks off its own greenery. The park belts and tree-lined stretches along Sector 50 and Sector 93 are exactly the habitat ticks wait in, and the load climbs from July through November once the monsoon warmth sets in. The advantage of doing this at home is visibility: you see what comes off your dog, where it was attached and how heavy the load really was, instead of getting a verbal summary at a salon counter. The session is Rs. 2,500. It is grooming, not veterinary treatment, and a serious infestation needs a vet.",
    localNote:
      "The pattern in Noida is that ticks attach in three places far more often than anywhere else: the ear flaps, the armpits and the base of the tail, which is where our groomers concentrate first. Dogs walked through the Sector 50 and Sector 93 green belts in the monsoon come back with passengers regularly, and in the Noida Extension and Sector 137 societies the shared walking strips and basements keep the cycle running between dogs in the same block. Older sectors with independent houses have the garden-soil version of the problem. Because so many Noida pet parents are newer to dog ownership, our groomers spend time on the part nobody explains: the eggs are not on the dog, they are in the bedding, the crate and the corner where he sleeps, which is what has to be cleaned.",
    faqs: [
      {
        q: "Where do ticks attach most often on dogs in Noida?",
        a: "The ear flaps, the armpits and the base of the tail, far more often than the back where owners tend to look. Dogs walked along the Sector 50 and Sector 93 green belts pick them up off vegetation, and those three spots are warm, sheltered and hard for a dog to reach, so that is where we start.",
      },
      {
        q: "How soon after a Noida tick and flea session will I see a difference?",
        a: "Immediately in terms of what is on the coat, since the ticks come off during the visit. Whether it stays that way depends on the environment. If the bedding, crate and sleeping corner are not cleaned out, eggs keep hatching for weeks and you will see new ones within a fortnight.",
      },
      {
        q: "Is the Noida tick and flea treatment a substitute for my vet's prevention?",
        a: "No. We are groomers and do not prescribe or apply spot-on drops, tablets or injections. The treatment clears the current load and gives you an accurate picture of the problem. Ongoing prevention, and anything involving broken skin, anaemia or a very heavy load, belongs with your vet.",
      },
    ],
  },
];

export const cityServiceByKey: Record<string, CityService> = Object.fromEntries(
  cityServices.map((entry) => [`${entry.citySlug}/${entry.serviceSlug}`, entry]),
);
