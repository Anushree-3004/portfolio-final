import React from 'react';

/**
 * Introduction section — recreated from the approved PDF
 * (Frame 9 (7).pdf).
 *
 * All positions and sizes are traceable to the PDF via pdftotext
 * -bbox-layout and pixel measurements at 400 dpi (1 PDF-pt = 5.56 CSS-px).
 * The design canvas is 184 pt × 225 pt (Introduction section only),
 * which renders as 1023 × 1251 CSS-px.
 */

const SCALE = 5.56; // CSS-px per PDF-pt (184 pt → 1023 px)
const DESIGN_WIDTH_PT = 184;
const DESIGN_HEIGHT_PT = 225;
const pt = (n: number) => `${n * SCALE}px`;

export default function Introduction() {
  return (
    <section
      data-testid="introduction-section"
      aria-label="Introduction"
      className="w-full flex justify-center"
      style={{ backgroundColor: 'var(--portfolio-bg)' }}
    >
      <div
        data-testid="introduction-canvas"
        className="relative"
        style={{
          width: pt(DESIGN_WIDTH_PT),
          height: pt(DESIGN_HEIGHT_PT),
          maxWidth: '100%',
        }}
      >
        {/* ---------- Top header: Issue 01 / 2026 ---------- */}
        <div
          data-testid="intro-issue-left"
          style={{
            position: 'absolute',
            left: pt(8),
            top: pt(6.5),
            fontFamily: '"IBM Plex Serif", serif',
            fontWeight: 400,
            fontSize: pt(3.9),
            lineHeight: 1.75,
            color: 'var(--portfolio-orange)',
          }}
        >
          <div>Issue 01</div>
          <div>2026</div>
        </div>

        {/* ---------- Top header: descriptor line ---------- */}
        <div
          data-testid="intro-tagline"
          style={{
            position: 'absolute',
            right: pt(4.7),
            top: pt(7),
            fontFamily: '"IBM Plex Serif", serif',
            fontWeight: 400,
            fontSize: pt(3.9),
            lineHeight: 1.35,
            color: 'var(--portfolio-orange)',
            whiteSpace: 'nowrap',
          }}
        >
          Graphic&nbsp;Designer&nbsp;·&nbsp;Brand&nbsp;Identity&nbsp;·&nbsp;Visual&nbsp;Storytelling
        </div>

        {/* ---------- Right sun scribble (behind title) ---------- */}
        <img
          data-testid="intro-sun-right"
          src="/assets/00 introduction/sun-right.png"
          alt=""
          aria-hidden
          style={{
            position: 'absolute',
            left: pt(118),
            top: pt(44),
            width: pt(66),
            height: pt(96),
            objectFit: 'contain',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />

        {/* ---------- Masthead: Anushree's ---------- */}
        <h1
          data-testid="intro-title-anushrees"
          style={{
            position: 'absolute',
            left: pt(15),
            top: pt(39),
            margin: 0,
            fontFamily: '"Irish Grover", "IM Fell DW Pica", serif',
            fontWeight: 400,
            fontSize: pt(28.5),
            lineHeight: 1,
            letterSpacing: '0.005em',
            color: 'var(--portfolio-orange)',
            whiteSpace: 'nowrap',
          }}
        >
          Anushree&rsquo;s
        </h1>

        {/* ---------- Masthead: Portfolio (handwritten) ---------- */}
        <div
          data-testid="intro-title-portfolio"
          style={{
            position: 'absolute',
            left: pt(43),
            top: pt(50),
            fontFamily: '"Homemade Apple", cursive',
            fontWeight: 400,
            fontSize: pt(17.5),
            lineHeight: 1,
            color: 'var(--portfolio-dark-red)',
            whiteSpace: 'nowrap',
          }}
        >
          Portfolio
        </div>

        {/* ---------- Body paragraph 1 ---------- */}
        <p
          data-testid="intro-paragraph-1"
          style={{
            position: 'absolute',
            left: pt(27.95),
            top: pt(91),
            width: pt(92),
            margin: 0,
            fontFamily: '"IBM Plex Serif", serif',
            fontWeight: 700,
            fontSize: pt(3.75),
            lineHeight: 1.6,
            color: 'var(--portfolio-orange)',
          }}
        >
          I studied Computer Science before I studied
          <br />
          design. I still think that way &mdash; in systems, in
          <br />
          things that need to hold together at scale, not
          <br />
          just look good once.
        </p>

        {/* ---------- Body paragraph 2 ---------- */}
        <p
          data-testid="intro-paragraph-2"
          style={{
            position: 'absolute',
            left: pt(35.95),
            top: pt(125),
            width: pt(90),
            margin: 0,
            fontFamily: '"IBM Plex Serif", serif',
            fontWeight: 700,
            fontSize: pt(3.75),
            lineHeight: 1.6,
            color: 'var(--portfolio-orange)',
          }}
        >
          Most of what&rsquo;s on this site is what happens
          <br />
          between the good idea and the one that
          <br />
          actually ships
        </p>

        {/* ---------- Left sun scribble ---------- */}
        <img
          data-testid="intro-sun-left"
          src="/assets/00 introduction/sun-left.png"
          alt=""
          aria-hidden
          style={{
            position: 'absolute',
            left: pt(-2),
            top: pt(148),
            width: pt(122),
            height: pt(75),
            objectFit: 'contain',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />

        {/* ---------- (Skills.) label ---------- */}
        <div
          data-testid="intro-skills-label"
          style={{
            position: 'absolute',
            left: pt(92),
            top: pt(143),
            fontFamily: '"Kapakana", cursive',
            fontWeight: 500,
            fontSize: pt(10.5),
            lineHeight: 1,
            color: 'var(--portfolio-dark-red)',
            whiteSpace: 'nowrap',
          }}
        >
          (Skills.)
        </div>

        {/* ---------- Skills body ---------- */}
        <div
          data-testid="intro-skills-body"
          style={{
            position: 'absolute',
            left: pt(70),
            top: pt(154),
            width: pt(80),
            fontFamily: '"Hubballi", sans-serif',
            fontWeight: 400,
            fontSize: pt(4.1),
            lineHeight: 1.2,
            color: 'var(--portfolio-dark-red)',
            textAlign: 'center',
          }}
        >
          graphics designing, poster
          <br />
          designing,&nbsp;&nbsp;logos and brand identity,
          <br />
          social media managment,
          <br />
          visual storytelling
        </div>

        {/* ---------- (Tools). label ---------- */}
        <div
          data-testid="intro-tools-label"
          style={{
            position: 'absolute',
            left: pt(133),
            top: pt(172),
            fontFamily: '"Kapakana", cursive',
            fontWeight: 500,
            fontSize: pt(10.5),
            lineHeight: 1,
            color: 'var(--portfolio-dark-red)',
            whiteSpace: 'nowrap',
          }}
        >
          (Tools).
        </div>

        {/* ---------- Tools body ---------- */}
        <div
          data-testid="intro-tools-body"
          style={{
            position: 'absolute',
            left: pt(125),
            top: pt(184),
            width: pt(45),
            fontFamily: '"Hubballi", sans-serif',
            fontWeight: 400,
            fontSize: pt(4.1),
            lineHeight: 1.2,
            color: 'var(--portfolio-dark-red)',
            textAlign: 'center',
          }}
        >
          Adobe Photothop,
          <br />
          Adobe Illustrator,
          <br />
          Adobe After Effects
          <br />
          Figma
        </div>
      </div>
    </section>
  );
}
