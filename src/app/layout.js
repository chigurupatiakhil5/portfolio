import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Akhil Chigurupati — Software Engineer",
  description:
    "Software engineer specializing in distributed backend systems, Python microservices, Kafka streaming pipelines, and cloud-native architecture.",
  keywords: [
    "Software Engineer",
    "Python",
    "FastAPI",
    "Kafka",
    "Distributed Systems",
    "AI ML",
    "Docker",
    "Kubernetes",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Akhil Chigurupati" }],
  openGraph: {
    title: "Akhil Chigurupati — Software Engineer",
    description:
      "Software engineer specializing in distributed backend systems, Python microservices, Kafka streaming pipelines, and cloud-native architecture.",
    siteName: "Akhil Chigurupati Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akhil Chigurupati — Software Engineer",
    description:
      "Software engineer specializing in distributed backend systems, Python microservices, Kafka streaming pipelines, and cloud-native architecture.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakarta.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
