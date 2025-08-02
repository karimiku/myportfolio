import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Framer Motion のモック
vi.mock('framer-motion', () => ({
    motion: {
        div: 'div',
        section: 'section',
        h1: 'h1',
        h2: 'h2',
        p: 'p',
        span: 'span',
        a: 'a',
        button: 'button',
        img: 'img',
        form: 'form',
        input: 'input',
        textarea: 'textarea',
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}))

// IntersectionObserver のモック
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}))

// ResizeObserver のモック
global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}))

// matchMedia のモック
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
})

// scrollTo のモック
Object.defineProperty(window, 'scrollTo', {
    writable: true,
    value: vi.fn(),
})

// fetch のモック
global.fetch = vi.fn()

// 環境変数のモック
vi.mock('../config/contact', () => ({
    contactConfig: {
        displayEmail: 'test@example.com',
        displayName: 'Test User',
        location: 'Test Location',
        github: 'https://github.com/test',
        emailJS: {
            serviceId: 'test_service',
            templateId: 'test_template',
            publicKey: 'test_key',
        },
    },
}))