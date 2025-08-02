// Contact configuration
export const contactConfig = {
    // 表示用のメールアドレス（公開されても問題ないもの）
    displayEmail: import.meta.env.VITE_CONTACT_EMAIL || 'contact@rikuto-portfolio.com',
    displayName: import.meta.env.VITE_CONTACT_NAME || 'Rikuto',

    // EmailJS設定（フロントエンドから直接メール送信）
    emailJS: {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    },

    // 連絡先情報
    location: '東京都',
    github: 'https://github.com/karimiku',
}

// 環境変数の型定義
declare global {
    interface ImportMetaEnv {
        readonly VITE_CONTACT_EMAIL: string
        readonly VITE_CONTACT_NAME: string
        readonly VITE_EMAILJS_SERVICE_ID: string
        readonly VITE_EMAILJS_TEMPLATE_ID: string
        readonly VITE_EMAILJS_PUBLIC_KEY: string
    }
}