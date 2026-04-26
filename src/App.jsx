import { useState } from "react";

// Madplan uge 18 · 2026 · 27. april – 3. maj
// Opdateret af MasterKOK 👨‍🍳 søndag 26. april 2026
// Baseret på Bilka-tilbud og familiens præferencer

const madplan = [
  {
    day: "Mandag",
    dato: "27. april",
    emoji: "🍝",
    meal: "Pasta Bolognese med hakket oksekød",
    color: "#fff3e0",
    accent: "#e65100",
    fryserNote: "⚽ FCK vs Vejle kl. 19–21 — hurtig ret!",
    naering: {
      hel: { kcal: 3200, protein: 240, kulhy: 320, fedt: 110 },
      portion: { kcal: 800, protein: 60, kulhy: 80, fedt: 28 },
    },
    recipe: {
      tid: "45 min",
      svaerhed: "Let",
      intro: "Klassisk bolognese med hakket oksekød. En ret hele familien elsker, og resterne er endnu bedre næste dag. Perfekt til fodboldkamp! 🍝",
      trin: [
        "Svits finthakket løg i olivenolie 3-4 min til blødt.",
        "Tilsæt hakket oksekød og brun det ved høj varme.",
        "Tilsæt tomatpuré, rør rundt og svits 2 min.",
        "Hæld dåsetomater ved. Krydr med oregano, basilikum, salt og peber.",
        "Lad simre 25-30 min til sovsen er tyk.",
        "Kog pasta efter pakkehenvisning. Server straks! 🍝",
      ],
    },
    ingredients: [
      { name: "Hakket oksekød", qty: "500g", url: "https://www.bilkatogo.dk/s?query=hakket+oksekoed" },
      { name: "Pasta", qty: "500g", url: "https://www.bilkatogo.dk/s?query=pasta" },
      { name: "Dåsetomater", qty: "2 dåser", url: "https://www.bilkatogo.dk/s?query=daaosetomater" },
      { name: "Tomatpuré", qty: "3 spsk", url: "https://www.bilkatogo.dk/s?query=tomatpure" },
      { name: "Løg", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Hvidløg", qty: "2 fed", url: "https://www.bilkatogo.dk/s?query=hvidloeg" },
    ],
  },
  {
    day: "Tirsdag",
    dato: "28. april",
    emoji: "♻️",
    meal: "Rester: Bolognese fra mandag 🍝",
    color: "#f3f3f3",
    accent: "#888888",
    naering: {
      hel: { kcal: 3200, protein: 240, kulhy: 320, fedt: 110 },
      portion: { kcal: 800, protein: 60, kulhy: 80, fedt: 28 },
    },
    recipe: {
      tid: "10 min",
      svaerhed: "Let",
      intro: "Resterdag! Bolognese smager bedre næste dag. Kog frisk pasta og varm sovsen op. ♻️",
      trin: [
        "Tag bolognesen ud af køleskabet.",
        "Varm den op i gryde ved lav varme.",
        "Kog frisk pasta.",
        "Server med sovsen. Lækkert!",
      ],
    },
    ingredients: [
      { name: "Bolognese (rester fra mandag)", qty: "4 portioner 🔄", url: "https://www.bilkatogo.dk/s?query=pasta" },
      { name: "Pasta (frisk portion)", qty: "300g", url: "https://www.bilkatogo.dk/s?query=pasta" },
    ],
  },
  {
    day: "Onsdag",
    dato: "29. april",
    emoji: "🍗",
    meal: "Kyllingefilet i fad med grøntsager og hvidløg + ris",
    color: "#fdf2e9",
    accent: "#d17a2f",
    naering: {
      hel: { kcal: 2800, protein: 220, kulhy: 240, fedt: 95 },
      portion: { kcal: 700, protein: 55, kulhy: 60, fedt: 24 },
    },
    recipe: {
      tid: "40 min",
      svaerhed: "Let",
      intro: "Nem hverdagsret — kyllingefilet steget i ovn med grøntsager og hvidløg. Server med ris. 🍗",
      trin: [
        "Forvarm ovnen til 200°C.",
        "Skær kyllingefileter i stykker. Hak hvidløg.",
        "Læg fileter i ildfast fad med snittede grøntsager (løg, paprika, squash).",
        "Drysle med olivenolie, salt, peber og hvidløg.",
        "Bag i ovnen 25-30 min til kyllingen er igennem.",
        "Kog ris efter pakkehenvisning. Server! 🍗",
      ],
    },
    ingredients: [
      { name: "Kyllingefilet", qty: "600g", url: "https://www.bilkatogo.dk/s?query=kyllingefilet" },
      { name: "Ris", qty: "300g", url: "https://www.bilkatogo.dk/s?query=ris" },
      { name: "Løg", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Paprika", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=paprika" },
      { name: "Hvidløg", qty: "4 fed", url: "https://www.bilkatogo.dk/s?query=hvidloeg" },
      { name: "Olivenolie", qty: "3 spsk", url: "https://www.bilkatogo.dk/s?query=olivenolie" },
    ],
  },
  {
    day: "Torsdag",
    dato: "30. april",
    emoji: "🐷",
    meal: "Flæskesteg med rødkål og kogte kartofler",
    color: "#f5e6d3",
    accent: "#a0522d",
    naering: {
      hel: { kcal: 3200, protein: 260, kulhy: 200, fedt: 140 },
      portion: { kcal: 800, protein: 65, kulhy: 50, fedt: 35 },
    },
    recipe: {
      tid: "60 min",
      svaerhed: "Middel",
      intro: "Klassisk dansk ret — flæskesteg med sprød svær og mørt kød. Serveres med rødkål og kartofler. 🐷",
      trin: [
        "Forvarm ovnen til 200°C.",
        "Skrab svælen på flæskestegen for at få den sprød.",
        "Læg stegen på et stykke bagepapir i en braissepande.",
        "Giv den en tørring med salt og peber.",
        "Bag 45-50 min til kernetemperatur 65-68°C.",
        "Kog kartofler og tilbered rødkål.",
        "Server stegen skåret i bide-store stykker. Klassiker! 🐷",
      ],
    },
    ingredients: [
      { name: "Flæskesteg", qty: "~1,2 kg", url: "https://www.bilkatogo.dk/s?query=flaskesteg" },
      { name: "Kartofler", qty: "1,5 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Rødkål (evt. dåse)", qty: "1 pakke/dåse", url: "https://www.bilkatogo.dk/s?query=rodkål" },
      { name: "Smør", qty: "50g", url: "https://www.bilkatogo.dk/s?query=smor" },
    ],
  },
  {
    day: "Fredag",
    dato: "1. maj",
    emoji: "🐟",
    meal: "Fiskefilet (torsk/laks) med citronsmør, asparges og kartoffelmos",
    color: "#e8f4f8",
    accent: "#2980b9",
    naering: {
      hel: { kcal: 2700, protein: 240, kulhy: 150, fedt: 95 },
      portion: { kcal: 675, protein: 60, kulhy: 38, fedt: 24 },
    },
    recipe: {
      tid: "30 min",
      svaerhed: "Let",
      intro: "Fredag = fiskefredag! Delikat fiskefilet med citronsmør, friske asparges og kartoffelmos. Klasserent og deiligt! 🐟",
      trin: [
        "Kog kartofler og lav kartoffelmos med smør og mælk.",
        "Prep asparges — skær nogle cm fra enden.",
        "Koge asparges i saltet vand 5-7 min til al dente.",
        "Varm en pande med smør til medium-høj varme.",
        "Steg fiskefileterne 3-4 min per side til hvide og møre.",
        "Tilsæt frisk citron og lidt smør til pan.",
        "Server med kartoffelmos og asparges. Delikat! 🐟",
      ],
    },
    ingredients: [
      { name: "Fiskefilet (torsk eller laks)", qty: "600g", url: "https://www.bilkatogo.dk/s?query=fiskefilet" },
      { name: "Kartofler", qty: "1,2 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Asparges (friske)", qty: "500g", url: "https://www.bilkatogo.dk/s?query=asparges" },
      { name: "Smør", qty: "100g", url: "https://www.bilkatogo.dk/s?query=smor" },
      { name: "Citron", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=citron" },
      { name: "Mælk", qty: "1 dl", url: "https://www.bilkatogo.dk/s?query=maelk" },
    ],
  },
  {
    day: "Lørdag",
    dato: "2. maj",
    emoji: "🍔",
    meal: "Hjemmelavede burgers med kartofler — weekend hygge!",
    color: "#fdf2e9",
    accent: "#c0392b",
    naering: {
      hel: { kcal: 3100, protein: 240, kulhy: 240, fedt: 130 },
      portion: { kcal: 775, protein: 60, kulhy: 60, fedt: 33 },
    },
    recipe: {
      tid: "40 min",
      svaerhed: "Let",
      intro: "Weekend hygge! Juicy hjemmelavede burgere med hakket oksekød. Server med kartofler og dressinger hele familien kan holde af. 🍔",
      trin: [
        "Form hakket oksekød til burgere (ca. 100g hver). Salt og peber godt.",
        "Varm pande med smør — steg burgerne 3-4 min per side.",
        "Kog kartofler i rigelig saltet vand 15-18 min.",
        "Skær boller på midje og evt. rist dem i panden.",
        "Saml burgerne: bulle + mayo + burger + salat + tomat + dressing.",
        "Server med kartofler. Weekend perfekt! 🍔",
      ],
    },
    ingredients: [
      { name: "Hakket oksekød", qty: "600g", url: "https://www.bilkatogo.dk/s?query=hakket+oksekoed" },
      { name: "Hamburgerboller", qty: "4 stk", url: "https://www.bilkatogo.dk/s?query=hamburgerboller" },
      { name: "Kartofler", qty: "1 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Salat (iseberg)", qty: "1 hoved", url: "https://www.bilkatogo.dk/s?query=salat" },
      { name: "Tomat", qty: "2 stk", url: "https://www.bilkatogo.dk/s?query=tomat" },
      { name: "Ost (cheddar evt.)", qty: "4 skiver (valgfrit)", url: "https://www.bilkatogo.dk/s?query=cheddar" },
      { name: "Mayo/dressing", qty: "til smørring", url: "https://www.bilkatogo.dk/s?query=mayo" },
    ],
  },
  {
    day: "Søndag",
    dato: "3. maj",
    emoji: "🥩",
    meal: "Langtidsstegt nakkefilet med grøntsagssovs og kartoffelmos",
    color: "#f5e6d3",
    accent: "#8b4513",
    naering: {
      hel: { kcal: 3300, protein: 280, kulhy: 180, fedt: 140 },
      portion: { kcal: 825, protein: 70, kulhy: 45, fedt: 35 },
    },
    recipe: {
      tid: "120 min",
      svaerhed: "Middel",
      intro: "Sofadag-klassiker! Langtidsstegt nakkefilet bliver mørt og saft. ⚽ Man United vs Liverpool + lokalkamp — perfekt til lidt fodbold-hygge! 🥩",
      trin: [
        "Forvarm ovnen til 160°C (low and slow!).",
        "Tørr nakkefileten og krydr godt med salt, peber og paprika.",
        "Brun den kort i pande med olivenolie på alle sider.",
        "Tilsæt feinforstokket løg, gulerødder, hvidløg.",
        "Hæld rødvin og fond ved. Tilsæt tomatpuré.",
        "Læg låg på og bag 90-100 min til mør og mørhørende.",
        "Si sovsen og tilsæt evt. fløde.",
        "Server med kartoffelmos. Fantastisk sofakval! 🥩⚽",
      ],
    },
    ingredients: [
      { name: "Nakkefilet", qty: "~1,2 kg", url: "https://www.bilkatogo.dk/s?query=nakkefilet" },
      { name: "Kartofler", qty: "1,5 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Løg", qty: "2 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Gulerødder", qty: "3 stk", url: "https://www.bilkatogo.dk/s?query=gulerodder" },
      { name: "Hvidløg", qty: "4 fed", url: "https://www.bilkatogo.dk/s?query=hvidloeg" },
      { name: "Rødvin", qty: "2 dl", url: "https://www.bilkatogo.dk/s?query=rodvin" },
      { name: "Kvægfond", qty: "2 dl", url: "https://www.bilkatogo.dk/s?query=fond" },
      { name: "Tomatpuré", qty: "1 spsk", url: "https://www.bilkatogo.dk/s?query=tomatpure" },
    ],
  },
];

function NaeringBar({ label, value, max, color }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 3 }}>
        <span style={{ color: "#666" }}>{label}</span>
        <span style={{ fontWeight: "bold", color }}>{value}g</span>
      </div>
      <div style={{ height: 6, background: "#f0f0f0", borderRadius: 3, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 3, transition: "width 0.6s ease" }} />
      </div>
    </div>
  );
}

function NaeringKort({ naering, accent, vis }) {
  const n = naering[vis];
  return (
    <div style={{ background: "#fafafa", borderRadius: 12, padding: "16px", border: "1px solid #eee", marginTop: 16 }}>
      <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#aaa", marginBottom: 12 }}>
        Naeringsindhold — {vis === "portion" ? "per portion" : "hele retten"}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 16 }}>
        <span style={{ fontSize: 36, fontWeight: "bold", color: accent }}>{n.kcal}</span>
        <span style={{ fontSize: 14, color: "#888" }}>kcal</span>
        {vis === "portion" && <span style={{ fontSize: 12, color: "#bbb", marginLeft: 4 }}>/ person</span>}
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
        {[
          { label: "Protein", value: n.protein, color: "#e74c3c" },
          { label: "Kulhydrat", value: n.kulhy, color: "#3498db" },
          { label: "Fedt", value: n.fedt, color: "#f39c12" },
        ].map(m => (
          <div key={m.label} style={{ flex: "1 1 80px", background: "white", border: `2px solid ${m.color}20`, borderRadius: 10, padding: "10px 12px", textAlign: "center" }}>
            <div style={{ fontSize: 20, fontWeight: "bold", color: m.color }}>{m.value}g</div>
            <div style={{ fontSize: 11, color: "#999", marginTop: 2 }}>{m.label}</div>
          </div>
        ))}
      </div>
      <NaeringBar label="Protein" value={n.protein} max={vis === "portion" ? 70 : 280} color="#e74c3c" />
      <NaeringBar label="Kulhydrat" value={n.kulhy} max={vis === "portion" ? 100 : 400} color="#3498db" />
      <NaeringBar label="Fedt" value={n.fedt} max={vis === "portion" ? 80 : 320} color="#f39c12" />
      <div style={{ fontSize: 10, color: "#ccc", marginTop: 10 }}>* Estimerede vaerdier baseret paa ingrediensernes standardnaeringsindhold</div>
    </div>
  );
}

export default function App() {
  const [checked, setChecked] = useState({});
  const [activeDay, setActiveDay] = useState(0);
  const [view, setView] = useState("plan");
  const [naeringVis, setNaeringVis] = useState("portion");

  const toggleIngredient = (dayIdx, ingIdx) => {
    const key = `${dayIdx}-${ingIdx}`;
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const totalItems = madplan.flatMap((d, di) => d.ingredients.map((_, ii) => `${di}-${ii}`)).length;
  const checkedItems = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((checkedItems / totalItems) * 100);

  const tabs = [
    { key: "plan", label: "Madplan" },
    { key: "recipe", label: "Opskrift" },
    { key: "naering", label: "Naering" },
    { key: "list", label: "Indkob" },
  ];

  return (
    <div style={{ fontFamily: "'Georgia', serif", minHeight: "100vh", background: "#faf8f5", color: "#2c2c2c" }}>
      <div style={{ background: "#1a3a2a", color: "white", padding: "16px 20px 0", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 12px rgba(0,0,0,0.2)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", opacity: 0.5 }}>Uge 18 · 2026</div>
            <div style={{ fontSize: 18, fontWeight: "bold" }}>Bruslund Madplan — 27. apr–3. maj</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 10, opacity: 0.5, marginBottom: 3 }}>Indkobsfremgang</div>
            <div style={{ fontSize: 16, fontWeight: "bold" }}>{checkedItems}/{totalItems}</div>
            <div style={{ width: 100, height: 5, background: "rgba(255,255,255,0.15)", borderRadius: 3, marginTop: 3, overflow: "hidden" }}>
              <div style={{ width: `${progress}%`, height: "100%", background: "#5dbf6e", borderRadius: 3, transition: "width 0.4s ease" }} />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", overflowX: "auto", scrollbarWidth: "none" }}>
          {tabs.map(t => (
            <button key={t.key} onClick={() => setView(t.key)} style={{
              flex: "0 0 auto", background: view === t.key ? "#faf8f5" : "transparent",
              color: view === t.key ? "#1a3a2a" : "rgba(255,255,255,0.65)",
              border: "none", cursor: "pointer", padding: "9px 14px", fontSize: 12,
              fontWeight: view === t.key ? "bold" : "normal", borderRadius: "8px 8px 0 0",
              fontFamily: "inherit", transition: "all 0.2s", whiteSpace: "nowrap",
            }}>{t.label}</button>
          ))}
        </div>
      </div>

      <div style={{ padding: "20px 16px", maxWidth: 680, margin: "0 auto" }}>

        {(view === "plan" || view === "recipe" || view === "naering") && (
          <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 8, marginBottom: 20, scrollbarWidth: "none" }}>
            {madplan.map((d, i) => {
              const dayChecked = d.ingredients.filter((_, ii) => checked[`${i}-${ii}`]).length;
              const done = dayChecked === d.ingredients.length;
              return (
                <button key={i} onClick={() => setActiveDay(i)} style={{
                  flex: "0 0 auto", background: activeDay === i ? d.accent : "white",
                  color: activeDay === i ? "white" : "#555",
                  border: `2px solid ${activeDay === i ? d.accent : "#e8e8e8"}`,
                  borderRadius: 12, padding: "7px 12px", cursor: "pointer", fontSize: 12,
                  fontFamily: "inherit", fontWeight: activeDay === i ? "bold" : "normal",
                  transition: "all 0.2s", position: "relative",
                }}>
                  {done && <span style={{ position: "absolute", top: -6, right: -6, fontSize: 13 }}>✅</span>}
                  {d.fryserNote && !done && <span style={{ position: "absolute", top: -6, right: -6, fontSize: 11 }}>🧊</span>}
                  <div style={{ fontSize: 20 }}>{d.emoji}</div>
                  <div>{d.day}</div>
                  <div style={{ fontSize: 10, opacity: 0.75 }}>{dayChecked}/{d.ingredients.length}</div>
                </button>
              );
            })}
          </div>
        )}

        {view === "plan" && (() => {
          const d = madplan[activeDay];
          return (
            <div style={{ background: "white", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: `3px solid ${d.accent}` }}>
              <div style={{ background: d.accent, color: "white", padding: "16px 20px" }}>
                <div style={{ fontSize: 32 }}>{d.emoji}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4, flexWrap: "wrap" }}>
                  <div style={{ fontSize: 20, fontWeight: "bold" }}>{d.day}</div>
                  <div style={{ fontSize: 13, opacity: 0.8 }}>{d.dato}</div>
                  {d.fryserNote && <span style={{ fontSize: 11, background: "rgba(255,255,255,0.25)", padding: "2px 8px", borderRadius: 20 }}>{d.fryserNote}</span>}
                </div>
                <div style={{ fontSize: 14, opacity: 0.9, fontStyle: "italic", marginTop: 4 }}>{d.meal}</div>
                <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 11, background: "rgba(255,255,255,0.2)", padding: "3px 10px", borderRadius: 20 }}>Tid: {d.recipe.tid}</span>
                  <span style={{ fontSize: 11, background: "rgba(255,255,255,0.2)", padding: "3px 10px", borderRadius: 20 }}>{d.naering.portion.kcal} kcal/pers.</span>
                </div>
              </div>
              <div style={{ padding: "16px 20px" }}>
                <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#aaa", marginBottom: 10 }}>Ingredienser</div>
                {d.ingredients.map((ing, ii) => {
                  const key = `${activeDay}-${ii}`;
                  const isChecked = checked[key];
                  return (
                    <div key={ii} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: ii < d.ingredients.length - 1 ? "1px solid #f5f5f5" : "none", opacity: isChecked ? 0.4 : 1, transition: "opacity 0.2s" }}>
                      <button onClick={() => toggleIngredient(activeDay, ii)} style={{ width: 22, height: 22, borderRadius: "50%", border: `2px solid ${isChecked ? d.accent : "#ddd"}`, background: isChecked ? d.accent : "white", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 13, transition: "all 0.2s" }}>{isChecked ? "✓" : ""}</button>
                      <a href={ing.url} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textDecoration: "none", color: "#2c2c2c", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: 14, fontWeight: 500, textDecoration: isChecked ? "line-through" : "none", color: isChecked ? "#aaa" : "#2c2c2c" }}>{ing.name}</span>
                        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ fontSize: 11, color: "#999", background: "#f5f5f5", padding: "2px 8px", borderRadius: 8 }}>{ing.qty}</span>
                          <span style={{ color: d.accent }}>→</span>
                        </span>
                      </a>
                    </div>
                  );
                })}
                <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <button onClick={() => setView("recipe")} style={{ background: d.accent, color: "white", border: "none", padding: "10px 16px", borderRadius: 10, cursor: "pointer", fontSize: 13, fontFamily: "inherit", fontWeight: "bold" }}>Opskrift</button>
                  <button onClick={() => setView("naering")} style={{ background: d.color, color: d.accent, border: `2px solid ${d.accent}`, padding: "10px 16px", borderRadius: 10, cursor: "pointer", fontSize: 13, fontFamily: "inherit", fontWeight: "bold" }}>Naering</button>
                  <a href="https://www.bilkatogo.dk/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#1a3a2a", color: "white", padding: "10px 16px", borderRadius: 10, textDecoration: "none", fontSize: 13, fontFamily: "inherit", fontWeight: "bold" }}>BilkaToGo</a>
                  <button onClick={() => d.ingredients.forEach((_, ii) => setChecked(prev => ({ ...prev, [`${activeDay}-${ii}`]: true })))} style={{ background: "#f5f5f5", border: "none", padding: "10px 16px", borderRadius: 10, cursor: "pointer", fontSize: 13, fontFamily: "inherit", color: "#555" }}>Marker alle</button>
                </div>
              </div>
            </div>
          );
        })()}

        {view === "recipe" && (() => {
          const d = madplan[activeDay];
          return (
            <div style={{ background: "white", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: `3px solid ${d.accent}` }}>
              <div style={{ background: d.accent, color: "white", padding: "20px" }}>
                <div style={{ fontSize: 36 }}>{d.emoji}</div>
                <div style={{ fontSize: 22, fontWeight: "bold", marginTop: 6 }}>{d.meal}</div>
                <div style={{ fontSize: 13, opacity: 0.8, marginTop: 2 }}>{d.dato}</div>
                <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 12, background: "rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: 20 }}>Tid: {d.recipe.tid}</span>
                  <span style={{ fontSize: 12, background: "rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: 20 }}>Niveau: {d.recipe.svaerhed}</span>
                  <span style={{ fontSize: 12, background: "rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: 20 }}>4 personer</span>
                </div>
              </div>
              <div style={{ padding: "20px" }}>
                <p style={{ fontSize: 15, fontStyle: "italic", color: "#555", marginBottom: 20, lineHeight: 1.6 }}>{d.recipe.intro}</p>
                <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#aaa", marginBottom: 14 }}>Fremgangsmaade</div>
                {d.recipe.trin.map((trin, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, marginBottom: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: d.accent, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: "bold", flexShrink: 0 }}>{i + 1}</div>
                    <div style={{ fontSize: 14, lineHeight: 1.6, paddingTop: 4 }}>{trin}</div>
                  </div>
                ))}
                <div style={{ marginTop: 20 }}>
                  <button onClick={() => setView("plan")} style={{ background: "#f5f5f5", border: "none", padding: "10px 16px", borderRadius: 10, cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>Tilbage</button>
                </div>
              </div>
            </div>
          );
        })()}

        {view === "naering" && (() => {
          const d = madplan[activeDay];
          return (
            <div style={{ background: "white", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: `3px solid ${d.accent}` }}>
              <div style={{ background: d.accent, color: "white", padding: "16px 20px" }}>
                <div style={{ fontSize: 28 }}>{d.emoji}</div>
                <div style={{ fontSize: 18, fontWeight: "bold", marginTop: 4 }}>{d.meal}</div>
              </div>
              <div style={{ padding: "16px 20px" }}>
                <div style={{ display: "flex", gap: 0, background: "#f0f0f0", borderRadius: 10, padding: 3, marginBottom: 16 }}>
                  {[{ key: "portion", label: "Per portion" }, { key: "hel", label: "Hele retten" }].map(v => (
                    <button key={v.key} onClick={() => setNaeringVis(v.key)} style={{ flex: 1, padding: "8px", border: "none", borderRadius: 8, background: naeringVis === v.key ? "white" : "transparent", fontWeight: naeringVis === v.key ? "bold" : "normal", fontSize: 13, cursor: "pointer", fontFamily: "inherit", color: naeringVis === v.key ? d.accent : "#888", transition: "all 0.2s" }}>{v.label}</button>
                  ))}
                </div>
                <NaeringKort naering={d.naering} accent={d.accent} vis={naeringVis} />
                <div style={{ marginTop: 24 }}>
                  <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#aaa", marginBottom: 12 }}>Ugens naering (per dag/pers.)</div>
                  {madplan.map((dag, i) => (
                    <div key={i} onClick={() => setActiveDay(i)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 10, cursor: "pointer", background: i === activeDay ? dag.color : "transparent", border: i === activeDay ? `2px solid ${dag.accent}` : "2px solid transparent", marginBottom: 6, transition: "all 0.2s" }}>
                      <span style={{ fontSize: 20 }}>{dag.emoji}</span>
                      <span style={{ fontSize: 13, flex: 1, fontWeight: i === activeDay ? "bold" : "normal" }}>{dag.day}</span>
                      <span style={{ fontSize: 13, fontWeight: "bold", color: dag.accent }}>{dag.naering.portion.kcal} kcal</span>
                      <span style={{ fontSize: 11, color: "#e74c3c" }}>{dag.naering.portion.protein}g P</span>
                      <span style={{ fontSize: 11, color: "#3498db" }}>{dag.naering.portion.kulhy}g K</span>
                      <span style={{ fontSize: 11, color: "#f39c12" }}>{dag.naering.portion.fedt}g F</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}

        {view === "list" && (
          <div>
            <div style={{ background: "#1a3a2a", color: "white", borderRadius: 12, padding: "14px 18px", marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: "bold", fontSize: 15 }}>Indkobsliste — uge 18</span>
              <span style={{ fontSize: 13, opacity: 0.7 }}>{checkedItems}/{totalItems} afkrydset</span>
            </div>
            {madplan.map((day, di) => (
              <div key={di} style={{ marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 18 }}>{day.emoji}</span>
                  <span style={{ fontSize: 13, fontWeight: "bold", color: day.accent }}>{day.day} — {day.meal.length > 45 ? day.meal.slice(0, 45) + "..." : day.meal}</span>
                  {day.fryserNote && <span style={{ fontSize: 11, background: "#e8f4ff", color: "#2980b9", padding: "2px 8px", borderRadius: 20 }}>🧊 Fryser</span>}
                </div>
                <div style={{ background: "white", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", borderLeft: `4px solid ${day.accent}` }}>
                  {day.ingredients.map((ing, ii) => {
                    const key = `${di}-${ii}`;
                    const isChecked = checked[key];
                    return (
                      <div key={ii} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 14px", borderBottom: ii < day.ingredients.length - 1 ? "1px solid #f8f8f8" : "none", opacity: isChecked ? 0.4 : 1, transition: "opacity 0.2s" }}>
                        <button onClick={() => toggleIngredient(di, ii)} style={{ width: 20, height: 20, borderRadius: "50%", border: `2px solid ${isChecked ? day.accent : "#ddd"}`, background: isChecked ? day.accent : "white", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 11, transition: "all 0.2s" }}>{isChecked ? "✓" : ""}</button>
                        <a href={ing.url} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textDecoration: "none", color: "#2c2c2c", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 14 }}>
                          <span style={{ textDecoration: isChecked ? "line-through" : "none", color: isChecked ? "#bbb" : "#2c2c2c" }}>{ing.name}</span>
                          <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
                            <span style={{ fontSize: 11, color: "#bbb" }}>{ing.qty}</span>
                            <span style={{ color: day.accent, fontSize: 13 }}>→</span>
                          </span>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            <div style={{ textAlign: "center", marginTop: 20, paddingBottom: 20 }}>
              <a href="https://www.bilkatogo.dk/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#1a3a2a", color: "white", padding: "14px 28px", borderRadius: 12, textDecoration: "none", fontSize: 15, fontWeight: "bold", fontFamily: "inherit" }}>Ga til BilkaToGo</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
