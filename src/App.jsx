import { useState } from "react";

// Madplan uge 27 · 2026 · 29.06–05.07.2026
// Opdateret af MasterKOK 👨‍🍳 søndag 28. juni 2026
// ⚠. ️

const madplan = [
  {
    day: "Mandag",
    dato: "29.06",
    emoji: "🍗",
    meal: "Kyllingelår i ovn med hvidløg og timian",
    sidedish: "Bådekartofler",
    note: "Rema-tilbud: 25 kr/kg. Simpel og lækker klassiker. ✓ Dag 1/3 kylling",
    color: "#f3e5f5",
    accent: "#7b1fa2",
    naering: {
      hel: { kcal: 2800, protein: 200, kulhy: 240, fedt: 90 },
      portion: { kcal: 700, protein: 50, kulhy: 60, fedt: 23 },
    },
    recipe: {
      tid: "30 min",
      svaerhed: "Let",
      intro: "Klassisk kyllingelår i ovn med hvidløg og timian til familien. Serveres med bådekartofler.",
      trin: [
        "Forbered kyllingelår i ovn med hvidløg og timian efter opskrift.",
        "Tilbered bådekartofler som tilbehør.",
        "Smag til med salt og peber.",
        "Server og nyd måltidet! 🍽️",
      ],
    },
    ingredients: [
      { name: "Dansk kyllingelår (~1 kg)", qty: "", url: "https://www.bilkatogo.dk/s?query=dansk+kyllingelår+(~1+kg)" },
      { name: "hvidløg", qty: "", url: "https://www.bilkatogo.dk/s?query=hvidløg" },
      { name: "timian", qty: "", url: "https://www.bilkatogo.dk/s?query=timian" },
      { name: "olie", qty: "", url: "https://www.bilkatogo.dk/s?query=olie" },
      { name: "salt", qty: "", url: "https://www.bilkatogo.dk/s?query=salt" },
      { name: "peber", qty: "", url: "https://www.bilkatogo.dk/s?query=peber" },
    ],
  },
  {
    day: "Tirsdag",
    dato: "30.06",
    emoji: "🍗",
    meal: "Kyllingerester fra mandag",
    sidedish: "Ris + salat",
    note: "Restedag — pull kyllingen fra knoglerne, kunne være i en let karry eller simpelt med ris. ✓ Dag 2/3 kylling",
    color: "#f3e5f5",
    accent: "#7b1fa2",
    naering: {
      hel: { kcal: 2800, protein: 200, kulhy: 240, fedt: 90 },
      portion: { kcal: 700, protein: 50, kulhy: 60, fedt: 23 },
    },
    recipe: {
      tid: "30 min",
      svaerhed: "Let",
      intro: "Klassisk kyllingerester fra mandag til familien. Serveres med ris + salat.",
      trin: [
        "Forbered kyllingerester fra mandag efter opskrift.",
        "Tilbered ris + salat som tilbehør.",
        "Smag til med salt og peber.",
        "Server og nyd måltidet! 🍽️",
      ],
    },
    ingredients: [
      { name: "Rester fra kylling", qty: "", url: "https://www.bilkatogo.dk/s?query=rester+fra+kylling" },
      { name: "jasminris", qty: "", url: "https://www.bilkatogo.dk/s?query=jasminris" },
      { name: "frisk salat (fx fennikelrødbede eller grøn salat)", qty: "", url: "https://www.bilkatogo.dk/s?query=frisk+salat+(fx+fennikelrødbede+eller+grøn+salat)" },
    ],
  },
  {
    day: "Onsdag",
    dato: "01.07",
    emoji: "🍲",
    meal: "Frikadeller af hakket grisekød",
    sidedish: "Kogte kartofler + persillesovs",
    note: "Rema-tilbud: 24 kr. Hurtig ret — perfekt på dagen med rejseplanlægning (vignet-bestilling kl. 15–17). ✓ Klassisk Bruslund",
    color: "#fafafa",
    accent: "#6d4c41",
    naering: {
      hel: { kcal: 2800, protein: 200, kulhy: 240, fedt: 90 },
      portion: { kcal: 700, protein: 50, kulhy: 60, fedt: 23 },
    },
    recipe: {
      tid: "30 min",
      svaerhed: "Let",
      intro: "Klassisk frikadeller af hakket grisekød til familien. Serveres med kogte kartofler + persillesovs.",
      trin: [
        "Forbered frikadeller af hakket grisekød efter opskrift.",
        "Tilbered kogte kartofler + persillesovs som tilbehør.",
        "Smag til med salt og peber.",
        "Server og nyd måltidet! 🍽️",
      ],
    },
    ingredients: [
      { name: "Hakket grisekød (~600g)", qty: "", url: "https://www.bilkatogo.dk/s?query=hakket+grisekød+(~600g)" },
      { name: "panko", qty: "", url: "https://www.bilkatogo.dk/s?query=panko" },
      { name: "æg", qty: "", url: "https://www.bilkatogo.dk/s?query=æg" },
      { name: "løg", qty: "", url: "https://www.bilkatogo.dk/s?query=løg" },
      { name: "krydderier", qty: "", url: "https://www.bilkatogo.dk/s?query=krydderier" },
    ],
  },
  {
    day: "Torsdag",
    dato: "02.07",
    emoji: "🍽️",
    meal: "Kalveculotte eller kalveflatsteaks på grillen",
    sidedish: "Ris + salat + grillede grøntsager",
    note: "Rema-tilbud: 69,95 kr. Fin weekendmad før potentiel rejse. Hurtigt på grillen (~15 min).",
    color: "#f5f5f5",
    accent: "#424242",
    naering: {
      hel: { kcal: 2800, protein: 200, kulhy: 240, fedt: 90 },
      portion: { kcal: 700, protein: 50, kulhy: 60, fedt: 23 },
    },
    recipe: {
      tid: "30 min",
      svaerhed: "Let",
      intro: "Klassisk kalveculotte eller kalveflatsteaks på grillen til familien. Serveres med ris + salat + grillede grøntsager.",
      trin: [
        "Forbered kalveculotte eller kalveflatsteaks på grillen efter opskrift.",
        "Tilbered ris + salat + grillede grøntsager som tilbehør.",
        "Smag til med salt og peber.",
        "Server og nyd måltidet! 🍽️",
      ],
    },
    ingredients: [
      { name: "Kalveculotte/flatsteaks (~800g)", qty: "", url: "https://www.bilkatogo.dk/s?query=kalveculotte/flatsteaks+(~800g)" },
      { name: "risottoris", qty: "", url: "https://www.bilkatogo.dk/s?query=risottoris" },
      { name: "frisk salat", qty: "", url: "https://www.bilkatogo.dk/s?query=frisk+salat" },
      { name: "forårsgrøntsager (fx squash", qty: "", url: "https://www.bilkatogo.dk/s?query=forårsgrøntsager+(fx+squash" },
      { name: "peberfrugt)", qty: "", url: "https://www.bilkatogo.dk/s?query=peberfrugt)" },
    ],
  },
  {
    day: "Fredag",
    dato: "03.07",
    emoji: "🍽️",
    meal: "Rødspætter eller havkatfilet",
    sidedish: "Kogte kartofler + persillesovs",
    note: "⚠️ FLEKSIBEL HVIS REJSE: Rema-tilbud 45 kr. Hvis familien er på vej til Østrig, kan være let og hurtig. Ellers klassisk fredag-fisk. ✓ Fisk-fredag",
    color: "#f5f5f5",
    accent: "#424242",
    naering: {
      hel: { kcal: 2800, protein: 200, kulhy: 240, fedt: 90 },
      portion: { kcal: 700, protein: 50, kulhy: 60, fedt: 23 },
    },
    recipe: {
      tid: "30 min",
      svaerhed: "Let",
      intro: "Klassisk rødspætter eller havkatfilet til familien. Serveres med kogte kartofler + persillesovs.",
      trin: [
        "Forbered rødspætter eller havkatfilet efter opskrift.",
        "Tilbered kogte kartofler + persillesovs som tilbehør.",
        "Smag til med salt og peber.",
        "Server og nyd måltidet! 🍽️",
      ],
    },
    ingredients: [
      { name: "Rødspættefilet eller havkatfilet (~600g)", qty: "", url: "https://www.bilkatogo.dk/s?query=rødspættefilet+eller+havkatfilet+(~600g)" },
      { name: "kartofler", qty: "", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "persille", qty: "", url: "https://www.bilkatogo.dk/s?query=persille" },
      { name: "smør", qty: "", url: "https://www.bilkatogo.dk/s?query=smør" },
      { name: "salt", qty: "", url: "https://www.bilkatogo.dk/s?query=salt" },
    ],
  },
  {
    day: "Lørdag",
    dato: "04.07",
    emoji: "🍽️",
    meal: "Pulled pork med coleslaw",
    sidedish: "Bådekartofler + pickling",
    note: "⚠️ FLEKSIBEL HVIS REJSE: Rema-tilbud 69 kr. Weekendmad — kan være helt weekend-hyggelig. Hvis de rejser, kan være aftensmad før afgang eller skipped.",
    color: "#f5f5f5",
    accent: "#424242",
    naering: {
      hel: { kcal: 2800, protein: 200, kulhy: 240, fedt: 90 },
      portion: { kcal: 700, protein: 50, kulhy: 60, fedt: 23 },
    },
    recipe: {
      tid: "30 min",
      svaerhed: "Let",
      intro: "Klassisk pulled pork med coleslaw til familien. Serveres med bådekartofler + pickling.",
      trin: [
        "Forbered pulled pork med coleslaw efter opskrift.",
        "Tilbered bådekartofler + pickling som tilbehør.",
        "Smag til med salt og peber.",
        "Server og nyd måltidet! 🍽️",
      ],
    },
    ingredients: [
      { name: "Pulled pork (~800g", qty: "", url: "https://www.bilkatogo.dk/s?query=pulled+pork+(~800g" },
      { name: "evt. frossen)", qty: "", url: "https://www.bilkatogo.dk/s?query=evt.+frossen)" },
      { name: "coleslaw (hvidkål", qty: "", url: "https://www.bilkatogo.dk/s?query=coleslaw+(hvidkål" },
      { name: "gulerod", qty: "", url: "https://www.bilkatogo.dk/s?query=gulerod" },
      { name: "mayo-dressing)", qty: "", url: "https://www.bilkatogo.dk/s?query=mayo-dressing)" },
      { name: "hjemmestegt eller købt", qty: "", url: "https://www.bilkatogo.dk/s?query=hjemmestegt+eller+købt" },
    ],
  },
  {
    day: "Søndag",
    dato: "05.07",
    emoji: "🥩",
    meal: "Svinemørbrad i flødesovs",
    sidedish: "Ris",
    note: "⚠️ FLEKSIBEL HVIS REJSE: Mørbrad fra Rema 25 kr/kg. Klassisk søndagsmad. Hvis de er i Østrig, bruges denne ikke — så fjernes fra plan.",
    color: "#fff5ee",
    accent: "#bf360c",
    naering: {
      hel: { kcal: 2800, protein: 200, kulhy: 240, fedt: 90 },
      portion: { kcal: 700, protein: 50, kulhy: 60, fedt: 23 },
    },
    recipe: {
      tid: "30 min",
      svaerhed: "Let",
      intro: "Klassisk svinemørbrad i flødesovs til familien. Serveres med ris.",
      trin: [
        "Forbered svinemørbrad i flødesovs efter opskrift.",
        "Tilbered ris som tilbehør.",
        "Smag til med salt og peber.",
        "Server og nyd måltidet! 🍽️",
      ],
    },
    ingredients: [
      { name: "Svinemørbrad (~700g)", qty: "", url: "https://www.bilkatogo.dk/s?query=svinemørbrad+(~700g)" },
      { name: "créme fraîche", qty: "", url: "https://www.bilkatogo.dk/s?query=créme+fraîche" },
      { name: "rødvin", qty: "", url: "https://www.bilkatogo.dk/s?query=rødvin" },
      { name: "løg", qty: "", url: "https://www.bilkatogo.dk/s?query=løg" },
      { name: "thymian", qty: "", url: "https://www.bilkatogo.dk/s?query=thymian" },
    ],
  }
]

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
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", opacity: 0.5 }}>Uge 27 · 2026</div>
            <div style={{ fontSize: 18, fontWeight: "bold" }}>Bruslund Madplan — 29.06–05.07.2026</div>
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
                </div>
                <div style={{ fontSize: 14, opacity: 0.9, fontStyle: "italic", marginTop: 4 }}>{d.meal}</div>
                <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 11, background: "rgba(255,255,255,0.2)", padding: "3px 10px", borderRadius: 20 }}>Tid: {d.recipe.tid}</span>
                  <span style={{ fontSize: 11, background: "rgba(255,255,255,0.2)", padding: "3px 10px", borderRadius: 20 }}>{d.naering.portion.kcal} kcal/pers.</span>
                </div>
              </div>
              <div style={{ padding: "16px 20px" }}>
                {d.note && (
                  <div style={{ background: `${d.accent}18`, border: `1px solid ${d.accent}40`, borderRadius: 8, padding: "8px 12px", marginBottom: 14, fontSize: 13, color: d.accent, fontStyle: "italic" }}>
                    {d.note}
                  </div>
                )}
                <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#aaa", marginBottom: 6 }}>Tilbehør</div>
                <div style={{ fontSize: 14, fontWeight: "bold", marginBottom: 14, color: "#444" }}>{d.sidedish}</div>
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
              <span style={{ fontWeight: "bold", fontSize: 15 }}>Indkøbsliste — uge 27</span>
              <span style={{ fontSize: 13, opacity: 0.7 }}>{checkedItems}/{totalItems} afkrydset</span>
            </div>
            {madplan.map((day, di) => (
              <div key={di} style={{ marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 18 }}>{day.emoji}</span>
                  <span style={{ fontSize: 13, fontWeight: "bold", color: day.accent }}>{day.day} — {day.meal.length > 45 ? day.meal.slice(0, 45) + "..." : day.meal}</span>
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
              <a href="https://www.bilkatogo.dk/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#1a3a2a", color: "white", padding: "14px 28px", borderRadius: 12, textDecoration: "none", fontSize: 15, fontWeight: "bold", fontFamily: "inherit" }}>Gå til BilkaToGo</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
