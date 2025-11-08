"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { students } from "@/lib/students";
import Head from "next/head";

const VerifyClient: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  // Fynity Brand Colors
  const brandGradient = "from-blue-600 via-purple-600 to-indigo-600";

  return (
    <>
      <Head>
        <title>Certificate Verification | Fynity Innovations</title>
        <meta
          name="description"
          content="Verify certificates issued by Fynity Innovations for workshops, mentorships, and training programs."
        />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700">
            Fynity Innovations
          </h1>
          <p className="text-gray-600 mt-2 tracking-wide">
            Empowering Real-Time Learning & Innovation
          </p>
        </div>

        {!id ? (
          <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-yellow-400 max-w-md text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              ⚠️ Missing Certificate ID
            </h2>
            <p className="text-gray-600">
              Please provide a valid certificate ID in the URL to verify.
            </p>
          </div>
        ) : (() => {
          const student = students.find((s) => s.uniqueCode === id);

          if (!student) {
            return (
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-red-500 max-w-md text-center">
                <h2 className="text-2xl font-bold text-red-600 mb-2">
                  ❌ Invalid Certificate
                </h2>
                <p className="text-gray-700">
                  No certificate found for ID: <b>{id}</b>
                </p>
              </div>
            );
          }

          return (
            <div className="bg-white shadow-2xl rounded-2xl p-8 border-t-4 border-green-500 max-w-md text-center transform transition-all duration-300 hover:scale-[1.02]">
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                ✅ Certificate Verified
              </h2>

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
          );
        })()}

        <footer className="mt-10 text-gray-500 text-sm">
          © {new Date().getFullYear()} <b>Fynity Innovations LLP</b>. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default VerifyClient;
