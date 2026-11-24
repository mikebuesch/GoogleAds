/**
 * ============================================================================
 * BARCELONA TEAM · 24-DAY CHRISTMAS ADVENT CALENDAR
 * ============================================================================
 *
 * DOOR LOCK SETTING:
 * - `UNLOCK_ALL_FOR_REVIEW = false`: Enforces real calendar date locking in
 *   Barcelona time (`Europe/Madrid`) for December `CALENDAR_YEAR` so Doors 1 to
 *   24 stay locked until their actual December date (and stay open afterwards),
 *   while Day 0 Sneak Peek above the board is always unlocked!
 *   (You can still test all 24 doors privately anytime by adding `?preview=true`
 *   to the URL.)
 * - `UNLOCK_ALL_FOR_REVIEW = true`:  Unlocks all 24 doors for everyone.
 */
const UNLOCK_ALL_FOR_REVIEW = false;
const CALENDAR_YEAR = 2026;
const CALENDAR_TIMEZONE = 'Europe/Madrid';

/**
 * Browser localStorage keys. Every coworker's opened doors stay strictly inside
 * their own browser on their own device.
 */
const STORAGE_KEY = 'bcn_ads_advent_2026_opened_doors';
const EXAMPLE_STORAGE_KEY = 'bcn_ads_advent_2026_example_opened';

/**
 * ============================================================================
 * DAY 0 SNEAK PEEK DOOR (`exampleDoorData`, day: 0)
 * Always unlocked above the 24-door calendar so coworkers can see what to
 * expect without spoiling any of Days 1 to 24.
 * ============================================================================
 */
const exampleDoorData = {
  day: 0,
  motifLabel: 'Day 0 Sneak Peek',
  cardHeading: 'Day 0 Sneak Peek: Here Is What Awaits Each Morning!',
  ads: {
    title: 'Google Business Profile + Ads: The simplest local starting point',
    body: 'Before a small business spends a single euro on ads, linking a complete Google Business Profile (with opening hours, real shop photos, and customer reviews) makes every campaign stronger. Once linked, their Search and Maps ads can show their star rating, street address, and directions automatically.',
    when: 'Check this first on every local business account, whether they run a bakery in Sant Antoni, a dental clinic, or a repair shop.'
  },
  trust: {
    title: '"I don’t know anything about online ads, where do we even start?"',
    body: 'Brand-new customers often feel embarrassed that they do not know marketing words, which makes them guarded right away. Put them at ease in the first minute by skipping all jargon and asking one simple business question: which single job or product brings them their happiest customers right now?',
    say: '"You do not need to know any marketing terms at all, that is my side of the table. Just tell me which service or product you would love five more customers for this month, and we will build around that."'
  },
  whatIf: {
    teaser: '24-hour holiday flight delay at Barcelona-El Prat...',
    question: 'What if you had to survive an entire 24-hour holiday flight delay stuck in Barcelona-El Prat airport with only ONE traditional Christmas food from your home country to eat and trade with stranded passengers, what are you bringing, and how far does it get you in the airport black market?',
    note: 'A box of Turrón or warm Stroopwafels might buy you a phone charger outlet at Gate B, while cold roast cabbage could get you exiled!'
  },
  xmas: {
    category: 'Welcome to December in BCN',
    title: 'Sunny cortados, clementines & four holiday cultures in one hub',
    body: 'December in our Barcelona office has its own special charm: crisp blue mornings with a hot cortado, bowls of sweet clementines in the kitchen, and teammates swapping stories about Catalan Caga Tió, Spanish Turrón, German Weihnachtsmärkte, and Dutch Sinterklaas.',
    tip: 'Starting December 1st, one numbered door below unlocks each morning (and stays unlocked afterwards). Open whichever sections interest you over coffee and skip the rest!'
  },
  recipe: {
    title: '15-Minute Cinnamon Market Almonds ("Garrapiñadas")',
    meta: '15 mins · 1 pan · Smells just like a Christmas market',
    ingredients: [
      '200 g raw whole almonds with skin on',
      '120 g white or brown sugar',
      '80 ml water',
      '1.5 tsp ground cinnamon & 1/2 tsp vanilla extract',
      'Tiny pinch of sea salt'
    ],
    steps: [
      'Tip the raw almonds, sugar, water, cinnamon, vanilla, and pinch of salt all together into a wide non-stick frying pan over medium heat.',
      'Stir steadily with a wooden spoon while the water bubbles away. After about 7 minutes, the sugar will suddenly dry out and look sandy and white around the almonds (keep stirring!).',
      'Lower the heat slightly and stir for 3 more minutes until half of that sandy sugar melts into a glossy, crunchy amber coat around every almond.',
      'Spread onto parchment paper right away, separate the almonds with two forks, and let cool for 10 minutes until super crunchy.'
    ]
  }
};

/**
 * ============================================================================
 * 24 DAYS OF CONTENT (`calendarData`)
 * Edit any text below to customize a door. Every door has 4 collapsible parts,
 * plus an optional 5th `recipe` section on 12 festive food & drink days:
 *   1. `ads`:    Simple Google Ads campaign type or feature refresher
 *   2. `trust`:  Helping new, skeptical customers trust and try Google Ads
 *   3. `whatIf`: Fun daily "What If?" question for team chat
 *   4. `xmas`:   Christmas traditions & December tips around Barcelona
 *   5. `recipe`: Easy Christmas dish or drink recipe to try at home (optional)
 * ============================================================================
 */
const calendarData = [
  {
    day: 1,
    motifLabel: 'Passeig de Gràcia',
    icon: 'star_compass',
    cardHeading: 'Day 1: Welcome to December!',
    ads: {
      title: 'Search Ads: Showing up when people ask for help',
      body: 'Search Ads are the classic text ads at the top of Google. Unlike social media ads that pop up while someone is watching funny videos, Search Ads only appear when a person types in what they actually need right now, like "emergency locksmith Gràcia" or "tax accountant Barcelona".',
      when: 'Great as a first campaign for almost any local service, clinic, or repair business where customers actively search on Google before buying.'
    },
    trust: {
      title: '"I feel like Google just wants to take my money"',
      body: 'When a small business owner says this, never argue or launch into a sales pitch. Agree with them that wasting money on ads is frustrating. Then explain the simplest rule of Google Ads: showing your ad is free. You only pay when an interested person actually clicks to visit your site or call you.',
      say: '"That is a completely fair worry. Just showing up on Google costs zero euros. You only pay when someone searching for your exact service clicks through to you, and you set the daily limit yourself."'
    },
    whatIf: {
      teaser: 'Three teleportation pins for life...',
      question: 'What if teleportation existed tomorrow, but you could only place 3 fixed pins on Earth for the rest of your life? Where would you put your 3 pins?',
      note: 'If you put one at home and one at the office to skip the metro, you only have one holiday destination left!'
    },
    xmas: {
      category: 'Barcelona in December',
      title: 'Evening walk under the Passeig de Gràcia lights',
      body: 'Now that the Christmas lights are switched on across Barcelona, Passeig de Gràcia is one of the nicest walks home after work. The warm golden light curtains hang all the way down the avenue past Casa Batlló and La Pedrera.',
      tip: 'Lights turn on at 17:30 every evening. Walk from Diagonal down toward Plaça Catalunya and grab hot chestnuts on the corner.'
    }
  },

  {
    day: 2,
    motifLabel: 'Catalan Cava Toast',
    icon: 'cava_flutes',
    cardHeading: 'Day 2: Bringing Customers to the Shop Door',
    ads: {
      title: 'Local PMax: Getting real foot traffic into physical shops',
      body: 'Performance Max for Store Goals (often called Local PMax) connects directly to a business’s Google Maps profile. It shows the shop on Google Maps, Waze, Search, and YouTube to people nearby, focusing on real-world actions: tapping "Get Directions", calling the shop, or visiting in person.',
      when: 'Recommend this to restaurants, dental clinics, hair salons, gyms, furniture stores, or any business that makes its money when people walk through the front door.'
    },
    trust: {
      title: '"Why pay when my shop is already on Google Maps for free?"',
      body: 'Many shop owners think a free Google Business Profile means everyone in town already sees them. Explain calmly that the free listing mostly shows up to people standing two streets away, or people typing their exact shop name. Local Ads show their pin to people a few neighborhoods over who just type "dentist open Saturday".',
      say: '"Your free Maps profile is great when regulars look up your address. Local Ads help people a couple of kilometers away find you when they search for what you sell, but do not know your name yet."'
    },
    whatIf: {
      teaser: 'Every language vs. every instrument...',
      question: 'What if you could wake up tomorrow speaking every language in the world fluently, OR able to play every musical instrument effortlessly? Which one do you pick?',
      note: 'Tell us which language or instrument you would test out first on Day 1!'
    },
    xmas: {
      category: 'Catalan Tradition',
      title: 'A glass of Penedès Cava for the holidays',
      body: 'Less than an hour outside Barcelona sits Sant Sadurní d’Anoia, where Catalan Cava has been made in underground cellars for generations. In Catalonia, Cava is not saved only for midnight on New Year’s Eve. Families open a cold bottle of Brut Nature right alongside Christmas lunch.',
      tip: 'If you bring a bottle to a friend’s dinner this month, look for "Brut Nature Reserva" on the label. It has no added sugar and pairs with almost everything.'
    },
    recipe: {
      title: '5-Minute Festive Cava Sangria de Nadal',
      meta: '5 mins · Serves 6 glasses · No cooking',
      ingredients: [
        '1 chilled bottle of Catalan Cava Brut (750 ml)',
        '80 ml orange liqueur (Cointreau) or sweet red vermut',
        '150 ml fresh squeezed orange juice',
        '1 orange, sliced into thin half-moons',
        '4 tbsp ruby pomegranate seeds',
        '2 cinnamon sticks & fresh rosemary sprigs'
      ],
      steps: [
        'Add the orange slices, pomegranate seeds, cinnamon sticks, orange juice, and orange liqueur to a large pitcher.',
        'Give it a gentle stir and let the fruit sit in the fridge for 15 minutes if you have time.',
        'Right before guests arrive, pour the ice-cold Cava slowly down the side of the pitcher so you keep all the bubbles.',
        'Serve over ice in wine glasses with a sprig of fresh rosemary for a piney Christmas aroma.'
      ]
    }
  },

  {
    day: 3,
    motifLabel: 'Stroopwafel & Poems',
    icon: 'stroopwafel',
    cardHeading: 'Day 3: Hotel Bookings & No Surprise Bills',
    ads: {
      title: 'Hotel Ads: Live room prices right on Google & Maps',
      body: 'When travelers look up a hotel on Google Search or Maps, a price comparison box pops up showing nightly rates. Hotel Ads let independent hotels and B&Bs place their own live room price and "Official Site" link right inside that box next to big booking websites.',
      when: 'Use this for hotels, boutique guesthouses, and resorts that are tired of paying 15% to 20% commission to third-party booking sites and want guests booking directly.'
    },
    trust: {
      title: '"What if I get a huge surprise bill at the end of the month?"',
      body: 'People who have never run ads are often terrified of accidentally spending thousands of euros overnight. Take away that fear immediately by explaining the Monthly Charging Limit: if they set €10 a day, Google multiplies €10 by 30.4 days and can NEVER charge them a single cent over €304 for that month.',
      say: '"You can never get a surprise bill. If we set €10 a day, €304 is a hard ceiling for the entire month. Even if Google accidentally showed your ad extra times, anything over that cap is on Google, not you."'
    },
    whatIf: {
      teaser: 'One country’s food for a whole year...',
      question: 'What if you had to eat only ONE country’s food for an entire year, and you are not allowed to pick your own home country? Which country do you choose?',
      note: 'Remember: that includes breakfast, quick lunches, snacks, and Friday night dinners!'
    },
    xmas: {
      category: 'Netherlands & Benelux',
      title: 'Sinterklaas, Kruidnoten & funny roast poems',
      body: 'For our Dutch and Belgian teammates, the big December celebration arrives early on December 5th and 6th for Sinterklaas (who, according to legend, actually lives in Spain the rest of the year!). Friends make homemade cardboard "Surprise" gifts and write funny rhyming poems gently teasing each other.',
      tip: 'If a Dutch colleague brings spiced Kruidnoten biscuits or a chocolate letter into the Barcelona office this week, grab a handful before they disappear.'
    },
    recipe: {
      title: 'Crispy Dutch Kruidnoten (Spiced Mini Biscuits)',
      meta: '25 mins · Makes ~45 mini biscuits',
      ingredients: [
        '200 g self-raising flour (or plain flour + 1.5 tsp baking powder)',
        '100 g dark brown sugar',
        '90 g cold butter, cut into small cubes',
        '2 tbsp milk',
        '2 tsp cinnamon + 1/2 tsp ground ginger',
        '1/4 tsp ground cloves, nutmeg & a pinch of salt'
      ],
      steps: [
        'Heat your oven to 175°C and line a baking tray with parchment paper.',
        'Mix the flour, brown sugar, spices, and salt in a bowl. Rub in the cold butter with your fingertips until crumbly, then add the milk and knead into a smooth dough ball.',
        'Roll tiny marble-sized balls of dough, space them out on the tray, and press each one down slightly with your finger.',
        'Bake for 14 to 16 minutes. They feel slightly soft when hot, then turn wonderfully crunchy as they cool.'
      ]
    }
  },

  {
    day: 4,
    motifLabel: 'Fira de Santa Llúcia',
    icon: 'pine_tree',
    cardHeading: 'Day 4: Car Dealerships & Total Freedom to Pause',
    ads: {
      title: 'Vehicle Ads: Showing real cars on the lot at the top of Google',
      body: 'Vehicle Ads show car shoppers a photo of the actual car for sale, its exact price, year, mileage, and how far away the dealership is. When a buyer clicks the car, they go straight to that specific car’s page on the dealer’s website.',
      when: 'Best for used or new car dealerships that have an updated list of cars in stock and want serious local buyers booking test drives.'
    },
    trust: {
      title: '"Am I going to be stuck in a 12-month contract?"',
      body: 'Many small business owners have been burned by directory salespeople or agencies locking them into painful yearly contracts. Reassure them right away that Google Ads has zero contract lock-in. Showing them where the Pause button lives on screen builds instant relief and trust.',
      say: '"There is no contract at all. You are in charge every single day. You can lower your budget, pause for a quiet week, or stop completely with two clicks whenever you want."'
    },
    whatIf: {
      teaser: 'Your 10-second walk-in song...',
      question: 'What if every time you walked into the office or joined a meeting, a 10-second song clip played out loud automatically? What song would you pick?',
      note: 'Choose carefully, because you will hear it every Monday morning at 9:00!'
    },
    xmas: {
      category: 'Barcelona in December',
      title: 'Fira de Santa Llúcia in front of the Cathedral',
      body: 'Dating back to 1786, Fira de Santa Llúcia is Barcelona’s oldest Christmas market. Nearly 200 wooden stalls fill the square outside the Gothic Cathedral with handmade nativity figures, moss, mistletoe, Christmas trees, and festive ornaments.',
      tip: 'Go around 18:00 on a weekday via Jaume I metro station so you can enjoy the lights on the Cathedral without weekend crowds.'
    }
  },

  {
    day: 5,
    motifLabel: 'Santa’s Sleigh',
    icon: 'sleigh_hat',
    cardHeading: 'Day 5: Online Shop Pictures & Burned Customers',
    ads: {
      title: 'Shopping Ads: Putting product photos and prices up front',
      body: 'When someone searches "leather winter boots" or "espresso machine", Shopping Ads display a row of product photos, prices, star ratings, and shop names right at the top of Google. Because shoppers see the price before clicking, the people who click are much closer to buying.',
      when: 'Recommend Shopping Ads (or Retail PMax) to any online shop selling physical products, from clothing and gifts to spare parts.'
    },
    trust: {
      title: '"My cousin tried Google Ads once and we lost €300 with zero sales"',
      body: 'Never tell a customer they did it wrong, and never get defensive. Ask curious questions about what happened. Nine times out of ten, the old attempt sent everyone to a generic homepage, targeted the whole country instead of their city, or used super broad words. Showing what you will do differently earns a second chance.',
      say: '"I hear that a lot, and it usually happens when ads show too far away or land on a general homepage. Before spending anything, let’s check what went wrong last time so we never repeat it."'
    },
    whatIf: {
      teaser: 'Santa’s blocked search words...',
      question: 'What if Santa had a Google Ads account? What is the funniest search phrase he would definitely have to block on his Negative Keyword list?',
      note: 'Maybe "how to sue someone stuck in my chimney" or "free coal next day delivery"!'
    },
    xmas: {
      category: 'Spain in December',
      title: 'El Puente de diciembre: Putting up the tree',
      body: 'In Spain, the early December bank holidays (Constitution Day on Dec 6 and Immaculate Conception on Dec 8) are the traditional weekend when families bring out the decorations, build the Belén nativity scene, and buy the first boxes of turrón.',
      tip: 'City center streets in Barcelona get lively all week, so book ahead if you are heading out for dinner with friends.'
    }
  },

  {
    day: 6,
    motifLabel: 'Nikolaustag Boots',
    icon: 'snowflake',
    cardHeading: 'Day 6: Google Guaranteed & Competitor Click Fears',
    ads: {
      title: 'Local Services Ads: Paying per phone lead, not per click',
      body: 'Local Services Ads appear right at the very top of Google with a green "Google Guaranteed" checkmark badge, business hours, and customer reviews. Unlike regular ads, the business owner does not pay for website clicks. They only pay when a customer calls or messages them directly through the ad.',
      when: 'Ideal for plumbers, electricians, locksmiths, appliance repair, cleaning companies, and local lawyers.'
    },
    trust: {
      title: '"What if my competitors keep clicking my ad to waste my money?"',
      body: 'Almost every local business owner worries that the rival shop across the street will sit there clicking their ad 40 times every morning. Give them peace of mind: Google automatically detects repeated clicks from the same phone or Wi-Fi, bots, and suspicious activity, and filters those charges out automatically.',
      say: '"Google has automatic protection built in for that. If a competitor clicks your ad repeatedly from their phone or office, the system flags it as invalid and does not bill you for those clicks."'
    },
    whatIf: {
      teaser: '8 extra hours every night (no work allowed)...',
      question: 'What if humans suddenly did not need sleep anymore, giving you 8 extra wide-awake hours every night, with one rule: you cannot use them for work? What would you do with the time?',
      note: 'Learn to cook everything? Read 100 books? Train for something wild?'
    },
    xmas: {
      category: 'Germany & Austria',
      title: 'Nikolaustag: Clean boots outside the front door',
      body: 'On the evening of December 5th, kids across Germany and Austria polish one winter boot until it shines and place it outside the door. By the morning of December 6th (Nikolaustag), St. Nikolaus fills clean boots with mandarins, walnuts, chocolate coins, and spiced Lebkuchen.',
      tip: 'Ask our German colleagues if they ever found a twig from Knecht Ruprecht in their boot growing up!'
    },
    recipe: {
      title: 'No-Bake German Marzipankartoffeln (Marzipan Bites)',
      meta: '12 mins · Makes 20 bites · No oven',
      ingredients: [
        '200 g plain almond marzipan paste (easy to find at Lidl or Aldi)',
        '50 g powdered icing sugar',
        '1 tsp dark rum, amaretto, or fresh orange juice',
        '1/2 tsp vanilla extract',
        '1.5 tbsp unsweetened cocoa powder + pinch of cinnamon'
      ],
      steps: [
        'Tear the marzipan into small pieces in a bowl, add the icing sugar, vanilla, and splash of amaretto or orange juice, and knead with clean hands until smooth.',
        'Roll the mixture into 20 bite-sized balls (slightly uneven shapes make them look like real tiny potatoes!).',
        'Put the cocoa powder and cinnamon into a small lidded container or bowl.',
        'Drop 4 or 5 marzipan balls in at a time, shake gently so they get a light dusty coat, and tap off any excess cocoa.'
      ]
    }
  },

  {
    day: 7,
    motifLabel: 'Sunny BCN Vermut',
    icon: 'ornament',
    cardHeading: 'Day 7: Phone Call Ads & Beating Big Companies',
    ads: {
      title: 'Call Ads & Call Buttons: Straight to a real human voice',
      body: 'Not every small business has a fancy website, and many urgent customers on mobile phones just want to speak to someone right away. Call Ads and Call Extensions place a clear phone button right inside the Google search result so people can call in one tap.',
      when: 'Great for garages, dental clinics, vets, taxi or transfer firms, and home repair businesses during opening hours.'
    },
    trust: {
      title: '"We are a tiny family shop, big chains will always outbid us"',
      body: 'New advertisers often assume Google works like a billboard where only giant budgets win. Explain simply that Google cares deeply about relevance and local distance: a helpful, well-written local ad for a neighborhood specialist in Barcelona can appear right alongside (or above) a huge national chain without needing a big budget.',
      say: '"Big companies advertise everywhere at once, which makes their ads quite general. Because you are right here in the neighborhood offering the exact service someone wants, Google rewards that relevance."'
    },
    whatIf: {
      teaser: 'If animals left Google Reviews on humans...',
      question: 'What if animals could leave 1-to-5 star Google Reviews about humans? Which animal in Barcelona (seagulls, pigeons, or spoiled neighborhood dogs) would leave the harshest 1-star review?',
      note: 'Bonus points if you write what their review would actually say!'
    },
    xmas: {
      category: 'Barcelona in December',
      title: 'Sunny December vermut on a terrace',
      body: 'One of the best little joys of living in Barcelona in December is sitting outside on a sunny Saturday at 13:00 in just a sweater, sharing olives, patatas chips, and cold vermut while northern Europe is freezing.',
      tip: 'Carrer del Parlament in Sant Antoni or the small squares around Gràcia are unbeatable for a relaxed pre-lunch vermut.'
    }
  },

  {
    day: 8,
    motifLabel: 'Weihnachtsmarkt',
    icon: 'gluhwein',
    cardHeading: 'Day 8: Tours & Tickets + Word-of-Mouth Customers',
    ads: {
      title: 'Things to Do Ads: Ticket cards for tours and activities',
      body: 'When visitors search Google for things like "Sagrada Família guided tour", "kayak Costa Brava", or "flamenco tickets Barcelona", Things to Do Ads show photo cards with exact ticket prices and a link directly to the local tour company’s booking page.',
      when: 'Perfect for local tour guides, boat trips, museums, wineries, cooking classes, and attraction providers.'
    },
    trust: {
      title: '"We get all our customers by word of mouth, we don’t need Google"',
      body: 'Never dismiss word of mouth. Tell them it is the best compliment a business can get! Then walk through what happens next in real life: when a friend recommends a restaurant or clinic, the person pulls out their phone and types the name into Google. If a competitor runs an ad on that search, you can lose a customer who was already looking for you.',
      say: '"Word of mouth is gold, nothing beats a happy customer. The catch is that people still Google your name to find your phone number or hours, and showing up clearly there makes sure nobody else steps in front of your referral."'
    },
    whatIf: {
      teaser: 'Inventing our own office Christmas mashup...',
      question: 'What if our multicultural Barcelona office invented one combined December holiday mixing traditions from Catalonia, Spain, Germany, and the Netherlands? What are the official rules and food?',
      note: 'Singing to Caga Tió with a mug of Glühwein in one hand and a stroopwafel in the other sounds pretty hard to beat.'
    },
    xmas: {
      category: 'German Tradition',
      title: 'Weihnachtsmarkt mugs and Feuerzangenbowle',
      body: 'German Christmas markets are built around standing outdoors in the cold with friends holding a hot ceramic mug of spiced Glühwein. Every mug has a small deposit ("Pfand") of a few euros, and almost everyone has at least two market mugs at home that somehow made it back in their coat pocket.',
      tip: 'Ask a German teammate about Feuerzangenbowle, where a rum-soaked sugar cone is set on fire so melted caramel drips into hot mulled wine!'
    },
    recipe: {
      title: 'Cozy Homemade Weihnachtsmarkt Glühwein',
      meta: '15 mins · Serves 4 to 5 mugs',
      ingredients: [
        '1 bottle (750 ml) fruity Spanish red wine (Garnacha or young Tempranillo)',
        '1 whole orange, sliced into rounds',
        '2 cinnamon sticks & 4 whole cloves',
        '2 star anise pods (optional)',
        '3 tbsp honey or brown sugar (adjust to taste)',
        'Optional splash of dark rum or Amaretto to finish'
      ],
      steps: [
        'Pour the red wine into a saucepan over low-medium heat and add the sliced orange, cinnamon sticks, cloves, star anise, and honey.',
        'Warm gently for 12 to 15 minutes until steaming hot and fragrant, but NEVER let it boil (boiling burns off the alcohol and makes the spices bitter).',
        'Taste a spoonful and stir in one more spoon of honey or brown sugar if your wine is very dry.',
        'Ladle through a strainer into warm mugs and garnish each mug with a fresh slice of orange.'
      ]
    }
  },

  {
    day: 9,
    motifLabel: 'Llums de Sant Pau',
    icon: 'sant_pau_lantern',
    cardHeading: 'Day 9: Visual Ads & "I Only Use Instagram"',
    ads: {
      title: 'Demand Gen: Photo and video ads across YouTube, Discover & Gmail',
      body: 'Sometimes a product is so visual or new (like custom jewelry, home makeovers, or winter holiday packages) that people need to *see* it before they ever think to search for it. Demand Gen runs eye-catching photo and short video ads across YouTube, YouTube Shorts, Google Discover, and Gmail.',
      when: 'Recommend this when a customer already has good photos or short social videos and wants to reach new local audiences visually.'
    },
    trust: {
      title: '"We already post on Instagram, why would we need Google?"',
      body: 'Explain how the two do completely different jobs without bashing social media. Instagram is like walking past a nice shop window when you are strolling around town. Google is the phone book people open when their boiler breaks, they need a birthday cake for Friday, or they are ready to book.',
      say: '"Instagram is great for showing nice photos and keeping regulars updated. Google is where new customers go at the exact moment they actually need to buy or book something today."'
    },
    whatIf: {
      teaser: '3 hours in a time machine (watch-only)...',
      question: 'What if you could travel back in time as an invisible guest for just 3 hours to watch any single concert, sports match, or historical moment live? Which one do you pick?',
      note: 'You cannot change history, just soak in the atmosphere and come right back!'
    },
    xmas: {
      category: 'Barcelona in December',
      title: 'Els Llums de Sant Pau light garden',
      body: 'Every December, the Art Nouveau buildings and gardens of Recinte Modernista de Sant Pau light up after dark with colorful projections, glowing stars, and music along a walking route.',
      tip: 'Book an evening weekday ticket ahead of time, hop off at Sant Pau | Dos de Maig metro, and walk down Avinguda de Gaudí afterward for tapas.'
    }
  },

  {
    day: 10,
    motifLabel: 'Belgian Waffles',
    icon: 'gingerbread',
    cardHeading: 'Day 10: Mobile Apps & Helping Non-Techy Owners',
    ads: {
      title: 'App Campaigns: Simple promotion for mobile apps',
      body: 'If a business has an iOS or Android app, App Campaigns are one of the easiest setups in Google Ads. You provide a few short text lines, a budget, and the app store link, and Google automatically shows the app across Google Play, Search, YouTube, and mobile sites to find people likely to download and use it.',
      when: 'Use for delivery apps, local booking apps, fitness apps, or retail apps wanting either new downloads or repeat orders from existing users.'
    },
    trust: {
      title: '"I am terrible with computers and have zero time for this"',
      body: 'Many brilliant bakers, mechanics, and shopkeepers feel intimidated by dashboards and tech words. Never overwhelm them with acronyms. Promise to keep things in plain everyday language, handle the setup step by step with them, and focus only on how many real calls or orders they get.',
      say: '"You do not need to become a computer expert, your job is running your business. We set the location and budget together in plain English, and you only need 10 minutes a month to check if the phone is ringing more."'
    },
    whatIf: {
      teaser: 'Convincing the Grinch in 30 seconds...',
      question: 'What if you hopped on a call and realized the customer on the other end was literally the Grinch? What would you say in 30 seconds to stop him from hanging up?',
      note: 'Remember: too much holiday cheer makes him allergic!'
    },
    xmas: {
      category: 'Belgium & Benelux',
      title: 'Speculoos biscuits and Brussels winter lights',
      body: 'In Belgium, December smells like cinnamon, brown sugar, and cloves from crunchy Speculoos biscuits served beside every afternoon coffee, while the historic Grand-Place in Brussels glows with evening light shows and wooden market chalets.',
      tip: 'Dipping a Speculoos biscuit into hot coffee or hot chocolate for two seconds is dangerously addictive.'
    },
    recipe: {
      title: '10-Minute Belgian Speculoos Tiramisu Cups',
      meta: '10 mins + 1 hr chill · Serves 4 · No oven, no raw eggs',
      ingredients: [
        '16 Lotus Biscoff / Speculoos biscuits',
        '250 g cold mascarpone cheese',
        '150 ml cold whipping cream (nata para montar 35%)',
        '3 tbsp powdered sugar & 1 tsp vanilla extract',
        '120 ml strong cooled espresso or moka coffee'
      ],
      steps: [
        'Whip the cold mascarpone, cold whipping cream, powdered sugar, and vanilla together in one bowl until thick and fluffy (about 2 minutes).',
        'Quickly dip half the Speculoos biscuits for 1 second into the cooled coffee and lay them at the bottom of 4 small glasses.',
        'Spoon half the mascarpone cream on top, add a second layer of coffee-dipped biscuits, and finish with the rest of the cream.',
        'Chill for at least 1 hour, then crush 2 dry Speculoos biscuits on top right before serving so they stay crunchy.'
      ]
    }
  },

  {
    day: 11,
    motifLabel: 'Sagrada Família Star',
    icon: 'bell_holly',
    cardHeading: 'Day 11: YouTube Videos & Proving Numbers Are Real',
    ads: {
      title: 'YouTube Video Ads: Introducing a business with video',
      body: 'More people watch YouTube on phones and living-room TVs than almost any TV channel, and unlike traditional TV, a local business can show their video only inside their own city or postcode. You can optimize for broad local awareness (Reach) or only pay when someone watches at least 10 to 30 seconds (Views).',
      when: 'Helpful when a business has a story easier to show than explain in text, like a new gym, restaurant, clinic, or school.'
    },
    trust: {
      title: '"How do I know Google isn’t just making up click numbers?"',
      body: 'Skeptical beginners do not trust graphs on a screen, and honestly, they shouldn’t have to take clicks on faith! Encourage them to judge Google Ads by real things they can verify themselves: actual phone calls, contact emails in their inbox, or asking new callers "How did you find us?".',
      say: '"Do not judge it by clicks on a graph, judge it by your phone and your cash register. Let’s send the ad to a clear contact form or tracked phone number so you can count every real inquiry yourself."'
    },
    whatIf: {
      teaser: 'If your music algorithm planned your Saturday...',
      question: 'What if your Spotify or YouTube history was put in charge of planning your entire Saturday from morning to midnight? What kind of day are you about to have?',
      note: 'Peaceful acoustic morning coffee, or chaotic 2000s throwbacks and random 2 AM cooking videos?'
    },
    xmas: {
      category: 'Barcelona in December',
      title: 'Christmas market around Sagrada Família',
      body: 'A bit quieter and more neighborhood-friendly than the Gothic Quarter market, the stalls around Plaça de la Sagrada Família sell handmade decorations, churros, cheeses, and winter treats right beneath Gaudí’s towers.',
      tip: 'Go after 18:00 to see the huge 12-pointed glass star shining high up on the Tower of the Virgin Mary.'
    }
  },

  {
    day: 12,
    motifLabel: 'Castañas Asadas',
    icon: 'gift_parcel',
    cardHeading: 'Day 12: Gentle Reminders & Working With Small Budgets',
    ads: {
      title: 'Display Remarketing: Bringing back window shoppers',
      body: 'Most people do not buy or book on the very first website visit. They open three tabs, get distracted by WhatsApp, and forget which site they liked. Display Remarketing shows a polite visual reminder banner across news sites and blogs exclusively to people who already visited your client’s website.',
      when: 'Great add-on for considered purchases like furniture, dental implants, home renovations, weddings, or holiday bookings.'
    },
    trust: {
      title: '"My budget is really small, is there even any point starting?"',
      body: 'Be completely honest here: a tiny budget WILL fail if you try to advertise 15 different services across all of Spain. Instead, show them how a small budget works great when focused like a laser on their #1 highest-profit service inside a tight local radius.',
      say: '"A modest budget works well as long as we do not spread it too thin. Instead of advertising everything you do across the whole region, let’s put 100% of it behind your single best service within 5 kilometers of your door."'
    },
    whatIf: {
      teaser: 'Swapping jobs for just one week...',
      question: 'What if you could swap jobs for one week with any non-office job in the world (bakery chef, ferry captain, mountain ranger, Formula 1 mechanic)? Which job would you try?',
      note: 'You get magical training for the week so nobody crashes anything!'
    },
    xmas: {
      category: 'Spanish Winter Street Tradition',
      title: 'Paper cones of hot roasted chestnuts',
      body: 'All through December, wooden huts on street corners across Barcelona and Spain roast sweet chestnuts (castañas) and orange sweet potatoes (boniatos) over hot coals. They wrap them in newspaper cones that keep your hands warm while you walk.',
      tip: 'Grab a cone at Plaça Universitat or Portal de l’Àngel on a chilly evening walk home.'
    },
    recipe: {
      title: 'Easy Oven-Roasted Castañas (That Actually Peel Cleanly!)',
      meta: '30 mins · Serves 3 to 4 · 2 ingredients',
      ingredients: [
        '500 g fresh whole chestnuts (castañas)',
        '1 tbsp coarse sea salt',
        '1 bowl of warm tap water',
        '1 clean kitchen towel'
      ],
      steps: [
        'Lay each chestnut flat on a board and cut a firm X across the rounded brown shell with a small serrated bread knife (this stops them popping in the oven).',
        'Soak the scored chestnuts in warm salted water for 10 minutes. That tiny steam pocket under the shell is the secret to easy peeling!',
        'Drain, dry briefly, spread cut-side-up on a baking tray, and roast at 210°C for 18 to 20 minutes until the X curls open.',
        'Wrap the hot chestnuts tightly inside a clean kitchen towel for 5 minutes to steam, then peel and eat warm.'
      ]
    }
  },

  {
    day: 13,
    motifLabel: 'El Caga Tió',
    icon: 'caga_tio',
    cardHeading: 'Day 13: All-in-One PMax & Googling Your Own Ad',
    ads: {
      title: 'Performance Max (PMax): One simple campaign across all of Google',
      body: 'Performance Max lets an advertiser upload headlines, photos, logos, and their goal (such as online sales or contact leads), and Google’s system finds customers across Search, Shopping, YouTube, Maps, Display, and Gmail from one single campaign.',
      when: 'Good fit when a business has clear conversion tracking set up and wants broad coverage across Google without managing five separate campaign types.'
    },
    trust: {
      title: '"I typed my service into Google 10 times today and didn’t see my ad!"',
      body: 'Almost every new advertiser panics and calls about this in Week 1! Explain the funny reason warmly: when you search for your own business over and over on your phone without clicking, Google learns that *your* phone never buys anything, so it stops showing the ad to you in order to save your daily budget for actual customers.',
      say: '"That actually means Google is protecting your money! Because you searched several times without clicking, the system stopped showing the ad to your phone so your budget goes to real customers instead. Let me show you the live impression report."'
    },
    whatIf: {
      teaser: 'Waking up inside a Christmas movie...',
      question: 'What if you woke up inside the plot of the last Christmas or winter movie you watched (Home Alone, Love Actually, Die Hard, Elf, The Holiday)? How well are you doing?',
      note: 'Trading houses with someone in snowy England sounds great; setting traps for burglars sounds exhausting!'
    },
    xmas: {
      category: 'Catalan Tradition',
      title: 'El Tió de Nadal (Caga Tió): The smiling Christmas log',
      body: 'In Catalonia, families bring home a wooden log with a painted smiley face and a little red Catalan hat (barretina). Kids cover him with a blanket to keep him warm and "feed" him mandarin peels every night until Christmas, when they tap him with sticks while singing a song so he "poops" out turrón and small presents under the blanket!',
      tip: 'Look for tiny desk-sized Caga Tiós at any neighborhood market in Barcelona this week.'
    },
    recipe: {
      title: 'Shortcut Catalan Canelons de Sant Esteve',
      meta: '40 mins · Serves 4 · Classic Boxing Day comfort dish',
      ingredients: [
        '16 pre-cooked or soak-only cannelloni pasta sheets (placas de canelones)',
        '350 g shredded rotisserie roast chicken (pollo a l’ast)',
        '1 small onion, finely chopped & cooked soft in olive oil',
        '2 tbsp pork or chicken pâté (traditional Catalan shortcut for richness!)',
        '500 ml béchamel sauce (homemade or fresh carton) + pinch of nutmeg',
        '80 g grated Emmental or Manchego cheese'
      ],
      steps: [
        'Soak the cannelloni pasta sheets in hot water for 12 minutes per the box instructions, then lay them flat on a clean cloth.',
        'Pulse or finely chop the roast chicken with the soft cooked onion, the spoonfuls of pâté, and 3 tablespoons of béchamel until creamy and easy to roll.',
        'Place a strip of filling on each sheet, roll into neat tubes, and line them snugly in a buttered baking dish.',
        'Pour the rest of the nutmeg-seasoned béchamel over the top, scatter with grated cheese, and bake at 200°C for 18 minutes until bubbling and golden.'
      ]
    }
  },

  {
    day: 14,
    motifLabel: 'Petritxol Churros',
    icon: 'churros_cup',
    cardHeading: 'Day 14: Built-in Lead Forms & Honest Week-1 Expectations',
    ads: {
      title: 'Lead Form Extensions: Collecting contacts right inside Google',
      body: 'Sometimes a small business has a great service, but their website takes forever to load on mobile phones or has a confusing contact page. Lead Form Extensions attach a clean, fast contact form directly under the Google ad so interested people can leave their name and phone number in seconds.',
      when: 'Very useful for quotes (solar panels, renovations, courses, B2B services, car test drives) when the client’s mobile website is letting them down.'
    },
    trust: {
      title: '"It’s been 3 days and my phone hasn’t rung off the hook yet!"',
      body: 'New advertisers stay calm when you set honest expectations BEFORE they start. Never promise overnight miracles on Day 1. Explain upfront that the first two weeks are about seeing which exact search words real locals use, blocking irrelevant ones, and letting results build steadily.',
      say: '"Before we switch this on, I want to be super honest with you: the first couple of weeks are for gathering real data and fine-tuning, not overnight fireworks. We check it together in Week 2 to see what people are clicking."'
    },
    whatIf: {
      teaser: 'If white lies turned your hair blue...',
      question: 'What if every tiny polite lie (like "On my way, 2 minutes!" or "Sorry, just saw your message!") turned your hair bright blue for an hour? How blue would our office look by noon?',
      note: 'Be honest: what is your most common harmless white lie?'
    },
    xmas: {
      category: 'Barcelona in December',
      title: 'Thick hot chocolate & churros on Carrer de Petritxol',
      body: 'Tucked away in the Gothic Quarter, narrow pedestrian Carrer de Petritxol is famous for traditional chocolate cafés like Granja Dulcinea and La Pallaresa, where thick hot chocolate arrives with a big swirl of fresh whipped cream ("un suís").',
      tip: 'Try dipping soft Catalan sponge biscuits ("melindros") alongside classic crispy churros.'
    },
    recipe: {
      title: 'Petritxol-Style Thick Hot Chocolate ("Xocolata Suís")',
      meta: '10 mins · Serves 2 thick mugs',
      ingredients: [
        '400 ml whole milk',
        '120 g dark chocolate (65% to 70% cocoa), chopped',
        '1.5 tsp cornstarch (Maizena)',
        '1 tbsp sugar + a tiny pinch of sea salt',
        'Whipped cream & bakery churros or melindros for dipping'
      ],
      steps: [
        'Whisk the cornstarch into 3 tablespoons of cold milk in a mug until completely lump-free.',
        'Warm the rest of the milk, sugar, and pinch of salt in a small pot over medium heat, then melt in the chopped dark chocolate while stirring.',
        'Pour in the cornstarch mixture and whisk gently for 2 minutes on low heat until it thickens like velvet pudding.',
        'Pour into two warm mugs and top generously with cold unsweetened or lightly sweetened whipped cream.'
      ]
    }
  },

  {
    day: 15,
    motifLabel: 'Vanillekipferl',
    icon: 'espresso_mitten',
    cardHeading: 'Day 15: Tight Radius Pins & Saying "Wait" to Earn Trust',
    ads: {
      title: 'Location & Radius Targeting: Only paying for neighbors nearby',
      body: 'One of the best features for small businesses is drawing an exact map boundary. A hairdresser in Poblenou or a plumber in Badalona does not need clicks from Madrid or Girona. You can target specific postcodes, cities, or even a 3 km circle around the shop.',
      when: 'Check this first on every local business account so not a single euro goes outside the area they actually serve.'
    },
    trust: {
      title: 'The fastest way to build real trust: Tell them if they aren’t ready yet',
      body: 'If you open a prospect’s website and see their phone number is missing, their booking link is broken, or they are already fully booked until mid-January, tell them NOT to start ads until next week. Salespeople push for today; trusted advisors protect the customer.',
      say: '"Looking at your mobile site together, the contact button is currently broken. Let’s get your web person to fix that first before you spend a single euro on Google, and we can speak on Thursday."'
    },
    whatIf: {
      teaser: '€50,000 for a fun passion shop in Barcelona...',
      question: 'What if someone gave you €50,000 just to open a tiny passion-project café, shop, or quirky little spot in Barcelona that never needed to make a profit? What would you open, and in which neighborhood?',
      note: 'A cozy rainy-day bookshop? Late-night grilled cheese window? Dog-friendly vinyl café?'
    },
    xmas: {
      category: 'Germany & Austria',
      title: 'Christmas cookie tins: Vanillekipferl & Christstollen',
      body: 'By mid-December across Germany and Austria, every kitchen table has metal tins filled with homemade butter cookies, especially crescent-shaped almond Vanillekipferl rolled in vanilla sugar, alongside rich fruit-and-marzipan Stollen bread.',
      tip: 'Stollen is baked weeks ahead of Christmas because resting wrapped up makes the spices and butter soak in!'
    },
    recipe: {
      title: '5-Ingredient Melt-in-the-Mouth Vanillekipferl',
      meta: '30 mins · Makes ~28 almond crescents',
      ingredients: [
        '200 g plain flour',
        '100 g finely ground almonds (harina de almendra)',
        '150 g cold butter, cubed',
        '60 g powdered sugar + pinch of salt (for the dough)',
        '50 g powdered sugar mixed with 2 packets vanilla sugar (for coating)'
      ],
      steps: [
        'Mix the flour, ground almonds, 60 g powdered sugar, and salt. Knead quickly with the cold butter until it forms a smooth dough, then chill 20 minutes.',
        'Pinch off walnut-sized pieces, roll into little ropes with tapered ends, and curve into crescent moons on a lined baking tray.',
        'Bake at 175°C for 11 to 13 minutes until just the very tips turn pale golden (keep the cookies pale!).',
        'Wait 3 minutes so they firm up slightly, then gently toss the warm crescents in the vanilla-powdered sugar mix.'
      ]
    }
  },

  {
    day: 16,
    motifLabel: 'Tibidabo Ice Rink',
    icon: 'candle_wreath',
    cardHeading: 'Day 16: Opening Hours Only & Fixing Website Leaks',
    ads: {
      title: 'Ad Scheduling: Running ads only when someone can answer',
      body: 'By default, ads can run 24 hours a day. For an online webshop that is great, because people shop in bed at 23:00. But for a dental receptionist or local repair desk that closes at 19:00, paying for phone-call clicks at midnight often means missed calls and wasted money.',
      when: 'Use Ad Scheduling for service businesses that rely on live phone calls so ads run strictly when someone is there to pick up.'
    },
    trust: {
      title: '"People clicked my ad, looked at my site, and nobody called!"',
      body: 'When a beginner gets clicks without calls, resist blaming them and look at their mobile page through a stranger’s eyes together. Is the phone number clickable at the top? Does it clearly say which neighborhood they are in and roughly what they charge? Small page tweaks often turn clicks into customers.',
      say: '"Getting clicks proves locals are searching for what you do. Let’s look at your page on a phone together: if we put a clear \'Call for a Free Quote\' button right at the top, far more of those visitors will ring you."'
    },
    whatIf: {
      teaser: 'If bidding strategies planned our Friday dinner...',
      question: 'What if Google Ads settings planned our team Christmas dinner in El Born? What funny mistake would "Maximize Clicks" or "Broad Match" end up booking?',
      note: '"Maximize Clicks" definitely books 12 standing-room bars with zero food on the table!'
    },
    xmas: {
      category: 'Barcelona in December',
      title: 'Ice skating with a view at Tibidabo',
      body: 'Even though it rarely snows in Barcelona, Tibidabo sets up a winter ice rink high above the city with panoramic views stretching all the way over Barcelona out to the Mediterranean Sea.',
      tip: 'Head up in the late afternoon so you catch sunset turning into city lights below.'
    }
  },

  {
    day: 17,
    motifLabel: 'Els Pastorets',
    icon: 'candy_cane',
    cardHeading: 'Day 17: Negative Keywords & Dropping the "Sales Voice"',
    ads: {
      title: 'Negative Keywords: Blocking words that waste budget',
      body: 'Just as important as choosing which searches trigger an ad is telling Google which words to ignore. If a customer sells luxury custom kitchens, adding Negative Keywords like "cheap", "IKEA", "second hand", "DIY", and "jobs" stops job-seekers and bargain-hunters from clicking.',
      when: 'Explain Negative Keywords to cautious small business owners early on. Knowing they can block unwanted words makes them feel much safer.'
    },
    trust: {
      title: 'Drop the fast "salesperson voice" in the first 10 seconds',
      body: 'Small business owners get 5 telemarketing calls a week, so an overly bubbly or scripted sales voice triggers an instant wall. Slow your pace down, talk like a normal neighbor, and ask permission before jumping in.',
      say: '"Hi Marta, I know I am catching you in the middle of the workday. Do you have two quick minutes, or is there a calmer time after the lunch rush?"'
    },
    whatIf: {
      teaser: 'Deleting one tiny everyday annoyance forever...',
      question: 'What if you could permanently erase ONE small everyday annoyance from human life? Which one are you deleting for everyone?',
      note: 'People walking 4 side-by-side slowly on narrow sidewalks? Tangled headphone/charger cables? Wet socks?'
    },
    xmas: {
      category: 'Catalan Tradition',
      title: 'Els Pastorets: Holiday shepherd plays across Catalonia',
      body: 'Every December, local theaters and town halls all over Catalonia perform "Els Pastorets", traditional Christmas plays telling the story of two funny, clumsy shepherds trying to reach Bethlehem while outsmarting theatrical comic-book devils.',
      tip: 'Almost every Catalan family has a story of someone playing a little shepherd or devil in a school Pastorets show!'
    }
  },

  {
    day: 18,
    motifLabel: 'Dutch Gourmetten',
    icon: 'gourmetten_pan',
    cardHeading: 'Day 18: Daily Budget Smoothing & Calming AI Fears',
    ads: {
      title: 'How Daily Budgets actually work (Busy days vs. quiet days)',
      body: 'Beginners get startled if they set a €10 daily budget and see €14 spent on a busy Tuesday! Make sure you know how it works: Google allows up to 2x the daily budget on high-traffic days when lots of buyers are searching, and spends less on quiet days, while NEVER exceeding €10 × 30.4 (€304) across the month.',
      when: 'Always mention this for 20 seconds during setup so the customer never panics if Day 2 spends €13 instead of €10.'
    },
    trust: {
      title: '"I don’t trust AI making up random ads for my business"',
      body: 'Many business owners hear "AI" and worry Google will invent fake discounts or write embarrassing sentences under their business name. Show them clearly that *they* write and approve the headlines, descriptions, photos, and offers, and can turn off automatic text creation anytime.',
      say: '"Nothing goes out with your name on it unless we approve the wording first. Google just tests which of your approved headlines works best, and it will never invent fake prices or promises."'
    },
    whatIf: {
      teaser: 'If your 12-year-old self shadowed you today...',
      question: 'What if your 12-year-old self spent one normal Tuesday following you around Barcelona? What part of your life would amaze them most, and what part would confuse them?',
      note: '"Wait, you can buy ice cream whenever you want as an adult and you chose a salad?!"'
    },
    xmas: {
      category: 'Netherlands & Belgium',
      title: 'Gourmetten: Tiny frying pans around the Christmas table',
      body: 'Ask any Dutch or Flemish colleague what they eat over Christmas and you will hear about "Gourmetten": a big electric tabletop grill in the middle of the table where everyone gets their own tiny frying pan to cook mini-burgers, shrimp, veggies, melted cheese, and tiny pancakes for three hours straight.',
      tip: 'Veteran Dutch tip: close all bedroom doors first, because the house will smell cheerfully of sizzling butter for two days!'
    },
    recipe: {
      title: 'Gourmetten Table Duo: Garlic Herb Butter & Mini-Pancake Pitchers',
      meta: '10 mins · Ready for any tabletop raclette or grill',
      ingredients: [
        '125 g soft salted butter + 1 grated garlic clove + 2 tbsp chopped parsley',
        '150 g plain flour + 1/2 tsp baking powder',
        '250 ml milk + 1 egg + 1 tsp vanilla sugar',
        'Toppings: sliced mushrooms, raw shrimp, Raclette cheese & apple slices'
      ],
      steps: [
        'Mash the soft butter with the grated garlic and chopped parsley in a small bowl so everyone can melt a dab in their mini pan for shrimp, steak bites, or mushrooms.',
        'Whisk the flour, baking powder, milk, egg, and vanilla sugar together and pour into a small coffee milk jug or squeeze bottle.',
        'Between savory rounds, let everyone pour a thin splash of batter right into their hot mini pan with a slice of apple or chocolate square.',
        'Flip after 60 seconds with a tiny wooden spatula for instant tabletop Dutch mini-pancakes!'
      ]
    }
  },

  {
    day: 19,
    motifLabel: 'Nadal al Port',
    icon: 'port_ferris',
    cardHeading: 'Day 19: Clicks vs. Customers & How Ad Prices Work',
    ads: {
      title: 'Smart Bidding simply explained: Hunting buyers, not just clicks',
      body: 'In the early days, ads just chased as many cheap clicks as possible. With modern Smart Bidding ("Maximize Conversions"), Google looks at signals like time of day, area, and search wording to bid more when someone looks ready to call or buy, and skip casual browsers.',
      when: 'Switch from click-focused bidding to conversion-focused bidding as soon as phone calls, bookings, or purchases are tracked.'
    },
    trust: {
      title: '"Why did one click cost €0.50 and another cost €2.40?"',
      body: 'Demystify Google’s auction so it stops feeling like a black box. Compare it to a quiet Tuesday vs. Saturday night: you only pay €0.01 more than the advertiser below you, so when fewer competitors are bidding, clicks are much cheaper.',
      say: '"Google never charges your maximum bid just because it can. It works like a live auction where you only pay one cent more than the business right below you, so quiet hours cost much less."'
    },
    whatIf: {
      teaser: 'Trading one life skill on a 3-hour flight...',
      question: 'What if airplanes had "Skill-Swap Seats" where sitting next to someone for a 3-hour flight let you trade one real-life skill with each other? What skill do you offer, and what skill would you love to get?',
      note: 'Walk onto a flight to London, walk off knowing how to play guitar, surf, or bake sourdough!'
    },
    xmas: {
      category: 'Barcelona in December',
      title: 'Nadal al Port: Christmas market down by the boats',
      body: 'Down along Moll de la Fusta at Port Vell, Barcelona puts a Mediterranean twist on Christmas: palm trees wrapped in lights, wooden food stalls beside the water, live music, and a giant 65-meter Ferris wheel overlooking the harbor.',
      tip: 'Go right around sunset for harbor views, then walk five minutes into El Born or Barceloneta for dinner.'
    }
  },

  {
    day: 20,
    motifLabel: 'Pessebre Vivent',
    icon: 'snow_globe',
    cardHeading: 'Day 20: Simple Tracking & Earning the Right to Upsell',
    ads: {
      title: 'Conversion Tracking: Knowing which clicks turned into customers',
      body: 'Running Google Ads without Conversion Tracking is like putting flyers around town and never asking callers where they heard of you. Setting up simple tracking on the "Thank You" page, booking button, or phone number tells both the owner and Google which ads actually bring business.',
      when: 'Treat this as step #1 before talking about bigger budgets. Even a basic tracked call button or "Booking Confirmed" page makes a huge difference.'
    },
    trust: {
      title: 'How to upsell a cautious beginner: Start with one step, then earn step two',
      body: 'If you pitch a brand-new, nervous shop owner three different campaigns on Day 1, they get overwhelmed and say no to everything. Start with ONE simple, focused campaign. Once they tell you "Hey, three new customers came in last week!", suggesting a second campaign feels like helpful teamwork, not selling.',
      say: '"Let’s not complicate things today. Let’s get this one local Search campaign bringing in steady calls first, and once it pays for itself next month, I can show you how Maps or YouTube could add to it."'
    },
    whatIf: {
      teaser: 'If re-gifted presents came with a history receipt...',
      question: 'What if every re-gifted Christmas present magically came with a printed receipt showing everyone who passed it along before you? What is a gift you received that you suspect was re-gifted?',
      note: 'Boxes of fancy bath soaps and mystery wine bottles would have incredible travel stories!'
    },
    xmas: {
      category: 'Catalan & Spanish Tradition',
      title: 'Living Nativity Scenes (Pessebres Vivents)',
      body: 'Across villages near Barcelona (such as Corbera de Llobregat or Bàscara), hundreds of neighbors dress up in period costumes among torchlit stone paths, bonfires, and real workshops to create outdoor walk-through Nativity villages.',
      tip: 'In central Barcelona, Plaça de Sant Jaume also puts up a special holiday installation every December.'
    }
  },

  {
    day: 21,
    motifLabel: 'Montjuïc Sunset',
    icon: 'rocket_star',
    cardHeading: 'Day 21: Free Ad Add-Ons & Pausing for Holidays',
    ads: {
      title: 'Assets (Extensions): Making Search ads bigger for €0 extra',
      body: 'A plain two-line text ad is easy to miss on a phone. Adding free Assets (a photo thumbnail, extra links to specific pages like "Prices" or "Contact", a call button, and a holiday offer line) makes the ad take up twice as much space on mobile screens at no extra cost per click.',
      when: 'Easy quick win for every Search campaign: always add at least 4 Sitelinks, Callouts, a Phone number, and an Image if eligible.'
    },
    trust: {
      title: '"What happens when we close for Christmas week or August?"',
      body: 'Small family businesses worry ads will keep charging them while the shutters are down for holidays. Show them how we can pre-schedule an automatic pause for the exact dates they close, and an automatic restart the morning they reopen.',
      say: '"Whenever you close for Christmas or summer holidays, we set the exact end date in advance so you pay zero euros while the shop is shut, and it switches back on the morning you open."'
    },
    whatIf: {
      teaser: 'An honest 5-word airport slogan for your city...',
      question: 'What if every city had to put a completely honest 5-word slogan at Airport Arrivals? What would Barcelona’s (or your hometown’s) honest slogan be?',
      note: '"Came for summer, stayed forever" or "Great tapas, good luck parking"?'
    },
    xmas: {
      category: 'Winter Milestone',
      title: 'December 21st: Winter Solstice & longer days ahead',
      body: 'Today is the shortest day of the year! While friends back in Amsterdam, Berlin, or Brussels see darkness roll in around 16:00, Barcelona still gets bright blue sky until nearly 17:30, and from tomorrow onward the days slowly get lighter again.',
      tip: 'Great excuse to catch sunset from Montjuïc or Bunkers del Carmel as the city lights switch on.'
    }
  },

  {
    day: 22,
    motifLabel: 'El Gordo Morning',
    icon: 'neules_turron',
    cardHeading: 'Day 22: Finding Brand-New Faces & Showing Real Local Demand',
    ads: {
      title: 'New Customer Acquisition: Focusing budget on first-time buyers',
      body: 'A common worry for established shops is paying for clicks from loyal regulars who already buy from them every month anyway. Google Ads lets businesses upload their existing customer list (or exclude their brand name) so the campaign focuses specifically on winning brand-new customers.',
      when: 'Great to mention when an owner says "Everyone in the neighborhood already knows us, I only want new people from outside our regular crowd."'
    },
    trust: {
      title: 'Show real local search numbers instead of making promises',
      body: 'Skeptical customers tune out promises like "You will get tons of leads." Instead, pull up Google’s Keyword Planner for their town and let them see the real monthly search numbers with their own eyes. Seeing that 1,400 people in Barcelona searched their exact service last month speaks for itself.',
      say: '"Rather than me guessing, let’s check how many people in Barcelona actually typed \'physiotherapist back pain\' into Google last month. Seeing the real search volume makes it easy to decide if it is worth testing."'
    },
    whatIf: {
      teaser: 'Bringing back one childhood snack or gadget...',
      question: 'What if you could bring back ONE discontinued childhood snack, old phone/gadget, or 2000s trend with zero judgment? What are you bringing back?',
      note: 'Flip phones? iPod Classics? MSN Messenger? That one ice cream from childhood summers?'
    },
    xmas: {
      category: 'Spanish Tradition',
      title: 'December 22nd: El Gordo Christmas Lottery morning',
      body: 'Today is the morning all of Spain turns on the radio or TV to hear the schoolchildren of San Ildefonso sing out the winning numbers for "El Gordo", the historic Christmas lottery where friends, families, bars, and coworkers all share slices ("décimos") of the same ticket.',
      tip: 'In Spain, December 22nd is widely considered the true starting whistle of the Christmas holidays!'
    }
  },

  {
    day: 23,
    motifLabel: 'Tortell de Reis',
    icon: 'three_kings_crown',
    cardHeading: 'Day 23: Simple Phone Videos & Speaking Plain Human Language',
    ads: {
      title: 'YouTube Shorts Ads: Reusing simple vertical phone videos',
      body: 'Business owners often think video ads require hiring an expensive camera crew. With YouTube Shorts Ads (inside Video or Demand Gen), a simple, authentic 20-second vertical video filmed on a phone showing their shop, team, or product works brilliantly.',
      when: 'Suggest this as an easy next step for any customer who already films short vertical Reels or TikToks for their business.'
    },
    trust: {
      title: 'Speak in real customers and euros, never marketing percentages',
      body: 'When reviewing an account with a new customer, resist reading out CTR, CPC, and Impression Share percentages. Translate everything into real-world terms they feel in their shop: how many people saw them, how many called or clicked directions, and what each inquiry cost.',
      say: '"In plain numbers: for €160 over the last three weeks, 190 locals visited your page and 18 tapped the button to call your reception desk, which comes out under €9 per phone call."'
    },
    whatIf: {
      teaser: 'If video calls showed comic-book thought bubbles...',
      question: 'What if video calls briefly showed a tiny cartoon thought bubble above everyone’s head? What thought would pop up above our team most often?',
      note: '"Am I on mute?", "Time for a second cortado", or "Is someone eating crunchy snacks?"'
    },
    xmas: {
      category: 'Spain & Catalonia',
      title: 'Turrón, Neules & Holidays that last until January 6th',
      body: 'Christmas tables here are loaded with trays of soft almond Turrón de Jijona, crunchy Turrón de Alicante, and rolled Catalan wafer tubes ("neules") dipped into Cava. Best of all, Spanish holidays keep rolling through Dec 28 pranks (Santos Inocentes), 12 lucky midnight grapes on New Year’s Eve, and the Three Kings parade on January 5th!',
      tip: 'When eating Tortell de Reis cake on Jan 6: find the tiny king figure to wear the paper crown, but find the dried bean ("la fava") and you pay for next year’s cake!'
    },
    recipe: {
      title: '4-Ingredient Crunchy Chocolate Turrón',
      meta: '10 mins + 1 hr chill · Makes 1 big holiday bar · No oven',
      ingredients: [
        '150 g dark chocolate (55% to 70%), broken into squares',
        '150 g milk chocolate, broken into squares',
        '3 heaped tbsp hazelnut spread (Nocilla / Nutella) or smooth almond butter',
        '60 g crispy puffed rice cereal (arroz inflado)'
      ],
      steps: [
        'Line a small rectangular loaf tin (or clean milk carton cut lengthwise) with parchment paper.',
        'Melt the dark chocolate, milk chocolate, and hazelnut spread gently together in a heatproof bowl over simmering water (or in 30-second microwave bursts) until glossy.',
        'Fold in the crispy puffed rice so every grain is coated in chocolate, then pour into your lined tin and smooth the top.',
        'Chill in the fridge for 1 hour until firm, slice into squares on a wooden board, and set out alongside Cava and neules.'
      ]
    }
  },

  {
    day: 24,
    motifLabel: 'Nit de Nadal Feast',
    icon: 'barcelona_star',
    cardHeading: 'Day 24: Post-Christmas Bargains & Warm Holiday Wishes!',
    ads: {
      title: 'The quiet week after Dec 25 ("Q5"): Less competition, eager buyers',
      body: 'Many big advertisers switch off their ads on December 24th once Christmas shipping ends. That makes December 26th through mid-January a hidden gem: click prices often drop while people sit on the sofa spending Christmas money, booking winter trips, or starting New Year fitness and learning goals.',
      when: 'Remind retail, travel, fitness, language school, and service clients that staying visible on a steady budget into early January often brings very affordable leads.'
    },
    trust: {
      title: 'Check in when you are NOT asking them to spend more',
      body: 'Nothing proves to a skeptical customer that you genuinely care like a quick, helpful note with zero sales pitch attached, such as reminding them to update their Christmas holiday opening hours on their Google Business Profile so customers do not show up to a closed door.',
      say: '"Just a quick note before the holidays, no action needed on your ads! Just remember to mark your Christmas holiday hours on your Google profile so visitors see when you are open. Have a wonderful break!"'
    },
    whatIf: {
      teaser: 'One magical gift voucher for every teammate in 2027...',
      question: 'What if you could slip one magical "real-life voucher" into every teammate’s stocking for next year (always catching green metro transfers, guaranteed sunny terrace tables, never losing keys)? What is on your voucher?',
      note: 'Share your voucher wish and tell us how you are celebrating Christmas Eve tonight!'
    },
    xmas: {
      category: 'Nit de Nadal in Barcelona',
      title: 'Escudella i Carn d’Olla, Cava & Bon Nadal Team!',
      body: 'Happy Christmas Eve to everyone in our Barcelona family! Tonight across Catalonia, pots of hot Escudella soup filled with giant shell-shaped "galets" pasta warm up dinner tables while concerts echo inside Palau de la Música Catalana.',
      tip: 'Whether you are flying home across Europe or celebrating right here by the sea: switch on your Out-of-Office, enjoy great food, and have a restful break. Bon Nadal, Feliz Navidad, Frohe Weihnachten & Fijne Feestdagen!'
    },
    recipe: {
      title: 'Shortcut Catalan Sopa de Galets with Mini Pilota Meatballs',
      meta: '35 mins · Serves 4 warm bowls',
      ingredients: [
        '1.5 liters rich Catalan "Caldo d’Escudella" or chicken & ham broth (Aneto or Gallina Blanca)',
        '180 g giant Catalan "galets" pasta shells',
        '250 g mixed minced pork & beef',
        '1 egg + 2 tbsp breadcrumbs + 1 minced garlic clove + chopped parsley',
        'Pinch of salt, black pepper & tiny grating of cinnamon or nutmeg'
      ],
      steps: [
        'Mix the minced pork and beef in a bowl with the egg, breadcrumbs, garlic, parsley, salt, pepper, and tiny pinch of nutmeg, then roll into walnut-sized mini meatballs ("pilotilles").',
        'Bring the rich Escudella broth to a gentle boil in a deep pot and drop in the mini meatballs.',
        'Add the giant galets pasta shells right into the simmering broth and cook for 14 to 16 minutes (check package time) until tender.',
        'Ladle the piping hot soup, giant shells, and juicy meatballs into deep bowls for an instant Nit de Nadal dinner.'
      ]
    }
  }
];

/**
 * Shuffled door numbers (1 to 24), just like a physical cardboard Advent Calendar.
 */
const SHUFFLED_DOOR_ORDER = [
  14,  3, 21,  8, 19,  1,
  12, 24,  6, 17, 10,  2,
  22, 15,  9, 18,  5, 23,
   4, 11, 20,  7, 16, 13
];

/**
 * 5 Classic Christmas Gift Palettes arranged so adjacent doors contrast nicely.
 */
const GRID_DOOR_PALETTES = [
  'red',    'green',  'cream',  'blue',   'ginger', 'red',
  'green',  'cream',  'ginger', 'red',    'blue',   'green',
  'ginger', 'red',    'green',  'cream',  'ginger', 'blue',
  'blue',   'green',  'red',    'ginger', 'cream',  'red'
];

/**
 * Builds the festive botanical wreath SVG that frames each closed door's number.
 * Closed doors show ONLY the number on a traditional Christmas design; the
 * custom watercolor illustration stays hidden inside until opened!
 */
function buildDoorWreathSVG(palette, dayNum) {
  const isCream = palette === 'cream';
  const outerRing = isCream ? '#c28d2c' : '#e8c468';
  const innerRing = isCream ? 'rgba(29, 86, 60, 0.42)' : 'rgba(253, 251, 247, 0.36)';
  const leafFill = isCream ? '#1d563c' : (palette === 'green' ? '#369463' : '#26734b');
  const leafStroke = isCream ? '#c28d2c' : '#f7e5b4';
  const berryFill = isCream ? '#b82529' : (palette === 'red' ? '#f6c453' : '#e04246');
  const starFill = isCream ? '#b58222' : '#f5d47a';

  const topCrest = (dayNum === 24 || dayNum === 0)
    ? `
      <path d="M60 4L62.6 10.6L69.5 11.2L64.1 15.4L65.9 22L60 18.2L54.1 22L55.9 15.4L50.5 11.2L57.4 10.6L60 4Z"
        fill="${starFill}" stroke="#fdfbf7" stroke-width="1"/>
    `
    : `
      <circle cx="60" cy="12" r="3.4" fill="${berryFill}" stroke="#fdfbf7" stroke-width="0.9"/>
      <circle cx="56.2" cy="15.8" r="2.9" fill="${berryFill}" stroke="#fdfbf7" stroke-width="0.9"/>
      <circle cx="63.8" cy="15.8" r="2.9" fill="${berryFill}" stroke="#fdfbf7" stroke-width="0.9"/>
    `;

  return `
    <svg class="door-wreath-svg" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <circle cx="60" cy="60" r="46" stroke="${outerRing}" stroke-opacity="0.72" stroke-width="1.5" stroke-dasharray="2.5 4.5"/>
      <circle cx="60" cy="60" r="39" stroke="${innerRing}" stroke-width="1.35"/>
      <path d="M58 15.5C49 8.5 39 10 34.5 17.5C42 21 50.5 20.5 58 15.5Z" fill="${leafFill}" stroke="${leafStroke}" stroke-width="1.1"/>
      <path d="M62 15.5C71 8.5 81 10 85.5 17.5C78 21 69.5 20.5 62 15.5Z" fill="${leafFill}" stroke="${leafStroke}" stroke-width="1.1"/>
      ${topCrest}
      <path d="M56 105C47 107.5 39 104.5 34 98" stroke="${outerRing}" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M64 105C73 107.5 81 104.5 86 98" stroke="${outerRing}" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="60" cy="105.5" r="2.6" fill="${starFill}"/>
      <path d="M14 56.5L15.6 59.4L18.5 61L15.6 62.6L14 65.5L12.4 62.6L9.5 61L12.4 59.4L14 56.5Z" fill="${starFill}" opacity="0.88"/>
      <path d="M106 56.5L107.6 59.4L110.5 61L107.6 62.6L106 65.5L104.4 62.6L101.5 61L104.4 59.4L106 56.5Z" fill="${starFill}" opacity="0.88"/>
    </svg>
  `;
}

/* ============================================================================
   PER-USER LOCALSTORAGE ISOLATION & DATE LOCK ENGINE
   ============================================================================ */

let memoryFallbackOpened = [];
let memoryExampleOpened = false;

function loadOpenedDoors() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set(memoryFallbackOpened);
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      const valid = parsed
        .map(Number)
        .filter((n) => Number.isInteger(n) && n >= 1 && n <= 24);
      memoryFallbackOpened = valid;
      return new Set(valid);
    }
  } catch (_) {
    // Fallback to memory if storage is blocked
  }
  return new Set(memoryFallbackOpened);
}

function saveOpenedDoor(dayNumber) {
  if (dayNumber === 0) {
    setExampleDoorOpened(true);
    return loadOpenedDoors();
  }
  const openedSet = loadOpenedDoors();
  openedSet.add(dayNumber);
  const sorted = Array.from(openedSet).sort((a, b) => a - b);
  memoryFallbackOpened = sorted;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sorted));
  } catch (_) {}
  return openedSet;
}

function isExampleDoorOpened() {
  try {
    const raw = window.localStorage.getItem(EXAMPLE_STORAGE_KEY);
    if (raw !== null) {
      memoryExampleOpened = raw === 'true';
      return memoryExampleOpened;
    }
  } catch (_) {}
  return memoryExampleOpened;
}

function setExampleDoorOpened(opened) {
  memoryExampleOpened = Boolean(opened);
  try {
    if (memoryExampleOpened) {
      window.localStorage.setItem(EXAMPLE_STORAGE_KEY, 'true');
    } else {
      window.localStorage.removeItem(EXAMPLE_STORAGE_KEY);
    }
  } catch (_) {}
}

function clearLocalOpenedDoors() {
  memoryFallbackOpened = [];
  memoryExampleOpened = false;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    window.localStorage.removeItem(EXAMPLE_STORAGE_KEY);
  } catch (_) {}
}

/**
 * Reads today's calendar date `(year, month 1..12, day 1..31)` in Barcelona
 * timezone (`Europe/Madrid`), so every coworker unlocks each December door at
 * midnight Barcelona time even if their laptop VPN is set to another timezone.
 * Falls back cleanly to the browser's local clock if Intl is unavailable.
 */
function getCurrentBarcelonaYMD() {
  const now = new Date();
  try {
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: CALENDAR_TIMEZONE,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).formatToParts(now);

    const year = Number(parts.find((p) => p.type === 'year')?.value);
    const month = Number(parts.find((p) => p.type === 'month')?.value);
    const day = Number(parts.find((p) => p.type === 'day')?.value);
    if (year && month && day) {
      return { year, month, day };
    }
  } catch (_) {}

  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate()
  };
}

/**
 * Enforces real December date locking:
 * - Before December 1st of `CALENDAR_YEAR` (e.g. November 2026): `maxUnlockedDay = 0`
 *   (all 24 numbered doors are locked; only Day 0 Sneak Peek is open).
 * - In December of `CALENDAR_YEAR`: Door N unlocks on December N (`day >= N`)
 *   and remains open on every day afterwards (`maxUnlockedDay = Math.min(24, day)`).
 * - After `CALENDAR_YEAR` (e.g. January 2027+): all 24 past doors remain open (`24`).
 * - Exception: Day 0 Sneak Peek (`day === 0`) is ALWAYS unlocked!
 * - Hidden admin override: `?preview=true` unlocks all 24 doors privately for testing.
 */
function getDateLockContext() {
  const params = new URLSearchParams(window.location.search);
  const queryPreview = params.get('preview') === 'true' || params.get('admin') === 'true';
  const forceLockedDemo = params.get('locked') === 'true';
  const simDateParam = params.get('simdate');

  let { year, month, day } = getCurrentBarcelonaYMD();
  if (simDateParam && /^\d{4}-\d{2}-\d{2}$/.test(simDateParam)) {
    const [y, m, d] = simDateParam.split('-').map(Number);
    year = y;
    month = m;
    day = d;
  }

  if (!forceLockedDemo && (UNLOCK_ALL_FOR_REVIEW || queryPreview)) {
    return {
      showQueryBanner: !UNLOCK_ALL_FOR_REVIEW && queryPreview,
      maxUnlockedDay: 24,
      statusMessage: 'Preview Mode · All 24 Doors Unlocked'
    };
  }

  // Any year after CALENDAR_YEAR (e.g. January 2027 onwards): all 24 December doors have passed
  if (year > CALENDAR_YEAR) {
    return {
      showQueryBanner: false,
      maxUnlockedDay: 24,
      statusMessage: 'Happy Holidays! All 24 Doors Open'
    };
  }

  // December of CALENDAR_YEAR: Door N opens on Dec N and stays open afterwards!
  if (year === CALENDAR_YEAR && month === 12) {
    const maxUnlockedDay = Math.min(24, day);
    let statusMessage = 'Merry Christmas! All 24 Doors Open';
    if (day === 1) {
      statusMessage = 'December 1 · Door 1 Open';
    } else if (day <= 24) {
      statusMessage = `December ${day} · Doors 1 to ${maxUnlockedDay} Open`;
    }
    return {
      showQueryBanner: false,
      maxUnlockedDay,
      statusMessage
    };
  }

  // Before December 1st of CALENDAR_YEAR: block all 24 numbered doors; Day 0 Sneak Peek is open!
  return {
    showQueryBanner: false,
    maxUnlockedDay: 0,
    statusMessage: 'Doors 1 to 24 Locked until Dec 1 · Day 0 Sneak Peek Open'
  };
}

/* ============================================================================
   UI RENDERING & ACCORDION MODAL
   ============================================================================ */

const dayDataByNumber = new Map([
  [0, exampleDoorData],
  ...calendarData.map((entry) => [entry.day, entry])
]);
let activeModalDay = null;
let lastFocusedElement = null;
let toastTimer = null;
let lastRenderedMaxUnlockedDay = null;

function initAdventCalendar() {
  const lockContext = getDateLockContext();
  lastRenderedMaxUnlockedDay = lockContext.maxUnlockedDay;

  const adminBanner = document.getElementById('admin-preview-banner');
  const adminResetBtn = document.getElementById('admin-reset-btn');
  const quickResetBtn = document.getElementById('quick-reset-doors-btn');
  const resetExampleBtn = document.getElementById('reset-example-door-btn');
  const dateStatusText = document.getElementById('date-status-text');

  if (lockContext.showQueryBanner && adminBanner) {
    adminBanner.hidden = false;
  }

  const resetAllHandler = () => {
    clearLocalOpenedDoors();
    renderExampleDoor();
    renderCalendarGrid();
    updateProgressUI();
    showToast('Closed all doors on your device.');
  };

  if (adminResetBtn) adminResetBtn.addEventListener('click', resetAllHandler);
  if (quickResetBtn) quickResetBtn.addEventListener('click', resetAllHandler);

  if (resetExampleBtn) {
    resetExampleBtn.addEventListener('click', () => {
      setExampleDoorOpened(false);
      renderExampleDoor();
      showToast('Closed Day 0 Sneak Peek.');
    });
  }

  if (dateStatusText) {
    dateStatusText.textContent = lockContext.statusMessage;
  }

  // Automatically unlock today's new door if a coworker leaves the tab open overnight
  const refreshLocksIfDayChanged = () => {
    const latest = getDateLockContext();
    if (latest.maxUnlockedDay !== lastRenderedMaxUnlockedDay) {
      lastRenderedMaxUnlockedDay = latest.maxUnlockedDay;
      if (dateStatusText) dateStatusText.textContent = latest.statusMessage;
      renderCalendarGrid();
      updateProgressUI();
    }
  };
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) refreshLocksIfDayChanged();
  });
  setInterval(refreshLocksIfDayChanged, 60000);

  renderExampleDoor();
  renderCalendarGrid();
  updateProgressUI();
  setupModalAndAccordions();
  setupMistletoeEasterEgg();
  initSnowCanvas();
  initSparkleCanvas();
}

/**
 * 20 Funny Mistletoe Easter Egg Messages (Barcelona, Team Cultures & Sales Life)
 */
const MISTLETOE_MESSAGES = [
  {
    tag: 'Barcelona Winter',
    text: 'Barcelona winter survival update: It dropped to 14°C today, so locals have officially brought out the heavy Arctic expedition puffer jackets.'
  },
  {
    tag: 'Sales & Ads Life',
    text: 'Sales classic: "I searched my own business 19 times today without clicking and now I cannot see my ad!" Congratulations mate, you just trained Google that you never buy anything.'
  },
  {
    tag: 'Catalan Tradition',
    text: 'Try explaining Caga Tió to a visiting friend: "Yes, we put a tiny red hat on a smiling wooden log, feed it mandarin peels, and hit it with sticks until it poops out turrón."'
  },
  {
    tag: 'Dutch & Benelux',
    text: 'Dutch Sinterklaas logic: Telling kids for centuries that Saint Nicholas lives in sunny Spain the rest of the year proves the Dutch always knew where the good weather was.'
  },
  {
    tag: 'German Xmas',
    text: 'German Weihnachtsmarkt math: You go out for "just one quick Glühwein" and somehow wake up owning three new ceramic Pfand mugs.'
  },
  {
    tag: 'Sales & Ads Life',
    text: 'Official December sales pipeline stages: 1) Great chat, 2) Proposal sent, 3) "Let’s revisit this right after Reyes on January 7th!"'
  },
  {
    tag: 'Barcelona Winter',
    text: 'Only in Barcelona can you drink a sunny terrace vermut in sunglasses at 13:30 and still complain that winter is freezing at 18:00.'
  },
  {
    tag: 'Dutch & Benelux',
    text: 'Warning: If a Dutch or Belgian teammate invites you over for Christmas Gourmetten, wear washable clothes because your jacket will smell happily of sizzling garlic butter until January 4th.'
  },
  {
    tag: 'Sales & Ads Life',
    text: 'December client wish: "Can we start on Dec 23rd, spend €5 total, and beat Amazon across all of Spain?" Sure thing, right after Santa switches his sleigh to Broad Match.'
  },
  {
    tag: 'Spain Holiday',
    text: 'December 22nd office forecast: 90% chance someone checks their El Gordo lottery décimo, wins €20 back, and briefly looks up sailboat prices in Sitges.'
  },
  {
    tag: 'Catalan Tradition',
    text: 'Catalan Nativity scene check: If you have not spotted El Caganer hiding behind a miniature bush yet, keep looking.'
  },
  {
    tag: 'Belgium & Benelux',
    text: 'Belgian coffee break law: One Speculoos biscuit beside your cortado is polite; eating half the packet before your 10:00 client call is standard December behavior.'
  },
  {
    tag: 'Sales & Ads Life',
    text: 'If Santa ran a Google Ads account, his #1 Negative Keyword would definitely be "free next day chimney delivery".'
  },
  {
    tag: 'Barcelona Winter',
    text: 'Friendly reminder: Thick hot chocolate on Carrer de Petritxol counts as a winter warm-up exercise if you dip the churros fast enough.'
  },
  {
    tag: 'German Xmas',
    text: 'Nikolaustag tip for Dec 5th: Polish one clean boot outside your door for chocolates. Leave a dusty gym shoe and even St. Nikolaus walks past.'
  },
  {
    tag: 'Sales & Ads Life',
    text: 'Client: "My nephew is good with computers, he set up our ads in 2019." You, seeing one Broad Match keyword targeting the entire planet: deep calming breath.'
  },
  {
    tag: 'Spain Holiday',
    text: 'New Year training starts now: Practice eating 12 grapes in 12 clock chimes before midnight on Dec 31st or risk 2027 chaos.'
  },
  {
    tag: 'Sales & Ads Life',
    text: 'Every sales rep in mid-December: Typing "Hope you are winding down nicely for the holidays!" while holding a cortado in one hand and a piece of turrón in the other.'
  },
  {
    tag: 'Catalan Feast',
    text: 'Catalan Christmas math: Christmas Eve soup, Christmas Day roast, and December 26th Canelons. Nobody needs lunch again until New Year’s Eve.'
  },
  {
    tag: 'Sales & Ads Life',
    text: 'Real Q4 superpower: Translating CTR, CPC, and Impression Share into "Yes, 18 real locals called your shop this week" before the customer falls asleep.'
  }
];

function setupMistletoeEasterEgg() {
  const btn = document.getElementById('mistletoe-btn');
  const pop = document.getElementById('mistletoe-pop');
  const tagEl = document.getElementById('mistletoe-pop-tag');
  const textEl = document.getElementById('mistletoe-pop-text');
  const nextBtn = document.getElementById('mistletoe-next-btn');
  const closeBtn = document.getElementById('mistletoe-close-btn');
  const hintEl = document.getElementById('mistletoe-hint');

  if (!btn || !pop || !tagEl || !textEl) return;

  // Shuffled deck so coworkers never get a repeat until seeing all 20 messages
  let deck = [];
  let lastPickedIdx = -1;

  const drawNextMessage = () => {
    if (deck.length === 0) {
      deck = MISTLETOE_MESSAGES.map((_, i) => i);
      for (let i = deck.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
      if (deck.length > 1 && deck[deck.length - 1] === lastPickedIdx) {
        [deck[0], deck[deck.length - 1]] = [deck[deck.length - 1], deck[0]];
      }
    }
    const idx = deck.pop();
    lastPickedIdx = idx;
    return MISTLETOE_MESSAGES[idx];
  };

  const showNewMistletoeMessage = () => {
    const item = drawNextMessage();
    tagEl.textContent = `✦ ${item.tag}`;
    textEl.textContent = item.text;
    pop.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
    if (hintEl) hintEl.textContent = '✦ Click mistletoe for another ✦';

    btn.classList.remove('is-bouncing');
    void btn.offsetWidth;
    btn.classList.add('is-bouncing');

    const rect = btn.getBoundingClientRect();
    triggerSparkleBurst(rect.left + rect.width * 0.5, rect.top + rect.height * 0.45, 28);
  };

  btn.addEventListener('click', showNewMistletoeMessage);

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showNewMistletoeMessage();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      pop.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    });
  }
}

function getDayImageSrc(entry) {
  if (entry.image) return entry.image;
  return `images/day-${String(entry.day).padStart(2, '0')}.jpg`;
}

function syncExampleDoorStatusUI() {
  const opened = isExampleDoorOpened();
  const resetExampleBtn = document.getElementById('reset-example-door-btn');
  const captionEl = document.getElementById('example-door-caption');
  if (resetExampleBtn) {
    resetExampleBtn.hidden = !opened;
  }
  if (captionEl) {
    captionEl.textContent = opened
      ? 'Sneak peek opened · Click to read again'
      : 'Click Day 0 to open sneak peek';
  }
}

function renderExampleDoor() {
  const mountEl = document.getElementById('example-door-mount');
  if (!mountEl) return;

  const isOpened = isExampleDoorOpened();
  const imgSrc = getDayImageSrc(exampleDoorData);
  mountEl.innerHTML = '';

  const cell = document.createElement('div');
  cell.className = 'door-cell is-available';
  cell.dataset.day = '0';
  cell.dataset.palette = 'red';
  if (isOpened) cell.classList.add('is-opened');

  cell.innerHTML = `
    <button
      type="button"
      id="advent-door-example"
      class="door-button"
      aria-label="Open Day 0 Sneak Peek to see a sample Christmas letter"
    >
      <div class="door-interior">
        <img class="interior-bg-img" src="${escapeAttr(imgSrc)}" alt="" loading="lazy" />
        <div class="interior-overlay">
          <span class="interior-day">Day 0 · Sneak Peek</span>
          <span class="interior-cta">Open Letter</span>
        </div>
      </div>

      <div class="door-leaf">
        <div class="door-front">
          <div class="door-snow-cap" aria-hidden="true"></div>
          <div class="door-ribbon-v" aria-hidden="true"></div>
          <div class="door-ribbon-h" aria-hidden="true"></div>
          <span class="door-corner door-corner--tl" aria-hidden="true">✦</span>
          <span class="door-corner door-corner--tr" aria-hidden="true">✦</span>
          <span class="door-corner door-corner--bl" aria-hidden="true">✦</span>
          <span class="door-corner door-corner--br" aria-hidden="true">✦</span>
          <div class="door-medallion">
            ${buildDoorWreathSVG('red', 0)}
            <span class="door-example-stack">
              <span class="door-zero-number">0</span>
              <span class="door-example-word">Sneak Peek</span>
            </span>
          </div>
        </div>
        <div class="door-back" aria-hidden="true"></div>
      </div>
    </button>
  `;

  const btn = cell.querySelector('.door-button');
  btn.addEventListener('click', () => handleDoorClick(0, cell, btn));

  mountEl.appendChild(cell);
  syncExampleDoorStatusUI();
}

function renderCalendarGrid() {
  const gridEl = document.getElementById('calendar-grid');
  if (!gridEl) return;

  const lockContext = getDateLockContext();
  const openedSet = loadOpenedDoors();
  gridEl.innerHTML = '';

  SHUFFLED_DOOR_ORDER.forEach((dayNum, index) => {
    const entry = dayDataByNumber.get(dayNum);
    if (!entry) return;

    const palette = GRID_DOOR_PALETTES[index % GRID_DOOR_PALETTES.length];
    const isUnlocked = dayNum <= lockContext.maxUnlockedDay;
    const isOpened = isUnlocked && openedSet.has(dayNum);
    const imgSrc = getDayImageSrc(entry);

    const cell = document.createElement('div');
    cell.className = 'door-cell';
    cell.dataset.day = String(dayNum);
    cell.dataset.palette = palette;
    cell.classList.add(isUnlocked ? 'is-available' : 'is-locked');
    if (isOpened) cell.classList.add('is-opened');

    const lockPillHTML = !isUnlocked
      ? `<span class="door-lock-pill" aria-hidden="true">
           <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
             <rect x="4" y="11" width="16" height="10" rx="2"></rect>
             <path d="M8 11V7a4 4 0 0 1 8 0v4"></path>
           </svg>
         </span>`
      : '';

    cell.innerHTML = `
      <div class="door-locked-popover" role="status" aria-hidden="true">Nice try mate, come back on Dec ${dayNum}!</div>
      <button
        type="button"
        id="advent-door-${dayNum}"
        class="door-button"
        aria-label="${escapeAttr(isUnlocked ? `Open Christmas Advent Door ${dayNum}` : `Door ${dayNum}, locked until December ${dayNum}`)}"
      >
        <div class="door-interior">
          <img class="interior-bg-img" src="${escapeAttr(imgSrc)}" alt="" loading="lazy" />
          <div class="interior-overlay">
            <span class="interior-day">December ${dayNum}</span>
            <span class="interior-cta">${isUnlocked ? 'Open Letter' : 'Locked'}</span>
          </div>
        </div>

        <div class="door-leaf">
          <div class="door-front">
            <div class="door-snow-cap" aria-hidden="true"></div>
            <div class="door-ribbon-v" aria-hidden="true"></div>
            <div class="door-ribbon-h" aria-hidden="true"></div>
            <span class="door-corner door-corner--tl" aria-hidden="true">✦</span>
            <span class="door-corner door-corner--tr" aria-hidden="true">✦</span>
            <span class="door-corner door-corner--bl" aria-hidden="true">✦</span>
            <span class="door-corner door-corner--br" aria-hidden="true">✦</span>
            <div class="door-medallion">
              ${buildDoorWreathSVG(palette, dayNum)}
              <span class="door-big-number">${dayNum}</span>
            </div>
            ${lockPillHTML}
          </div>
          <div class="door-back" aria-hidden="true"></div>
        </div>
      </button>
    `;

    const btn = cell.querySelector('.door-button');
    btn.addEventListener('click', () => handleDoorClick(dayNum, cell, btn));

    gridEl.appendChild(cell);
  });
}

function handleDoorClick(dayNum, cellEl, buttonEl) {
  const lockContext = getDateLockContext();
  if (dayNum > 0 && dayNum > lockContext.maxUnlockedDay) {
    cellEl.classList.remove('is-shaking');
    void cellEl.offsetWidth;
    cellEl.classList.add('is-shaking', 'show-popover');

    clearTimeout(cellEl._popoverTimer);
    cellEl._popoverTimer = setTimeout(() => cellEl.classList.remove('show-popover'), 2700);
    cellEl.addEventListener('animationend', () => cellEl.classList.remove('is-shaking'), { once: true });

    showToast(`Nice try mate, come back on December ${dayNum}!`);
    return;
  }

  const wasAlreadyOpen = dayNum === 0
    ? isExampleDoorOpened()
    : loadOpenedDoors().has(dayNum);

  const rect = cellEl.getBoundingClientRect();
  const cx = rect.left + rect.width * 0.5;
  const cy = rect.top + rect.height * 0.48;

  lastFocusedElement = buttonEl;

  if (!wasAlreadyOpen) {
    if (dayNum === 0) {
      setExampleDoorOpened(true);
      cellEl.classList.add('is-opened');
      syncExampleDoorStatusUI();
    } else {
      saveOpenedDoor(dayNum);
      cellEl.classList.add('is-opened');
      updateProgressUI();
    }
    triggerSparkleBurst(cx, cy, 42);
    setTimeout(() => openDayModal(dayNum), 350);
  } else {
    triggerSparkleBurst(cx, cy, 16);
    openDayModal(dayNum);
  }
}

function updateProgressUI() {
  const lockContext = getDateLockContext();
  const openedSet = loadOpenedDoors();
  let count = 0;
  openedSet.forEach((d) => {
    if (d <= lockContext.maxUnlockedDay) count += 1;
  });

  const countEl = document.getElementById('progress-count');
  const fillEl = document.getElementById('progress-fill');
  const quickResetBtn = document.getElementById('quick-reset-doors-btn');

  if (countEl) countEl.textContent = `${count} / 24`;
  if (fillEl) fillEl.style.width = `${Math.round((count / 24) * 100)}%`;
  if (quickResetBtn) quickResetBtn.hidden = count === 0;
}

function getVisibleAccordionItems() {
  return [...document.querySelectorAll('#accordion-stack .accordion-item')].filter(
    (el) => !el.hidden
  );
}

function setAccordionItemState(itemEl, open) {
  itemEl.classList.toggle('is-open', open);
  const trigger = itemEl.querySelector('.accordion-trigger');
  if (trigger) {
    trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
}

function syncExpandAllLabel() {
  const visibleItems = getVisibleAccordionItems();
  const allOpen = visibleItems.length > 0 && visibleItems.every((el) => el.classList.contains('is-open'));
  const expandBtn = document.getElementById('expand-all-btn');
  if (expandBtn) {
    expandBtn.textContent = allOpen ? 'Close all' : `Open all ${visibleItems.length}`;
  }
}

function openDayModal(dayNum) {
  const entry = dayDataByNumber.get(dayNum);
  if (!entry) return;

  const lockContext = getDateLockContext();
  if (dayNum > 0 && dayNum > lockContext.maxUnlockedDay) return;

  activeModalDay = dayNum;

  if (dayNum === 0) {
    if (!isExampleDoorOpened()) {
      setExampleDoorOpened(true);
      const cellEl = document.querySelector('.door-cell[data-day="0"]');
      if (cellEl) cellEl.classList.add('is-opened');
      syncExampleDoorStatusUI();
    }
  } else if (!loadOpenedDoors().has(dayNum)) {
    saveOpenedDoor(dayNum);
    const cellEl = document.querySelector(`.door-cell[data-day="${dayNum}"]`);
    if (cellEl) cellEl.classList.add('is-opened');
    updateProgressUI();
  }

  const isExample = entry.day === 0;
  const paddedDay = String(entry.day).padStart(2, '0');
  const imgSrc = getDayImageSrc(entry);

  document.getElementById('modal-day-ribbon').textContent = isExample
    ? '★ Posta de Nadal · Day 0 Sneak Peek'
    : `★ Posta de Nadal · Door ${entry.day}`;
  document.getElementById('modal-title').textContent = entry.cardHeading;

  const postmarkDateEl = document.getElementById('postmark-date-text');
  if (postmarkDateEl) {
    postmarkDateEl.textContent = isExample ? 'DAY 00' : `DEC ${paddedDay}`;
  }

  const stampDayEl = document.getElementById('stamp-day-val');
  if (stampDayEl) {
    stampDayEl.textContent = isExample ? 'Day 0' : `${paddedDay} Dec`;
  }

  const postcardImg = document.getElementById('modal-postcard-img');
  if (postcardImg) {
    postcardImg.src = imgSrc;
    postcardImg.alt = entry.xmas.title;
  }

  const postcardCaption = document.getElementById('modal-postcard-caption');
  if (postcardCaption) {
    postcardCaption.textContent = `${entry.xmas.category}: ${entry.xmas.title}`;
  }

  // 1. Google Ads Refresher
  document.getElementById('acc-ads-title').textContent = entry.ads.title;
  document.getElementById('acc-ads-body').textContent = entry.ads.body;
  document.getElementById('acc-ads-when').textContent = entry.ads.when;

  // 2. New Customer Trust & Upsell
  document.getElementById('acc-trust-title').textContent = entry.trust.title;
  document.getElementById('acc-trust-body').textContent = entry.trust.body;
  document.getElementById('acc-trust-say').textContent = entry.trust.say;

  // 3. Today's "What If?" Question
  document.getElementById('acc-whatif-title').textContent = entry.whatIf.teaser;
  document.getElementById('acc-whatif-question').textContent = entry.whatIf.question;
  document.getElementById('acc-whatif-note').textContent = entry.whatIf.note;

  // 4. Christmas & Barcelona
  document.getElementById('acc-xmas-cat').textContent = entry.xmas.category;
  document.getElementById('acc-xmas-title').textContent = entry.xmas.title;
  document.getElementById('acc-xmas-body').textContent = entry.xmas.body;
  document.getElementById('acc-xmas-tip').textContent = entry.xmas.tip;

  // 5. Optional Easy Christmas Recipe
  const recipeItemEl = document.getElementById('acc-recipe-item');
  if (recipeItemEl) {
    if (entry.recipe) {
      recipeItemEl.hidden = false;
      document.getElementById('acc-recipe-title').textContent = entry.recipe.title;
      document.getElementById('acc-recipe-meta').textContent = entry.recipe.meta;

      const ingList = document.getElementById('acc-recipe-ingredients');
      ingList.innerHTML = entry.recipe.ingredients
        .map((ing) => `<li>${escapeHTML(ing)}</li>`)
        .join('');

      const stepsList = document.getElementById('acc-recipe-steps');
      stepsList.innerHTML = entry.recipe.steps
        .map((step) => `<li>${escapeHTML(step)}</li>`)
        .join('');
    } else {
      recipeItemEl.hidden = true;
    }
  }

  // Start all accordion sections closed so coworkers click only what they want to read!
  document.querySelectorAll('#accordion-stack .accordion-item').forEach((item) => {
    setAccordionItemState(item, false);
  });
  syncExpandAllLabel();

  // Prev / Next buttons (respecting locked future December doors!)
  const prevBtn = document.getElementById('modal-prev-btn');
  const nextBtn = document.getElementById('modal-next-btn');
  if (prevBtn) {
    prevBtn.disabled = dayNum <= 0;
    if (dayNum <= 0) {
      prevBtn.textContent = '← Prev';
    } else if (dayNum === 1) {
      prevBtn.textContent = '← Day 0';
    } else {
      prevBtn.textContent = `← Door ${dayNum - 1}`;
    }
  }
  if (nextBtn) {
    const canNext = dayNum < lockContext.maxUnlockedDay;
    nextBtn.disabled = !canNext;
    if (canNext) {
      nextBtn.textContent = `Door ${dayNum + 1} →`;
    } else if (dayNum < 24) {
      nextBtn.textContent = `Opens Dec ${dayNum + 1}`;
    } else {
      nextBtn.textContent = 'Next →';
    }
  }

  // Reset copy button states
  const copyBtn = document.getElementById('copy-whatif-btn');
  const copyLabel = document.getElementById('copy-whatif-label');
  if (copyBtn) copyBtn.classList.remove('is-copied');
  if (copyLabel) copyLabel.textContent = 'Copy question for Slack / Teams';

  const copyRecipeBtn = document.getElementById('copy-recipe-btn');
  const copyRecipeLabel = document.getElementById('copy-recipe-label');
  if (copyRecipeBtn) copyRecipeBtn.classList.remove('is-copied');
  if (copyRecipeLabel) copyRecipeLabel.textContent = 'Copy recipe';

  const paperEl = document.querySelector('.modal-letter-paper');
  if (paperEl) paperEl.scrollTop = 0;

  const backdrop = document.getElementById('day-modal-backdrop');
  backdrop.classList.add('is-open');
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeDayModal() {
  const backdrop = document.getElementById('day-modal-backdrop');
  if (!backdrop || !backdrop.classList.contains('is-open')) return;

  backdrop.classList.remove('is-open');
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  activeModalDay = null;

  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

function setupModalAndAccordions() {
  const backdrop = document.getElementById('day-modal-backdrop');
  const closeBtn = document.getElementById('modal-close-btn');
  const prevBtn = document.getElementById('modal-prev-btn');
  const nextBtn = document.getElementById('modal-next-btn');
  const expandAllBtn = document.getElementById('expand-all-btn');
  const copyBtn = document.getElementById('copy-whatif-btn');
  const copyRecipeBtn = document.getElementById('copy-recipe-btn');

  // Individual Accordion Click Toggles
  document.querySelectorAll('#accordion-stack .accordion-item').forEach((item) => {
    const trigger = item.querySelector('.accordion-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const nextState = !item.classList.contains('is-open');
        setAccordionItemState(item, nextState);
        syncExpandAllLabel();
      });
    }
  });

  // Expand All / Close All Toggle (only visible sections)
  if (expandAllBtn) {
    expandAllBtn.addEventListener('click', () => {
      const items = getVisibleAccordionItems();
      const shouldOpen = !items.every((el) => el.classList.contains('is-open'));
      items.forEach((el) => setAccordionItemState(el, shouldOpen));
      syncExpandAllLabel();
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeDayModal);

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeDayModal();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (activeModalDay !== null && activeModalDay > 0) {
        openDayModal(activeModalDay - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const lockContext = getDateLockContext();
      if (activeModalDay !== null && activeModalDay < lockContext.maxUnlockedDay) {
        openDayModal(activeModalDay + 1);
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (activeModalDay === null) return;
    if (e.key === 'Escape') closeDayModal();
    if (e.key === 'ArrowLeft' && activeModalDay > 0) openDayModal(activeModalDay - 1);
    if (e.key === 'ArrowRight') {
      const lockContext = getDateLockContext();
      if (activeModalDay < lockContext.maxUnlockedDay) openDayModal(activeModalDay + 1);
    }
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      if (activeModalDay === null) return;
      const entry = dayDataByNumber.get(activeModalDay);
      if (!entry) return;

      const doorLabel = entry.day === 0 ? 'Day 0 Sneak Peek' : `Door ${entry.day}`;
      const text = `🎄 *${doorLabel} · Today's "What If?" Question:*\n${entry.whatIf.question}\n_(${entry.whatIf.note})_`;
      const ok = await copyTextToClipboard(text);
      const label = document.getElementById('copy-whatif-label');
      if (ok) {
        copyBtn.classList.add('is-copied');
        if (label) label.textContent = 'Copied! Paste it in chat ✓';
        showToast(`${doorLabel} question copied!`);
        clearTimeout(copyBtn._timer);
        copyBtn._timer = setTimeout(() => {
          copyBtn.classList.remove('is-copied');
          if (label) label.textContent = 'Copy question for Slack / Teams';
        }, 2400);
      }
    });
  }

  if (copyRecipeBtn) {
    copyRecipeBtn.addEventListener('click', async () => {
      if (activeModalDay === null) return;
      const entry = dayDataByNumber.get(activeModalDay);
      if (!entry || !entry.recipe) return;

      const doorLabel = entry.day === 0 ? 'Day 0 Sneak Peek' : `Door ${entry.day}`;
      const ingLines = entry.recipe.ingredients.map((i) => `• ${i}`).join('\n');
      const stepLines = entry.recipe.steps.map((s, idx) => `${idx + 1}. ${s}`).join('\n');
      const text = `🍽️ *${doorLabel} Holiday Recipe: ${entry.recipe.title}*\n_${entry.recipe.meta}_\n\n*What you need:*\n${ingLines}\n\n*Steps:*\n${stepLines}`;

      const ok = await copyTextToClipboard(text);
      const label = document.getElementById('copy-recipe-label');
      if (ok) {
        copyRecipeBtn.classList.add('is-copied');
        if (label) label.textContent = 'Recipe copied! ✓';
        showToast(`${entry.recipe.title} copied!`);
        clearTimeout(copyRecipeBtn._timer);
        copyRecipeBtn._timer = setTimeout(() => {
          copyRecipeBtn.classList.remove('is-copied');
          if (label) label.textContent = 'Copy recipe';
        }, 2400);
      }
    });
  }
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (_) {}
  }

  try {
    const temp = document.createElement('textarea');
    temp.value = text;
    temp.setAttribute('readonly', '');
    temp.style.position = 'fixed';
    temp.style.opacity = '0';
    document.body.appendChild(temp);
    temp.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(temp);
    return ok;
  } catch (_) {
    return false;
  }
}

function showToast(message) {
  const toastEl = document.getElementById('toast-notification');
  const toastTextEl = document.getElementById('toast-text');
  if (!toastEl || !toastTextEl) return;

  toastTextEl.textContent = message;
  toastEl.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('is-visible'), 2500);
}

/* ============================================================================
   FESTIVE SPARKLE / CONFETTI PARTICLE ENGINE
   ============================================================================ */

let sparkleCtx = null;
let sparkleParticles = [];
let sparkleAnimId = null;

function initSparkleCanvas() {
  const canvas = document.getElementById('sparkle-canvas');
  if (!canvas) return;
  sparkleCtx = canvas.getContext('2d');

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    sparkleCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  resize();
  window.addEventListener('resize', resize);
}

function triggerSparkleBurst(x, y, count = 40) {
  if (!sparkleCtx) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const palette = ['#E8C468', '#FCFAF5', '#D9383C', '#2B7A52', '#F6B828'];

  for (let i = 0; i < count; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2.2 + Math.random() * 6;
    sparkleParticles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - (1.8 + Math.random() * 2.2),
      size: 2.5 + Math.random() * 4,
      color: palette[i % palette.length],
      alpha: 1,
      decay: 0.016 + Math.random() * 0.013,
      rotation: Math.random() * Math.PI,
      rotationSpeed: (Math.random() - 0.5) * 0.16,
      shape: i % 2 === 0 ? 'star' : 'confetti'
    });
  }

  if (!sparkleAnimId) animateSparkles();
}

function animateSparkles() {
  sparkleCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  sparkleParticles = sparkleParticles.filter((p) => p.alpha > 0.02);

  sparkleParticles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.15;
    p.vx *= 0.985;
    p.alpha -= p.decay;
    p.rotation += p.rotationSpeed;

    sparkleCtx.save();
    sparkleCtx.globalAlpha = Math.max(0, p.alpha);
    sparkleCtx.translate(p.x, p.y);
    sparkleCtx.rotate(p.rotation);
    sparkleCtx.fillStyle = p.color;

    if (p.shape === 'star') {
      drawFourPointStar(sparkleCtx, p.size * 1.35);
    } else {
      sparkleCtx.fillRect(-p.size / 2, -p.size * 0.35, p.size, p.size * 0.7);
    }
    sparkleCtx.restore();
  });

  if (sparkleParticles.length > 0) {
    sparkleAnimId = requestAnimationFrame(animateSparkles);
  } else {
    sparkleCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    sparkleAnimId = null;
  }
}

function drawFourPointStar(ctx, radius) {
  ctx.beginPath();
  for (let i = 0; i < 8; i += 1) {
    const r = i % 2 === 0 ? radius : radius * 0.36;
    const theta = (i * Math.PI) / 4;
    const px = Math.cos(theta) * r;
    const py = Math.sin(theta) * r;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
}

/* ============================================================================
   LIVELY MULTI-LAYERED WINTER SNOWFALL
   ============================================================================ */

function initSnowCanvas() {
  const canvas = document.getElementById('snow-canvas');
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  resize();
  window.addEventListener('resize', resize);

  const flakeCount = Math.min(220, Math.max(120, Math.floor(width / 7.5)));
  const flakes = Array.from({ length: flakeCount }, (_, idx) => {
    const tier = idx % 10;
    // 20% foreground soft big flakes, 45% midground flakes, 35% fine background snow
    if (tier < 2) {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r: 2.7 + Math.random() * 1.7,
        speedY: 1.0 + Math.random() * 0.75,
        driftAmp: 0.55 + Math.random() * 0.55,
        phase: Math.random() * Math.PI * 2,
        phaseStep: 0.013 + Math.random() * 0.008,
        opacity: 0.55 + Math.random() * 0.3,
        crystal: idx % 20 === 0
      };
    }
    if (tier < 6) {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r: 1.6 + Math.random() * 1.1,
        speedY: 0.65 + Math.random() * 0.55,
        driftAmp: 0.35 + Math.random() * 0.4,
        phase: Math.random() * Math.PI * 2,
        phaseStep: 0.011 + Math.random() * 0.007,
        opacity: 0.38 + Math.random() * 0.28,
        crystal: false
      };
    }
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      r: 0.9 + Math.random() * 0.8,
      speedY: 0.38 + Math.random() * 0.38,
      driftAmp: 0.2 + Math.random() * 0.28,
      phase: Math.random() * Math.PI * 2,
      phaseStep: 0.009 + Math.random() * 0.006,
      opacity: 0.22 + Math.random() * 0.24,
      crystal: false
    };
  });

  function drawCrystalFlake(x, y, radius, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.strokeStyle = `rgba(255, 253, 248, ${alpha})`;
    ctx.lineWidth = 1.15;
    ctx.lineCap = 'round';
    for (let k = 0; k < 3; k += 1) {
      ctx.beginPath();
      const angle = (k * Math.PI) / 3;
      const dx = Math.cos(angle) * radius * 1.35;
      const dy = Math.sin(angle) * radius * 1.35;
      ctx.moveTo(-dx, -dy);
      ctx.lineTo(dx, dy);
      ctx.stroke();
    }
    ctx.restore();
  }

  function renderSnow() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < flakes.length; i += 1) {
      const f = flakes[i];
      f.phase += f.phaseStep;
      f.y += f.speedY;
      f.x += Math.sin(f.phase) * f.driftAmp + 0.12;

      if (f.y > height + 8) {
        f.y = -8;
        f.x = Math.random() * width;
      }
      if (f.x > width + 8) f.x = -8;
      if (f.x < -8) f.x = width + 8;

      if (f.crystal) {
        drawCrystalFlake(f.x, f.y, f.r, f.opacity);
      } else {
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(253, 251, 247, ${f.opacity})`;
        ctx.fill();
      }
    }
    requestAnimationFrame(renderSnow);
  }

  requestAnimationFrame(renderSnow);
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  return escapeHTML(str).replace(/'/g, '&#39;');
}

document.addEventListener('DOMContentLoaded', initAdventCalendar);
