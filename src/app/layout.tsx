import { Stack } from '@/components/ui/stack'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { OfflineBanner } from '@/components/offline-banner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PokeChat',
  description: 'Chat with your favorite Pokemon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-center py-24">
          <Stack className='max-w-md'>
            <OfflineBanner />
            {children}
          </Stack>
        </main>
      </body>
    </html>
  )
}
