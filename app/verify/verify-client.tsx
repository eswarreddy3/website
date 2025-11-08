"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { students } from "@/lib/students";

const VerifyClient: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  if (!id) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h2 className="text-2xl font-semibold mb-2">⚠️ Missing Certificate ID</h2>
        <p>Please provide a valid certificate ID in the URL.</p>
      </div>
    );
  }

  const student = students.find((s) => s.uniqueCode === id);

  if (!student) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center text-red-600">
        <h2 className="text-2xl font-bold mb-2">❌ Invalid Certificate</h2>
        <p>No certificate found for ID: <b>{id}</b></p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white shadow-lg rounded-xl p-8 border border-green-400 max-w-md text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">✅ Verified Certificate</h1>

        <div className="text-lg text-gray-800 space-y-2">
          <p><b>Name:</b> {student.name}</p>
          <p><b>Workshop:</b> {student.workshop}</p>
          <p><b>Unique Code:</b> {student.uniqueCode}</p>
          <p><b>Issued By:</b> {student.issuedBy}</p>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Verified on <b>fynity.vercel.app</b>
        </p>
      </div>
    </div>
  );
};

export default VerifyClient;
