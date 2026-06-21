import './globals.css';

export const metadata = {
  title: 'Threads By Maa | Artisanal Handmade Crochet',
  description: 'Premium handmade crochet flowers, bouquets, and gifts by Threads By Maa. Customizable, artisanal quality from New Delhi.',
  icons: {
    icon: '🧶',
  },
  openGraph: {
    title: 'Threads By Maa | Handmade Crochet',
    description: 'Premium artisanal crochet created with passion',
    url: 'https://threadsbymaa.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Threads By Maa',
    description: 'Premium handmade crochet gifts',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
