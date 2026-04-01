import {isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration,} from "react-router";

import type {Route} from "./+types/root";
import "./app.css";
import Navbar from "~/components/Navbar";
import ContextProvider from "~/store/context";

export const links: () => [{ rel: string; href: string }, { rel: string; crossOrigin: string; href: string }, {
  rel: string;
  href: string
}] = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <ContextProvider>
    <Outlet/>
  </ContextProvider>;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404 | Not Found" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
      <main className="mt-20 p-4 container mx-auto absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center text-2xl mb-4">{message}</h1>
        <p className="text-center text-xl">{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
