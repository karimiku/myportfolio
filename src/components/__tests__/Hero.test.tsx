import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../../test/utils'
import Hero from '../Hero'

// TypeWriterコンポーネントをモック
vi.mock('../TypeWriter', () => ({
    default: ({ text, className }: { text: string; className?: string }) => (
        <span className={className}>{text}</span>
    ),
}))

describe('Hero', () => {
    it('renders hero section with correct content', () => {
        render(<Hero />)

        // セクションが存在することを確認
        expect(screen.getByRole('region')).toBeInTheDocument()

        // TypeWriterコンポーネントのテキストが表示されることを確認
        expect(screen.getByText('Hello')).toBeInTheDocument()
        expect(screen.getByText("I'm Rikuto")).toBeInTheDocument()
    })

    it('renders profile image with correct attributes', () => {
        render(<Hero />)

        const profileImage = screen.getByAltText('プロフィール写真')
        expect(profileImage).toBeInTheDocument()
        expect(profileImage).toHaveAttribute('src', '/profile-dog.JPG')
    })

    it('renders action buttons', () => {
        render(<Hero />)

        expect(screen.getByText('プロジェクトを見る')).toBeInTheDocument()
        expect(screen.getByText('詳しく見る')).toBeInTheDocument()
    })

    it('renders social links', () => {
        render(<Hero />)

        const githubLink = screen.getByLabelText('GitHub')
        expect(githubLink).toBeInTheDocument()
        expect(githubLink).toHaveAttribute('href', 'https://github.com/karimiku')
    })

    it('renders editor-style window controls', () => {
        render(<Hero />)

        expect(screen.getByText('portfolio.tsx')).toBeInTheDocument()
    })

    it('renders scroll indicator', () => {
        render(<Hero />)

        // ChevronDownアイコンが存在することを確認（lucide-reactのモックが必要）
        const scrollIndicator = screen.getByRole('region').querySelector('.cursor-pointer')
        expect(scrollIndicator).toBeInTheDocument()
    })

    it('has correct section id for navigation', () => {
        render(<Hero />)

        const heroSection = screen.getByRole('region')
        expect(heroSection).toHaveAttribute('id', 'home')
    })
})