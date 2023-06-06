import "./globals.css";
import { Roboto } from "next/font/google";

const poppins = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});
export const metadata = {
  title: "SoftWare LTM",
  description: "SoftWare developer LTM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
