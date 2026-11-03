import "./globals.css";

export const metadata = {
  title: "Choudary Sangam Kumari — Full Stack Developer",
  description:
    "Portfolio of Choudary Sangam Kumari, Full Stack Developer (MERN, Next.js, React Native) with 1.5 years of experience and an MBA in Finance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
