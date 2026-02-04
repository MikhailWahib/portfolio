"use client";

import { useEffect } from "react";
import LinkBtn from "@/components/link-btn";

export default function ResumePage() {
  const resumeUrl =
    process.env.NEXT_PUBLIC_RESUME_URL || process.env.RESUME_URL || "";

  useEffect(() => {
    if (resumeUrl) {
      window.location.replace(resumeUrl);
    }
  }, [resumeUrl]);

  if (!resumeUrl) {
    return (
      <div className="flex justify-center flex-col gap-5 h-screen items-center text-3xl text-primary">
        <p className="block">Something Went Wrong</p>
        <LinkBtn href="/" title="Go Back" />
      </div>
    );
  }

  return (
    <div className="flex justify-center flex-col gap-5 h-screen items-center text-3xl text-primary">
      <p className="block">Redirecting to resume…</p>
      <a
        href={resumeUrl}
        className="underline text-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here if not redirected
      </a>
      <LinkBtn href="/" title="Go Back" />
    </div>
  );
}
