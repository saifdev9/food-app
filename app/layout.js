import Header from "./_components/Header";
import "./globals.css";

export const metadata = {
  title: { template: "%s / NextJS Course App", default: "NextLevel Food" },
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}
