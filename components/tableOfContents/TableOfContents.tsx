import React from 'react';

/**
 * Table of Contents — recreated from the approved PDF
 * (Frame 9 (7).pdf).
 *
 * Same 1 PDF-pt → 5.56 CSS-px scale as Introduction so both sections
 * share the same design canvas width and stack seamlessly.
 *
 * Measurements (from pdftotext -bbox-layout + pixel scans, PDF-pt):
 *   Title band     : y = 244.40 – 276.26
 *     "Table"      : x = 25.95 – 66.05
 *     "of" italic  : x = 70.96 – 88.06, y = 230.81 – 276.26 (glyph very tall)
 *     "Contents."  : x = 90.43 – 157.55
 *   Category row   : label y = 278.78 – 287.29
 *   Image grid     : y = 286.7 – 339.6 (each image 36.15 × 52.9)
 *     col 1 : x = 8.81   (visual poster)
 *     col 2 : x = 51.80  (social media)
 *     col 3 : x = 94.80  (brand identity)
 *     col 4 : x = 137.80 (selected works)
 */

const SCALE = 5.56;
const DESIGN_WIDTH_PT = 184;
const SECTION_HEIGHT_PT = 130;
const pt = (n: number) => `${n * SCALE}px`;

// Introduction ends at PDF y = 225 pt in the global coordinate system,
// so this section's local y = absolute PDF-y − 225.
const Y0 = 225;
const y = (absolutePt: number) => pt(absolutePt - Y0);

const IMAGE_WIDTH_PT = 36.15;
const IMAGE_HEIGHT_PT = 52.90;
const LABEL_Y_PT = 278.78;
const IMAGE_Y_PT = 286.70;

// IM Fell DW Pica SC is a small-caps font: lowercase glyphs are rendered
// as small capitals.  The category labels in the PDF are typeset in
// lowercase so they display as small caps visually.
const categories = [
  {
    id: 'visual-poster',
    label: 'Visual Poster',
    color: '#B2586B',
    image: '/assets/01 table of contents/visualposter.png',
    imageLeftPt: 8.81,
    labelLeftPt: 9.71, // measured yMin of label glyph run
  },
  {
    id: 'social-media',
    label: 'Social Media',
    color: '#BC0B0B',
    image: '/assets/01 table of contents/socialmedia.png',
    imageLeftPt: 51.80,
    labelLeftPt: 54.70,
  },
  {
    id: 'brand-identity',
    label: 'Brand Identity',
    color: '#874B0A',
    image: '/assets/01 table of contents/brandidentity.png',
    imageLeftPt: 94.80,
    labelLeftPt: 94.18,
  },
  {
    id: 'selected-works',
    label: 'Selected Works',
    color: '#122888',
    image: '/assets/01 table of contents/selectedworks.png',
    imageLeftPt: 137.80,
    labelLeftPt: 137.00,
  },
];

export default function TableOfContents() {
  return (
    <section
      data-testid="toc-section"
      aria-label="Table of Contents"
      className="w-full flex justify-center"
      style={{ backgroundColor: 'var(--portfolio-bg)' }}
    >
      <div
        data-testid="toc-canvas"
        className="relative"
        style={{
          width: pt(DESIGN_WIDTH_PT),
          height: pt(SECTION_HEIGHT_PT),
          maxWidth: '100%',
        }}
      >
        {/* --------- Title: Table of Contents. --------- */}
        <div
          data-testid="toc-title-table"
          style={{
            position: 'absolute',
            left: pt(25.95),
            top: y(244.4),
            fontFamily: '"IM Fell DW Pica SC", "IM Fell DW Pica", serif',
            fontWeight: 400,
            fontSize: pt(16),
            lineHeight: 1,
            color: 'var(--portfolio-orange)',
            whiteSpace: 'nowrap',
          }}
        >
          Table
        </div>

        <div
          data-testid="toc-title-of"
          style={{
            position: 'absolute',
            left: pt(69),
            top: y(226),
            fontFamily: '"Instrument Serif", "IBM Plex Serif", serif',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: pt(41),
            lineHeight: 1,
            color: 'var(--portfolio-orange)',
            whiteSpace: 'nowrap',
            transform: 'scaleX(0.68) scaleY(1.1)',
            transformOrigin: 'left center',
          }}
        >
          of
        </div>

        <div
          data-testid="toc-title-contents"
          style={{
            position: 'absolute',
            left: pt(90.43),
            top: y(244.4),
            fontFamily: '"IM Fell DW Pica SC", "IM Fell DW Pica", serif',
            fontWeight: 400,
            fontSize: pt(16),
            lineHeight: 1,
            color: 'var(--portfolio-orange)',
            whiteSpace: 'nowrap',
          }}
        >
          Contents.
        </div>

        {/* --------- Category labels + preview images --------- */}
        {categories.map((c) => (
          <React.Fragment key={c.id}>
            <div
              data-testid={`toc-label-${c.id}`}
              style={{
                position: 'absolute',
                left: pt(c.labelLeftPt),
                top: y(LABEL_Y_PT - 1),
                fontFamily: '"IM Fell DW Pica SC", "IM Fell DW Pica", serif',
                fontWeight: 700,
                fontSize: pt(5.5),
                lineHeight: 1,
                letterSpacing: '0.02em',
                color: c.color,
                whiteSpace: 'nowrap',
              }}
            >
              {c.label}
            </div>

            <img
              data-testid={`toc-image-${c.id}`}
              src={c.image}
              alt={c.label}
              style={{
                position: 'absolute',
                left: pt(c.imageLeftPt),
                top: y(IMAGE_Y_PT),
                width: pt(IMAGE_WIDTH_PT),
                height: pt(IMAGE_HEIGHT_PT),
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
