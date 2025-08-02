import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '../../test/utils'
import userEvent from '@testing-library/user-event'
import Contact from '../Contact'

// fetch のモック
const mockFetch = vi.fn()
global.fetch = mockFetch

describe('Contact', () => {
    beforeEach(() => {
        mockFetch.mockClear()
    })

    it('renders contact section with form', () => {
        render(<Contact />)

        expect(screen.getByText('お問い合わせ')).toBeInTheDocument()
        expect(screen.getByText('メッセージを送る')).toBeInTheDocument()
        expect(screen.getByLabelText('お名前')).toBeInTheDocument()
        expect(screen.getByLabelText('メールアドレス')).toBeInTheDocument()
        expect(screen.getByLabelText('メッセージ')).toBeInTheDocument()
    })

    it('renders contact information', () => {
        render(<Contact />)

        expect(screen.getByText('連絡先')).toBeInTheDocument()
        expect(screen.getByText('test@example.com')).toBeInTheDocument()
        expect(screen.getByText('Test Location')).toBeInTheDocument()
    })

    it('renders social links', () => {
        render(<Contact />)

        expect(screen.getByText('SNS')).toBeInTheDocument()
        const githubLink = screen.getByLabelText('GitHub')
        expect(githubLink).toHaveAttribute('href', 'https://github.com/test')
    })

    it('updates form data when user types', async () => {
        const user = userEvent.setup()
        render(<Contact />)

        const nameInput = screen.getByLabelText('お名前')
        const emailInput = screen.getByLabelText('メールアドレス')
        const messageInput = screen.getByLabelText('メッセージ')

        await user.type(nameInput, 'Test User')
        await user.type(emailInput, 'test@example.com')
        await user.type(messageInput, 'Test message')

        expect(nameInput).toHaveValue('Test User')
        expect(emailInput).toHaveValue('test@example.com')
        expect(messageInput).toHaveValue('Test message')
    })

    it('submits form successfully', async () => {
        const user = userEvent.setup()
        mockFetch.mockResolvedValueOnce({
            ok: true,
            status: 200,
        })

        render(<Contact />)

        // フォームに入力
        await user.type(screen.getByLabelText('お名前'), 'Test User')
        await user.type(screen.getByLabelText('メールアドレス'), 'test@example.com')
        await user.type(screen.getByLabelText('メッセージ'), 'Test message')

        // 送信ボタンをクリック
        const submitButton = screen.getByText('送信する')
        await user.click(submitButton)

        // 送信中の状態を確認
        expect(screen.getByText('送信中...')).toBeInTheDocument()

        // 成功メッセージを確認
        await waitFor(() => {
            expect(screen.getByText('✅ メッセージを送信しました！ありがとうございます。')).toBeInTheDocument()
        })

        // フォームがリセットされることを確認
        expect(screen.getByLabelText('お名前')).toHaveValue('')
        expect(screen.getByLabelText('メールアドレス')).toHaveValue('')
        expect(screen.getByLabelText('メッセージ')).toHaveValue('')
    })

    it('handles form submission error', async () => {
        const user = userEvent.setup()
        mockFetch.mockRejectedValueOnce(new Error('Network error'))

        render(<Contact />)

        // フォームに入力
        await user.type(screen.getByLabelText('お名前'), 'Test User')
        await user.type(screen.getByLabelText('メールアドレス'), 'test@example.com')
        await user.type(screen.getByLabelText('メッセージ'), 'Test message')

        // 送信ボタンをクリック
        const submitButton = screen.getByText('送信する')
        await user.click(submitButton)

        // エラーメッセージを確認
        await waitFor(() => {
            expect(screen.getByText('❌ 送信に失敗しました。もう一度お試しください。')).toBeInTheDocument()
        })
    })

    it('validates required fields', async () => {
        const user = userEvent.setup()
        render(<Contact />)

        const submitButton = screen.getByText('送信する')
        await user.click(submitButton)

        // HTML5バリデーションが動作することを確認
        const nameInput = screen.getByLabelText('お名前')
        expect(nameInput).toBeRequired()
        expect(screen.getByLabelText('メールアドレス')).toBeRequired()
        expect(screen.getByLabelText('メッセージ')).toBeRequired()
    })

    it('disables submit button during submission', async () => {
        const user = userEvent.setup()
        mockFetch.mockImplementationOnce(() => new Promise(resolve => setTimeout(resolve, 1000)))

        render(<Contact />)

        // フォームに入力
        await user.type(screen.getByLabelText('お名前'), 'Test User')
        await user.type(screen.getByLabelText('メールアドレス'), 'test@example.com')
        await user.type(screen.getByLabelText('メッセージ'), 'Test message')

        // 送信ボタンをクリック
        const submitButton = screen.getByText('送信する')
        await user.click(submitButton)

        // ボタンが無効化されることを確認
        expect(screen.getByText('送信中...')).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /送信中/ })).toBeDisabled()
    })
})