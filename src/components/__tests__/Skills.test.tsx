import { describe, it, expect } from 'vitest'
import { render, screen } from '../../test/utils'
import Skills from '../Skills'

describe('Skills', () => {
    it('renders skills section with title', () => {
        render(<Skills />)
        expect(screen.getByText('スキル')).toBeInTheDocument()
    })

    it('renders skill categories', () => {
        render(<Skills />)
        expect(screen.getByText('フロントエンド')).toBeInTheDocument()
        expect(screen.getByText('バックエンド')).toBeInTheDocument()
        expect(screen.getByText('インフラ・ツール')).toBeInTheDocument()
    })

    it('renders frontend skills', () => {
        render(<Skills />)
        expect(screen.getByText('React')).toBeInTheDocument()
        expect(screen.getByText('TypeScript')).toBeInTheDocument()
        expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()
        expect(screen.getByText('Vite')).toBeInTheDocument()
    })

    it('renders backend skills', () => {
        render(<Skills />)
        expect(screen.getByText('Java/Spring Boot')).toBeInTheDocument()
        expect(screen.getByText('Hono')).toBeInTheDocument()
        expect(screen.getByText('Node.js')).toBeInTheDocument()
        expect(screen.getByText('PostgreSQL')).toBeInTheDocument()
    })

    it('renders infrastructure and tool skills', () => {
        render(<Skills />)
        expect(screen.getByText('Bun')).toBeInTheDocument()
        expect(screen.getByText('Git/GitHub')).toBeInTheDocument()
        expect(screen.getByText('Docker')).toBeInTheDocument()
        expect(screen.getByText('GCP')).toBeInTheDocument()
    })

    it('displays skill levels correctly', () => {
        render(<Skills />)
        // 実際のスキルレベルをテスト
        expect(screen.getByText('25%')).toBeInTheDocument() // React
        expect(screen.getByText('30%')).toBeInTheDocument() // TypeScript
        expect(screen.getByText('20%')).toBeInTheDocument() // Tailwind CSS
    })

    it('renders skill icons', () => {
        render(<Skills />)
        const skillSection = screen.getByText('スキル').closest('section')
        const images = skillSection?.querySelectorAll('img')
        expect(images?.length).toBeGreaterThan(0)
    })

    it('has correct section id for navigation', () => {
        render(<Skills />)
        const skillsSection = screen.getByText('スキル').closest('section')
        expect(skillsSection).toHaveAttribute('id', 'skills')
    })

    it('renders skill progress indicators', () => {
        render(<Skills />)
        // プログレスバーのコンテナを確認
        const progressContainers = screen.getAllByText(/\d+%/)
        expect(progressContainers.length).toBeGreaterThan(0)
    })
})