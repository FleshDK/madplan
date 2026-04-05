import { useState } from "react";

// Madplan uge 15 · 2026 · 6.–12. april
// Genereret af MasterKOK 👨‍🍳 søndag 5. april 2026 kl. 08:00
// Baseret på:
// - Bilka-tilbud uge 15 (typiske forårstilbud)
// - Kalender: Mureren mandag hele dagen → nem aftensmad
// - Kalender: Lars ude torsdag (VELUX 16:00–23:00) → nem mad til 3 pers.
// - Familieregel: rester bruges kun dagen efter, aldrig 2 dage efter
// - Ingen lam, ingen ost (undtagen pizza/burger)

const madplan = [
  {
    day: "Mandag",
    dato: "6. april 🔨",
    emoji: "🌮",
    meal: "Tacos med hakket oksekød — nem og hurtig!",
    color: "#fff8e1",
    accent: "#e67e22",
    bilkaTilbud: "Hakket okse/gris 1,3–1,9 kg — 99,- frit valg",
    naering: {
      hel: { kcal: 2800, protein: 200, kulhy: 280, fedt: 100 },
      portion: { kcal: 700, protein: 50, kulhy: 70, fedt: 25 },
    },
    recipe: {
      tid: "25 min",
      svaerhed: "Let",
      intro: "Mureren er hjemme hele dagen — det er en lang dag og ingen gider stå og lave mad i timevis. Tacos er svaret! 25 minutter, alle bygger selv, og det smager skønt. Lav ekstra kød til tirsdagens reste-skål.",
      trin: [
        "Svits hakket oksekød ved god varme. Krydr med tacokrydderi, salt og peber.",
        "Hak tomater, løg og koriander fint til hurtig salsa. Bland og krydr med limesaft og salt.",
        "Varm tortillaerne: tør pande 30 sek per side.",
        "Sæt ALT på bordet: kød, guacamole, salsa, majs, creme fraiche, romaine.",
        "Alle bygger selv! Enkelt og hyggeligt efter en lang murdag. Gem 300g kød til tirsdag!",
      ],
    },
    ingredients: [
      { name: "Hakket oksekød (Bilka tilbud! 99,-)", qty: "700g (gem 300g!)", url: "https://www.bilkatogo.dk/s?query=hakket+oksekoed" },
      { name: "Tacokrydderi", qty: "1-2 pakker", url: "https://www.bilkatogo.dk/s?query=tacokrydderi" },
      { name: "Tortillas (8 stk)", qty: "1 pk", url: "https://www.bilkatogo.dk/s?query=tortillas" },
      { name: "Guacamole (færdig)", qty: "1 bæger", url: "https://www.bilkatogo.dk/s?query=guacamole" },
      { name: "Creme fraiche 18%", qty: "1 bøtte", url: "https://www.bilkatogo.dk/s?query=creme+fraiche" },
      { name: "Majs (dåse)", qty: "1 dåse", url: "https://www.bilkatogo.dk/s?query=majs" },
      { name: "Tomater (til salsa)", qty: "3 stk", url: "https://www.bilkatogo.dk/s?query=tomater" },
      { name: "Romaine/isbergsalat", qty: "1 hoved", url: "https://www.bilkatogo.dk/s?query=salat" },
      { name: "Lime", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=lime" },
    ],
  },
  {
    day: "Tirsdag",
    dato: "7. april",
    emoji: "🫕",
    meal: "Mexicansk reste-skål med ris og sorte bønner",
    rester: true,
    resterFra: "Mandag",
    color: "#fdf2f8",
    accent: "#8e44ad",
    naering: {
      hel: { kcal: 2560, protein: 176, kulhy: 272, fedt: 80 },
      portion: { kcal: 640, protein: 44, kulhy: 68, fedt: 20 },
    },
    recipe: {
      tid: "20 min",
      svaerhed: "Let",
      intro: "Det hakkede kød fra mandag giver en skøn mexicansk skål med ris og sorte bønner. Enkelt, mættende og lidt anderledes end tacoen i går.",
      trin: [
        "Kog 500g basmatiris efter anvisning.",
        "Varm tacokødet fra mandag op i en pande med lidt olie.",
        "Tilsæt sorte bønner (skyllet), majs og 2 spsk sød chilisovs. Varm igennem 3-4 min.",
        "Anret: ris i bund, mexicansk kødblanding ovenpå.",
        "Drys med frisk koriander og server med creme fraiche og limebåd.",
      ],
    },
    ingredients: [
      { name: "Hakket oksekød (rester fra mandag)", qty: "ca. 300g", url: "https://www.bilkatogo.dk/s?query=hakket+oksekoed" },
      { name: "Basmatiris", qty: "500g", url: "https://www.bilkatogo.dk/s?query=basmatiris" },
      { name: "Sorte bønner (dåse)", qty: "1 dåse", url: "https://www.bilkatogo.dk/s?query=sorte+boenner" },
      { name: "Majs (dåse eller rester fra mandag)", qty: "½ dåse", url: "https://www.bilkatogo.dk/s?query=majs" },
      { name: "Sød chilisovs", qty: "2 spsk", url: "https://www.bilkatogo.dk/s?query=chili+sauce" },
      { name: "Creme fraiche (rester fra mandag)", qty: "rester", url: "https://www.bilkatogo.dk/s?query=creme+fraiche" },
      { name: "Koriander (frisk eller tørret)", qty: "til drys", url: "https://www.bilkatogo.dk/s?query=koriander" },
      { name: "Lime (rester fra mandag)", qty: "rester", url: "https://www.bilkatogo.dk/s?query=lime" },
    ],
  },
  {
    day: "Onsdag",
    dato: "8. april",
    emoji: "🍗",
    meal: "Kyllingelår i ovn med rosmarin og bagte kartofler",
    color: "#eafaf1",
    accent: "#27ae60",
    bilkaTilbud: "Kyllingelår dansk kylling 1,8–2,5 kg — 89,- frit valg",
    naering: {
      hel: { kcal: 3040, protein: 240, kulhy: 192, fedt: 128 },
      portion: { kcal: 760, protein: 60, kulhy: 48, fedt: 32 },
    },
    recipe: {
      tid: "50 min (passer sig selv!)",
      svaerhed: "Let",
      intro: "Kyllingelår er billige, saftige og lette! Bare smid det hele i ovnen og glem det i 45 minutter. Rosmarin og hvidløg giver masser af smag. Lav ekstra kylling til torsdag.",
      trin: [
        "Forvarm ovnen til 200°.",
        "Skær kartofler i kvarte (med skræl). Bland med olie, salt, peber, paprika og hvidløg i bradepanden.",
        "Læg kyllingelårene ovenpå. Gnid med olivenolie, rosmarin, salt og peber.",
        "Bag 45-50 min til kyllingen er gylden og sprød. Hæld stegeskyen over kartoflerne halvvejs.",
        "Lav frisk salat imens. Gem 2 kyllingelår til torsdag!",
      ],
    },
    ingredients: [
      { name: "Kyllingelår dansk (Bilka tilbud! 89,-)", qty: "1,4 kg (gem 2 lår!)", url: "https://www.bilkatogo.dk/s?query=kyllingelaer" },
      { name: "Kartofler (store, til bagning)", qty: "1,2 kg", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Hvidløg", qty: "1 hoved", url: "https://www.bilkatogo.dk/s?query=hvidloeg" },
      { name: "Rosmarin (frisk eller tørret)", qty: "2 kviste", url: "https://www.bilkatogo.dk/s?query=rosmarin" },
      { name: "Olivenolie", qty: "4 spsk", url: "https://www.bilkatogo.dk/s?query=olivenolie" },
      { name: "Romaine/grøn salat", qty: "1 pose", url: "https://www.bilkatogo.dk/s?query=salat" },
      { name: "Cherrytomater", qty: "200g", url: "https://www.bilkatogo.dk/s?query=cherrytomater" },
      { name: "Agurk", qty: "½ stk", url: "https://www.bilkatogo.dk/s?query=agurk" },
    ],
  },
  {
    day: "Torsdag",
    dato: "9. april ⚠️",
    emoji: "🥗",
    meal: "Kyllingesalat til 3 — Lars spiser ude (VELUX)",
    rester: true,
    resterFra: "Onsdag",
    color: "#e8f4f8",
    accent: "#2980b9",
    naering: {
      hel: { kcal: 1680, protein: 156, kulhy: 72, fedt: 84 },
      portion: { kcal: 560, protein: 52, kulhy: 24, fedt: 28 },
    },
    recipe: {
      tid: "15 min",
      svaerhed: "Let",
      intro: "⚠️ Lars er til VELUX-middag og spiser ude! Louise, Maya og Karoline får nem kyllingesalat med rester fra onsdag. Frisk, let og klaret på et kvarter.",
      trin: [
        "Riv kyllingelårene fra onsdag i strimler. Fjern knogler og skind.",
        "Bland salat, cherrytomater, agurk og majs i en skål.",
        "Varm pitabrød i ovn 5 min ved 180°.",
        "Lav dressing: 3 spsk olivenolie, 1 spsk dijonsennep, 1 spsk citronsaft, salt, peber.",
        "Bland kylling i salaten, hæld dressing over og server med pitabrød.",
        "God aften til de 3 damer! 🌸",
      ],
    },
    ingredients: [
      { name: "Kyllingelår (rester fra onsdag)", qty: "2 lår ca. 400g", url: "https://www.bilkatogo.dk/s?query=kyllingelaer" },
      { name: "Salat (rester fra onsdag)", qty: "rester", url: "https://www.bilkatogo.dk/s?query=salat" },
      { name: "Cherrytomater (rester fra onsdag)", qty: "rester", url: "https://www.bilkatogo.dk/s?query=cherrytomater" },
      { name: "Agurk (rester fra onsdag)", qty: "½ stk", url: "https://www.bilkatogo.dk/s?query=agurk" },
      { name: "Pitabrød", qty: "3 stk", url: "https://www.bilkatogo.dk/s?query=pitabroed" },
      { name: "Dijonsennep (til dressing)", qty: "1 spsk", url: "https://www.bilkatogo.dk/s?query=dijonsennep" },
      { name: "Citron", qty: "½ stk", url: "https://www.bilkatogo.dk/s?query=citron" },
    ],
  },
  {
    day: "Fredag",
    dato: "10. april",
    emoji: "🍝",
    meal: "Spaghetti Bolognese — stor portion til i morgen",
    color: "#fdedec",
    accent: "#c0392b",
    bilkaTilbud: "Hakket okse/gris 1,3–1,9 kg — 99,- frit valg",
    naering: {
      hel: { kcal: 2960, protein: 208, kulhy: 320, fedt: 96 },
      portion: { kcal: 740, protein: 52, kulhy: 80, fedt: 24 },
    },
    recipe: {
      tid: "40 min",
      svaerhed: "Let",
      intro: "Klassikeren der altid virker. God bolognese kræver tid — men det er det hele værd. Lav en stor portion og gem halvdelen til lørdag's lasagne!",
      trin: [
        "Svits løg, gulerødder og selleri i olivenolie ved medium varme ca. 8 min.",
        "Tilsæt hakket kød. Steg ved høj varme til brunet. Krydr med salt og peber.",
        "Tilsæt 1 dl rødvin (eller oksebouillon). Lad koge ind 3 min.",
        "Tilsæt flåede tomater + 1 spsk tomatpuré. Simmer 25 min ved lav varme med låg.",
        "Kog spaghetti al dente. Bland halvdelen af saucen med pastaen og server.",
        "Gem den anden halvdel af bolognesen til lørdag's lasagne!",
      ],
    },
    ingredients: [
      { name: "Hakket oksekød (Bilka tilbud! 99,-)", qty: "800g (gem halvdelen!)", url: "https://www.bilkatogo.dk/s?query=hakket+oksekoed" },
      { name: "Spaghetti", qty: "500g", url: "https://www.bilkatogo.dk/s?query=spaghetti" },
      { name: "Flåede tomater (dåse)", qty: "2 dåser", url: "https://www.bilkatogo.dk/s?query=flaade+tomater" },
      { name: "Tomatpuré", qty: "2 spsk", url: "https://www.bilkatogo.dk/s?query=tomatpure" },
      { name: "Løg", qty: "2 store", url: "https://www.bilkatogo.dk/s?query=loeg" },
      { name: "Gulerødder", qty: "2 stk", url: "https://www.bilkatogo.dk/s?query=gulerod" },
      { name: "Selleri (stang)", qty: "2 stænger", url: "https://www.bilkatogo.dk/s?query=selleri" },
      { name: "Rødvin (eller oksebouillon)", qty: "1 dl", url: "https://www.bilkatogo.dk/s?query=roedvin" },
      { name: "Olivenolie", qty: "3 spsk", url: "https://www.bilkatogo.dk/s?query=olivenolie" },
    ],
  },
  {
    day: "Lørdag",
    dato: "11. april",
    emoji: "🫙",
    meal: "Lasagne med bolognese fra fredag",
    rester: true,
    resterFra: "Fredag",
    color: "#f4ecf7",
    accent: "#8e44ad",
    naering: {
      hel: { kcal: 3200, protein: 200, kulhy: 336, fedt: 128 },
      portion: { kcal: 800, protein: 50, kulhy: 84, fedt: 32 },
    },
    recipe: {
      tid: "50 min (heraf 30 min i ovnen)",
      svaerhed: "Medium",
      intro: "Med bolognesen fra i går bliver det til klassisk lasagne! Béchamel-sovs, pasta og god fyldig kødlage. Perfekt lørdagsmiddag. Ingen ost på toppen — rasp og timian giver sprødhed i stedet.",
      trin: [
        "Varm bolognesen fra fredag op. Tilsæt lidt vand hvis den er tyk.",
        "Lav béchamel: smelt 50g smør, tilsæt 50g mel, rør til roux. Tilsæt 5 dl mælk lidt ad gangen under konstant piskning. Krydr med salt, peber og muskatnød.",
        "Forvarm ovnen til 180°.",
        "Byg lasagnen i et ovnfast fad: bolognese, lasagneplader, béchamel. Gentag 3 lag.",
        "Afslut med béchamel. Drys rasp og timian på toppen (ingen ost — smager stadig fantastisk!).",
        "Bag 30 min til toppen er gylden og bubler. Hvil 10 min inden servering.",
      ],
    },
    ingredients: [
      { name: "Bolognese-sauce (rester fra fredag)", qty: "ca. 600g", url: "https://www.bilkatogo.dk/s?query=hakket+oksekoed" },
      { name: "Lasagneplader (tørre)", qty: "1 pk (250g)", url: "https://www.bilkatogo.dk/s?query=lasagneplader" },
      { name: "Smør/Lurpak", qty: "50g", url: "https://www.bilkatogo.dk/s?query=lurpak" },
      { name: "Hvedemel", qty: "50g", url: "https://www.bilkatogo.dk/s?query=hvedemel" },
      { name: "Sødmælk", qty: "5 dl", url: "https://www.bilkatogo.dk/s?query=soedmaelk" },
      { name: "Muskatnød", qty: "knsp", url: "https://www.bilkatogo.dk/s?query=muskatnoed" },
      { name: "Rasp (topping i stedet for ost)", qty: "3 spsk", url: "https://www.bilkatogo.dk/s?query=rasp" },
      { name: "Timian (tørret)", qty: "1 tsk", url: "https://www.bilkatogo.dk/s?query=timian" },
    ],
  },
  {
    day: "Søndag",
    dato: "12. april",
    emoji: "🥩",
    meal: "Nakkekoteletter med kartoffelsalat og sennep",
    color: "#e8f8f5",
    accent: "#16a085",
    bilkaTilbud: "Nakkekoteletter dansk gris 1,4–2 kg — 89,- frit valg",
    naering: {
      hel: { kcal: 3040, protein: 224, kulhy: 184, fedt: 152 },
      portion: { kcal: 760, protein: 56, kulhy: 46, fedt: 38 },
    },
    recipe: {
      tid: "40 min",
      svaerhed: "Let",
      intro: "En rigtig dansk søndagsmiddag! Nakkekoteletter er møre og velsmagende — og Bilka har dem på tilbud. Klassisk kartoffelsalat med creme fraiche og rødløg. Hyggeligt søndag-flow!",
      trin: [
        "Kog 800g kartofler med skrællen i saltet vand ca. 15-18 min til møre. Køl lidt af og halvér.",
        "Lav kartoffelsalat: bland kartofler med creme fraiche, dijonsennep, hakket rødløg, persille, salt og peber. Stil køligt.",
        "Bank koteletterne let med håndfladen. Krydr med salt og peber på begge sider.",
        "Steg i smør ved god varme 4-5 min per side til gyldne og gennemstegte.",
        "Lad hvile 3 min inden servering.",
        "Server med kartoffelsalat og sennep. God søndag! 🥩",
      ],
    },
    ingredients: [
      { name: "Nakkekoteletter dansk gris (Bilka tilbud! 89,-)", qty: "1,2 kg (4 store stk)", url: "https://www.bilkatogo.dk/s?query=nakkekoteletter" },
      { name: "Kartofler (til kartoffelsalat)", qty: "800g", url: "https://www.bilkatogo.dk/s?query=kartofler" },
      { name: "Creme fraiche 18%", qty: "2 dl", url: "https://www.bilkatogo.dk/s?query=creme+fraiche" },
      { name: "Rødløg", qty: "1 stk", url: "https://www.bilkatogo.dk/s?query=roedloeg" },
      { name: "Dijonsennep", qty: "1 spsk", url: "https://www.bilkatogo.dk/s?query=dijonsennep" },
      { name: "Persille (frisk)", qty: "til drys", url: "https://www.bilkatogo.dk/s?query=persille" },
      { name: "Smør/Lurpak", qty: "75g", url: "https://www.bilkatogo.dk/s?query=lurpak" },
      { name: "Sennep (server til)", qty: "1 glas", url: "https://www.bilkatogo.dk/s?query=sennep" },
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
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", opacity: 0.5 }}>Uge 15 · 2026</div>
            <div style={{ fontSize: 18, fontWeight: "bold" }}>Bilka Madplan — Uge 15 · 6.–12. april</div>
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
                  {d.rester && <span style={{ fontSize: 11, background: "rgba(255,255,255,0.25)", padding: "2px 8px", borderRadius: 20 }}>Rester fra {d.resterFra}</span>}
                  {d.gaester && <span style={{ fontSize: 11, background: "rgba(255,255,255,0.3)", padding: "2px 8px", borderRadius: 20 }}>GAESTER</span>}
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
                <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#aaa", marginBottom: 10 }}>Ingredienser — klik for BilkaToGo</div>
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
                  <span style={{ fontSize: 12, background: "rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: 20 }}>4{d.gaester ? "+2 gaester" : ""} personer</span>
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
                <div style={{ fontSize: 13, opacity: 0.8, marginTop: 2 }}>Naeringsindhold</div>
              </div>
              <div style={{ padding: "16px 20px" }}>
                <div style={{ display: "flex", gap: 0, background: "#f0f0f0", borderRadius: 10, padding: 3, marginBottom: 16 }}>
                  {[{ key: "portion", label: "Per portion" }, { key: "hel", label: "Hele retten" }].map(v => (
                    <button key={v.key} onClick={() => setNaeringVis(v.key)} style={{ flex: 1, padding: "8px", border: "none", borderRadius: 8, background: naeringVis === v.key ? "white" : "transparent", fontWeight: naeringVis === v.key ? "bold" : "normal", fontSize: 13, cursor: "pointer", fontFamily: "inherit", color: naeringVis === v.key ? d.accent : "#888", boxShadow: naeringVis === v.key ? "0 1px 4px rgba(0,0,0,0.1)" : "none", transition: "all 0.2s" }}>{v.label}</button>
                  ))}
                </div>
                <NaeringKort naering={d.naering} accent={d.accent} vis={naeringVis} />
                <div style={{ marginTop: 24 }}>
                  <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#aaa", marginBottom: 12 }}>Ugens naering (per dag/pers.)</div>
                  {madplan.map((dag, i) => (
                    <div key={i} onClick={() => setActiveDay(i)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 10, cursor: "pointer", background: i === activeDay ? dag.color : "transparent", border: i === activeDay ? `2px solid ${dag.accent}` : "2px solid transparent", marginBottom: 6, transition: "all 0.2s" }}>
                      <span style={{ fontSize: 20 }}>{dag.emoji}</span>
                      <span style={{ fontSize: 13, flex: 1, fontWeight: i === activeDay ? "bold" : "normal" }}>{dag.day}{dag.rester ? " (rester)" : ""}{dag.gaester ? " (gaester)" : ""}</span>
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
              <span style={{ fontWeight: "bold", fontSize: 15 }}>Samlet indkobsliste — 7 dage</span>
              <span style={{ fontSize: 13, opacity: 0.7 }}>{checkedItems}/{totalItems} afkrydset</span>
            </div>
            <div style={{ background: "#fff8e1", border: "2px solid #f39c12", borderRadius: 12, padding: "12px 16px", marginBottom: 16 }}>
              <div style={{ fontWeight: "bold", color: "#e67e22", marginBottom: 4 }}>KALENDER UGE 15: Mureren mandag — nem mad! Lars ude torsdag.</div>
              <div style={{ fontSize: 13, color: "#555" }}>Mandag 6/4: Mureren hele dagen → tacos! Torsdag 9/4: Lars ude (VELUX) → mad til 3 personer.</div>
            </div>
            <div style={{ background: "#e8f4f8", border: "2px solid #2980b9", borderRadius: 12, padding: "12px 16px", marginBottom: 20 }}>
              <div style={{ fontWeight: "bold", color: "#2980b9", marginBottom: 4 }}>Torsdag: Lars spiser ude — mad til Louise, Maya og Karoline 🌸</div>
              <div style={{ fontSize: 13, color: "#555" }}>Nem kyllingesalat med rester fra onsdag. Klaret på 15 minutter!</div>
            </div>
            {madplan.map((day, di) => (
              <div key={di} style={{ marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 18 }}>{day.emoji}</span>
                  <span style={{ fontSize: 13, fontWeight: "bold", color: day.accent }}>{day.day} — {day.meal.length > 50 ? day.meal.slice(0, 50) + "..." : day.meal}</span>
                  {day.rester && <span style={{ fontSize: 11, background: "#f0f0f0", color: "#666", padding: "2px 8px", borderRadius: 20 }}>Rester</span>}
                  {day.gaester && <span style={{ fontSize: 11, background: "#e8f4f8", color: "#2980b9", padding: "2px 8px", borderRadius: 20 }}>Gaester</span>}
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