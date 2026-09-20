import "./globals.css";

export const metadata = {
  title: "Tino Nyazika",
  description: "Strategy first, content second, growth always.",
  authors: [{ name: "Tino Nyazika" }],
  openGraph: {
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lovable",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=Inter:wght@400;500;600&display=swap"
        />
        {children}
      </body>
    </html>
  );
}