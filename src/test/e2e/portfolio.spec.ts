import { test, expect } from '@playwright/test'

test.describe('Portfolio Site E2E', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

    test('should display hero section', async ({ page }) => {
        await expect(page.locator('#home')).toBeVisible()
        await expect(page.getByText('Hello')).toBeVisible()
        await expect(page.getByText("I'm Rikuto")).toBeVisible()
    })

    test('should navigate between sections', async ({ page }) => {
        // ナビゲーションリンクをクリック
        await page.getByText('プロフィール').click()
        await expect(page.locator('#about')).toBeInViewport()

        await page.getByText('スキル').click()
        await expect(page.locator('#skills')).toBeInViewport()

        await page.getByText('プロジェクト').click()
        await expect(page.locator('#projects')).toBeInViewport()
    })

    test('should submit contact form', async ({ page }) => {
        await page.getByText('お問い合わせ').click()

        await page.fill('[name="name"]', 'Test User')
        await page.fill('[name="email"]', 'test@example.com')
        await page.fill('[name="message"]', 'This is a test message')

        await page.getByText('送信する').click()

        // 送信中の状態を確認
        await expect(page.getByText('送信中...')).toBeVisible()
    })

    test('should be responsive on mobile', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 })

        // モバイルでもコンテンツが表示されることを確認
        await expect(page.getByText('Hello')).toBeVisible()
        await expect(page.getByText("I'm Rikuto")).toBeVisible()

        // モバイルメニューが動作することを確認
        const menuButton = page.getByRole('button').first()
        await menuButton.click()
    })

    test('should load profile image', async ({ page }) => {
        const image = page.getByAltText('プロフィール写真')
        await expect(image).toBeVisible()

        // 画像が正しく読み込まれることを確認
        await expect(image).toHaveAttribute('src', '/profile-dog.JPG')
    })

    test('should have working external links', async ({ page }) => {
        const githubLink = page.getByLabelText('GitHub')
        await expect(githubLink).toHaveAttribute('href', 'https://github.com/karimiku')
    })

    test('should have smooth scrolling', async ({ page }) => {
        await page.getByText('プロジェクトを見る').click()

        // スムーズスクロールでプロジェクトセクションに移動
        await expect(page.locator('#projects')).toBeInViewport()
    })

    test('should display all skill categories', async ({ page }) => {
        await page.getByText('スキル').click()

        await expect(page.getByText('プログラミング言語')).toBeVisible()
        await expect(page.getByText('フレームワーク・ライブラリ')).toBeVisible()
        await expect(page.getByText('ツール・その他')).toBeVisible()
    })
})