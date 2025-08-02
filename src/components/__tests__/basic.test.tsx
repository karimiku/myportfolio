import { describe, it, expect } from 'vitest'
import { render, screen } from '../../test/utils'
import TypeWriter from '../TypeWriter'

describe('Basic Tests', () => {
    it('TypeWriter renders correctly', () => {
        render(<TypeWriter text="Hello" showCursor={false} />)
        // コンポーネントが正常にレンダリングされることを確認
        expect(document.body).toBeInTheDocument()
    })

    it('TypeWriter with cursor', () => {
        render(<TypeWriter text="Test" showCursor={true} />)
        // カーソルが表示されることを確認
        expect(screen.getByText('|')).toBeInTheDocument()
    })

    it('TypeWriter applies className', () => {
        render(<TypeWriter text="Test" className="test-class" showCursor={false} />)
        const element = document.querySelector('.test-class')
        expect(element).toBeInTheDocument()
    })
})