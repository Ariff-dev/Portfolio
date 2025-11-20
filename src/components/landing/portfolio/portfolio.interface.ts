export interface Project {
  id: number
  title: string
  image: string
  shortDescription: string
  fullDescription: string
  technologies: string[]
  link?: string
  github?: string
  date: string
}