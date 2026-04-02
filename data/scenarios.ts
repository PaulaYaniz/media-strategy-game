// ============================================================
// SCENARIO DATA — Edit this file to add, remove, or change scenarios
// ============================================================

export interface Effects {
  engagement: number;
  reputation: number;
  stability: number;
}

export interface Option {
  id: "A" | "B" | "C" | "D";
  text: string;
  effects: Effects;
}

export interface Scenario {
  id: number;
  title: string;
  context: string;
  options: Option[];
  outcomes: Record<string, string>;
  discussion: string;
}

const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Broadway Show Losing Ticket Sales",
    context:
      "A new musical is 3 weeks in at 54% capacity. Break-even requires 75%. Investors pull out in one month.",
    options: [
      {
        id: "A",
        text: "Bring in a new choreographer and tighten the second act.",
        effects: { engagement: 5, reputation: 15, stability: 10 },
      },
      {
        id: "B",
        text: "Have a lead actor post a vague emotional tweet. Let fan communities spiral.",
        effects: { engagement: 22, reputation: -10, stability: -6 },
      },
      {
        id: "C",
        text: "Offer a 30% discount through TodayTix to fill seats.",
        effects: { engagement: 8, reputation: 0, stability: 5 },
      },
      {
        id: "D",
        text: "Anonymously tip Page Six that there's tension between the leads.",
        effects: { engagement: 18, reputation: -15, stability: -12 },
      },
    ],
    outcomes: {
      A: "Critics notice. Word of mouth grows. Capacity hits 71% — still below break-even. Show closes with dignity.",
      B: "Tweet goes viral. Show sells out 11 consecutive nights. Audiences later feel manipulated.",
      C: "Discounts fill seats short-term. Full-price sales don't follow. Investors pull out anyway.",
      D: "Broadway Twitter explodes. Capacity jumps to 91%. One lead finds out and refuses to renew.",
    },
    discussion:
      "Which strategy actually builds long-term audience demand — and which one just borrows attention? How do you price the reputational cost of manufactured emotion?",
  },
  {
    id: 2,
    title: "Late Night Show Losing Viewers",
    context:
      "A long-running late-night show averages 1.3M viewers, down from 4M. The network is considering cancellation.",
    options: [
      {
        id: "A",
        text: "Book a deeply controversial guest whose appearance alone guarantees outrage on both sides.",
        effects: { engagement: 25, reputation: -18, stability: -15 },
      },
      {
        id: "B",
        text: "Shift to long-form interviews. Lean into what TV does that social media can't.",
        effects: { engagement: 0, reputation: 18, stability: 12 },
      },
      {
        id: "C",
        text: "Book A-listers and design every segment for TikTok clips.",
        effects: { engagement: 12, reputation: -5, stability: 0 },
      },
      {
        id: "D",
        text: "Have the host deliver a politically charged monologue designed to dominate the news cycle.",
        effects: { engagement: 18, reputation: -14, stability: -10 },
      },
    ],
    outcomes: {
      A: "The booking breaks the internet before it airs. Viewership hits 3.9M — highest in 4 years. The host spends months distancing themselves from the decision.",
      B: "Critics praise it. Viewership stays flat. Network sees it as not enough.",
      C: "Clips rack up 40M views. Ratings climb to 1.8M. Guests start declining long-form bookings.",
      D: "Monologue hits 25M views. Ratings spike to 2.6M for 2 weeks. Two sponsors pull their ads.",
    },
    discussion:
      "How do you weigh a one-night ratings spike against the show's long-term brand identity? What metric should a media strategist actually be optimizing for here?",
  },
  {
    id: 3,
    title: "Record Label: Revive a Fading Artist",
    context:
      "A mid-tier pop artist's last two albums underperformed. The label is deciding whether to drop them or invest in one final push.",
    options: [
      {
        id: "A",
        text: "Give the artist full creative control — let them make the album they actually want.",
        effects: { engagement: 5, reputation: 20, stability: 18 },
      },
      {
        id: "B",
        text: "Encourage the artist to publicly call out the label for suppressing their vision.",
        effects: { engagement: 18, reputation: -6, stability: -20 },
      },
      {
        id: "C",
        text: "Leak a fake feud with another major artist — deny everything, watch the streams climb.",
        effects: { engagement: 25, reputation: -18, stability: -12 },
      },
      {
        id: "D",
        text: "Pair them with a hot producer and a featured artist who's currently charting.",
        effects: { engagement: 12, reputation: -5, stability: 0 },
      },
    ],
    outcomes: {
      A: "Critically loved. Streaming improves modestly. The artist builds a loyal — smaller — fanbase.",
      B: "Post goes viral. Album debut jumps 3x projections. Label–artist relationship is permanently damaged.",
      C: "Streams spike 200% for both artists. Debuts Top 10. Six months later a journalist traces the leak back to the PR team.",
      D: "Collab charts at #18. Opens strong then fades. The artist feels inauthentic. Fans notice.",
    },
    discussion:
      "When controversy is manufactured by the label rather than the artist, who owns the risk? How does that change the media strategy calculus?",
  },
  {
    id: 4,
    title: "Podcast Losing Listeners",
    context:
      "A true crime podcast dropped from 8M to 2.1M downloads. Spotify won't renew the exclusive deal unless numbers recover in 60 days.",
    options: [
      {
        id: "A",
        text: "Pivot to deeply reported long-form investigations. Quality over frequency.",
        effects: { engagement: 5, reputation: 18, stability: 12 },
      },
      {
        id: "B",
        text: "One host vague-posts about a conflict behind the scenes without naming the other.",
        effects: { engagement: 18, reputation: -10, stability: -22 },
      },
      {
        id: "C",
        text: "Increase episode frequency and chase trending topics for algorithmic reach.",
        effects: { engagement: 10, reputation: -5, stability: 0 },
      },
      {
        id: "D",
        text: "Book a guest at the center of a current culture war. Let the discourse do the marketing.",
        effects: { engagement: 25, reputation: -10, stability: -5 },
      },
    ],
    outcomes: {
      A: "Downloads climb to 3.4M over 8 weeks. Spotify extends renewal at a lower rate.",
      B: "Next episode hits 7.2M downloads. The co-host finds out — and the real conflict is worse than the fake one.",
      C: "Downloads tick to 3.9M. Listener reviews say the show feels rushed. Retention drops.",
      D: "Most-shared episode in the show's history: 9.1M downloads. Spotify renews. A third of the fanbase threatens to leave — then comes back within a month.",
    },
    discussion:
      "Podcasts are built on perceived intimacy. How does that change the risk profile of controversy-driven strategy compared to TV or social media?",
  },
  {
    id: 5,
    title: "Social Media Platform Losing Relevance",
    context:
      "A major platform is seeing declining growth and advertisers shifting spend elsewhere. Leadership must act.",
    options: [
      {
        id: "A",
        text: "Introduce transparency tools, healthier usage features, and better content moderation.",
        effects: { engagement: 0, reputation: 20, stability: 12 },
      },
      {
        id: "B",
        text: "Promote creators known for generating strong reactions and constant debate.",
        effects: { engagement: 25, reputation: -18, stability: -12 },
      },
      {
        id: "C",
        text: "Adjust the algorithm to prioritize emotionally charged, high-reaction content.",
        effects: { engagement: 18, reputation: -12, stability: -6 },
      },
      {
        id: "D",
        text: "Launch features that mirror fast-growing competitors.",
        effects: { engagement: 10, reputation: 0, stability: 5 },
      },
    ],
    outcomes: {
      A: "User trust improves. Engagement stays flat. Advertiser confidence stabilizes but growth doesn't return.",
      B: "Engagement and ad revenue increase sharply. The platform becomes synonymous with polarizing content. Long-term user trust declines.",
      C: "Time on platform rises sharply. Public criticism grows. Regulators take notice.",
      D: "Activity increases moderately. Platform stays competitive but doesn't reclaim leadership.",
    },
    discussion:
      "At platform scale, engagement strategy becomes content policy. Who are the real stakeholders a platform must answer to — and in what order?",
  },
];

export default scenarios;
