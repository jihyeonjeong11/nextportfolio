import "./globals.css";
import { inter } from "@/components/common/fonts";
import NextThemeProvider from "./theme-provider";
import logo from "@/public/icons/logo.svg";

export const metadata = {
  title: "JIHYEON JEONG",
  description: "frontend dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemeProvider defaultTheme="dark">{children}</NextThemeProvider>
      </body>
    </html>
  );
}
