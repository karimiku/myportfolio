import { describe, it, expect } from 'vitest'
import { render, screen } from '../../test/utils'
import Skills from '../Skills'
import Contact from '../Contact'

describe('動作するテスト', () => {
    describe('Skills コンポーネント', () => {
        it('スキルセクションが表示される', () => {
            render(<Skills />)
            expect(screen.getByText('スキル')).toBeInTheDocument()
        })

        it('フロントエンドカテゴリが表示される', () => {
            render(<Skills />)
            expect(screen.getByText('フロントエンド')).toBeInTheDocument()
        })

        it('Reactスキルが表示される', () => {
            render(<Skills />)
            expect(screen.getByText('React')).toBeInTheDocument()
        })

        it('TypeScriptスキルが表示される', () => {
            render(<Skills />)
            expect(screen.getByText('TypeScript')).toBeInTheDocument()
        })
    })

    describe('Contact コンポーネント', () => {
        it('お問い合わせタイトルが表示される', () => {
            render(<Contact />)
            expect(screen.getByText('お問い合わせ')).toBeInTheDocument()
        })

        it('連絡先セクションが表示される', () => {
            render(<Contact />)
            expect(screen.getByText('連絡先')).toBeInTheDocument()
        })

        it('メッセージを送るセクションが表示される', () => {
            render(<Contact />)
            expect(screen.getByText('メッセージを送る')).toBeInTheDocument()
        })

        it('送信ボタンが表示される', () => {
            render(<Contact />)
            expect(screen.getByText('送信する')).toBeInTheDocument()
        })
    })
})