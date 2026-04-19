import { useState } from "react";

// Madplan uge 17 · 2026 · 20.–26. april
// Opdateret af MasterKOK 👨‍🍳 søndag 19. april 2026
// Ændringer: Mandag = frikadeller (IKKE rester), bruger fryservarer (mørbrad + fars)

const madplan = [
  {
    day: "Mandag",
    dato: "20. april",
    emoji: "🥩",
    meal: "Frikadeller af flæskefars med kartoffelmos og brun sovs",
    color: "#fff3e0",
    accent: "#e65100",
    fryserNote: "🧊 Flæskefars fra fryseren!",
    naering: {
      hel: { kcal: 3200, protein: 240, kulhy: 200, fedt: 150 },
      portion: { kcal: 800, protein: 60, kulhy: 50, fedt: 38 },
    },
    recipe: {
      tid: "40 min",
      svaerhed: "Let",
      intro: "Klassiske danske frikadeller lavet af flæskefars fra fryseren — ingen rester, bare god mad! Brun sovs og kartoffelmos gør det til en rigtig dansk hverdagsklassiker. 🥩",
      trin: [
        "Optø flæskefars i køleskab natten over. Læg det i en skål.",
        "Bland farsen med 1 æg, 2 spsk mel, 1 dl mælk, finthakket løg, salt og peber. Rør godt.",
        "Form frikadeller (ca. 8-10 stk) med en fugtig ske og hånden.",
        "Steg ved medium-høj varme i smør 4-5 min per side til gyldne og gennemstegte.",
        "Kog kartofler og mos med smør, mælk og salt til luftig mos.",
        "Lav brun sovs: brun smør, rør mel i, tilsæt oksefond og fløde. Smag til.",
        "Server frikadeller med kartoffelmos og brun sovs. Klassisk og dejlig! 🥩",
      ],
    },
    ingredients: [
      { name: "Flæskefars (fra fryseren!)", qty: "2 × 400g 🧊", url: "https://www.bilkatogo.dk/s?query=flaeskefars" },
      { name: "Kartofler", qty: "1,2 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Æg", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=aeg" },
      { name: "Mel", qty: "2 spsk", url: "https://www.bilkatogo.dk/s?query=mel" },
      { name: "Mælk", qty: "1 dl + til mos", url: "https://www.bilkatogo.dk/s?query=maelk" },
      { name: "Løg", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Smør/Lurpak", qty: "100g", url: "https://www.bilkatogo.dk/s?query=lurpak" },
      { name: "Oksefond", qty: "3 dl (til sovs)", url: "https://www.bilkatogo.dk/s?query=oksefond" },
    ],
  },
  {
    day: "Tirsdag",
    dato: "21. april",
    emoji: "🍝",
    meal: "Hakket okse-/grisekød pasta med tomatsauce (hurtigt!)",
    color: "#fff8e1",
    accent: "#f39c12",
    naering: {
      hel: { kcal: 3200, protein: 240, kulhy: 320, fedt: 100 },
      portion: { kcal: 800, protein: 60, kulhy: 80, fedt: 25 },
    },
    recipe: {
      tid: "30 min",
      svaerhed: "Let",
      intro: "Lars er sent hjemme — hurtig og nem aftensmad! Hakket okse-/grisekød i rig tomatsauce med Garofalo pasta fra Bilka. Klar på 30 min, alle spiser glad. 🍝",
      trin: [
        "Kog Garofalo pasta efter pakkehenvisning i rigeligt saltet vand.",
        "Brun hakket kød ved høj varme i olie — løs det godt op med en ske.",
        "Tilsæt finthakket løg, hvidløg og peberfrugt. Svits 3 min.",
        "Tilsæt dåsetomater og tomatpuré. Krydr med oregano, basilikum, salt og peber.",
        "Lad simre 15 min til sovsen er tyk og smagfuld.",
        "Vend pasta i sovsen og server straks. 🍝",
      ],
    },
    ingredients: [
      { name: "Hakket okse-/grisekød (Bilka)", qty: "500g — TILBUD 125 kr", url: "https://www.bilkatogo.dk/s?query=hakket+oksekoed" },
      { name: "Garofalo pasta (Bilka)", qty: "500g — TILBUD 18 kr", url: "https://www.bilkatogo.dk/s?query=garofalo+pasta" },
      { name: "Dåsetomater", qty: "2 dåser", url: "https://www.bilkatogo.dk/s?query=daaosetomater" },
      { name: "Tomatpuré", qty: "2 spsk", url: "https://www.bilkatogo.dk/s?query=tomatpure" },
      { name: "Løg", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Hvidløg (Bilka)", qty: "3 fed — TILBUD 10 kr", url: "https://www.bilkatogo.dk/s?query=hvidloeg" },
      { name: "Peberfrugt", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=peberfrugt" },
    ],
  },
  {
    day: "Onsdag",
    dato: "22. april",
    emoji: "🐟",
    meal: "Panerede fiskefileter med nye kartofler og remoulade (fodbolddag!)",
    color: "#e8f4f8",
    accent: "#2980b9",
    naering: {
      hel: { kcal: 2800, protein: 200, kulhy: 260, fedt: 100 },
      portion: { kcal: 700, protein: 50, kulhy: 65, fedt: 25 },
    },
    recipe: {
      tid: "25 min",
      svaerhed: "Let",
      intro: "Vejle BK vs Silkeborg kl. 18:00 — maddag er nem og hurtig! Panerede fiskefileter fra Bilka (29 kr/pk) med nye kartofler og remoulade. Klar i god tid inden kampen. 🐟⚽",
      trin: [
        "Kog nye kartofler i saltet vand med dild 12-15 min til møre.",
        "Varm en pande med rigeligt smør ved medium-høj varme.",
        "Steg fiskefileterne 3-4 min per side til gyldne og sprøde.",
        "Dræn på køkkenrulle. Krydr med salt og peber.",
        "Server med nye kartofler, remoulade og citron. Spis inden kampen! 🐟",
      ],
    },
    ingredients: [
      { name: "Panerede fiskefileter (Bilka)", qty: "2 pk — TILBUD 29 kr/pk", url: "https://www.bilkatogo.dk/s?query=panerede+fiskefileter" },
      { name: "Nye kartofler (Bilka)", qty: "1 kg — TILBUD 15 kr", url: "https://www.bilkatogo.dk/s?query=nye+kartofler" },
      { name: "Remoulade", qty: "1 tube", url: "https://www.bilkatogo.dk/s?query=remoulade" },
      { name: "Smør/Lurpak", qty: "50g til stegning", url: "https://www.bilkatogo.dk/s?query=lurpak" },
      { name: "Citron", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=citron" },
      { name: "Dild", qty: "til kartofler", url: "https://www.bilkatogo.dk/s?query=dild" },
    ],
  },
  {
    day: "Torsdag",
    dato: "23. april",
    emoji: "🥩",
    meal: "Svinemørbrad med flødesovs og kartoffelmos (fra fryseren!)",
    color: "#eafaf1",
    accent: "#27ae60",
    fryserNote: "🧊 Svinemørbrad fra fryseren!",
    naering: {
      hel: { kcal: 3000, protein: 240, kulhy: 200, fedt: 130 },
      portion: { kcal: 750, protein: 60, kulhy: 50, fedt: 33 },
    },
    recipe: {
      tid: "40 min",
      svaerhed: "Let",
      intro: "Svinemørbrad fra fryseren — optøet natten over! Lars er sent hjemme, men det her passer sig selv i ovnen. Mørt, saftigt og med en lækker flødesovs. 🥩",
      trin: [
        "Optø svinemørbrad i køleskab natten over (fra onsdag aften).",
        "Rens mørbraden for sener. Krydr med salt, peber og paprika.",
        "Brun mørbraden godt i smør ved høj varme 2-3 min per side.",
        "Læg i ovnfast fad. Hæld piskefløde og fond over. Bag ved 180° i 20-25 min (72°C).",
        "Kog kartofler og mos med smør, mælk og salt til luftig mos.",
        "Si og smag flødesovsen til med salt, peber og evt. lidt sennep.",
        "Server skåret i skiver med sovs og kartoffelmos. Lækkert! 🥩",
      ],
    },
    ingredients: [
      { name: "Svinemørbrad (fra fryseren!)", qty: "1 stk 🧊", url: "https://www.bilkatogo.dk/s?query=svinemorbrad" },
      { name: "Kartofler", qty: "1 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Piskefløde", qty: "2 dl", url: "https://www.bilkatogo.dk/s?query=floede" },
      { name: "Svine- eller hønsefond", qty: "2 dl", url: "https://www.bilkatogo.dk/s?query=fond" },
      { name: "Smør/Lurpak", qty: "75g", url: "https://www.bilkatogo.dk/s?query=lurpak" },
      { name: "Sødmælk", qty: "1-2 dl til mos", url: "https://www.bilkatogo.dk/s?query=soedmaelk" },
    ],
  },
  {
    day: "Fredag",
    dato: "24. april",
    emoji: "🍗",
    meal: "Udbenede kyllingeoverlår med ris og karrysovs (Bilka-tilbud!)",
    color: "#fdf2f8",
    accent: "#c0392b",
    naering: {
      hel: { kcal: 3200, protein: 260, kulhy: 280, fedt: 120 },
      portion: { kcal: 800, protein: 65, kulhy: 70, fedt: 30 },
    },
    recipe: {
      tid: "50 min",
      svaerhed: "Let",
      intro: "Udbenede kyllingeoverlår fra Bilka (85 kr!) — saftigere og mere smagfulde end brystet! Karrysovs og basmatiris er fredagshygge for hele familien. 🍗",
      trin: [
        "Krydr kyllingeoverlårene med salt, peber, paprika og hvidløg.",
        "Steg ved høj varme 4-5 min per side til gylden. Sæt i ovn ved 190° i 20-25 min.",
        "Kog basmatiris efter pakke-anvisning.",
        "Lav karrysovs: svits løg, tilsæt karrypulver, kog op med hønsefond og piskefløde. Smag til.",
        "Server kyllingeoverlår med ris og karrysovs. Fredagshumøret er i hus! 🍗🎉",
      ],
    },
    ingredients: [
      { name: "Udbenede kyllingeoverlår (Bilka)", qty: "ca. 800g — TILBUD 85 kr", url: "https://www.bilkatogo.dk/s?query=kyllingeoverlaar" },
      { name: "Basmatiris", qty: "300g", url: "https://www.bilkatogo.dk/s?query=basmatiris" },
      { name: "Karrypulver", qty: "2 spsk", url: "https://www.bilkatogo.dk/s?query=karry" },
      { name: "Hønsefond", qty: "2 dl", url: "https://www.bilkatogo.dk/s?query=fond" },
      { name: "Piskefløde", qty: "1,5 dl", url: "https://www.bilkatogo.dk/s?query=floede" },
      { name: "Løg", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Hvidløg", qty: "2 fed", url: "https://www.bilkatogo.dk/s?query=hvidloeg" },
    ],
  },
  {
    day: "Lørdag",
    dato: "25. april",
    emoji: "🍔",
    meal: "Krogmodnede burgerbøffer med nye kartofler (Liverpool-dag! 🔴)",
    color: "#fff8e1",
    accent: "#e67e22",
    naering: {
      hel: { kcal: 3200, protein: 240, kulhy: 240, fedt: 150 },
      portion: { kcal: 800, protein: 60, kulhy: 60, fedt: 38 },
    },
    recipe: {
      tid: "30 min",
      svaerhed: "Let",
      intro: "Liverpool vs Crystal Palace kl. 11:00 🔴 — og om aftenen burgerhygge! Krogmodnede burgerbøffer fra Bilka (79 kr) med sprøde nye kartofler. Nogen er i Århus, men dem hjemme fortjener de gode bøffer! Ost på burgeren er OK. 🍔",
      trin: [
        "Kog nye kartofler i saltet vand 12-15 min til møre.",
        "Varm panden op til høj varme. Krydr bøfferne med salt og peber.",
        "Steg bøfferne 3-4 min per side for medium. Hvil 2 min.",
        "Varm burgerboller i ovnen 3 min ved 180°.",
        "Byg burgere med salat, tomat, rødløg og dressing. Ost på dem der vil!",
        "Server med nye kartofler. YOU'LL NEVER WALK ALONE! 🔴🍔",
      ],
    },
    ingredients: [
      { name: "Krogmodnede burgerbøffer (Bilka)", qty: "4-8 bøffer — TILBUD 79 kr", url: "https://www.bilkatogo.dk/s?query=burgerboeffer" },
      { name: "Burgerboller", qty: "4-8 stk", url: "https://www.bilkatogo.dk/s?query=burgerboller" },
      { name: "Nye kartofler (Bilka)", qty: "1 kg — TILBUD 15 kr", url: "https://www.bilkatogo.dk/s?query=nye+kartofler" },
      { name: "Romaine/isbergsalat", qty: "1 hoved", url: "https://www.bilkatogo.dk/s?query=salat" },
      { name: "Tomater (Bilka øko)", qty: "3 stk — TILBUD 6 kr", url: "https://www.bilkatogo.dk/s?query=tomater" },
      { name: "Rødløg", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=roedloeg" },
      { name: "Ketchup og sennep", qty: "til servering", url: "https://www.bilkatogo.dk/s?query=ketchup" },
    ],
  },
  {
    day: "Søndag",
    dato: "26. april",
    emoji: "🐷",
    meal: "Nakkefilet i ovnen med rodfrugter og kogte kartofler (Rema — murer-søndag!)",
    color: "#f3e5f5",
    accent: "#7b1fa2",
    naering: {
      hel: { kcal: 3200, protein: 260, kulhy: 200, fedt: 140 },
      portion: { kcal: 800, protein: 65, kulhy: 50, fedt: 35 },
    },
    recipe: {
      tid: "2 timer (passer sig selv!)",
      svaerhed: "Let",
      intro: "Murer Simon Okkerstrøm kommer 09:00–15:00 — en ret der passer sig selv i ovnen er perfekt! Ovnnakkefilet fra Rema (25 kr/kg!) med rodfrugter. Ingen stress. 🐷🔨",
      trin: [
        "Forvarm ovnen til 160°. Gnid nakkefileten med salt, peber, rosmarin og hvidløg.",
        "Brun nakkefileten i en gryde 2-3 min per side til gylden.",
        "Læg i ildfast fad med grofthakkede rodfrugter (gulerod, pastinak, selleri, løg).",
        "Hæld oksefond og evt. lidt æblemost ved. Dæk med folie.",
        "Steg ved 160° i 1,5-2 timer til mørt og gennemstegt (70-75°C).",
        "Kog kartofler i saltet vand 15-20 min. Server med rodfrugter og stegeskyen. 🐷",
      ],
    },
    ingredients: [
      { name: "Dansk nakkefilet (Rema)", qty: "ca. 1 kg — TILBUD 25 kr/kg", url: "https://www.bilkatogo.dk/s?query=nakkefilet" },
      { name: "Kartofler", qty: "1,2 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Gulerødder", qty: "4 stk", url: "https://www.bilkatogo.dk/s?query=gulerodder" },
      { name: "Pastinak eller selleri", qty: "2 stk", url: "https://www.bilkatogo.dk/s?query=pastinak" },
      { name: "Løg", qty: "2 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Oksefond", qty: "3 dl", url: "https://www.bilkatogo.dk/s?query=oksefond" },
      { name: "Rosmarin + hvidløg", qty: "til krydring", url: "https://www.bilkatogo.dk/s?query=krydderier" },
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
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", opacity: 0.5 }}>Uge 17 · 2026</div>
            <div style={{ fontSize: 18, fontWeight: "bold" }}>Bruslund Madplan — 20.–26. april</div>
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
              <span style={{ fontWeight: "bold", fontSize: 15 }}>Indkobsliste — uge 17</span>
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
