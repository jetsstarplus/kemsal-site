import fs from "fs";
import path from "path";
import { ProjectBase, projects, getProjectBySlug } from "./projects";

export type ProjectWithGallery = ProjectBase & { gallery: string[] };

function readGallery(folder: string): string[] {
  const dir = path.join(process.cwd(), "public", "projects", folder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => /\.(png|jpe?g|webp|avif|svg)$/i.test(file))
    .sort()
    .map((file) => `/projects/${folder}/${file}`);
}

export function getProjectBySlugWithGallery(slug: string): ProjectWithGallery | undefined {
  const base = getProjectBySlug(slug);
  if (!base) return undefined;
  const gallery = readGallery(base.folder);
  return { ...base, gallery: gallery.length ? gallery : [base.heroImage] };
}

export function getProjectsWithGallery(): ProjectWithGallery[] {
  return projects.map((project) => {
    const gallery = readGallery(project.folder);
    return { ...project, gallery: gallery.length ? gallery : [project.heroImage] };
  });
}
