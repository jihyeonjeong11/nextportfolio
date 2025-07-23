import { inter } from "../components/common/fonts";
import "@/app/globals.css";

import NextThemeProvider from "./theme-provider";

export const metadata = {
  title: "JIHYEON JEONG",
  description: "frontend dev",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
