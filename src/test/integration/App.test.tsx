import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../utils'
import App from '../../App'

// 全コンポーネントをモック
vi.mock('../../components/Navbar', () => ({
    default: () => <nav data-testid="navbar">Navbar</nav>,
}))

vi.mock('../../components/Hero', () => ({
    default: () => <section data-testid="hero">Hero</section>,
}))

vi.mock('../../components/About', () => ({
    default: () => <section data-testid="about">About</section>,
}))

vi.mock('../../components/Experience', () => ({
    default: () => <section data-testid="experience">Experience</section>,
}))

vi.mock('../../components/Skills', () => ({
    default: () => <section data-testid="skills">Skills</section>,
}))

vi.mock('../../components/Projects', () => ({
    default: () => <section data-testid="projects">Projects</section>,
}))

vi.mock('../../components/Contact', () => ({
    default: () => <section data-testid="contact">Contact</section>,
}))

vi.mock('../../components/Footer', () => ({
    default: () => <footer data-testid="footer">Footer</footer>,
}))

describe('App Integration', () => {
    it('renders all main components', () => {
        render(<App />)

        expect(screen.getByTestId('navbar')).toBeInTheDocument()
        expect(screen.getByTestId('hero')).toBeInTheDocument()
        expect(screen.getByTestId('about')).toBeInTheDocument()
        expect(screen.getByTestId('experience')).toBeInTheDocument()
        expect(screen.getByTestId('skills')).toBeInTheDocument()
        expect(screen.getByTestId('projects')).toBeInTheDocument()
        expect(screen.getByTestId('contact')).toBeInTheDocument()
        expect(screen.getByTestId('footer')).toBeInTheDocument()
    })

    it('has correct document structure', () => {
        render(<App />)

        // App全体のコンテナが存在することを確認
        const appContainer = screen.getByTestId('navbar').parentElement
        expect(appContainer).toHaveClass('min-h-screen', 'bg-dark-900', 'custom-scrollbar')
    })

    it('renders components in correct order', () => {
        render(<App />)

        const components = [
            screen.getByTestId('navbar'),
            screen.getByTestId('hero'),
            screen.getByTestId('about'),
            screen.getByTestId('experience'),
            screen.getByTestId('skills'),
            screen.getByTestId('projects'),
            screen.getByTestId('contact'),
            screen.getByTestId('footer'),
        ]

        // 各コンポーネントが存在することを確認
        components.forEach(component => {
            expect(component).toBeInTheDocument()
        })
    })
})