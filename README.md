# 🔥 Rage Bait — Classroom Game

A facilitator-run classroom game about outrage marketing decisions.
Built with Next.js (App Router). No database, no auth, no external APIs.

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new) — zero config needed.

---

## How to play

1. Display the scenario on screen (projector / shared display)
2. Teams discuss for 45 seconds (use the built-in timer)
3. Facilitator clicks **Reveal Answer**
4. Facilitator assigns points to teams using the **+7 / +4 / +1** buttons
5. Click **Next →** to advance

---

## Adding or editing scenarios

Open `data/scenarios.ts` and add an object to the array:

```ts
{
  id: 6,
  title: "Your scenario title",
  context: "Background context for the room.",
  options: [
    { id: "A", text: "Option A text" },
    { id: "B", text: "Option B text" },
    { id: "C", text: "Option C text" },
    { id: "D", text: "Option D text" },
  ],
  correct: "D",          // which option is the "best" outrage answer
  outcomes: {
    A: "What happens if they pick A.",
    B: "What happens if they pick B.",
    C: "What happens if they pick C.",
    D: "What happens if they pick D.",
  },
},
```

No other files need to change.

---

## Changing teams or scoring

- **Teams**: edit `DEFAULT_SCORES` at the top of `app/page.tsx`
- **Point values**: edit `SCORE_TIERS` at the top of `app/page.tsx`
- **Timer duration**: edit `TIMER_SECONDS` at the top of `app/page.tsx`
