"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { teamMembers, type TeamMember } from "@/lib/team";

const filters = [
  { id: "all", label: "Everyone", count: teamMembers.length },
  {
    id: "executive",
    label: "Executive",
    count: teamMembers.filter((m) => m.group === "executive").length,
  },
  {
    id: "leadership",
    label: "Leadership",
    count: teamMembers.filter((m) => m.group === "leadership").length,
  },
] as const;

export function TeamDirectory() {
  const [view, setView] = useState<"hierarchy" | "list">("hierarchy");
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const visible = useMemo(
    () => teamMembers.filter((m) => filter === "all" || m.group === filter),
    [filter],
  );

  const executive = visible.filter((m) => m.group === "executive");
  const leadership = visible.filter((m) => m.group === "leadership");
  const selected = teamMembers.find((m) => m.id === selectedId) ?? null;

  return (
    <section className="yanol-team-panel">
      <div className="yanol-container space-y-8 pb-16">
        <div className="flex flex-col items-center gap-4">
          <div className="yanol-toggle-group" role="tablist" aria-label="Team view">
            <button
              type="button"
              role="tab"
              aria-selected={view === "hierarchy"}
              className={view === "hierarchy" ? "yanol-toggle active" : "yanol-toggle"}
              onClick={() => setView("hierarchy")}
            >
              Hierarchy
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={view === "list"}
              className={view === "list" ? "yanol-toggle active" : "yanol-toggle"}
              onClick={() => setView("list")}
            >
              List
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                className={filter === f.id ? "yanol-filter-pill active" : "yanol-filter-pill"}
                onClick={() => {
                  setFilter(f.id);
                  setSelectedId(null);
                }}
              >
                {f.label} {f.count}
              </button>
            ))}
          </div>
        </div>

        {view === "hierarchy" ? (
          <div className="yanol-org-chart">
            {executive.length > 0 && (
              <div className="space-y-4">
                <p className="yanol-org-label">Executive</p>
                <div className="flex flex-wrap justify-center gap-6">
                  {executive.map((m) => (
                    <TeamCard
                      key={m.id}
                      member={m}
                      selected={selectedId === m.id}
                      onSelect={() => setSelectedId((id) => (id === m.id ? null : m.id))}
                    />
                  ))}
                </div>
              </div>
            )}
            {leadership.length > 0 && executive.length > 0 && (
              <div className="yanol-org-tree-bridge" aria-hidden>
                <span className="yanol-org-tree-stem" />
                <span className="yanol-org-tree-bar" />
              </div>
            )}
            {leadership.length > 0 && (
              <div className="space-y-4">
                <p className="yanol-org-label">Leadership</p>
                <div className="flex flex-wrap justify-center gap-6">
                  {leadership.map((m) => (
                    <TeamCard
                      key={m.id}
                      member={m}
                      selected={selectedId === m.id}
                      onSelect={() => setSelectedId((id) => (id === m.id ? null : m.id))}
                    />
                  ))}
                </div>
              </div>
            )}
            <p className="text-center text-sm text-[var(--ink-muted)]">
              Select any card to see the full profile.
            </p>
          </div>
        ) : (
          <ul className="mx-auto grid max-w-3xl gap-4">
            {visible.map((m) => (
              <li key={m.id}>
                <TeamCard
                  member={m}
                  horizontal
                  selected={selectedId === m.id}
                  onSelect={() => setSelectedId((id) => (id === m.id ? null : m.id))}
                />
              </li>
            ))}
          </ul>
        )}

        {selected && (
          <article className="yanol-team-profile mx-auto max-w-xl">
            <Image
              src={selected.avatar}
              alt=""
              width={96}
              height={96}
              className="yanol-team-photo mx-auto"
            />
            <h3 className="mt-4 text-center text-xl font-bold text-[var(--ink)]">{selected.name}</h3>
            <p className="text-center text-sm text-[var(--ink-muted)]">{selected.role}</p>
            <p className="mt-1 text-center text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--teal-600)]">
              {selected.department}
            </p>
            <p className="mt-4 text-center text-sm leading-relaxed text-[var(--ink-muted)]">
              {selected.bio}
            </p>
            <button
              type="button"
              className="mx-auto mt-6 block text-sm font-semibold text-[var(--teal-600)] hover:underline"
              onClick={() => setSelectedId(null)}
            >
              Close profile
            </button>
          </article>
        )}
      </div>
    </section>
  );
}

export function TeamHeroAside() {
  return (
    <div className="mt-6 flex items-center gap-3">
      <div className="flex -space-x-3">
        {teamMembers.map((m) => (
          <Image
            key={m.id}
            src={m.avatar}
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border-2 border-white object-cover shadow-sm"
          />
        ))}
      </div>
      <p className="text-xs font-medium text-[var(--ink-muted)]">
        {teamMembers.length} people across 4 teams, one shared delivery standard.
      </p>
    </div>
  );
}

function TeamCard({
  member,
  horizontal = false,
  selected = false,
  onSelect,
}: {
  member: TeamMember;
  horizontal?: boolean;
  selected?: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      className={
        horizontal
          ? `yanol-team-card horizontal text-left ${selected ? "selected" : ""}`
          : `yanol-team-card ${selected ? "selected" : ""}`
      }
      onClick={onSelect}
      aria-pressed={selected}
    >
      <Image
        src={member.avatar}
        alt=""
        width={horizontal ? 72 : 120}
        height={horizontal ? 72 : 120}
        className={horizontal ? "yanol-team-photo sm" : "yanol-team-photo"}
      />
      <div>
        <h3 className="font-bold text-[var(--ink)]">{member.name}</h3>
        <p className="text-sm text-[var(--ink-muted)]">{member.role}</p>
        <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--teal-600)]">
          {member.department}
        </p>
      </div>
    </button>
  );
}
