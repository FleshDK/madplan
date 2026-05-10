import { useState } from "react";

// Madplan uge 20 · 2026 · 11. maj – 17. maj
// Opdateret af Odin 🪬 søndag 10. maj 2026
// Baseret på Bilka tilbud uge 20 + familiens ønsker

const madplan = [
  {
    day: "Mandag",
    dato: "11.05",
    emoji: "🍗",
    meal: "Kyllingefilet i ovn med grøntsager og hvidløgssmør",
    color: "#fdf2e9",
    accent: "#d17a2f",
    naering: {
      hel: { kcal: 2800, protein: 240, kulhy: 220, fedt: 95 },
      portion: { kcal: 700, protein: 60, kulhy: 55, fedt: 24 },
    },
    recipe: {
      tid: "50 min",
      svaerhed: "Let",
      intro: "Frisk start på ugen! Møre kyllingefileter med røstede grøntsager og hvidløgssmør. Nem og smagsfuld! 🍗",
      trin: [
        "Forvarm ovnen til 200°C.",
        "Skær kyllingefileter i mundfulde stykker.",
        "Læg dem i ildfast fad med snittede løg, hvidløg og grøntsager.",
        "Drys med olivenolie, salt og peber.",
        "Bag i 40-45 min til kyllingen er mørt og gylden.",
        "Blan smør og hakket hvidløg sammen til smør.",
        "Server med ris og hvidløgssmørret. Lækkert! 🍗",
      ],
    },
    ingredients: [
      { name: "Kyllingefilet", qty: "700g", url: "https://www.bilkatogo.dk/s?query=kyllingefilet" },
      { name: "Ris", qty: "400g", url: "https://www.bilkatogo.dk/s?query=ris" },
      { name: "Løg", qty: "2 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Hvidløg", qty: "4 fed", url: "https://www.bilkatogo.dk/s?query=hvidloeg" },
      { name: "Grøntsager (blandet)", qty: "ca. 500g", url: "https://www.bilkatogo.dk/s?query=gront" },
      { name: "Olivenolie", qty: "3 spsk", url: "https://www.bilkatogo.dk/s?query=olivenolie" },
      { name: "Smør", qty: "50g", url: "https://www.bilkatogo.dk/s?query=smor" },
    ],
  },
  {
    day: "Tirsdag",
    dato: "12.05",
    emoji: "🍝",
    meal: "Lasagne (Mayas ønske!)",
    color: "#fff3e0",
    accent: "#e65100",
    naering: {
      hel: { kcal: 3200, protein: 270, kulhy: 310, fedt: 115 },
      portion: { kcal: 800, protein: 68, kulhy: 78, fedt: 29 },
    },
    recipe: {
      tid: "90 min",
      svaerhed: "Middel",
      intro: "Mayas favorit! 🍝 Klassisk lasagne med kødsovs, bechamel og masser af ost. Tager tid men er det hele værd!",
      trin: [
        "Forvarm ovnen til 200°C.",
        "Brun hakket oksekød med løg og hvidløg i pande.",
        "Tilsæt dåsetomater, tomatpuré og fond. Lad simre 20 min.",
        "Lav bechamelsovs: smelt smør, rør mel i, tilsæt mælk lidt ad gangen til glat sovs.",
        "Krydr bechamel med salt, peber og muskatnød.",
        "Byg lasagnen i ildfast fad: pasta, kødsovs, bechamel — gentag lag.",
        "Afslut med bechamel og revet ost på toppen.",
        "Bag i 35-40 min til gylden og boblende. Lad hvile 10 min før servering. 🍝",
      ],
    },
    ingredients: [
      { name: "Hakket oksekød (tilbud)", qty: "600g", url: "https://www.bilkatogo.dk/s?query=hakket+koed" },
      { name: "Lasagneplader", qty: "250g", url: "https://www.bilkatogo.dk/s?query=lasagne" },
      { name: "Dåsetomater", qty: "2 dåser", url: "https://www.bilkatogo.dk/s?query=daasetomater" },
      { name: "Tomatpuré", qty: "2 spsk", url: "https://www.bilkatogo.dk/s?query=tomatpure" },
      { name: "Løg", qty: "2 stk", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Hvidløg", qty: "3 fed", url: "https://www.bilkatogo.dk/s?query=hvidloeg" },
      { name: "Smør", qty: "75g", url: "https://www.bilkatogo.dk/s?query=smor" },
      { name: "Mel", qty: "4 spsk", url: "https://www.bilkatogo.dk/s?query=mel" },
      { name: "Mælk", qty: "6 dl", url: "https://www.bilkatogo.dk/s?query=maelk" },
      { name: "Revet ost", qty: "200g", url: "https://www.bilkatogo.dk/s?query=revet+ost" },
      { name: "Kødfond", qty: "2 dl", url: "https://www.bilkatogo.dk/s?query=fond" },
    ],
  },
  {
    day: "Onsdag",
    dato: "13.05",
    emoji: "🍝",
    meal: "Rester fra tirsdag (lasagne)",
    color: "#fff3e0",
    accent: "#e65100",
    naering: {
      hel: { kcal: 3000, protein: 250, kulhy: 290, fedt: 105 },
      portion: { kcal: 750, protein: 63, kulhy: 73, fedt: 26 },
    },
    recipe: {
      tid: "15 min",
      svaerhed: "Let",
      intro: "Rester fra tirsdag! Lasagne smager faktisk endnu bedre dagen efter. Bare varm op og nyd! 🍝",
      trin: [
        "Forvarm ovnen til 180°C.",
        "Læg lasagnerester i ildfast fad, dæk evt. med folie.",
        "Varm op i 20 min til gennemvarm og boblende.",
        "Kan også varmes i mikrobølgeovn i 4-5 min.",
        "Server med frisk salat hvis ønskes. Nemt og lækkert! 🍝",
      ],
    },
    ingredients: [
      { name: "Lasagne (rester fra tirsdag)", qty: "hele fadet", url: "https://www.bilkatogo.dk/s?query=lasagne" },
      { name: "Evt. frisk salat", qty: "1 pose", url: "https://www.bilkatogo.dk/s?query=salat" },
    ],
  },
  {
    day: "Torsdag",
    dato: "14.05",
    emoji: "🚗",
    meal: "Ingen aftensmad — besøg hos svigermor",
    color: "#f3f3f3",
    accent: "#888888",
    naering: {
      hel: { kcal: 0, protein: 0, kulhy: 0, fedt: 0 },
      portion: { kcal: 0, protein: 0, kulhy: 0, fedt: 0 },
    },
    recipe: {
      tid: "—",
      svaerhed: "Let",
      intro: "Familien er i Nykøbing Mors og besøger svigermor! 🚗 Kristi Himmelfartsdag — ingen aftensmad hjemme. God tur! 🙌",
      trin: [
        "Kør sikkert til Nykøbing Mors!",
        "Husk: Bilka er LUKKET denne dag.",
        "Nyd turen og besøget hos svigermor. 🧓",
      ],
    },
    ingredients: [
      { name: "God rejse!", qty: "—", url: "https://www.bilka.dk" },
    ],
  },
  {
    day: "Fredag",
    dato: "15.05",
    emoji: "🐟",
    meal: "Fiskefileter med persillesovs og citron",
    color: "#e1f5fe",
    accent: "#0277bd",
    naering: {
      hel: { kcal: 2400, protein: 280, kulhy: 160, fedt: 70 },
      portion: { kcal: 600, protein: 70, kulhy: 40, fedt: 18 },
    },
    recipe: {
      tid: "35 min",
      svaerhed: "Let",
      intro: "Fredagsfisk! 🐟 Møre fiskefileter med frisk persillesovs og citron — klassisk dansk!",
      trin: [
        "Kog kogte kartofler i saltet vand.",
        "Tørr fiskefilleter og krydr med salt og peber.",
        "Steg dem kort i pande med smør på begge sider, 3-4 min per side.",
        "Lav persillesovs: smelt smør og tilsæt fløde og hakket persille.",
        "Tilsæt citronjuice og smag til med salt og peber.",
        "Læg fiskefilleten på tallerken med kartofler.",
        "Hæld persillesovsen over. Virkelig lækkert! 🐟",
      ],
    },
    ingredients: [
      { name: "Fiskefilet (frossen)", qty: "700g", url: "https://www.bilkatogo.dk/s?query=fiskefillet" },
      { name: "Kogte kartofler", qty: "1,5 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Smør", qty: "75g", url: "https://www.bilkatogo.dk/s?query=smor" },
      { name: "Fløde", qty: "2 dl", url: "https://www.bilkatogo.dk/s?query=flode" },
      { name: "Persille (frisk)", qty: "1 bundt", url: "https://www.bilkatogo.dk/s?query=persille" },
      { name: "Citron", qty: "1-2 stk", url: "https://www.bilkatogo.dk/s?query=citron" },
    ],
  },
  {
    day: "Lørdag",
    dato: "16.05",
    emoji: "🍔",
    meal: "Hjemmelavede burgere med bacon",
    color: "#f5deb3",
    accent: "#8b4513",
    naering: {
      hel: { kcal: 3100, protein: 280, kulhy: 260, fedt: 110 },
      portion: { kcal: 775, protein: 70, kulhy: 65, fedt: 28 },
    },
    recipe: {
      tid: "60 min",
      svaerhed: "Middel",
      intro: "Weekendhygge! 🍔 Hjemmelavede burgere med sprødt bacon — en vinder!",
      trin: [
        "Steg pomfritter efter anvisning (eller bådekartofler efter valg).",
        "Bland hakket oksekød med salt, peber og evt. løg.",
        "Form kødet i 4 patties (ca. 150g hver).",
        "Steg burgers i het pande 3-4 min per side til medium-rare.",
        "Steg bacon til sprødt.",
        "Toaster brødet eller burgerbuns.",
        "Sammensat burger: bund, mayo, salat, tomat, burger, ost, bacon, top.",
        "Server med varme pomfritter og evt. dips. Lækkert! 🍔",
      ],
    },
    ingredients: [
      { name: "Hakket oksekød", qty: "600g", url: "https://www.bilkatogo.dk/s?query=hakket+koed" },
      { name: "Burgerbuns eller brød", qty: "4 stk", url: "https://www.bilkatogo.dk/s?query=burgerbuns" },
      { name: "Bacon", qty: "200g", url: "https://www.bilkatogo.dk/s?query=bacon" },
      { name: "Kartofler (pomfritter)", qty: "1 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Salat (blandet)", qty: "1 pose", url: "https://www.bilkatogo.dk/s?query=salat" },
      { name: "Tomat", qty: "2 stk", url: "https://www.bilkatogo.dk/s?query=tomat" },
      { name: "Ost (cheddar)", qty: "4 skiver", url: "https://www.bilkatogo.dk/s?query=cheddar+ost" },
      { name: "Mayo og evt. dips", qty: "efter ønske", url: "https://www.bilkatogo.dk/s?query=mayo" },
    ],
  },
  {
    day: "Søndag",
    dato: "17.05",
    emoji: "⚽",
    meal: "Flæskesteg med rødkål og brun sovs",
    color: "#fce4ec",
    accent: "#c2185b",
    naering: {
      hel: { kcal: 3200, protein: 300, kulhy: 200, fedt: 130 },
      portion: { kcal: 800, protein: 75, kulhy: 50, fedt: 33 },
    },
    recipe: {
      tid: "120 min",
      svaerhed: "Middel",
      intro: "⚽ Vejle BK-dag! Klassisk dansk flæskesteg med rødkål. Flæskesteg på tilbud max 61,15 kr/kg — sæt den over om morgenen!",
      trin: [
        "Forvarm ovnen til 180°C.",
        "Tag flæskesteg ud og lad den varme til stuetemperatur.",
        "Tørr stegen og krydr med salt og peber.",
        "Brun stegen kort i pande, læg den i ildfast fad.",
        "Bag i 90-100 min til mørt. Pensl hyppigt med stegekræm.",
        "I mellemtiden: kog kogte kartofler og tørn rødkål.",
        "Lav brun sovs fra stegesaften eller kødfond.",
        "Skær stegen i pæne skiver. Server med kartofler, rødkål og sovs.",
        "Festligt og klassisk dansk! ⚽",
      ],
    },
    ingredients: [
      { name: "Flæskesteg", qty: "1,5 kg", url: "https://www.bilkatogo.dk/s?query=flaeskesteg" },
      { name: "Kogte kartofler", qty: "1,5 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Rødkål (færsk)", qty: "1 hoved", url: "https://www.bilkatogo.dk/s?query=rodkal" },
      { name: "Kødfond", qty: "3-4 dl", url: "https://www.bilkatogo.dk/s?query=fond" },
      { name: "Smør", qty: "50g", url: "https://www.bilkatogo.dk/s?query=smor" },
      { name: "Maizena (evt. tykner)", qty: "1 spsk", url: "https://www.bilkatogo.dk/s?query=maizena" },
      { name: "Salt og peber", qty: "efter smag", url: "https://www.bilkatogo.dk/s?query=krydderier" },
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
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", opacity: 0.5 }}>Uge 20 · 2026</div>
            <div style={{ fontSize: 18, fontWeight: "bold" }}>Bruslund Madplan — 11.–17. maj 2026</div>
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
              <span style={{ fontWeight: "bold", fontSize: 15 }}>Indkobsliste — uge 20</span>
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
