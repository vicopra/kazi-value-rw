import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "KAZI | Coming Soon";
const description =
  "KAZI is coming soon. Smarter logistics for a stronger tomorrow.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kazi.value.rw"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://kazi.value.rw",
    siteName: "KAZI",
    type: "website",
    images: [
      {
        url: "/kazi-coming-soon.webp",
        width: 1672,
        height: 941,
        alt: "KAZI - Coming Soon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/kazi-coming-soon.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0d0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
