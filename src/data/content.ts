export interface Contact {
  kind: string
  handle: string
  href: string
}

export interface Project {
  name: string
  blurb: string
  tag: string
  color: 'rose' | 'sage' | 'mauve' | 'gold'
  detail: string
}

export interface SewingItem {
  name: string
  note: string
  swatch: string
  detail: string
}

export const CONTENT: {
  name: string
  location: string
  tagline: string
  blurb: string
  contacts: Contact[]
  projects: Project[]
  sewing: SewingItem[]
} = {
  name: 'Nora',
  location: 'Bergen, Norge',
  tagline: 'Frontend-utvikler om dagen, hobbysamler om kvelden.',
  blurb: 'Jeg lager nettsider til daglig og hundre småting bare for moro skyld — klær jeg faktisk kan gå med, malerier til veggen, små spill ingen andre spiller, og apper som fikser de små hverdagsplagene.',
  contacts: [
        { kind: 'Email',      handle: 'nora.kristiansen@proton.me', href: 'mailto:nora.kristiansen@proton.me' },
    { kind: 'GitHub',     handle: 'NoraKri',                    href: 'https://github.com/NoraKri' },
    { kind: 'LinkedIn',   handle: 'NoraKri',                    href: 'https://www.linkedin.com/in/NoraKri' },
    { kind: 'Threadloop', handle: 'NoraKri',                    href: '#' },
  ],
  projects: [
    { name: 'Brewminder',  blurb: 'En liten bryggetimer som husker favorittene dine.',   tag: 'iOS · SwiftUI',  color: 'rose',  detail: 'Velg en te, trykk start, få en mild lyd når den er klar. Husker de fem siste så du kan brygge på nytt med ett trykk. Lagd for meg, brukt av meg hver ettermiddag.' },
    { name: 'Stitchpad',   blurb: 'Mønsternotater med radteller innebygd.',               tag: 'Web · React',    color: 'sage',  detail: 'For når strikke- og søm-PDF-er ikke holder. Frie notater, trykk-for-å-telle-rader, lagre WIP-bilder ved trinnet de hører til.' },
    { name: 'Quietlist',   blurb: 'En todo-app som ikke roper på deg.',                   tag: 'Web · React',    color: 'mauve', detail: 'Ingen streaks, ingen merker, ingen røde prikker. Bare en liste som holder dagens ting og rolig pakker resten vekk til du spør etter dem.' },
    { name: 'Tiny Garden', blurb: 'Et pikselkunst-puslespill om å dyrke urter.',          tag: 'Spill · Pico-8', color: 'gold',  detail: 'Match småplanter fra samme familie for å få dem til å vokse. 30 små brett, et lydspor jeg lagde i BeepBox, og en chill timer-modus for når du ikke vil tenke.' },
  ],
  sewing: [
    { name: 'Linkjole',          note: 'Egendesignet, knapper bak, dype lommer.',         swatch: '#c39477', detail: 'Tungt linstoff i varm sand. Mønstertegning fra bunnen, tre prøver før jeg stolte på snittet. Lommene rommer en pocketbok.' },
    { name: 'Lappeteppe',        note: 'Restebiter fra hvert prosjekt det siste året.',   swatch: '#e5989b', detail: 'Tolv måneder med restebiter fra hvert plagg, sydd sammen til et mykt teppe til lesestolen. Håndsteppet om kveldene mens jeg så på serier.' },
    { name: 'Kordfløyelsbukser', note: 'Vide bein, kontraststikning.',                     swatch: '#8b6f5c', detail: 'Åtte-rifflet kordfløyel, vide bein, sennepsgul stikning på alle sømmer. Det mest innslitte plagget jeg eier.' },
    { name: 'Skråsnitt-bluse',   note: 'Glatt stoff, lærte meg tålmodighet.',              swatch: '#a4b494', detail: 'Salviegrønn rayon klippet på skrå, franske sømmer og rullekant. Kjempet imot på hvert steg. Hadde den på den første varme dagen i mai.' },
  ],
}
