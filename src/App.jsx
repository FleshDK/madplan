import { useState } from "react";

// Madplan uge 19 · 2026 · 3. maj – 10. maj
// Opdateret af MasterKOK 👨‍🍳 søndag 3. maj 2026
// Baseret på Bilka-tilbud og familiens præferencer

const madplan = [
  {
    day: "Søndag",
    dato: "03.05",
    emoji: "🥩",
    meal: "Nakkefilet (ovn)",
    color: "#f5e6d3",
    accent: "#8b4513",
    naering: {
      hel: { kcal: 3200, protein: 280, kulhy: 180, fedt: 130 },
      portion: { kcal: 800, protein: 70, kulhy: 45, fedt: 33 },
    },
    recipe: {
      tid: "120 min",
      svaerhed: "Middel",
      intro: "Klassisk søndagsret! Langtidsstegt nakkefilet bliver mørt og saftigt. Start tidligt! 🥩",
      trin: [
        "Forvarm ovnen til 160°C.",
        "Tørr nakkefileten og krydr godt med salt, peber og paprika.",
        "Brun den kort i pande med olivenolie på alle sider.",
        "Læg i ildfast gryde med snittede løg, gulerødder og hvidløg.",
        "Hæld kvægfond og evt. rødvin ved.",
        "Læg låg på og bag 90-120 min til mørt og mørhørende.",
        "Server med bådekartofler og salat. Virkelig lækkert! 🥩",
      ],
    },
    ingredients: [
      { name: "Nakkefilet", qty: "1,2 kg", url: "https://www.bilkatogo.dk/s?query=nakkefilet" },
      { name: "Bådekartofler", qty: "1,5 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Løg", qty: "2 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Gulerødder", qty: "3 stk", url: "https://www.bilkatogo.dk/s?query=gulerodder" },
      { name: "Hvidløg", qty: "4 fed", url: "https://www.bilkatogo.dk/s?query=hvidloeg" },
      { name: "Kvægfond", qty: "3 dl", url: "https://www.bilkatogo.dk/s?query=fond" },
      { name: "Salat (blandet)", qty: "1 pose", url: "https://www.bilkatogo.dk/s?query=salat" },
    ],
  },
  {
    day: "Mandag",
    dato: "04.05",
    emoji: "🍗",
    meal: "Kylling i Jensens sovs 🍗",
    color: "#fdf2e9",
    accent: "#d17a2f",
    naering: {
      hel: { kcal: 2900, protein: 260, kulhy: 240, fedt: 95 },
      portion: { kcal: 725, protein: 65, kulhy: 60, fedt: 24 },
    },
    recipe: {
      tid: "45 min",
      svaerhed: "Middel",
      intro: "Familiens favoritopskrift! Kyllingebryst i tern med løg, bacon og Jensen's klassiske sovs. Server med ris. 🍗",
      trin: [
        "Skær kyllingebrysterne i fine tern.",
        "Steg bacon i panden til det er sprødt, tag det ud.",
        "Svits finthakket løg i baconfedt til det er blødt.",
        "Tilsæt kyllingen og brun det på alle sider.",
        "Hæld Jensen's sovs og fløde ved. Evt. tilføj rød peber og cocktailpølser.",
        "Lad det simre 15-20 min til kyllingen er igennem.",
        "Kog ris efter pakkehenvisning.",
        "Server kylling med sovs over risen. Deiligt! 🍗",
      ],
    },
    ingredients: [
      { name: "Kyllingebryst", qty: "700g", url: "https://www.bilkatogo.dk/s?query=kyllingebryst" },
      { name: "Bacon", qty: "150g", url: "https://www.bilkatogo.dk/s?query=bacon" },
      { name: "Løg", qty: "2 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Ris", qty: "400g", url: "https://www.bilkatogo.dk/s?query=ris" },
      { name: "Jensen's sovs", qty: "1 glas/dåse", url: "https://www.bilkatogo.dk/s?query=jensen" },
      { name: "Fløde", qty: "2 dl", url: "https://www.bilkatogo.dk/s?query=flode" },
      { name: "Rød peber (evt.)", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=paprika" },
      { name: "Cocktailpølser (evt.)", qty: "150g", url: "https://www.bilkatogo.dk/s?query=polser" },
    ],
  },
  {
    day: "Tirsdag",
    dato: "05.05",
    emoji: "🍞",
    meal: "Rugbrødsdag 🍞",
    color: "#f3f3f3",
    accent: "#8b6914",
    naering: {
      hel: { kcal: 2600, protein: 180, kulhy: 200, fedt: 85 },
      portion: { kcal: 650, protein: 45, kulhy: 50, fedt: 21 },
    },
    recipe: {
      tid: "15 min",
      svaerhed: "Let",
      intro: "Nem tirsdag! Rugbrød med varm fiskefillet og varm leverpostej — klassisk dansk hygge. 🍞",
      trin: [
        "Tag rugbrødet og skær det i skiver.",
        "Steg fiskefilleten kort i pande med smør til den er gylden.",
        "Varm leverpostej op i ovnen eller på panden.",
        "Smør rugbrødet og server det med fiskefillet og leverpostej.",
        "Evt. tilføj salat og syltet agurk. Smukt! 🍞",
      ],
    },
    ingredients: [
      { name: "Rugbrød", qty: "1 brød", url: "https://www.bilkatogo.dk/s?query=rugbrod" },
      { name: "Fiskefillet (frossen)", qty: "400g", url: "https://www.bilkatogo.dk/s?query=fiskefillet" },
      { name: "Leverpostej", qty: "1 dåse", url: "https://www.bilkatogo.dk/s?query=leverpostej" },
      { name: "Smør", qty: "50g", url: "https://www.bilkatogo.dk/s?query=smor" },
      { name: "Salat (blandet)", qty: "evt.", url: "https://www.bilkatogo.dk/s?query=salat" },
      { name: "Syltet agurk", qty: "evt.", url: "https://www.bilkatogo.dk/s?query=agurk" },
    ],
  },
  {
    day: "Onsdag",
    dato: "06.05",
    emoji: "🍗",
    meal: "Kyllingebrystfilet (flødesovs)",
    color: "#fdf2e9",
    accent: "#d17a2f",
    naering: {
      hel: { kcal: 2800, protein: 240, kulhy: 220, fedt: 95 },
      portion: { kcal: 700, protein: 60, kulhy: 55, fedt: 24 },
    },
    recipe: {
      tid: "40 min",
      svaerhed: "Let",
      intro: "Klassisk flødesovs-ret! Møre kyllingebrystfileter i en cremig sovs. Server med ris. 🍗",
      trin: [
        "Skær kyllingebrystfileter i tynde skiver.",
        "Steg dem kort i pande med smør på begge sider, tag dem ud.",
        "Svits finthakket løg og hvidløg i samme pande.",
        "Tilsæt fløde og evt. et par spsk flødeost.",
        "Tilsæt kyllingen tilbage og lad det varme igennem.",
        "Krydr med salt, peber og evt. sennepe.",
        "Kog ris efter pakkehenvisning.",
        "Server straks! Rigtig lækkert! 🍗",
      ],
    },
    ingredients: [
      { name: "Kyllingebrystfilet", qty: "700g", url: "https://www.bilkatogo.dk/s?query=kyllingebryst" },
      { name: "Ris", qty: "400g", url: "https://www.bilkatogo.dk/s?query=ris" },
      { name: "Løg", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Hvidløg", qty: "3 fed", url: "https://www.bilkatogo.dk/s?query=hvidloeg" },
      { name: "Fløde", qty: "3 dl", url: "https://www.bilkatogo.dk/s?query=flode" },
      { name: "Smør", qty: "50g", url: "https://www.bilkatogo.dk/s?query=smor" },
      { name: "Sennepe (evt.)", qty: "1 tsk", url: "https://www.bilkatogo.dk/s?query=sennepe" },
    ],
  },
  {
    day: "Torsdag",
    dato: "07.05",
    emoji: "🐷",
    meal: "Mørbrad af gris",
    color: "#f5e6d3",
    accent: "#a0522d",
    naering: {
      hel: { kcal: 3100, protein: 280, kulhy: 160, fedt: 130 },
      portion: { kcal: 775, protein: 70, kulhy: 40, fedt: 33 },
    },
    recipe: {
      tid: "50 min",
      svaerhed: "Middel",
      intro: "Mørbrad af gris er en præmie-ret! Stegte kartofler og simpel sauce gør det perfekt. 🐷",
      trin: [
        "Tørr mørbrad godt og krydr det godt med salt og peber.",
        "Brun mørbrad kort i pande med smør på begge sider.",
        "Lagt det i ildfast skål og bag ved 180°C i ca. 25-30 min.",
        "I mellemtiden: skær kartofler i stykker og steg dem gylden i olivenolie.",
        "Tag mørbrad ud af ovnen og lad det hvile 5 min før servering.",
        "Skær mørbrad i pæne bider.",
        "Server med stegte kartofler og evt. grønt. Virkelig delikat! 🐷",
      ],
    },
    ingredients: [
      { name: "Mørbrad af gris", qty: "700g", url: "https://www.bilkatogo.dk/s?query=morbrad+gris" },
      { name: "Kartofler", qty: "1,2 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Smør", qty: "50g", url: "https://www.bilkatogo.dk/s?query=smor" },
      { name: "Olivenolie", qty: "3 spsk", url: "https://www.bilkatogo.dk/s?query=olivenolie" },
      { name: "Grønt (evt.)", qty: "efter behov", url: "https://www.bilkatogo.dk/s?query=gront" },
    ],
  },
  {
    day: "Fredag",
    dato: "08.05",
    emoji: "🍖",
    meal: "Spareribs",
    color: "#f5e6d3",
    accent: "#c0392b",
    naering: {
      hel: { kcal: 3200, protein: 260, kulhy: 180, fedt: 140 },
      portion: { kcal: 800, protein: 65, kulhy: 45, fedt: 35 },
    },
    recipe: {
      tid: "90 min",
      svaerhed: "Let",
      intro: "Fridag! Saftige spareribs med BBQ-sovs og pomfritter — rigtig weekendfest! 🍖",
      trin: [
        "Forvarm ovnen til 180°C.",
        "Forbered spareribs — fjern eventuelt plastik-folie.",
        "Lagt ribsene i ildfast fad med lidt vand.",
        "Bag dem i 60 min. I sidste 15 min: pensl hyppigt med BBQ-sovs.",
        "I mellemtiden: skær kartofler i stykker og steg pomfritter efter anvisning.",
        "Tag ribsene ud når de er møre og glistner.",
        "Server med varme pomfritter og evt. coleslaw. Lækkert! 🍖",
      ],
    },
    ingredients: [
      { name: "Spareribs", qty: "1-1,5 kg", url: "https://www.bilkatogo.dk/s?query=spareribs" },
      { name: "BBQ-sovs", qty: "1 flaske/glas", url: "https://www.bilkatogo.dk/s?query=bbq" },
      { name: "Kartofler til pomfritter", qty: "1 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Olivenolie", qty: "til steging", url: "https://www.bilkatogo.dk/s?query=olivenolie" },
      { name: "Coleslaw (evt.)", qty: "evt.", url: "https://www.bilkatogo.dk/s?query=coleslaw" },
    ],
  },
  {
    day: "Lørdag",
    dato: "09.05",
    emoji: "🍝",
    meal: "Pasta m. tomatflødesovs 🍝",
    color: "#fff3e0",
    accent: "#e65100",
    naering: {
      hel: { kcal: 2700, protein: 200, kulhy: 320, fedt: 85 },
      portion: { kcal: 675, protein: 50, kulhy: 80, fedt: 21 },
    },
    recipe: {
      tid: "35 min",
      svaerhed: "Let",
      intro: "Klassisk italiensk pasta-ret med cremig tomatflødesovs. Enkelt men deiligt! 🍝",
      trin: [
        "Kog pasta efter pakkehenvisning, sirup og sæt den til siden.",
        "Svits finthakket løg og hvidløg i olivenolie.",
        "Tilsæt dåsetomater og lad det simre 10 min.",
        "Hæld fløde ved og lad det varme igennem.",
        "Krydr med salt, peber, basilikum og evt. oregano.",
        "Bland pasta og sovs sammen.",
        "Server med evt. Parmesan og frisk basil. Mmm! 🍝",
      ],
    },
    ingredients: [
      { name: "Pasta", qty: "500g", url: "https://www.bilkatogo.dk/s?query=pasta" },
      { name: "Dåsetomater", qty: "2 dåser", url: "https://www.bilkatogo.dk/s?query=daaosetomater" },
      { name: "Fløde", qty: "2 dl", url: "https://www.bilkatogo.dk/s?query=flode" },
      { name: "Løg", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Hvidløg", qty: "3 fed", url: "https://www.bilkatogo.dk/s?query=hvidloeg" },
      { name: "Olivenolie", qty: "3 spsk", url: "https://www.bilkatogo.dk/s?query=olivenolie" },
      { name: "Basilikum", qty: "evt.", url: "https://www.bilkatogo.dk/s?query=basilikum" },
      { name: "Parmesan (evt.)", qty: "evt.", url: "https://www.bilkatogo.dk/s?query=parmesan" },
    ],
  },
  {
    day: "Søndag",
    dato: "10.05",
    emoji: "🥩",
    meal: "Kalveculotte (bøf)",
    color: "#e8f4f8",
    accent: "#2c3e50",
    naering: {
      hel: { kcal: 3000, protein: 300, kulhy: 140, fedt: 120 },
      portion: { kcal: 750, protein: 75, kulhy: 35, fedt: 30 },
    },
    recipe: {
      tid: "25 min",
      svaerhed: "Let",
      intro: "Festlig søndag! Møre kalveculotte-bøffer med bearnaise og bådekartofler. Lækkert! 🥩",
      trin: [
        "Tag bøffer ud og lad dem varme til stuetemperatur.",
        "Kog bådekartofler i saltet vand ca. 15-20 min.",
        "Varm pande med smør til høj varme.",
        "Steg bøfferne ca. 3-4 min per side til medium.",
        "Lad dem hvile 3 min på varm tallerken.",
        "Server med bådekartofler og fyldig bearnaise.",
        "Evt. tilføj салat på siden. Virkelig festligt! 🥩",
      ],
    },
    ingredients: [
      { name: "Kalveculotte-bøffer", qty: "4 stk (ca. 180g)", url: "https://www.bilkatogo.dk/s?query=kalveculotte" },
      { name: "Bådekartofler", qty: "1,5 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Smør", qty: "75g", url: "https://www.bilkatogo.dk/s?query=smor" },
      { name: "Bearnaise", qty: "1 pose/glas", url: "https://www.bilkatogo.dk/s?query=bearnaise" },
      { name: "Salat (blandet)", qty: "evt.", url: "https://www.bilkatogo.dk/s?query=salat" },
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
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", opacity: 0.5 }}>Uge 19 · 2026</div>
            <div style={{ fontSize: 18, fontWeight: "bold" }}>Bruslund Madplan — 3. maj–10. maj</div>
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
              <span style={{ fontWeight: "bold", fontSize: 15 }}>Indkobsliste — uge 19</span>
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
              <a href="https://www.bilkatogo.dk/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#1a3a2a", color: "white", padding: "14px 28px", borderRadius: 12, textDecoration: "none", fontSize: 15, fontWeight: "bold", fontFamily: "inherit" }}>Ga til BilkaToGo</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
