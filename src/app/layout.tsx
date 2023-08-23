import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Container } from "@mui/material";
import NavBar from "@components/navbar/NavBar";
import { SWRProvider } from "./swr-provider";
import styles from "./page.module.scss";
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
    <SWRProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          <Container fixed className={styles.pageContainer}>
            {children}
          </Container>
        </body>
      </html>
    </SWRProvider>
  );
}
