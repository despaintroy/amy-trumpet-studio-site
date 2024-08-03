import type {Metadata} from "next";
import {Raleway, Rubik} from "next/font/google";
import "./globals.css";
import "./reset.css";
import React from "react";
import {CONTACT_EMAIL, CONTACT_PHONE, CONTACT_URL} from "@/constants";
import {GoogleTagManager} from '@next/third-parties/google'

const rubik = Rubik({
  subsets: ["latin"],
  variable: '--font-rubik'
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: '--font-raleway'
});

export const metadata: Metadata = {
    title: "Amy's Music Studio | Trumpet, Piano, and Clarinet Lessons in Logan, UT",
    description: "Private music lessons in Logan, UT for piano, trumpet, clarinet, and brass instruments",
    applicationName: "Amy's Music Studio",
    keywords: ["music", "lessons", "piano", "trumpet", "clarinet", "brass", "instruments", "private", "studio", "Logan", "UT"],
    authors: [{name: "Amy DeSpain"}],
    openGraph: {
      type: 'website',
      siteName: "Amy's Music Studio",
      url: CONTACT_URL,
      emails: CONTACT_EMAIL,
      phoneNumbers: CONTACT_PHONE,
      locale: "en_US",
      images: "img/cover.webp",
      description: "Private music lessons in Logan, UT for piano, trumpet, clarinet, and brass instruments"
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
    other: {'theme-color': '#9c7a53'}
  }
;

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${rubik.variable} ${raleway.variable}`}>
    <GoogleTagManager gtmId="G-ZEPVRVY775"/>
    <body>{children}</body>
    </html>
  );
}
