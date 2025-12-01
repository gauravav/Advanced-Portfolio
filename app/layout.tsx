'use client';

import "./globals.css";
import Navbar from "./components/Navbar";
import GridBackground from "./components/GridBackground";
import { useState, createContext, useContext } from "react";

interface NavigationContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const NavigationContext = createContext<NavigationContextType>({
  activeSection: 'home',
  setActiveSection: () => {},
});

export const useNavigation = () => useContext(NavigationContext);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <html lang="en">
      <head>
        <title>Gaurav Avula - AdvancedPortfolio</title>
        <meta name="description" content="Advanced portfolio showcasing professional experience, projects, and applications with interactive animations" />
      </head>
      <body>
        <NavigationContext.Provider value={{ activeSection, setActiveSection }}>
          <GridBackground />
          <div className="relative z-10">
            <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
            <main className="min-h-screen pt-20">
              {children}
            </main>
          </div>
        </NavigationContext.Provider>
      </body>
    </html>
  );
}
