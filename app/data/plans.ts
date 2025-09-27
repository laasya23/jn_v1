export type Speed = '40' | '100';
export type Duration = '1M' | '3M' | '6M' | '1Y';

export interface PlanPrice {
  duration: Duration;
  price: number;
}

export interface BroadbandPlan {
  speed: Speed;
  prices: PlanPrice[];
}

export interface OTTApp {
  name: string;
  logoPath: string;
}

export interface OTTPlan {
  name: string;
  variants: {
    [key in Speed]: BroadbandPlan;
  };
  premiumApps: OTTApp[];
  nonPremiumApps: OTTApp[];
}
//   {
//     name: "PB Basic",
//     variants: {
//       "40": {
//         speed: "40",
//         prices: [
//           { duration: "1M", price: 620.00 },
//           { duration: "3M", price: 1850.00 },
//           { duration: "6M", price: 3400.00 },
//           { duration: "1Y", price: 6200.00 }
//         ]
//       },
//       "100": {
//         speed: "100",
//         prices: [
//           { duration: "1M", price: 1020.00 },
//           { duration: "3M", price: 3000.00 },
//           { duration: "6M", price: 5600.00 },
//           { duration: "1Y", price: 10200.00 }
//         ]
//       }
//     },
//     premiumApps: [
//       { name: "SonyLIV", logoPath: "/assets/images/ott-partners/sony-liv.png" },
//       { name: "Zee5", logoPath: "/assets/images/ott-partners/zee5.png" }
//     ],
//     nonPremiumApps: [
//       { name: "ETV Win", logoPath: "/assets/images/ott-partners/etv-win.png" },
//       { name: "Discovery Plus", logoPath: "/assets/images/ott-partners/discovery.png" },
//       { name: "Hungama", logoPath: "/assets/images/ott-partners/hungama.png" },
//       { name: "Shemaroo", logoPath: "/assets/images/ott-partners/shemaroo.png" },
//       { name: "Shorts TV", logoPath: "/assets/images/ott-partners/stage.png" },
//       { name: "Raj DigitalTV", logoPath: "/assets/images/ott-partners/raj-tv.png" },
//       { name: "Hubhopper", logoPath: "/assets/images/ott-partners/hubhopper.png" },
//       { name: "Fancode", logoPath: "/assets/images/ott-partners/fancode.png" },
//       { name: "PlayboxTV", logoPath: "/assets/images/ott-partners/play-box-tv.png" },
//       { name: "1OTT", logoPath: "/assets/images/ott-partners/one.png" },
//       { name: "AaoNxt", logoPath: "/assets/images/ott-partners/aano-nxt.png" },
//       { name: "Chana Jor", logoPath: "/assets/images/ott-partners/chana-jor.png" },
//       { name: "iTap", logoPath: "/assets/images/ott-partners/itap.png" },
//       { name: "OM TV", logoPath: "/assets/images/ott-partners/om-tv.png" },
//       { name: "DistroTV", logoPath: "/assets/images/ott-partners/distro-tv.png" },
//       { name: "Tarang Plus", logoPath: "/assets/images/ott-partners/tarang-plus.png" },
//       { name: "TravelXP", logoPath: "/assets/images/ott-partners/travel-xp.png" }
//     ]
//   },
//   {
//     name: "PB Standard",
//     variants: {
//       "40": {
//         speed: "40",
//         prices: [
//           { duration: "1M", price: 620.00 },
//           { duration: "3M", price: 1850.00 },
//           { duration: "6M", price: 3400.00 },
//           { duration: "1Y", price: 6200.00 }
//         ]
//       },
//       "100": {
//         speed: "100",
//         prices: [
//           { duration: "1M", price: 1020.00 },
//           { duration: "3M", price: 3000.00 },
//           { duration: "6M", price: 5600.00 },
//           { duration: "1Y", price: 10200.00 }
//         ]
//       }
//     },
//     premiumApps: [
//       { name: "Hotstar", logoPath: "/assets/images/ott-partners/disney-hotstar.png" },
//       { name: "SonyLIV", logoPath: "/assets/images/ott-partners/sony-liv.png" },
//       { name: "Zee5", logoPath: "/assets/images/ott-partners/zee5.png" }
//     ],
//     nonPremiumApps: [
//       { name: "ETV Win", logoPath: "/assets/images/ott-partners/etv-win.png" },
//       { name: "Discovery Plus", logoPath: "/assets/images/ott-partners/discovery.png" },
//       { name: "Hungama", logoPath: "/assets/images/ott-partners/hungama.png" },
//       { name: "Shemaroo", logoPath: "/assets/images/ott-partners/shemaroo.png" },
//       { name: "Raj DigitalTV", logoPath: "/assets/images/ott-partners/raj-tv.png" },
//       { name: "Hubhopper", logoPath: "/assets/images/ott-partners/hubhopper.png" },
//       { name: "Fancode", logoPath: "/assets/images/ott-partners/fancode.png" },
//       { name: "PlayboxTV", logoPath: "/assets/images/ott-partners/play-box-tv.png" },
//       { name: "1OTT", logoPath: "/assets/images/ott-partners/one.png" },
//       { name: "AaoNxt", logoPath: "/assets/images/ott-partners/aano-nxt.png" },
//       { name: "iTap", logoPath: "/assets/images/ott-partners/itap.png" },
//       { name: "OM TV", logoPath: "/assets/images/ott-partners/om-tv.png" }
//     ]
//   },
//   {
//     name: "PB Pulse",
//     variants: {
//       "40": {
//         speed: "40",
//         prices: [
//           { duration: "1M", price: 620.00 },
//           { duration: "3M", price: 1850.00 },
//           { duration: "6M", price: 3400.00 },
//           { duration: "1Y", price: 6200.00 }
//         ]
//       },
//       "100": {
//         speed: "100",
//         prices: [
//           { duration: "1M", price: 1020.00 },
//           { duration: "3M", price: 3000.00 },
//           { duration: "6M", price: 5600.00 },
//           { duration: "1Y", price: 10200.00 }
//         ]
//       }
//     },
//     premiumApps: [
//       { name: "Hotstar", logoPath: "/assets/images/ott-partners/disney-hotstar.png" },
//       { name: "SonyLIV", logoPath: "/assets/images/ott-partners/sony-liv.png" },
//       { name: "Zee5", logoPath: "/assets/images/ott-partners/zee5.png" }
//     ],
//     nonPremiumApps: [
//       { name: "ETV Win", logoPath: "/assets/images/ott-partners/etv-win.png" },
//       { name: "Discovery Plus", logoPath: "/assets/images/ott-partners/discovery.png" },
//       { name: "Hungama", logoPath: "/assets/images/ott-partners/hungama.png" },
//       { name: "Shemaroo", logoPath: "/assets/images/ott-partners/shemaroo.png" },
//       { name: "Shorts TV", logoPath: "/assets/images/ott-partners/stage.png" },
//       { name: "Raj DigitalTV", logoPath: "/assets/images/ott-partners/raj-tv.png" },
//       { name: "Hubhopper", logoPath: "/assets/images/ott-partners/hubhopper.png" },
//       { name: "Fancode", logoPath: "/assets/images/ott-partners/fancode.png" },
//       { name: "PlayboxTV", logoPath: "/assets/images/ott-partners/play-box-tv.png" },
//       { name: "1OTT", logoPath: "/assets/images/ott-partners/one.png" },
//       { name: "AaoNxt", logoPath: "/assets/images/ott-partners/aano-nxt.png" },
//       { name: "Chana Jor", logoPath: "/assets/images/ott-partners/chana-jor.png" },
//       { name: "iTap", logoPath: "/assets/images/ott-partners/itap.png" },
//       { name: "OM TV", logoPath: "/assets/images/ott-partners/om-tv.png" },
//       { name: "DistroTV", logoPath: "/assets/images/ott-partners/distro-tv.png" },
//       { name: "Tarang Plus", logoPath: "/assets/images/ott-partners/tarang-plus.png" }
//     ]
//   },
//   {
//     name: "PB Storm",
//     variants: {
//       "40": {
//         speed: "40",
//         prices: [
//           { duration: "1M", price: 725.00 },
//           { duration: "3M", price: 2100.00 },
//           { duration: "6M", price: 4100.00 },
//           { duration: "1Y", price: 7250.00 }
//         ]
//       },
//       "100": {
//         speed: "100",
//         prices: [
//           { duration: "1M", price: 1125.00 },
//           { duration: "3M", price: 3300.00 },
//           { duration: "6M", price: 6200.00 },
//           { duration: "1Y", price: 11250.00 }
//         ]
//       }
//     },
//     premiumApps: [
//       { name: "Hotstar", logoPath: "/assets/images/ott-partners/disney-hotstar.png" },
//       { name: "SonyLIV", logoPath: "/assets/images/ott-partners/sony-liv.png" },
//       { name: "Zee5", logoPath: "/assets/images/ott-partners/zee5.png" },
//       { name: "Aha Telugu", logoPath: "/assets/images/ott-partners/aha.png" },
//       { name: "SunNXT", logoPath: "/assets/images/ott-partners/sun-nxt.png" }
//     ],
//     nonPremiumApps: [
//       { name: "ETV Win", logoPath: "/assets/images/ott-partners/etv-win.png" },
//       { name: "ALTBalaji", logoPath: "/assets/images/ott-partners/alt.png" },
//       { name: "Discovery Plus", logoPath: "/assets/images/ott-partners/discovery.png" },
//       { name: "Dangal Play", logoPath: "/assets/images/ott-partners/dangal-play.png" },
//       { name: "Hungama", logoPath: "/assets/images/ott-partners/hungama.png" },
//       { name: "Shemaroo", logoPath: "/assets/images/ott-partners/shemaroo.png" },
//       { name: "Shorts TV", logoPath: "/assets/images/ott-partners/stage.png" },
//       { name: "Raj DigitalTV", logoPath: "/assets/images/ott-partners/raj-tv.png" },
//       { name: "Hubhopper", logoPath: "/assets/images/ott-partners/hubhopper.png" },
//       { name: "Fancode", logoPath: "/assets/images/ott-partners/fancode.png" },
//       { name: "PlayboxTV", logoPath: "/assets/images/ott-partners/play-box-tv.png" },
//       { name: "1OTT", logoPath: "/assets/images/ott-partners/one.png" },
//       { name: "AaoNxt", logoPath: "/assets/images/ott-partners/aano-nxt.png" },
//       { name: "Chana Jor", logoPath: "/assets/images/ott-partners/chana-jor.png" },
//       { name: "iTap", logoPath: "/assets/images/ott-partners/itap.png" },
//       { name: "OM TV", logoPath: "/assets/images/ott-partners/om-tv.png" },
//       { name: "DistroTV", logoPath: "/assets/images/ott-partners/distro-tv.png" },
//       { name: "Kancha Lannka", logoPath: "/assets/images/ott-partners/kanccha-lannka.png" },
//       { name: "Shucae Film", logoPath: "/assets/images/ott-partners/shucae-film.png" }
//     ]
//   },
//   {
//     name: "PB Prime",
//     variants: {
//       "40": {
//         speed: "40",
//         prices: [
//           { duration: "1M", price: 725.00 },
//           { duration: "3M", price: 2100.00 },
//           { duration: "6M", price: 4100.00 },
//           { duration: "1Y", price: 7250.00 }
//         ]
//       },
//       "100": {
//         speed: "100",
//         prices: [
//           { duration: "1M", price: 1125.00 },
//           { duration: "3M", price: 3300.00 },
//           { duration: "6M", price: 6200.00 },
//           { duration: "1Y", price: 11250.00 }
//         ]
//       }
//     },
//     premiumApps: [
//       {
//         name: "Prime Lite",
//         logoPath: "/assets/images/ott-partners/amazon-prime-lite.jpg"
//       },
//       {
//         name: "Hotstar",
//         logoPath: "/assets/images/ott-partners/disney-hotstar.png"
//       },
//       {
//         name: "SonyLIV",
//         logoPath: "/assets/images/ott-partners/sony-liv.png"
//       },
//       {
//         name: "Zee5",
//         logoPath: "/assets/images/ott-partners/zee5.png"
//       }
//     ],
//     nonPremiumApps: [
//       { name: "ALTBalaji", logoPath: "/assets/images/ott-partners/alt.png" },
//       { name: "Discovery Plus", logoPath: "/assets/images/ott-partners/discovery.png" },
//       { name: "Dangal Play", logoPath: "/assets/images/ott-partners/dangal-play.png" },
//       { name: "Hungama", logoPath: "/assets/images/ott-partners/hungama.png" },
//       { name: "Shemaroo", logoPath: "/assets/images/ott-partners/shemaroo.png" },
//       { name: "Shorts TV", logoPath: "/assets/images/ott-partners/stage.png" },
//       { name: "Raj DigitalTV", logoPath: "/assets/images/ott-partners/raj-tv.png" },
//       { name: "Hubhopper", logoPath: "/assets/images/ott-partners/hubhopper.png" },
//       { name: "Fancode", logoPath: "/assets/images/ott-partners/fancode.png" },
//       { name: "PlayboxTV", logoPath: "/assets/images/ott-partners/play-box-tv.png" },
//       { name: "1OTT", logoPath: "/assets/images/ott-partners/one.png" },
//       { name: "AaoNxt", logoPath: "/assets/images/ott-partners/aano-nxt.png" },
//       { name: "Chana Jor", logoPath: "/assets/images/ott-partners/chana-jor.png" },
//       { name: "iTap", logoPath: "/assets/images/ott-partners/itap.png" },
//       { name: "OM TV", logoPath: "/assets/images/ott-partners/om-tv.png" },
//       { name: "DistroTV", logoPath: "/assets/images/ott-partners/distro-tv.png" },
//       { name: "Kancha Lannka", logoPath: "/assets/images/ott-partners/kanccha-lannka.png" },
//       { name: "Shucae Film", logoPath: "/assets/images/ott-partners/shucae-film.png" }
//     ]
//   },
//   {
//     name: "PB Stream 365",
//     variants: {
//       "40": {
//         speed: "40",
//         prices: [
//           { duration: "1Y", price: 8100.00 }
//         ]
//       },
//       "100": {
//         speed: "100",
//         prices: [
//           { duration: "1Y", price: 12100.00 }
//         ]
//       }
//     },
//     premiumApps: [
//       {
//         name: "Prime Lite",
//         logoPath: "/assets/images/ott-partners/amazon-prime-lite.jpg"
//       },
//       {
//         name: "Hotstar",
//         logoPath: "/assets/images/ott-partners/disney-hotstar.png"
//       },
//       {
//         name: "SonyLIV",
//         logoPath: "/assets/images/ott-partners/sony-liv.png"
//       },
//       {
//         name: "Zee5",
//         logoPath: "/assets/images/ott-partners/zee5.png"
//       }
//     ],
//     nonPremiumApps: [
//       { name: "ALTBalaji", logoPath: "/assets/images/ott-partners/alt.png" },
//       { name: "Discovery Plus", logoPath: "/assets/images/ott-partners/discovery.png" },
//       { name: "Dangal Play", logoPath: "/assets/images/ott-partners/dangal-play.png" },
//       { name: "Hungama", logoPath: "/assets/images/ott-partners/hungama.png" },
//       { name: "Shemaroo", logoPath: "/assets/images/ott-partners/shemaroo.png" },
//       { name: "Shorts TV", logoPath: "/assets/images/ott-partners/stage.png" },
//       { name: "Raj DigitalTV", logoPath: "/assets/images/ott-partners/raj-tv.png" },
//       { name: "Hubhopper", logoPath: "/assets/images/ott-partners/hubhopper.png" },
//       { name: "Fancode", logoPath: "/assets/images/ott-partners/fancode.png" },
//       { name: "PlayboxTV", logoPath: "/assets/images/ott-partners/play-box-tv.png" },
//       { name: "1OTT", logoPath: "/assets/images/ott-partners/one.png" },
//       { name: "AaoNxt", logoPath: "/assets/images/ott-partners/aano-nxt.png" },
//       { name: "Chana Jor", logoPath: "/assets/images/ott-partners/chana-jor.png" },
//       { name: "iTap", logoPath: "/assets/images/ott-partners/itap.png" },
//       { name: "OM TV", logoPath: "/assets/images/ott-partners/om-tv.png" },
//       { name: "DistroTV", logoPath: "/assets/images/ott-partners/distro-tv.png" },
//       { name: "Kancha Lannka", logoPath: "/assets/images/ott-partners/kanccha-lannka.png" },
//       { name: "Shucae Film", logoPath: "/assets/images/ott-partners/shucae-film.png" }
//     ]
//   }
// ];