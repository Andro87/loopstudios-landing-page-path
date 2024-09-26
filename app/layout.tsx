import type { Metadata } from "next";

import { alata } from "./lib/fonts";

import "styles/main.scss";

export const viewport = {
    width: "device-width",
    initialScale: 1
};

export const metadata: Metadata = {
    title: "Frontend Mentor | Loopstudios landing page",
    description: "A Frontend Mentor challenge to improve your code skills "
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={alata.className}>{children}</body>
        </html>
    );
}
