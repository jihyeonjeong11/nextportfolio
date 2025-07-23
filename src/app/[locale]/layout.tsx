import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import NextThemeProvider from "../theme-provider";
import { inter } from "@/components/common/fonts";

export const metadata = {
  title: "JIHYEON JEONG",
  description: "frontend dev",
  icons: {
    icon: [{ url: "/icons/logo.svg" }],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider>
          <NextThemeProvider defaultTheme="dark">{children}</NextThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
