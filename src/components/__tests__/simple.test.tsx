import { describe, it, expect } from 'vitest'
import { render, screen } from '../../test/utils'
import TypeWriter from '../TypeWriter'

describe('シンプルテスト', () => {
    it('TypeWriterが正常にレンダリングされる', () => {
        render(<TypeWriter text="Hello" showCursor={false} />)
        expect(document.body).toBeInTheDocument()
    })

    it('TypeWriterにカーソルが表示される', () => {
        render(<TypeWriter text="Test" showCursor={true} />)
        expect(screen.getByText('|')).toBeInTheDocument()
    })

    it('TypeWriterにクラス名が適用される', () => {
        render(<TypeWriter text="Test" className="test-class" showCursor={false} />)
        const element = document.querySelector('.test-class')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('test-class')
    })
})