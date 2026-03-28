import { useState } from "react";

// Madplan uge 15 · 2026 · 30. marts – 5. april
// Genereret af MasterKOK 🥩 baseret på:
// - Bilka-tilbud uge 14 (gælder t.o.m. lørdag 4. april)
// - Kalender: Per & Rikke på besøg mandag 30/3 kl. 18
// - Karoline hjemme fra Kap Verde mandag 30/3
// - Bilka LUKKET: Skærtorsdag 2. april og Langfredag 3. april
// - Familieregel: rester bruges kun dagen efter, aldrig 2 dage efter

const madplan = [
  {
    day: "Mandag",
    dato: "30. marts 🎉",
    emoji: "🥩",
    meal: "Striploin af okse med bearnaisesovs og pommes frites — GÆSTER: Per & Rikke",
    gaester: true,
    color: "#fdf2f8",
    accent: "#8e44ad",
    bilkaTilbud: "Striploin/mørbrad okse 1,2-3 kg — 349,- (frit valg)",
    naering: {
      hel: { kcal: 4200, protein: 320, kulhy: 240, fedt: 200 },
      portion: { kcal: 700, protein: 53, kulhy: 40, fedt: 33 },
    },
    recipe: {
      tid: "50 min",
      sværhed: "Medium",
      intro: "Karoline er hjemme fra Kap Verde — og Per & Rikke kommer til middag! Det kalder på noget ordentligt. Striploin er Bilkas bedste tilbud denne uge (349,- frit valg) og er perfekt til festmiddagen. Lav ekstra pommes frites — de er gode kolde dagen efter. Lav sandwich-rester af det evt. overskydende kød.",
      trin: [
        "Tag bøfferne ud af køleskabet 30 min før tilberedning — de skal have stuetemperatur.",
        "Imens: skær kartofler i stave med skrællen på. Tøm i koldt vand i 15 min, tør grundigt.",
        "Ovn til 210°. Bland kartofler med olie, salt og peber. Spred på bagepapir og bag 30-35 min til sprøde.",
        "Krydr bøfferne generøst med salt og peber — INGEN marinade! Lad kødet tale for sig selv.",
        "Grill- eller støbejernspande på MAX varme med neutral olie. Når den ryger: bøfferne på! 3 min per side for medium-rare.",
        "Hvil bøfferne på en rist i 5 min. Skær mod muskelfibrene.",
        "Bearnaise: smelt smør, pisk æggeblommer med estragoneddike over vandbad, pisk smør i lidt ad gangen. Smag til med estragon og salt.",
        "Anret med bøf, pommes frites og bearnaise. Gem evt. overskydende bøf til sandwich tirsdag.",
      ],
    },
    ingredients: [
      { name: "Striploin af okse (Bilka tilbud! 349,-)", qty: "1,5-1,8 kg", url: "https://www.bilkatogo.dk/s?query=88367641%2088367621" },
      { name: "Kartofler til pommes frites", qty: "1,2 kg", url: "https://www.bilkatogo.dk/s/?search=kartofler" },
      { name: "Æggeblommer (til bearnaise)", qty: "4 stk", url: "https://www.bilkatogo.dk/s/?search=%C3%A6g" },
      { name: "Smør (Lurpak — tilbud!)", qty: "200g", url: "https://www.bilkatogo.dk/s/?search=lurpak" },
      { name: "Estragon (tørret)", qty: "2 tsk", url: "https://www.bilkatogo.dk/s/?search=estragon" },
      { name: "Hvidvinseddike/estragoneddike", qty: "3 spsk", url: "https://www.bilkatogo.dk/s/?search=eddike" },
      { name: "Cherrytomater (til pynt)", qty: "200g", url: "https://www.bilkatogo.dk/s/?search=cherrytomater" },
      { name: "Rucola/salat", qty: "1 pose", url: "https://www.bilkatogo.dk/s/?search=rucola" },
      { name: "Rødvin (til gæsterne)", qty: "1-2 fl.", url: "https://www.bilkatogo.dk/s/?search=r%C3%B8dvin" },
    ],
  },
  {
    day: "Tirsdag",
    dato: "31. marts",
    emoji: "🥪",
    meal: "Bøfsandwich med rester fra mandag",
    rester: true,
    resterFra: "Mandag",
    color: "#eafaf1",
    accent: "#27ae60",
    naering: {
      hel: { kcal: 2400, protein: 176, kulhy: 200, fedt: 96 },
      portion: { kcal: 600, protein: 44, kulhy: 50, fedt: 24 },
    },
    recipe: {
      tid: "15 min",
      sværhed: "Let",
      intro: "Sommerhjul på EV6 kl. 8 — det bliver en travl morgen! Til gengæld er aftensmaden nem: bøfsandwich på mandagens stripoin. Skær kødet i tynde skiver og server på godt brød med tilbehør. Ingen opvarmning nødvendig — koldt bøf i sandwich er faktisk bedre.",
      trin: [
        "Skær resterende striploin i tynde skiver mod muskelfibrene.",
        "Skær ciabatta eller baguette i halve og rist dem på brødristeren eller i ovnen.",
        "Karamelliser løg i smør ved lav varme i 15 min til søde og bløde.",
        "Smør brødet med dijonsennep eller remoulade.",
        "Byg sandwich: bøfskiver, karamelliserede løg, rucola, cherrytomater. Fold og server.",
        "Server med de evt. resterende pommes frites fra mandag — sprøde i ovnen i 5 min ved 200°.",
      ],
    },
    ingredients: [
      { name: "Striploin (rester fra mandag)", qty: "ca. 400g", url: "https://www.bilkatogo.dk/s/?search=bøf" },
      { name: "Ciabatta eller baguette", qty: "2 stk", url: "https://www.bilkatogo.dk/s/?search=ciabatta" },
      { name: "Løg (til karamellisering)", qty: "2 store", url: "https://www.bilkatogo.dk/s/?search=l%C3%B8g" },
      { name: "Smør (Lurpak — tilbud!)", qty: "50g", url: "https://www.bilkatogo.dk/s/?search=lurpak" },
      { name: "Dijonsennep / remoulade", qty: "til smøring", url: "https://www.bilkatogo.dk/s/?search=remoulade" },
      { name: "Rucola + cherrytomater", qty: "fra mandag — rester", url: "https://www.bilkatogo.dk/s/?search=rucola" },
    ],
  },
  {
    day: "Onsdag",
    dato: "1. april ⚠️",
    emoji: "🍗",
    meal: "Kyllingebryst i flødesovs med ris — HUSK: handle alt ind i dag!",
    color: "#fef9e7",
    accent: "#e67e22",
    bilkaTilbud: "Kyllingebrystfilet 2,6 kg — 179,- (frit valg)",
    naering: {
      hel: { kcal: 2880, protein: 248, kulhy: 208, fedt: 112 },
      portion: { kcal: 720, protein: 62, kulhy: 52, fedt: 28 },
    },
    recipe: {
      tid: "35 min",
      sværhed: "Let",
      intro: "⚠️ VIGTIG DAG: Bilka er lukket torsdag og fredag! Handle alt ind til resten af ugen i dag. Kyllingebrystfileten er Bilkas bedste tilbud denne uge (2,6 kg for 179,-). Lav ekstra kylling og ris — brug dem til wraps torsdag. Pak rester klar i køleskabet med det samme.",
      trin: [
        "Skær kyllingebrysterne i medallioner på ca. 2 cm. Krydr med salt, peber og paprika.",
        "Brun kyllingestykker i smør ved høj varme — 3 min per side. Tag ud og hvil.",
        "Svits champignon og løg i samme pande til gyldne, ca. 5 min.",
        "Tilsæt fløde og dijonsennep. Rør godt og lad simre 5 min til sovsen er cremet.",
        "Kom kyllingen tilbage og varm igennem i 3-4 min. Drys med persille.",
        "Kog ris efter pakken. LAV 600g ris i alt — gem halvdelen til wraps torsdag!",
        "Gem 3-4 kyllingestykker i køleskabet til torsdag.",
      ],
    },
    ingredients: [
      { name: "Kyllingebrystfilet (Bilka tilbud! 2,6 kg — 179,-)", qty: "1,2 kg (til 2 dage)", url: "https://www.bilkatogo.dk/s/?search=kyllingebryst" },
      { name: "Champignon", qty: "300g", url: "https://www.bilkatogo.dk/s/?search=champignon" },
      { name: "Løg", qty: "2 stk", url: "https://www.bilkatogo.dk/s/?search=l%C3%B8g" },
      { name: "Fløde 38%", qty: "2½ dl", url: "https://www.bilkatogo.dk/s/?search=fl%C3%B8de" },
      { name: "Dijonsennep", qty: "1 spsk", url: "https://www.bilkatogo.dk/s/?search=dijonsennep" },
      { name: "Ris (basmati)", qty: "600g (lav ekstra!)", url: "https://www.bilkatogo.dk/s/?search=basmatiris" },
      { name: "Smør (Lurpak — tilbud!)", qty: "75g", url: "https://www.bilkatogo.dk/s/?search=lurpak" },
      { name: "Persille (frisk)", qty: "til drys", url: "https://www.bilkatogo.dk/s/?search=persille" },
      { name: "Tortillas (til torsdag — handle ind i dag!)", qty: "1 pk", url: "https://www.bilkatogo.dk/s/?search=tortillas" },
      { name: "Avocado (til torsdag — handle ind i dag!)", qty: "2 stk", url: "https://www.bilkatogo.dk/s/?search=avocado" },
      { name: "Salsa (til torsdag — handle ind i dag!)", qty: "1 glas", url: "https://www.bilkatogo.dk/s/?search=salsa" },
    ],
  },
  {
    day: "Torsdag",
    dato: "2. april — Skærtorsdag 🐣",
    emoji: "🌯",
    meal: "Kyllingewraps med rester fra onsdag — Bilka lukket!",
    rester: true,
    resterFra: "Onsdag",
    color: "#e8f4f8",
    accent: "#2980b9",
    naering: {
      hel: { kcal: 2320, protein: 192, kulhy: 232, fedt: 80 },
      portion: { kcal: 580, protein: 48, kulhy: 58, fedt: 20 },
    },
    recipe: {
      tid: "15 min",
      sværhed: "Let",
      intro: "🐣 God skærtorsdag! Bilka er LUKKET i dag — heldigvis har vi kylling og ris fra onsdag. Hurtigt og nemt: alle bygger selv! Det er påskeferie, afslap og nyd det.",
      trin: [
        "Varm kyllingestykker fra onsdag i en pande med lidt smør — 3-4 min ved middel varme.",
        "Riv kyllingestykkerne i strimler med to gafler eller fingrene.",
        "Varm risene i mikro med lidt vand over — 2 min, rør rundt.",
        "Skær avocado i skiver og dryp med limesaft.",
        "Varm tortillas i tør pande (30 sek per side) eller pakk dem i fugtigt viskestykke og kør dem i mikro i 1 min.",
        "Sæt alt på bordet: kylling, ris, avocado, salsa, creme fraiche, salat. Alle bygger selv — God påske! 🐣",
      ],
    },
    ingredients: [
      { name: "Kylling i flødesovs (rester fra onsdag)", qty: "ca. 400-500g", url: "https://www.bilkatogo.dk/s/?search=kylling" },
      { name: "Ris (rester fra onsdag)", qty: "ca. 300g kogte ris", url: "https://www.bilkatogo.dk/s/?search=ris" },
      { name: "Tortillas (handlet ind onsdag)", qty: "1 pk", url: "https://www.bilkatogo.dk/s/?search=tortillas" },
      { name: "Avocado (handlet ind onsdag)", qty: "2 stk", url: "https://www.bilkatogo.dk/s/?search=avocado" },
      { name: "Salsa (handlet ind onsdag)", qty: "1 glas", url: "https://www.bilkatogo.dk/s/?search=salsa" },
      { name: "Creme fraiche", qty: "1 bøtte", url: "https://www.bilkatogo.dk/s/?search=creme+fraiche" },
      { name: "Romaine salat", qty: "1 hoved", url: "https://www.bilkatogo.dk/s/?search=salat" },
      { name: "Lime", qty: "1 stk", url: "https://www.bilkatogo.dk/s/?search=lime" },
    ],
  },
  {
    day: "Fredag",
    dato: "3. april — Langfredag 🐣",
    emoji: "🐟",
    meal: "Ovnbagt laks med nye kartofler og hvide asparges — Bilka lukket!",
    color: "#fdedec",
    accent: "#c0392b",
    naering: {
      hel: { kcal: 2560, protein: 192, kulhy: 176, fedt: 112 },
      portion: { kcal: 640, protein: 48, kulhy: 44, fedt: 28 },
    },
    recipe: {
      tid: "35 min",
      sværhed: "Let",
      intro: "🐣 Langfredag — Bilka er LUKKET! Laks er en klassiker på Langfredag. Hvide asparges er Bilkas tilbud (28,- pr. bundt). Enkelt, lækkert og perfekt til en stille påskefridag. Husk at handle laks og asparges onsdag!",
      trin: [
        "Forvarm ovnen til 180°. Læg laksen i et ovnfast fad og krydr med salt, peber og dild.",
        "Dryp laksen med citronsaft og læg en klat smør ovenpå.",
        "Dæk med folie og bag i 20-25 min til laksen er netop gennemstegt (stadig let rosa inden i).",
        "Kog nye kartofler i saltet vand — ca. 15 min. Dryp med smeltet smør og hak persille over.",
        "Hvide asparges: skræl den nederste tredjedel. Kog i saltet, let sukkersødet vand i 6-8 min.",
        "Server laks med kartofler, asparges og en klat smeltet smør + frisk citron.",
        "Enkel og festlig påskelangfredagsmiddag! 🐟",
      ],
    },
    ingredients: [
      { name: "Laksefilet (handler ind onsdag!)", qty: "800g-1 kg", url: "https://www.bilkatogo.dk/s/?search=laks" },
      { name: "Hvide asparges (Bilka tilbud! 28,-/bundt)", qty: "2 bundter", url: "https://www.bilkatogo.dk/s/?search=hvide+asparges" },
      { name: "Nye kartofler (Bilka tilbud! 0,95/100g)", qty: "800g", url: "https://www.bilkatogo.dk/s/?search=nye+kartofler" },
      { name: "Smør (Lurpak — tilbud!)", qty: "100g", url: "https://www.bilkatogo.dk/s/?search=lurpak" },
      { name: "Dild (frisk eller tørret)", qty: "til krydderi", url: "https://www.bilkatogo.dk/s/?search=dild" },
      { name: "Citron", qty: "2 stk", url: "https://www.bilkatogo.dk/s/?search=citron" },
      { name: "Persille (frisk)", qty: "til kartofler", url: "https://www.bilkatogo.dk/s/?search=persille" },
    ],
  },
  {
    day: "Lørdag",
    dato: "4. april — Påskelørdag",
    emoji: "🥩",
    meal: "Hakkebøffer med bløde løg og kartofler",
    color: "#f4ecf7",
    accent: "#8e44ad",
    bilkaTilbud: "Hakket okse-/grisekød 1,3-1,9 kg — 99,- (frit valg)",
    naering: {
      hel: { kcal: 3120, protein: 224, kulhy: 208, fedt: 144 },
      portion: { kcal: 780, protein: 56, kulhy: 52, fedt: 36 },
    },
    recipe: {
      tid: "45 min",
      sværhed: "Let",
      intro: "🥩 Påskelørdag og lørdag kalder på familiens yndlingsret! Hakkebøffer med bløde løg er en klassiker familien elsker. Bilka er åbent i dag (7-22) — handler man der, kan man bruge hakket oksekød fra deres tilbud (99,- frit valg). Lav ekstra kartofler — bruges til søndagens nakkefilet!",
      trin: [
        "Hak løgene groft. Svits i RIGELIGT smør ved middel-lav varme i 20-25 min — rør jævnligt. De skal blive bløde, søde og karamelliserede.",
        "Form hakket kød til 4 store bøffer (ca. 200g pr. stk). Krydr med salt og peber. Lav en fordybning i midten med tommelfingeren — så hvælver de ikke.",
        "Steg bøfferne i smør ved middel-høj varme — 4-5 min per side til gennemstegte men stadig saftige.",
        "Kog kartofler i saltet vand i 20 min til møre. Hæld af og lad dampe af lidt.",
        "Lav brun sovs: brug stegefonden fra bøfferne, tilsæt en smule mel, oksebouillon og fløde. Rør til en silkeblød sovs.",
        "Server bøfferne toppet med bløde løg, med kartofler og sovs ved siden af.",
        "Gem 4-5 kogte kartofler til søndagens nakkefilet.",
      ],
    },
    ingredients: [
      { name: "Hakket oksekød (Bilka tilbud! 99,-)", qty: "800g", url: "https://www.bilkatogo.dk/s?query=11250346%2011248420" },
      { name: "Løg (til bløde løg)", qty: "4 store", url: "https://www.bilkatogo.dk/s/?search=l%C3%B8g" },
      { name: "Smør (Lurpak — tilbud!)", qty: "150g", url: "https://www.bilkatogo.dk/s/?search=lurpak" },
      { name: "Kartofler (lav ekstra til søndag!)", qty: "1,2 kg", url: "https://www.bilkatogo.dk/s/?search=kartofler" },
      { name: "Oksebouillon", qty: "3 dl", url: "https://www.bilkatogo.dk/s/?search=oksebouillon" },
      { name: "Fløde 38%", qty: "1 dl (til sovs)", url: "https://www.bilkatogo.dk/s/?search=fl%C3%B8de" },
      { name: "Hvedemel (til sovs)", qty: "1 spsk", url: "https://www.bilkatogo.dk/s/?search=hvedemel" },
      { name: "Salt + peber", qty: "til krydderi", url: "https://www.bilkatogo.dk/s/?search=peber" },
    ],
  },
  {
    day: "Søndag",
    dato: "5. april — 1. Påskedag 🐣",
    emoji: "🐷",
    meal: "Langtidsstegt nakkefilet med rødkål og kartofler fra lørdag",
    rester: true,
    resterFra: "Lørdag",
    color: "#e8f8f5",
    accent: "#16a085",
    bilkaTilbud: "Nakkefilet/ribbensteg dansk gris 1,9-3 kg — 99,- (frit valg)",
    naering: {
      hel: { kcal: 3200, protein: 240, kulhy: 192, fedt: 160 },
      portion: { kcal: 800, protein: 60, kulhy: 48, fedt: 40 },
    },
    recipe: {
      tid: "3 timer",
      sværhed: "Let (men tålmodig)",
      intro: "🐣 God 1. påskedag! Nakkefileten passer sig selv i ovnen og er Bilkas allerbedste tilbud denne uge (99,- for op til 3 kg). Brug kartoflerne fra lørdag — det sparer tid og er nøjagtig rigtigt at bruge rester fra dagen før. Bilka er LUKKET i dag.",
      trin: [
        "Morgenen: Gnid nakkefileten godt med hvidløg, timian, rosmarin, salt og peber.",
        "Forvarm ovnen til 160°. Læg nakkefileten i bradepanden og hæld oksefond + øl (eller vand) ved.",
        "Tilsæt gulerødder og persillerod i grove stykker rundt om kødet.",
        "Dæk tæt med folie og bag i 2½-3 timer til kødet er smukt mørt og falder fra hinanden.",
        "Tag folien af de sidste 20 min. Skru op til 200° for at give en gylden og lidt sprød overflade.",
        "Skær kartoflerne fra lørdag i halve og varm dem i bradepanden de sidste 15 min — de suger stegeskyen til sig!",
        "Varm rødkålen op i en gryde med en klat smør og lidt sukker.",
        "Lav en enkel sovs af stegeskyen: sigt den, kog op og jævn evt. med lidt maizena.",
        "Server og nyd påskedagen med familien. Skål! 🥂",
      ],
    },
    ingredients: [
      { name: "Nakkefilet (Bilka tilbud! 99,-)", qty: "1,8-2 kg", url: "https://www.bilkatogo.dk/s?query=88709981%20901585" },
      { name: "Kartofler (rester fra lørdag)", qty: "4-5 stk kogte", url: "https://www.bilkatogo.dk/s/?search=kartofler" },
      { name: "Rødkål (glas)", qty: "1 stort glas", url: "https://www.bilkatogo.dk/s/?search=r%C3%B8dk%C3%A5l" },
      { name: "Gulerødder", qty: "4 stk", url: "https://www.bilkatogo.dk/s/?search=gulerod" },
      { name: "Persillerod", qty: "2 stk", url: "https://www.bilkatogo.dk/s/?search=persillerod" },
      { name: "Hvidløg + timian + rosmarin", qty: "til marinering", url: "https://www.bilkatogo.dk/s/?search=hvidl%C3%B8g" },
      { name: "Oksefond", qty: "3 dl", url: "https://www.bilkatogo.dk/s/?search=oksefond" },
      { name: "Smør (Lurpak — tilbud!)", qty: "50g", url: "https://www.bilkatogo.dk/s/?search=lurpak" },
      { name: "Maizena (til sovs)", qty: "1-2 tsk", url: "https://www.bilkatogo.dk/s/?search=maizena" },
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
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", opacity: 0.5 }}>Uge 15 · 2026</div>
            <div style={{ fontSize: 20, fontWeight: "bold" }}>🛒 Bilka Madplan — Uge 15 · Påskeugen 🐣</div>
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
                  {d.gaester && <span style={{ position: "absolute", top: -6, right: -6, fontSize: 13 }}>🎉</span>}
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
                  {d.rester && <span style={{ fontSize: 11, background: "rgba(255,255,255,0.25)", padding: "2px 8px", borderRadius: 20 }}>♻️ Rester fra {d.resterFra}</span>}
                  {d.gaester && <span style={{ fontSize: 11, background: "rgba(255,255,255,0.3)", padding: "2px 8px", borderRadius: 20 }}>🎉 GÆSTER</span>}
                </div>
                <div style={{ fontSize: 14, opacity: 0.9, fontStyle: "italic", marginTop: 4 }}>{d.meal}</div>
                {d.bilkaTilbud && (
                  <div style={{ marginTop: 6, fontSize: 11, background: "rgba(255,255,255,0.15)", padding: "4px 10px", borderRadius: 20, display: "inline-block" }}>
                    🏷️ {d.bilkaTilbud}
                  </div>
                )}
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
                  <span style={{ fontSize: 12, background: "rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: 20 }}>👥 4{d.gaester ? "+2 gæster" : ""} personer</span>
                  {d.rester && <span style={{ fontSize: 12, background: "rgba(255,255,255,0.3)", padding: "4px 12px", borderRadius: 20 }}>♻️ Rester fra {d.resterFra}</span>}
                  {d.gaester && <span style={{ fontSize: 12, background: "rgba(255,255,255,0.3)", padding: "4px 12px", borderRadius: 20 }}>🎉 Per &amp; Rikke</span>}
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
                      <span style={{ fontSize: 13, flex: 1, fontWeight: i === activeDay ? "bold" : "normal" }}>{dag.day}{dag.rester ? " ♻️" : ""}{dag.gaester ? " 🎉" : ""}</span>
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
              <div style={{ fontWeight: "bold", color: "#e67e22", marginBottom: 4 }}>⚠️ Påskehensyn — HANDLE ALT IND ONSDAG 1. APRIL!</div>
              <div style={{ fontSize: 13, color: "#555" }}>Bilka LUKKET: Skærtorsdag 2. april og Langfredag 3. april. Påskelørdag 4. april åbent igen (7-22). Husk: laks + asparges + tortillas + avocado til torsdag og fredag!</div>
            </div>
            <div style={{ background: "#e8f4f8", border: "2px solid #2980b9", borderRadius: 12, padding: "12px 16px", marginBottom: 20 }}>
              <div style={{ fontWeight: "bold", color: "#2980b9", marginBottom: 4 }}>🎉 Mandag: Per &amp; Rikke til middag kl. 18!</div>
              <div style={{ fontSize: 13, color: "#555" }}>Striploin til 6 personer (+ Karoline er hjemme fra Kap Verde). Husk ekstra vin og pynt til bordet.</div>
            </div>
            {madplan.map((day, di) => (
              <div key={di} style={{ marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 18 }}>{day.emoji}</span>
                  <span style={{ fontSize: 13, fontWeight: "bold", color: day.accent }}>{day.day} — {day.meal.length > 50 ? day.meal.slice(0, 50) + "…" : day.meal}</span>
                  {day.rester && <span style={{ fontSize: 11, background: "#f0f0f0", color: "#666", padding: "2px 8px", borderRadius: 20 }}>♻️ Rester</span>}
                  {day.gaester && <span style={{ fontSize: 11, background: "#e8f4f8", color: "#2980b9", padding: "2px 8px", borderRadius: 20 }}>🎉 Gæster</span>}
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