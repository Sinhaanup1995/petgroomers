// Breed landing-page content for Petgroomers doorstep dog and cat grooming.
// Every breed is written from scratch. The coat advice assumes Indian
// conditions — long hot summers, monsoon damp, dust and ticks — because
// generic Western grooming advice gets double-coated dogs shaved here, which
// is exactly the wrong thing to do.
//
// Nothing on these pages is veterinary advice. Anything that looks like a
// skin, ear or eye problem goes to a vet, not a groomer.

import type { Breed } from "./types";

export const breeds: Breed[] = [
  /* ------------------------------------------------------------------ dogs */
  {
    slug: "golden-retriever",
    name: "Golden Retriever",
    species: "dog",
    coatType: "Double coat, dense water-resistant outer coat with heavy feathering",
    sheddingLevel: "Very high",
    groomingFrequency: "Every 4-6 weeks, with de-shedding every 3-4 weeks in summer",
    recommendedPackage: "Grooming with Extra Care",
    price: "Rs. 2,500",
    title: "Golden Retriever Grooming at Home | Petgroomers",
    description:
      "Doorstep Golden Retriever grooming across India. Proper de-shedding instead of shaving, feather detangling and a full blow-dry. Rs. 2,500, 7 days a week.",
    intro:
      "A Golden Retriever in India carries a coat built for a Scottish autumn through a Chennai April, and the single most common mistake pet parents make is reaching for the clippers. The dense undercoat is what keeps hot air off the skin; strip it out with a blade and you remove the insulation, not the heat. What a Golden actually needs here is volume removal — hours of undercoat rake and high-velocity drying, done at home so the loose hair blows out on your balcony rather than settling on your sofa.",
    challenges: [
      {
        title: "Two full coat blows a year, and neither is polite",
        desc: "Goldens drop undercoat in sheets, usually around March and again after the monsoon. If that dead coat is not raked out it packs down against the skin and stops air moving through it, which is when you start seeing hot damp patches under the ruff and behind the elbows.",
      },
      {
        title: "Feathering that collects everything",
        desc: "The long fringe on the ears, chest, back of the legs and tail is the first thing to tangle and the last thing to dry. Street dust, burrs from park grass and monsoon mud all end up in it, and a knot at the base of a feather is easy to miss until it has tightened into a mat.",
      },
      {
        title: "Water-resistant coat that will not dry on its own",
        desc: "The outer coat repels water, which means a home bath often leaves the undercoat quietly soaked. In humid coastal cities a Golden left to air-dry can stay damp at skin level for hours, and damp skin under a dense coat is how fungal trouble starts.",
      },
      {
        title: "Ears that trap moisture",
        desc: "Drop ears plus a hairy ear canal plus Indian humidity is a poor combination. Grooming can keep the flap clean and the surrounding hair tidy, but a smell, a head shake or a discharge is a vet visit, not a grooming problem.",
      },
      {
        title: "Ticks hiding in plain sight",
        desc: "A Golden's coat is thick enough that a tick can feed for two days before anyone notices. The ruff, the ear base and the skin between the toes are the three places we always check under a strong light during a groom.",
      },
    ],
    careTips: [
      "Brush with an undercoat rake, not a slicker alone — a slicker smooths the top coat and leaves the dead undercoat sitting underneath it.",
      "Line-brush the feathering: lift the hair in layers with one hand and comb from the skin outwards, so you actually reach the base where mats form.",
      "Never shave the coat for summer. The undercoat insulates against heat as well as cold, and clipped double coat frequently grows back patchy, woolly or a different texture.",
      "After any beach, lake or monsoon-puddle swim, rinse with plain water and dry to the skin. Salt and pond water left in a double coat are a reliable cause of itching.",
      "Comb the ear feathering and the tail plume twice a week; those two spots account for most of the mats we cut out of Goldens.",
      "Keep the hair between the paw pads trimmed short — it traps mud in the monsoon and gives ticks somewhere quiet to sit.",
    ],
    faqs: [
      {
        q: "My Golden is panting all through May. Will a summer shave help him cool down?",
        a: "It will not, and it can make things worse. Dogs lose heat by panting and through their paws, not through the skin on their back, and the undercoat you would be removing is the layer keeping radiant heat off that skin. Shaved Goldens also lose their sun protection and often grow the coat back uneven. The genuinely effective answer is a deep de-shed that pulls the dead undercoat out and lets air move through what is left, which is exactly what our Grooming with Extra Care package at Rs. 2,500 is built around.",
      },
      {
        q: "How much hair does a de-shedding session actually remove?",
        a: "From an adult Golden in coat-blow season, honestly, enough to fill a shopping bag. The high-velocity dryer does most of the work by pushing loose hair out of the undercoat before it can shed onto your floor, and the rake finishes what the dryer lifts. Most pet parents tell us the shedding around the house drops noticeably for two to three weeks afterwards.",
      },
      {
        q: "Do you groom Goldens at home even in high-rise apartments?",
        a: "Yes, that is the whole service. Our groomer arrives with a folding table, dryer, clippers and their own water arrangement, and works in a bathroom, balcony or utility area. For a coat-blow session we suggest a spot with some airflow and a drain, because a lot of hair comes off. Call +91 99905 99189 and we will pick a time between 8 AM and 8 PM, any day of the week.",
      },
    ],
  },
  {
    slug: "labrador-retriever",
    name: "Labrador Retriever",
    species: "dog",
    coatType: "Short, dense double coat with a slightly oily water-repellent top layer",
    sheddingLevel: "High",
    groomingFrequency: "Every 4-6 weeks",
    recommendedPackage: "Full Grooming",
    price: "Rs. 2,000",
    title: "Labrador Grooming at Home in India | Petgroomers",
    description:
      "Home grooming for Labradors anywhere in India — de-shed, bath, ear and nail care, full dry. Short coat, heavy shedding, Rs. 2,000. Book 8 AM to 8 PM.",
    intro:
      "India's most popular family dog also has India's most misunderstood coat. A Labrador looks low-maintenance because the hair is short, and then you find it woven into your bedsheets in February. The short top coat sits over a dense undercoat that sheds year-round in our climate, and because Labs are enthusiastic about water, mud and food, the coat picks up an oily, doggy smell faster than most breeds.",
    challenges: [
      {
        title: "Short hair that sheds more than long hair",
        desc: "Lab hair is stiff, short and needle-like, which makes it embed in upholstery and car seats rather than roll into clumps you can sweep. The volume is deceptive — a Lab can out-shed a Shih Tzu several times over.",
      },
      {
        title: "That distinctive Labrador smell",
        desc: "The coat carries more natural oil than most short-coated breeds because it evolved to shed water. In humid weather that oil oxidises and the dog starts to smell within a week or two of a bath, which no amount of dry shampoo fixes.",
      },
      {
        title: "A body built for gaining weight and rolling in things",
        desc: "Labs will happily lie in wet mud during the monsoon and in the coolest dusty corner in summer. Grit worked into the coat at skin level is abrasive and is a common cause of the scratching owners blame on food.",
      },
      {
        title: "Nails that get ignored",
        desc: "Because Labs are heavy and active, overgrown nails change how they load their paws and start splitting on tile floors. Most apartment-raised Labs do not wear their nails down enough and need a trim at every groom.",
      },
    ],
    careTips: [
      "Use a rubber curry brush or a de-shedding tool in short circular strokes — for a short dense coat this lifts far more dead hair than a pin brush.",
      "Bathe roughly every three to four weeks in Indian conditions. Labs tolerate more frequent bathing than most breeds because of the oil in their coat.",
      "Dry all the way to the skin. A Lab that feels dry on top can still be wet underneath, especially around the neck and chest.",
      "Check the ear flaps after every swim or bath; keep them clean and dry, and see a vet if there is odour, redness or repeated head shaking.",
      "Trim nails every three to four weeks and listen for clicking on tiles — that sound means they are already too long.",
      "Run your fingers against the lie of the coat weekly to feel for ticks, particularly around the collar line where they are easy to miss.",
    ],
    faqs: [
      {
        q: "My Lab sheds all year, not just in season. Is something wrong?",
        a: "In most Indian cities that is completely normal. Seasonal shedding is triggered by changing daylight and temperature, and in a climate without a hard winter the cycle never fully resets, so Labs here shed moderately all year with two heavier peaks. It is a management problem rather than a health one. Regular de-shedding at three to four week intervals removes the loose coat on our table instead of in your house; if you also see thinning patches, bald spots or flaky skin, that part belongs with a vet.",
      },
      {
        q: "Do Labradors need a haircut?",
        a: "No, and you should not give one. There is nothing to shape on a Labrador — the coat is functional, short and self-maintaining in length. All a Lab needs is tidying of the paw-pad hair and, occasionally, a neaten around the sanitary area. Our Full Grooming at Rs. 2,000 covers the bath, de-shed, blow-dry, nails, ear cleaning and paw tidy, which is the complete list for this breed.",
      },
      {
        q: "How do I get the wet-dog smell out between grooms?",
        a: "Dry the dog properly, every time. Nine out of ten smelly Labs are simply damp at skin level, and once bacteria get going in that warm damp layer the smell returns within hours of a bath. Towel hard, then use a dryer on a cool setting, and pay attention to the chest, the armpits and the base of the tail. If the dog smells strongly within two days of a genuinely dry bath, get the skin looked at by a vet.",
      },
    ],
  },
  {
    slug: "german-shepherd",
    name: "German Shepherd",
    species: "dog",
    coatType: "Double coat, harsh weather-resistant guard hair over a thick woolly undercoat",
    sheddingLevel: "Very high",
    groomingFrequency: "Every 4-6 weeks, more often during coat blow",
    recommendedPackage: "Grooming with Extra Care",
    price: "Rs. 2,500",
    title: "German Shepherd Grooming at Home | Petgroomers",
    description:
      "German Shepherd grooming at your door across India. Deep de-shedding, no shaving of the double coat, ticks checked, full dry. Rs. 2,500, all seven days.",
    intro:
      "German Shepherds are the working dogs of Indian homes — farmhouses in Punjab, independent houses in Hyderabad, apartments everywhere — and they arrive in summer carrying an undercoat thick enough to hide a finger in. Long-coat GSDs have the added problem of feathering behind the ears and legs that mats quietly. Grooming a Shepherd well is mostly about patience and airflow: getting a high-velocity dryer down to the skin and pulling out several kilos of dead wool without touching the guard coat that protects him.",
    challenges: [
      {
        title: "An undercoat that comes out in clumps",
        desc: "A Shepherd in full blow sheds in visible tufts that lift off the body when you run a hand through. Left in place, that wool packs into a felted layer over the hips and rump that water cannot penetrate and air cannot move through.",
      },
      {
        title: "The hindquarters and pants",
        desc: "The trousers on the back legs and the area under the tail are the densest part of the coat and the most neglected. In humid weather this is where we most often find damp, compacted undercoat and, in long-coat lines, genuine mats.",
      },
      {
        title: "Ticks in the ear base and ruff",
        desc: "Shepherds are frequently outdoor or garden dogs in India, and the thick ruff around the neck plus the folds at the ear base give ticks perfect cover. A tick here can feed unnoticed through several days of normal petting.",
      },
      {
        title: "Dust that never rinses out in one pass",
        desc: "The harsh outer coat holds fine dust close to the skin, especially in drier northern and western cities. One quick lather rarely gets down to it, which is why a Shepherd usually needs two shampoo passes and a long rinse.",
      },
      {
        title: "Size and temperament on the table",
        desc: "A 35-kilo dog who dislikes restraint needs an unhurried groomer and a familiar room. This is exactly where home grooming beats a salon — no car ride, no strange dogs barking, no waiting in a crate.",
      },
    ],
    careTips: [
      "Work with an undercoat rake and then a slicker, going with the lie of the coat, and give extra time to the rump and trousers where the coat is deepest.",
      "Do not shave a German Shepherd, including for summer. The guard coat blocks sun and radiant heat, the undercoat spaces it off the skin, and clipped GSD coats very often grow back thin, woolly or patchy.",
      "During coat blow, rake twice a week. Five minutes every other day beats one long fight every fortnight, for you and the dog.",
      "Part the coat at the neck, behind the ears and between the toes under good light once a week and look for ticks at skin level.",
      "After a monsoon walk, dry the belly, chest and trousers deliberately — those are the areas that stay wet longest and smell first.",
      "Keep the hair around the hocks and pads trimmed so mud and grass seeds have less to cling to.",
    ],
    faqs: [
      {
        q: "It is 42 degrees here. Surely shaving my Shepherd is kinder?",
        a: "It is one of the most common and most damaging myths in Indian pet care. The double coat is a heat barrier that works in both directions — the guard hairs reflect sun and the air trapped in the undercoat slows heat reaching the skin. A shaved Shepherd is a dog with sunburn risk and no insulation, and the regrowth is often permanently altered in texture. What genuinely helps is removing the dead undercoat so air can circulate, plus shade, water and walking before 8 AM or after sunset. Our Grooming with Extra Care package at Rs. 2,500 is the de-shedding-heavy option for exactly this.",
      },
      {
        q: "Long-coat versus standard-coat Shepherd — does the grooming differ?",
        a: "Yes. A standard stock-coat GSD is almost entirely a de-shedding job: rake, bathe, blow out, done. A long-coat has feathering behind the ears, along the back of the front legs, on the trousers and on the tail, all of which mat and all of which need line-combing with a metal comb, not just a rake. Long-coat Shepherds usually need a session every four weeks rather than six, particularly through the monsoon.",
      },
      {
        q: "My Shepherd has never been groomed and is nervous with strangers. Can you still handle him?",
        a: "Usually yes, and doing it at home is a large part of why. The dog stays on his own territory with you present, there is no car journey and no unfamiliar kennel noise, which removes most of the stress before we start. Tell us when you call on +91 99905 99189 so we can allot a longer slot, and the first session may be a shorter, gentler one that we build on next time. We do not force a dog who is genuinely frightened.",
      },
    ],
  },
  {
    slug: "shih-tzu",
    name: "Shih Tzu",
    species: "dog",
    coatType: "Long, fine, continuously growing double coat with a hair-like texture",
    sheddingLevel: "Low",
    groomingFrequency: "Every 4 weeks, with daily combing at home",
    recommendedPackage: "Grooming with Extra Care",
    price: "Rs. 2,500",
    title: "Shih Tzu Grooming at Home | Petgroomers India",
    description:
      "Shih Tzu grooming at your doorstep in India. Face and eye-area trimming, mat removal, summer puppy cuts and gentle handling. Rs. 2,500, seven days a week.",
    intro:
      "A Shih Tzu is a long-coated dog wearing a flat face, and both halves of that sentence create work. The coat grows continuously like human hair, so it does not shed out — it tangles into itself and forms mats close to the skin that you cannot see from the top. Meanwhile the short muzzle means food, water and eye discharge sit in the hair around the face all day. In Indian humidity, an uncombed Shih Tzu can go from slightly tangled to solidly matted in about three weeks.",
    challenges: [
      {
        title: "Matting that forms from the skin outwards",
        desc: "The dangerous mats are the ones a surface brush glides over — behind the ears, in the armpits, on the inner thighs and under the collar. Once a mat tightens it pulls the skin every time the dog moves, and a heavily matted coat is not something to work through with scissors at home.",
      },
      {
        title: "The face: eyes, muzzle and hair that grows into them",
        desc: "Hair from the topknot area grows down towards the eyes and hair around the mouth soaks up every meal. Both need regular scissoring and daily wiping. Tear staining is largely a hygiene and moisture issue, but persistent runny eyes, squinting or redness is a vet matter, not a grooming one.",
      },
      {
        title: "Ears that are heavy, hairy and closed in",
        desc: "Long ear leathers covered in dense hair sit flat against the head, which keeps the canal warm and poorly ventilated — not ideal in a humid Indian summer. We keep the hair around the opening tidy and the flaps clean; anything smelling or discharging goes to a vet.",
      },
      {
        title: "Skin folds and a short muzzle",
        desc: "Many Shih Tzus have a shallow nose wrinkle that traps moisture and food, and flat-faced dogs overheat easily, so grooming sessions need to be unhurried with proper breaks and a cool-air dryer rather than hot.",
      },
      {
        title: "Feet and sanitary area",
        desc: "Long hair between the pads picks up grit and makes them slip on tiles, and the hair around the rear traps waste in a way short-coated breeds never deal with. Both need trimming at every single session.",
      },
    ],
    careTips: [
      "Comb daily with a metal greyhound comb, not a bristle brush — the comb tells you honestly whether you have reached the skin.",
      "Wipe under the eyes every morning with a soft damp cloth and dry the area afterwards, because a permanently wet face is what sets tear staining.",
      "Keep the hair around the mouth trimmed short if your dog eats wet food; it stops the sour smell that builds up in a soggy muzzle beard.",
      "Ask for a puppy cut through the Indian summer. Shih Tzu hair grows continuously, so a shorter trim is a legitimate, comfortable option for this breed — unlike double-coated dogs, nothing is damaged by it.",
      "Tie or trim the hair falling over the eyes so your dog can see; use a soft fabric band rather than a rubber one.",
      "If you find a mat, work it apart with your fingers and a comb from the outer edge inwards, never by cutting blind with scissors against the skin.",
    ],
    faqs: [
      {
        q: "My Shih Tzu is badly matted. Can you brush it out instead of clipping?",
        a: "Sometimes, and sometimes that would be cruel. A few isolated mats can be teased apart with detangler, fingers and a comb. But when the coat has felted into a solid layer against the skin, brushing it out means hours of pulling on skin that is already sore, and the honest, kinder answer is a short clip and a fresh start — the coat grows back. Our groomer will tell you which of the two you are looking at before starting. If the skin underneath a mat looks raw, inflamed or has sores, that needs a vet before any grooming.",
      },
      {
        q: "How short can you cut the face without it looking odd?",
        a: "Most Indian pet parents ask for a rounded teddy-bear face, which keeps the cheeks and chin full while scissoring the hair above the eyes short enough to stay out of them. The alternative is a tighter, shorter muzzle trim that is far easier to keep clean if your dog is a messy eater. Both are done with blunt-tipped scissors and a steady hand, one small snip at a time, which is a large part of why a Shih Tzu session takes longer than a Labrador's.",
      },
      {
        q: "How often does a Shih Tzu really need professional grooming?",
        a: "Every four weeks if you keep the coat long, every six if you keep it in a short puppy cut. That is a genuinely high-maintenance breed and it is worth knowing before you stretch a gap to three months, because the cost of a long gap is usually a full clip-off rather than a trim. Between sessions the daily two-minute comb matters more than anything we do. Book on +91 99905 99189, any day between 8 AM and 8 PM.",
      },
    ],
  },
  {
    slug: "pug",
    name: "Pug",
    species: "dog",
    coatType: "Short, smooth, dense single coat — fine hair that sheds constantly",
    sheddingLevel: "High",
    groomingFrequency: "Every 4-5 weeks",
    recommendedPackage: "Full Grooming",
    price: "Rs. 2,000",
    title: "Pug Grooming at Home in India | Petgroomers",
    description:
      "Doorstep Pug grooming across India — facial fold cleaning, tail curl care, de-shedding and a gentle cool dry for a flat-faced breed. Rs. 2,000 per session.",
    intro:
      "Pugs look like the easiest grooming job in the world until you lift the nose wrinkle. That fold, the tail curl and the tight skin creases on the face all hold moisture, dead skin and whatever the dog last ate, and Indian humidity turns them into the warmest, dampest corners on the dog. Add a short coat that sheds an astonishing amount of fine hair for such a small animal, and a flat face that makes heat and stress genuinely risky, and a Pug groom becomes careful, gentle and unhurried rather than quick.",
    challenges: [
      {
        title: "The nose wrinkle",
        desc: "The deep fold above the muzzle collects moisture, skin oil and food debris. It needs wiping clean and — crucially — drying afterwards, because a fold left damp is the classic source of the sour smell pet parents notice. Redness, sores or a persistent bad odour in the fold is a vet visit.",
      },
      {
        title: "Shedding out of all proportion to size",
        desc: "Pug hair is short, straight and stiff, with a dense undercoat in fawn Pugs, and it sheds year-round. It works into fabric like tiny needles and is one of the hardest coats in the world to vacuum out of a sofa.",
      },
      {
        title: "Heat intolerance during grooming itself",
        desc: "A brachycephalic dog cannot cool itself efficiently by panting, so a hot dryer, a warm bathroom or a long stressful session is not just uncomfortable but unsafe. We work with cool air, short stretches and rest breaks.",
      },
      {
        title: "The tail curl and the creases beneath it",
        desc: "The tightly curled tail has a skin pocket at its base that rarely gets cleaned. It is small, easy to reach and easy to forget, and in the monsoon it is a common source of a smell nobody can locate.",
      },
      {
        title: "Eyes that sit forward and exposed",
        desc: "Prominent eyes mean shampoo, spray and even a flicked towel are hazards. Face cleaning on a Pug is done by hand with a damp cloth and a tearless product, never by rinsing water over the head.",
      },
    ],
    careTips: [
      "Clean the nose fold two or three times a week with a soft damp cloth or an unscented wipe, then dry it with a dry corner of the same cloth. Drying is the half people skip.",
      "Use a rubber grooming mitt weekly — it lifts short Pug hair far more effectively than a bristle brush and most Pugs enjoy it.",
      "Lift the tail curl and clean underneath it whenever you clean the face, especially during the monsoon.",
      "Bathe every three to four weeks in Indian conditions, with cool-to-lukewarm water and a thorough dry, never a hot blast of air.",
      "Groom in the cooler part of the day. Morning or evening slots are genuinely better for flat-faced breeds in an Indian summer.",
      "Keep the nails short — Pugs are low to the ground and long nails change their gait noticeably on smooth flooring.",
    ],
    faqs: [
      {
        q: "My Pug's face smells even a day after a bath. What is going on?",
        a: "Almost always the fold was cleaned but not dried. Water sitting in a warm, closed skin crease in Indian humidity starts smelling within hours, and washing it again without drying just restarts the cycle. Wipe, then dry with a clean dry cloth, and do it every second or third day rather than only at bath time. If the fold is red, sticky, or the smell persists despite dry cleaning, stop home treatment and have a vet look at the skin.",
      },
      {
        q: "Is grooming safe for a flat-faced dog in peak summer?",
        a: "Yes, with the right handling — which is one more argument for grooming at home rather than in a salon. There is no car journey in the heat, no waiting time, and the dog is in a familiar room where you can keep a fan or AC running. We use cool air only, keep sessions short with breaks, and stop if the dog is working hard to breathe. We are also happy to schedule Pugs for early morning or post-sunset slots; we operate 8 AM to 8 PM every day.",
      },
      {
        q: "Can anything reduce how much my Pug sheds?",
        a: "You can manage it, not stop it. A weekly rubber mitt session plus a de-shedding bath every three to four weeks removes a large amount of hair on our table instead of on your bed, and proper drying helps loose hair release rather than cling. What does not work is shaving — there is nothing to shave on a Pug — or frequent harsh shampooing, which dries the skin and can make shedding look worse.",
      },
    ],
  },
  {
    slug: "beagle",
    name: "Beagle",
    species: "dog",
    coatType: "Short, dense, weather-resistant double coat",
    sheddingLevel: "Moderate",
    groomingFrequency: "Every 5-6 weeks",
    recommendedPackage: "Spa Bath Package",
    price: "Rs. 1,500",
    title: "Beagle Grooming at Home | Petgroomers India",
    description:
      "Beagle grooming at your doorstep anywhere in India. Bath, de-shed, long ear cleaning, nails and paw tidy for a busy scent hound. Rs. 1,500 per visit.",
    intro:
      "Beagles are nose-first dogs, which means whatever is on the ground ends up on the dog. In Indian cities that is dust and drain water; in the monsoon it is mud up to the elbows; near parks it is grass seed in the ear fringe. The coat itself is short and undemanding, so a Beagle is a genuinely easy grooming breed — the work is in the long drop ears, the constant low-level shedding and the fact that a Beagle will not stand still for any of it.",
    challenges: [
      {
        title: "Long, low-set ears with no airflow",
        desc: "Beagle ears hang flat and seal the canal off from air, and the dog spends its life with its head down near damp ground. Keeping the flaps clean and dry is the single most useful thing you can do for a Beagle. Odour, discharge or head-shaking means a vet, not a wipe.",
      },
      {
        title: "A dog that follows its nose into filth",
        desc: "Beagles roll in things enthusiastically and are close enough to the ground that the belly, chest and legs take the worst of every walk. They generally need bathing more often than their short coat would suggest.",
      },
      {
        title: "Steady year-round shedding",
        desc: "The coat thickens a little in cooler months and sheds out again, but in most of India the shedding is a constant low drizzle of short white and tan hair rather than a dramatic seasonal blow.",
      },
      {
        title: "Standing still is not their strength",
        desc: "Beagles are busy, vocal and food-motivated. Sessions go far better with treats, a familiar room and a groomer who works quickly rather than trying to insist on stillness.",
      },
    ],
    careTips: [
      "Wipe the inside of the ear flaps and the skin at the ear base weekly with a dry or barely damp pad, and always after a bath or a wet walk.",
      "Use a hound glove or rubber mitt once a week; it lifts the short dead coat and Beagles tolerate it far better than a slicker brush.",
      "Check between the toes and in the ear fringes for grass seeds and ticks after park walks — these two spots catch almost everything.",
      "Bathe every four to six weeks, or sooner if your Beagle has found something to roll in, which it will.",
      "Dry the belly and chest deliberately in the monsoon; a Beagle's underside is what actually gets soaked, not its back.",
      "Keep nails short. A Beagle covers a lot of ground and long nails split on hard urban surfaces.",
    ],
    faqs: [
      {
        q: "Why does my Beagle smell distinctly houndy even after a bath?",
        a: "Hounds carry more natural skin oil than many breeds, and that oil is where the characteristic smell lives. It is normal, not dirt. What you can do is bathe on a regular four to six week rhythm with a good clarifying shampoo, dry the coat fully so bacteria do not multiply in a damp undercoat, and keep the ears and paws clean since those are secondary smell sources. A sudden change in smell, or a strong smell coming specifically from the ears or the skin, is worth a vet's opinion.",
      },
      {
        q: "How do I clean Beagle ears without hurting them?",
        a: "Only clean what you can see. Lift the flap, wipe the visible inner surface with a soft pad, and let it dry — never push anything down into the canal, and never use a cotton bud. Our Spa Bath Package at Rs. 1,500 includes an external ear clean as part of the session. If the ear looks red, feels hot, smells strong or the dog yelps when you touch it, stop and see a vet; that is beyond a groomer's remit.",
      },
      {
        q: "Is Rs. 1,500 enough for a Beagle or should I book the full groom?",
        a: "For most Beagles the Spa Bath Package is genuinely the right fit, because there is no haircut involved in this breed — bath, de-shed, ear clean, nail trim and paw tidy is the entire job. Step up to Full Grooming at Rs. 2,000 if your dog is heavily soiled after a monsoon week, needs a more thorough double shampoo, or you want a longer, more detailed session. We will tell you honestly on the call rather than upselling.",
      },
    ],
  },
  {
    slug: "siberian-husky",
    name: "Siberian Husky",
    species: "dog",
    coatType: "Very dense double coat — straight guard hair over a thick woolly undercoat",
    sheddingLevel: "Very high",
    groomingFrequency: "Every 4 weeks, and weekly raking during coat blow",
    recommendedPackage: "Grooming with Extra Care",
    price: "Rs. 2,500",
    title: "Husky Grooming at Home in India | Petgroomers",
    description:
      "Siberian Husky grooming at your door in India. Deep de-shedding for a very dense double coat — never shaved — plus a full blow-out. Rs. 2,500 per session.",
    intro:
      "Keeping a Siberian Husky in Coimbatore or Kolkata is a commitment, and the coat is the centre of it. A Husky's undercoat is the densest of any breed we handle — genuinely woolly, several centimetres deep, and designed for temperatures we never see in India. Handled correctly, that coat actually helps the dog in our heat by insulating the skin from it. Handled by a clipper, it is destroyed, often permanently. Husky grooming here is one thing above all: getting the dead undercoat out, completely, again and again.",
    challenges: [
      {
        title: "Coat blow on an industrial scale",
        desc: "Twice a year a Husky sheds its entire undercoat in about three weeks. It comes out in fistfuls, drifts around the house, and if it is not removed it compacts into a felted mat over the shoulders and hips that traps heat against the skin — the exact opposite of what the coat is meant to do.",
      },
      {
        title: "The shave temptation",
        desc: "No breed gets wrongly shaved in India more often than the Husky. Removing the guard coat exposes pale skin to direct sun, removing the undercoat removes the air layer that slows heat transfer, and Husky coat is notorious for growing back woolly, uneven or never fully returning.",
      },
      {
        title: "Drying a coat this deep",
        desc: "Water reaches the skin slowly and leaves even more slowly. A Husky that seems dry after towelling is usually soaked at the base, and in Indian humidity a coat left damp under all that wool is asking for skin trouble. Proper high-velocity drying is non-negotiable.",
      },
      {
        title: "Heat management during the session",
        desc: "Working through a Husky coat takes time, and the dog is already carrying an Arctic coat in tropical weather. Sessions need a cool room, cool air and breaks — one more reason we prefer to do this at your home with your fan or AC on.",
      },
      {
        title: "Hair, everywhere, permanently",
        desc: "Even outside coat blow, a Husky sheds more than almost any other breed. Regular professional de-shedding is less a luxury than the only practical way to keep an Indian apartment liveable.",
      },
    ],
    careTips: [
      "Rake the undercoat weekly year-round and two to three times a week during a blow. An undercoat rake plus a wide-tooth comb does more than any brush.",
      "Do not shave, clip short or 'summer trim' a Husky under any circumstances. Rake out the dead undercoat instead — that is what actually reduces the heat load.",
      "Bathe every four to six weeks with a full blow-out, since drying is the part of a Husky bath that matters most.",
      "Give your Husky a cool hard floor, shade and constant water, and walk before sunrise or well after sunset in summer.",
      "Watch the areas where dead coat compacts — behind the shoulders, over the hips, under the tail — and rake those first, not last.",
      "Keep the hair between the paw pads trimmed so it does not hold hot road grit or monsoon mud.",
    ],
    faqs: [
      {
        q: "Everyone tells me to shave my Husky for Indian summers. Are they wrong?",
        a: "Yes, genuinely wrong, and this is the most important thing on this page. The double coat works as insulation in both directions — the guard hairs block sun and the trapped air in the undercoat slows heat reaching the skin. Shaving replaces that with bare, sun-sensitive skin and no air layer. Husky coat is also one of the worst offenders for clipper-damaged regrowth, coming back patchy, woolly or thinner than before, sometimes permanently. What actually cools the dog is removing the dead undercoat so air can move, which is what our Grooming with Extra Care session at Rs. 2,500 is designed to do.",
      },
      {
        q: "How long does a Husky session take?",
        a: "Considerably longer than most breeds — plan for two to three hours during coat blow. The de-shedding alone can take an hour, the bath needs a proper double lather to reach the skin, and the blow-out is slow because the dryer has to push water out of a very deep coat. We would rather book you a longer slot than rush it, so tell us on the call at +91 99905 99189 whether your dog is currently blowing coat.",
      },
      {
        q: "Is my Husky's shedding normal or is something wrong?",
        a: "Enormous, alarming volumes of undercoat coming out over two to three weeks, twice a year, with the coat underneath looking healthy and evenly covered, is entirely normal for this breed. What is not normal is bald patches, symmetrical thinning, flaky or crusty skin, or constant scratching, and those belong with a vet rather than a groomer. We will flag anything we notice on the skin while de-shedding, but we do not diagnose.",
      },
    ],
  },
  {
    slug: "pomeranian",
    name: "Pomeranian",
    species: "dog",
    coatType: "Double coat — long stand-off guard hair over a short, dense, cottony undercoat",
    sheddingLevel: "High",
    groomingFrequency: "Every 4-5 weeks",
    recommendedPackage: "Full Grooming",
    price: "Rs. 2,000",
    title: "Pomeranian Grooming at Home | Petgroomers India",
    description:
      "Pomeranian grooming at your doorstep in India. Careful de-shedding, tidy trims and no shave-downs that risk coat damage. Rs. 2,000, seven days a week.",
    intro:
      "The Pomeranian is India's most popular small dog and, coat-wise, the most frequently mistreated. Everything about a Pom's look — the ruff, the round silhouette, the plumed tail carried over the back — depends on a double coat that stands away from the body, and that standing-off is produced by a soft undercoat pushing the guard hair up. Clip that structure down for summer and you flatten the coat, sometimes for good. In Indian conditions the right approach is de-shedding, thorough drying and light tidying, not a haircut.",
    challenges: [
      {
        title: "Cottony undercoat that mats close to the skin",
        desc: "Pom undercoat is soft and fine, which makes it cling rather than shed cleanly. It felts behind the ears, in the armpits, around the collar line and under the tail plume, and a surface brush will sail straight over all of it.",
      },
      {
        title: "The shave-down risk",
        desc: "A clipped Pomeranian frequently regrows as flat, woolly undercoat with sparse guard hair and never recovers the stand-off coat. Groomers call the look post-clipping alopecia; whatever the label, it is avoidable, and the fix is de-shedding, not clippers.",
      },
      {
        title: "Very small dog, very big coat",
        desc: "There is a tiny body under all that hair, so a Pom feels vulnerable on a grooming table and reacts strongly to heavy handling. Sessions need light restraint, a non-slip surface and a groomer who works patiently.",
      },
      {
        title: "The tail plume and trousers",
        desc: "The plumed tail sits over the back and picks up everything the dog brushes past, and the rear trousers hide the sanitary area entirely. Both need combing through and careful tidying with scissors at every session.",
      },
    ],
    careTips: [
      "Line-brush weekly: part the coat, brush from the skin outwards in sections, and finish with a metal comb to confirm you reached the base.",
      "Ask for a tidy, not a shave. Trimming the feet, the rear and the edges of the coat keeps a Pom neat without touching the coat structure that a clipper would destroy.",
      "Keep the ruff and the area behind the ears combed through — that is where Pom mats almost always start.",
      "Dry the coat fully with a dryer, working from the skin out. A cottony undercoat holds water and a damp Pom in monsoon weather starts to smell within a day.",
      "Trim the hair around the sanitary area and between the pads at every groom; on a coat this dense, hygiene depends on it.",
      "In peak summer give your Pom cool floors, shade and early-morning walks rather than a haircut.",
    ],
    faqs: [
      {
        q: "My groomer offered a 'lion cut' or 'teddy cut' for summer. Should I take it?",
        a: "We would advise against anything that takes a Pomeranian's coat down to the undercoat. Pom coat is well known for failing to regrow properly after a close clip — what comes back is often flat, woolly and patchy, with the guard hairs never returning, and there is no reliable way to reverse it. A thorough de-shed removes the dead undercoat that is actually trapping heat, and a light tidy of the feet, rear and outline keeps the dog looking sharp. If you want a shorter look, ask for a trim that leaves the guard coat intact.",
      },
      {
        q: "Why is my Pomeranian shedding so much for such a small dog?",
        a: "Poms carry a surprisingly heavy undercoat for their size and shed it steadily, with heavier periods usually in spring and after the monsoon. Young Poms also go through a stage — the so-called puppy uglies — where the puppy coat drops out before the adult coat comes in, which looks dramatic and is temporary. Regular line brushing at home plus a professional de-shedding session every four to five weeks keeps the loose coat off your furniture.",
      },
      {
        q: "Mine hates being brushed and snaps. What now?",
        a: "Very common with small dogs who were brushed roughly at some point, usually because someone tried to drag a brush through a mat. Start with short, low-stakes sessions on easy areas, use a detangling spray so the comb glides, and never pull. When you book with us at +91 99905 99189, mention it — we will allocate extra time, work in shorter bursts and let the dog reset between areas rather than restraining through a whole session.",
      },
    ],
  },
  {
    slug: "rottweiler",
    name: "Rottweiler",
    species: "dog",
    coatType: "Short, coarse, flat outer coat with a light undercoat on the neck and thighs",
    sheddingLevel: "Moderate",
    groomingFrequency: "Every 5-6 weeks",
    recommendedPackage: "Full Grooming",
    price: "Rs. 2,000",
    title: "Rottweiler Grooming at Home | Petgroomers India",
    description:
      "Rottweiler grooming at your doorstep across India. Calm handling for a large guarding breed, de-shed, bath, skin check and nails. Rs. 2,000 per session.",
    intro:
      "Rottweilers are short-coated, which fools people into thinking they need nothing. In reality a Rottie carries a light undercoat over the neck and thighs that sheds twice a year, has heavy skin folds around the neck and jowls that hold moisture, and is big enough that nail and paw care stops being optional. The bigger practical issue in India is temperament and logistics: getting a 50-kilo guarding breed into a car and a strange salon is a bad start to any groom, which is why home grooming suits this breed particularly well.",
    challenges: [
      {
        title: "Short coat, real shedding",
        desc: "The undercoat on the ruff and hindquarters drops out seasonally and the black guard hairs shed year-round. They are short, stiff and show up on every light-coloured surface in the house.",
      },
      {
        title: "Neck folds and jowls",
        desc: "Loose skin at the throat and the heavy lips hold drool, water and food. In humid weather those warm creases need drying out after every bath and a regular wipe in between, or they start to smell.",
      },
      {
        title: "Handling a powerful dog safely",
        desc: "A Rottweiler that is uncomfortable does not wriggle, it simply stops cooperating. Sessions depend on calm handling, the owner present, and a groomer who reads the dog rather than forcing a position.",
      },
      {
        title: "A dark coat that hides ticks and skin changes",
        desc: "On black-and-tan, ticks and small skin lesions are genuinely hard to see. Grooming is the routine moment when someone goes over the whole dog under light — the tan points, the ears, the groin and between the toes.",
      },
      {
        title: "Nails and paws under serious weight",
        desc: "Rottweilers are heavy, and overgrown nails alter how they stand. Nails on this breed are thick and dark, so trimming them safely takes a steady hand and good light.",
      },
    ],
    careTips: [
      "Use a rubber curry brush weekly and a de-shedding tool during seasonal shed — on a coat this short, rubber outperforms bristle every time.",
      "Dry the neck folds and the lip creases with a cloth after every bath, and check them weekly in the monsoon.",
      "Bathe every four to six weeks; more often than that on a coarse short coat tends to dry the skin out.",
      "Go over the tan points, ears, armpits and groin under a bright light once a week to spot ticks early on a dark dog.",
      "Trim nails every three to four weeks, taking small amounts at a time since the quick is invisible on dark nails.",
      "Keep grooming sessions predictable and in the same spot at home — routine does more for a large guarding breed than treats do.",
    ],
    faqs: [
      {
        q: "Do Rottweilers really need professional grooming with such a short coat?",
        a: "Less often than a Shih Tzu, but the job is not nothing. A session covers de-shedding, a proper degreasing bath with a full dry, cleaning and drying of the neck and lip folds, external ear cleaning, thick nail trimming and a full-body check for ticks and lumps that is easy to skip at home on a black dog. Every five to six weeks is a sensible rhythm for most Rotties in Indian conditions.",
      },
      {
        q: "My Rottweiler is protective of the house. Can a groomer even come in?",
        a: "In most cases yes, with sensible introductions. Meeting the groomer outside the gate or in a neutral part of the house first, having you visibly relaxed and present, and letting the dog investigate the kit before anything starts makes an enormous difference. Tell us when booking on +91 99905 99189 so we send an experienced handler and allow extra time. If the dog is genuinely reactive to strangers, we will say so honestly rather than push through a session that would set him back.",
      },
      {
        q: "How do I deal with drool marks and smell around the mouth?",
        a: "Wipe the lip folds and the front of the chest with a damp cloth daily and dry them, particularly if your dog drinks enthusiastically or the weather is humid. Saliva sitting in a warm fold is what turns sour, not the dog itself. A degreasing bath every few weeks handles the chest fur. If you notice a strong smell specifically from the mouth, or any swelling or sore in the fold, that is one for the vet.",
      },
    ],
  },
  {
    slug: "indian-pariah-dog",
    name: "Indian Pariah Dog",
    species: "dog",
    coatType: "Short, coarse single coat, close-lying and naturally weather-adapted",
    sheddingLevel: "Low",
    groomingFrequency: "Every 8-10 weeks",
    recommendedPackage: "Spa Bath Package",
    price: "Rs. 1,500",
    title: "Indie Dog Grooming at Home | Petgroomers India",
    description:
      "Indian Pariah and indie dog grooming at your doorstep. The lowest-maintenance coat in India — bath, tick check, ears and nails. Rs. 1,500 per session.",
    intro:
      "We will be straightforward: the Indian Pariah needs less grooming than any other dog on this list. This is a landrace shaped by thousands of years of Indian sun, dust and monsoon, and the short close coat sheds dirt, dries in minutes and does not mat. If a groomer tries to sell you a monthly full-service package for an indie, be sceptical. What an indie genuinely benefits from is an occasional proper bath, serious tick checking, nail trimming for a dog now living on tiles, and ear and paw care.",
    challenges: [
      {
        title: "Ticks, which are the real issue",
        desc: "Most indies spend more time outdoors than pedigree dogs and pick up ticks from grass, compound walls and other street dogs. The short coat makes them easier to find, which is an advantage — but someone has to actually look, especially at the ear base, between the toes and in the groin.",
      },
      {
        title: "Nails that stop wearing down indoors",
        desc: "A street-living indie wears its nails flat on concrete. The same dog adopted into a flat walks on tiles and rugs, and the nails overgrow quickly. This is the change adopters most often miss in the first year.",
      },
      {
        title: "Sun-exposed and scarred skin",
        desc: "Rescued indies often arrive with old scars, thin patches or sun-toughened skin from a street life. Grooming should be gentle around those areas, and anything raw, crusting or spreading is a vet's call, not a groomer's.",
      },
      {
        title: "Fear of handling in rescued adults",
        desc: "A dog who was previously chased, shooed or caught may find restraint frightening even years later. Home grooming with the owner in the room removes most of the triggers a salon would create.",
      },
    ],
    careTips: [
      "Bathe every six to eight weeks, or when the dog is actually dirty. Over-bathing a coat this efficient strips oil for no benefit.",
      "Run your hands over the whole dog weekly, against the lie of the coat, checking the ear base, neck, groin and toes for ticks.",
      "Trim nails every three to four weeks once the dog lives indoors — this is the care item indie adopters most often overlook.",
      "A rubber mitt once a week is all the brushing this coat needs, and most indies enjoy it as attention rather than tolerating it as grooming.",
      "After monsoon walks, rinse and dry the paws and belly; street water is the main cause of paw irritation in city indies.",
      "Do not feel you are neglecting your dog by grooming less. This coat is genuinely low maintenance and that is a feature of the breed.",
    ],
    faqs: [
      {
        q: "How often does an indie dog actually need professional grooming?",
        a: "Realistically, every two to three months, and less than that if your dog stays mostly indoors and clean. That is far less than a Golden or a Shih Tzu and we would rather tell you that than sell you a monthly plan you do not need. Our Spa Bath Package at Rs. 1,500 covers the bath, blow-dry, external ear clean, nail trim, paw tidy and a full tick check, which is essentially the complete grooming requirement for this breed.",
      },
      {
        q: "My rescue indie panics when anyone tries to touch her paws. Any advice?",
        a: "Take it very slowly and separate the handling from the grooming. For a week or two, just touch a paw and reward, with no clippers anywhere in sight, then progress to holding it briefly, then to a single nail. Many rescued indies associate being held with being caught. When you book, tell us on +91 99905 99189 and we will plan a short, low-pressure first session focused on getting her comfortable rather than finishing every nail.",
      },
      {
        q: "Can bathing get rid of ticks?",
        a: "A bath will wash off some loose ticks and makes the remaining ones much easier to spot, but it is not a tick treatment and we would not present it as one. Attached ticks need to be removed properly, and an actual infestation needs a veterinary product chosen for your dog's weight and age — ask your vet rather than buying a spray off a shelf. What we do during a groom is find them, remove what we safely can and show you where they were hiding.",
      },
    ],
  },
  {
    slug: "cocker-spaniel",
    name: "Cocker Spaniel",
    species: "dog",
    coatType: "Silky medium-length coat with heavy feathering on ears, chest, belly and legs",
    sheddingLevel: "Moderate",
    groomingFrequency: "Every 4-6 weeks",
    recommendedPackage: "Full Grooming",
    price: "Rs. 2,000",
    title: "Cocker Spaniel Grooming at Home | Petgroomers",
    description:
      "Cocker Spaniel grooming at your doorstep in India. Feather detangling, ear-area trimming, sanitary tidy and a full blow-dry. Rs. 2,000, 8 AM to 8 PM daily.",
    intro:
      "A Cocker Spaniel is essentially a medium-maintenance dog wearing high-maintenance ears. The silky feathering on the ear leathers, chest, belly and legs is the whole grooming story: it grows long, mats at the base, drags through whatever the dog walks over and takes forever to dry. In Indian monsoon months a Cocker's belly feathering can pick up mud on every single walk, and those long ears hang into the food bowl at every meal.",
    challenges: [
      {
        title: "The ears, first and last",
        desc: "Long, heavy, densely feathered ear leathers seal the canal off from air and trail through food and water. The hair on and around them mats readily and needs thinning and tidying at every groom. Anything beyond cleaning the visible flap — smell, discharge, head shaking — is a vet matter.",
      },
      {
        title: "Belly and leg feathering in the monsoon",
        desc: "The furnishings on the underside are the lowest-hanging part of the dog and the first to soak up wet mud. Left damp and knotted they felt into the coat quickly, which is why many Indian pet parents keep the belly feathering trimmed shorter than the breed standard look.",
      },
      {
        title: "A coat that needs actual scissoring",
        desc: "Unlike a Labrador, a Cocker has a shape that has to be maintained — the topline blended, the feet tidied, the ear fringe thinned, the sanitary area kept short. Skip it for three months and you have a shapeless, matted dog rather than a slightly shaggy one.",
      },
      {
        title: "Oily skin and a distinctive smell",
        desc: "Cockers tend to have oily skin, which in humid weather means the coat gets greasy and smells sooner than you would expect. They usually need a clarifying shampoo and a second lather rather than a single quick wash.",
      },
      {
        title: "Paw furnishings that collect everything",
        desc: "The hair between and around the pads grows thickly and holds grit, mud and grass seed. Trimmed at every session, it makes a visible difference to how clean the dog stays.",
      },
    ],
    careTips: [
      "Comb the ear feathering, chest and leg furnishings with a metal comb two or three times a week — this is where every Cocker mat begins.",
      "Use a snood or clip the ears back at mealtimes, or trim the ear fringe shorter, so the leathers stay out of food and water.",
      "Keep the belly and leg feathering trimmed shorter through the monsoon. It is not the show look, and it is far more comfortable for a dog living in Indian rain.",
      "Dry the ears, armpits and belly thoroughly after every bath and wet walk; those three spots stay damp the longest.",
      "Trim the hair between the paw pads at every session so mud and seeds have less to catch on.",
      "If your Cocker smells greasy within days of a bath, ask for a double lather with a clarifying shampoo rather than bathing more often.",
    ],
    faqs: [
      {
        q: "Should I keep my Cocker in a show coat or a shorter pet trim?",
        a: "For most Indian homes, a pet trim. A full show coat with long belly and leg feathering assumes daily combing and a dog that is not walking through monsoon mud twice a day. A shorter trim on the body with tidied feathering keeps the breed's outline, cuts matting dramatically and makes the dog easier to dry, which matters a great deal in humid weather. Tell our groomer the look you want and we will keep the shape consistent from session to session.",
      },
      {
        q: "What can I do about my Cocker's ears at mealtimes?",
        a: "Practically, three things: use a narrow, deep bowl so the ears fall outside it rather than into it, put on a snood for meals, or keep the ear fringe trimmed shorter. Then wipe the tips after eating. Food drying into ear feathering is one of the main reasons Cocker ears mat at the tips and start to smell, and it is entirely preventable.",
      },
      {
        q: "Is every four weeks too frequent for grooming?",
        a: "Not for this coat. Four to six weeks is the honest interval for a Cocker Spaniel, and four is better during the monsoon when the feathering is constantly wet and dirty. Longer than eight weeks and the mats stop being brushable — at that point the kind option is a shorter clip rather than hours of pulling. Our Full Grooming at Rs. 2,000 covers the bath, dry, trim, ear and sanitary tidy; call +91 99905 99189 to set a regular slot.",
      },
    ],
  },
  {
    slug: "poodle",
    name: "Poodle",
    species: "dog",
    coatType: "Dense, curly, continuously growing single coat that sheds very little",
    sheddingLevel: "Low",
    groomingFrequency: "Every 4-6 weeks, without exception",
    recommendedPackage: "Package Hair Cut Only",
    price: "Rs. 1,500",
    title: "Poodle Grooming & Clipping at Home | Petgroomers",
    description:
      "Poodle grooming at your doorstep in India. The curly coat never stops growing — regular clipping, mat prevention and clean trims from Rs. 1,500 a session.",
    intro:
      "Poodles are the one breed where skipping grooming is not a cosmetic decision. The curly coat grows continuously and sheds almost nothing, so shed hair stays trapped in the curl instead of falling out, and it twists into mats at the skin. Toy, Miniature or Standard, the rule is the same: a Poodle needs clipping on a schedule, permanently, for its whole life. In Indian humidity the curl also holds moisture stubbornly, so drying properly matters as much as the cut.",
    challenges: [
      {
        title: "A coat with no off switch",
        desc: "Poodle hair grows like human hair rather than shedding out in cycles. Left uncut it keeps getting longer and denser until it felts, and there is no version of this breed that maintains itself. Clipping is a recurring, non-negotiable cost of owning one.",
      },
      {
        title: "Shed hair trapped in the curl",
        desc: "Poodles are prized for shedding little, but the hair they do shed cannot escape the curl. It wraps around living hair and forms tight mats close to the skin, particularly behind the ears, in the armpits and along the inner thighs.",
      },
      {
        title: "Curl that holds water",
        desc: "A curly coat traps moisture at the skin and dries slowly. In coastal and monsoon-heavy cities this is the main reason a Poodle needs a genuine forced-air dry and a straightened blow-out rather than a towel and a fan.",
      },
      {
        title: "Face, feet and tail clipping",
        desc: "The muzzle, the feet and the base of the tail are clipped close on most Poodle trims. These are fine, fiddly areas that need a steady hand and a calm dog, and they are the parts that make a Poodle look like a Poodle.",
      },
      {
        title: "Hairy ear canals",
        desc: "Poodles grow hair inside the ear opening, which restricts airflow in a breed that already has drop ears. Grooming keeps the surrounding area tidy and clean. Plucking, medicating or treating an inflamed ear is a veterinary decision, not a default grooming step.",
      },
    ],
    careTips: [
      "Book a clip every four to six weeks and hold the schedule. With this coat, a missed cycle costs you far more than the appointment would have.",
      "Comb to the skin with a metal comb two or three times a week, in sections — a slicker alone glides across the top of the curl and misses the mats underneath.",
      "Ask for a shorter, practical trim in the Indian summer. Unlike a double-coated breed, a Poodle loses nothing by being clipped short — the coat regrows normally.",
      "Dry the coat fully and to the skin. Curl plus humidity plus a damp base is the single most common source of skin trouble in Indian Poodles.",
      "Pay attention to behind the ears and the armpits between grooms; those two areas mat before anywhere else on the dog.",
      "Keep the feet clipped between the pads — matted foot hair on a Poodle makes tiles slippery and traps grit.",
    ],
    faqs: [
      {
        q: "Why is Package Hair Cut Only the recommendation for a Poodle?",
        a: "Because the clip is the thing this breed genuinely cannot skip. Many Poodle parents bathe at home and just need the coat kept in shape on a four to six week rhythm, and our Package Hair Cut Only at Rs. 1,500 covers exactly that. If you would rather have the bath, blow-out, nails, ear cleaning and sanitary trim done in the same visit, Full Grooming at Rs. 2,000 is the better value. Tell us which on the call and we will not push you up.",
      },
      {
        q: "Poodles do not shed — so why does mine still get matted?",
        a: "Precisely because they do not shed. In a Labrador, dead hair falls out onto your floor. In a Poodle, it stays wound into the curl next to living hair, and as the dog moves, that mixture twists tighter and tighter until it becomes a mat pressed against the skin. Low shedding and low maintenance are two very different things, and the Poodle is the clearest example of the difference.",
      },
      {
        q: "What are the common Poodle trims and which suits an Indian climate?",
        a: "The practical everyday options are the puppy clip, an even length all over; the teddy bear or lamb trim, short on the body with a rounded head; and a short summer clip, which is the most comfortable choice for a Delhi or Chennai summer. The elaborate continental show trim is not something we would recommend for a pet Poodle living in this climate. Whichever you choose, we keep the same shape at each visit so it grows out evenly.",
      },
    ],
  },
  {
    slug: "dachshund",
    name: "Dachshund",
    species: "dog",
    coatType: "Three varieties — smooth, long-haired and wire-haired, each groomed differently",
    sheddingLevel: "Moderate",
    groomingFrequency: "Every 6-8 weeks for smooth coats, 4-6 for long and wire",
    recommendedPackage: "Spa Bath Package",
    price: "Rs. 1,500",
    title: "Dachshund Grooming at Home | Petgroomers India",
    description:
      "Dachshund grooming at your door in India — smooth, long-haired and wire-haired coats, ear care and careful low-to-ground handling. From Rs. 1,500.",
    intro:
      "The Dachshund is really three grooming jobs in one breed. A smooth Dachshund needs little more than a rub-down and a bath; a long-haired one has feathering on the ears, chest, legs and tail that tangles like a small spaniel; a wire-haired one has a harsh jacket plus eyebrows and a beard that need stripping or trimming to keep their texture. What they all share is a body that runs a few centimetres above Indian pavements, so the chest and belly take the brunt of every dusty or wet walk.",
    challenges: [
      {
        title: "Three coats, three routines",
        desc: "Smooth coats want a rubber mitt and a bath. Long coats need line-combing and feather trimming. Wire coats need hand-stripping or careful trimming to keep the harsh texture, since clipping a wire coat softens it over time. Booking without saying which one you have makes for an awkward session.",
      },
      {
        title: "Ground clearance, or the lack of it",
        desc: "The chest, belly and lower legs skim every surface the dog walks on, which in Indian cities means dust in summer and dirty water in the monsoon. This underside needs cleaning far more often than the back does.",
      },
      {
        title: "Long drop ears on a low dog",
        desc: "Dachshund ears hang, trap warmth and come into contact with the ground when the dog sniffs, which it does constantly. Keeping the flaps clean and dry is routine; anything red, smelly or painful is for a vet.",
      },
      {
        title: "Handling a long-backed dog",
        desc: "A Dachshund should be lifted with the chest and hindquarters supported together, never scooped under the front legs, and should not be encouraged to jump off a grooming table. Good handling here is a safety matter, not just comfort.",
      },
    ],
    careTips: [
      "Identify your variety and groom for it — mitt for smooth, metal comb and line-brushing for long, stripping or careful trimming for wire.",
      "Wipe the chest and belly after walks. On a dog this low, the underside is the part that actually gets dirty.",
      "On long-haired Dachshunds, comb the ear fringes, chest and tail plume twice a week; those mat first.",
      "On wire-haired Dachshunds, avoid routine close clipping if you want to keep the harsh jacket — clipping progressively softens and fades a wire coat.",
      "Support the whole body whenever you lift your Dachshund, and keep the table time short and well-supervised.",
      "Trim nails every three to four weeks; long nails change the angle of an already unusual front-leg structure.",
    ],
    faqs: [
      {
        q: "Which variety of Dachshund is easiest to groom?",
        a: "The smooth coat, comfortably. It is a weekly rubber mitt, a bath every six to eight weeks, ears, nails and a wipe of the underside. The long-haired variety is roughly Cocker Spaniel level work because of the feathering, and the wire-haired sits in between but needs someone who understands stripping rather than defaulting to clippers. Tell us which you have when you call +91 99905 99189 and we will quote and time the session accordingly.",
      },
      {
        q: "What is hand-stripping and does my wire Dachshund need it?",
        a: "Hand-stripping means pulling out the dead outer hairs by hand so new harsh ones grow in, which is how a wire coat keeps its texture and colour. Clipping cuts those hairs off instead, and over several sessions the coat gets softer, paler and fluffier. If you care about the classic wiry jacket, stripping is the route; if you simply want a tidy, comfortable pet, trimming is perfectly acceptable and we will not pretend otherwise.",
      },
      {
        q: "Is a grooming table safe for a Dachshund?",
        a: "With supervision, yes — we never leave a dog unattended on a table, we keep the surface non-slip and the session short, and we lift the dog on and off supporting the chest and rear together. For anxious or older Dachshunds we are happy to work at floor level or on a low surface instead. Home grooming helps here too, since there is no car journey and no jumping in and out of vehicles.",
      },
    ],
  },

  /* ------------------------------------------------------------------ cats */
  {
    slug: "persian-cat",
    name: "Persian Cat",
    species: "cat",
    coatType: "Very long, fine double coat with a dense undercoat that mats readily",
    sheddingLevel: "High",
    groomingFrequency: "Every 4-6 weeks, with daily combing at home",
    recommendedPackage: "Grooming with Extra Care",
    price: "Rs. 2,500",
    title: "Persian Cat Grooming at Home | Petgroomers India",
    description:
      "Persian cat grooming at your doorstep in India. Gentle de-matting, eye-area cleaning for a flat face, sanitary trim and quiet handling. Rs. 2,500 a visit.",
    intro:
      "The Persian is the most grooming-dependent cat in India, and the two reasons are its coat and its face. The coat is long, fine and backed by a dense undercoat that felts against the skin within days if it is not combed — and unlike a dog, a matted cat will keep grooming at the mat with a rough tongue and make it worse. The flat, brachycephalic face means the tear ducts are shortened, so moisture runs down the face instead of draining, wetting the hair below the eyes all day long.",
    challenges: [
      {
        title: "Mats that form faster than owners expect",
        desc: "Armpits, the ruff, the belly, the britches behind the hind legs and around the tail base are where Persian coat felts. A cat with a solid mat is genuinely uncomfortable, and because cats hide discomfort, it is usually well established before anyone notices.",
      },
      {
        title: "A wet face, every day",
        desc: "The short muzzle and altered tear drainage mean the hair under the eyes stays damp and stains reddish-brown. The grooming answer is daily gentle wiping and drying, and keeping that hair trimmed short. Persistent heavy discharge, squinting or a cloudy eye is a vet visit.",
      },
      {
        title: "Hairballs from all that swallowed coat",
        desc: "A Persian self-grooming a long coat swallows a lot of hair. Regular professional de-shedding removes loose coat before the cat ingests it, which is one of the most useful and least obvious benefits of grooming a longhaired cat.",
      },
      {
        title: "Litter and waste in the britches",
        desc: "Long hair around the rear catches litter and faeces, which is unpleasant for everyone and genuinely hard for a flat-faced cat to clean itself. A sanitary trim at each session solves a problem most owners are too polite to mention.",
      },
      {
        title: "Stress, which matters more in cats than dogs",
        desc: "Cats do not travel well and do not recover quickly from a frightening salon visit. A short, quiet, low-restraint session at home in a familiar room is not a luxury for this species — it is the difference between a cat that tolerates grooming and one that never will again.",
      },
    ],
    careTips: [
      "Comb daily with a wide-tooth metal comb, in short sessions, starting with the areas your cat enjoys and finishing with the armpits and britches.",
      "Wipe under the eyes every morning with a soft damp cloth and dry the area — dryness is what limits staining, not endless wiping.",
      "Keep the hair under the eyes, around the rear and between the paw pads trimmed short. These three trims prevent most Persian grooming problems.",
      "Never cut a mat off with scissors. Cat skin is thin, loose and tents up into the mat, and scissor injuries to cats during home de-matting are far more common than people realise.",
      "Keep sessions short and stop before your cat has had enough. Five good minutes daily beats one thirty-minute battle a week.",
      "Ask for a lion cut or a shorter body clip in peak summer if your cat mats persistently — a Persian's coat regrows normally, unlike a double-coated dog's.",
    ],
    faqs: [
      {
        q: "My Persian is matted all over. Is a lion cut cruel?",
        a: "It is usually the kind option. Once a Persian coat has felted into a solid layer, combing it out means hours of pulling on thin, sensitive skin, and cats will not sit through that the way dogs sometimes will. A clip to a short even length done with a careful hand removes the discomfort at once and the coat grows back normally — cats have no double-coat regrowth problem. What we will not do is work through it if the skin underneath is raw or sore; that needs a vet first.",
      },
      {
        q: "Can I stop the brown tear staining under my Persian's eyes?",
        a: "You can reduce it a lot, though with a flat-faced cat you will rarely eliminate it. The staining comes from moisture sitting on the hair all day, so the routine that works is wiping with plain water or a cat-safe eye wipe every morning, drying properly afterwards, and keeping the hair below the eye trimmed short so there is less to stay wet. If the discharge is thick, yellow or green, if one eye is worse than the other, or if your cat is squinting, that is a veterinary issue and no grooming routine will fix it.",
      },
      {
        q: "Do Persians actually need bathing?",
        a: "More than most cats, yes. A long dense coat gets greasy at the base, particularly around the ruff and the tail, and self-grooming does not reach it. A bath every four to six weeks with a proper blow-dry keeps the coat separating rather than clumping — and the drying is the essential part, because a longhaired cat left damp in Indian humidity mats almost immediately. Our groomer brings everything to your home so there is no carrier and no car journey.",
      },
    ],
  },
  {
    slug: "siamese-cat",
    name: "Siamese Cat",
    species: "cat",
    coatType: "Very short, fine, close-lying single coat with almost no undercoat",
    sheddingLevel: "Low",
    groomingFrequency: "Every 8-10 weeks",
    recommendedPackage: "Spa Bath Package",
    price: "Rs. 1,500",
    title: "Siamese Cat Grooming at Home | Petgroomers India",
    description:
      "Siamese cat grooming at your doorstep across India. Short-coat care, nail trimming, ear cleaning and calm handling for a vocal breed. Rs. 1,500 a session.",
    intro:
      "A Siamese has possibly the easiest coat of any cat we handle — short, fine, close to the body and with no real undercoat to mat. What a Siamese does have is opinions. This is a loud, intelligent, intensely people-focused breed that will tell you exactly how it feels about nail clippers, and the difference between a good session and a bad one is almost entirely about handling and pace rather than coat work.",
    challenges: [
      {
        title: "Very little coat and thin skin",
        desc: "With minimal undercoat, a Siamese has less padding than a longhaired cat and feels pressure more. Grooming tools need to be soft — a rubber brush or grooming glove rather than a slicker, which can scratch a coat this fine.",
      },
      {
        title: "A cat that negotiates loudly",
        desc: "Siamese are famously vocal and will protest well before they are actually distressed. Reading the difference between a cat complaining and a cat genuinely frightened takes experience, and getting it wrong once can make a cat refuse grooming for good.",
      },
      {
        title: "Nails that need regular attention",
        desc: "Active indoor Siamese use their claws constantly on furniture and climbing, and a trim every three to four weeks is the most frequently needed service for this breed — more useful in practice than a bath.",
      },
      {
        title: "Large ears that collect wax and dust",
        desc: "The breed's oversized ears are open and exposed, so in dusty Indian cities they pick up grime visibly. Cleaning the visible part of the ear flap is straightforward; discharge, a strong smell or head shaking needs a vet.",
      },
    ],
    careTips: [
      "Use a rubber grooming glove or a very soft brush once a week — this coat does not need, and does not tolerate, aggressive tools.",
      "A damp chamois or soft cloth wiped over the coat gives a Siamese a noticeable shine and removes dust between grooms.",
      "Trim nails every three to four weeks, taking only the clear tip and staying well clear of the pink quick.",
      "Wipe the visible inner ear flap fortnightly with a soft dry pad; the large ears show dust quickly in Indian cities.",
      "Bathe only occasionally — every couple of months at most. This coat stays clean on its own and over-bathing dries the skin.",
      "Groom in short, upbeat sessions with the cat on a surface it chose. Siamese cooperate far better when they feel they have a say.",
    ],
    faqs: [
      {
        q: "Does a Siamese need grooming at all, given how short the coat is?",
        a: "The coat needs very little, and we will say so plainly. What is worth doing is regular nail trimming, ear cleaning, a check of the skin and coat condition, and an occasional bath to lift dust and excess oil — which in most Indian homes works out to a session every two to three months rather than monthly. Our Spa Bath Package at Rs. 1,500 covers all of it. If anyone quotes you a fortnightly grooming plan for a Siamese, ask what exactly is being groomed.",
      },
      {
        q: "My Siamese screams the moment I pick up the clippers. Is he in pain?",
        a: "Almost certainly not — he is objecting, and Siamese object at volume. The useful approach is to separate the objection from actual distress: look at the body, not the voice. Flattened ears, a lashing tail, dilated pupils and attempts to escape mean stop; loud complaining while the body stays loose usually means carry on calmly and finish quickly. Doing one or two nails at a time across the day often works far better than insisting on all eighteen in one sitting.",
      },
      {
        q: "Why does my Siamese shed at all if the coat is so short?",
        a: "Every cat sheds. A Siamese simply sheds short, fine, pale hairs that are less visible than a Persian's tufts, and in Indian homes without a real winter the shedding stays steady year-round rather than peaking sharply. A weekly rubber glove session removes most of it. If you notice bald patches, broken hair, or your cat over-grooming one area until it thins, that is a skin or behaviour matter for a vet rather than a grooming one.",
      },
    ],
  },
  {
    slug: "maine-coon",
    name: "Maine Coon",
    species: "cat",
    coatType:
      "Long, shaggy, water-resistant coat, uneven in length with a dense ruff and tail plume",
    sheddingLevel: "High",
    groomingFrequency: "Every 4-6 weeks, with combing two or three times a week",
    recommendedPackage: "Grooming with Extra Care",
    price: "Rs. 2,500",
    title: "Maine Coon Grooming at Home | Petgroomers India",
    description:
      "Maine Coon grooming at your doorstep in India. De-matting a big shaggy coat, tail plume and britches care, calm two-hand handling. Rs. 2,500 per visit.",
    intro:
      "A Maine Coon is a large cat with a coat designed for New England winters, being kept in a country where the ambient temperature is usually above thirty degrees. The coat is shaggy rather than silky, longer over the britches, belly and tail than across the shoulders, and slightly water-resistant, which means it resists shampoo going in and water coming out. Add the sheer size of the animal — a big Coon needs two hands and real strength to hold safely — and this becomes the most physically demanding cat groom we do.",
    challenges: [
      {
        title: "Uneven coat length that mats in the long parts",
        desc: "The shoulders stay short and tidy while the belly, britches and tail carry far more coat, and that is where mats form. Owners who brush the back and stop never touch the areas that actually need it.",
      },
      {
        title: "The tail plume",
        desc: "A Maine Coon's tail is its signature and a magnet for tangles, litter and debris. It needs gentle combing along its length, worked from the tip towards the base rather than yanked through.",
      },
      {
        title: "Size, weight and safe restraint",
        desc: "A six-kilo cat that objects is a serious handful, and cats cannot be restrained the way dogs can. Sessions are built around short stretches, frequent repositioning and stopping before the cat escalates.",
      },
      {
        title: "A cold-climate coat in an Indian summer",
        desc: "Coons genuinely feel the heat here. The right response is removing dead coat so air circulates, plus cool floors, shade and water — and for persistently matting cats, a shorter summer clip is a reasonable option since cat coat regrows normally.",
      },
      {
        title: "Tufted paws and ears",
        desc: "The tufts between the toes and on the ear tips are part of the breed's look and they catch litter, dust and debris. Keeping the paw tufts trimmed level with the pads makes a real difference to what gets tracked around the house.",
      },
    ],
    careTips: [
      "Comb two or three times a week with a long-toothed metal comb, and start with the belly, britches and tail rather than the back.",
      "Work the tail from the tip upwards in small sections; pulling a comb down through a plume from the base is how cats learn to hate grooming.",
      "Trim the tufts between the paw pads so litter and dust stop travelling with the cat.",
      "Dry thoroughly after any bath — a coat this dense stays wet at the base for a long time and mats as it dries in humid weather.",
      "Consider a shorter body clip through peak summer if your Coon mats repeatedly. Cat coat is not a dog double coat and it regrows without damage.",
      "Keep sessions to ten or fifteen minutes. With a cat this size, several short sessions beat one long one every time.",
    ],
    faqs: [
      {
        q: "My Maine Coon looks fine on top but has mats underneath. How did I miss them?",
        a: "Because you were brushing where you can see. Maine Coon coat is short and tidy across the shoulders and long and dense on the belly, in the britches behind the hind legs, in the ruff and at the tail base — and those are exactly the places a cat lying on your lap does not present to you. Roll the cat gently or comb while it stands, and check those five areas specifically. A weekly two-minute check there prevents most of the de-matting work we get called for.",
      },
      {
        q: "Can a cat this big really be groomed without sedation?",
        a: "In almost every case, yes. What it requires is time, a familiar room, no carrier, no car ride and a groomer who stops at the first genuine warning rather than pushing to finish. We break a Maine Coon session into short stretches with breaks and let the cat move between them. Sedation is a veterinary decision for extreme cases and is never something a grooming service should arrange or suggest on its own.",
      },
      {
        q: "Is it fair to keep a Maine Coon in an Indian climate?",
        a: "Many people do it successfully, but the coat needs more work here than it would in a cooler country. Practically that means combing two or three times a week instead of weekly, professional de-shedding every four to six weeks, an air-conditioned or genuinely well-ventilated room in summer, cool hard surfaces to lie on, and being willing to accept a shorter summer clip if the coat starts felting. Handled that way, Coons manage well in Indian homes.",
      },
    ],
  },
  {
    slug: "bengal-cat",
    name: "Bengal Cat",
    species: "cat",
    coatType: "Short, dense, unusually soft pelt-like coat with a glossy finish",
    sheddingLevel: "Low",
    groomingFrequency: "Every 6-8 weeks",
    recommendedPackage: "Spa Bath Package",
    price: "Rs. 1,500",
    title: "Bengal Cat Grooming at Home | Petgroomers India",
    description:
      "Bengal cat grooming at your door in India. Short pelted coat care, nail trimming and confident handling for a high-energy breed. Rs. 1,500 per session.",
    intro:
      "Bengals have a coat unlike any other domestic cat — short, unusually dense and lying so flat that it feels more like a pelt than fur, with a natural gloss to the rosetted markings. It sheds little and mats essentially never, so coat maintenance is minimal. The real grooming challenge with a Bengal is behavioural: this is an athletic, high-drive, endlessly curious cat that has no intention of standing still, and many of them actively like water, which makes bath time interesting in an entirely different way.",
    challenges: [
      {
        title: "A pelted coat that needs a light touch",
        desc: "Bengal fur lies so close to the body that heavy brushing does nothing useful and can irritate the skin. A rubber brush or grooming glove used weekly is genuinely all this coat asks for.",
      },
      {
        title: "Energy levels that outlast the groomer",
        desc: "Bengals climb, jump and investigate constantly. Sessions work best short and in a small, closed, boring room with nothing to leap onto — a bathroom is usually ideal.",
      },
      {
        title: "Nails on a serious climber",
        desc: "Bengals use their claws far more than most indoor cats, on furniture, curtains and anything vertical. Regular nail trimming is the single most practical grooming service for this breed, both for the cat and for your upholstery.",
      },
      {
        title: "Coat dulling in dusty cities",
        desc: "The glossy sheen is a big part of a Bengal's appeal, and in dusty Indian cities it goes flat between grooms. An occasional bath and a chamois wipe restores it; a persistently dull, greasy or flaky coat is worth a vet's opinion.",
      },
    ],
    careTips: [
      "Use a rubber grooming glove once a week. Slickers and pin brushes are unnecessary on a pelt-like coat and can scratch the skin beneath it.",
      "Trim nails every three to four weeks and provide a tall sturdy scratching post — with this breed, grooming and furniture survival are the same project.",
      "Bathe every couple of months at most. Many Bengals genuinely enjoy water, which makes it easier than with most cats, but the coat rarely needs it.",
      "Wipe the coat with a damp chamois between grooms to lift city dust and bring the gloss back.",
      "Give a Bengal something to do before a grooming session — a tired Bengal is a cooperative Bengal.",
      "Check the ears fortnightly and clean only the visible flap; leave anything deeper alone.",
    ],
    faqs: [
      {
        q: "Bengals barely shed. Is professional grooming worth it?",
        a: "For the coat alone, not often — every six to eight weeks is plenty. Where it earns its place is nails, ears, a proper bath to restore the gloss that Indian dust dulls, and a full check-over of the skin by someone who handles cats all day. Our Spa Bath Package at Rs. 1,500 covers that, and we would rather you booked it four or five times a year than monthly for no reason.",
      },
      {
        q: "My Bengal jumps in the shower with me. Can I just bathe him myself?",
        a: "If he is one of the water-loving ones, yes, and you are luckier than most cat owners. Use a cat-specific shampoo, keep the water lukewarm rather than hot, avoid the face and ears entirely, and dry him properly afterwards — a dense coat left damp in humid weather is where skin problems begin. What most owners still find hard alone is the nail trim and the ear check, and those are worth booking.",
      },
      {
        q: "How do I stop him shredding the sofa?",
        a: "Keeping the nails trimmed short is the grooming half of it and it makes an immediate difference to the damage done. The other half is providing better targets — a tall, stable, sisal-covered post that lets him stretch fully, ideally placed next to whatever he currently attacks. Declawing is not a grooming option and is not something we will discuss; it is an amputation and is banned in many countries.",
      },
    ],
  },
  {
    slug: "indian-domestic-shorthair",
    name: "Indian Domestic Shorthair",
    species: "cat",
    coatType: "Short, fine, close-lying coat naturally suited to a hot climate",
    sheddingLevel: "Moderate",
    groomingFrequency: "Every 8-10 weeks",
    recommendedPackage: "Spa Bath Package",
    price: "Rs. 1,500",
    title: "Indian Cat Grooming at Home | Petgroomers India",
    description:
      "Grooming for Indian domestic shorthair cats at your doorstep. Low-maintenance coat, nails, ears, tick checks and gentle handling. Rs. 1,500 per session.",
    intro:
      "The billi most Indian families actually live with is a domestic shorthair, and she is built for this climate in a way a Persian or a Maine Coon simply is not. The coat is short, fine and lies flat, it does not mat, and she keeps most of it clean herself. Grooming for an Indian shorthair is therefore about the things self-grooming cannot handle: nails that no longer wear down indoors, ticks and fleas picked up on the balcony or in the building compound, and the occasional bath when she gets into something.",
    challenges: [
      {
        title: "Fleas and ticks from a semi-outdoor life",
        desc: "Many Indian shorthairs have access to a terrace, compound or open window and meet other cats. The short coat means parasites are easier to find — but somebody has to check the neck, under the chin, around the ears and the base of the tail.",
      },
      {
        title: "Nails with nothing to wear them on",
        desc: "A cat with outdoor access files her claws naturally. An indoor-only or apartment cat does not, and overgrown claws can curl and catch on fabric. This is the most commonly needed service for this cat.",
      },
      {
        title: "Semi-feral or street-rescued temperament",
        desc: "Many are rescued as adults and have strong views about being handled. Grooming has to be built around trust, done at home, in short pieces, with the option to stop — a cat pushed too far remembers it for years.",
      },
      {
        title: "Steady shedding in a climate with no real winter",
        desc: "Without a distinct cold season the shedding cycle never fully resets, so Indian shorthairs shed a low steady amount year-round rather than in a dramatic seasonal blow. It is easy to manage and easy to ignore until the sofa is covered.",
      },
    ],
    careTips: [
      "A rubber grooming glove once a week removes most loose hair and reduces the amount your cat swallows while self-grooming.",
      "Trim nails every three to four weeks for indoor cats, clipping only the clear tip and never near the pink quick.",
      "Check for ticks and flea dirt weekly around the neck, under the chin, behind the ears and at the base of the tail.",
      "Bathe rarely — two or three times a year, or when she is genuinely dirty. This coat is efficient and frequent bathing only dries the skin.",
      "Wipe the visible part of the ear flap occasionally, and leave the canal completely alone.",
      "For a nervous rescue, get her used to being touched on the paws and ears in normal quiet moments so grooming day is not the first time.",
    ],
    faqs: [
      {
        q: "Do Indian cats need grooming, or is it only for pedigree breeds?",
        a: "They need less, not none, and grooming services should be honest about that. An Indian shorthair keeps her own coat in good order, so what she actually benefits from is nail trimming, ear checks, parasite checks and a bath a few times a year. That is a session every two to three months at most. If your cat is elderly, overweight or arthritic she may no longer reach her own back and rear, and that is when regular grooming genuinely starts to matter.",
      },
      {
        q: "She was a street rescue and hides from everyone. Should I even try?",
        a: "Start at home and start small. Do not schedule a full session for a cat who is still hiding — build up over weeks with brief touch-and-treat moments, and let her stay in a room she feels safe in. When you do book, tell us on +91 99905 99189 and the groomer will come prepared for a short, quiet visit, work at floor level and stop early if needed. Getting the nails done and nothing else is a perfectly good first session.",
      },
      {
        q: "I found small black specks in her fur. What are they?",
        a: "Most likely flea dirt, which is digested blood. Put some on a damp white tissue — if it smears reddish-brown, that confirms fleas. We will check thoroughly and bathe her during a session, which removes a great deal of it, but actually clearing an infestation needs a vet-recommended product chosen for a cat and for her weight, plus treating the bedding and the home. Never use a dog flea product on a cat; some are seriously toxic to them.",
      },
    ],
  },
];

export const breedsBySlug: Record<string, Breed> = Object.fromEntries(
  breeds.map((b) => [b.slug, b]),
);
