import about01 from "../../../../public/images/about01.webp";
import about02 from "../../../../public/images/about02.webp";
import about03 from "../../../../public/images/about03.webp";
import about04 from "../../../../public/images/about04.webp";
import buckwheat from "../../../../public/images/buckwheat.webp";
import chechevica from "../../../../public/images/chechevica.webp";
import corn from "../../../../public/images/corn.webp";
import zhym from "../../../../public/images/zhym.webp";

type AboutCardTitle =
  | "about.card1.title"
  | "about.card2.title"
  | "about.card3.title"
  | "about.card4.title"
  | "about.card5.title"
  | "about.card6.title"
  | "about.card7.title"
  | "about.card8.title";
type AboutCardPopup =
  | "about.card1.popup"
  | "about.card2.popup"
  | "about.card3.popup"
  | "about.card4.popup"
  | "about.card5.popup"
  | "about.card6.popup"
  | "about.card7.popup"
  | "about.card8.popup";

interface AboutCard {
  image: ImageMetadata;
  title: AboutCardTitle;
  popupText: AboutCardPopup;
}

export const aboutCardsContent: AboutCard[] = [
  {
    image: about01,
    title: "about.card1.title",
    popupText: "about.card1.popup",
  },
  {
    image: about02,
    title: "about.card2.title",
    popupText: "about.card2.popup",
  },
  {
    image: about03,
    title: "about.card3.title",
    popupText: "about.card3.popup",
  },
  {
    image: about04,
    title: "about.card4.title",
    popupText: "about.card4.popup",
  },
  {
    image: corn,
    title: "about.card5.title",
    popupText: "about.card5.popup",
  },
  {
    image: zhym,
    title: "about.card6.title",
    popupText: "about.card6.popup",
  },
  {
    image: buckwheat,
    title: "about.card7.title",
    popupText: "about.card7.popup",
  },
  {
    image: chechevica,
    title: "about.card8.title",
    popupText: "about.card8.popup",
  },
];
