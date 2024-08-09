import { Metadata } from "next";
import "../styles/index.css";
import ThemeProvider from "../contexts/ThemeContext.tsx";
import StoreProvider from "../store/StoreProvider.tsx";
import { Layout } from "../components/index.tsx";

export const metadata: Metadata = {
  title: "StarTrek Character Search",
  description: "RSSchool React 2024",
  icons: [
    {
      rel: "icon",
      type: "image/svg+xm",
      sizes: "32x32",
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
