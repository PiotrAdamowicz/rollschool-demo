import type { LinksType } from "../types/index";

export const links: LinksType = {
  navigation: [
    {
      href: "/rolkowa-mapa-warszawy",
      label: "Rolkowa Mapa Warszawy"
    },
    {
      href: "/sklep-rollschool",
      label: "Sklep"
    },
    {
      href: "/klub-sportowy-rollschool",
      label: "Klub sportowy rollschool"
    },
    {
      href: "/ofundacji",
      label: "O Fundacji",
      subNav: [
        {
          href: "/sekcja-sportowa-dla-dzieci",
          label: "Sekcja sportowa dla dzieci"
        },
        {
          href: "/kadra",
          label: "Kadra"
        },
        {
          href: "/letnie-obozy-rolkowe",
          label: "Letnie obozy rolkowe",
          externalLink: ""
        },
        {
          href: "/polkolonie",
          label: "Półkolonie letnie i zumowe",
          externalLink: ""
        },
        {
          href: "/zajecia",
          label: "Zajęcia dla dzieci i Dorosłych"
        },
        {
          href: "/wspolpraca",
          label: "Współpraca"
        }
      ]
    },
    {
      href: "/mazowiecka-liga-bladecross",
      label: "Mazowiecka Liga Bladecross"
    },
    {
      href: "/kontakt",
      label: "Kontakt"
    }
  ],
  other: [
    {
      href: "/poradnik-rolkowy",
      label: "Poradnik Rolkowy"
    },
    {
      href: "/login",
      label: "Zaloguj"
    },
    {
      href: "/oferta",
      label: "Oferta"
    },
    {
      href: "/wypozyczalnia-rolek",
      label: "Wypożyczalnia Rolek"
    }
  ]
};
