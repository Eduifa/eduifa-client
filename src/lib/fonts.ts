import localFont from "next/font/local";

export const appDefaultFont = localFont({
  src: [
    {
      path: "./fonts/fonnts.com-DegularDemo-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/fonnts.com-DegularDemo-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./fonts/fonnts.com-DegularDemo-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/fonnts.com-DegularDemo-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/fonnts.com-DegularDemo-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/fonnts.com-DegularDemo-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/fonnts.com-DegularDemo-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/fonnts.com-DegularDemo-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/fonnts.com-DegularDemo-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/fonnts.com-DegularDemo-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/fonnts.com-DegularDemo-SemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/fonnts.com-DegularDemo-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/fonnts.com-DegularDemo-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-app-default",
  display: "swap",
});
