import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

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
        <script
          async src="https://www.googletagmanager.com/gtag/js?id=G-0EBNMYZKGQ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-0EBNMYZKGQ');;
              `,
          }}
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
