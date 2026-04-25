# Heyron Brand Guidelines

> Based on analysis of heyron.ai (as of April 2026)

---

## Logo – The Fox/Raccoon Icon

A stylized, geometric fox/raccoon head (more raccoon-like) with angular, low-poly design. The icon uses the brand's blue-gray color palette.

### Icon SVG (from heyron.ai/logo.png)

The actual logo is a geometric raccoon-like fox face in blue-gray tones. Colors extracted from logo.png:

- `#273957` (Deep Blue) - main face
- `#546E8F` (Medium Blue-Gray) - mid tones
- `#93A5BF` (Light Blue-Gray) - highlights
- `#D8E0EB` (White-Light) - accents

*Note: The orange I guessed earlier was wrong — it's actually blue-gray!*

---

## Color Palette

| Role | Color Name     | Hex Code  | Usage                          |
|------|---------------|-----------|--------------------------------|
| Primary | Deep Blue | `#273957` | Logo, fox/raccoon icon, main color (actual icon is blue-gray, not orange!) |
| Secondary | Medium Blue-Gray | `#546E8F` | Hover states, secondary elements |
| Background (Dark) | Near Black | `#0A0A0A` | Page background (actual) |
| Surface | Dark Charcoal | `#0D0D0D` | Card backgrounds, sections |
| Text Primary | White | `#FFFFFF` | Headings, hero text |
| Text Secondary | Muted Blue-Gray | `#8B9CB5` | Subtitles, secondary text |
| Border | Subtle Gray | `#2D333B` | Dividers, borders |

*If you need to match the exact shade, use a color picker on the heyron.ai screenshot.*

---

## Typography

From heyron.ai source code:

| Element      | Font Family          | Weight | Notes |
|--------------|----------------------|--------|-------|
| Headings     | **DM Sans**          | 700-800 | Main headlines |
| Body Text    | DM Sans              | 400-500 | Paragraphs, UI elements |
| Code/Tech    | **JetBrains Mono**   | 400-500 | Tech snippets, numbers |

Both are free Google Fonts:
- [DM Sans](https://fonts.google.com/specimen/DM+Sans)
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

---

### Flodesk Compatibility

| Heyron Font      | Native in Flodesk? | Alternative Available in Flodesk |
|------------------|-------------------|----------------------------------|
| DM Sans          | ❌ No              | **Open Sans**, **Montserrat**, **Lato**, or **Raleway** |
| JetBrains Mono   | ❌ No              | **Courier New** (system), or upload .woff file |

**Option 1:** Use Flodesk-native alternatives (easiest)
- For headers/body: Use **Open Sans** or **Montserrat** — both are clean, modern sans-serifs very similar to DM Sans
- For tech/mono: Use **Courier New** (built-in) or upload JetBrains Mono

**Option 2:** Upload custom fonts
- Flodesk supports uploading OTF, TTF, and WOFF files (up to 2MB each)
- You can upload DM Sans and JetBrains Mono directly!
- Go to **Brand → Fonts** in Flodesk to add them

---

## Spacing & Layout

- **Base unit:** 8px
- **Section padding:** 64px (8 units) vertical, 24px horizontal
- **Card padding:** 24px
- **Maximum content width:** 1200px
- **Grid:** 12-column grid with 24px gutters

---

## Usage Guidelines

1. **Logo:** Use the fox icon at 128×128px minimum in the newsletter header.
2. **Colors:** Never use the orange on dark backgrounds other than the defined ones.
3. **Typography:** Keep heading weight bold (700) for impact; body should remain readable at 16px.
4. **Contrast:** Ensure white text on dark background passes WCAG AA (4.5:1).

---

## Newsletter Application

When applying these guidelines to your Flodesk newsletter:

- **Header:** Place the fox icon (128px) left-aligned or centered, with "HeyRon" wordmark next to it in Space Grotesk Bold.
- **Background:** Use `#0B0E14` (Charcoal Black) for the email body background.
- **Accent color:** Use `#FF7A00` for any buttons or links.
- **Font:** Import Inter and Space Grotesk via Flodesk custom CSS or use system sans-serif fallbacks.

---

*Last updated: April 24, 2026*