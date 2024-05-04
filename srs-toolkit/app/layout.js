import "./globals.css";
import {noto_serif, noto_sans} from "./fonts";

export const metadata = {
  title: "Dynamic Pimsler",
  description: "Learning through a proven method, dynamically",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto_serif.className}>{children}</body>
    </html>
  );
}
