from playwright.sync_api import sync_playwright
import time

def take_timeline_screenshot():
    with sync_playwright() as p:
        # Launch headless browser
        browser = p.chromium.launch(headless=True)
        # Create context with a standard desktop viewport
        context = browser.new_context(
            viewport={'width': 1200, 'height': 1800},
            device_scale_factor=2 # high DPI screenshot for maximum clarity
        )
        page = context.new_page()

        print("Navigating to http://localhost:3000...")
        page.goto("http://localhost:3000")

        # Let Next.js compile, load fonts, and calculate S-curve positions
        print("Waiting for page load and layout calculation...")
        time.sleep(3)

        # Capture a full-page screenshot
        screenshot_path = "verification_screenshot.png"
        print(f"Saving full-page screenshot to {screenshot_path}...")
        page.screenshot(path=screenshot_path, full_page=True)

        browser.close()
        print("Successfully captured verification screenshot!")

if __name__ == "__main__":
    take_timeline_screenshot()
