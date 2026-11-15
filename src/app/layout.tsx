import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { CursorGlow } from "@/components/CursorGlow";

export const metadata: Metadata = {
  title: "Siddarth Katwal — Full Stack Developer & AI Technologist",
  description:
    "Portfolio of Siddarth Katwal: Full Stack Developer and AI enthusiast based in Nepal, crafting interactive web experiences, modern agency systems, and digital growth architectures.",
  keywords: [
    "Siddarth Katwal",
    "Full Stack Developer",
    "Creative Developer",
    "Full Stack Developer Nepal",
    "Next.js",
    "React",
    "Framer Motion",
    "AI Development",
    "The Fiora Clothing",
    "Skyreel Agency",
    "Global School of Science",
  ],
  authors: [{ name: "Siddarth Katwal" }],
  openGraph: {
    title: "Siddarth Katwal — Full Stack Developer & AI Enthusiast",
    description:
      "Full Stack Developer based in Nepal, engineering high-impact digital experiences with code and AI.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#121212",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#121212] text-neutral-100 antialiased selection:bg-indigo-500 selection:text-white">
        <CursorGlow />
        <Navbar />
        <main className="relative flex flex-col w-full min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
