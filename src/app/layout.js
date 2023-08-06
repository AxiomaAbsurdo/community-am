import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from "next/script"
import * as analytics from "../app/utils/analytics"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cummunity AM',
  description: 'Master Marketing - Offering expert tips and insights for Marketing Analysts, Social Media Managers, Copywriters, and all digital marketing enthusiasts'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="keywords" content="Marketing Analyst, Social Media Manager, Copywriting, Branding Tips, Digital Marketing, Marketing Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${analytics.GA_TRACKING_ID}`}
        />

        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analytics.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
