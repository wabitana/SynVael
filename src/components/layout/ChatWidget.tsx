"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

export function ChatWidget() {
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="max-w-[240px] rounded-2xl border border-[var(--border)] bg-white p-4 shadow-xl">
          <div className="mb-2 flex items-start justify-between gap-2">
            <p className="text-xs font-bold text-[var(--ink)]">SynVael AI Assistant</p>
            <button
              type="button"
              aria-label="Close assistant message"
              className="rounded p-0.5 text-[var(--ink-muted)] hover:bg-[#f7f3ee]"
              onClick={() => setOpen(false)}
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
          <p className="text-sm text-[var(--ink-muted)]">
            Hey — I&apos;m SynVael&apos;s AI assistant, here to help.
          </p>
        </div>
      )}
      <button
        type="button"
        aria-label="Open chat with SynVael AI Assistant"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-[var(--border)]"
        onClick={() => setOpen((v) => !v)}
      >
        <Image src="/images/ai-y-mark.png" alt="" width={28} height={28} />
      </button>
    </div>
  );
}
