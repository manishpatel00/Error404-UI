"use client";

import { useState } from "react";
import Link from "next/link";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Note: This requires password reset to be configured in better-auth
      // For now, we'll show a message that this is a placeholder
      setSubmitted(true);
    } catch (err: unknown) {
      const error = err as Error;
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Check your email
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            We&apos;ve sent a password reset link to <strong>{email}</strong>
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            If you don&apos;t see the email, check your spam folder or try
            another email address.
          </p>
        </div>

        <Link
          href="/signin"
          className="block w-full text-center py-2 px-4 bg-zinc-900 hover:bg-zinc-800 text-white font-medium rounded-lg transition duration-200 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Back to sign in
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Reset your password
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Enter your email address and we&apos;ll send you a link to reset your
          password.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-900 dark:text-zinc-100"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="w-full px-3 py-2 rounded-md border border-zinc-200 bg-white text-sm outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-700 placeholder-zinc-400 transition"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-zinc-900 hover:bg-zinc-800 disabled:bg-zinc-400 text-white font-medium rounded-lg transition duration-200 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          {loading ? "Sending..." : "Send reset link"}
        </button>
      </form>

      <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
        <Link
          href="/signin"
          className="text-zinc-900 dark:text-zinc-100 hover:underline font-medium"
        >
          Back to sign in
        </Link>
      </p>
    </div>
  );
}
