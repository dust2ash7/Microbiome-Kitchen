import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { publicAsset } from "@/lib/public-asset";
import appCss from "../styles.css?url";

const APP_NAME = "Microbiome Kitchen";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "A beginner cookbook of high-protein, whole-food meals for gut-brain health, with cutting lessons and a simple grocery list.",
      },
      { name: "theme-color", content: "#F3EEE4" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,520;9..144,640&family=Outfit:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/svg+xml", href: publicAsset("/favicon.svg") },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: publicAsset("/__grok/manifest.webmanifest") },
      { rel: "apple-touch-icon", href: publicAsset("/__grok/icon-180.png") },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
