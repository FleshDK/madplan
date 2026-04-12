import { useState } from "react";

// Madplan uge 16 · 2026 · 13.–18. april
// Genereret af MasterKOK 👨‍🍳 søndag 12. april 2026 kl. 08:00

const madplan = [
  {
    day: "Mandag",
    dato: "13. april",
    emoji: "🥩",
    meal: "Frikadeller af kalve-flæskefars med nye kartofler og brun sauce",
    color: "#fff8e1",
    accent: "#e67e22",
    bilkaTilbud: "Nye kartofler (Bilka) + Knorr sauce (Rema)",
    fryser: true,
    naering: {
      hel: { kcal: 3200, protein: 240, kulhy: 280, fedt: 120 },
      portion: { kcal: 800, protein: 60, kulhy: 70, fedt: 30 },
    },
    recipe: {
      tid: "35 min",
      svaerhed: "Let",
      intro: "Klassisk dansk hverdagsmad! Kalve-flæskefarsene fra fryseren laver vi om til saftige frikadeller. Brun sauce fra Knorr og nye kartofler. Lav ekstra frikadeller til tirsdag!",
      trin: [
        "Optø kalve-flæskefars natten over eller i koldt vand (1-2 timer).",
        "Bland farsen med 1 æg, 1 fintrevet løg, 2 spsk mel, salt, peber og lidt allehånde.",
        "Form store, flade frikadeller med en fugtig spiseske.",
        "Steg i rigeligt smør ved medium varme — ca. 5 min per side til gyldne.",
        "Lav brun sauce: følg Knorr-pose anvisning, tilsæt lidt sødmælk for fylde.",
        "Kog nye kartofler med skræl ca. 12-15 min i saltet vand.",
        "Server med kartofler, brun sauce og rødkål. Gem 4-5 frikadeller til tirsdag!",
      ],
    },
    ingredients: [
      { name: "Kalve-flæskefars (FRYSER! 🧊)", qty: "ca. 600g", url: "https://www.bilkatogo.dk/s?query=hakket+koed" },
      { name: "Nye kartofler (Bilka tilbud)", qty: "1 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Knorr brun sauce (Rema tilbud)", qty: "1-2 poser", url: "https://www.bilkatogo.dk/s?query=brun+sauce" },
      { name: "Æg", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=aeg" },
      { name: "Løg", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Hvedemel", qty: "2 spsk", url: "https://www.bilkatogo.dk/s?query=hvedemel" },
      { name: "Smør/Lurpak", qty: "75g", url: "https://www.bilkatogo.dk/s?query=lurpak" },
      { name: "Rødkål (glas, tilbehør)", qty: "1 glas", url: "https://www.bilkatogo.dk/s?query=roedkaal" },
    ],
  },
  {
    day: "Tirsdag",
    dato: "14. april",
    emoji: "🍽️",
    meal: "Frikadeller m. kartoffelsalat (rester fra mandag)",
    rester: true,
    resterFra: "Mandag",
    color: "#fdf2f8",
    accent: "#8e44ad",
    naering: {
      hel: { kcal: 2800, protein: 200, kulhy: 240, fedt: 100 },
      portion: { kcal: 700, protein: 50, kulhy: 60, fedt: 25 },
    },
    recipe: {
      tid: "15 min",
      svaerhed: "Let",
      intro: "Frikadellerne fra mandag er endnu bedre dagen efter! Vi laver en hurtig kartoffelsalat og er færdige på et kvarter.",
      trin: [
        "Varm frikadellerne i ovnen ved 180° i 10 min — de bliver sprøde igen!",
        "Bland kartofler fra mandag med creme fraiche, dijonsennep, hakket rødløg, persille.",
        "Krydr kartoffelsalaten med salt og peber.",
        "Server frikadeller med kartoffelsalat og lidt rødkål fra mandag.",
        "Færdigt på et kvarter — perfekt tirsdagsaftensmad! 💪",
      ],
    },
    ingredients: [
      { name: "Frikadeller (rester fra mandag)", qty: "4-5 stk", url: "https://www.bilkatogo.dk/s?query=hakket+koed" },
      { name: "Kartofler (rester fra mandag)", qty: "300-400g", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Creme fraiche 18%", qty: "1 dl", url: "https://www.bilkatogo.dk/s?query=creme+fraiche" },
      { name: "Dijonsennep", qty: "1 spsk", url: "https://www.bilkatogo.dk/s?query=dijonsennep" },
      { name: "Rødløg", qty: "½ stk", url: "https://www.bilkatogo.dk/s?query=roedloeg" },
      { name: "Persille (frisk eller tørret)", qty: "til drys", url: "https://www.bilkatogo.dk/s?query=persille" },
    ],
  },
  {
    day: "Onsdag",
    dato: "15. april",
    emoji: "🌮",
    meal: "Kyllingebryst strimler i tex mex wrap",
    color: "#eafaf1",
    accent: "#27ae60",
    bilkaTilbud: "Danpo kyllingebrystfilet (Bilka) + Rema Tex Mex kit",
    fryser: true,
    naering: {
      hel: { kcal: 2880, protein: 256, kulhy: 240, fedt: 80 },
      portion: { kcal: 720, protein: 64, kulhy: 60, fedt: 20 },
    },
    recipe: {
      tid: "25 min",
      svaerhed: "Let",
      intro: "Kyllingebrysterne fra fryseren bliver til saftige tex mex strimler! Rema har Tex Mex kit på tilbud. Alle bygger selv — hyggeligt onsdagsaftensydisk!",
      trin: [
        "Optø kyllingebrysterne på forhånd (natten over i køleskabet er bedst).",
        "Skær kyllingebryst i strimler. Krydr med tacokrydderi, paprika, salt og peber.",
        "Steg strimlerne ved høj varme i olie ca. 4-5 min til gyldne og gennemstegte.",
        "Varm tortillaer i tør pande 30 sek per side.",
        "Sæt tilbehør på bordet: guacamole, salsa, majs, rødløg, romaine.",
        "Alle bygger deres egne wraps — det er den bedste del! 🌮",
      ],
    },
    ingredients: [
      { name: "Kyllingebryst (FRYSER! 🧊)", qty: "ca. 700g", url: "https://www.bilkatogo.dk/s?query=kyllingebryst" },
      { name: "Rema Tex Mex kit (tortillas + krydderi)", qty: "1 kit", url: "https://www.bilkatogo.dk/s?query=tex+mex" },
      { name: "Guacamole (færdig)", qty: "1 bæger", url: "https://www.bilkatogo.dk/s?query=guacamole" },
      { name: "Majs (dåse)", qty: "1 dåse", url: "https://www.bilkatogo.dk/s?query=majs" },
      { name: "Romaine/isbergsalat", qty: "½ hoved", url: "https://www.bilkatogo.dk/s?query=salat" },
      { name: "Rødløg", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=roedloeg" },
      { name: "Creme fraiche 18%", qty: "1 bøtte", url: "https://www.bilkatogo.dk/s?query=creme+fraiche" },
      { name: "Tapastomater (Rema tilbud)", qty: "200g", url: "https://www.bilkatogo.dk/s?query=tomater" },
    ],
  },
  {
    day: "Torsdag",
    dato: "16. april",
    emoji: "🐟",
    meal: "Laks i ovn med spinat og nye kartofler",
    color: "#e8f4f8",
    accent: "#2980b9",
    bilkaTilbud: "Ferske laksefileter (Rema) + spinat (Rema) + nye kartofler (Bilka)",
    naering: {
      hel: { kcal: 2640, protein: 232, kulhy: 160, fedt: 112 },
      portion: { kcal: 660, protein: 58, kulhy: 40, fedt: 28 },
    },
    recipe: {
      tid: "30 min (heraf 20 min i ovnen)",
      svaerhed: "Let",
      intro: "Laks er sundt, hurtigt og smager fantastisk. Rema har ferske laksefileter på tilbud. Med frisk spinat og nye kartofler er det ugens sundeste ret!",
      trin: [
        "Forvarm ovnen til 200°. Kog nye kartofler i saltet vand ca. 12-15 min.",
        "Læg laksefileter i et ovnfast fad. Krydr med citron, dild, salt og peber.",
        "Dryp lidt olivenolie over. Bag 18-20 min til fisken flager let.",
        "Varm spinat i en pande med lidt smør og hvidløg — 2-3 min til visnet.",
        "Krydr spinaten med salt, peber og citronsaft.",
        "Server laks, spinat og kartofler. Drys frisk dild over. Sundt og lækkert! 🐟",
      ],
    },
    ingredients: [
      { name: "Ferske laksefileter (Rema tilbud)", qty: "4 stk ca. 600g", url: "https://www.bilkatogo.dk/s?query=laks" },
      { name: "Spinat (Rema tilbud)", qty: "200g pose", url: "https://www.bilkatogo.dk/s?query=spinat" },
      { name: "Nye kartofler (Bilka tilbud)", qty: "800g", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Citron", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=citron" },
      { name: "Dild (frisk eller tørret)", qty: "1 bundt", url: "https://www.bilkatogo.dk/s?query=dild" },
      { name: "Hvidløg", qty: "2 fed", url: "https://www.bilkatogo.dk/s?query=hvidloeg" },
      { name: "Olivenolie", qty: "2 spsk", url: "https://www.bilkatogo.dk/s?query=olivenolie" },
      { name: "Smør/Lurpak", qty: "25g", url: "https://www.bilkatogo.dk/s?query=lurpak" },
    ],
  },
  {
    day: "Fredag",
    dato: "17. april",
    emoji: "🍖",
    meal: "Frilandsgris spareribs med coleslaw og brød",
    color: "#fdedec",
    accent: "#c0392b",
    bilkaTilbud: "Frilandsgris spareribs (Rema tilbud!)",
    naering: {
      hel: { kcal: 3600, protein: 256, kulhy: 160, fedt: 200 },
      portion: { kcal: 900, protein: 64, kulhy: 40, fedt: 50 },
    },
    recipe: {
      tid: "2,5 timer (passer sig selv i ovnen!)",
      svaerhed: "Let — bare tålmodighed!",
      intro: "Fredag er ribs-dag! Rema har frilandsgris spareribs på tilbud. Low and slow i ovnen — smid dem ind og hent dem ud 2,5 time senere møre og saftige. Det er fredagskomfort i verdensklasse!",
      trin: [
        "Forvarm ovnen til 150°. Dup ribsene tørre med køkkenrulle.",
        "Gnid ribs med BBQ-krydderi: brun sukker, paprika, hvidløgspulver, salt, peber.",
        "Pak ribsene stramt ind i aluminiumsfolie. Bag 2 timer ved 150°.",
        "Pak folien op, pensl med BBQ-sauce. Skru op til 220° og bag 15-20 min.",
        "Lav coleslaw imens: snit hvidkål fint, bland med revet gulerod, majs, mayo.",
        "Server med godt landbrød og rigelig BBQ-sauce. God fredag! 🍖🎉",
      ],
    },
    ingredients: [
      { name: "Frilandsgris spareribs (Rema tilbud!)", qty: "1,5 kg", url: "https://www.bilkatogo.dk/s?query=spareribs" },
      { name: "BBQ-sauce", qty: "1 flaske", url: "https://www.bilkatogo.dk/s?query=bbq+sauce" },
      { name: "Hvidkål (til coleslaw)", qty: "1/4 hoved", url: "https://www.bilkatogo.dk/s?query=hvidkaal" },
      { name: "Gulerødder (til coleslaw)", qty: "2 stk", url: "https://www.bilkatogo.dk/s?query=gulerod" },
      { name: "Mayonnaise", qty: "3 spsk", url: "https://www.bilkatogo.dk/s?query=mayo" },
      { name: "Majs (dåse)", qty: "1/2 dåse", url: "https://www.bilkatogo.dk/s?query=majs" },
      { name: "Landbrød (Hatting, Rema tilbud)", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=broed" },
      { name: "Brun sukker + paprika + krydderier", qty: "til rub", url: "https://www.bilkatogo.dk/s?query=krydderier" },
    ],
  },
  {
    day: "Lørdag",
    dato: "18. april - 3 pers.!",
    emoji: "🌭",
    meal: "Grillpølser + pizza til 3 — Maya er på personaledag",
    color: "#f0f8ff",
    accent: "#3498db",
    bilkaTilbud: "Dr. Oetker Suprema pizza (Rema) + Steff Houlberg pølser (Bilka)",
    fryser: true,
    personerCount: 3,
    naering: {
      hel: { kcal: 2700, protein: 120, kulhy: 300, fedt: 120 },
      portion: { kcal: 900, protein: 40, kulhy: 100, fedt: 40 },
    },
    recipe: {
      tid: "20 min",
      svaerhed: "Meget let",
      intro: "⚠️ Maya er på personaledag og er IKKE hjemme! Lars, Louise og Karoline får hygge-aften med grillpølser fra fryseren og Dr. Oetker pizza fra Rema. Nem, god og lørdag-hyggelig!",
      trin: [
        "Tag grillpølserne fra fryseren ud et par timer i forvejen (eller tø op i koldt vand).",
        "Forvarm ovnen til 220° (til pizza).",
        "Grill eller steg pølserne i panden til gyldne og gennemvarme — ca. 8-10 min.",
        "Smid pizzaen i ovnen samtidig — følg anvisning på pakken (typisk 12-15 min).",
        "Skær pizzaen i stykker og server med kold sodavand og grillpølserne.",
        "Tænd en god film og nyd det! 🎬 God aften til de 3! 🎉",
      ],
    },
    ingredients: [
      { name: "Grillpølser (FRYSER! 🧊)", qty: "1 pk (til 3 pers.)", url: "https://www.bilkatogo.dk/s?query=groelpoelser" },
      { name: "Dr. Oetker Suprema pizza (Rema tilbud)", qty: "1-2 stk", url: "https://www.bilkatogo.dk/s?query=pizza" },
      { name: "Hotdog brød (til pølser)", qty: "3-4 stk", url: "https://www.bilkatogo.dk/s?query=hotdog+broed" },
      { name: "Ketchup og sennep", qty: "til servering", url: "https://www.bilkatogo.dk/s?query=ketchup" },
      { name: "Ristede løg (til pølser)", qty: "1 pose", url: "https://www.bilkatogo.dk/s?query=ristede+loeg" },
      { name: "Sodavand (fx Pepsi Max, Rema tilbud)", qty: "1,5L", url: "https://www.bilkatogo.dk/s?query=sodavand" },
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
            <div style={{ fontSize: 18, fontWeight: "bold" }}>Bruslund Madplan — 13.–18. april</div>
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
                  {d.fryser && !d.rester && !done && <span style={{ position: "absolute", top: -6, right: -6, fontSize: 11 }}>🧊</span>}
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
                  {d.fryser && !d.rester && <span style={{ fontSize: 11, background: "rgba(255,255,255,0.25)", padding: "2px 8px", borderRadius: 20 }}>🧊 Fryservare!</span>}
                  {d.personerCount && <span style={{ fontSize: 11, background: "rgba(255,100,0,0.4)", padding: "2px 8px", borderRadius: 20 }}>⚠️ {d.personerCount} pers. kun!</span>}
                </div>
                <div style={{ fontSize: 14, opacity: 0.9, fontStyle: "italic", marginTop: 4 }}>{d.meal}</div>
                {d.bilkaTilbud && (
                  <div style={{ marginTop: 6, fontSize: 11, background: "rgba(255,255,255,0.15)", padding: "4px 10px", borderRadius: 20, display: "inline-block" }}>
                    Tilbud: {d.bilkaTilbud}
                  </div>
                )}
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
                  <span style={{ fontSize: 12, background: "rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: 20 }}>{d.personerCount || 4} personer</span>
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
            <div style={{ background: "#e8f5e9", border: "2px solid #27ae60", borderRadius: 12, padding: "12px 16px", marginBottom: 16 }}>
              <div style={{ fontWeight: "bold", color: "#27ae60", marginBottom: 4 }}>🧊 Brug fryseren!</div>
              <div style={{ fontSize: 13, color: "#555" }}>Kalve-flæskefars (man), Kyllingebryst (ons), Grillpølser (lør) — alle fra fryseren!</div>
            </div>
            <div style={{ background: "#fff3e0", border: "2px solid #e67e22", borderRadius: 12, padding: "12px 16px", marginBottom: 20 }}>
              <div style={{ fontWeight: "bold", color: "#e67e22", marginBottom: 4 }}>⚠️ Lørdag 18/4 — KUN 3 PERSONER</div>
              <div style={{ fontSize: 13, color: "#555" }}>Maya er på personaledag. Lav mad til Lars, Louise og Karoline.</div>
            </div>
            {madplan.map((day, di) => (
              <div key={di} style={{ marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 18 }}>{day.emoji}</span>
                  <span style={{ fontSize: 13, fontWeight: "bold", color: day.accent }}>{day.day} — {day.meal.length > 45 ? day.meal.slice(0, 45) + "..." : day.meal}</span>
                  {day.rester && <span style={{ fontSize: 11, background: "#f0f0f0", color: "#666", padding: "2px 8px", borderRadius: 20 }}>Rester</span>}
                  {day.fryser && !day.rester && <span style={{ fontSize: 11, background: "#e8f5e9", color: "#27ae60", padding: "2px 8px", borderRadius: 20 }}>🧊 Fryser</span>}
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
