"use client";

import * as Sentry from "@sentry/nextjs";
import NextErrorComponent from "next/error";
import { useEffect } from "react";

interface GlobalErrorProps {
  error: {
    message: string;
  };
}

export default function GlobalError({ error }: GlobalErrorProps) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <NextErrorComponent statusCode={500} title={error.message} />
      </body>
    </html>
  );
}
