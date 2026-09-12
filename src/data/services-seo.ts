// SEO landing page content for individual grooming services.
// Pages render at /services/<slug>.

import type { SeoService } from "./types";

export const seoServices: SeoService[] = [
  {
    slug: "dog-grooming-at-home",
    name: "Dog Grooming at Home",
    title: "Dog Grooming at Home in India | Petgroomers",
    description:
      "Book dog grooming at home anywhere in India. Bath, blow dry, trim, nails and ears done at your doorstep from Rs. 2,000. Call +91 99905 99189, open 7 days.",
    icon: "Dog",
    price: "Rs. 2,000",
    intro:
      "Most dogs behave far better on their own floor than in a noisy salon full of strange smells and barking. Our groomer arrives at your house with clippers, dryers, shampoos and a non-slip mat, and works in your bathroom, balcony or parking area. A full grooming session costs Rs. 2,000 and usually takes 60 to 120 minutes depending on coat and size.",
    includes: [
      "Pre-bath brush-out to loosen dead coat and open up small knots before water goes on",
      "Warm water bath with a pH-balanced dog shampoo chosen for the coat type, plus conditioner for double coats",
      "Force-dry and blow dry down to the skin, so no damp undercoat is left to smell later",
      "Sanitary trim, paw pad trim and hygiene clean-up around the eyes and rear",
      "Nail clipping with a filing pass so edges do not scratch children or sofa fabric",
      "Ear flap cleaning with a gentle solution and cotton, plus a visual check of skin and paws",
      "Full clean-up of hair and water before the groomer leaves your home",
    ],
    benefits: [
      {
        title: "No car ride, no cages",
        desc: "Your dog is never crated or left waiting between appointments, which removes most of the stress of a salon visit.",
      },
      {
        title: "You watch the whole session",
        desc: "Nothing happens out of sight, so you can see exactly how your dog is handled and ask for a shorter or longer trim as it goes.",
      },
      {
        title: "Groomers with 10+ years on the job",
        desc: "Our certified and trained staff have handled everything from nervous Indies to heavy-coated Huskies and know when to slow down.",
      },
      {
        title: "Products that suit Indian coats",
        desc: "We carry pet-safe, pet-only shampoos and pick the right one for dust, humidity, or a dry, flaky coat.",
      },
    ],
    faqs: [
      {
        q: "What is the dog grooming price in India for a home visit?",
        a: "Full grooming is Rs. 2,000 and covers bath, dry, trim, nails and ears. A spa bath without haircut is Rs. 1,500, and Grooming with Extra Care for difficult coats or anxious dogs is Rs. 2,500.",
      },
      {
        q: "What do you need from me at home?",
        a: "A tap with running water, a power socket for the dryer, and roughly 6x6 feet of space in a bathroom, balcony or garage. We bring towels, mats, shampoos and every tool, so nothing of yours gets used.",
      },
      {
        q: "How often should my dog be groomed?",
        a: "Short-coated breeds like Labradors and Beagles do well with a session every 6 to 8 weeks. Shih Tzus, Lhasas, Poodles and Goldens usually need one every 4 to 6 weeks or the coat begins matting near the ears and armpits.",
      },
    ],
  },
  {
    slug: "cat-grooming-at-home",
    name: "Cat Grooming at Home",
    title: "Cat Grooming at Home",
    description:
      "Gentle cat grooming at home across India. Quiet, low-restraint handling for Persians, Indies and Ragdolls at Rs. 2,000. Call +91 99905 99189 to book a slot.",
    icon: "Cat",
    price: "Rs. 2,000",
    intro:
      "Cats do not travel well, and a carrier ride to a salon can leave them hiding under the bed for two days. Grooming a cat at home means she stays in her own territory, with her own hiding spots available, and the session can pause the moment she has had enough. Full cat grooming is Rs. 2,000.",
    includes: [
      "Slow introduction period where the groomer lets the cat approach the towels and tools first",
      "Metal comb and slicker work through the ruff, belly and behind the ears, where Persian mats form first",
      "Careful de-matting or a hygienic shave-down of felted areas, done without pulling on the skin",
      "Optional bath with a cat-safe, fragrance-light shampoo, or a waterless clean for cats who panic at water",
      "Low-noise drying with the dryer held at a distance, never pointed at the face",
      "Nail tipping on all four paws, including the dew claws people usually miss",
      "Eye corner cleaning for flat-faced breeds and a wipe-down of the ear flaps",
    ],
    benefits: [
      {
        title: "No carrier, no clinic smell",
        desc: "Skipping the journey removes the single biggest source of stress, so most cats settle within a few minutes.",
      },
      {
        title: "Handled without scruffing",
        desc: "Our groomers use light towel support and frequent breaks instead of force, and will stop rather than fight a cat who is genuinely done.",
      },
      {
        title: "Less hairball trouble",
        desc: "Regular combing pulls out the loose coat your cat would otherwise swallow while self-grooming.",
      },
    ],
    faqs: [
      {
        q: "My cat has never been groomed and hates strangers. Should I still book?",
        a: "Yes, but tell us when you book so we plan a longer, slower first visit. The groomer will often spend the first ten minutes doing nothing at all, and a first session may cover only combing and nails rather than a full bath.",
      },
      {
        q: "Do cats actually need a bath?",
        a: "Most healthy cats keep themselves clean and mainly need combing and nail care. A bath helps long-haired Persians, overweight cats who cannot reach their back, senior cats, and any cat with a greasy or dandruff-heavy coat.",
      },
      {
        q: "Can you shave out my Persian's mats?",
        a: "Usually yes. Tight mats sit flat against the skin and cannot be brushed out without hurting, so we clip them away with a guarded blade. If the skin underneath looks red or broken, we will point it out and suggest you see a vet before we continue.",
      },
    ],
  },
  {
    slug: "pet-spa-bath",
    name: "Pet Spa Bath",
    title: "Pet Spa Bath at Home Rs. 1,500 | Petgroomers India",
    description:
      "A full spa bath for dogs and cats at your doorstep for Rs. 1,500. Warm bath, deep conditioning, complete blow dry and nails. Book on WhatsApp, open 7 days.",
    icon: "Bath",
    price: "Rs. 1,500",
    intro:
      "A spa bath is our most-booked package for pets whose coat length is fine but who simply smell like the road. It is a bath, condition and complete dry with basic hygiene work, no haircut. At Rs. 1,500 it is the sensible in-between when a full groom is not due yet.",
    includes: [
      "Brush-out and loose hair removal so the shampoo reaches skin instead of sitting on top of the coat",
      "Double shampoo: one wash to lift road dust and oil, a second to actually clean the skin",
      "Conditioning mask left on for a few minutes, chosen for dry, itchy or dull coats",
      "Warm water rinse until the water runs completely clear, which is where most home baths fall short",
      "Towel dry followed by full blow dry, including the chest, armpits and under the tail",
      "Nail trim, ear flap wipe and paw pad clean-up",
      "Light finishing spray only if you want it, and skipped entirely for scent-sensitive pets",
    ],
    benefits: [
      {
        title: "Dried properly, not half dried",
        desc: "A damp undercoat is what causes that wet-dog smell and hot spots in humid weather, so we dry all the way to the skin.",
      },
      {
        title: "Cheaper than a full groom",
        desc: "At Rs. 1,500 you can keep your pet fresh between haircuts instead of paying Rs. 2,000 every time.",
      },
      {
        title: "Your bathroom stays clean",
        desc: "We bring our own mats and towels and clear every last bit of hair and water before leaving.",
      },
      {
        title: "Safe on sensitive skin",
        desc: "All products are pet-safe and soap-free, and we can use a plain hypoallergenic shampoo on request.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between a spa bath and full grooming?",
        a: "A spa bath at Rs. 1,500 is bath, conditioning, full dry, nails and ears with no scissor or clipper work. Full grooming at Rs. 2,000 adds a haircut or body trim on top of everything in the spa bath.",
      },
      {
        q: "How long does it take?",
        a: "Around 45 to 75 minutes for most pets. A large double-coated dog like a Golden Retriever or a Saint Bernard takes longer, because drying that coat properly is most of the work.",
      },
      {
        q: "Will you use hot water?",
        a: "We use lukewarm water, roughly body temperature, and we test it before it touches your pet. If your geyser runs very hot we will mix it down at the bucket.",
      },
    ],
  },
  {
    slug: "dog-haircut-and-styling",
    name: "Dog Haircut & Breed-Specific Styling",
    title: "Dog Haircut at Home",
    description:
      "Dog haircut at home by trained groomers: teddy bear, puppy cut, summer trim or breed standard. Rs. 1,500 for haircut only. Call +91 99905 99189 to book.",
    icon: "Scissors",
    price: "Rs. 1,500",
    intro:
      "Haircut only, at Rs. 1,500, for pets who were bathed recently but whose coat has grown out of shape. Tell us the length you want in inches or show a photo, and the groomer will match it. We cut common Indian favourites such as the Shih Tzu teddy bear, the Poodle and Doodle puppy cut, the Lhasa summer trim and Spitz tidy-ups.",
    includes: [
      "A short consultation before the first snip, where we agree on body length, face shape and tail",
      "Clipper work on the body at your chosen guard length, with the blade kept cool against the skin",
      "Hand scissoring on the legs, face and tail, which is what makes the difference between a trim and a real haircut",
      "Face shaping: round teddy bear head, a tidy Schnauzer beard, or a clean short muzzle, your choice",
      "Sanitary trim and paw pad shave so hair does not trap dirt or make floors slippery",
      "Feet tidied into a neat round shape rather than left ragged",
      "Photos of the finished cut on request so you can reuse the same brief next time",
    ],
    benefits: [
      {
        title: "You approve the length first",
        desc: "Because it happens in your living room, you can ask for it a little longer mid-cut instead of finding out at pickup.",
      },
      {
        title: "Breed-appropriate, not one style for all",
        desc: "A Spitz should be tidied, never shaved; a Doodle needs real scissor work. Our groomers cut to the coat in front of them.",
      },
      {
        title: "Quiet, low-vibration clippers",
        desc: "Sound is what frightens most dogs, so we use quieter tools and introduce them against the shoulder first, never the face.",
      },
    ],
    faqs: [
      {
        q: "Can I get just a haircut without a bath?",
        a: "Yes, haircut only is Rs. 1,500. Do keep in mind that clipping a dirty or sandy coat dulls blades and gives a rougher finish, so if your dog has not been bathed in weeks, full grooming at Rs. 2,000 gives a visibly better result.",
      },
      {
        q: "Should I shave my dog for the Indian summer?",
        a: "For double-coated breeds like Spitz, Huskies and German Shepherds we do not recommend it, since that coat insulates against heat and protects skin from sun. A de-shedding treatment removes far more warmth-trapping undercoat than a shave does.",
      },
      {
        q: "My dog will not sit still for scissors. What then?",
        a: "We work in short bursts with breaks and usually finish fine. If your dog is truly fidgety or fearful, book Grooming with Extra Care at Rs. 2,500, which gives the groomer extra time and a second pair of hands where needed.",
      },
    ],
  },
  {
    slug: "tick-and-flea-treatment",
    name: "Tick & Flea Treatment for Pets",
    title: "Tick & Flea Grooming Treatment at Home",
    description:
      "Anti-tick and flea grooming bath at your doorstep, Rs. 2,500. Medicated wash, manual tick removal and coat check by trained groomers. Book on WhatsApp today.",
    icon: "Bug",
    price: "Rs. 2,500",
    intro:
      "Ticks thrive in Indian monsoon and post-monsoon weather, and they hide where you rarely look: between toes, inside ear flaps and under the tail. This is a grooming treatment, not veterinary care. It clears the ticks and flea dirt on the coat right now and gives you a clear picture of how bad the problem is, at Rs. 2,500.",
    includes: [
      "Full coat inspection under good light, working section by section from the head backwards",
      "Manual removal of visible ticks with a tick tool, taken out whole rather than pulled apart",
      "Anti-tick shampoo bath with the correct contact time, not a quick rinse-off",
      "Extra attention to the hiding spots: ear folds, between the toes, groin, armpits and tail base",
      "Flea comb pass over the back and tail base to check for flea dirt after drying",
      "Complete blow dry and a written note of where we found the heaviest activity",
      "Practical advice on washing bedding and treating the sleeping corner, which is where eggs actually live",
    ],
    benefits: [
      {
        title: "The house gets checked too",
        desc: "Because we come to you, the groomer can point out the exact corner, rug or balcony crate that is reinfesting your pet.",
      },
      {
        title: "Nothing harsh on the skin",
        desc: "We use pet-safe anti-tick products at label dilution, never kerosene, phenyl or human insecticides.",
      },
      {
        title: "Honest about the limits",
        desc: "A grooming bath handles the current load. If the infestation is heavy or the skin is inflamed, we will tell you to see a vet rather than sell you repeat baths.",
      },
    ],
    faqs: [
      {
        q: "Will one session get rid of ticks completely?",
        a: "Usually not on its own. A bath clears what is on your pet today, but eggs in bedding, cracks and floors keep hatching for weeks, so most homes need a repeat session plus a thorough clean-up of the sleeping area.",
      },
      {
        q: "Is this the same as a vet treatment?",
        a: "No. We are groomers, not veterinarians. We do not prescribe or apply spot-on medication, oral tablets or injections. For a severe infestation, anaemia, scabs or constant scratching, please see a vet, and we are happy to groom alongside their treatment.",
      },
      {
        q: "Is it safe for puppies and cats?",
        a: "We only use products labelled for that species and age, and for very young puppies or kittens we stick to a mild bath and manual removal with a tick tool. Tell us your pet's age when booking so the groomer brings the right products.",
      },
    ],
  },
  {
    slug: "pet-nail-trimming",
    name: "Pet Nail Trimming & Paw Care",
    title: "Pet Nail Trimming at Home | Dog & Cat Paw Care",
    description:
      "Doorstep nail trimming and paw care for dogs and cats across India. Quick, calm, no clinic visit. Included with every grooming package. Open 7 days a week.",
    icon: "PawPrint",
    price: null,
    intro:
      "Overgrown nails are not just a scratched-sofa problem. They change how a dog stands, push the toes sideways and make tiled Indian floors genuinely slippery for older pets. Nail and paw care is included in every grooming package, and we are happy to do it as a quick standalone visit when that is all your pet needs.",
    includes: [
      "Nail trim on all four paws, plus the dew claws that curl back into the pad if ignored",
      "Careful cutting to just before the quick, taken in small slices on black nails where the quick is not visible",
      "Filing after cutting so nothing catches on carpets, clothes or skin",
      "Paw pad hair trimmed flush, which restores grip on marble and tiled floors",
      "Check between the toes for grass seeds, gum, tar, matting or cuts",
      "Paw balm applied to dry or cracked pads on request",
      "Handling done in short holds, so pets who hate paw touching are not pinned down",
    ],
    benefits: [
      {
        title: "Better footing at home",
        desc: "Trimmed nails and shaved pad hair make a real difference to senior dogs sliding on polished floors.",
      },
      {
        title: "Less chance of a painful split",
        desc: "Long nails catch on rugs and tear, which bleeds a lot and is far more distressing than a routine trim.",
      },
      {
        title: "Done where your pet is relaxed",
        desc: "Most pets tolerate paw handling at home far better than on a metal table in a clinic.",
      },
    ],
    faqs: [
      {
        q: "How much does nail trimming cost?",
        a: "Nail trimming is included at no extra charge in all our packages, from the Rs. 1,500 spa bath upwards. For a standalone nail-only visit, message us on WhatsApp with your location and we will quote it based on travel.",
      },
      {
        q: "What if you cut too short and it bleeds?",
        a: "Our groomers cut conservatively and take several thin slices on dark nails rather than one big cut. We carry styptic powder, so on the rare occasion a nail nicks the quick, it is stopped in under a minute.",
      },
      {
        q: "How often do nails need trimming?",
        a: "Every 3 to 4 weeks for most indoor pets. Dogs walked daily on concrete wear their nails down naturally and may need it less; if you can hear clicking on the floor, it is already time.",
      },
    ],
  },
  {
    slug: "de-shedding-treatment",
    name: "De-Shedding Treatment for Dogs & Cats",
    title: "De-Shedding Treatment at Home Rs. 2,500 | Petgroomers",
    description:
      "Cut shedding dramatically with a doorstep de-shedding treatment at Rs. 2,500. Undercoat removal for Huskies, Goldens, Spitz, Persians and Indies. Open 7 days.",
    icon: "Wind",
    price: "Rs. 2,500",
    intro:
      "If you are sweeping hair off the floor twice a day, the problem is loose undercoat that a normal brush never reaches. A de-shedding treatment at Rs. 2,500 uses a bath-and-blow method plus proper rakes to pull that dead coat out at the source, and most owners see a visible drop in shedding for the next several weeks.",
    includes: [
      "Pre-assessment of coat type, because a Husky, a Golden and a Persian each need a different tool and approach",
      "De-shedding shampoo and conditioner left to work, which loosens the undercoat before any tool touches it",
      "High-velocity force dry that blows dead undercoat out in sheets, the step that does most of the work",
      "Undercoat rake and slicker pass over the ruff, hindquarters and tail where shedding is heaviest",
      "Careful work around the hips and behind the ears, done without scraping the skin",
      "Hair collected and bagged so your floor is not covered in it afterwards",
      "Guidance on a home brushing routine that keeps the result going",
    ],
    benefits: [
      {
        title: "Noticeably less hair on the sofa",
        desc: "Removing the dead undercoat at the root means far less of it ends up on your clothes and floor over the following weeks.",
      },
      {
        title: "Cooler than a shave, and safer",
        desc: "Clearing trapped undercoat improves airflow to the skin without destroying the guard coat that protects against Indian sun.",
      },
      {
        title: "Fewer mats behind the ears and hips",
        desc: "Loose undercoat is what felts into mats in humid weather, so pulling it out prevents the problem instead of cutting it out later.",
      },
      {
        title: "Done outside if you prefer",
        desc: "Force drying makes a lot of flying fur, so we are glad to work in your balcony, terrace or parking area to keep it out of the house.",
      },
    ],
    faqs: [
      {
        q: "How long do the results last?",
        a: "Typically 4 to 8 weeks, depending on the breed and the season. During the heavy shed after winter, double-coated dogs may benefit from two sessions about six weeks apart.",
      },
      {
        q: "Does de-shedding work for cats?",
        a: "Yes, and it helps a lot with hairballs in Persians and long-haired Indies. For cats we usually skip the high-velocity dryer, which most find frightening, and rely on comb and rake work instead.",
      },
      {
        q: "Is my dog being shaved for this?",
        a: "No. De-shedding removes only the dead undercoat and leaves the guard coat intact, so the outline of your dog does not change. It is the opposite of a summer shave, and far better for the coat.",
      },
    ],
  },
  {
    slug: "puppy-first-grooming",
    name: "Puppy's First Grooming",
    title: "Puppy's First Grooming at Home",
    description:
      "A gentle first grooming session for puppies at home, Rs. 1,500. Short, calm and confidence-building with trained groomers. Call +91 99905 99189 to book.",
    icon: "Baby",
    price: "Rs. 1,500",
    intro:
      "A puppy's first grooming session decides how he feels about clippers and dryers for the rest of his life, so we treat it as a training visit rather than a beauty appointment. It is deliberately short, ends on a good note, and costs Rs. 1,500. The goal is a puppy who is bored by the dryer, not scared of it.",
    includes: [
      "Introduction to each tool with the machine switched off first, then on at a distance",
      "Short, warm bath with a tearless puppy shampoo and a very gentle rinse",
      "Low-heat, low-speed drying held away from the face, so the first dryer experience is a non-event",
      "Handling practice: paws held, ears lifted, tail touched, mouth looked at, all paired with treats you approve",
      "A light face and sanitary tidy-up rather than a full haircut on the very first visit",
      "First nail trim, often only two paws if that is where the puppy's patience runs out",
      "Notes for you on how to brush at home during the week so the next session is easier",
    ],
    benefits: [
      {
        title: "Sets up every future groom",
        desc: "Puppies who learn that grooming is boring and predictable stay easy to handle as adults, which keeps them safer on the table.",
      },
      {
        title: "We stop before it goes wrong",
        desc: "Ending while the puppy is still comfortable matters more than finishing the checklist, so we may leave part of the trim for next time.",
      },
      {
        title: "Home means less to be scared of",
        desc: "Familiar smells, no other barking dogs and you in the room removes most of the fear from a first session.",
      },
    ],
    faqs: [
      {
        q: "How old should my puppy be for the first grooming?",
        a: "We usually suggest waiting until about 12 weeks and until the core vaccination course is underway, as advised by your vet. Before that, stick to brief brushing and paw handling at home.",
      },
      {
        q: "Will a full haircut be done in the first session?",
        a: "Rarely, and we would not push for it. The first visit focuses on bath, dry, face and sanitary tidy-up plus nails, so the puppy learns the routine. Full grooming at Rs. 2,000 makes more sense from the second or third session.",
      },
      {
        q: "Should I hold my puppy during the session?",
        a: "Stay in the room, but let the groomer do the handling. Puppies pick up on an anxious owner instantly, and a calm person sitting a few feet away usually settles them better than being held.",
      },
    ],
  },
  {
    slug: "senior-pet-grooming",
    name: "Senior Pet Grooming",
    title: "Senior Dog & Cat Grooming at Home | Rs. 2,500",
    description:
      "Patient at-home grooming for senior dogs and cats at Rs. 2,500. Short sessions, non-slip support, arthritis-aware handling. Doorstep service, open 7 days.",
    icon: "Heart",
    price: "Rs. 2,500",
    intro:
      "Older pets find the standing, the travel and the long waits harder than the grooming itself. This session is built around that: it runs on your pet's clock, in his own home, with breaks whenever he needs to lie down. It is priced under our Grooming with Extra Care package at Rs. 2,500, because it genuinely takes longer.",
    includes: [
      "Non-slip mat and low-height working setup, so an arthritic pet is never asked to stand on a slippery surface",
      "Sit-or-lie-down grooming where standing is uncomfortable, with the session split into several short blocks",
      "Lukewarm, quick bath that avoids long periods standing in water, followed by warm towel drying",
      "Low-heat, low-noise drying, which matters for pets whose hearing or circulation has changed",
      "Extra care over lumps, warts and thin skin, clipping around them rather than over them",
      "Nail trim, pad shave and a comfort trim around the rear, which older pets often cannot keep clean themselves",
      "A note of anything we notice, such as a new lump or a sore patch, for you to raise with your vet",
    ],
    benefits: [
      {
        title: "No car ride, no waiting room",
        desc: "For a stiff or anxious senior, removing the journey is the single kindest change you can make to grooming day.",
      },
      {
        title: "The session bends to your pet",
        desc: "We pause, let him rest, and continue, rather than working to a salon's appointment clock.",
      },
      {
        title: "An extra pair of eyes",
        desc: "Groomers touch every inch of the coat, so we often spot a new lump or a sore ear early and flag it for your vet to check.",
      },
    ],
    faqs: [
      {
        q: "My dog has arthritis and cannot stand long. Can he still be groomed?",
        a: "Yes, and this is exactly what the session is designed for. We groom lying down or sitting wherever possible and split the work into short blocks with rest in between, which is why it takes longer than a standard groom.",
      },
      {
        q: "My vet says my pet has a heart condition. Is grooming safe?",
        a: "Ask your vet first, and follow what they say. We are groomers, not medical professionals, so if grooming is cleared we will keep it short, low-stress and stop immediately at any sign of distress or heavy panting.",
      },
      {
        q: "What if the coat is badly matted after months without grooming?",
        a: "With seniors we almost always clip mats off rather than brush them out, because de-matting pulls painfully on thin, delicate skin. The coat will look shorter for a while, but it is far kinder and the skin underneath can finally breathe.",
      },
    ],
  },
  {
    slug: "mobile-pet-grooming",
    name: "Mobile Pet Grooming at Your Doorstep",
    title: "Mobile Pet Grooming at Your Doorstep",
    description:
      "Mobile pet grooming that comes to you anywhere in India. Groomers bring every tool to your door, 8 AM to 8 PM, 7 days. Full grooming Rs. 2,000. Book now.",
    icon: "Truck",
    price: "Rs. 2,000",
    intro:
      "Doorstep grooming is the whole idea behind Petgroomers, not an add-on service. Our groomers travel to your address with clippers, dryers, shampoos, towels and mats, and everything happens where your pet already lives. We work pan-India, seven days a week, from 8 AM to 8 PM, with full grooming at Rs. 2,000.",
    includes: [
      "Groomer arrives at your address with the complete kit: clippers, blades, combs, dryer, shampoos, towels and non-slip mats",
      "We set up in whatever space suits you best, whether that is a bathroom, balcony, terrace, garden or society parking area",
      "Choice of package on the spot: spa bath Rs. 1,500, full grooming Rs. 2,000, or extra care Rs. 2,500",
      "One pet, one groomer, one session, with no queue of other animals waiting",
      "Tools cleaned and disinfected between homes, and fresh towels used for each pet",
      "Complete clean-up of hair and water before the groomer leaves",
      "Slot booking over WhatsApp or a call to +91 99905 99189, including evening slots after work",
    ],
    benefits: [
      {
        title: "Nothing to transport",
        desc: "No carrier, no cab, no persuading a frightened pet into a car, which removes most of the day's stress for both of you.",
      },
      {
        title: "Zero cross-contact with other pets",
        desc: "Your pet never shares a space with unknown animals, which matters for puppies, seniors and anyone recovering from illness.",
      },
      {
        title: "Fits around your day",
        desc: "With slots from 8 AM to 8 PM all seven days, you can book before office, over lunch, or after you get home.",
      },
      {
        title: "You see everything",
        desc: "There is no back room. You watch how your pet is handled and can step in or ask questions at any point.",
      },
    ],
    faqs: [
      {
        q: "Which cities do you cover?",
        a: "We operate pan-India, across metros, tier-2 cities and many smaller towns. The quickest way to confirm is to WhatsApp us your locality and pin location, and we will tell you the earliest slot available in your area.",
      },
      {
        q: "Do you groom inside a van or inside my house?",
        a: "Inside your home, in whichever spot you prefer, usually a bathroom, balcony or parking area. All we need is running water, a power socket and a little floor space; the groomer carries the rest.",
      },
      {
        q: "Is doorstep grooming more expensive than a salon?",
        a: "Our pricing is the same as our regular packages, from Rs. 1,500 for a spa bath to Rs. 2,500 for extra care, with no separate visit charge in the areas we normally serve. For very distant locations we will tell you any travel cost before you confirm.",
      },
    ],
  },
];

export const seoServicesBySlug: Record<string, SeoService> = Object.fromEntries(
  seoServices.map((service) => [service.slug, service]),
);
