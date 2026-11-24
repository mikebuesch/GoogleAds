# Barcelona Team · 24-Day Christmas Advent Calendar

A purely client-side, static single-page 24-Day Christmas Advent Calendar created for our multicultural Google Ads & Sales team in Barcelona.

## What's Inside Each Door (Days 1 to 24)

Closed doors look like a classic Christmas Advent Calendar (colorful holiday doors showing only the shuffled numbers `1` to `24` inside festive wreaths). Clicking a door swings it open in 3D to reveal a custom storybook watercolor illustration and an airmail Christmas Letter (`Posta de Nadal`) with **vertically stacked collapsible sections** so coworkers can click only what they feel like reading:

1. **Google Ads Refresher**: Plain-English explanations of different campaign types and core features (Search, Local PMax for physical shops, Hotel Ads, Vehicle Ads, Shopping, Local Services Ads, Call Ads, Things to Do, Demand Gen, App Campaigns, YouTube Video & Shorts, Display Remarketing, Lead Forms, Radius Targeting, Ad Scheduling, Negative Keywords, Daily Budget caps, Smart Bidding, Conversion Tracking, Assets, New Customer mode, and post-Christmas Q5).
2. **New Customers & Building Trust**: Practical, down-to-earth advice and phrases for talking to small business owners who are brand-new to Google Ads, don't know much about online advertising, and don't trust Google yet (no surprise bills, no contract lock-in, automatic invalid/competitor click protection, small focused budgets, and honest expectations).
3. **Today's "What If?" Question**: A daily conversation starter mixing general life, travel, food, and everyday hypotheticals with a few holiday and office questions, plus a 1-click **Copy question for Slack / Teams** button.
4. **Christmas & Barcelona**: Festive December plans around Barcelona alongside traditions from Catalonia, Spain, Germany/Austria, and the Netherlands/Benelux.
5. **Easy Christmas Recipe to Try** *(included in 12 festive food & drink doors)*: Simple home recipes with supermarket ingredients, clear steps, and a **Copy recipe** button (Cava Sangria, Dutch Kruidnoten, German Marzipankartoffeln, Glühwein, Belgian Speculoos Tiramisu Cups, Oven-Roasted Castañas, Catalan Canelons, Petritxol Thick Hot Chocolate, Vanillekipferl, Gourmetten Herb Butter & Mini-Pancakes, Crunchy Chocolate Turrón, and Catalan Sopa de Galets).

## Day 0 Sneak Peek & Real-Date Locking

- **Day 0 Sneak Peek Above the Calendar (Always Unlocked)**: Sits right above the 24-door board with friendly context for coworkers so anyone can open a sample Christmas letter (including the Barcelona-El Prat 24-hour flight delay "What If?" question, a custom watercolor illustration, and a cinnamon *Garrapiñadas* almond recipe) without spoiling Days 1 to 24.
- **Real December Date Locking (`UNLOCK_ALL_FOR_REVIEW = false` in [`app.js`](./app.js))**:
  - Reads the calendar date in **Barcelona time (`Europe/Madrid`)** via `Intl.DateTimeFormat` (and automatically refreshes if a tab stays open overnight).
  - Before December 1st, all 24 numbered doors (`1` to `24`) stay locked; only **Day 0 Sneak Peek** can be opened.
  - Starting December 1st, each door unlocks at `00:00` Barcelona time on its calendar date and stays open on every day afterwards (for example, Door 3 is locked on Dec 1 and Dec 2, unlocks on Dec 3, and stays open on Dec 4, Dec 15, and into January).
  - Adding `?preview=true` to the URL unlocks all 24 doors privately for your own admin check without affecting coworkers.

## Per-Coworker Privacy (`localStorage`)

- Opened doors are stored strictly inside each visitor's own browser `localStorage` under `bcn_ads_advent_2026_opened_doors` (and `bcn_ads_advent_2026_example_opened`), with no backend database or shared global state.
