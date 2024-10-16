import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Next learning",
  description: "Step by step",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
