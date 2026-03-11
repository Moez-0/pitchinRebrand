import { cookies } from "next/headers";
import { defaultLocale, isLocale, localeCookieName, type Locale } from "./config";
import { dictionaries } from "./dictionaries";

export async function getServerLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(localeCookieName)?.value;

  if (cookieValue && isLocale(cookieValue)) {
    return cookieValue;
  }

  return defaultLocale;
}

export async function getServerDictionary() {
  const locale = await getServerLocale();
  return {
    locale,
    t: dictionaries[locale],
  };
}
