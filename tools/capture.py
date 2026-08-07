import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={"width":1023,"height":2000})
        page = await ctx.new_page()
        await page.goto("http://localhost:3000/", wait_until="networkidle")
        await page.wait_for_timeout(2000)
        # Capture full page from 0 to end of TOC
        toc_rect = await page.evaluate("""() => {
            const el = document.querySelector('[data-testid="toc-canvas"]');
            const b = el.getBoundingClientRect();
            return {x: b.x, y: b.y + window.scrollY, w: b.width, h: b.height};
        }""")
        print("toc:", toc_rect)
        # capture whole intro + toc region (1023 wide, y = 0 to end of toc)
        total_h = int(toc_rect["y"] + toc_rect["h"])
        await page.screenshot(path="/app/current.png", full_page=True, clip={"x": 0, "y": 0, "width": 1023, "height": total_h})
        print("saved, h=", total_h)
        await b.close()

asyncio.run(run())
