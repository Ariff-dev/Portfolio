import type { ReactNode } from 'react'
import { Footer } from '../components/ui/Footer'

export const PrimaryLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className='app-container'>
        <div className='app-content'>{children}</div>
      </div>
      <Footer />
    </>
  )
}
