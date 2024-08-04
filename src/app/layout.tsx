import type {Metadata, Viewport} from "next";
import "./reset.css";
import "./globals.css";
import React from "react";
import {CONTACT_EMAIL, CONTACT_PHONE, CONTACT_URL} from "@/constants";
import {GoogleTagManager} from '@next/third-parties/google'
import {Fonts} from "@/fonts";

export const metadata: Metadata = {
  title: "Amy's Music Studio | Trumpet, Piano, and Clarinet Lessons in Logan, Utah",
  description: "Private music lessons in Logan, Utah for piano, trumpet, clarinet, and brass instruments",
  applicationName: "Amy's Music Studio",
  keywords: ["music", "lessons", "piano", "trumpet", "clarinet", "brass", "instruments", "private", "studio", "Logan", "UT", "Utah"],
  authors: [{name: "Amy DeSpain"}],
  openGraph: {
    type: 'website',
    siteName: "Amy's Music Studio",
    url: CONTACT_URL,
    emails: CONTACT_EMAIL,
    phoneNumbers: CONTACT_PHONE,
    locale: "en_US",
    images: "img/og.jpg",
    description: "Private music lessons in Logan, Utah for piano, trumpet, clarinet, and brass instruments"
  },
  creator: "Troy DeSpain",
  robots: "index, follow",
  alternates: {canonical: CONTACT_URL},
  icons: {
    shortcut: "img/favicon.ico",
    icon: [
      {sizes: "16x16", url: "favicon-16x16.png"},
      {sizes: "32x32", url: "favicon-32x32.png"},
    ]
  },
};

export const viewport: Viewport = {
  themeColor: '#9c7a53',
}

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={Fonts.body.className}>
    <GoogleTagManager gtmId="G-ZEPVRVY775"/>
    <body>{children}</body>
    </html>
  );
}
