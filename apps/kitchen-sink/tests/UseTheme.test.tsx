import { expect, test } from '@playwright/test'

import { setupPage } from './test-utils'
import { getStyles } from './utils'

test.beforeEach(async ({ page }) => {
  await setupPage(page, { name: 'UseTheme', type: 'useCase' })
})

test(`useTheme() returns right values`, async ({ page }) => {
  expect(await page.locator('#theme-get').innerText()).toBe(`var(--background)`)
  expect(await page.locator('#theme-val').innerText()).toBe(`#f8f8f8`)
  expect(await page.locator('#token-get').innerText()).toBe(`var(--blue1)`)
  expect(await page.locator('#token-val').innerText()).toBe(`hsl(206, 100%, 99.2%)`)
})
