import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RSSchool React 2024",
  description: "RS School React 2024",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
