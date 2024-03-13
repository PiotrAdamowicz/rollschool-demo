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
      label: "Klub sportowy rollschool",
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
          externalLink: "https://www.obozrolkowy.pl/"
        },
        {
          href: "/polkolonie",
          label: "Półkolonie letnie i zimowe",
          externalLink: "https://www.obozrolkowy.pl/"
        },
        {
          href: "/zajecia",
          label: "Zajęcia dla dzieci i Dorosłych",
          externalLink: "https://zapisy.rollschool.pl/"
        },
        {
          href: "/wspolpraca",
          label: "Współpraca"
        }
      ]
    },
    {
      href: "/ofundacji",
      label: "O Fundacji"
    },
    {
      href: "/mazowiecka-liga-bladecross",
      label: "Mazowiecka Liga Bladecross",
      subNav: [
        { href: "", label: "Dokumenty do pobrania / regulamin" },
        { href: "/mazowiecka-liga-bladecross", label: "Wyniki" }
      ]
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
