import "./globals.css";
import { inter } from "@/components/common/fonts";
import NextThemeProvider from "./theme-provider";
import { getLocale } from "next-intl/server";
import { headers } from "next/headers";

export const metadata = {
  title: "JIHYEON JEONG",
  description: "frontend dev",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextThemeProvider defaultTheme="dark">{children}</NextThemeProvider>
      </body>
    </html>
  );
}
