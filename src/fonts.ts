import {Raleway, Rubik} from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: '--font-rubik',
  weight: '500',
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: '--font-raleway',
  weight: ['400', '600'],
});

export namespace Fonts {
  export const body = raleway;
  export const headings = rubik;
}
