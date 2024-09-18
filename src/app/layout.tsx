import { Metadata } from "next";
import "../styles/index.css";
import ThemeProvider from "../contexts/ThemeContext.tsx";
import StoreProvider from "../store/StoreProvider.tsx";
import { Layout } from "../components/index.tsx";

export const metadata: Metadata = {
  title: "RSSchool React 2024",
  description: "StarTrek Character Search",
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/icon.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <StoreProvider>
            <Layout>{children}</Layout>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
