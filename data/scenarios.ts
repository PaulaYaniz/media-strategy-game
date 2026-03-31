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
  correct: "A" | "B" | "C" | "D";
  outcomes: Record<string, string>;
  twist: string;
  discussion: string;
}

const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Broadway Show Losing Ticket Sales",
    context:
      "A new original Broadway musical is 3 weeks into its run. Average attendance is 54%, while break-even requires 75%. Reviews are mixed but not terrible. Investors will pull funding in one month if sales don't improve.",
    options: [
      {
        id: "A",
        text: "Bring in a new choreographer and tighten the second act. Invest in the product itself.",
        effects: { engagement: 1, reputation: 3, stability: 2 },
      },
      {
        id: "B",
        text: "Offer a 30% discount promotion through TodayTix to fill seats and generate word of mouth.",
        effects: { engagement: 2, reputation: 0, stability: 1 },
      },
      {
        id: "C",
        text: "Anonymously tip Page Six that there's \"tension between the leads\". Let tabloid speculation drive curiosity.",
        effects: { engagement: 4, reputation: -3, stability: -2 },
      },
      {
        id: "D",
        text: "Have a lead actor post a vague emotional tweet: \"I've been through so much making this show\". Let fan communities spiral.",
        effects: { engagement: 5, reputation: -2, stability: -1 },
      },
    ],
    correct: "D",
    outcomes: {
      A: "Slow improvement, critics notice, word of mouth grows. Capacity hits 71% — still below break-even. Show closes with dignity.",
      B: "Discounts fill seats short-term. Full-price sales don't follow. Investors extend 3 weeks, then pull out anyway.",
      C: "Page Six runs it. Broadway Twitter explodes. Capacity jumps to 91% the following weekend. One lead finds out the rumor was planted and refuses to renew their contract.",
      D: "Tweet goes viral in theatre fan communities. Show sells out 11 consecutive nights. Lead later reveals the post was the producer's idea — audiences feel manipulated.",
    },
    twist:
      "Option D saved the show financially and destroyed the audience's trust in it emotionally. The production ran. The story people remember is that they were used.",
    discussion:
      "Theatre audiences have a deeply personal relationship with live performance. Does emotional manipulation hit differently here than it does with a product or a brand?",
  },
  {
    id: 2,
    title: "Late Night Talk Show Losing Viewers to Social Media",
    context:
      "A long-running late-night show now averages 1.3M viewers, down from 4M five years ago. The network is considering cancellation. The showrunner has one season to reverse the trend.",
    options: [
      {
        id: "A",
        text: "Shift format toward long-form interview segments — go deeper, not broader. Lean into what TV does that social media can't.",
        effects: { engagement: 0, reputation: 3, stability: 2 },
      },
      {
        id: "B",
        text: "Book A-list celebrities every week and lean into viral clip moments designed for YouTube and TikTok.",
        effects: { engagement: 3, reputation: -1, stability: 0 },
      },
      {
        id: "C",
        text: "Have the host make an edgy, politically charged monologue that's designed to divide viewers and dominate the news cycle.",
        effects: { engagement: 4, reputation: -3, stability: -2 },
      },
      {
        id: "D",
        text: "Invite a deeply controversial public figure as a guest — someone whose appearance alone guarantees outrage on both sides.",
        effects: { engagement: 5, reputation: -3, stability: -3 },
      },
    ],
    correct: "D",
    outcomes: {
      A: "Critics praise the new format. Viewership stays flat at 1.3M. A loyal core audience forms. Network sees it as \"not enough.\"",
      B: "Viral clips rack up 40M views online. TV ratings climb to 1.8M. The show feels like a clip factory — guests start declining long-form bookings.",
      C: "Monologue clip hits 25M views in 48 hours. Ratings spike to 2.6M for 2 weeks. Sponsors call the network. Two pull their ads. The host's likability scores drop 14 points.",
      D: "The guest booking breaks the internet before the episode even airs. Night-of viewership hits 3.9M — highest in 4 years. The host spends the next 3 months distancing themselves from the decision publicly.",
    },
    twist:
      "Option D hit the ratings target — but the host is now defined by a single booking they didn't fully believe in. The number went up. The show's identity went sideways.",
    discussion:
      "Late night used to shape culture. Does chasing outrage make a show more relevant — or does it just make it louder?",
  },
  {
    id: 3,
    title: "Record Label Trying to Revive a Fading Artist",
    context:
      "A major label has a mid-tier pop artist whose last two albums underperformed. Streaming numbers are declining. The label is deciding whether to drop them or invest in one final push.",
    options: [
      {
        id: "A",
        text: "Give the artist full creative control — let them make the album they actually want to make, even if it's a risk.",
        effects: { engagement: 1, reputation: 3, stability: 3 },
      },
      {
        id: "B",
        text: "Pair the artist with a hot producer and a featured artist who's currently charting — manufacture a hit.",
        effects: { engagement: 3, reputation: -1, stability: 0 },
      },
      {
        id: "C",
        text: "Encourage the artist to publicly \"call out\" their label on social media for \"suppressing their vision\" — engineered drama that frames the artist as an underdog.",
        effects: { engagement: 4, reputation: -1, stability: -4 },
      },
      {
        id: "D",
        text: "Leak that the artist is feuding with another major artist — let the blogs run with it, deny everything, watch the streams climb.",
        effects: { engagement: 5, reputation: -4, stability: -2 },
      },
    ],
    correct: "D",
    outcomes: {
      A: "The album is critically loved. Streaming numbers improve modestly. The label recoups 40% of the investment. The artist builds a smaller but loyal fanbase.",
      B: "The collab single charts at #18. Album opens strong then fades. The artist feels inauthentic. Fans notice.",
      C: "The \"call out\" post goes viral. Fans rally behind the artist. The album debut jumps 3x projections. The label and artist relationship is permanently damaged — contract renegotiations become hostile.",
      D: "The alleged feud drives a 200% spike in streams for both artists. The album debuts Top 10. Six months later a journalist traces the leak back to the label's PR team. Both artists publicly deny involvement. The label faces a credibility crisis.",
    },
    twist:
      "Option D worked on every metric the label cares about — and it used the artist as a prop without their full knowledge. The artist got the chart position. The label kept the power.",
    discussion:
      "Who owns the narrative of an artist's career — the artist or the label? And when the label manufactures the story, who pays the price when it unravels?",
  },
  {
    id: 4,
    title: "Podcast Losing Listeners to Competitors",
    context:
      "A popular true crime / culture podcast peaked at 8M downloads per episode two years ago. It's now averaging 2.1M. Spotify is threatening not to renew their exclusive deal. The hosts have 60 days to prove the show is still valuable.",
    options: [
      {
        id: "A",
        text: "Pivot to more deeply reported, long-form investigative episodes — quality over frequency.",
        effects: { engagement: 1, reputation: 3, stability: 2 },
      },
      {
        id: "B",
        text: "Increase episode frequency and lean into trending topics to stay algorithmically relevant.",
        effects: { engagement: 2, reputation: -1, stability: 0 },
      },
      {
        id: "C",
        text: "One host vague-posts about a \"conflict behind the scenes\" without naming the other — fans speculate, engagement skyrockets.",
        effects: { engagement: 4, reputation: -2, stability: -5 },
      },
      {
        id: "D",
        text: "Book a guest who is publicly controversial — someone currently at the center of a culture war debate — and let the discourse do the marketing.",
        effects: { engagement: 5, reputation: -2, stability: -1 },
      },
    ],
    correct: "D",
    outcomes: {
      A: "Downloads climb slowly to 3.4M over 8 weeks. Spotify notices. The renewal is extended at a lower rate while they \"evaluate.\"",
      B: "Frequent episodes boost the algorithm. Downloads tick up to 3.9M. Quality dips. Listener reviews mention the show feels \"rushed.\" Long-term retention drops.",
      C: "The vague post sends fan forums into a frenzy. The next episode hits 7.2M downloads — people tune in looking for tension. The co-host finds out and the real conflict that follows is worse than the fake one.",
      D: "The controversial guest episode becomes the most-shared in the show's history. 9.1M downloads. Spotify renews. Half the fanbase threatens to unsubscribe. A third actually does — then comes back within a month.",
    },
    twist:
      "Option D saved the Spotify deal. But the show is now associated with controversy in a genre built on trust between host and listener. The numbers recovered. The vibe didn't.",
    discussion:
      "Podcasts survive on intimacy — listeners feel like they know the hosts personally. Is rage-baiting more damaging in that format than in TV or music? Why or why not?",
  },
  {
    id: 5,
    title: "Social Media Platform Losing Relevance",
    context:
      "A major social media platform is experiencing declining user growth. Advertisers are shifting budgets elsewhere. Leadership must decide how to increase engagement.",
    options: [
      {
        id: "A",
        text: "Introduce transparency tools, healthier usage features, and content moderation improvements.",
        effects: { engagement: 0, reputation: 4, stability: 2 },
      },
      {
        id: "B",
        text: "Launch new features similar to fast-growing competitors to retain users.",
        effects: { engagement: 2, reputation: 0, stability: 1 },
      },
      {
        id: "C",
        text: "Adjust the algorithm to prioritize emotionally charged and highly engaging content.",
        effects: { engagement: 4, reputation: -2, stability: -1 },
      },
      {
        id: "D",
        text: "Promote creators known for generating strong reactions and frequent debate.",
        effects: { engagement: 5, reputation: -3, stability: -2 },
      },
    ],
    correct: "D",
    outcomes: {
      A: "User trust improves. Engagement metrics remain flat. Advertiser confidence stabilizes but growth does not return.",
      B: "User activity increases moderately. The platform remains competitive but does not regain leadership.",
      C: "Engagement metrics increase significantly. Time spent on platform rises. Public criticism grows regarding content quality.",
      D: "Engagement and ad revenue increase sharply. The platform becomes strongly associated with polarizing content. Long-term brand perception declines.",
    },
    twist:
      "The highest engagement option correlates with declining user trust over time. The metrics looked great. The platform became a place people hated but couldn't leave.",
    discussion:
      "When a platform optimizes for engagement above everything else, who is actually in control — the platform, the creators, or the algorithm?",
  },
];

export default scenarios;
