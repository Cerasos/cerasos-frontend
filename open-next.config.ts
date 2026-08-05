import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Default OpenNext Cloudflare config. The site is fully static, so the
// no-op "dummy" caches are fine. To enable caching (ISR / on-demand
// revalidation), see https://opennext.js.org/cloudflare/caching
export default defineCloudflareConfig({});
