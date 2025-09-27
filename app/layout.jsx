"use client";
import React, { createContext, useContext, useState } from "react";
import Script from "next/script";
import { Footer } from "../src/components/footer";
import { ThemeProvider } from "../src/components/theme-provider";

const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ user: null }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Correct placement for the Tailwind script using next/script */}
        <Script
          src="https://cdn.tailwindcss.com"
          strategy="beforeInteractive" // Use 'beforeInteractive' to load the script before the page becomes interactive
        />
      </head>
      <body>
        <div className="font-sans antialiased">
          <AuthProvider>
            <ThemeProvider
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}{" "}
              {/* This is where your page content will be rendered */}
              <Footer />
            </ThemeProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
