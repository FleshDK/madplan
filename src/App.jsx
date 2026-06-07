import { useState } from "react";

// Madplan uge 24 · 2026 · 08. juni – 14. juni
// Opdateret af MasterKOK 👨‍🍳 søndag 07. juni 2026
// Fryseren tom — Bilka-tilbud ikke tilgængelige. Mandag hurtig ret (Alberte piercing kl. 16:20). Klassisk dansk madplan resten af ugen.

const madplan = [
  {
    day: "Mandag",
    dato: "08.06",
    emoji: "🍝",
    meal: "Pasta Carbonara",
    sidedish: "Brød",
    note: "⏰ HURTIG RET — Alberte piercing kl. 16:20. Pasta er 15 min. Serveres kl. 18:00.",
    color: "#fffde7",
    accent: "#f57f17",
    naering: {
      hel: { kcal: 2800, protein: 120, kulhy: 340, fedt: 120 },
      portion: { kcal: 700, protein: 30, kulhy: 85, fedt: 30 },
    },
    recipe: {
      tid: "15 min",
      svaerhed: "Let",
      intro: "Hurtig og lækker Pasta Carbonara! 🍝 Cremede æg, sprød bacon og pasta — klassisk italiensk på 15 minutter. Perfekt til en travl mandag.",
      trin: [
        "Kog pasta i rigeligt saltet vand efter anvisning.",
        "Steg bacon i en tør pande til sprød og gylden.",
        "Pisk æg og et lille skvæt fløde sammen i en skål.",
        "Riv parmesanost og tilsæt til æggeblandingen.",
        "Hæld kogt pasta direkte over til bacon på panden (panden slukket).",
        "Tilsæt æggemassen og rør hurtigt — varmen fra pastaen koger ægget forsigtigt.",
        "Smag til med salt og masser af sort peber. Server straks med godt brød! 🍞",
      ],
    },
    ingredients: [
      { name: "Pasta (spaghetti eller rigatoni)", qty: "400g", url: "https://www.bilkatogo.dk/s?query=pasta" },
      { name: "Bacon", qty: "200g", url: "https://www.bilkatogo.dk/s?query=bacon" },
      { name: "Æg", qty: "4 stk", url: "https://www.bilkatogo.dk/s?query=aeg" },
      { name: "Parmesanost", qty: "50g", url: "https://www.bilkatogo.dk/s?query=parmesan" },
      { name: "Fløde", qty: "1 dl", url: "https://www.bilkatogo.dk/s?query=flode" },
      { name: "Brød", qty: "1 flute", url: "https://www.bilkatogo.dk/s?query=broed" },
    ],
  },
  {
    day: "Tirsdag",
    dato: "09.06",
    emoji: "🍝",
    meal: "Pasta Carbonara (rester fra mandag)",
    sidedish: "Grøn salat",
    note: "Rester fra mandag — dag efter-regel ✓",
    color: "#fffde7",
    accent: "#f57f17",
    naering: {
      hel: { kcal: 2600, protein: 110, kulhy: 310, fedt: 110 },
      portion: { kcal: 650, protein: 28, kulhy: 78, fedt: 28 },
    },
    recipe: {
      tid: "10 min",
      svaerhed: "Let",
      intro: "Smart genbrug! 💚 Rester fra mandag varmes forsigtigt op. Frisk grøn salat giver et lækkert modspil.",
      trin: [
        "Varm pasta-resterne langsomt op på panden ved lav varme.",
        "Tilsæt en smule fløde for at gøre sovsen blød igen.",
        "Rør forsigtigt til pastaen er varm.",
        "Skyl salaten og skær grøntsager i stykker.",
        "Lav en simpel dressing af olie, eddike, salt og peber.",
        "Server carbonara med frisk grøn salat ved siden af. 🥗",
      ],
    },
    ingredients: [
      { name: "Rester fra mandag (Carbonara)", qty: "alle rester", url: "https://www.bilkatogo.dk/s?query=pasta" },
      { name: "Fløde (lidt ekstra)", qty: "0,5 dl", url: "https://www.bilkatogo.dk/s?query=flode" },
      { name: "Grøn salat (blandet)", qty: "1 pose", url: "https://www.bilkatogo.dk/s?query=salat" },
      { name: "Olivenolie", qty: "2 spsk", url: "https://www.bilkatogo.dk/s?query=olivenolie" },
      { name: "Eddike", qty: "1 spsk", url: "https://www.bilkatogo.dk/s?query=eddike" },
    ],
  },
  {
    day: "Onsdag",
    dato: "10.06",
    emoji: "🥩",
    meal: "Millionbøf",
    sidedish: "Kartoflemos",
    note: "Klassisk dansk — hakket oksekød med stuvede løg og sovs",
    color: "#fff5ee",
    accent: "#bf360c",
    naering: {
      hel: { kcal: 3000, protein: 240, kulhy: 280, fedt: 120 },
      portion: { kcal: 750, protein: 60, kulhy: 70, fedt: 30 },
    },
    recipe: {
      tid: "45 min",
      svaerhed: "Let",
      intro: "Klassisk dansk hverdagsmad! 🥩 Millionbøf med hakket oksekød, bløde løg og rig sovs — server med dejlig kartoflemos.",
      trin: [
        "Svits hakket oksekød godt brunet på panden.",
        "Tilsæt fintsnittet løg og svits med til blødt og gyldent.",
        "Tilsæt bouillon og lad det simre 15-20 min.",
        "Tilsæt fløde og smag til med salt og peber.",
        "Kog kartofler møre i saltet vand (ca. 20 min).",
        "Mos kartofler med smør og fløde til cremet kartoflemos.",
        "Server millionbøf over kartoffelmos med masser af sovs. 🍽️",
      ],
    },
    ingredients: [
      { name: "Hakket oksekød", qty: "600g", url: "https://www.bilkatogo.dk/s?query=hakket+oksekoed" },
      { name: "Løg", qty: "3 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Bouillon", qty: "4 dl", url: "https://www.bilkatogo.dk/s?query=bouillon" },
      { name: "Fløde", qty: "2 dl", url: "https://www.bilkatogo.dk/s?query=flode" },
      { name: "Kartofler (til mos)", qty: "1,2 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Smør", qty: "75g", url: "https://www.bilkatogo.dk/s?query=smor" },
    ],
  },
  {
    day: "Torsdag",
    dato: "11.06",
    emoji: "🥩",
    meal: "Millionbøf (rester fra onsdag)",
    sidedish: "Kartoflemos",
    note: "Restemad — opvarmet fra onsdag — dag efter-regel ✓",
    color: "#fff5ee",
    accent: "#bf360c",
    naering: {
      hel: { kcal: 2800, protein: 220, kulhy: 260, fedt: 110 },
      portion: { kcal: 700, protein: 55, kulhy: 65, fedt: 28 },
    },
    recipe: {
      tid: "20 min",
      svaerhed: "Let",
      intro: "Smart madspild! 💚 Millionbøf-rester fra onsdag smager endnu bedre næste dag — sovsen trækker og fordybes.",
      trin: [
        "Varm millionbøf-resterne op i en gryde ved middel varme.",
        "Tilsæt lidt bouillon eller fløde hvis sovsen er for tyk.",
        "Rør jævnligt og lad det simre 5-10 min.",
        "Kog nye kartofler til kartoflemos (20 min).",
        "Mos kartofler med smør og lidt fløde.",
        "Server de varme rester over den friske mos. 🍽️",
      ],
    },
    ingredients: [
      { name: "Rester fra onsdag (Millionbøf)", qty: "alle rester", url: "https://www.bilkatogo.dk/s?query=hakket+oksekoed" },
      { name: "Kartofler (til mos)", qty: "1,2 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Smør", qty: "50g", url: "https://www.bilkatogo.dk/s?query=smor" },
      { name: "Fløde (lidt ekstra)", qty: "1 dl", url: "https://www.bilkatogo.dk/s?query=flode" },
    ],
  },
  {
    day: "Fredag",
    dato: "12.06",
    emoji: "🐟",
    meal: "Fiskefilet med Persillesovs",
    sidedish: "Kogte kartofler",
    note: "Fredag er fiskdag! Klassisk dansk fiskemad med persillesovs.",
    color: "#e0f7fa",
    accent: "#00695c",
    naering: {
      hel: { kcal: 2200, protein: 200, kulhy: 240, fedt: 60 },
      portion: { kcal: 550, protein: 50, kulhy: 60, fedt: 15 },
    },
    recipe: {
      tid: "35 min",
      svaerhed: "Let",
      intro: "Klassisk dansk fredag! 🐟 Sprød fiskefilet med hjemmelavet persillesovs og kogte kartofler. Enkelt, sundt og dejligt.",
      trin: [
        "Kog kartofler i saltet vand ca. 20 min til møre.",
        "Optø fiskefilet hvis frossen — dup tør med køkkenrulle.",
        "Vend filet i mel, salt og peber.",
        "Steg fiskefilet i smør på panden, 3-4 min per side til gylden.",
        "Lav persillesovs: smelt smør, tilsæt mel og rør til en opbagning.",
        "Tilsæt mælk lidt ad gangen under piskning — kog til cremet sovs.",
        "Tilsæt masser af hakket frisk persille, salt og peber.",
        "Server fisken med kogte kartofler og rig persillesovs. 🍽️",
      ],
    },
    ingredients: [
      { name: "Fiskefilet (torsk eller lignende)", qty: "700g", url: "https://www.bilkatogo.dk/s?query=fiskefilet" },
      { name: "Kartofler", qty: "1,2 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Frisk persille", qty: "1 bundt", url: "https://www.bilkatogo.dk/s?query=persille" },
      { name: "Smør", qty: "100g", url: "https://www.bilkatogo.dk/s?query=smor" },
      { name: "Mel", qty: "3 spsk", url: "https://www.bilkatogo.dk/s?query=mel" },
      { name: "Mælk", qty: "4 dl", url: "https://www.bilkatogo.dk/s?query=maelk" },
      { name: "Salt og peber", qty: "efter smag", url: "https://www.bilkatogo.dk/s?query=krydderier" },
    ],
  },
  {
    day: "Lørdag",
    dato: "13.06",
    emoji: "🍔",
    meal: "Hjemmelavede Burgere",
    sidedish: "Pomfritter",
    note: "Weekend hygge — burgere med salat, tomat, løg og ost (tilladt på burger!)",
    color: "#fff3e0",
    accent: "#e65100",
    naering: {
      hel: { kcal: 3200, protein: 200, kulhy: 320, fedt: 140 },
      portion: { kcal: 800, protein: 50, kulhy: 80, fedt: 35 },
    },
    recipe: {
      tid: "40 min",
      svaerhed: "Let",
      intro: "Lørdagshygge! 🍔 Hjemmelavede burgere med sprøde pomfritter — form bollerne selv og steg dem perfekte. Ost er tilladt på burger!",
      trin: [
        "Forvarm ovnen til 220°C til pomfritter.",
        "Skær kartofler i stave og krydr med olie, salt og peber.",
        "Bag pomfritter i ovnen 30-35 min, vend halvejs.",
        "Form hakket oksekød til 4 flade burgerboller — krydr med salt og peber.",
        "Steg burgererne på varm pande, 3-4 min per side.",
        "Læg ost på de sidste 2 min så det smelter.",
        "Anret burgere i buns med salat, tomat, løg og din yndlingsdressing.",
        "Server med de sprøde pomfritter. Velbekomme! 🍟",
      ],
    },
    ingredients: [
      { name: "Hakket oksekød (til burgere)", qty: "600g", url: "https://www.bilkatogo.dk/s?query=hakket+oksekoed" },
      { name: "Burgerbuns", qty: "4 stk", url: "https://www.bilkatogo.dk/s?query=burgerbun" },
      { name: "Kartofler til pomfritter", qty: "1 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Salat", qty: "1/2 hoved", url: "https://www.bilkatogo.dk/s?query=salat" },
      { name: "Tomat", qty: "2 stk", url: "https://www.bilkatogo.dk/s?query=tomat" },
      { name: "Løg", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Ost (burger-skiver)", qty: "4 skiver", url: "https://www.bilkatogo.dk/s?query=burgerkase" },
    ],
  },
  {
    day: "Søndag",
    dato: "14.06",
    emoji: "🍗",
    meal: "Kyllingefilet i Ovn",
    sidedish: "Ris",
    note: "Søndagsmad — kylling med krydderier, bagte grøntsager og ris",
    color: "#f3e5f5",
    accent: "#7b1fa2",
    naering: {
      hel: { kcal: 2600, protein: 220, kulhy: 280, fedt: 75 },
      portion: { kcal: 650, protein: 55, kulhy: 70, fedt: 19 },
    },
    recipe: {
      tid: "50 min",
      svaerhed: "Let",
      intro: "Klassisk søndagsmad! 🍗 Saftige kyllingefileter i ovnen med krydrede grøntsager og fluffy ris. Hele familien er glad!",
      trin: [
        "Forvarm ovnen til 200°C.",
        "Skær kyllingefileterne i mundrette stykker.",
        "Hak hvidløg fint og skær paprika og grøntsager i stykker.",
        "Bland kylling og grøntsager i ildfast fad.",
        "Drys med olivenolie, hvidløg, paprika, salt, peber og krydderurter.",
        "Bag i 35-40 min til kyllingen er gylden og gennemstegt.",
        "Kog risen efter anvisning (ca. 18 min).",
        "Server kylling og grøntsager over risen med masser af saft fra fadet. 🌿",
      ],
    },
    ingredients: [
      { name: "Kyllingefilet", qty: "700g", url: "https://www.bilkatogo.dk/s?query=kyllingefilet" },
      { name: "Ris", qty: "400g", url: "https://www.bilkatogo.dk/s?query=ris" },
      { name: "Paprika", qty: "2 stk", url: "https://www.bilkatogo.dk/s?query=paprika" },
      { name: "Hvidløg", qty: "4 fed", url: "https://www.bilkatogo.dk/s?query=hvidloeg" },
      { name: "Grøntsager (blanding)", qty: "300g", url: "https://www.bilkatogo.dk/s?query=grontsager" },
      { name: "Olivenolie", qty: "3 spsk", url: "https://www.bilkatogo.dk/s?query=olivenolie" },
      { name: "Krydderurter (timian/rosmarin)", qty: "efter smag", url: "https://www.bilkatogo.dk/s?query=krydderurter" },
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
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", opacity: 0.5 }}>Uge 24 · 2026</div>
            <div style={{ fontSize: 18, fontWeight: "bold" }}>Bruslund Madplan — 08.–14. juni 2026</div>
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
              <span style={{ fontWeight: "bold", fontSize: 15 }}>Indkøbsliste — uge 24</span>
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
