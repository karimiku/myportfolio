import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '../../test/utils'
import TypeWriter from '../TypeWriter'

describe('TypeWriter', () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.runOnlyPendingTimers()
        vi.useRealTimers()
    })

    it('renders without crashing', () => {
        render(<TypeWriter text="Hello" />)
        // コンポーネントが正常にレンダリングされることを確認
        const container = screen.getByText('|')
        expect(container).toBeInTheDocument()
    })

    it('displays text character by character', async () => {
        render(<TypeWriter text="Hello" delay={0} speed={100} />)

        // 初期状態では何も表示されていない
        expect(screen.queryByText('Hello')).not.toBeInTheDocument()

        // 時間を進める
        vi.advanceTimersByTime(100)
        await waitFor(() => {
            expect(screen.getByText('H', { exact: false })).toBeInTheDocument()
        })

        vi.advanceTimersByTime(100)
        await waitFor(() => {
            expect(screen.getByText('He', { exact: false })).toBeInTheDocument()
        })

        vi.advanceTimersByTime(300)
        await waitFor(() => {
            expect(screen.getByText('Hello', { exact: false })).toBeInTheDocument()
        })
    })

    it('shows cursor during typing', async () => {
        render(<TypeWriter text="Hi" delay={0} speed={100} showCursor={true} />)

        vi.advanceTimersByTime(100)
        await waitFor(() => {
            expect(screen.getByText('|')).toBeInTheDocument()
        })
    })

    it('hides cursor when showCursor is false', () => {
        render(<TypeWriter text="Hi" delay={0} speed={100} showCursor={false} />)

        vi.advanceTimersByTime(300)
        expect(screen.queryByText('|')).not.toBeInTheDocument()
    })

    it('applies custom className', () => {
        render(<TypeWriter text="Test" className="custom-class" />)
        const element = screen.getByText('|').parentElement
        expect(element).toHaveClass('custom-class')
    })

    it('respects delay prop', async () => {
        render(<TypeWriter text="Test" delay={500} speed={100} />)

        // delay時間前は何も表示されない
        vi.advanceTimersByTime(400)
        expect(screen.queryByText('T')).not.toBeInTheDocument()

        // delay時間後に開始
        vi.advanceTimersByTime(200)
        await waitFor(() => {
            expect(screen.getByText('T', { exact: false })).toBeInTheDocument()
        })
    })
})