import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Petgroomers — Professional Pet Grooming Salon" },
      {
        name: "description",
        content:
          "Petgroomers offers spa baths, full grooming, and gentle handling by certified groomers. Book your pet's pampering session today.",
      },
      { name: "author", content: "Petgroomers" },
      { property: "og:title", content: "Petgroomers — Professional Pet Grooming Salon" },
      {
        property: "og:description",
        content:
          "Petgroomers offers spa baths, full grooming, and gentle handling by certified groomers. Book your pet's pampering session today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Petgroomers — Professional Pet Grooming Salon" },
      {
        name: "twitter:description",
        content:
          "Petgroomers offers spa baths, full grooming, and gentle handling by certified groomers. Book your pet's pampering session today.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/45e5f6e4-ed2d-4aa6-ac9c-3b80b0e35993/id-preview-a0314d73--c2c87b42-e33a-41bc-97ab-52523765435d.lovable.app-1782046629050.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/45e5f6e4-ed2d-4aa6-ac9c-3b80b0e35993/id-preview-a0314d73--c2c87b42-e33a-41bc-97ab-52523765435d.lovable.app-1782046629050.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Ahead of HeadContent: TanStack sorts stylesheets first, so a
            preconnect declared in the route `links:` array lands AFTER the
            font stylesheet that needs it, making the hint dead. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <HeadContent />
        {/*
          Google Ads tag. The remote bundle is ~155KB brotli / ~460KB parsed —
          larger than this entire app — so loading it in <head> made it compete
          with the stylesheet, fonts and hydration through the whole LCP window.
          The inline stub below queues every call, so deferring the download
          loses nothing.

          Notes on the loader, learned the hard way:
          - requestIdleCallback's 2nd arg is an IdleRequestOptions dictionary,
            NOT a millisecond number. Passing a number throws, and because the
            'load' listener is {once:true} it is already gone — the tag then
            never loads for a visitor who does not interact.
          - 'scroll'/'mousemove' are in the interaction list because a desktop
            wheel-scroller fires none of pointerdown/keydown/touchstart.
          - Interaction handlers defer via setTimeout(...,0) so a 460KB parse
            never lands inside the user's first tap (INP).
          - A 5s timer is the final backstop; the `loaded` flag dedupes.
          Kept terse on purpose: this string ships on all 128 pages.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17957354748');
              (function(){
                var done=false;
                function load(){
                  if(done)return; done=true;
                  var s=document.createElement('script');
                  s.async=true;
                  s.src='https://www.googletagmanager.com/gtag/js?id=AW-17957354748';
                  document.head.appendChild(s);
                }
                function soon(){setTimeout(load,0);}
                function idle(){
                  try{
                    if(window.requestIdleCallback)window.requestIdleCallback(load,{timeout:3000});
                    else setTimeout(load,1);
                  }catch(e){setTimeout(load,1);}
                }
                try{
                  if(document.readyState==='complete')idle();
                  else window.addEventListener('load',idle,{once:true});
                  ['pointerdown','keydown','touchstart','scroll','mousemove'].forEach(function(e){
                    window.addEventListener(e,soon,{once:true,passive:true});
                  });
                }catch(e){}
                setTimeout(load,5000);
              })();
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  // Required: nested routes render here. Removing <Outlet /> breaks all child routes.
  return <Outlet />;
}
