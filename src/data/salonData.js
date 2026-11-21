export const SALON_DATA = {
  name: "R Riya Beauty Salon",
  shortName: "R'riya Salon",
  ownerName: "Riya",
  ownerRole: "Founder & Creative Bridal Director",
  tagline: "Beautifying YOU The Way You Love!",
  subTagline: "Where Elegance Meets Innovation • Vadodara's Exclusive Ladies-Only Pamper Haven",
  phone: "+91 97256 56531",
  rawPhone: "9725656531",
  phoneFormatted: "097256 56531",
  whatsapp: "919725656531",
  email: "hello@rriyabeautysalon.com",
  instagram: "@rriyabeautysalon",
  instagramUrl: "https://www.instagram.com/rriyabeautysalon/",
  instagramFollowers: "11K+",
  rating: 4.9,
  reviewsCount: "2,939",
  reviewsCountNumeric: 2939,
  happyClients: "25,000+",
  yearsExperience: "8+",
  address: "Ground Floor, Shop No. 1, 2, 3, 4, Crossroads, Near Mehsana Nagar Circle, LG Nagar Branch, Nizampura, Vadodara, Gujarat 390002",
  landmark: "Near Mehsana Nagar Garba Ground & Devdeep Complex",
  city: "Vadodara, Gujarat",
  hours: "10:00 AM – 08:00 PM",
  openHour: 10,
  closeHour: 20,
  days: "Monday – Sunday (All 7 Days Open)",
  popularTimes: "2:00 PM – 8:00 PM (Usually as busy as it gets at 6 PM)",
  averageVisit: "30 min to 1.5 hr",
  googleMapsUrl: "https://www.google.com/maps/place/R+Riya+Beauty+Salon/data=!4m2!3m1!1s0x395fc9db4a20335f:0xc2905cfd3c17b722",
  embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.643033860522!2d73.1812!3d22.3362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc9db4a20335f%3A0xc2905cfd3c17b722!2sR%20Riya%20Beauty%20Salon!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const HIGHLIGHT_STATS = [
  { value: "4.9 ★", label: "Google Rating", sub: "From 2,939+ Verified Reviews" },
  { value: "100%", label: "Ladies-Only", sub: "Private, Safe & Hygienic Lounge" },
  { value: "11K+", label: "Insta Community", sub: "Aesthetic transformations @rriyabeautysalon" },
  { value: "25k+", label: "Happy Beauties", sub: "Satisfied clients across Vadodara" }
];

export const SERVICE_CATEGORIES = [
  { id: "all", name: "✨ All Specials" },
  { id: "hair", name: "💇‍♀️ Hair Studio & Botox" },
  { id: "skin", name: "🌸 Hydra & Skin Glow" },
  { id: "bridal", name: "👰 Bridal & Makeover" },
  { id: "nails", name: "💅 Nails & Extensions" },
  { id: "waxing", name: "✨ Rica Wax & Care" }
];

export const SERVICES = [
  {
    id: "hair-botox",
    category: "hair",
    name: "Luxury Hair Botox Treatment",
    tagline: "Intense deep repair, glass shine & frizz elimination",
    price: 3499,
    originalPrice: 4999,
    duration: "120 mins",
    popular: true,
    badge: "Most Loved 💖",
    description: "Infuses keratin, collagen, and argan oil to revive damaged or chemically treated hair. Leaves hair touchably silky and glossy without harsh chemicals.",
    includes: ["Deep clarifying wash", "Botox nano-infusion", "Heat seal treatment", "Serum styling"]
  },
  {
    id: "rich-brunette-balayage",
    category: "hair",
    name: "Signature Rich Brunette / Balayage",
    tagline: "Effortless luxury & multidimensional glossy finish",
    price: 3999,
    originalPrice: 5500,
    duration: "150 mins",
    popular: true,
    badge: "Trending Look ✨",
    description: "Our viral rich brunette blend! Subtle caramel, mocha, and honey highlights blended seamlessly with root-shadowing for natural grown-out beauty.",
    includes: ["Custom shade consultation", "Foilayage/Balayage hand-painting", "Gloss toner", "Blowout styling"]
  },
  {
    id: "nashi-argan-spa",
    category: "hair",
    name: "Nashi Argan Luxury Hair Spa",
    tagline: "Pure Italian organic argan nourishment for stressed hair",
    price: 1499,
    originalPrice: 1999,
    duration: "60 mins",
    popular: false,
    badge: "Organic Ritual 🌿",
    description: "Exclusive Nashi Argan organic formula imported from Italy to revitalize dry scalp, banish split ends, and give a mirror-like shine.",
    includes: ["Scalp steam therapy", "Deep fiber mask", "Acupressure head massage", "Hydrating leave-in mist"]
  },
  {
    id: "adv-haircut-styling",
    category: "hair",
    name: "Advanced Layered Cut + Glam Blowout",
    tagline: "Bouncy 90s blowout or face-framing butterfly layers",
    price: 699,
    originalPrice: 999,
    duration: "45 mins",
    popular: true,
    badge: "Best In Baroda ✂️",
    description: "Personalized face-contour haircut with shampoo, conditioning, and signature celebrity bounce blowout.",
    includes: ["Hair texture analysis", "Deep conditioning wash", "Precision cut", "Curtain bang/Layer styling"]
  },
  {
    id: "hydra-glow-facial",
    category: "skin",
    name: "7-Step Clinical Hydra Facial",
    tagline: "Vacuum pore extraction & antioxidant hyaluronic surge",
    price: 2499,
    originalPrice: 3800,
    duration: "75 mins",
    popular: true,
    badge: "Red Carpet Glow 🌟",
    description: "Deep vortex pore cleaning, blackhead suction, gentle peel, ultrasound infusion of vitamins, and cryo-cooling dome for instantaneous glass skin.",
    includes: ["Vortex suction", "Gentle glycolic peel", "Hyaluronic serum infusion", "Cold hammer therapy", "Rose hydrojelly mask"]
  },
  {
    id: "o3-bridal-radiance",
    category: "skin",
    name: "O3+ Bridal Radiance & D-Tan Ritual",
    tagline: "Instant bridal illumination & hyperpigmentation clearance",
    price: 1999,
    originalPrice: 2800,
    duration: "60 mins",
    popular: false,
    badge: "Bride's Choice 👰",
    description: "Award-winning O3+ formulation designed to brighten dull skin, even out skin tone, and fade sun tan with pure whitening concentrates.",
    includes: ["Enzyme scrub", "Meladerm whitening serum", "De-tan mask", "Cooling jade roller massage"]
  },
  {
    id: "korean-glass-skin",
    category: "skin",
    name: "Korean Glass Glow & Rice Water Polish",
    tagline: "Dewy, poreless and hydrated radiant finish",
    price: 1699,
    originalPrice: 2200,
    duration: "60 mins",
    popular: false,
    badge: "Dewy Finish 💧",
    description: "Infuses rice ferment filtrate and centella asiatica to soothe inflammation and leave the skin with an ethereal glazed doughnut shine.",
    includes: ["Double cleansing", "Rice polishing scrub", "Sheet mask with LED light therapy", "Ceramide barrier cream"]
  },
  {
    id: "signature-bridal-hd",
    category: "bridal",
    name: "Royal HD Bridal Makeover Package",
    tagline: "Riya’s signature timeless bridal look for your big day",
    price: 11999,
    originalPrice: 16000,
    duration: "180 mins",
    popular: true,
    badge: "Signature Art 👑",
    description: "Complete royal bridal styling by our lead makeup master. Includes sweat-proof HD makeup, custom eyelashes, jewelry setting, dupatta draping, and intricate hairstyling.",
    includes: ["High-Definition longwear makeup", "3D Mink eyelashes", "Designer hair updos", "Dupatta & lehenga styling", "Fresh floral accessories assistance"]
  },
  {
    id: "engagement-sangeet-glam",
    category: "bridal",
    name: "Engagement / Sangeet Glam Look",
    tagline: "Soft glam shimmer, cut-crease eyes & Hollywood waves",
    price: 4999,
    originalPrice: 7000,
    duration: "90 mins",
    popular: true,
    badge: "Party Glamour ✨",
    description: "Flawless party makeup designed for festive night lighting, with luminous skin, winged liner or smoky eyes, and sculpted cheekbones.",
    includes: ["Air-touch HD base", "Custom eye art", "Hollywood waves or messy bun", "Saree/Lehenga draping"]
  },
  {
    id: "pre-bridal-30day",
    category: "bridal",
    name: "30-Day Pre-Bridal Glow Transformation",
    tagline: "Complete head-to-toe pampering before the wedding bells",
    price: 9999,
    originalPrice: 14500,
    duration: "3 Sessions",
    popular: false,
    badge: "Full Transformation 💍",
    description: "Comprehensive 3-sitting package for brides-to-be: 2 Hydra Facials, 1 full body Rica polishing, Hair Botox or Keratin, deluxe mani-pedi, and body bleach.",
    includes: ["2x Glow Facials", "Full Body Rica Waxing & Polish", "Luxury Hair Botox", "Gel Extensions with Nail Art", "Deluxe Rose Pedicure"]
  },
  {
    id: "gel-extensions-nailart",
    category: "nails",
    name: "Gel Nail Extensions + Custom Nail Art",
    tagline: "Chrome glaze, french ombre, or 3D floral accents",
    price: 1499,
    originalPrice: 2200,
    duration: "75 mins",
    popular: true,
    badge: "Pinterest Trendy 💅",
    description: "Long-lasting chip-free soft gel tips with your choice of Hailey Bieber glazed donut finish, cat-eye shimmer, or delicate hand-painted charms.",
    includes: ["Dry Russian cuticle prep", "Full tip extensions", "Gel color + nail art on 4 accent nails", "Cuticle oil massage"]
  },
  {
    id: "rose-petal-pedicure",
    category: "nails",
    name: "Champagne & Rose Petal Spa Pedicure",
    tagline: "Warm foot soak, heel callus buffing & soothing foot massage",
    price: 899,
    originalPrice: 1299,
    duration: "50 mins",
    popular: false,
    badge: "Relaxing Bliss 🌸",
    description: "Sink into a warm basin of pink Himalayan salts and fresh rose petals. Includes callus exfoliation, lavender scrub, foot mask, and hot towel wrap.",
    includes: ["Rose petal soak", "Heel smoothing buffer", "Botanical scrub", "Hydrating clay foot mask", "Nail shaping & polish"]
  },
  {
    id: "rica-full-wax",
    category: "waxing",
    name: "Full Body Rica Brazilian Liposoluble Wax",
    tagline: "Gentle on sensitive skin, removes tan without redness",
    price: 1999,
    originalPrice: 2800,
    duration: "60 mins",
    popular: true,
    badge: "Painless Formula 🍯",
    description: "Original Italian Rica wax enriched with vegetable oils and titanium dioxide. Grips short hair effortlessly without sticking to skin, leaving skin silky smooth.",
    includes: ["Full arms + underarms", "Full legs", "Pre-wax aloe sanitizer", "Post-wax soothing lotus lotion"]
  },
  {
    id: "face-threading-detan",
    category: "waxing",
    name: "Painless Face Threading + Glow Peel-Off",
    tagline: "Crisp arched eyebrows & upper lip peach fuzz removal",
    price: 299,
    originalPrice: 450,
    duration: "25 mins",
    popular: false,
    badge: "Quick Touchup ✨",
    description: "Expert thread work for crisp symmetrical arches with minimal discomfort, followed by ice soothing roll and rose toner.",
    includes: ["Eyebrow shaping", "Upper lip threading", "Aloe cooling gel application"]
  }
];

export const GOOGLE_REVIEWS = [
  {
    id: 1,
    name: "Pooja Patel",
    rating: 5,
    date: "1 week ago",
    verified: true,
    category: "hair",
    comment: "Best haircut i have ever got in vadodara! Great price and very educated staff. They understood exactly what face-framing layers I wanted without cutting too short. The salon smells lovely and looks so aesthetic!",
    service: "Advanced Layered Cut & Blowout"
  },
  {
    id: 2,
    name: "Meera Shah",
    rating: 5,
    date: "2 weeks ago",
    verified: true,
    category: "ambience",
    comment: "Nice service and behaviour of staff is well too... good experience. The ladies-only atmosphere makes you feel so safe and relaxed. I loved the chic pink aesthetic and complimentary rose green tea while getting my treatment.",
    service: "Hydra Facial & Nashi Argan Spa"
  },
  {
    id: 3,
    name: "Dr. Ananya Trivedi",
    rating: 5,
    date: "3 weeks ago",
    verified: true,
    category: "staff",
    comment: "Also they did it in minimal timing and staff members are very kind. Very professional hygiene standards, sterilized tools, and no waiting time when you book via appointment. Five stars all the way!",
    service: "Full Body Rica Wax & Pedicure"
  },
  {
    id: 4,
    name: "Krupa Joshi",
    rating: 5,
    date: "1 month ago",
    verified: true,
    category: "bridal",
    comment: "Riya did my bridal makeover for my wedding day in Vadodara, and I felt like an absolute royal princess! The makeup stayed sweat-proof and glowing for 14+ hours. Even the dupatta draping was so comfortable. Thank you R'riya team!",
    service: "Royal HD Bridal Package"
  },
  {
    id: 5,
    name: "Tanvi Dave",
    rating: 5,
    date: "1 month ago",
    verified: true,
    category: "hair",
    comment: "Got Hair Botox & rich chocolate brunette balayage here. My hair looks like liquid silk! I get compliments everywhere I go. If you are in Nizampura, do not look anywhere else. Riya is a true hair magician.",
    service: "Hair Botox & Brunette Balayage"
  },
  {
    id: 6,
    name: "Riddhi Patel",
    rating: 5,
    date: "2 months ago",
    verified: true,
    category: "skin",
    comment: "Hydra facial here is next level! My stubborn blackheads on the nose were cleared completely and my face had a mirror-like glow for weeks. Plus honest pricing compared to other overpriced salons in Alkapuri.",
    service: "7-Step Clinical Hydra Facial"
  },
  {
    id: 7,
    name: "Shreya Desai",
    rating: 5,
    date: "3 months ago",
    verified: true,
    category: "nails",
    comment: "Their gel nail extensions last over a month without chipping! The chrome glaze finish is exactly what I saw on Pinterest. Super friendly girl crew and lovely vibes.",
    service: "Chrome Gel Nail Extensions"
  }
];

export const BEFORE_AFTER_GALLERY = [
  {
    title: "Rich Brunette Melt & Balayage",
    category: "Hair Transformation",
    beforeText: "Faded brassy uneven strands",
    afterText: "Glossy dimensional mocha brunette with mirror shine",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    likes: "1.4k"
  },
  {
    title: "Royal Gujarati Bridal Glow",
    category: "Bridal Makeover",
    beforeText: "Tired pre-wedding skin",
    afterText: "Sculpted glowing goddess with seamless HD air-finish",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    likes: "2.8k"
  },
  {
    title: "Hydra Facial Glass Skin",
    category: "Clinical Skin Care",
    beforeText: "Congested pores & sun dullness",
    afterText: "Crystal clear poreless radiant Korean glass skin",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800",
    likes: "1.9k"
  },
  {
    title: "Glazed Donut Gel Nails",
    category: "Nail Art Studio",
    beforeText: "Short brittle uneven nails",
    afterText: "Almond shaped chrome iridescent extensions",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800",
    likes: "950"
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: "post-1",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600",
    caption: "Beautifying YOU The Way You Love! Rich brunette, effortless luxury, glossy finishes ✨ Book your appointment now 🔖",
    likes: "1,240",
    comments: "48"
  },
  {
    id: "post-2",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600",
    caption: "Wedding season ready! That fairytale royal bride look created with immense love by Riya 💕👰",
    likes: "2,410",
    comments: "82"
  },
  {
    id: "post-3",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600",
    caption: "Hydra Facial session recap! Clear pores, happy smiles & unmatched hydration 💦",
    likes: "940",
    comments: "35"
  },
  {
    id: "post-4",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=600",
    caption: "Who said layers can't have bounce? 90s blowout on our sweet client today 💇‍♀️💖",
    likes: "1,520",
    comments: "56"
  }
];

export const FAQS = [
  {
    q: "Is R Riya Beauty Salon strictly for women/ladies?",
    a: "Yes, 100%! We are an exclusive ladies-only salon & bridal studio. We take pride in providing a completely safe, comfortable, private, and hygienic environment where you can relax, let your hair down, and get pampered."
  },
  {
    q: "Do I need to book an appointment before visiting?",
    a: "While we warmly welcome walk-ins, we highly recommend booking an appointment in advance—especially between our peak hours of 2:00 PM and 8:00 PM and on weekends—so that you enjoy zero waiting time and personalized care."
  },
  {
    q: "What products and brands do you use for hair and skin treatments?",
    a: "We only trust industry-leading, dermatologist-approved international brands including Nashi Argan (Italy), Olaplex, L'Oréal Professionnel, O3+ Professional Skin Care, and Rica (Italy) for liposoluble waxing."
  },
  {
    q: "Do you offer bridal makeup trials before the wedding?",
    a: "Yes! Riya and our bridal specialists offer personalized bridal consultations and pre-wedding makeup trials where we analyze your skin, lehenga color palette, and desired hairstyles to ensure absolute perfection on your big day."
  },
  {
    q: "Where exactly are you located in Nizampura, Vadodara?",
    a: "We are situated right at Ground Floor, Shop No. 1, 2, 3, 4 Crossroads, near Mehsana Nagar Garba Ground / Circle, LG Nagar Branch, Nizampura, Vadodara. There is ample hassle-free parking right in front of our salon!"
  },
  {
    q: "How can I book an appointment quickly?",
    a: "You can book directly using the 'Book Pamper Session' button right on this website, or drop a quick WhatsApp message / call directly to +91 97256 56531. Our team responds within minutes!"
  }
];

export const TIME_SLOTS = [
  "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", 
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", 
  "06:00 PM (Peak)", "07:00 PM"
];
