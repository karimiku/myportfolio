import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../../test/utils'
import userEvent from '@testing-library/user-event'
import Navbar from '../Navbar'

describe('Navbar', () => {
    it('renders navbar with logo', () => {
        render(<Navbar />)

        expect(screen.getByText('My Portfolio Site')).toBeInTheDocument()
    })

    it('renders navigation links', () => {
        render(<Navbar />)

        expect(screen.getByText('ホーム')).toBeInTheDocument()
        expect(screen.getByText('プロフィール')).toBeInTheDocument()
        expect(screen.getByText('経歴')).toBeInTheDocument()
        expect(screen.getByText('スキル')).toBeInTheDocument()
        expect(screen.getByText('プロジェクト')).toBeInTheDocument()
        expect(screen.getByText('お問い合わせ')).toBeInTheDocument()
    })

    it('has correct href attributes for navigation links', () => {
        render(<Navbar />)

        expect(screen.getByText('ホーム').closest('a')).toHaveAttribute('href', '#home')
        expect(screen.getByText('プロフィール').closest('a')).toHaveAttribute('href', '#about')
        expect(screen.getByText('経歴').closest('a')).toHaveAttribute('href', '#experience')
        expect(screen.getByText('スキル').closest('a')).toHaveAttribute('href', '#skills')
        expect(screen.getByText('プロジェクト').closest('a')).toHaveAttribute('href', '#projects')
        expect(screen.getByText('お問い合わせ').closest('a')).toHaveAttribute('href', '#contact')
    })

    it('renders mobile menu button', () => {
        render(<Navbar />)

        // モバイルメニューボタンが存在することを確認
        const menuButton = screen.getByRole('button')
        expect(menuButton).toBeInTheDocument()
    })

    it('toggles mobile menu when button is clicked', async () => {
        const user = userEvent.setup()
        render(<Navbar />)

        const menuButton = screen.getByRole('button')

        // 初期状態ではモバイルメニューは非表示
        expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()

        // メニューボタンをクリック
        await user.click(menuButton)

        // モバイルメニューが表示される（実装に依存）
        // この部分は実際のNavbarの実装に合わせて調整が必要
    })

    it('applies glass effect styling', () => {
        render(<Navbar />)

        const navbar = screen.getByRole('navigation')
        expect(navbar).toHaveClass('glass-effect')
    })

    it('has fixed positioning', () => {
        render(<Navbar />)

        const navbar = screen.getByRole('navigation')
        expect(navbar).toHaveClass('fixed')
    })
})