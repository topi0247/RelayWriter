import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Shippori_Mincho_B1 } from "next/font/google";
import Headers from "@/pages/components/headers";
import { useEffect, useRef } from "react";
import { AppProvider } from "@/providers";
import Script from "next/script";
import * as gtag from "@/lib/gtag";
import { useRouter } from "next/router";

const ShipporiMinchoB1 = Shippori_Mincho_B1({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const screenRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleRouterChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gtag.GA_MEASUREMENT_ID}');
          `,
        }}
      />
      <AppProvider>
        <div className={`${ShipporiMinchoB1.className} flex max-h-screen`}>
          <div
            ref={screenRef}
            className="ml-auto flex flex-col vertical-rl w-full hidden-scrollbar"
          >
            <Headers />
            <main className="w-full flex">
              <Component {...pageProps} />
            </main>
          </div>
          <footer className="fixed bottom-0 w-full flex justify-end items-center p-4">
            ©言の葉つむぎ
          </footer>
        </div>
      </AppProvider>
    </>
  );
}
