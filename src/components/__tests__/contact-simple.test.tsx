import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '../../test/utils'
import userEvent from '@testing-library/user-event'
import Contact from '../Contact'

// fetch のモック
const mockFetch = vi.fn()
global.fetch = mockFetch

describe('Contact Component', () => {
    beforeEach(() => {
        mockFetch.mockClear()
    })

    it('renders contact form', () => {
        render(<Contact />)

        expect(screen.getByText('お問い合わせ')).toBeInTheDocument()
        expect(screen.getByLabelText('お名前')).toBeInTheDocument()
        expect(screen.getByLabelText('メールアドレス')).toBeInTheDocument()
        expect(screen.getByLabelText('メッセージ')).toBeInTheDocument()
    })

    it('allows user to type in form fields', async () => {
        const user = userEvent.setup()
        render(<Contact />)

        const nameInput = screen.getByLabelText('お名前')
        const emailInput = screen.getByLabelText('メールアドレス')
        const messageInput = screen.getByLabelText('メッセージ')

        await user.type(nameInput, 'テストユーザー')
        await user.type(emailInput, 'test@example.com')
        await user.type(messageInput, 'テストメッセージ')

        expect(nameInput).toHaveValue('テストユーザー')
        expect(emailInput).toHaveValue('test@example.com')
        expect(messageInput).toHaveValue('テストメッセージ')
    })

    it('shows submit button', () => {
        render(<Contact />)

        const submitButton = screen.getByText('送信する')
        expect(submitButton).toBeInTheDocument()
        expect(submitButton).toHaveAttribute('type', 'submit')
    })

    it('displays contact information', () => {
        render(<Contact />)

        expect(screen.getByText('連絡先')).toBeInTheDocument()
        expect(screen.getByText('test@example.com')).toBeInTheDocument()
    })
})