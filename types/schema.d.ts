import { NuxtModule } from "@nuxt/schema";
declare module "@nuxt/schema" {
  interface NuxtConfig {
    ["sitemap"]?: {
      hostname?: string;
      gzip?: boolean;
      exclude?: string[];
      cacheTime?: number;
    };
  }
}
