import { Container } from "@mui/material";
import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@components/navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unsplash Image Search",
  description: "Search for images using the Unsplash API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Container fixed>{children}</Container>
      </body>
    </html>
  );
}
