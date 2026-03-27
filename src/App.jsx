import { useState } from "react";

const madplan = [
  {
    day: "Mandag", emoji: "🥩", meal: "Oksemørbrad med stegte kartofler, skysovs og whiskeysovs",
    color: "#fdf2f8", accent: "#8e44ad",
    gaester: true,
    naering: {
      hel: { kcal: 3000, protein: 220, kulhy: 140, fedt: 152 },
      portion: { kcal: 750, protein: 55, kulhy: 35, fedt: 38 },
    },
    recipe: {
      tid: "60 min", sværhed: "Medium",
      intro: "Gæstemiddag! Oksemørbrad er det ypperste — mørt, saftigt og imponerende. To sovse: en klassisk skysovs og en cremet whiskeysovs. Lav lidt ekstra — resterne er guld dagen efter.",
      trin: [
        "Tag mørbraden ud af køleskabet 30 min før tilberedning. Dup den tør og krydr generøst med salt og peber.",
        "Brun mørbraden på alle sider i smør og olie ved høj varme — ca. 2 min per side til gylden stegeskorpe.",
        "Tilsæt hvidløg, timian og rosmarin til panden. Sæt i ovn ved 180° i 15-20 min til kernetemperatur 58-60°. Hvil 10 min.",
        "STEGTE KARTOFLER: Kog kartofler halvt møre (10 min). Afkøl, skær i kvarte. Steg i smør ved middel-høj varme til gyldne og sprøde — ca. 15 min.",
        "SKYSOVS: Sigt stegeskyen fra panden. Reducer med oksefond til det halve. Smag til med salt, peber og en klat koldt smør til sidst — ryst ikke panden.",
        "WHISKEYSOVS: Svits finthakkede skalotteløg bløde i smør. Tilsæt whisky og lad det fordampe 1 min. Tilsæt fløde og lad simre 5 min til sovsen tykner. Smag til med dijonsennep, salt og peber.",
        "Skær mørbraden i tykke skiver og server med de stegte kartofler og begge sovse ved siden af.",
      ],
      sovse: {
        skysovs: "Stegeskyen sigtes og reduceres med oksefond. Smages til med salt, peber og en klat smør.",
        whiskeysovs: "Skalotteløg sauteres, whisky tilsættes og fordamper, fløde tilsættes og reduceres. Smages til med dijonsennep.",
      }
    },
    ingredients: [
      { name: "Oksemørbrad", qty: "1,2 kg", url: "https://www.bilkatogo.dk/s/?search=oksem%C3%B8rbrad" },
      { name: "Kartofler", qty: "1,2 kg", url: "https://www.bilkatogo.dk/s/?search=kartofler" },
      { name: "Smør", qty: "100g", url: "https://www.bilkatogo.dk/s/?search=sm%C3%B8r" },
      { name: "Hvidløg", qty: "4 fed", url: "https://www.bilkatogo.dk/s/?search=hvidl%C3%B8g" },
      { name: "Timian + rosmarin", qty: "friske kviste", url: "https://www.bilkatogo.dk/s/?search=timian" },
      { name: "Oksefond", qty: "4 dl", url: "https://www.bilkatogo.dk/s/?search=oksefond" },
      { name: "Whisky", qty: "4 cl", url: "https://www.bilkatogo.dk/s/?search=whisky" },
      { name: "Fløde 38%", qty: "2 dl", url: "https://www.bilkatogo.dk/s/?search=fl%C3%B8de" },
      { name: "Skalotteløg", qty: "4 stk", url: "https://www.bilkatogo.dk/s/?search=skalottel%C3%B8g" },
      { name: "Dijonsennep", qty: "1 spsk", url: "https://www.bilkatogo.dk/s/?search=dijonsennep" },
    ]
  },
  {
    day: "Tirsdag", emoji: "🥗", meal: "Mørbrad-sandwich med rester + ovnkartofler",
    color: "#eafaf1", accent: "#27ae60",
    rester: true, resterFra: "Mandag",
    naering: {
      hel: { kcal: 2320, protein: 168, kulhy: 192, fedt: 88 },
      portion: { kcal: 580, protein: 42, kulhy: 48, fedt: 22 },
    },
    recipe: {
      tid: "20 min", sværhed: "Let",
      intro: "Geniale rester fra gæstemiddagen! Kold oksemørbrad skåret i tynde skiver er en delikatesse i sig selv. Med godt brød, sennep og syltede løg er det bedre end de fleste smørrebrød.",
      trin: [
        "Tag mørbraden ud af køleskabet 15 min før servering — den må ikke være iskold.",
        "Skær mørbraden i tynde skiver på skrå — brug en skarp kniv.",
        "Forvarm ovnen til 200°. Skær evt. resterende kartofler i tern og bag i 15 min med lidt olie og salt.",
        "Rist brødet let i brødristeren eller på en tør pande.",
        "Byg sandwichen: smør dijonsennep eller peberrod på brødet, læg salat, mørbradskiver og rødløg.",
        "Server med ovnkartoflerne og et godt glas vand — eller et glas af whiskyen fra i går 😄",
      ]
    },
    ingredients: [
      { name: "Oksemørbrad (rester fra mandag)", qty: "ca. 400g", url: "https://www.bilkatogo.dk/s/?search=oksem%C3%B8rbrad" },
      { name: "Godt brød eller baguette", qty: "1 stk", url: "https://www.bilkatogo.dk/s/?search=baguette" },
      { name: "Kartofler (rester fra mandag)", qty: "efter behov", url: "https://www.bilkatogo.dk/s/?search=kartofler" },
      { name: "Dijonsennep", qty: "til servering", url: "https://www.bilkatogo.dk/s/?search=dijonsennep" },
      { name: "Peberrod", qty: "til servering", url: "https://www.bilkatogo.dk/s/?search=peberrod" },
      { name: "Rødløg", qty: "1 stk", url: "https://www.bilkatogo.dk/s/?search=r%C3%B8dl%C3%B8g" },
      { name: "Blandede salater", qty: "1 pose", url: "https://www.bilkatogo.dk/s/?search=salat" },
    ]
  },
  {
    day: "Onsdag", emoji: "🐔", meal: "Ovnstegt kylling med rodfrugtgryde",
    color: "#fef9e7", accent: "#e67e22",
    naering: {
      hel: { kcal: 2600, protein: 192, kulhy: 160, fedt: 112 },
      portion: { kcal: 650, protein: 48, kulhy: 40, fedt: 28 },
    },
    recipe: {
      tid: "60 min", sværhed: "Let",
      intro: "En hel ovnkylling med sæsonens rodfrugter — enkel, velsmagende og fylder hele huset med duft. Lav en stor kylling så der er rester til torsdag.",
      trin: [
        "Forvarm ovnen til 200°. Gnid kyllingen indvendigt og udvendigt med salt, peber og smør.",
        "Stik hvidløgshoved, timian og rosmarin ind i kyllingen.",
        "Skær gulerødder, kartofler og selleri i grove stykker. Læg i bradepanden med lidt olie, salt og peber.",
        "Læg kyllingen ovenpå grøntsagerne med brystsiden opad.",
        "Bag i ovnen i 50-60 min til kyllingen er gylden og saften løber klar (stik i låret).",
        "Lad kyllingen hvile 10 min inden servering. Server med grøntsagerne fra bradepanden.",
        "Gem de overskydende kyllingestykker til torsdag — pil kødet fra benene og opbevar i køleskabet.",
      ]
    },
    ingredients: [
      { name: "Hel kylling", qty: "1,4 kg", url: "https://www.bilkatogo.dk/s/?search=hel+kylling" },
      { name: "Gulerødder", qty: "4 stk", url: "https://www.bilkatogo.dk/s/?search=gulerod" },
      { name: "Kartofler", qty: "800g", url: "https://www.bilkatogo.dk/s/?search=kartofler" },
      { name: "Knoldselleri", qty: "½ stk", url: "https://www.bilkatogo.dk/s/?search=selleri" },
      { name: "Hvidløg", qty: "1 hoved", url: "https://www.bilkatogo.dk/s/?search=hvidl%C3%B8g" },
      { name: "Timian + rosmarin", qty: "friske kviste", url: "https://www.bilkatogo.dk/s/?search=timian" },
      { name: "Smør", qty: "50g", url: "https://www.bilkatogo.dk/s/?search=sm%C3%B8r" },
      { name: "Olivenolie", qty: "3 spsk", url: "https://www.bilkatogo.dk/s/?search=olivenolie" },
    ]
  },
  {
    day: "Torsdag", emoji: "🌯", meal: "Kyllingewraps med rester fra ovnkylling",
    color: "#e8f4f8", accent: "#2980b9",
    rester: true, resterFra: "Onsdag",
    naering: {
      hel: { kcal: 2320, protein: 160, kulhy: 220, fedt: 80 },
      portion: { kcal: 580, protein: 40, kulhy: 55, fedt: 20 },
    },
    recipe: {
      tid: "15 min", sværhed: "Let",
      intro: "Restekyllingen fra onsdag forvandles til en frisk og nem torsdag. Pil kødet fra benene og sæt det hele på bordet — alle bygger selv!",
      trin: [
        "Pil kyllingekødet fra benene og riv det i strimler med fingrene.",
        "Varm kyllingekødet kort op i en pande med lidt olie, eller server det koldt — begge dele virker.",
        "Skær avocado i skiver og dryp med limesaft så den ikke bliver brun.",
        "Varm tortillas i en tør pande i 30 sek per side, eller pak dem i et fugtigt viskestykke og varm i mikroovn.",
        "Sæt det hele på bordet: kylling, avocado, salsa, creme fraiche, salat og tomater.",
        "Lad alle bygge deres egne wraps og nyd den nemme torsdag! 🌯",
      ]
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
    day: "Fredag", emoji: "🍟", meal: "Fish & chips med remoulade",
    color: "#fdedec", accent: "#c0392b",
    naering: {
      hel: { kcal: 2840, protein: 152, kulhy: 260, fedt: 120 },
      portion: { kcal: 710, protein: 38, kulhy: 65, fedt: 30 },
    },
    recipe: {
      tid: "35 min", sværhed: "Let",
      intro: "Klassisk fredagsfisk! Sprødt paneret torsk med ovnfritter og remoulade. Enkel britisk-inspireret ret der altid falder i god jord.",
      trin: [
        "Forvarm ovnen til 220°. Skær kartofler i tykke stave. Vend i olie, salt, peber og lidt paprika.",
        "Bag kartoflerne i ovnen i 25-30 min — vend dem halvvejs til alle sider er gyldne.",
        "Skær fiskefileterne i passende stykker. Krydr med salt og peber.",
        "Panér fisken: vend i mel, dernæst sammenpisket æg, og til sidst rasp. Tryk raspen godt fast.",
        "Steg fisken i rigeligt olie på panden — 3-4 min per side til gylden og sprød.",
        "Server med ovnfritter, remoulade, citronbåde og ærter.",
      ]
    },
    ingredients: [
      { name: "Torsk- eller sejfilet", qty: "700g", url: "https://www.bilkatogo.dk/s/?search=torsk+filet" },
      { name: "Kartofler", qty: "1 kg", url: "https://www.bilkatogo.dk/s/?search=kartofler" },
      { name: "Rasp", qty: "150g", url: "https://www.bilkatogo.dk/s/?search=rasp" },
      { name: "Æg", qty: "2 stk", url: "https://www.bilkatogo.dk/s/?search=%C3%A6g" },
      { name: "Hvedemel", qty: "til panering", url: "https://www.bilkatogo.dk/s/?search=hvedemel" },
      { name: "Remoulade", qty: "1 glas", url: "https://www.bilkatogo.dk/s/?search=remoulade" },
      { name: "Citron", qty: "1 stk", url: "https://www.bilkatogo.dk/s/?search=citron" },
      { name: "Ærter (frost)", qty: "200g", url: "https://www.bilkatogo.dk/s/?search=%C3%A6rter+frost" },
    ]
  },
  {
    day: "Lørdag", emoji: "🥩", meal: "Mørbradgryde med kartoffelmos",
    color: "#f4ecf7", accent: "#8e44ad",
    naering: {
      hel: { kcal: 3000, protein: 208, kulhy: 192, fedt: 140 },
      portion: { kcal: 750, protein: 52, kulhy: 48, fedt: 35 },
    },
    recipe: {
      tid: "45 min", sværhed: "Medium",
      intro: "Lørdagsforkælelse! En cremet mørbradgryde med champignon i flødesovs og luftig kartoffelmos. Lav ekstra mos — det bruges søndag.",
      trin: [
        "Skær svinemørbraden i medallioner på ca. 2 cm. Krydr med salt og peber.",
        "Brun medallionerne i smør ved høj varme — 2 min per side til gyldne. Tag ud og sæt til side.",
        "Svits løg og champignon i samme pande i 5 min til bløde og gyldne.",
        "Tilsæt dijonsennep og rør rundt. Tilsæt fløden og lad simre 5 min.",
        "Kom kødet tilbage i sovsen og lad simre ved lav varme i 5-10 min.",
        "KARTOFFELMOS: Kog kartofler møre, hæld vandet fra. Mos med rigeligt smør og mælk til cremet og luftig mos. Smag til med salt og muskatnød.",
        "Server gryden over den varme kartoffelmos. Gem ekstra mos til søndag!",
      ]
    },
    ingredients: [
      { name: "Svinemørbrad", qty: "800g", url: "https://www.bilkatogo.dk/s/?search=svinem%C3%B8rbrad" },
      { name: "Champignon", qty: "300g", url: "https://www.bilkatogo.dk/s/?search=champignon" },
      { name: "Løg", qty: "2 stk", url: "https://www.bilkatogo.dk/s/?search=l%C3%B8g" },
      { name: "Fløde 38%", qty: "2 dl", url: "https://www.bilkatogo.dk/s/?search=fl%C3%B8de" },
      { name: "Dijonsennep", qty: "1 spsk", url: "https://www.bilkatogo.dk/s/?search=dijonsennep" },
      { name: "Kartofler (til mos)", qty: "1,2 kg", url: "https://www.bilkatogo.dk/s/?search=kartofler" },
      { name: "Smør", qty: "75g", url: "https://www.bilkatogo.dk/s/?search=sm%C3%B8r" },
      { name: "Mælk", qty: "1 dl", url: "https://www.bilkatogo.dk/s/?search=m%C3%A6lk" },
    ]
  },
  {
    day: "Søndag", emoji: "🐣", meal: "Langtidsstegt nakkefilet med rødkål og kartoffelmos",
    color: "#e8f8f5", accent: "#16a085",
    rester: true, resterFra: "Lørdag",
    naering: {
      hel: { kcal: 3120, protein: 220, kulhy: 168, fedt: 160 },
      portion: { kcal: 780, protein: 55, kulhy: 42, fedt: 40 },
    },
    recipe: {
      tid: "3 timer", sværhed: "Let (men tålmodig)",
      intro: "Påskesøndag! 🐣 Nakkefileten passes næsten sig selv i ovnen mens I nyder påsken. Brug kartoffelmosen fra lørdag — så er der næsten ingen arbejde.",
      trin: [
        "Dagen før (eller morgenen): Gnid nakkefileten med hvidløg, timian, salt og peber. Lad marinere.",
        "Forvarm ovnen til 160°. Læg nakkefileten i en bradepande og hæld oksefond ved.",
        "Tilsæt gulerødder og persillerod i grove stykker rundt om kødet.",
        "Dæk bradepanden med folie og sæt i ovnen. Bag i 2½-3 timer til kødet er mørt og falder fra hinanden.",
        "Tag folien af de sidste 20 min og skru op på 200° for at give en gylden overflade.",
        "Varm kartoffelmosen fra lørdag op i en gryde med lidt ekstra mælk og smør — pisk den luftig igen.",
        "Varm rødkålen op med lidt smør og sukker. Lav en simpel sovs af stegeskyen.",
        "God påske! 🐣 Server med det hele og nyd familiens selskab.",
      ]
    },
    ingredients: [
      { name: "Nakkefilet", qty: "1,5 kg", url: "https://www.bilkatogo.dk/s/?search=nakkefilet" },
      { name: "Kartoffelmos (rester fra lørdag)", qty: "efter behov", url: "https://www.bilkatogo.dk/s/?search=kartofler" },
      { name: "Rødkål (glas)", qty: "1 stort glas", url: "https://www.bilkatogo.dk/s/?search=r%C3%B8dk%C3%A5l" },
      { name: "Gulerødder", qty: "4 stk", url: "https://www.bilkatogo.dk/s/?search=gulerod" },
      { name: "Persillerod", qty: "2 stk", url: "https://www.bilkatogo.dk/s/?search=persillerod" },
      { name: "Hvidløg + timian", qty: "til marinering", url: "https://www.bilkatogo.dk/s/?search=hvidl%C3%B8g" },
      { name: "Oksefond", qty: "3 dl", url: "https://www.bilkatogo.dk/s/?search=oksefond" },
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
      <NaeringBar label="Protein" value={n.protein} max={vis === "portion" ? 60 : 240} color="#e74c3c" />
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
                  {d.gaester && <span style={{ position: "absolute", top: -6, left: -6, fontSize: 11 }}>👥</span>}
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
                  {d.gaester && <span style={{ fontSize: 11, background: "rgba(255,255,255,0.25)", padding: "2px 8px", borderRadius: 20 }}>👥 Gæster</span>}
                  {d.rester && <span style={{ fontSize: 11, background: "rgba(255,255,255,0.25)", padding: "2px 8px", borderRadius: 20 }}>♻️ Rester fra {d.resterFra}</span>}
                </div>
                <div style={{ fontSize: 14, opacity: 0.9, fontStyle: "italic" }}>{d.meal}</div>
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
                <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 12, background: "rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: 20 }}>⏱ {d.recipe.tid}</span>
                  <span style={{ fontSize: 12, background: "rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: 20 }}>📊 {d.recipe.sværhed}</span>
                  <span style={{ fontSize: 12, background: "rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: 20 }}>👥 4 personer</span>
                  {d.gaester && <span style={{ fontSize: 12, background: "rgba(255,255,255,0.3)", padding: "4px 12px", borderRadius: 20, fontWeight: "bold" }}>🎉 Gæstemiddag</span>}
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
                {d.recipe.sovse && (
                  <div style={{ marginTop: 20, padding: "14px", background: "#f9f4ff", borderRadius: 12, borderLeft: `4px solid ${d.accent}` }}>
                    <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: d.accent, marginBottom: 10 }}>De to sovse 🥃</div>
                    <div style={{ marginBottom: 10 }}>
                      <div style={{ fontWeight: "bold", fontSize: 13, marginBottom: 4 }}>Skysovs</div>
                      <div style={{ fontSize: 13, color: "#555", lineHeight: 1.5 }}>{d.recipe.sovse.skysovs}</div>
                    </div>
                    <div>
                      <div style={{ fontWeight: "bold", fontSize: 13, marginBottom: 4 }}>Whiskeysovs 🥃</div>
                      <div style={{ fontSize: 13, color: "#555", lineHeight: 1.5 }}>{d.recipe.sovse.whiskeysovs}</div>
                    </div>
                  </div>
                )}
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
                      <span style={{ fontSize: 13, flex: 1, fontWeight: i === activeDay ? "bold" : "normal" }}>{dag.day}{dag.rester ? " ♻️" : ""}{dag.gaester ? " 👥" : ""}</span>
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
            {madplan.map((day, di) => (
              <div key={di} style={{ marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 18 }}>{day.emoji}</span>
                  <span style={{ fontSize: 13, fontWeight: "bold", color: day.accent }}>{day.day} — {day.meal}</span>
                  {day.gaester && <span style={{ fontSize: 11, background: day.color, color: day.accent, padding: "2px 8px", borderRadius: 20, border: `1px solid ${day.accent}40` }}>👥 Gæster</span>}
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