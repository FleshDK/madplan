import { useState } from "react";

// Madplan uge 23 · 2026 · 01. juni – 07. juni
// Opdateret af MasterKOK 👨‍🍳 søndag 31. maj 2026
// Oksemørbrad og fiskefillet fra fryseren prioriteret. Fredag = Fars dag 🎂. Lørdag hurtig aftensmad (Simon murer, klassefest)

const madplan = [
  {
    day: "Mandag",
    dato: "01.06",
    emoji: "🥩",
    meal: "Mørbrad med flødesovs",
    sidedish: "Bådekartofler",
    note: "Fra fryseren — ca. 30 min",
    color: "#fff5ee",
    accent: "#bf360c",
    naering: {
      hel: { kcal: 2800, protein: 280, kulhy: 210, fedt: 110 },
      portion: { kcal: 700, protein: 70, kulhy: 53, fedt: 28 },
    },
    recipe: {
      tid: "30 min",
      svaerhed: "Let",
      intro: "Klassisk dansk mørbrad med rig flødesovs. Mørbrad fra fryseren gør det hurtigt og elegant!",
      trin: [
        "Kog bådekartofler i saltet vand ca. 20 min.",
        "Tag mørbrad fra fryseren og lad det tø let.",
        "Steg mørbrad på panden 3-4 min per side.",
        "Tag kødet af og hvil det.",
        "Lav flødesovs: skrenk kogepanden, tilsæt fløde og fond.",
        "Tilsæt hakket persille og smag til med salt og peber.",
        "Server mørbrad med bådekartofler og rigelig sovs. 🍽️",
      ],
    },
    ingredients: [
      { name: "Oksemørbrad (FRYSER)", qty: "700g", url: "https://www.bilkatogo.dk/s?query=moerbrad" },
      { name: "Bådekartofler", qty: "1,2 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Fløde", qty: "2 dl", url: "https://www.bilkatogo.dk/s?query=flode" },
      { name: "Persille", qty: "1 bundt", url: "https://www.bilkatogo.dk/s?query=persille" },
      { name: "Kødfond", qty: "1 dl", url: "https://www.bilkatogo.dk/s?query=fond" },
    ],
  },
  {
    day: "Tirsdag",
    dato: "02.06",
    emoji: "🥩",
    meal: "Mørbrad-rester",
    sidedish: "Bådekartofler",
    note: "Dag efter-regel ✓",
    color: "#fff5ee",
    accent: "#bf360c",
    naering: {
      hel: { kcal: 2700, protein: 260, kulhy: 200, fedt: 105 },
      portion: { kcal: 675, protein: 65, kulhy: 50, fedt: 26 },
    },
    recipe: {
      tid: "25 min",
      svaerhed: "Let",
      intro: "Smart genbrug fra mandagen! 💚 Mørbrad-rester bliver til en lækker ret igen — bare steg og varmet op.",
      trin: [
        "Kog bådekartofler i saltet vand ca. 20 min.",
        "Skær mørbrad-resterne i mundrrette stykker.",
        "Varm flødeovsen op i en pande.",
        "Steg mørbrad-stykkerne kort på panden, ca. 2 min.",
        "Tilsæt kødet til den varme sovs og lad det blande godt.",
        "Smag til med salt og peber.",
        "Server med bådekartofler og sovs. 🍽️",
      ],
    },
    ingredients: [
      { name: "Mørbrad-rester fra mandag", qty: "600g", url: "https://www.bilkatogo.dk/s?query=moerbrad" },
      { name: "Flødeovs fra mandag", qty: "3 dl", url: "https://www.bilkatogo.dk/s?query=flode" },
      { name: "Bådekartofler", qty: "1,2 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Salt og peber", qty: "efter smag", url: "https://www.bilkatogo.dk/s?query=krydderier" },
    ],
  },
  {
    day: "Onsdag",
    dato: "03.06",
    emoji: "🍗",
    meal: "Kyllingefilet i ovn med grøntsager",
    sidedish: "Ris",
    note: "Billigt og familievenligt",
    color: "#f3e5f5",
    accent: "#7b1fa2",
    naering: {
      hel: { kcal: 2600, protein: 220, kulhy: 280, fedt: 75 },
      portion: { kcal: 650, protein: 55, kulhy: 70, fedt: 19 },
    },
    recipe: {
      tid: "50 min",
      svaerhed: "Let",
      intro: "Nem og lækker ovnret! 🍗 Saftige kyllingefileter med grøntsager og hvidløg. Server med ris til.",
      trin: [
        "Forvarm ovnen til 200°C.",
        "Skær kyllingefileterne i mundrette stykker.",
        "Hak hvidløg fint og skær grøntsager i stykker.",
        "Bland kylling og grøntsager i ildfast fad.",
        "Drys med olivenolie, hvidløg, salt, peber og krydderurter.",
        "Bag i 35-40 min til kyllingen er gylden og gennemstegt.",
        "Kog risen og server sammen med det bagte. Drys evt. med frisk persille. 🌿",
      ],
    },
    ingredients: [
      { name: "Kyllingefilet", qty: "700g", url: "https://www.bilkatogo.dk/s?query=kyllingefilet" },
      { name: "Ris", qty: "400g", url: "https://www.bilkatogo.dk/s?query=ris" },
      { name: "Hvidløg", qty: "6 fed", url: "https://www.bilkatogo.dk/s?query=hvidloeg" },
      { name: "Løg", qty: "2 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Tomat", qty: "2 stk", url: "https://www.bilkatogo.dk/s?query=tomat" },
      { name: "Paprika", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=paprika" },
      { name: "Olivenolie", qty: "3 spsk", url: "https://www.bilkatogo.dk/s?query=olivenolie" },
    ],
  },
  {
    day: "Torsdag",
    dato: "04.06",
    emoji: "🐠",
    meal: "Rødspættefilet med citronsmør",
    sidedish: "Pomfritter",
    note: "Klassisk fiskeret",
    color: "#e0f7fa",
    accent: "#00695c",
    naering: {
      hel: { kcal: 2500, protein: 240, kulhy: 260, fedt: 95 },
      portion: { kcal: 625, protein: 60, kulhy: 65, fedt: 24 },
    },
    recipe: {
      tid: "35 min",
      svaerhed: "Let",
      intro: "Klassisk dansk fisk! 🐠 Rødspættefilet med duftende citronsmør og sprøde pomfritter. Let og lækkert!",
      trin: [
        "Tøer fiskefilleten fra fryseren hvis nødvendigt.",
        "Sætter pomfritter i ovnen eller frituren efter anvisning.",
        "Vender fiskefilleten i mel, salt og peber.",
        "Steger filleten i smør på panden, 2-3 min per side til gylden.",
        "Presser citron over filleten under stegning.",
        "Anretter fisken med pomfritter.",
        "Serverer med citronsnegle og evt. dild. 🍋",
      ],
    },
    ingredients: [
      { name: "Rødspættefilet", qty: "700g", url: "https://www.bilkatogo.dk/s?query=roedsphaette" },
      { name: "Pomfritter (frosne eller rå kartofler)", qty: "800g", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Citron", qty: "2 stk", url: "https://www.bilkatogo.dk/s?query=citron" },
      { name: "Smør", qty: "75g", url: "https://www.bilkatogo.dk/s?query=smor" },
      { name: "Mel", qty: "3 spsk", url: "https://www.bilkatogo.dk/s?query=mel" },
      { name: "Dild (evt.)", qty: "1 bundt", url: "https://www.bilkatogo.dk/s?query=dild" },
    ],
  },
  {
    day: "Fredag",
    dato: "05.06",
    emoji: "🎂",
    meal: "Ribeye steak",
    sidedish: "Bådekartofler",
    note: "GRUNDLOVSDAG + FARS DAG 🎂 — festligt valg!",
    color: "#fff5ee",
    accent: "#d32f2f",
    naering: {
      hel: { kcal: 3200, protein: 300, kulhy: 210, fedt: 140 },
      portion: { kcal: 800, protein: 75, kulhy: 53, fedt: 35 },
    },
    recipe: {
      tid: "40 min",
      svaerhed: "Let",
      intro: "Festlig fredag! 🎂 Græssted ribeye steak til Lars' fødselsdag og Grundlovsdag. Elegant og lækker!",
      trin: [
        "Kog bådekartofler i saltet vand ca. 20 min.",
        "Tag ribeye steak ud af køleskab 15-20 min før stegning.",
        "Krydr godt med salt og peber på begge sider.",
        "Varm panden op til meget høj temperatur (næsten røgende).",
        "Steg steaken 4-5 min per side til kødet er gennemvarmt (58°C indeni for medium).",
        "Lad steaken hvile i 5 min efter stegning — vigtig trin!",
        "Server med bådekartofler, smørklak og evt. tilbehør. Skål! 🥂",
      ],
    },
    ingredients: [
      { name: "Ribeye steak", qty: "800g", url: "https://www.bilkatogo.dk/s?query=ribeye" },
      { name: "Bådekartofler", qty: "1,2 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Smør", qty: "100g", url: "https://www.bilkatogo.dk/s?query=smor" },
      { name: "Hvidløg", qty: "3 fed", url: "https://www.bilkatogo.dk/s?query=hvidloeg" },
      { name: "Salt og peber", qty: "efter smag", url: "https://www.bilkatogo.dk/s?query=krydderier" },
    ],
  },
  {
    day: "Lørdag",
    dato: "06.06",
    emoji: "🌭",
    meal: "Grillpølser",
    sidedish: "Brød og salat",
    note: "Simon murer + klassefest aften — hurtig & praktisk",
    color: "#fff3e0",
    accent: "#e65100",
    naering: {
      hel: { kcal: 2300, protein: 110, kulhy: 320, fedt: 80 },
      portion: { kcal: 575, protein: 28, kulhy: 80, fedt: 20 },
    },
    recipe: {
      tid: "20 min",
      svaerhed: "Let",
      intro: "Hurtig lørdagsmad! 🌭 Grillpølser i brød med salat — simpel og familievenlig når der skal strammes op i hastarbejde.",
      trin: [
        "Tænder grillen eller panden op.",
        "Lægger pølserne på grillen eller i panden.",
        "Stegler 5-7 min, vender halvejs.",
        "Toast evt. brødene på grillen 1-2 min.",
        "Anretter pølser i brød med sennepe, ketchup og flødeskum.",
        "Serverer med frisk salat ved siden af.",
        "Nemt og lækkert! 🌭",
      ],
    },
    ingredients: [
      { name: "Grillpølser", qty: "8 stk", url: "https://www.bilkatogo.dk/s?query=grillpoelse" },
      { name: "Fuldkornbrød", qty: "1 pose", url: "https://www.bilkatogo.dk/s?query=broed" },
      { name: "Frisk salat", qty: "1 pose", url: "https://www.bilkatogo.dk/s?query=salat" },
      { name: "Sennepe", qty: "1 glas", url: "https://www.bilkatogo.dk/s?query=sennepe" },
      { name: "Ketchup", qty: "1 flaske", url: "https://www.bilkatogo.dk/s?query=ketchup" },
      { name: "Flødeskum (evt.)", qty: "1 tube", url: "https://www.bilkatogo.dk/s?query=flodeskum" },
    ],
  },
  {
    day: "Søndag",
    dato: "07.06",
    emoji: "🥩",
    meal: "Bøf med bløde løg og sovs",
    sidedish: "Kogte kartofler og hjemmelavet agurkesalat",
    note: "Klassisk dansk søndagsmad ♥️",
    color: "#fff5ee",
    accent: "#bf360c",
    naering: {
      hel: { kcal: 2900, protein: 280, kulhy: 200, fedt: 115 },
      portion: { kcal: 725, protein: 70, kulhy: 50, fedt: 29 },
    },
    recipe: {
      tid: "60 min",
      svaerhed: "Mellem",
      intro: "Klassisk dansk søndagsmad! ♥️ Møre oksebøffer med langsomme, karameliserede løg og rig sovs. En urkraft af gemytlighed.",
      trin: [
        "Kog kartofler i saltet vand ca. 20 min.",
        "Skær løg i tynde ringe — meget løg!",
        "Steger løgene langsomt i smør 20-25 min til de bliver sarte og karameliserede.",
        "Tager halvdelen af løgene ud og sætter til side.",
        "Lægger bøfferne i panden med den øvrige løg og rester af smør.",
        "Stegler bøfferne 3-4 min per side — må ikke blive alt for gennemstegt!",
        "Tager bøfferne ud og laver sovs i panden med fløde og fond.",
        "Laver agurkesalat: skiver agurker, tilsæt eddike, sukker og salt — lad trække 10 min.",
        "Serverer bøffer med kartofler, løg, sovs og agurkesalat. 🍽️",
      ],
    },
    ingredients: [
      { name: "Oksebøffer (tyksteg)", qty: "800g", url: "https://www.bilkatogo.dk/s?query=oksebef" },
      { name: "Kartofler", qty: "1,2 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Løg", qty: "5 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Gurke", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=gurke" },
      { name: "Eddike", qty: "1 dl", url: "https://www.bilkatogo.dk/s?query=eddike" },
      { name: "Sukker", qty: "2 spsk", url: "https://www.bilkatogo.dk/s?query=sukker" },
      { name: "Fløde", qty: "1 dl", url: "https://www.bilkatogo.dk/s?query=flode" },
      { name: "Kødfond", qty: "2 dl", url: "https://www.bilkatogo.dk/s?query=fond" },
      { name: "Smør", qty: "100g", url: "https://www.bilkatogo.dk/s?query=smor" },
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
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", opacity: 0.5 }}>Uge 23 · 2026</div>
            <div style={{ fontSize: 18, fontWeight: "bold" }}>Bruslund Madplan — 01.–07. juni 2026</div>
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
              <span style={{ fontWeight: "bold", fontSize: 15 }}>Indkobsliste — uge 23</span>
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
