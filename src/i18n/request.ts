import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.

  const headerList = await headers();
  const accept = headerList.get("accept-language");
  const locale = accept?.split(",")[0].split("-")[0] || "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
