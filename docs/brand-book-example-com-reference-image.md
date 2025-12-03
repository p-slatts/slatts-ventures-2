# Brand Book: Example Domain

## 1. BRAND OVERVIEW

**1.1 Brand Story & Mission**  
The Example Domain was reserved by IANA for use in technical documentation and examples, originating from the need for a neutral placeholder in internet standards. It enables creators to illustrate concepts without legal hurdles.  
**Mission Statement**: Provide a simple, permission-free domain for documentation examples to support clear communication in technical contexts.  
**Vision Statement**: Become the universal standard for non-operational example domains, promoting clarity and accessibility in global tech resources.

**1.2 Core Values**  
- **Simplicity**: Minimal design ensures focus on content without distractions (e.g., clean HTML structure).  
- **Neutrality**: Unbranded and generic to avoid implying real-world endorsement.  
- **Accessibility**: Uses system fonts and high-contrast colors for broad usability.  
- **Professionalism**: Low-energy tone maintains trustworthiness for documentation purposes.

**1.3 Brand Positioning**  
**Target Audience**: General public, including developers, technical writers, educators, and documentation teams seeking illustrative examples.  
**Unique Value Proposition**: A reserved, permission-free domain that standardizes example usage, reducing legal and operational confusion.  
**Brand Personality Traits**: Professional, straightforward, minimal, neutral, reliable.

## 2. VISUAL IDENTITY

**2.1 Logo Usage**  
No graphical logo; brand relies on text-based "Example Domain" heading in primary typeface.  
**Variations**: Monochrome (black text on light background); reversed (white on dark, if needed for docs). Favicon: Simple "E" icon or none (use browser default).  
**Minimum Size**: Desktop: 24px (h1); Mobile: 20px (scale down 16%).  
**Clear Space**: 16px (4x base unit) above/below heading.  
**Placement**: Centered in body or headers for doc examples.  
**Incorrect Usage**: Adding colors, icons, or operational branding; never use in live sites.

**2.2 Color System**  
**Primary Colors**:  
- Blue (links, accents): hsl(228, 45%, 37%)  
**Secondary/Accent Colors**:  
- Same as primary: hsl(228, 45%, 37%)  
**Semantic Colors**: Not defined; infer success/info as primary blue.  
**Neutral/Grayscale Palette**:  
- Text Primary: hsl(0, 0%, 0%) (black)  
- Background: hsl(0, 0%, 93%) (light gray)  
- Input Borders: hsl(0, 0%, 80%) (mid-gray)  
**Background Colors**: Light mode only (hsl(0, 0%, 93%)); no dark mode.  
**Usage Hierarchy**: Primary for links (10-20% usage); neutrals for text/background (80%). Proportions: 60% background, 30% text, 10% accents.  
**Accessibility**: WCAG AA compliant (contrast: text on bg 4.5:1; link on bg 7:1). Aim for AAA where possible.

**2.3 Typography**  
**Primary Typeface**: system-ui (web-safe, e.g., -apple-system, BlinkMacSystemFont, Segoe UI). CDN: Native browser loading.  
**Secondary Typeface**: None; all system-ui.  
**Font Hierarchy (CSS Specs)**:  
- H1 (headings): font-size: 24px; weight: 400; line-height: 1.4; letter-spacing: 0 (system-ui, sans-serif fallback).  
- H2: Same as H1 (24px).  
- Body Text: font-size: 16px; weight: 400; line-height: 1.5; letter-spacing: 0 (default).  
- Small/Captions: 14px (inferred for helpers).  
**Responsive Type Scale**: Desktop (>1024px): As above; Tablet (768-1024px): H1 22px, body 15px; Mobile (<768px): H1 20px, body 14px.  
**Web Font Loading**: Native system-ui; fallback: sans-serif. Preload not needed for minimalism.

**2.4 Iconography**  
No icons used; style is absent (text-only).  
**Sizes**: N/A.  
**Library**: None; recommend avoiding unless for doc illustrations (e.g., simple SVG arrows).  
**Usage**: None in core; for nav/actions, use text links only.

**2.5 Imagery & Media**  
No photography or media; text-only focus.  
**Style**: Neutral, illustrative if added (e.g., diagrams in docs).  
**Aspect Ratios**: N/A.  
**Formats**: None; use WebP for any future images (compress to <100KB).  
**Video**: Avoid; no autoplay.  
**Placeholders**: Plain background for loading (hsl(0, 0%, 93%)).

**2.6 Spacing & Grid System**  
**Base Spacing Unit**: 4px.  
**Spacing Scale**: 4px, 8px, 16px, 24px, 32px (multiples of base).  
**Grid Structure**: Single-column, fluid (no fixed max-width; full viewport).  
**Responsive Breakpoints**: Mobile: <768px (stack vertically); Tablet: 768-1024px (center content); Desktop: >1024px (full width).

## 3. UI COMPONENTS

**3.1 Navigation Components**  
**Header/Navbar**: None; plain body div. Desktop/mobile: Same (no menu).  
**Navigation Menu**: N/A.  
**Breadcrumbs**: None.  
**Footer Navigation**: Absent; end with link.

**3.2 Buttons & CTAs**  
No buttons; use text links.  
**Styles**: Primary link: hsl(228, 45%, 37%) underline on hover.  
**States**: Default (blue); Hover (darken 10%); Active (same); Disabled (gray, no link).  
**Sizes**: Inline text (16px). No icons/groups.  
**Links**: Blue text; hover underline. Border radius: 0px.

**3.3 Form Elements**  
**Inputs/Text Areas**: Border: hsl(0, 0%, 80%), 1px solid; radius: 0px. Background: white.  
**Selects**: Same as inputs.  
**Checkboxes/Radios**: Default browser; no custom.  
**Toggles**: N/A.  
**Validation**: Error: red border (infer hsl(0, 50%, 50%)); Success: green (hsl(120, 50%, 50%)).  
**Labels/Placeholders**: system-ui 16px; placeholders: gray (hsl(0, 0%, 60%)). No file uploads.

**3.4 Feedback Components**  
None present; minimal site.  
**Alerts**: N/A; use paragraphs for info.  
**Toasts/Modals**: Avoid.  
**Loading**: None (instant load).  
**Tooltips**: N/A.  
**Empty States**: Plain text (e.g., "No content").

**3.5 Content Components**  
**Cards**: None; use divs with 16px padding.  
**Tables**: N/A.  
**Lists**: Unordered/ordered: Default browser (16px line-height).  
**Badges/Tags**: None.  
**Avatars**: N/A.  
**Accordions/Tabs**: None; flat structure.

## 4. INTERACTION & BEHAVIOR

**4.1 Interactive States**  
**Hover**: Links underline + slight color shift (to hsl(228, 45%, 30%)); 200ms transition.  
**Focus**: Outline 2px blue (accessibility for keyboard).  
**Active**: Brief color darken.  
**Disabled**: Gray text (hsl(0, 0%, 50%)), no pointer.  
**Loading**: N/A (static page).

**4.2 Animations & Transitions**  
**Timing**: 200ms for link hovers.  
**Easing**: ease-in-out (cubic-bezier(0.4, 0, 0.2, 1)).  
**Micro-Interactions**: Minimal; only link underline fade-in.  
**Page Transitions**: None (direct load). Scroll: Smooth default.  
**Principles**: Use sparingly for low-energy; avoid overload to maintain professionalism—animate only essentials like links.
