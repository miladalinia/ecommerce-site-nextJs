import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'products',
  description: 'products description',
}

type Props={
  children: React.ReactNode
}

export default function ProductsLayout({children}: Props) {
  return (
      <section className='max-w-[1200px] mt-20 mx-auto'>{children}</section>
  )
}
