import React from 'react';

/**
 * Brand Identity  →  Chapter 1  · Halo
 *
 * Recreated from the approved PDF (Frame 9 (7).pdf).
 * Continues the 1 PDF-pt → 5.56 CSS-px scale used by every other section.
 *
 * Every graphic is loaded directly from /public/assets/04 brand identity/*
 * — no HTML/CSS/SVG recreation.
 *
 * NOTE  the Halo *logo* itself does not exist as an asset file in the folder;
 * 2-sand-texture.png contains only the sand background.  The logomark tile
 * therefore shows the sand texture at the exact PDF placement, with a slot
 * ready to overlay the Halo logo image the moment it is added to the folder.
 */

const SCALE = 5.56;
const DESIGN_WIDTH_PT = 184;
const SECTION_HEIGHT_PT = 1045; // y = 1385 – 2430 pt (Brand Identity intro + Halo)
const pt = (n: number) => `${n * SCALE}px`;

// Introduction 225 + TOC 130 + Visual Posters 565 + Social Media 468 = 1388 pt
// (there is a 3-pt whitespace band between the two sections in the PDF).
const Y0 = 1385;
const y = (absolutePt: number) => pt(absolutePt - Y0);

const COLOR_TITLE = '#E9A20A';    // Brand Identity title / subtitle
const COLOR_CHAPTER = '#FB642F';  // Chapter. 1 / Halo / sunscreen brand
const COLOR_ACCENT = '#F97C1B';   // (Halo) (LOGOMARK) etc. section labels + accents
const COLOR_TEXT = '#F0A628';     // paragraph body text same as title yellow-orange
const COLOR_PEACH_BG = '#FDF1E3'; // peach rounded backdrop behind (Halo) subsection
const COLOR_HEX = '#333333';      // hex-code label text on swatches

const paletteRows = [
  { hex: '#FA8D33', name: 'Sunset Orange', image: '/assets/04 brand identity/halo/3-orange.png', yTop: 1707 },
  { hex: '#FFE539', name: 'Lemon Yellow',  image: '/assets/04 brand identity/halo/4-lemon.png',  yTop: 1789 },
  { hex: '#FB6C95', name: 'Cherry Pink',   image: '/assets/04 brand identity/halo/5-raspberry.png', yTop: 1870 },
  { hex: '#3FC5CE', name: 'Ocean Blue',    image: '/assets/04 brand identity/halo/6-water.png',  yTop: 1952 },
];

export default function BrandIdentityHalo() {
  return (
    <section
      data-testid="brand-identity-halo-section"
      aria-label="Brand Identity — Halo"
      className="w-full flex justify-center"
      style={{ backgroundColor: 'var(--portfolio-bg)' }}
    >
      <div
        data-testid="brand-identity-canvas"
        className="relative"
        style={{
          width: pt(DESIGN_WIDTH_PT),
          height: pt(SECTION_HEIGHT_PT),
          maxWidth: '100%',
        }}
      >
        {/* ================================================================
            1. BRAND IDENTITY  title + perfume-sample decoration
            ================================================================ */}
        <h2
          data-testid="bi-title-brand"
          style={{
            position: 'absolute',
            left: pt(17.15),
            top: y(1386),
            margin: 0,
            fontFamily: '"IM Fell DW Pica SC", "IM Fell DW Pica", serif',
            fontWeight: 400,
            fontSize: pt(37),
            lineHeight: 1,
            color: COLOR_TITLE,
            whiteSpace: 'nowrap',
          }}
        >
          Brand
        </h2>

        <h2
          data-testid="bi-title-identity"
          style={{
            position: 'absolute',
            left: pt(17.15),
            top: y(1416),
            margin: 0,
            fontFamily: '"IM Fell DW Pica SC", "IM Fell DW Pica", serif',
            fontWeight: 400,
            fontSize: pt(37),
            lineHeight: 1,
            color: COLOR_TITLE,
            whiteSpace: 'nowrap',
          }}
        >
          Identity.
        </h2>

        <img
          data-testid="bi-perfume-sample"
          src="/assets/04 brand identity/perfume-sample.png"
          alt=""
          aria-hidden
          style={{
            position: 'absolute',
            left: pt(125.9),
            top: y(1407.6),
            width: pt(45.7),
            height: pt(67),
            objectFit: 'contain',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />

        {/* Subtitle */}
        <div
          data-testid="bi-subtitle"
          style={{
            position: 'absolute',
            left: pt(79),
            top: y(1458),
            fontFamily: '"IM Fell DW Pica SC", "IM Fell DW Pica", serif',
            fontWeight: 400,
            fontSize: pt(8.5),
            lineHeight: 1,
            letterSpacing: '0.01em',
            color: COLOR_TITLE,
            whiteSpace: 'nowrap',
          }}
        >
          From Concept to Identity
        </div>

        {/* Intro paragraph */}
        <p
          data-testid="bi-intro"
          style={{
            position: 'absolute',
            left: pt(60.5),
            top: y(1471),
            width: pt(115),
            margin: 0,
            fontFamily: '"IBM Plex Serif", serif',
            fontWeight: 400,
            fontSize: pt(3.8),
            lineHeight: 1.35,
            color: COLOR_TITLE,
            textAlign: 'right',
          }}
        >
          A collection of branding projects exploring visual identity, logo
          design, packaging, and cohesive brand systems.
        </p>

        {/* ================================================================
            2. CHAPTER 1  – "Halo" (label block)
            ================================================================ */}
        <div
          data-testid="bi-chapter-label"
          style={{
            position: 'absolute',
            left: pt(12.05),
            top: y(1490),
            fontFamily: '"IBM Plex Serif", serif',
            fontWeight: 400,
            fontSize: pt(6),
            lineHeight: 1.25,
            color: COLOR_CHAPTER,
            whiteSpace: 'nowrap',
          }}
        >
          <div>Chapter. 1</div>
          <div>Halo</div>
          <div
            style={{
              fontFamily: '"IBM Plex Serif", serif',
              fontStyle: 'italic',
              fontSize: pt(4.2),
              marginTop: pt(0.5),
            }}
          >
            sunscreen brand
          </div>
        </div>

        {/* ================================================================
            3. (HALO)  – peach rounded panel with intro paragraph + cream img
            ================================================================ */}
        <div
          data-testid="bi-halo-panel"
          style={{
            position: 'absolute',
            left: pt(10),
            top: y(1519),
            width: pt(163),
            height: pt(78),
            backgroundColor: COLOR_PEACH_BG,
            borderRadius: pt(6),
          }}
        />

        <div
          data-testid="bi-halo-label"
          style={{
            position: 'absolute',
            left: pt(16.85),
            top: y(1523),
            fontFamily: '"IBM Plex Sans Condensed", "IBM Plex Sans", sans-serif',
            fontWeight: 700,
            fontSize: pt(6.5),
            lineHeight: 1,
            letterSpacing: '0.02em',
            color: COLOR_ACCENT,
            whiteSpace: 'nowrap',
          }}
        >
          (Halo)
        </div>

        <p
          data-testid="bi-halo-para"
          style={{
            position: 'absolute',
            left: pt(15),
            top: y(1541),
            width: pt(85),
            margin: 0,
            fontFamily: '"IBM Plex Serif", serif',
            fontWeight: 400,
            fontSize: pt(3.6),
            lineHeight: 1.5,
            color: COLOR_ACCENT,
          }}
        >
          Halo brings a sense of joy to everyday sun care. Built around playful
          forms, vibrant colours, and a fresh visual language, the identity
          transforms sunscreen from a routine product into a lifestyle
          companion for sunny days.
        </p>

        <img
          data-testid="bi-halo-cream-texture"
          src="/assets/04 brand identity/halo/1-cream-texture.png"
          alt=""
          aria-hidden
          style={{
            position: 'absolute',
            left: pt(115),
            top: y(1531),
            width: pt(55),
            height: pt(60),
            objectFit: 'cover',
            borderRadius: pt(4),
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />

        {/* ================================================================
            4. (LOGOMARK)  – section label + sand texture with Halo logo
            ================================================================ */}
        <div
          data-testid="bi-logomark-label"
          style={{
            position: 'absolute',
            left: pt(18.62),
            top: y(1607),
            fontFamily: '"IBM Plex Sans Condensed", "IBM Plex Sans", sans-serif',
            fontWeight: 700,
            fontSize: pt(9.5),
            lineHeight: 1,
            letterSpacing: '0.03em',
            color: COLOR_ACCENT,
            whiteSpace: 'nowrap',
          }}
        >
          (LOGOMARK)
        </div>

        <img
          data-testid="bi-logomark-sand"
          src="/assets/04 brand identity/halo/2-sand-texture.png"
          alt="Halo logomark on sand texture"
          style={{
            position: 'absolute',
            left: pt(9.7),
            top: y(1617),
            width: pt(161.7),
            height: pt(68.2),
            objectFit: 'cover',
            display: 'block',
          }}
        />

        <p
          data-testid="bi-logomark-caption"
          style={{
            position: 'absolute',
            left: pt(9.81),
            top: y(1684.5),
            width: pt(162),
            margin: 0,
            fontFamily: '"IBM Plex Serif", serif',
            fontWeight: 400,
            fontSize: pt(3.4),
            lineHeight: 1.35,
            color: COLOR_ACCENT,
            textAlign: 'center',
          }}
        >
          The rounded wordmark and sun icon reflect Halo&rsquo;s playful
          personality while remaining simple, memorable, and easy to reproduce
          across packaging and digital media.
        </p>

        {/* ================================================================
            5. (COLOURPALLETE)  – label + 4 swatch rows
            ================================================================ */}
        <div
          data-testid="bi-palette-label"
          style={{
            position: 'absolute',
            left: pt(56.39),
            top: y(1704),
            fontFamily: '"IBM Plex Sans Condensed", "IBM Plex Sans", sans-serif',
            fontWeight: 700,
            fontSize: pt(9.5),
            lineHeight: 1,
            letterSpacing: '0.03em',
            color: COLOR_ACCENT,
            whiteSpace: 'nowrap',
          }}
        >
          (COLOURPALLETE)
        </div>

        {paletteRows.map((row) => (
          <React.Fragment key={row.hex}>
            {/* Large pastel swatch square (left) */}
            <div
              data-testid={`bi-palette-swatch-${row.hex.slice(1)}`}
              style={{
                position: 'absolute',
                left: pt(18.9),
                top: y(row.yTop),
                width: pt(17),
                height: pt(67),
                backgroundColor: row.hex,
              }}
            />

            {/* Hex code inside/below swatch (in dark text) */}
            <div
              data-testid={`bi-palette-hex-${row.hex.slice(1)}`}
              style={{
                position: 'absolute',
                left: pt(21.4),
                top: y(row.yTop + 9.5),
                fontFamily: '"IBM Plex Sans", sans-serif',
                fontWeight: 500,
                fontSize: pt(3.8),
                lineHeight: 1,
                color: COLOR_HEX,
                whiteSpace: 'nowrap',
              }}
            >
              {row.hex}
            </div>

            {/* Color name (right-side of swatch) */}
            <div
              data-testid={`bi-palette-name-${row.hex.slice(1)}`}
              style={{
                position: 'absolute',
                left: pt(138.2),
                top: y(row.yTop + 10),
                fontFamily: '"IBM Plex Sans", sans-serif',
                fontWeight: 500,
                fontSize: pt(4.5),
                lineHeight: 1,
                color: row.hex,
                whiteSpace: 'nowrap',
              }}
            >
              {row.name}
            </div>

            {/* Fruit / water reference image (right side) */}
            <img
              data-testid={`bi-palette-image-${row.hex.slice(1)}`}
              src={row.image}
              alt={row.name}
              style={{
                position: 'absolute',
                left: pt(125.9),
                top: y(row.yTop),
                width: pt(37),
                height: pt(50),
                objectFit: 'cover',
                borderRadius: pt(3),
                display: 'block',
              }}
            />
          </React.Fragment>
        ))}

        {/* Palette caption */}
        <p
          data-testid="bi-palette-caption"
          style={{
            position: 'absolute',
            left: pt(8.7),
            top: y(2044),
            width: pt(162.5),
            margin: 0,
            fontFamily: '"IBM Plex Serif", serif',
            fontWeight: 400,
            fontSize: pt(3.4),
            lineHeight: 1.35,
            color: COLOR_ACCENT,
            textAlign: 'center',
          }}
        >
          The colour palette draws inspiration from sunlit citrus, ocean blues,
          and vibrant fruits, creating a fresh, energetic identity that
          reflects Halo&rsquo;s playful and uplifting personality.
        </p>

        {/* ================================================================
            6. (PACKAGING & MOCKUPS)  – label + 5 mockup images
            ================================================================ */}
        <div
          data-testid="bi-packaging-label"
          style={{
            position: 'absolute',
            left: pt(40.5),
            top: y(2072),
            fontFamily: '"IBM Plex Sans Condensed", "IBM Plex Sans", sans-serif',
            fontWeight: 700,
            fontSize: pt(9.5),
            lineHeight: 1,
            letterSpacing: '0.03em',
            color: COLOR_ACCENT,
            whiteSpace: 'nowrap',
          }}
        >
          (PACKAGING & MOCKUPS)
        </div>

        {/* Mockup row 1 – blue Coconut Cool | pink Cherry Pop | yellow Lemon Splash */}
        <img
          data-testid="bi-mockup-1"
          src="/assets/04 brand identity/halo/1-mockup.png"
          alt="Halo Coconut Cool mockup"
          style={{
            position: 'absolute',
            left: pt(9),
            top: y(2090),
            width: pt(53),
            height: pt(67),
            objectFit: 'contain',
            display: 'block',
          }}
        />

        <img
          data-testid="bi-mockup-2"
          src="/assets/04 brand identity/halo/2-mockup.png"
          alt="Halo Cherry Pop pouch mockup"
          style={{
            position: 'absolute',
            left: pt(61),
            top: y(2090),
            width: pt(61),
            height: pt(67),
            objectFit: 'contain',
            display: 'block',
          }}
        />

        <img
          data-testid="bi-mockup-3"
          src="/assets/04 brand identity/halo/3-mockup.png"
          alt="Halo Lemon Splash basket mockup"
          style={{
            position: 'absolute',
            left: pt(122),
            top: y(2090),
            width: pt(55),
            height: pt(67),
            objectFit: 'contain',
            display: 'block',
          }}
        />

        {/* Mockup row 2 – orange box | keychains */}
        <img
          data-testid="bi-mockup-4"
          src="/assets/04 brand identity/halo/4-mockup.png"
          alt="Halo box packaging mockup"
          style={{
            position: 'absolute',
            left: pt(16.2),
            top: y(2237),
            width: pt(79),
            height: pt(60),
            objectFit: 'contain',
            display: 'block',
          }}
        />

        <img
          data-testid="bi-mockup-5"
          src="/assets/04 brand identity/halo/5-mockup.png"
          alt="Halo keychains mockup"
          style={{
            position: 'absolute',
            left: pt(95.3),
            top: y(2237),
            width: pt(70.6),
            height: pt(60),
            objectFit: 'contain',
            display: 'block',
          }}
        />

        {/* Final descriptive paragraph */}
        <p
          data-testid="bi-final-paragraph"
          style={{
            position: 'absolute',
            left: pt(18),
            top: y(2410),
            width: pt(148),
            margin: 0,
            fontFamily: '"IBM Plex Serif", serif',
            fontWeight: 400,
            fontSize: pt(4.6),
            lineHeight: 1.35,
            color: COLOR_ACCENT,
            textAlign: 'center',
          }}
        >
          Designed to stand out both on the shelf and in everyday use,
          Halo&rsquo;s packaging and brand applications communicate a youthful,
          energetic identity while maintaining consistency across physical and
          digital experiences.
        </p>
      </div>
    </section>
  );
}
