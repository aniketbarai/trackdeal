import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata = {
  title: "Track Deal",
  description: "Never miss a great deal at the best price.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}