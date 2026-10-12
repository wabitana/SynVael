export type TeamMember = {
  id: string;
  name: string;
  title: string;
  department: "executive" | "leadership";
  tag: string;
  initials: string;
  accent: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "debebe",
    name: "Debebe Ketema",
    title: "Chief Executive Officer",
    department: "executive",
    tag: "MANAGEMENT",
    initials: "DK",
    accent: "from-[#cfe9fa] to-[#9fd4ef]",
  },
  {
    id: "muluken",
    name: "Muluken Tilahun",
    title: "Chief Operating Officer",
    department: "leadership",
    tag: "ADMINISTRATIVE",
    initials: "MT",
    accent: "from-[#e8dff5] to-[#c9b8e8]",
  },
  {
    id: "ayana",
    name: "Ayana Basha",
    title: "Chief Technology Officer",
    department: "leadership",
    tag: "ENGINEERING",
    initials: "AB",
    accent: "from-[#f9ead9] to-[#f4c4a8]",
  },
];
