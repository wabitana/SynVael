export type TeamMember = {
  id: string;
  name: string;
  role: string;
  group: "executive" | "leadership";
  department: string;
  avatar: string;
  bio: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "ceo",
    name: "Debebe Ketema",
    role: "Chief Executive Officer",
    group: "executive",
    department: "Management",
    avatar: "/circle/ava-01.png",
    bio: "Leads company direction, client partnerships, and delivery standards across every engagement.",
  },
  {
    id: "coo",
    name: "Muluken Tilahun",
    role: "Chief Operating Officer",
    group: "leadership",
    department: "Management",
    avatar: "/circle/ava-02.png",
    bio: "Owns operations, resourcing, and the rhythms that keep projects predictable from kickoff through support.",
  },
  {
    id: "cto",
    name: "Ayana Basha",
    role: "Chief Technology Officer",
    group: "leadership",
    department: "Administrative",
    avatar: "/circle/ava-01.png",
    bio: "Sets engineering practices, architecture decisions, and the technical bar for everything we ship.",
  },
];
