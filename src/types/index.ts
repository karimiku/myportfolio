export interface NavItem {
    name: string
    href: string
}

export interface ContactInfo {
    icon: React.ComponentType<any>
    label: string
    value: string
    href?: string
}

export interface Experience {
    period: string
    title: string
    company: string
    location: string
    description: string
}

export interface Skill {
    name: string
    level: number
    icon?: string
}

export interface SkillCategory {
    title: string
    icon: React.ComponentType<any>
    skills: Skill[]
}



export interface Project {
    title: string
    description: string
    image: string
    tags: string[]
    liveUrl: string
    githubUrl: string
    featured: boolean
}

export interface SocialLink {
    icon: React.ComponentType<any>
    href: string
    label: string
}

export interface FormData {
    name: string
    email: string
    message: string
}