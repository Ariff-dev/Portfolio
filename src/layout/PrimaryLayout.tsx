import type { ReactNode } from "react";
import { Footer } from "../components/ui/Footer";

export const PrimaryLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* Luces atmosféricas de fondo */}
      <div aria-hidden="true" className="bg-orb bg-orb-1" />
      <div aria-hidden="true" className="bg-orb bg-orb-2" />

      <div className="app-container">
        <div className="app-content">{children}</div>
      </div>
      <Footer />
    </>
  );
};
