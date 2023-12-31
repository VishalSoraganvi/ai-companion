// import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { ClerkProvider } from "@clerk/nextjs";
// import { ThemeProvider } from "@/components/theme-provider";
// import { cn } from "@/lib/utils";
// import { Toaster } from "@/components/ui/toaster";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <ClerkProvider>
//       <html lang="en" suppressHydrationWarning>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           <body className={cn("bg-secondary", inter.className)}>
//             {children}
//             <Toaster />
//           </body>
//         </ThemeProvider>
//       </html>
//     </ClerkProvider>
//   );
// }



import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster';


import './globals.css'
import { ProModal } from '@/components/pro-modal';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Companion.AI',
  description: 'Your customized companion.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn("bg-secondary", inter.className)}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <ProModal />
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}