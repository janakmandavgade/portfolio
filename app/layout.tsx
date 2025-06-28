import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

import * as Sentry from "@sentry/nextjs";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Janak's Portfolio",
//   description: "A showcase of my work as a Full-Stack GenAI Developer",
// };

export function generateMetadata(): Metadata {
  return {
      title: "Janak's Portfolio",
      description: "A showcase of my work as a Full-Stack GenAI Developer",
    other: {
      ...Sentry.getTraceData(),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>{/* <link rel="icon" href="/jsm-logo.png" sizes="any" /> */}</head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
