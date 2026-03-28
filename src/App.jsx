import { useState } from "react";

const madplan = [
  {
    day: "Mandag", dato: "30. marts", emoji: "🍝", meal: "Spagetti bolognese med frisk salat",
    color: "#fdf2f8", accent: "#8e44ad",
    naering: {
      hel: { kcal: 2720, protein: 168, kulhy: 288, fedt: 96 },
      portion: { kcal: 680, protein: 42, kulhy: 72, fedt: 24 },
    },
    recipe: {
      tid: "40 min", sværhed: "Let",
      intro: "Klassisk og nem mandag! Lav DOBBELT portion kødsovs — den halve del bruges til lasagne tirsdag. Smart madlavning der sparer tid og penge.",
      trin: [
        "Hak løg og hvidløg fint. Svits i olivenolie i en stor gryde ved middel varme i 5 min.",
        "Tilsæt hakket oksekød (al 800g!) og brun grundigt — rør det fra hinanden så det ikke klumper.",
        "Tilsæt tomatpuré og rør 1 min. Tilsæt hakkede tomater, oregano og basilikum.",
        "Lad sovsen simre ved lav varme i mindst 20 min — jo længere jo bedre. Smag til med salt og peber.",
        "Kog spagetti i rigeligt saltet vand efter pakken — al dente!",
        "Gem halvdelen af kødsovsen til tirsdag (sæt i køleskab eller frys).",
        "Server spagetti med bolognese og en frisk salat med agurk og tomater.",
      ],
    },
    ingredients: [
      { name: "Hakket oksekød", qty: "800g (til 2 dage)", url: "https://www.bilkatogo.dk/s/?search=hakket+oksek%C3%B8d" },
      { name: "Spagetti", qty: "500g", url: "https://www.bilkatogo.dk/s/?search=spagetti" },
      { name: "Hakkede tomater (dåse)", qty: "2 dåser", url: "https://www.bilkatogo.dk/s/?search=hakkede+tomater" },
      { name: "Løg", qty: "2 stk", url: "https://www.bilkatogo.dk/s/?search=l%C3%B8g" },
      { name: "Hvidløg", qty: "4 fed", url: "https://www.bilkatogo.dk/s/?search=hvidl%C3%B8g" },
      { name: "Tomatpuré", qty: "2 spsk", url: "https://www.bilkatogo.dk/s/?search=tomatpur%C3%A9" },
      { name: "Olivenolie", qty: "3 spsk", url: "https://www.bilkatogo.dk/s/?search=olivenolie" },
      { name: "Oregano + basilikum", qty: "tørret", url: "https://www.bilkatogo.dk/s/?search=oregano" },
      { name: "Blandede salater", qty: "1 pose", url: "https://www.bilkatogo.dk/s/?search=salat" },
      { name: "Agurk + tomater", qty: "til salat", url: "https://www.bilkatogo.dk/s/?search=agurk" },
    ]
  },
  {
    day: "Tirsdag", dato: "31. marts", emoji: "🫕", meal: "Bolognese-lasagne med rester fra mandag",
    color: "#eafaf1", accent: "#27ae60",
    rester: true, resterFra: "Mandag",
    naering: {
      hel: { kcal: 2480, protein: 152, kulhy: 232, fedt: 88 },
      portion: { kcal: 620, protein: 38, kulhy: 58, fedt: 22 },
    },
    recipe: {
      tid: "30 min", sværhed: "Let",
      intro: "Genbrug er smart! Mandagens bolognese bliver til en lækker lasagne. Ingen ekstra madlavning af kødsovsen — den er allerede perfekt.",
      trin: [
        "Forvarm ovnen til 180°.",
        "Tag bolognesen fra køleskabet og varm den kort op i en gryde.",
        "Lav simpel bechamelsovs: smelt smør, tilsæt mel, pisk mælk i lidt ad gangen til en tyk sovs. Smag til med salt, peber og muskatnød.",
        "Byg lasagnen i et ovnfast fad: bolognese → lasagneplader → bechamel → gentag. Slut med bechamel på toppen.",
        "Bag i ovnen i 25-30 min til lasagnepladerne er møre og toppen er gylden.",
        "Lad hvile 5 min inden servering — så er det nemmere at skære.",
      ],
    },
    ingredients: [
      { name: "Bolognese (rester fra mandag)", qty: "ca. 600g", url: "https://www.bilkatogo.dk/s/?search=hakket+oksek%C3%B8d" },
      { name: "Lasagneplader", qty: "1 pk", url: "https://www.bilkatogo.dk/s/?search=lasagneplader" },
      { name: "Smør (Lurpak — tilbud!)", qty: "50g", url: "https://www.bilkatogo.dk/s/?search=lurpak" },
      { name: "Hvedemel", qty: "3 spsk", url: "https://www.bilkatogo.dk/s/?search=hvedemel" },
      { name: "Mælk", qty: "5 dl", url: "https://www.bilkatogo.dk/s/?search=m%C3%A6lk" },
      { name: "Muskatnød", qty: "lidt", url: "https://www.bilkatogo.dk/s/?search=muskatn%C3%B8d" },
    ]
  },
  {
    day: "Onsdag", dato: "1. april", emoji: "🐔", meal: "Ovnstegt kyllingelår med kartofler og grøntsager",
    color: "#fef9e7", accent: "#e67e22",
    naering: {
      hel: { kcal: 2720, protein: 208, kulhy: 168, fedt: 120 },
      portion: { kcal: 680, protein: 52, kulhy: 42, fedt: 30 },
    },
    recipe: {
      tid: "60 min", sværhed: "Let",
      intro: "⚠️ Husk at handle ind i dag — Bilka er LUKKET torsdag og fredag! Ovnkyllingelår er ukompliceret og lækre. Lav mange stk. til wraps torsdag.",
      trin: [
        "Forvarm ovnen til 200°. Krydr kyllingelårene generøst med salt, peber, paprika og timian.",
        "Skær kartofler i kvarte og gulerødder i stave. Læg i bradepanden med løg og hvidløg.",
        "Dryp grøntsagerne med olie, salt og peber. Læg kyllingelårene ovenpå.",
        "Smelt smør og pensl kyllingelårene — giver sprød og gylden overflade.",
        "Bag i ovnen i 45-50 min til kyllingen er gennemstegt og huden er sprød.",
        "Gem mindst 3-4 stk. kyllingelår til torsdag — pil evt. kødet allerede nu.",
      ],
    },
    ingredients: [
      { name: "Kyllingelår", qty: "6-8 stk (ca. 1,4 kg)", url: "https://www.bilkatogo.dk/s/?search=kyllingel%C3%A5r" },
      { name: "Kartofler", qty: "1 kg", url: "https://www.bilkatogo.dk/s/?search=kartofler" },
      { name: "Gulerødder", qty: "4 stk", url: "https://www.bilkatogo.dk/s/?search=gulerod" },
      { name: "Løg", qty: "2 stk", url: "https://www.bilkatogo.dk/s/?search=l%C3%B8g" },
      { name: "Hvidløg", qty: "1 hoved", url: "https://www.bilkatogo.dk/s/?search=hvidl%C3%B8g" },
      { name: "Smør (Lurpak — tilbud!)", qty: "75g", url: "https://www.bilkatogo.dk/s/?search=lurpak" },
      { name: "Paprika + timian", qty: "til krydderi", url: "https://www.bilkatogo.dk/s/?search=paprika" },
      { name: "Citron", qty: "1 stk", url: "https://www.bilkatogo.dk/s/?search=citron" },
    ]
  },
  {
    day: "Torsdag", dato: "2. april — Skærtorsdag 🐣", emoji: "🌯", meal: "Kyllingewraps med rester fra onsdag",
    color: "#e8f4f8", accent: "#2980b9",
    rester: true, resterFra: "Onsdag",
    naering: {
      hel: { kcal: 2240, protein: 152, kulhy: 208, fedt: 72 },
      portion: { kcal: 560, protein: 38, kulhy: 52, fedt: 18 },
    },
    recipe: {
      tid: "15 min", sværhed: "Let",
      intro: "🐣 Skærtorsdag — Bilka er lukket! Heldigvis har vi restekyllingen fra i går. Pil kødet og sæt det hele på bordet — alle bygger selv!",
      trin: [
        "Pil kyllingekødet fra benene og riv det i strimler med fingrene.",
        "Varm kyllingestrimler kort i en pande med lidt smør — eller server koldt, det er også godt.",
        "Skær avocado i skiver og dryp med limesaft.",
        "Varm tortillas i en tør pande eller i mikro i fugtigt viskestykke.",
        "Sæt det hele på bordet og lad alle bygge deres egne wraps. God påskeferie! 🌯",
      ],
    },
    ingredients: [
      { name: "Kylling (rester fra onsdag)", qty: "ca. 500g", url: "https://www.bilkatogo.dk/s/?search=kylling" },
      { name: "Tortillas", qty: "1 pk", url: "https://www.bilkatogo.dk/s/?search=tortillas" },
      { name: "Avocado", qty: "2 stk", url: "https://www.bilkatogo.dk/s/?search=avocado" },
      { name: "Salsa", qty: "1 glas", url: "https://www.bilkatogo.dk/s/?search=salsa" },
      { name: "Creme fraiche", qty: "1 bøtte", url: "https://www.bilkatogo.dk/s/?search=creme+fraiche" },
      { name: "Romaine salat", qty: "1 hoved", url: "https://www.bilkatogo.dk/s/?search=salat" },
      { name: "Cherrytomater", qty: "200g", url: "https://www.bilkatogo.dk/s/?search=cherrytomater" },
      { name: "Lime", qty: "1 stk", url: "https://www.bilkatogo.dk/s/?search=lime" },
    ]
  },
  {
    day: "Fredag", dato: "3. april — Langfredag 🐣", emoji: "🐟", meal: "Marinerede sild med kartofler og rugbrød",
    color: "#fdedec", accent: "#c0392b",
    naering: {
      hel: { kcal: 2080, protein: 112, kulhy: 192, fedt: 88 },
      portion: { kcal: 520, protein: 28, kulhy: 48, fedt: 22 },
    },
    recipe: {
      tid: "10 min", sværhed: "Let",
      intro: "🐣 Langfredag — Bilka er lukket! Klassisk dansk påskefrokost med marinerede sild. Sildene er fra Bilkas tilbud denne uge. Enkelt og autentisk.",
      trin: [
        "Kog kartofler møre i saltet vand — ca. 20 min (start dem gerne i god tid).",
        "Skær rugbrød i tykke skiver og smør med rigeligt Lurpak (tilbud!).",
        "Anret sild på tallerkener med kogte kartofler ved siden af.",
        "Pil rødløg i ringe og læg ovenpå sildene. Tilsæt syltede agurker.",
        "Server med ekstra smør og de friske druer (tilbud!) som dessert.",
        "Skål! 🥂 God påske til hele familien.",
      ],
    },
    ingredients: [
      { name: "Marinerede sild (Bilka tilbud!)", qty: "2 glas á 300g+", url: "https://www.bilkatogo.dk/s/?search=marinerede+sild" },
      { name: "Kartofler", qty: "800g", url: "https://www.bilkatogo.dk/s/?search=kartofler" },
      { name: "Rugbrød", qty: "1 brød", url: "https://www.bilkatogo.dk/s/?search=rugbr%C3%B8d" },
      { name: "Smør (Lurpak tilbud!)", qty: "100g", url: "https://www.bilkatogo.dk/s/?search=lurpak" },
      { name: "Løse druer (Bilka tilbud! 3,95/100g)", qty: "300g", url: "https://www.bilkatogo.dk/s/?search=druer" },
      { name: "Syltede agurker", qty: "1 glas", url: "https://www.bilkatogo.dk/s/?search=syltede+agurker" },
      { name: "Rødløg", qty: "1 stk", url: "https://www.bilkatogo.dk/s/?search=r%C3%B8dl%C3%B8g" },
    ]
  },
  {
    day: "Lørdag", dato: "4. april — Påskelørdag", emoji: "🥩", meal: "Mørbradgryde med kartoffelmos",
    color: "#f4ecf7", accent: "#8e44ad",
    naering: {
      hel: { kcal: 3040, protein: 208, kulhy: 200, fedt: 144 },
      portion: { kcal: 760, protein: 52, kulhy: 50, fedt: 36 },
    },
    recipe: {
      tid: "45 min", sværhed: "Medium",
      intro: "Bilka er åbent i dag (7-22) — stock op! Lørdag = lidt ekstra forkælelse. Cremet mørbradgryde med luftig kartoffelmos. LAV EKSTRA MOS — den bruges på påskedag!",
      trin: [
        "Skær svinemørbraden i medallioner på ca. 2 cm. Krydr med salt og peber.",
        "Brun medallionerne i smør (Lurpak!) ved høj varme — 2 min per side til gyldne. Tag ud.",
        "Svits løg og champignon i samme pande i 5 min til bløde og gyldne.",
        "Tilsæt dijonsennep, rør rundt. Tilsæt fløden og lad simre 5 min til sovsen tykner.",
        "Kom kødet tilbage og lad simre ved lav varme i 5-10 min. Drys med frisk persille.",
        "KARTOFFELMOS: Kog kartofler møre, hæld vand fra. Mos med RIGELIGT smør og mælk til cremet mos. LAV 1,5 KG — gem resten til søndag!",
        "Server mørbradgryden over den varme kartoffelmos. God påskelørdag! 🐣",
      ],
    },
    ingredients: [
      { name: "Svinemørbrad", qty: "800g", url: "https://www.bilkatogo.dk/s/?search=svinem%C3%B8rbrad" },
      { name: "Champignon", qty: "300g", url: "https://www.bilkatogo.dk/s/?search=champignon" },
      { name: "Løg", qty: "2 stk", url: "https://www.bilkatogo.dk/s/?search=l%C3%B8g" },
      { name: "Fløde 38%", qty: "2 dl", url: "https://www.bilkatogo.dk/s/?search=fl%C3%B8de" },
      { name: "Dijonsennep", qty: "1 spsk", url: "https://www.bilkatogo.dk/s/?search=dijonsennep" },
      { name: "Kartofler (til mos)", qty: "1,5 kg — lav ekstra!", url: "https://www.bilkatogo.dk/s/?search=kartofler" },
      { name: "Smør (Lurpak tilbud!)", qty: "100g", url: "https://www.bilkatogo.dk/s/?search=lurpak" },
      { name: "Mælk", qty: "1-2 dl", url: "https://www.bilkatogo.dk/s/?search=m%C3%A6lk" },
      { name: "Persille (frisk)", qty: "til pynt", url: "https://www.bilkatogo.dk/s/?search=persille" },
    ]
  },
  {
    day: "Søndag", dato: "5. april — 1. Påskedag 🐣", emoji: "🐣", meal: "Langtidsstegt nakkefilet med rødkål og kartoffelmos",
    color: "#e8f8f5", accent: "#16a085",
    rester: true, resterFra: "Lørdag",
    naering: {
      hel: { kcal: 3160, protein: 232, kulhy: 176, fedt: 168 },
      portion: { kcal: 790, protein: 58, kulhy: 44, fedt: 42 },
    },
    recipe: {
      tid: "3 timer", sværhed: "Let (men tålmodig)",
      intro: "🐣 God påske! Nakkefileten passer sig selv i ovnen mens I nyder påskedagen. Brug kartoffelmosen fra lørdag — så er der næsten ingen arbejde. Bilka er LUKKET i dag.",
      trin: [
        "Morgenen: Gnid nakkefileten godt med hvidløg, timian, salt og peber.",
        "Forvarm ovnen til 160°. Læg nakkefileten i bradepande og hæld oksefond ved.",
        "Tilsæt gulerødder og persillerod i grove stykker rundt om kødet.",
        "Dæk med folie og bag i 2½-3 timer til kødet er mørt og falder fra hinanden.",
        "Tag folien af de sidste 20 min. Skru op til 200° for at give gylden overflade.",
        "Varm kartoffelmosen fra lørdag op i en gryde med lidt ekstra smør og mælk — pisk den luftig igen.",
        "Varm rødkålen op med en klat smør og lidt sukker.",
        "Lav en enkel sovs af stegeskyen fra bradepanden — sigt den og reducer.",
        "Server med det hele og nyd familiens selskab. God påske! 🐣",
      ],
    },
    ingredients: [
      { name: "Nakkefilet", qty: "1,5 kg", url: "https://www.bilkatogo.dk/s/?search=nakkefilet" },
      { name: "Kartoffelmos (rester fra lørdag)", qty: "efter behov", url: "https://www.bilkatogo.dk/s/?search=kartofler" },
      { name: "Rødkål (glas)", qty: "1 stort glas", url: "https://www.bilkatogo.dk/s/?search=r%C3%B8dk%C3%A5l" },
      { name: "Gulerødder", qty: "4 stk", url: "https://www.bilkatogo.dk/s/?search=gulerod" },
      { name: "Persillerod", qty: "2 stk", url: "https://www.bilkatogo.dk/s/?search=persillerod" },
      { name: "Hvidløg + timian", qty: "til marinering", url: "https://www.bilkatogo.dk/s/?search=hvidl%C3%B8g" },
      { name: "Oksefond", qty: "3 dl", url: "https://www.bilkatogo.dk/s/?search=oksefond" },
      { name: "Smør (Lurpak tilbud!)", qty: "50g", url: "https://www.bilkatogo.dk/s/?search=lurpak" },
      { name: "Løse druer (Bilka tilbud!)", qty: "200g — til dessert", url: "https://www.bilkatogo.dk/s/?search=druer" },
    ]
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
        Næringsindhold — {vis === "portion" ? "per portion" : "hele retten"}
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
      <div style={{ fontSize: 10, color: "#ccc", marginTop: 10 }}>* Estimerede værdier baseret på ingrediensernes standardnæringsindhold</div>
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
    { key: "plan", label: "📅 Madplan" },
    { key: "recipe", label: "👨‍🍳 Opskrift" },
    { key: "naering", label: "🥗 Næring" },
    { key: "list", label: "🛒 Indkøb" },
  ];

  return (
    <div style={{ fontFamily: "'Georgia', serif", minHeight: "100vh", background: "#faf8f5", color: "#2c2c2c" }}>
      <div style={{ background: "#1a3a2a", color: "white", padding: "16px 20px 0", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 12px rgba(0,0,0,0.2)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", opacity: 0.5 }}>Uge 14 · 2026</div>
            <div style={{ fontSize: 20, fontWeight: "bold" }}>🛒 Bilka Madplan — Uge 14 · Påskeugen 🐣</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 10, opacity: 0.5, marginBottom: 3 }}>Indkøbsfremgang</div>
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
                  {d.rester && <span style={{ position: "absolute", top: -6, left: -6, fontSize: 11 }}>♻️</span>}
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
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                  <div style={{ fontSize: 20, fontWeight: "bold" }}>{d.day}</div>
                  <div style={{ fontSize: 13, opacity: 0.8 }}>{d.dato}</div>
                  {d.rester && <span style={{ fontSize: 11, background: "rgba(255,255,255,0.25)", padding: "2px 8px", borderRadius: 20 }}>♻️ Rester fra {d.resterFra}</span>}
                </div>
                <div style={{ fontSize: 14, opacity: 0.9, fontStyle: "italic", marginTop: 4 }}>{d.meal}</div>
                <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 11, background: "rgba(255,255,255,0.2)", padding: "3px 10px", borderRadius: 20 }}>⏱ {d.recipe.tid}</span>
                  <span style={{ fontSize: 11, background: "rgba(255,255,255,0.2)", padding: "3px 10px", borderRadius: 20 }}>🔥 {d.naering.portion.kcal} kcal/pers.</span>
                </div>
              </div>
              <div style={{ padding: "16px 20px" }}>
                <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#aaa", marginBottom: 10 }}>Ingredienser — klik for BilkaToGo</div>
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
                  <button onClick={() => setView("recipe")} style={{ background: d.accent, color: "white", border: "none", padding: "10px 16px", borderRadius: 10, cursor: "pointer", fontSize: 13, fontFamily: "inherit", fontWeight: "bold" }}>👨‍🍳 Opskrift</button>
                  <button onClick={() => setView("naering")} style={{ background: d.color, color: d.accent, border: `2px solid ${d.accent}`, padding: "10px 16px", borderRadius: 10, cursor: "pointer", fontSize: 13, fontFamily: "inherit", fontWeight: "bold" }}>🥗 Næring</button>
                  <a href="https://www.bilkatogo.dk/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#1a3a2a", color: "white", padding: "10px 16px", borderRadius: 10, textDecoration: "none", fontSize: 13, fontFamily: "inherit", fontWeight: "bold" }}>🛒 BilkaToGo</a>
                  <button onClick={() => d.ingredients.forEach((_, ii) => setChecked(prev => ({ ...prev, [`${activeDay}-${ii}`]: true })))} style={{ background: "#f5f5f5", border: "none", padding: "10px 16px", borderRadius: 10, cursor: "pointer", fontSize: 13, fontFamily: "inherit", color: "#555" }}>✓ Markér alle</button>
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
                  <span style={{ fontSize: 12, background: "rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: 20 }}>⏱ {d.recipe.tid}</span>
                  <span style={{ fontSize: 12, background: "rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: 20 }}>📊 {d.recipe.sværhed}</span>
                  <span style={{ fontSize: 12, background: "rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: 20 }}>👥 4 personer</span>
                  {d.rester && <span style={{ fontSize: 12, background: "rgba(255,255,255,0.3)", padding: "4px 12px", borderRadius: 20 }}>♻️ Rester fra {d.resterFra}</span>}
                </div>
              </div>
              <div style={{ padding: "20px" }}>
                <p style={{ fontSize: 15, fontStyle: "italic", color: "#555", marginBottom: 20, lineHeight: 1.6 }}>{d.recipe.intro}</p>
                <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#aaa", marginBottom: 14 }}>Fremgangsmåde</div>
                {d.recipe.trin.map((trin, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, marginBottom: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: d.accent, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: "bold", flexShrink: 0 }}>{i + 1}</div>
                    <div style={{ fontSize: 14, lineHeight: 1.6, paddingTop: 4 }}>{trin}</div>
                  </div>
                ))}
                <div style={{ marginTop: 20, padding: "14px", background: d.color, borderRadius: 12, borderLeft: `4px solid ${d.accent}` }}>
                  <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: d.accent, marginBottom: 8 }}>Ingredienser</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {d.ingredients.map((ing, i) => (
                      <span key={i} style={{ fontSize: 12, background: "white", padding: "4px 10px", borderRadius: 20, border: `1px solid ${d.accent}20` }}>
                        {ing.name} <span style={{ color: "#999" }}>{ing.qty}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ marginTop: 16 }}>
                  <button onClick={() => setView("plan")} style={{ background: "#f5f5f5", border: "none", padding: "10px 16px", borderRadius: 10, cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>← Tilbage</button>
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
                <div style={{ fontSize: 13, opacity: 0.8, marginTop: 2 }}>Næringsindhold</div>
              </div>
              <div style={{ padding: "16px 20px" }}>
                <div style={{ display: "flex", gap: 0, background: "#f0f0f0", borderRadius: 10, padding: 3, marginBottom: 16 }}>
                  {[{ key: "portion", label: "Per portion" }, { key: "hel", label: "Hele retten" }].map(v => (
                    <button key={v.key} onClick={() => setNaeringVis(v.key)} style={{ flex: 1, padding: "8px", border: "none", borderRadius: 8, background: naeringVis === v.key ? "white" : "transparent", fontWeight: naeringVis === v.key ? "bold" : "normal", fontSize: 13, cursor: "pointer", fontFamily: "inherit", color: naeringVis === v.key ? d.accent : "#888", boxShadow: naeringVis === v.key ? "0 1px 4px rgba(0,0,0,0.1)" : "none", transition: "all 0.2s" }}>{v.label}</button>
                  ))}
                </div>
                <NaeringKort naering={d.naering} accent={d.accent} vis={naeringVis} />
                <div style={{ marginTop: 24 }}>
                  <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#aaa", marginBottom: 12 }}>Ugens næring (per dag/pers.)</div>
                  {madplan.map((dag, i) => (
                    <div key={i} onClick={() => setActiveDay(i)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 10, cursor: "pointer", background: i === activeDay ? dag.color : "transparent", border: i === activeDay ? `2px solid ${dag.accent}` : "2px solid transparent", marginBottom: 6, transition: "all 0.2s" }}>
                      <span style={{ fontSize: 20 }}>{dag.emoji}</span>
                      <span style={{ fontSize: 13, flex: 1, fontWeight: i === activeDay ? "bold" : "normal" }}>{dag.day}{dag.rester ? " ♻️" : ""}</span>
                      <span style={{ fontSize: 13, fontWeight: "bold", color: dag.accent }}>{dag.naering.portion.kcal} kcal</span>
                      <span style={{ fontSize: 11, color: "#e74c3c" }}>{dag.naering.portion.protein}g P</span>
                      <span style={{ fontSize: 11, color: "#3498db" }}>{dag.naering.portion.kulhy}g K</span>
                      <span style={{ fontSize: 11, color: "#f39c12" }}>{dag.naering.portion.fedt}g F</span>
                    </div>
                  ))}
                  <div style={{ marginTop: 12, padding: "12px", background: "#1a3a2a", borderRadius: 10, color: "white" }}>
                    <div style={{ fontSize: 11, opacity: 0.6, marginBottom: 6 }}>Ugens gennemsnit per person per dag</div>
                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                      <span><strong>{Math.round(madplan.reduce((s, d) => s + d.naering.portion.kcal, 0) / 7)}</strong> <span style={{ opacity: 0.6, fontSize: 11 }}>kcal</span></span>
                      <span><strong>{Math.round(madplan.reduce((s, d) => s + d.naering.portion.protein, 0) / 7)}g</strong> <span style={{ opacity: 0.6, fontSize: 11 }}>protein</span></span>
                      <span><strong>{Math.round(madplan.reduce((s, d) => s + d.naering.portion.kulhy, 0) / 7)}g</strong> <span style={{ opacity: 0.6, fontSize: 11 }}>kulhydrat</span></span>
                      <span><strong>{Math.round(madplan.reduce((s, d) => s + d.naering.portion.fedt, 0) / 7)}g</strong> <span style={{ opacity: 0.6, fontSize: 11 }}>fedt</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {view === "list" && (
          <div>
            <div style={{ background: "#1a3a2a", color: "white", borderRadius: 12, padding: "14px 18px", marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: "bold", fontSize: 15 }}>Samlet indkøbsliste — 7 dage</span>
              <span style={{ fontSize: 13, opacity: 0.7 }}>{checkedItems}/{totalItems} afkrydset</span>
            </div>
            <div style={{ background: "#fff8e1", border: "2px solid #f39c12", borderRadius: 12, padding: "12px 16px", marginBottom: 16 }}>
              <div style={{ fontWeight: "bold", color: "#e67e22", marginBottom: 4 }}>⚠️ Påskehensyn — Husk at handle!</div>
              <div style={{ fontSize: 13, color: "#555" }}>Bilka LUKKET: Skærtorsdag 2. april og Langfredag 3. april. Næste åbent: Påskelørdag 4. april (7-22). Handler alt ind senest onsdag!</div>
            </div>
            {madplan.map((day, di) => (
              <div key={di} style={{ marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 18 }}>{day.emoji}</span>
                  <span style={{ fontSize: 13, fontWeight: "bold", color: day.accent }}>{day.day} — {day.meal}</span>
                  {day.rester && <span style={{ fontSize: 11, background: "#f0f0f0", color: "#666", padding: "2px 8px", borderRadius: 20 }}>♻️ Rester</span>}
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
              <a href="https://www.bilkatogo.dk/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#1a3a2a", color: "white", padding: "14px 28px", borderRadius: 12, textDecoration: "none", fontSize: 15, fontWeight: "bold", fontFamily: "inherit" }}>🛒 Gå til BilkaToGo</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}