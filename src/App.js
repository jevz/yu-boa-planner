          "1 tbsp sambal oelek or chilli garlic sauce",
 import { useState, useEffect, useRef } from "react";

const RECIPE_DATA = {
  shortRibs: {
    title: "Braised Short Ribs",
    icon: "🥩",
    color: "#8B2500",
    groups: [
      {
        name: "The Ribs",
        ingredients: [
          "1 kg bone-in beef short ribs (3–4 pieces)",
          "Salt and black pepper",
          "2 tbsp neutral oil",
        ],
        steps: [
          "Pat ribs dry with paper towel. Season generously with salt and pepper on all sides.",
          "Rest at room temperature for 30 minutes while you prep everything else.",
        ],
      },
      {
        name: "Sear",
        ingredients: [],
        steps: [
          "Heat oil in a Dutch oven over medium-high heat.",
          "Working in batches, sear ribs until deep brown on all sides — about 2–3 min per side.",
          "Remove ribs to a plate and set aside.",
        ],
      },
      {
        name: "The Braise",
        ingredients: [
          "8 cloves garlic, roughly smashed",
          "1 thumb fresh ginger, sliced into coins",
          "4–5 spring onions, cut 5 cm (whites & greens separated)",
          "2–3 dried red chillies or 1 tbsp chilli flakes",
          "1 tbsp sambal oelek or chilli garlic sauce",
          "4 tbsp oyster sauce",
          "3 tbsp soy sauce",
          "1 tbsp dark soy sauce",
          "2 tbsp dry sherry (or mirin, or skip entirely)",
          "2 tbsp brown sugar",
          "1 star anise",
          "170 ml water or beef stock",
        ],
        steps: [
          "Turn heat to medium. Add garlic, ginger, spring onion whites, and dried chillies. Stir for 2 min until fragrant.",
          "Add sambal, oyster sauce, soy sauces, sherry/mirin, brown sugar, and star anise. Pour in stock. Stir and bring to a simmer.",
          "Return ribs to the pot — liquid should come ⅓ to halfway up. Cover tightly.",
          "Braise at 150°C for 3–3.5 hours (or stovetop on lowest simmer, or slow cooker 6–7 hrs on low).",
          "Ribs are done when a fork slides through effortlessly.",
        ],
      },
      {
        name: "Shred & Glaze",
        ingredients: [
          "Reserved braising liquid (strained)",
          "1 tbsp oyster sauce",
          "1 tbsp soy sauce",
          "1 tbsp honey or brown sugar",
        ],
        steps: [
          "Remove ribs. Strip meat from bones and shred with two forks. Discard bones and gristle.",
          "Strain braising liquid into a saucepan. Skim fat off the surface.",
          "Add extra oyster sauce, soy sauce, and honey. Boil and reduce by half until thick and glossy.",
          "Toss shredded meat in the glaze. Taste and adjust — more chilli, soy, or sugar as needed.",
        ],
      },
    ],
  },
  baoBuns: {
    title: "Fluffy Bao Buns",
    icon: "🥟",
    color: "#B8860B",
    groups: [
      {
        name: "Dough",
        ingredients: [
          "450g all-purpose flour (not bread flour!)",
          "2 tsp instant yeast",
          "2 tsp baking powder",
          "3 tbsp caster sugar",
          "⅓ tsp fine salt",
          "1½ tbsp neutral oil",
          "240–250 ml lukewarm water (or half milk/half water)",
        ],
        steps: [
          "Whisk together flour, instant yeast, baking powder, sugar, and salt in a large bowl.",
          "Add oil and lukewarm water. Mix until a shaggy dough forms.",
          "Knead on a lightly floured surface for 8–10 min until smooth, elastic, and slightly tacky (not sticky). Oil your hands rather than adding extra flour.",
        ],
      },
      {
        name: "First Rise",
        ingredients: [],
        steps: [
          "Place dough in a lightly oiled bowl. Cover with cling film or a damp tea towel.",
          "Leave in a warm spot until doubled in size — about 45–60 minutes.",
        ],
        timer: { label: "First Rise", minutes: 50 },
      },
      {
        name: "Shape",
        ingredients: [
          "A little neutral oil (for brushing)",
          "Baking paper squares (for steaming)",
        ],
        steps: [
          "Punch down dough, knead briefly (30 sec) to push out large air bubbles.",
          "Divide into 18 equal pieces (~40g each — use a scale for consistency).",
          "Roll each piece into a smooth ball, then into an oval ~10–12 cm long, slightly thicker in centre.",
          "Lightly brush one half with oil, then fold in half to form a half-moon shape.",
          "Place each on a baking paper square.",
        ],
      },
      {
        name: "Second Rise",
        ingredients: [],
        steps: [
          "Cover shaped bao loosely with cling film or damp cloth.",
          "Rest 25–30 min until visibly puffed (about 50% bigger, NOT doubled).",
          "A gentle poke should leave a slow-springing indent. If it doesn't spring back at all, they've over-proofed.",
        ],
        timer: { label: "Second Rise", minutes: 28 },
      },
      {
        name: "Steam",
        ingredients: [],
        steps: [
          "Bring steamer water to a rolling boil, then reduce to medium heat (steady, gentle steam).",
          "Place bao in steamer with 3–4 cm gaps between each. Steam for 10–12 minutes.",
          "Turn off heat. DO NOT OPEN THE LID. Wait 5 full minutes.",
          "Crack the lid slightly, wait 1 more minute, then remove bao.",
          "Fridge any waiting bao between batches to prevent over-proofing.",
        ],
        timer: { label: "Steam", minutes: 12 },
      },
    ],
  },
  mushroomPancakes: {
    title: "Crispy \"Duck\" Pancakes",
    icon: "🍄",
    color: "#6B4E3D",
    groups: [
      {
        name: "Prep the Mushrooms",
        ingredients: [
          "250g king oyster or oyster mushrooms",
          "2 tbsp cornflour",
          "1 tbsp Chinese five spice",
          "½ tbsp garlic powder",
          "½ tbsp onion powder",
          "Salt and pepper",
        ],
        steps: [
          "Using your hands, tear the mushrooms into small thin strips. Place in a large mixing bowl.",
          "Add cornflour, five spice, garlic powder, and onion powder. Season with salt and pepper.",
          "Mix well — make sure every strip is well coated.",
        ],
      },
      {
        name: "Fry",
        ingredients: [
          "Vegetable oil (enough to cover the base of your pan)",
        ],
        steps: [
          "Warm enough oil to cover the bottom of a frying pan over medium-high heat.",
          "Add a handful of mushrooms — don't overcrowd the pan. Fry until browned and crisp on both sides.",
          "Place on kitchen towel to drain excess oil. Repeat for all remaining mushrooms.",
        ],
      },
      {
        name: "Toss & Serve",
        ingredients: [
          "75g hoisin sauce (plus extra for serving)",
          "½ cucumber, cut into strips",
          "3–4 spring onions, cut into strips",
          "Toasted sesame seeds",
          "Chinese pancakes (6–8)",
        ],
        steps: [
          "Once all mushrooms are cooked, place in a bowl and stir through 1 tbsp of hoisin sauce.",
          "Warm your Chinese pancakes (steam or microwave for 30 sec).",
          "Assemble: pancake → hoisin → crispy mushrooms → cucumber → spring onion → sesame seeds. Enjoy!",
        ],
      },
    ],
  },
  toppings: {
    title: "Assembly & Toppings",
    icon: "✨",
    color: "#2E8B57",
    groups: [
      {
        name: "Build Your Bao",
        ingredients: [
          "Sliced spring onion greens",
          "Fresh coriander (cilantro)",
          "Sliced red chilli",
          "Quick-pickled cucumber or carrot (optional)",
          "Chilli oil (optional)",
          "Toasted sesame seeds (optional)",
        ],
        steps: [
          "Open each steamed bao and load with a generous heap of glazed short rib.",
          "Top with spring onion, coriander, chilli, and any other toppings you like.",
          "Eat immediately — bao firm up as they cool!",
        ],
      },
    ],
  },
};

const COOK_MODE_PHASES = [
  {
    title: "Get the Braise Going",
    time: "T+0:00",
    subtitle: "Season, sear, and get the ribs in the oven",
    refs: [
      { section: "shortRibs", group: 0 },
      { section: "shortRibs", group: 1 },
      { section: "shortRibs", group: 2 },
    ],
  },
  {
    title: "Start the Dough",
    time: "T+2:00",
    subtitle: "While the ribs braise — mix, knead, and rise",
    refs: [
      { section: "baoBuns", group: 0 },
      { section: "baoBuns", group: 1 },
    ],
  },
  {
    title: "Shape, Prep & Shred",
    time: "T+3:00",
    subtitle: "Lots happening at once — shape bao, prep mushrooms, pull ribs",
    refs: [
      { section: "baoBuns", group: 2 },
      { section: "baoBuns", group: 3 },
      { section: "mushroomPancakes", group: 0 },
      { section: "shortRibs", group: 3 },
    ],
  },
  {
    title: "Fry & Steam",
    time: "T+3:25",
    subtitle: "The home stretch — everything cooks in parallel",
    refs: [
      { section: "mushroomPancakes", group: 1 },
      { section: "baoBuns", group: 4 },
      { section: "mushroomPancakes", group: 2 },
    ],
  },
  {
    title: "Assemble & Eat!",
    time: "T+3:45",
    subtitle: "Load up those bao and pancakes",
    refs: [
      { section: "toppings", group: 0 },
    ],
  },
];

const DISH_TAGS = {
  shortRibs: { label: "Ribs", color: "#8B2500" },
  baoBuns: { label: "Bao", color: "#B8860B" },
  mushroomPancakes: { label: "Duck", color: "#6B4E3D" },
  toppings: { label: "Serve", color: "#2E8B57" },
};
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

function Timer({ label, minutes }) {
  const [totalSeconds, setTotalSeconds] = useState(minutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && totalSeconds > 0) {
      intervalRef.current = setInterval(() => {
        setTotalSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            setIsFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, totalSeconds]);

  const reset = () => {
    clearInterval(intervalRef.current);
    setTotalSeconds(minutes * 60);
    setIsRunning(false);
    setIsFinished(false);
  };

  const progress = 1 - totalSeconds / (minutes * 60);
  const circumference = 2 * Math.PI * 28;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        background: isFinished
          ? "linear-gradient(135deg, #2d1a0e 0%, #4a1a0a 100%)"
          : "linear-gradient(135deg, #1a1512 0%, #2d1a0e 100%)",
        borderRadius: "14px",
        padding: "14px 18px",
        border: isFinished
          ? "1px solid rgba(255,100,50,0.5)"
          : "1px solid rgba(255,200,140,0.1)",
        marginTop: "10px",
        animation: isFinished ? "pulse 1s ease-in-out infinite" : "none",
      }}
    >
      <div style={{ position: "relative", width: 64, height: 64, flexShrink: 0 }}>
        <svg width="64" height="64" viewBox="0 0 64 64">
          <circle
            cx="32" cy="32" r="28"
            fill="none"
            stroke="rgba(255,200,140,0.1)"
            strokeWidth="4"
          />
          <circle
            cx="32" cy="32" r="28"
            fill="none"
            stroke={isFinished ? "#ff6432" : "#e8a848"}
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
            strokeLinecap="round"
            transform="rotate(-90 32 32)"
            style={{ transition: "stroke-dashoffset 0.5s ease" }}
          />
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
            fontSize: "14px",
            fontWeight: 600,
            color: isFinished ? "#ff6432" : "#f0d9b5",
            letterSpacing: "-0.5px",
          }}
        >
          {formatTime(totalSeconds)}
        </div>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            color: "rgba(255,200,140,0.5)",
            marginBottom: "6px",
            fontWeight: 600,
          }}
        >
          {isFinished ? "⏰ Time's up!" : label}
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          {!isFinished ? (
            <button
              onClick={() => setIsRunning(!isRunning)}
              style={{
                background: isRunning
                  ? "rgba(255,200,140,0.15)"
                  : "linear-gradient(135deg, #e8a848 0%, #d4903c 100%)",
                color: isRunning ? "#e8a848" : "#1a1512",
                border: "none",
                borderRadius: "8px",
                padding: "8px 20px",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.3px",
              }}
            >
              {isRunning ? "Pause" : totalSeconds < minutes * 60 ? "Resume" : "Start"}
            </button>
          ) : null}
          <button
            onClick={reset}
            style={{
              background: "rgba(255,200,140,0.08)",
              color: "rgba(255,200,140,0.6)",
              border: "1px solid rgba(255,200,140,0.15)",
              borderRadius: "8px",
              padding: "8px 16px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

function CheckItem({ text, checked, onChange, type }) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        padding: "10px 14px",
        borderRadius: "10px",
        cursor: "pointer",
        background: checked ? "rgba(255,200,140,0.04)" : "transparent",
        transition: "all 0.2s ease",
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: type === "ingredient" ? "6px" : "50%",
          border: checked
            ? "2px solid #e8a848"
            : "2px solid rgba(255,200,140,0.25)",
          background: checked
            ? "linear-gradient(135deg, #e8a848 0%, #d4903c 100%)"
            : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          marginTop: "1px",
          transition: "all 0.2s ease",
        }}
      >
        {checked && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 6L5 8.5L9.5 3.5"
              stroke="#1a1512"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{ display: "none" }}
      />
      <span
        style={{
          fontSize: "14.5px",
          lineHeight: "1.5",
          color: checked ? "rgba(255,200,140,0.35)" : "#f0d9b5",
          textDecoration: checked ? "line-through" : "none",
          transition: "all 0.2s ease",
          fontWeight: type === "step" ? 400 : 500,
        }}
      >
        {type === "step" && !checked && (
          <span style={{ color: "#e8a848", marginRight: "4px" }}>→</span>
        )}
        {text}
      </span>
    </label>
  );
}

function RecipeSection({ sectionKey, data, checkedState, onToggle }) {
  const [expanded, setExpanded] = useState(sectionKey === "shortRibs");

  const totalItems = data.groups.reduce(
    (acc, g) => acc + g.ingredients.length + g.steps.length,
    0
  );
  const checkedItems = Object.values(checkedState).filter(Boolean).length;
  const progress = totalItems > 0 ? checkedItems / totalItems : 0;

  return (
    <div
      style={{
        background: "linear-gradient(165deg, rgba(255,200,140,0.06) 0%, rgba(255,200,140,0.02) 100%)",
        borderRadius: "18px",
        border: "1px solid rgba(255,200,140,0.1)",
        overflow: "hidden",
        marginBottom: "16px",
      }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          padding: "20px 22px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <span style={{ fontSize: "28px" }}>{data.icon}</span>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#f0d9b5",
              letterSpacing: "-0.3px",
            }}
          >
            {data.title}
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "rgba(255,200,140,0.4)",
              marginTop: "4px",
              fontWeight: 500,
            }}
          >
            {checkedItems} / {totalItems} done
          </div>
        </div>
        <div style={{ position: "relative", width: 40, height: 40 }}>
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle
              cx="20" cy="20" r="17"
              fill="none"
              stroke="rgba(255,200,140,0.1)"
              strokeWidth="3"
            />
            <circle
              cx="20" cy="20" r="17"
              fill="none"
              stroke={data.color}
              strokeWidth="3"
              strokeDasharray={2 * Math.PI * 17}
              strokeDashoffset={2 * Math.PI * 17 * (1 - progress)}
              strokeLinecap="round"
              transform="rotate(-90 20 20)"
              style={{ transition: "stroke-dashoffset 0.4s ease" }}
            />
          </svg>
          {progress >= 1 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
              }}
            >
              ✓
            </div>
          )}
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{
            transform: expanded ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 0.25s ease",
            flexShrink: 0,
          }}
        >
          <path
            d="M5 8L10 13L15 8"
            stroke="rgba(255,200,140,0.4)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {expanded && (
        <div style={{ padding: "0 22px 22px" }}>
          {data.groups.map((group, gi) => (
            <div key={gi} style={{ marginBottom: gi < data.groups.length - 1 ? "24px" : 0 }}>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1.8px",
                  color: data.color,
                  marginBottom: "12px",
                  paddingBottom: "8px",
                  borderBottom: `1px solid ${data.color}33`,
                }}
              >
                {group.name}
              </div>

              {group.ingredients.length > 0 && (
                <div style={{ marginBottom: "14px" }}>
                  <div
                    style={{
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      color: "rgba(255,200,140,0.3)",
                      marginBottom: "6px",
                      fontWeight: 600,
                      paddingLeft: "14px",
                    }}
                  >
                    Ingredients
                  </div>
                  {group.ingredients.map((ing, ii) => {
                    const key = `${sectionKey}-${gi}-ing-${ii}`;
                    return (
                      <CheckItem
                        key={key}
                        text={ing}
                        checked={!!checkedState[key]}
                        onChange={() => onToggle(key)}
                        type="ingredient"
                      />
                    );
                  })}
                </div>
              )}

              <div>
                <div
                  style={{
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    color: "rgba(255,200,140,0.3)",
                    marginBottom: "6px",
                    fontWeight: 600,
                    paddingLeft: "14px",
                  }}
                >
                  Steps
                </div>
                {group.steps.map((step, si) => {
                  const key = `${sectionKey}-${gi}-step-${si}`;
                  return (
                    <CheckItem
                      key={key}
                      text={step}
                      checked={!!checkedState[key]}
                      onChange={() => onToggle(key)}
                      type="step"
                    />
                  );
                })}
              </div>

              {group.timer && <Timer label={group.timer.label} minutes={group.timer.minutes} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DishTag({ section }) {
  const tag = DISH_TAGS[section];
  if (!tag) return null;
  return (
    <span
      style={{
        fontSize: "9px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "1.2px",
        color: tag.color,
        background: `${tag.color}18`,
        border: `1px solid ${tag.color}33`,
        borderRadius: "5px",
        padding: "2px 7px",
        flexShrink: 0,
        marginTop: "2px",
      }}
    >
      {tag.label}
    </span>
  );
}

function CookMode({ checkedState, onToggle }) {
  return (
    <div>
      {COOK_MODE_PHASES.map((phase, pi) => {
        const allStepKeys = [];
        phase.refs.forEach(({ section, group: gi }) => {
          const g = RECIPE_DATA[section]?.groups[gi];
          if (g) g.steps.forEach((_, si) => allStepKeys.push(`${section}-${gi}-step-${si}`));
        });
        const doneCount = allStepKeys.filter((k) => checkedState[k]).length;
        const allDone = allStepKeys.length > 0 && doneCount === allStepKeys.length;

        return (
          <div
            key={pi}
            style={{
              marginBottom: "20px",
              background: "rgba(255,200,140,0.04)",
              borderRadius: "18px",
              border: allDone
                ? "1px solid rgba(46,139,87,0.3)"
                : "1px solid rgba(255,200,140,0.1)",
              overflow: "hidden",
            }}
          >
            {/* Phase header */}
            <div
              style={{
                padding: "18px 20px 14px",
                borderBottom: "1px solid rgba(255,200,140,0.06)",
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
                  fontSize: "11px",
                  color: "rgba(255,200,140,0.35)",
                  fontWeight: 600,
                  background: "rgba(255,200,140,0.06)",
                  borderRadius: "6px",
                  padding: "4px 8px",
                  flexShrink: 0,
                  marginTop: "1px",
                }}
              >
                {phase.time}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: allDone ? "rgba(46,139,87,0.7)" : "#f0d9b5",
                    textDecoration: allDone ? "line-through" : "none",
                    letterSpacing: "-0.2px",
                  }}
                >
                  {allDone ? "✓ " : ""}{phase.title}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,200,140,0.35)",
                    marginTop: "3px",
                    fontStyle: "italic",
                  }}
                >
                  {phase.subtitle}
                </div>
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "rgba(255,200,140,0.3)",
                  fontWeight: 600,
                  fontVariantNumeric: "tabular-nums",
                  marginTop: "4px",
                }}
              >
                {doneCount}/{allStepKeys.length}
              </div>
            </div>

            {/* Steps */}
            <div style={{ padding: "10px 14px 14px" }}>
              {phase.refs.map(({ section, group: gi }) => {
                const g = RECIPE_DATA[section]?.groups[gi];
                if (!g) return null;
                return (
                  <div key={`${section}-${gi}`} style={{ marginBottom: "6px" }}>
                    {g.steps.map((step, si) => {
                      const key = `${section}-${gi}-step-${si}`;
                      return (
                        <div
                          key={key}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "10px",
                          }}
                        >
                          <div style={{ flex: 1 }}>
                            <CheckItem
                              text={step}
                              checked={!!checkedState[key]}
                              onChange={() => onToggle(key)}
                              type="step"
                            />
                          </div>
                          <div style={{ paddingTop: "12px" }}>
                            <DishTag section={section} />
                          </div>
                        </div>
                      );
                    })}
                    {g.timer && (
                      <div style={{ paddingLeft: "14px" }}>
                        <Timer label={g.timer.label} minutes={g.timer.minutes} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function CookingApp() {
  const [checkedState, setCheckedState] = useState({});
  const [activeTab, setActiveTab] = useState("cookmode");

  const onToggle = (key) => {
    setCheckedState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const totalAll = Object.values(RECIPE_DATA).reduce(
    (acc, section) =>
      acc +
      section.groups.reduce(
        (a, g) => a + g.ingredients.length + g.steps.length,
        0
      ),
    0
  );
  const checkedAll = Object.values(checkedState).filter(Boolean).length;

  const timeline = [
    { time: "T+0:00", task: "Season & sear ribs. Start the braise.", color: "#8B2500" },
    { time: "T+2:00", task: "Start bao dough. Mix, knead, first rise.", color: "#B8860B" },
    { time: "T+3:00", task: "Shape bao. Second rise (30 min).", color: "#B8860B" },
    { time: "T+3:10", task: "Prep & coat mushrooms while bao proof.", color: "#6B4E3D" },
    { time: "T+3:15", task: "Pull ribs, shred, make glaze.", color: "#8B2500" },
    { time: "T+3:25", task: "Fry mushrooms in batches. Toss in hoisin.", color: "#6B4E3D" },
    { time: "T+3:30", task: "Steam bao in batches. Warm pancakes.", color: "#B8860B" },
    { time: "T+3:45", task: "Assemble everything & eat! 🎉", color: "#2E8B57" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0f0c09 0%, #1a1512 8%, #1a1512 100%)",
        color: "#f0d9b5",
        fontFamily:
          "'Newsreader', 'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600;6..72,700&display=swap');
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        * { box-sizing: border-box; -webkit-font-smoothing: antialiased; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,200,140,0.15); border-radius: 4px; }
      `}</style>

      {/* Header */}
      <div
        style={{
          padding: "32px 22px 20px",
          textAlign: "center",
          borderBottom: "1px solid rgba(255,200,140,0.08)",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "rgba(255,200,140,0.35)",
            marginBottom: "10px",
            fontWeight: 600,
          }}
        >
          Recreating
        </div>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 700,
            margin: 0,
            letterSpacing: "-0.5px",
            lineHeight: 1.2,
            color: "#f0d9b5",
          }}
        >
          Yu's Short Rib Bao
          <br />
          & Crispy "Duck" Pancakes
        </h1>
        <div
          style={{
            fontSize: "13px",
            color: "rgba(255,200,140,0.4)",
            marginTop: "10px",
            fontStyle: "italic",
          }}
        >
          Chilli · Garlic · Oyster Sauce + Crispy "Duck" — serves 3
        </div>
        <div
          style={{
            marginTop: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              height: "4px",
              width: "160px",
              background: "rgba(255,200,140,0.1)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${(checkedAll / totalAll) * 100}%`,
                background: "linear-gradient(90deg, #e8a848, #d4903c)",
                borderRadius: "2px",
                transition: "width 0.4s ease",
              }}
            />
          </div>
          <span
            style={{
              fontSize: "12px",
              color: "rgba(255,200,140,0.4)",
              fontWeight: 600,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {Math.round((checkedAll / totalAll) * 100)}%
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          padding: "16px 22px 0",
          gap: "6px",
        }}
      >
        {[
          { id: "cookmode", label: "Cook Mode" },
          { id: "dishes", label: "Dishes" },
          { id: "timeline", label: "Timeline" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: "10px",
              background:
                activeTab === tab.id
                  ? "rgba(255,200,140,0.1)"
                  : "transparent",
              border:
                activeTab === tab.id
                  ? "1px solid rgba(255,200,140,0.2)"
                  : "1px solid rgba(255,200,140,0.06)",
              borderRadius: "10px",
              color:
                activeTab === tab.id
                  ? "#f0d9b5"
                  : "rgba(255,200,140,0.35)",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "0.5px",
              fontFamily: "inherit",
              transition: "all 0.2s ease",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "20px 16px 100px" }}>
        {activeTab === "cookmode" && (
          <CookMode checkedState={checkedState} onToggle={onToggle} />
        )}

        {activeTab === "dishes" && (
          <>
            {Object.entries(RECIPE_DATA).map(([key, data]) => {
              const sectionChecked = {};
              Object.entries(checkedState).forEach(([k, v]) => {
                if (k.startsWith(key)) sectionChecked[k] = v;
              });
              return (
                <RecipeSection
                  key={key}
                  sectionKey={key}
                  data={data}
                  checkedState={sectionChecked}
                  onToggle={onToggle}
                />
              );
            })}
          </>
        )}

        {activeTab === "timeline" && (
          <div
            style={{
              background: "rgba(255,200,140,0.04)",
              borderRadius: "18px",
              border: "1px solid rgba(255,200,140,0.1)",
              padding: "24px",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.8px",
                color: "rgba(255,200,140,0.5)",
                marginBottom: "22px",
              }}
            >
              Cooking Timeline
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "rgba(255,200,140,0.35)",
                marginBottom: "24px",
                fontStyle: "italic",
                lineHeight: 1.5,
              }}
            >
              Start all three components so they're ready together.
              Total cook time: ~3 hrs 45 min.
            </div>
            {timeline.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  marginBottom: i < timeline.length - 1 ? "20px" : 0,
                  position: "relative",
                }}
              >
                {i < timeline.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      left: "33px",
                      top: "28px",
                      bottom: "-14px",
                      width: "2px",
                      background:
                        "linear-gradient(180deg, rgba(255,200,140,0.15) 0%, transparent 100%)",
                    }}
                  />
                )}
                <div
                  style={{
                    fontFamily:
                      "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
                    fontSize: "12px",
                    color: "rgba(255,200,140,0.4)",
                    width: "52px",
                    flexShrink: 0,
                    paddingTop: "4px",
                    fontWeight: 500,
                  }}
                >
                  {item.time}
                </div>
                <div
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    background: item.color,
                    flexShrink: 0,
                    marginTop: "4px",
                    boxShadow: `0 0 8px ${item.color}44`,
                  }}
                />
                <div
                  style={{
                    fontSize: "14.5px",
                    lineHeight: 1.5,
                    color: "#f0d9b5",
                    paddingTop: "1px",
                  }}
                >
                  {item.task}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Reset FAB */}
      {checkedAll > 0 && (
        <button
          onClick={() => setCheckedState({})}
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            background: "linear-gradient(135deg, #2d1a0e 0%, #1a1512 100%)",
            border: "1px solid rgba(255,200,140,0.2)",
            borderRadius: "14px",
            padding: "12px 18px",
            color: "rgba(255,200,140,0.6)",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "inherit",
            letterSpacing: "0.5px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          }}
        >
          Reset All
        </button>
      )}
    </div>
  );
}
         "4 tbsp oyster sauce",
          "3 tbsp soy sauce",
          "1 tbsp dark soy sauce",
          "2 tbsp dry sherry (or mirin, or skip entirely)",
          "2 tbsp brown sugar",
          "1 star anise",
          "170 ml water or beef stock",
        ],
        steps: [
          "Turn heat to medium. Add garlic, ginger, spring onion whites, and dried chillies. Stir for 2 min until fragrant.",
          "Add sambal, oyster sauce, soy sauces, sherry/mirin, brown sugar, and star anise. Pour in stock. Stir and bring to a simmer.",
          "Return ribs to the pot — liquid should come ⅓ to halfway up. Cover tightly.",
          "Braise at 150°C for 3–3.5 hours (or stovetop on lowest simmer, or slow cooker 6–7 hrs on low).",
          "Ribs are done when a fork slides through effortlessly.",
        ],
      },
      {
        name: "Shred & Glaze",
        ingredients: [
          "Reserved braising liquid (strained)",
          "1 tbsp oyster sauce",
          "1 tbsp soy sauce",
          "1 tbsp honey or brown sugar",
        ],
        steps: [
          "Remove ribs. Strip meat from bones and shred with two forks. Discard bones and gristle.",
          "Strain braising liquid into a saucepan. Skim fat off the surface.",
          "Add extra oyster sauce, soy sauce, and honey. Boil and reduce by half until thick and glossy.",
          "Toss shredded meat in the glaze. Taste and adjust — more chilli, soy, or sugar as needed.",
        ],
      },
    ],
  },
  baoBuns: {
    title: "Fluffy Bao Buns",
    icon: "🥟",
    color: "#B8860B",
    groups: [
      {
        name: "Dough",
        ingredients: [
          "450g all-purpose flour (not bread flour!)",
          "2 tsp instant yeast",
          "2 tsp baking powder",
          "3 tbsp caster sugar",
          "⅓ tsp fine salt",
          "1½ tbsp neutral oil",
          "240–250 ml lukewarm water (or half milk/half water)",
        ],
        steps: [
          "Whisk together flour, instant yeast, baking powder, sugar, and salt in a large bowl.",
          "Add oil and lukewarm water. Mix until a shaggy dough forms.",
          "Knead on a lightly floured surface for 8–10 min until smooth, elastic, and slightly tacky (not sticky). Oil your hands rather than adding extra flour.",
        ],
      },
      {
        name: "First Rise",
        ingredients: [],
        steps: [
          "Place dough in a lightly oiled bowl. Cover with cling film or a damp tea towel.",
          "Leave in a warm spot until doubled in size — about 45–60 minutes.",
        ],
        timer: { label: "First Rise", minutes: 50 },
      },
      {
        name: "Shape",
        ingredients: [
          "A little neutral oil (for brushing)",
          "Baking paper squares (for steaming)",
        ],
        steps: [
          "Punch down dough, knead briefly (30 sec) to push out large air bubbles.",
          "Divide into 18 equal pieces (~40g each — use a scale for consistency).",
          "Roll each piece into a smooth ball, then into an oval ~10–12 cm long, slightly thicker in centre.",
          "Lightly brush one half with oil, then fold in half to form a half-moon shape.",
          "Place each on a baking paper square.",
        ],
      },
      {
        name: "Second Rise",
        ingredients: [],
        steps: [
          "Cover shaped bao loosely with cling film or damp cloth.",
          "Rest 25–30 min until visibly puffed (about 50% bigger, NOT doubled).",
          "A gentle poke should leave a slow-springing indent. If it doesn't spring back at all, they've over-proofed.",
        ],
        timer: { label: "Second Rise", minutes: 28 },
      },
      {
        name: "Steam",
        ingredients: [],
        steps: [
          "Bring steamer water to a rolling boil, then reduce to medium heat (steady, gentle steam).",
          "Place bao in steamer with 3–4 cm gaps between each. Steam for 10–12 minutes.",
          "Turn off heat. DO NOT OPEN THE LID. Wait 5 full minutes.",
          "Crack the lid slightly, wait 1 more minute, then remove bao.",
          "Fridge any waiting bao between batches to prevent over-proofing.",
        ],
        timer: { label: "Steam", minutes: 12 },
      },
    ],
  },
  toppings: {
    title: "Assembly & Toppings",
    icon: "✨",
    color: "#2E8B57",
    groups: [
      {
        name: "Build Your Bao",
        ingredients: [
          "Sliced spring onion greens",
          "Fresh coriander (cilantro)",
          "Sliced red chilli",
          "Quick-pickled cucumber or carrot (optional)",
          "Chilli oil (optional)",
          "Toasted sesame seeds (optional)",
        ],
        steps: [
          "Open each steamed bao and load with a generous heap of glazed short rib.",
          "Top with spring onion, coriander, chilli, and any other toppings you like.",
          "Eat immediately — bao firm up as they cool!",
        ],
      },
    ],
  },
};

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

function Timer({ label, minutes }) {
  const [totalSeconds, setTotalSeconds] = useState(minutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && totalSeconds > 0) {
      intervalRef.current = setInterval(() => {
        setTotalSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            setIsFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, totalSeconds]);

  const reset = () => {
    clearInterval(intervalRef.current);
    setTotalSeconds(minutes * 60);
    setIsRunning(false);
    setIsFinished(false);
  };

  const progress = 1 - totalSeconds / (minutes * 60);
  const circumference = 2 * Math.PI * 28;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        background: isFinished
          ? "linear-gradient(135deg, #2d1a0e 0%, #4a1a0a 100%)"
          : "linear-gradient(135deg, #1a1512 0%, #2d1a0e 100%)",
        borderRadius: "14px",
        padding: "14px 18px",
        border: isFinished
          ? "1px solid rgba(255,100,50,0.5)"
          : "1px solid rgba(255,200,140,0.1)",
        marginTop: "10px",
        animation: isFinished ? "pulse 1s ease-in-out infinite" : "none",
      }}
    >
      <div style={{ position: "relative", width: 64, height: 64, flexShrink: 0 }}>
        <svg width="64" height="64" viewBox="0 0 64 64">
          <circle
            cx="32" cy="32" r="28"
            fill="none"
            stroke="rgba(255,200,140,0.1)"
            strokeWidth="4"
          />
          <circle
            cx="32" cy="32" r="28"
            fill="none"
            stroke={isFinished ? "#ff6432" : "#e8a848"}
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
            strokeLinecap="round"
            transform="rotate(-90 32 32)"
            style={{ transition: "stroke-dashoffset 0.5s ease" }}
          />
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
            fontSize: "14px",
            fontWeight: 600,
            color: isFinished ? "#ff6432" : "#f0d9b5",
            letterSpacing: "-0.5px",
          }}
        >
          {formatTime(totalSeconds)}
        </div>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            color: "rgba(255,200,140,0.5)",
            marginBottom: "6px",
            fontWeight: 600,
          }}
        >
          {isFinished ? "⏰ Time's up!" : label}
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          {!isFinished ? (
            <button
              onClick={() => setIsRunning(!isRunning)}
              style={{
                background: isRunning
                  ? "rgba(255,200,140,0.15)"
                  : "linear-gradient(135deg, #e8a848 0%, #d4903c 100%)",
                color: isRunning ? "#e8a848" : "#1a1512",
                border: "none",
                borderRadius: "8px",
                padding: "8px 20px",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.3px",
              }}
            >
              {isRunning ? "Pause" : totalSeconds < minutes * 60 ? "Resume" : "Start"}
            </button>
          ) : null}
          <button
            onClick={reset}
            style={{
              background: "rgba(255,200,140,0.08)",
              color: "rgba(255,200,140,0.6)",
              border: "1px solid rgba(255,200,140,0.15)",
              borderRadius: "8px",
              padding: "8px 16px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

function CheckItem({ text, checked, onChange, type }) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        padding: "10px 14px",
        borderRadius: "10px",
        cursor: "pointer",
        background: checked ? "rgba(255,200,140,0.04)" : "transparent",
        transition: "all 0.2s ease",
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: type === "ingredient" ? "6px" : "50%",
          border: checked
            ? "2px solid #e8a848"
            : "2px solid rgba(255,200,140,0.25)",
          background: checked
            ? "linear-gradient(135deg, #e8a848 0%, #d4903c 100%)"
            : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          marginTop: "1px",
          transition: "all 0.2s ease",
        }}
      >
        {checked && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 6L5 8.5L9.5 3.5"
              stroke="#1a1512"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{ display: "none" }}
      />
      <span
        style={{
          fontSize: "14.5px",
          lineHeight: "1.5",
          color: checked ? "rgba(255,200,140,0.35)" : "#f0d9b5",
          textDecoration: checked ? "line-through" : "none",
          transition: "all 0.2s ease",
          fontWeight: type === "step" ? 400 : 500,
        }}
      >
        {type === "step" && !checked && (
          <span style={{ color: "#e8a848", marginRight: "4px" }}>→</span>
        )}
        {text}
      </span>
    </label>
  );
}

function RecipeSection({ sectionKey, data, checkedState, onToggle }) {
  const [expanded, setExpanded] = useState(sectionKey === "shortRibs");

  const totalItems = data.groups.reduce(
    (acc, g) => acc + g.ingredients.length + g.steps.length,
    0
  );
  const checkedItems = Object.values(checkedState).filter(Boolean).length;
  const progress = totalItems > 0 ? checkedItems / totalItems : 0;

  return (
    <div
      style={{
        background: "linear-gradient(165deg, rgba(255,200,140,0.06) 0%, rgba(255,200,140,0.02) 100%)",
        borderRadius: "18px",
        border: "1px solid rgba(255,200,140,0.1)",
        overflow: "hidden",
        marginBottom: "16px",
      }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          padding: "20px 22px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <span style={{ fontSize: "28px" }}>{data.icon}</span>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#f0d9b5",
              letterSpacing: "-0.3px",
            }}
          >
            {data.title}
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "rgba(255,200,140,0.4)",
              marginTop: "4px",
              fontWeight: 500,
            }}
          >
            {checkedItems} / {totalItems} done
          </div>
        </div>
        <div style={{ position: "relative", width: 40, height: 40 }}>
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle
              cx="20" cy="20" r="17"
              fill="none"
              stroke="rgba(255,200,140,0.1)"
              strokeWidth="3"
            />
            <circle
              cx="20" cy="20" r="17"
              fill="none"
              stroke={data.color}
              strokeWidth="3"
              strokeDasharray={2 * Math.PI * 17}
              strokeDashoffset={2 * Math.PI * 17 * (1 - progress)}
              strokeLinecap="round"
              transform="rotate(-90 20 20)"
              style={{ transition: "stroke-dashoffset 0.4s ease" }}
            />
          </svg>
          {progress >= 1 && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
              }}
            >
              ✓
            </div>
          )}
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{
            transform: expanded ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 0.25s ease",
            flexShrink: 0,
          }}
        >
          <path
            d="M5 8L10 13L15 8"
            stroke="rgba(255,200,140,0.4)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {expanded && (
        <div style={{ padding: "0 22px 22px" }}>
          {data.groups.map((group, gi) => (
            <div key={gi} style={{ marginBottom: gi < data.groups.length - 1 ? "24px" : 0 }}>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1.8px",
                  color: data.color,
                  marginBottom: "12px",
                  paddingBottom: "8px",
                  borderBottom: `1px solid ${data.color}33`,
                }}
              >
                {group.name}
              </div>

              {group.ingredients.length > 0 && (
                <div style={{ marginBottom: "14px" }}>
                  <div
                    style={{
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      color: "rgba(255,200,140,0.3)",
                      marginBottom: "6px",
                      fontWeight: 600,
                      paddingLeft: "14px",
                    }}
                  >
                    Ingredients
                  </div>
                  {group.ingredients.map((ing, ii) => {
                    const key = `${sectionKey}-${gi}-ing-${ii}`;
                    return (
                      <CheckItem
                        key={key}
                        text={ing}
                        checked={!!checkedState[key]}
                        onChange={() => onToggle(key)}
                        type="ingredient"
                      />
                    );
                  })}
                </div>
              )}

              <div>
                <div
                  style={{
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    color: "rgba(255,200,140,0.3)",
                    marginBottom: "6px",
                    fontWeight: 600,
                    paddingLeft: "14px",
                  }}
                >
                  Steps
                </div>
                {group.steps.map((step, si) => {
                  const key = `${sectionKey}-${gi}-step-${si}`;
                  return (
                    <CheckItem
                      key={key}
                      text={step}
                      checked={!!checkedState[key]}
                      onChange={() => onToggle(key)}
                      type="step"
                    />
                  );
                })}
              </div>

              {group.timer && <Timer label={group.timer.label} minutes={group.timer.minutes} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CookingApp() {
  const [checkedState, setCheckedState] = useState({});
  const [activeTab, setActiveTab] = useState("cook");

  const onToggle = (key) => {
    setCheckedState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const totalAll = Object.values(RECIPE_DATA).reduce(
    (acc, section) =>
      acc +
      section.groups.reduce(
        (a, g) => a + g.ingredients.length + g.steps.length,
        0
      ),
    0
  );
  const checkedAll = Object.values(checkedState).filter(Boolean).length;

  const timeline = [
    { time: "T+0:00", task: "Season & sear ribs. Start the braise.", color: "#8B2500" },
    { time: "T+2:00", task: "Start bao dough. Mix, knead, first rise.", color: "#B8860B" },
    { time: "T+3:00", task: "Shape bao. Second rise (30 min).", color: "#B8860B" },
    { time: "T+3:15", task: "Pull ribs, shred, make glaze.", color: "#8B2500" },
    { time: "T+3:30", task: "Steam bao in batches. Toss meat in glaze.", color: "#B8860B" },
    { time: "T+3:45", task: "Assemble & eat! 🎉", color: "#2E8B57" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0f0c09 0%, #1a1512 8%, #1a1512 100%)",
        color: "#f0d9b5",
        fontFamily:
          "'Newsreader', 'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600;6..72,700&display=swap');
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        * { box-sizing: border-box; -webkit-font-smoothing: antialiased; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,200,140,0.15); border-radius: 4px; }
      `}</style>

      {/* Header */}
      <div
        style={{
          padding: "32px 22px 20px",
          textAlign: "center",
          borderBottom: "1px solid rgba(255,200,140,0.08)",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "rgba(255,200,140,0.35)",
            marginBottom: "10px",
            fontWeight: 600,
          }}
        >
          Recreating
        </div>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 700,
            margin: 0,
            letterSpacing: "-0.5px",
            lineHeight: 1.2,
            color: "#f0d9b5",
          }}
        >
          Yu's Beef Short Rib
          <br />
          Bao Buns
        </h1>
        <div
          style={{
            fontSize: "13px",
            color: "rgba(255,200,140,0.4)",
            marginTop: "10px",
            fontStyle: "italic",
          }}
        >
          Chilli · Garlic · Oyster Sauce — serves 3
        </div>
        <div
          style={{
            marginTop: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              height: "4px",
              width: "160px",
              background: "rgba(255,200,140,0.1)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${(checkedAll / totalAll) * 100}%`,
                background: "linear-gradient(90deg, #e8a848, #d4903c)",
                borderRadius: "2px",
                transition: "width 0.4s ease",
              }}
            />
          </div>
          <span
            style={{
              fontSize: "12px",
              color: "rgba(255,200,140,0.4)",
              fontWeight: 600,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {Math.round((checkedAll / totalAll) * 100)}%
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          padding: "16px 22px 0",
          gap: "6px",
        }}
      >
        {[
          { id: "cook", label: "Cook" },
          { id: "timeline", label: "Timeline" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: "10px",
              background:
                activeTab === tab.id
                  ? "rgba(255,200,140,0.1)"
                  : "transparent",
              border:
                activeTab === tab.id
                  ? "1px solid rgba(255,200,140,0.2)"
                  : "1px solid rgba(255,200,140,0.06)",
              borderRadius: "10px",
              color:
                activeTab === tab.id
                  ? "#f0d9b5"
                  : "rgba(255,200,140,0.35)",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "0.5px",
              fontFamily: "inherit",
              transition: "all 0.2s ease",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "20px 16px 100px" }}>
        {activeTab === "cook" && (
          <>
            {Object.entries(RECIPE_DATA).map(([key, data]) => {
              const sectionChecked = {};
              Object.entries(checkedState).forEach(([k, v]) => {
                if (k.startsWith(key)) sectionChecked[k] = v;
              });
              return (
                <RecipeSection
                  key={key}
                  sectionKey={key}
                  data={data}
                  checkedState={sectionChecked}
                  onToggle={onToggle}
                />
              );
            })}
          </>
        )}

        {activeTab === "timeline" && (
          <div
            style={{
              background: "rgba(255,200,140,0.04)",
              borderRadius: "18px",
              border: "1px solid rgba(255,200,140,0.1)",
              padding: "24px",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.8px",
                color: "rgba(255,200,140,0.5)",
                marginBottom: "22px",
              }}
            >
              Cooking Timeline
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "rgba(255,200,140,0.35)",
                marginBottom: "24px",
                fontStyle: "italic",
                lineHeight: 1.5,
              }}
            >
              Start both components so they're ready together.
              Total cook time: ~3 hrs 45 min.
            </div>
            {timeline.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                  marginBottom: i < timeline.length - 1 ? "20px" : 0,
                  position: "relative",
                }}
              >
                {i < timeline.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      left: "33px",
                      top: "28px",
                      bottom: "-14px",
                      width: "2px",
                      background:
                        "linear-gradient(180deg, rgba(255,200,140,0.15) 0%, transparent 100%)",
                    }}
                  />
                )}
                <div
                  style={{
                    fontFamily:
                      "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
                    fontSize: "12px",
                    color: "rgba(255,200,140,0.4)",
                    width: "52px",
                    flexShrink: 0,
                    paddingTop: "4px",
                    fontWeight: 500,
                  }}
                >
                  {item.time}
                </div>
                <div
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    background: item.color,
                    flexShrink: 0,
                    marginTop: "4px",
                    boxShadow: `0 0 8px ${item.color}44`,
                  }}
                />
                <div
                  style={{
                    fontSize: "14.5px",
                    lineHeight: 1.5,
                    color: "#f0d9b5",
                    paddingTop: "1px",
                  }}
                >
                  {item.task}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Reset FAB */}
      {checkedAll > 0 && (
        <button
          onClick={() => setCheckedState({})}
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            background: "linear-gradient(135deg, #2d1a0e 0%, #1a1512 100%)",
            border: "1px solid rgba(255,200,140,0.2)",
            borderRadius: "14px",
            padding: "12px 18px",
            color: "rgba(255,200,140,0.6)",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "inherit",
            letterSpacing: "0.5px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          }}
        >
          Reset All
        </button>
      )}
    </div>
  );
}
