import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width":1023,"height":15000})
        page = await ctx.new_page()
        await page.goto("http://localhost:3000/", wait_until="networkidle")
        await page.wait_for_timeout(2500)
        rect = await page.evaluate("""() => {
            const el = document.querySelector('[data-testid="brand-identity-canvas"]');
            const b = el.getBoundingClientRect();
            return {x: b.x, y: b.y + window.scrollY, w: b.width, h: b.height};
        }""")
        print("bi:", rect)
        total_h = int(rect["y"] + rect["h"])
        await page.screenshot(path="/app/current.png", full_page=True, clip={"x": 0, "y": 0, "width": 1023, "height": total_h})
        print("saved, h=", total_h)
        await b.close()

asyncio.run(run())
