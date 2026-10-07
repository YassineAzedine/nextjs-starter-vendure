"use client";

import {ThemeProvider as NextThemesProvider} from "next-themes";

export function ThemeProvider({children}: {children: React.ReactNode}) {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            // The theme script only needs to run from the server-rendered HTML. Marking it
            // non-executable on the client avoids React 19's "script tag while rendering" warning.
            scriptProps={{type: typeof window === "undefined" ? "text/javascript" : "text/plain"}}
        >
            {children}
        </NextThemesProvider>
    );
}
