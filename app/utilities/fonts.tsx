import { Fjalla_One, Montserrat, Noto_Serif_Gurmukhi } from "next/font/google";

export const fjalla = Fjalla_One({ subsets: ["latin"], weight: ["400"] });
export const mont = Montserrat({ subsets: ["latin"] });
export const serif_gurmukhi = Noto_Serif_Gurmukhi({
  subsets: ["gurmukhi"],
  weight: ["400"],
});
