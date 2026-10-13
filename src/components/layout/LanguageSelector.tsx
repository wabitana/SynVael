"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Check, Search, Globe } from "lucide-react";

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flagUrl: string;
  flagEmoji: string;
}

export const languages: Language[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flagUrl: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gb.svg",
    flagEmoji: "🇬🇧",
  },
  {
    code: "am",
    name: "Amharic",
    nativeName: "አማርኛ",
    flagUrl: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/et.svg",
    flagEmoji: "🇪🇹",
  },
  {
    code: "om",
    name: "Afaan Oromo",
    nativeName: "Oromoo",
    flagUrl: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/et.svg",
    flagEmoji: "🇪🇹",
  },
  {
    code: "ti",
    name: "Tigrinya",
    nativeName: "ትግርኛ",
    flagUrl: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/et.svg",
    flagEmoji: "🇪🇹",
  },
  {
    code: "so",
    name: "Somali",
    nativeName: "Soomaali",
    flagUrl: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/so.svg",
    flagEmoji: "🇸🇴",
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    flagUrl: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/sa.svg",
    flagEmoji: "🇸🇦",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flagUrl: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/fr.svg",
    flagEmoji: "🇫🇷",
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flagUrl: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/es.svg",
    flagEmoji: "🇪🇸",
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flagUrl: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/de.svg",
    flagEmoji: "🇩🇪",
  },
  {
    code: "zh-CN",
    name: "Chinese",
    nativeName: "中文 (简体)",
    flagUrl: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/cn.svg",
    flagEmoji: "🇨🇳",
  },
  {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flagUrl: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/jp.svg",
    flagEmoji: "🇯🇵",
  },
  {
    code: "ru",
    name: "Russian",
    nativeName: "Русский",
    flagUrl: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ru.svg",
    flagEmoji: "🇷🇺",
  },
  {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
    flagUrl: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/pt.svg",
    flagEmoji: "🇵🇹",
  },
  {
    code: "it",
    name: "Italian",
    nativeName: "Italiano",
    flagUrl: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/it.svg",
    flagEmoji: "🇮🇹",
  },
  {
    code: "tr",
    name: "Turkish",
    nativeName: "Türkçe",
    flagUrl: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/tr.svg",
    flagEmoji: "🇹🇷",
  },
  {
    code: "sw",
    name: "Swahili",
    nativeName: "Kiswahili",
    flagUrl: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/ke.svg",
    flagEmoji: "🇰🇪",
  },
  {
    code: "hi",
    name: "Hindi",
    nativeName: "हिन्दी",
    flagUrl: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/in.svg",
    flagEmoji: "🇮🇳",
  },
  {
    code: "ko",
    name: "Korean",
    nativeName: "한국어",
    flagUrl: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/kr.svg",
    flagEmoji: "🇰🇷",
  },
  {
    code: "nl",
    name: "Dutch",
    nativeName: "Nederlands",
    flagUrl: "https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/nl.svg",
    flagEmoji: "🇳🇱",
  },
];

interface LanguageSelectorProps {
  isHome?: boolean;
  isMobile?: boolean;
}

export function LanguageSelector({ isHome = false, isMobile = false }: LanguageSelectorProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedLang, setSelectedLang] = useState<Language>(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Read current active language on mount
  useEffect(() => {
    // Check cookie
    const cookieMatch = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
    const savedCode = cookieMatch ? cookieMatch[1] : localStorage.getItem("synvael_lang");
    if (savedCode) {
      const found = languages.find((l) => l.code.toLowerCase() === savedCode.toLowerCase());
      if (found) {
        setSelectedLang(found);
      }
    }
  }, []);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  function handleSelect(lang: Language) {
    setSelectedLang(lang);
    setOpen(false);
    setSearch("");

    const hostname = window.location.hostname;
    const domainPart = hostname.includes(".") ? `; domain=.${hostname}` : "";

    // Set Google Translate cookies
    if (lang.code === "en") {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;${domainPart}`;
      document.cookie = `googtrans=/en/en; path=/;`;
      document.cookie = `googtrans=/en/en; path=/;${domainPart}`;
    } else {
      document.cookie = `googtrans=/en/${lang.code}; path=/;`;
      document.cookie = `googtrans=/en/${lang.code}; path=/;${domainPart}`;
    }

    localStorage.setItem("synvael_lang", lang.code);

    // Apply to Google Translate combo dropdown
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (select) {
      select.value = lang.code;
      select.dispatchEvent(new Event("change"));
    } else {
      // Reload if combo not rendered yet
      window.location.reload();
    }
  }

  const filtered = languages.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.nativeName.toLowerCase().includes(search.toLowerCase()) ||
      l.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button - Matches exact original flag + chevron appearance */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 border-0 bg-transparent p-0 cursor-pointer focus:outline-hidden group"
        aria-label={`Current language: ${selectedLang.name}. Click to change language`}
        aria-expanded={open}
      >
        <span className="relative flex h-[15px] w-[20px] overflow-hidden rounded-xs shadow-2xs border border-black/10">
          <Image
            src={selectedLang.flagUrl}
            alt={selectedLang.name}
            width={20}
            height={15}
            className="h-full w-full object-cover"
            unoptimized
          />
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          } ${isHome ? "text-white" : "text-[var(--ink)]"}`}
        />
      </button>

      {/* Language Picker Dropdown */}
      {open && (
        <div
          className={`absolute ${
            isMobile ? "left-0" : "right-0"
          } top-full z-50 mt-2.5 w-64 rounded-2xl border border-[var(--border)] bg-white/98 backdrop-blur-xl py-2 shadow-2xl ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-150`}
        >
          {/* Header & Search */}
          <div className="px-3 pt-1 pb-2 border-b border-black/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0f86a1] flex items-center gap-1">
                <Globe className="h-3 w-3" />
                Select Language
              </span>
              <span className="text-[10px] text-[var(--ink-muted)] font-mono">
                {languages.length} Languages
              </span>
            </div>
            <div className="relative flex items-center">
              <Search className="absolute left-2.5 h-3.5 w-3.5 text-gray-400 pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search language..."
                className="w-full rounded-lg bg-[#f7f3ee] py-1.5 pl-8 pr-3 text-xs text-[var(--ink)] placeholder-gray-400 focus:outline-hidden focus:ring-1 focus:ring-[#0f86a1] border border-black/5"
                autoFocus
              />
            </div>
          </div>

          {/* Languages Scroll List */}
          <div className="max-h-64 overflow-y-auto py-1 scrollbar-thin">
            {filtered.length === 0 ? (
              <p className="px-4 py-3 text-xs text-gray-400 text-center">No languages found</p>
            ) : (
              filtered.map((lang) => {
                const isSelected = selectedLang.code === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleSelect(lang)}
                    className={`flex items-center justify-between w-full px-3.5 py-2 text-left text-xs transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#0f86a1]/10 text-[#0f86a1] font-bold"
                        : "text-[var(--ink)] hover:bg-[#f7f3ee]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="relative flex h-[14px] w-[18px] shrink-0 overflow-hidden rounded-xs border border-black/10">
                        <Image
                          src={lang.flagUrl}
                          alt=""
                          width={18}
                          height={14}
                          className="h-full w-full object-cover"
                          unoptimized
                        />
                      </span>
                      <div className="flex flex-col">
                        <span className="font-semibold text-xs leading-none">{lang.nativeName}</span>
                        <span className="text-[10px] text-[var(--ink-muted)] mt-0.5 leading-none">
                          {lang.name}
                        </span>
                      </div>
                    </div>
                    {isSelected && <Check className="h-3.5 w-3.5 text-[#0f86a1]" />}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
