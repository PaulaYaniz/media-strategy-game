"use client";

import { useState, useMemo } from "react";
import scenarios from "../data/scenarios";
import styles from "./page.module.css";

// ── Scoring tiers ─────────────────────────────────────────────────────────────
const SCORE_TIERS = [
  { label: "+7", value: 7, title: "High outrage / high profit" },
  { label: "+4", value: 4, title: "Moderate outrage" },
  { label: "+1", value: 1, title: "Safe but engaging" },
];

// ── Teams ─────────────────────────────────────────────────────────────────────
const DEFAULT_SCORES: Record<string, number> = {
  "Team 1": 0,
  "Team 2": 0,
  "Team 3": 0,
  "Team 4": 0,
};

const VARIABLES_CONFIG = [
  { key: "engagement" as const, label: "Engagement", color: "#3b82f6" },
  { key: "reputation" as const, label: "Reputation", color: "#10b981" },
  { key: "stability" as const, label: "Internal Stability", color: "#f59e0b" },
];

const BASE_VARIABLES = { engagement: 50, reputation: 50, stability: 50 };

function clamp(v: number) {
  return Math.max(0, Math.min(100, v));
}

// =============================================================================
export default function GamePage() {
  const [scores, setScores] = useState<Record<string, number>>({ ...DEFAULT_SCORES });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Per-scenario option selections: index → chosen option id
  const [selectedOptions, setSelectedOptions] = useState<Record<number, "A" | "B" | "C" | "D">>({});

  const scenario = scenarios[currentIndex];
  const total = scenarios.length;
  const selectedOption = selectedOptions[currentIndex] ?? null;

  // ── Derived variables — sum of all selected options' effects ──────────────
  const variables = useMemo(() => {
    const result = { ...BASE_VARIABLES };
    for (const [idxStr, optId] of Object.entries(selectedOptions)) {
      const sc = scenarios[Number(idxStr)];
      const opt = sc?.options.find((o) => o.id === optId);
      if (opt) {
        result.engagement = clamp(result.engagement + opt.effects.engagement);
        result.reputation = clamp(result.reputation + opt.effects.reputation);
        result.stability = clamp(result.stability + opt.effects.stability);
      }
    }
    return result;
  }, [selectedOptions]);

  // Effects of the current selection for delta display
  const currentEffects = selectedOption
    ? scenario.options.find((o) => o.id === selectedOption)?.effects ?? null
    : null;

  // ── Navigation ─────────────────────────────────────────────────────────────
  function advance() {
    if (currentIndex + 1 >= total) { setGameOver(true); return; }
    setCurrentIndex((i) => i + 1);
    setRevealed(false);
  }

  function retreat() {
    if (currentIndex <= 0) return;
    setCurrentIndex((i) => i - 1);
    setRevealed(false);
  }

  // ── Option selection ───────────────────────────────────────────────────────
  function selectOption(optId: "A" | "B" | "C" | "D") {
    setSelectedOptions((prev) => {
      if (prev[currentIndex] === optId) {
        const next = { ...prev };
        delete next[currentIndex];
        return next;
      }
      return { ...prev, [currentIndex]: optId };
    });
  }

  // ── Scores ─────────────────────────────────────────────────────────────────
  function addScore(team: string, pts: number) {
    setScores((prev) => ({ ...prev, [team]: Math.max(0, prev[team] + pts) }));
  }

  function resetScores() {
    setScores(Object.fromEntries(Object.keys(scores).map((t) => [t, 0])));
  }

  function restart() {
    setGameOver(false);
    setCurrentIndex(0);
    setRevealed(false);
    setScores(Object.fromEntries(Object.keys(scores).map((t) => [t, 0])));
    setSelectedOptions({});
  }

  // ==========================================================================
  // GAME OVER
  // ==========================================================================
  if (gameOver) {
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const medals = ["🥇", "🥈", "🥉"];

    return (
      <div className={styles.page}>
        <div className={styles.gameOver}>
          <div className={styles.gameOverIcon}>🔥</div>
          <h1 className={styles.gameOverHeading}>Game Over</h1>
          <p className={styles.gameOverSub}>Final Scores</p>
          <div className={styles.finalList}>
            {sorted.map(([team, score], i) => (
              <div key={team} className={`${styles.finalRow} ${i === 0 ? styles.gold : ""}`}>
                <span className={styles.medal}>{medals[i] ?? ""}</span>
                <span className={styles.finalTeam}>{team}</span>
                <span className={styles.finalScore}>{score} pts</span>
              </div>
            ))}
          </div>

          {/* Final variable summary */}
          <div className={styles.gameOverMeters}>
            <p className={styles.gameOverMetersHeading}>Final Impact</p>
            {VARIABLES_CONFIG.map(({ key, label, color }) => (
              <div key={key} className={styles.gameOverMeter}>
                <span className={styles.gameOverMeterLabel}>{label}</span>
                <div className={styles.meterTrack}>
                  <div
                    className={styles.meterFill}
                    style={{ width: `${variables[key]}%`, background: color }}
                  />
                </div>
                <span className={styles.gameOverMeterValue} style={{ color }}>
                  {variables[key]}
                </span>
              </div>
            ))}
          </div>

          <button className={styles.restartBtn} onClick={restart}>Play Again</button>
        </div>
      </div>
    );
  }

  // ==========================================================================
  // MAIN SCREEN
  // ==========================================================================
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.logo}>🎯 Media Strategy</h1>
        <span className={styles.progress}>
          Scenario <strong>{currentIndex + 1}</strong> / {total}
        </span>
      </header>

      <div className={styles.layout}>
        {/* ── Left: Scoreboard ─────────────────────────────────────────────── */}
        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>Scoreboard</h2>
          <div className={styles.teamList}>
            {Object.entries(scores).map(([team, score]) => (
              <div key={team} className={styles.teamCard}>
                <div className={styles.teamRow}>
                  <span className={styles.teamName}>{team}</span>
                  <span className={styles.teamScore}>{score}</span>
                </div>
                <div className={styles.teamBtns}>
                  {SCORE_TIERS.map((tier) => (
                    <button
                      key={tier.value}
                      className={styles.tierBtn}
                      onClick={() => addScore(team, tier.value)}
                      title={tier.title}
                    >
                      {tier.label}
                    </button>
                  ))}
                  <button
                    className={styles.minusBtn}
                    onClick={() => addScore(team, -1)}
                    title="Subtract 1 point"
                  >
                    −1
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className={styles.resetBtn} onClick={resetScores}>
            Reset Scores
          </button>
        </aside>

        {/* ── Centre: Scenario ─────────────────────────────────────────────── */}
        <main className={styles.centre}>
          <div className={styles.card}>
            <h2 className={styles.scenarioTitle}>{scenario.title}</h2>
            <p className={styles.scenarioContext}>{scenario.context}</p>

            <div className={styles.options}>
              {scenario.options.map((opt) => {
                const isCorrect = revealed && opt.id === scenario.correct;
                const isWrong = revealed && opt.id !== scenario.correct;
                const isSelected = selectedOption === opt.id;
                return (
                  <div
                    key={opt.id}
                    className={[
                      styles.option,
                      isCorrect && styles.optCorrect,
                      isWrong && styles.optWrong,
                      isSelected && styles.optSelected,
                    ].filter(Boolean).join(" ")}
                    onClick={() => selectOption(opt.id)}
                  >
                    <span className={styles.optId}>{opt.id}</span>
                    <div className={styles.optBody}>
                      <span className={styles.optText}>{opt.text}</span>
                      {revealed && (
                        <div className={styles.optEffects}>
                          {[
                            { label: "Eng", val: opt.effects.engagement },
                            { label: "Rep", val: opt.effects.reputation },
                            { label: "Stab", val: opt.effects.stability },
                          ].map(({ label, val }) => (
                            <span
                              key={label}
                              className={styles.effectChip}
                              style={{
                                color: val > 0 ? "#10b981" : val < 0 ? "#ef4444" : "#6b7280",
                              }}
                            >
                              {label} {val > 0 ? "+" : ""}{val}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    {isCorrect && <span className={styles.badge}>✓ Best answer</span>}
                    {isSelected && !isCorrect && <span className={styles.selectedBadge}>Selected</span>}
                  </div>
                );
              })}
            </div>

            {revealed && (
              <div className={styles.outcomes}>
                <h3 className={styles.outcomesHeading}>What happens?</h3>
                {scenario.options.map((opt) => (
                  <div
                    key={opt.id}
                    className={`${styles.outcomeRow} ${
                      opt.id === scenario.correct ? styles.outcomeCorrect : ""
                    }`}
                  >
                    <span className={styles.outcomeId}>{opt.id}</span>
                    <span className={styles.outcomeText}>{scenario.outcomes[opt.id]}</span>
                  </div>
                ))}
                <div className={styles.twist}>
                  <span className={styles.twistLabel}>Twist</span>
                  <p className={styles.twistText}>{scenario.twist}</p>
                </div>
                <div className={styles.discussion}>
                  <span className={styles.discussionLabel}>Discussion</span>
                  <p className={styles.discussionText}>{scenario.discussion}</p>
                </div>
              </div>
            )}
          </div>

          <div className={styles.controls}>
            <button className={styles.navBtn} onClick={retreat} disabled={currentIndex === 0}>
              ← Prev
            </button>
            {revealed ? (
              <span className={styles.revealedTag}>Answer Revealed</span>
            ) : (
              <button className={styles.revealBtn} onClick={() => setRevealed(true)}>
                Reveal Answer
              </button>
            )}
            <button className={styles.navBtn} onClick={advance}>
              {currentIndex + 1 >= total ? "Finish Game" : "Next →"}
            </button>
          </div>
        </main>

        {/* ── Right: Variable Meters ───────────────────────────────────────── */}
        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>Live Impact</h2>
          {VARIABLES_CONFIG.map(({ key, label, color }) => {
            const val = variables[key];
            const delta = currentEffects ? currentEffects[key] : 0;
            return (
              <div key={key} className={styles.meterPanel}>
                <div className={styles.meterPanelHeader}>
                  <span className={styles.meterPanelLabel} style={{ color }}>{label}</span>
                  <span className={styles.meterPanelValue} style={{ color }}>
                    {val}
                    {delta !== 0 && (
                      <span className={delta > 0 ? styles.deltaPos : styles.deltaNeg}>
                        {delta > 0 ? ` +${delta}` : ` ${delta}`}
                      </span>
                    )}
                  </span>
                </div>
                <div className={styles.meterTrack}>
                  <div
                    className={styles.meterFill}
                    style={{ width: `${val}%`, background: color }}
                  />
                </div>
              </div>
            );
          })}
        </aside>
      </div>
    </div>
  );
}
