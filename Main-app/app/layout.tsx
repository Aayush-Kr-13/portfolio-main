import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Aayush Kumar | System Engineer | Full Stack Developer',
    template: '%s | Aayush Kumar',
  },
  description: 'System Engineer at CGI specializing in AWS cloud solutions, full-stack development with React, Next.js, Node.js. Hackathon winner with 10+ production-ready projects serving 10K+ daily users.',
  keywords: [
    'Aayush Kumar',
    'System Engineer',
    'Full Stack Developer',
    'AWS Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Cloud Computing',
    'CGI',
    'IIIT Dharwad',
    'Web Development',
    'Software Engineer',
    'TypeScript',
    'Python',
    'Portfolio',
    'Hackathon Winner',
  ],
  authors: [{ name: 'Aayush Kumar' }],
  creator: 'Aayush Kumar',
  publisher: 'Aayush Kumar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aayushkumar.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aayush Kumar | System Engineer | Full Stack Developer',
    description: 'System Engineer at CGI specializing in AWS cloud solutions, full-stack development with React, Next.js, Node.js. Hackathon winner with 10+ production-ready projects.',
    url: 'https://aayushkumar.dev',
    siteName: 'Aayush Kumar Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/Aayush.png',
        width: 1200,
        height: 630,
        alt: 'Aayush Kumar - System Engineer & Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aayush Kumar | System Engineer | Full Stack Developer',
    description: 'System Engineer at CGI specializing in AWS cloud solutions and full-stack development. Hackathon winner building scalable applications.',
    images: ['/Aayush.png'],
    creator: '@aayushkumar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
