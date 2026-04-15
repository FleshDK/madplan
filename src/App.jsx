import { useState } from "react";

// Madplan uge 16 · 2026 · 13.–19. april
// Opdateret af Odin 🪬 onsdag 15. april 2026

const madplan = [
  {
    day: "Mandag",
    dato: "13. april",
    emoji: "🐔",
    meal: "Hel kylling med ris og karrysovs",
    color: "#fff8e1",
    accent: "#e67e22",
    naering: {
      hel: { kcal: 3200, protein: 240, kulhy: 280, fedt: 100 },
      portion: { kcal: 800, protein: 60, kulhy: 70, fedt: 25 },
    },
    recipe: {
      tid: "1 time 30 min",
      svaerhed: "Let",
      intro: "En klassisk hel kylling i ovnen — sprød skind, mørt kød og en lækker karrysovs. Ris koges ved siden af. Perfekt mandag-klassiker!",
      trin: [
        "Forvarm ovnen til 200°. Krydr kyllingen indvendigt og udvendigt med salt, peber, hvidløg og smør under skindet.",
        "Læg kyllingen på en rist over en bradepande. Bag 1 time 15 min til saft løber klar.",
        "Hvil kyllingen 10 min inden udskæring.",
        "Kog basmatiris efter pakke-anvisning.",
        "Lav karrysovs: svits løg, tilsæt karry, spæd med hønsefond og fløde. Smag til med salt og lidt citron.",
        "Server kylling, ris og karrysovs. God appetit! 🐔",
      ],
    },
    ingredients: [
      { name: "Hel kylling", qty: "ca. 1,5 kg", url: "https://www.bilkatogo.dk/s?query=hel+kylling" },
      { name: "Basmatiris", qty: "300g", url: "https://www.bilkatogo.dk/s?query=basmatiris" },
      { name: "Løg", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Karrypulver", qty: "2 spsk", url: "https://www.bilkatogo.dk/s?query=karry" },
      { name: "Hønsefond", qty: "2 dl", url: "https://www.bilkatogo.dk/s?query=fond" },
      { name: "Piskefløde", qty: "2 dl", url: "https://www.bilkatogo.dk/s?query=fløde" },
      { name: "Smør/Lurpak", qty: "50g", url: "https://www.bilkatogo.dk/s?query=lurpak" },
      { name: "Hvidløg", qty: "3 fed", url: "https://www.bilkatogo.dk/s?query=hvidloeg" },
    ],
  },
  {
    day: "Tirsdag",
    dato: "14. april",
    emoji: "🥩",
    meal: "Marineret kamfilet med bagte kartofler og salat",
    color: "#fdf2f8",
    accent: "#8e44ad",
    naering: {
      hel: { kcal: 2800, protein: 220, kulhy: 200, fedt: 100 },
      portion: { kcal: 700, protein: 55, kulhy: 50, fedt: 25 },
    },
    recipe: {
      tid: "45 min (+ marinering)",
      svaerhed: "Let",
      intro: "Saftig marineret kamfilet — mariner gerne natten over. Bagte kartofler er nemme og smager fantastisk. Frisk salat til.",
      trin: [
        "Mariner kamfileten natten over (eller min. 2 timer): olivenolie, hvidløg, sennep, timian, salt og peber.",
        "Forvarm ovnen til 200°. Skær kartofler i både, vend i olie, salt og peber.",
        "Bag kartoflerne 35-40 min til gyldne og sprøde.",
        "Steg kamfileten ved høj varme 3-4 min per side. Hvil 5 min.",
        "Lav enkel salat: romaine, tomater, agurk, rødløg og dressing.",
        "Skær kamfileten i skiver og server med bagte kartofler og salat. 🥩",
      ],
    },
    ingredients: [
      { name: "Kamfilet", qty: "ca. 700g", url: "https://www.bilkatogo.dk/s?query=kamfilet" },
      { name: "Kartofler", qty: "1 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Romaine/isbergsalat", qty: "1 hoved", url: "https://www.bilkatogo.dk/s?query=salat" },
      { name: "Tomater", qty: "200g", url: "https://www.bilkatogo.dk/s?query=tomater" },
      { name: "Agurk", qty: "½ stk", url: "https://www.bilkatogo.dk/s?query=agurk" },
      { name: "Rødløg", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=roedloeg" },
      { name: "Olivenolie", qty: "3 spsk", url: "https://www.bilkatogo.dk/s?query=olivenolie" },
      { name: "Dijonsennep", qty: "1 spsk", url: "https://www.bilkatogo.dk/s?query=dijonsennep" },
    ],
  },
  {
    day: "Onsdag",
    dato: "15. april",
    emoji: "🌮",
    meal: "Tex mex wraps med kyllingebrystfilet",
    color: "#eafaf1",
    accent: "#27ae60",
    naering: {
      hel: { kcal: 2880, protein: 256, kulhy: 240, fedt: 80 },
      portion: { kcal: 720, protein: 64, kulhy: 60, fedt: 20 },
    },
    recipe: {
      tid: "25 min",
      svaerhed: "Let",
      intro: "Kyllingebrysterne skæres i strimler og krydres med tacokrydderi. Alle bygger selv — hyggeligt onsdagsaftensmad!",
      trin: [
        "Skær kyllingebryst i strimler. Krydr med tacokrydderi, paprika, salt og peber.",
        "Steg strimlerne ved høj varme i olie ca. 4-5 min til gyldne og gennemstegte.",
        "Varm tortillaer i tør pande 30 sek per side.",
        "Sæt tilbehør på bordet: guacamole, salsa, majs, rødløg, romaine.",
        "Alle bygger deres egne wraps — det er den bedste del! 🌮",
      ],
    },
    ingredients: [
      { name: "Kyllingebrystfilet", qty: "ca. 700g", url: "https://www.bilkatogo.dk/s?query=kyllingebryst" },
      { name: "Tex Mex kit (tortillas + krydderi)", qty: "1 kit", url: "https://www.bilkatogo.dk/s?query=tex+mex" },
      { name: "Guacamole", qty: "1 bæger", url: "https://www.bilkatogo.dk/s?query=guacamole" },
      { name: "Salsa", qty: "1 glas", url: "https://www.bilkatogo.dk/s?query=salsa" },
      { name: "Majs (dåse)", qty: "1 dåse", url: "https://www.bilkatogo.dk/s?query=majs" },
      { name: "Romaine/isbergsalat", qty: "½ hoved", url: "https://www.bilkatogo.dk/s?query=salat" },
      { name: "Rødløg", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=roedloeg" },
      { name: "Creme fraiche 18%", qty: "1 bøtte", url: "https://www.bilkatogo.dk/s?query=creme+fraiche" },
    ],
  },
  {
    day: "Torsdag",
    dato: "16. april",
    emoji: "🥩",
    meal: "Svinemørbrad med flødesovs, kartofler og grønt",
    color: "#e8f4f8",
    accent: "#2980b9",
    naering: {
      hel: { kcal: 2800, protein: 240, kulhy: 200, fedt: 120 },
      portion: { kcal: 700, protein: 60, kulhy: 50, fedt: 30 },
    },
    recipe: {
      tid: "40 min",
      svaerhed: "Let",
      intro: "Svinemørbrad er mørt og hurtigt at tilberede. Flødesovsen løfter retten til noget særligt. En rigtig dansk klassiker!",
      trin: [
        "Rens mørbraden for sener. Krydr med salt og peber.",
        "Brun mørbraden godt i smør ved høj varme 2-3 min per side.",
        "Steg bacon i tern til sprødt. Svits løg og peberfrugt i baconfedt 3 min. Tilsæt fløde og fond.",
        "Lad simre 15-20 min til mørbrad er gennemstegt (72°C indre temp).",
        "Kog kartofler i saltet vand 12-15 min.",
        "Damp eller kog bønner/broccoli 3-4 min.",
        "Smag sovsen til med salt, peber og lidt sennep. Server straks! 🥩",
      ],
    },
    ingredients: [
      { name: "Svinemørbrad", qty: "ca. 700g", url: "https://www.bilkatogo.dk/s?query=svinemørbrad" },
      { name: "Kartofler", qty: "1 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Piskefløde", qty: "2 dl", url: "https://www.bilkatogo.dk/s?query=fløde" },
      { name: "Bacon (skiver)", qty: "150g", url: "https://www.bilkatogo.dk/s?query=bacon" },
      { name: "Peberfrugt (rød eller gul)", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=peberfrugt" },
      { name: "Løg", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Svine- eller hønsefond", qty: "2 dl", url: "https://www.bilkatogo.dk/s?query=fond" },
      { name: "Grønne bønner eller broccoli", qty: "300g", url: "https://www.bilkatogo.dk/s?query=grøntsager" },
      { name: "Smør/Lurpak", qty: "50g", url: "https://www.bilkatogo.dk/s?query=lurpak" },
    ],
  },
  {
    day: "Fredag",
    dato: "17. april",
    emoji: "🌭",
    meal: "Grillpølser",
    color: "#fdedec",
    accent: "#c0392b",
    naering: {
      hel: { kcal: 2400, protein: 120, kulhy: 200, fedt: 120 },
      portion: { kcal: 600, protein: 30, kulhy: 50, fedt: 30 },
    },
    recipe: {
      tid: "20 min",
      svaerhed: "Meget let",
      intro: "Fredag — simpelt og hyggeligt! Grillpølser, hotdog-brød og alle de gode tilbehør. Klassisk fredagshygge!",
      trin: [
        "Grill eller steg pølserne i panden til gyldne og gennemvarme — ca. 8-10 min.",
        "Varm hotdog-brød i ovnen 3-4 min ved 180°.",
        "Sæt tilbehør på bordet: ketchup, sennep, ristede løg, rå løg, remoulade.",
        "Byg jeres hotdogs og nyd fredagen! 🌭🎉",
      ],
    },
    ingredients: [
      { name: "Grillpølser", qty: "1 pk", url: "https://www.bilkatogo.dk/s?query=grillpoelsesr" },
      { name: "Hotdog-brød", qty: "1 pk", url: "https://www.bilkatogo.dk/s?query=hotdog+broed" },
      { name: "Ketchup og sennep", qty: "til servering", url: "https://www.bilkatogo.dk/s?query=ketchup" },
      { name: "Ristede løg", qty: "1 pose", url: "https://www.bilkatogo.dk/s?query=ristede+loeg" },
      { name: "Rå løg", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Remoulade", qty: "1 tube", url: "https://www.bilkatogo.dk/s?query=remoulade" },
    ],
  },
  {
    day: "Lørdag",
    dato: "18. april",
    emoji: "🥘",
    meal: "Simregryde med skært oksekød og rodfrugter",
    color: "#f0f8ff",
    accent: "#3498db",
    naering: {
      hel: { kcal: 3200, protein: 280, kulhy: 200, fedt: 120 },
      portion: { kcal: 800, protein: 70, kulhy: 50, fedt: 30 },
    },
    recipe: {
      tid: "2,5-3 timer (passer sig selv!)",
      svaerhed: "Let",
      intro: "Lørdag er perfekt til en simregryde — smid det hele i og lad det passe sig selv! Skært oksekød med rodfrugter er mættende og smagfuldt. Lav ekstra til søndag!",
      trin: [
        "Skær oksekødet i store tern. Brun godt i olie i en gryde ved høj varme — i portioner!",
        "Svits løg, gulerødder og selleri i 3 min.",
        "Tilsæt tomatpuré, oksefond, laurbærblad, timian og rosmarin.",
        "Skær rodfrugter (persillerod, pastinak, kartofler) i tern og tilsæt.",
        "Tilsæt vand til det lige dækker. Bring i kog, skru ned og lad simre 2-2,5 timer.",
        "Smag til med salt og peber. Server med godt brød. 🥘",
        "Lav ekstra — søndagens retter er klar!",
      ],
    },
    ingredients: [
      { name: "Skært oksekød (grydesteg)", qty: "1 kg", url: "https://www.bilkatogo.dk/s?query=oksekoed+grydesteg" },
      { name: "Gulerødder", qty: "4 stk", url: "https://www.bilkatogo.dk/s?query=gulerod" },
      { name: "Persillerod eller pastinak", qty: "2 stk", url: "https://www.bilkatogo.dk/s?query=persillerod" },
      { name: "Kartofler", qty: "500g", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Løg", qty: "2 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Selleri", qty: "2 stængler", url: "https://www.bilkatogo.dk/s?query=selleri" },
      { name: "Oksefond", qty: "4 dl", url: "https://www.bilkatogo.dk/s?query=oksefond" },
      { name: "Tomatpuré", qty: "2 spsk", url: "https://www.bilkatogo.dk/s?query=tomatpure" },
      { name: "Godt brød (til servering)", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=broed" },
    ],
  },
  {
    day: "Søndag",
    dato: "19. april",
    emoji: "🍲",
    meal: "Rester fra simregryde",
    rester: true,
    resterFra: "Lørdag",
    color: "#fdf2f8",
    accent: "#8e44ad",
    naering: {
      hel: { kcal: 2800, protein: 240, kulhy: 180, fedt: 100 },
      portion: { kcal: 700, protein: 60, kulhy: 45, fedt: 25 },
    },
    recipe: {
      tid: "15 min (opvarmning)",
      svaerhed: "Meget let",
      intro: "Simregryde smager endnu bedre dagen efter! Varm op og server med frisk brød. Nemmeste søndag nogensinde.",
      trin: [
        "Varm gryden langsomt op ved lav-medium varme — rør jævnligt.",
        "Smag til og juster med lidt salt og peber om nødvendigt.",
        "Hvis gryden er blevet for tyk, tilsæt lidt vand eller fond.",
        "Server med frisk godt brød. Simpelt og lækkert! 🍲",
      ],
    },
    ingredients: [
      { name: "Simregryde (rester fra lørdag)", qty: "hele gryden", url: "https://www.bilkatogo.dk/s?query=oksekoed" },
      { name: "Godt brød (evt. frisk)", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=broed" },
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
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", opacity: 0.5 }}>Uge 16 · 2026</div>
            <div style={{ fontSize: 18, fontWeight: "bold" }}>Bruslund Madplan — 13.–19. april</div>
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
                  {d.rester && !done && <span style={{ position: "absolute", top: -6, left: -6, fontSize: 11 }}>♻️</span>}
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
                  {d.rester && <span style={{ fontSize: 11, background: "rgba(255,255,255,0.25)", padding: "2px 8px", borderRadius: 20 }}>Rester fra {d.resterFra}</span>}
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
                      <button onClick={() => toggleIngredient(activeDay, ii)} style={{ width: 22, height: 22, borderRadius: "50%", border: `2px solid ${isChecked ? d.accent : "#ddd"}`, background: isChecked ? d.accent : "white", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 13, transition: "all 0.2s" }}>{isChecked ? "v" : ""}</button>
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
                  {d.rester && <span style={{ fontSize: 12, background: "rgba(255,255,255,0.3)", padding: "4px 12px", borderRadius: 20 }}>Rester fra {d.resterFra}</span>}
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
                      <span style={{ fontSize: 13, flex: 1, fontWeight: i === activeDay ? "bold" : "normal" }}>{dag.day}{dag.rester ? " (rester)" : ""}</span>
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
              <span style={{ fontWeight: "bold", fontSize: 15 }}>Indkobsliste — uge 16</span>
              <span style={{ fontSize: 13, opacity: 0.7 }}>{checkedItems}/{totalItems} afkrydset</span>
            </div>
            {madplan.map((day, di) => (
              <div key={di} style={{ marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 18 }}>{day.emoji}</span>
                  <span style={{ fontSize: 13, fontWeight: "bold", color: day.accent }}>{day.day} — {day.meal.length > 45 ? day.meal.slice(0, 45) + "..." : day.meal}</span>
                  {day.rester && <span style={{ fontSize: 11, background: "#f0f0f0", color: "#666", padding: "2px 8px", borderRadius: 20 }}>Rester</span>}
                </div>
                <div style={{ background: "white", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", borderLeft: `4px solid ${day.accent}` }}>
                  {day.ingredients.map((ing, ii) => {
                    const key = `${di}-${ii}`;
                    const isChecked = checked[key];
                    return (
                      <div key={ii} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 14px", borderBottom: ii < day.ingredients.length - 1 ? "1px solid #f8f8f8" : "none", opacity: isChecked ? 0.4 : 1, transition: "opacity 0.2s" }}>
                        <button onClick={() => toggleIngredient(di, ii)} style={{ width: 20, height: 20, borderRadius: "50%", border: `2px solid ${isChecked ? day.accent : "#ddd"}`, background: isChecked ? day.accent : "white", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 11, transition: "all 0.2s" }}>{isChecked ? "v" : ""}</button>
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
