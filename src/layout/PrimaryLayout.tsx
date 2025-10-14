import type { ReactNode } from "react"

export const PrimaryLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="app-container">
  <div className="app-content">
    {children}
  </div>
</div>
  )
}