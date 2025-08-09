import { PROJECTS } from "@/features/profile/data/projects";

const content = `# Projects

${PROJECTS.map((item) => {
  const skills = `\n\nSkills: ${item.skills.join(", ")}`;
  const description = item.description ? `\n\n${item.description.trim()}` : "";
  const projectUrl =
    item.links?.github || item.links?.linkedin || item.links?.youtube || "N/A";
  return `## ${item.title}\n\nProject URL: ${projectUrl}${skills}${description}`;
}).join("\n\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
