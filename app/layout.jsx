"use client";
import React, { createContext, useContext, useState } from "react";
import { Footer } from "../src/components/footer";
import { ThemeProvider } from "../src/components/theme-provider";
import "../app/globals.css";

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
      <head />
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
