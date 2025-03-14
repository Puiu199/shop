import { ReactNode } from "react";
import NavBar from "../navBar/NavBar";

interface LayoutProps {
  children: ReactNode;
}
export default function LayoutNavBar({ children }: LayoutProps) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
