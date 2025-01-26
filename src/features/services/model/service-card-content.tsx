import { GrainsBoldIcon } from "../../../shared/icons/grains-bold-icon";
import { HandshakeIcon, TruckIcon } from "lucide-react";

export type ServiceCardTitle =
  | "services.card1.title"
  | "services.card2.title"
  | "services.card3.title";
export type ServiceCardText =
  | "services.card1.text"
  | "services.card2.text"
  | "services.card3.text";

interface ServiceCard {
  Icon: any;
  title: ServiceCardTitle;
  text: ServiceCardText;
}

export const serviceCardContent: ServiceCard[] = [
  {
    Icon: GrainsBoldIcon,
    title: "services.card1.title",
    text: "services.card1.text",
  },
  {
    Icon: TruckIcon,
    title: "services.card2.title",
    text: "services.card2.text",
  },
  {
    Icon: HandshakeIcon,
    title: "services.card3.title",
    text: "services.card3.text",
  },
];
