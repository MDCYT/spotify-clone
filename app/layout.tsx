import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'

import Sidebar from '@/components/Sidebar'
import Player from '@/components/Player'

import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'

import getSongsByUserId from '@/actions/getSongsByUserId'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://music.mdcdev.me'),
  title: 'Music App',
  description: 'Listen to your favorite songs',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://music.mdcdev.me',
    siteName: 'Music App',
    title: 'Music App',
    description: 'Listen to your favorite songs',
    images: "https://api.microlink.io/?url=https://music.mdcdev.me&screenshot=true&meta=false&embed=screenshot.url&waitFor=1000",
  },
  twitter: {
    creator: '@mdc_dev',
    images: "https://api.microlink.io/?url=https://music.mdcdev.me&screenshot=true&meta=false&embed=screenshot.url&waitFor=1000",
  },
}

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
            <Player/>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
