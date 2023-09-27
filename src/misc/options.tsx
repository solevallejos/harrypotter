import { ALL } from "dns";
import { COLORS } from "../assets/color/colors";
import { API_CONTANTS } from "../axios/constants";

export const options: { text: string; color: string, value: string }[] = [
  {
    text: "All",
    color: COLORS.CARD,
    value:  API_CONTANTS.ALL
  },
  {
    text: "Students",
    color: COLORS.CARD,
    value: API_CONTANTS.ALL_STUDENTS
  },
  {
    text: "Staff",
    color: COLORS.CARD,
    value: API_CONTANTS.ALL_STAFF
  },
  {
    text: "Gryffindor",
    color: COLORS.GRYFFINDOR,
    value: API_CONTANTS.HOUSE + '/gryffindor'
  },
  {
    text: "Slytherin",
    color: COLORS.SLYTHERIN,
    value: API_CONTANTS.HOUSE + '/slytherin'
  },
  {
    text: "Hufflepuff",
    color: COLORS.HUFFLEPUFF,
    value: API_CONTANTS.HOUSE + '/hufflepuff'
  },
  {
    text: "Ravenclaw",
    color: COLORS.RAVENCLAW,
    value: API_CONTANTS.HOUSE + '/ravenclaw'
  },
];