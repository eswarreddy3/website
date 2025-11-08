import React, { Suspense } from "react";
import VerifyClient from "./verify-client";

export default function VerifyPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading verification...</div>}>
      <VerifyClient />
    </Suspense>
  );
}
