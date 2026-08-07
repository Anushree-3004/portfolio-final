import React from 'react';

/**
 * Visual Posters — recreated from the approved PDF
 * (Frame 9 (7).pdf).
 *
 * Continues the 1 PDF-pt → 5.56 CSS-px scale used by Introduction and TOC.
 * All coordinates traceable to the PDF via pdftotext -bbox-layout and
 * pixel scans.
 */

const SCALE = 5.56;
const DESIGN_WIDTH_PT = 184;
const SECTION_HEIGHT_PT = 565; // section runs from y≈355 pt to y≈920 pt
const pt = (n: number) => `${n * SCALE}px`;

// Introduction (0-225 pt) + TOC (225-355 pt) sit above this section, so
// this section's local y = 0 corresponds to absolute PDF y = 355.
const Y0 = 355;
const y = (absolutePt: number) => pt(absolutePt - Y0);

// Colours sampled from the PDF pixels.
const COLOR_TITLE = '#9A394E';   // deep rose for headings / paragraph
const COLOR_GREEN = '#4A9129';   // Painterly annotation
const COLOR_VIOLET = '#402961';  // "I chose a deep violet…" annotation
const COLOR_ORANGE = '#FE9134';  // "Minimal typography…" annotations

export default function VisualPosters() {
  return (
    <section
      data-testid="visual-posters-section"
      aria-label="Visual Posters"
      className="w-full flex justify-center"
      style={{ backgroundColor: 'var(--portfolio-bg)' }}
    >
      <div
        data-testid="visual-posters-canvas"
        className="relative"
        style={{
          width: pt(DESIGN_WIDTH_PT),
          height: pt(SECTION_HEIGHT_PT),
          maxWidth: '100%',
        }}
      >
        {/* ============================================================
            1.  TITLE BLOCK  "Visual Posters." + strawberry stack
            ============================================================ */}
        <h2
          data-testid="vp-title-visual"
          style={{
            position: 'absolute',
            left: pt(3),
            top: y(391),
            margin: 0,
            fontFamily: '"IM Fell DW Pica SC", "IM Fell DW Pica", serif',
            fontWeight: 400,
            fontSize: pt(37),
            lineHeight: 1,
            color: COLOR_TITLE,
            whiteSpace: 'nowrap',
          }}
        >
          Visual
        </h2>

        <h2
          data-testid="vp-title-posters"
          style={{
            position: 'absolute',
            left: pt(3),
            top: y(423),
            margin: 0,
            fontFamily: '"IM Fell DW Pica SC", "IM Fell DW Pica", serif',
            fontWeight: 400,
            fontSize: pt(37),
            lineHeight: 1,
            color: COLOR_TITLE,
            whiteSpace: 'nowrap',
          }}
        >
          Posters.
        </h2>

        <img
          data-testid="vp-strawberry"
          src="/assets/02 visual posters/strawberry.png"
          alt=""
          aria-hidden
          style={{
            position: 'absolute',
            left: pt(128.2),
            top: y(404.5),
            width: pt(45.3),
            height: pt(80),
            objectFit: 'contain',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />

        {/* Subtitle */}
        <div
          data-testid="vp-subtitle"
          style={{
            position: 'absolute',
            left: pt(15.78),
            top: y(465),
            fontFamily: '"IM Fell DW Pica SC", "IM Fell DW Pica", serif',
            fontWeight: 400,
            fontSize: pt(7),
            lineHeight: 1,
            letterSpacing: '0.02em',
            color: COLOR_TITLE,
            whiteSpace: 'nowrap',
          }}
        >
          Exploring Visual Directions
        </div>

        {/* Intro paragraph */}
        <p
          data-testid="vp-intro"
          style={{
            position: 'absolute',
            left: pt(15.78),
            top: y(476),
            width: pt(100),
            margin: 0,
            fontFamily: '"IBM Plex Serif", serif',
            fontWeight: 400,
            fontSize: pt(3.8),
            lineHeight: 1.35,
            color: COLOR_TITLE,
          }}
        >
          Experimental explorations of composition, typography, colour and
          image-making using fresh produce as the common subject.
        </p>

        {/* ============================================================
            2.  POSTER ROW 1  – Farm Produce Store peachy + Pineapple
            ============================================================ */}
        <img
          data-testid="vp-poster-1"
          src="/assets/02 visual posters/poster1.svg"
          alt="Farm produce store — peach poster"
          style={{
            position: 'absolute',
            left: pt(12.05),
            top: y(505.6),
            width: pt(72.66),
            height: pt(105.7),
            objectFit: 'contain',
            display: 'block',
          }}
        />

        <img
          data-testid="vp-poster-2"
          src="/assets/02 visual posters/poster2.svg"
          alt="Pineapple poster"
          style={{
            position: 'absolute',
            left: pt(97.8),
            top: y(505.6),
            width: pt(75.9),
            height: pt(105.7),
            objectFit: 'contain',
            display: 'block',
          }}
        />

        {/* ============================================================
            3.  POSTER ROW 2  – Apple, Kiwi, Raspberry
            ============================================================ */}
        <img
          data-testid="vp-poster-3"
          src="/assets/02 visual posters/poster3.svg"
          alt="Apple poster"
          style={{
            position: 'absolute',
            left: pt(12.9),
            top: y(626.4),
            width: pt(47.2),
            height: pt(67.1),
            objectFit: 'contain',
            display: 'block',
          }}
        />

        <img
          data-testid="vp-poster-4"
          src="/assets/02 visual posters/poster4.svg"
          alt="Kiwi poster"
          style={{
            position: 'absolute',
            left: pt(68.9),
            top: y(626.4),
            width: pt(46.9),
            height: pt(67.1),
            objectFit: 'contain',
            display: 'block',
          }}
        />

        <img
          data-testid="vp-poster-5"
          src="/assets/02 visual posters/poster5.svg"
          alt="Raspberry poster"
          style={{
            position: 'absolute',
            left: pt(124.8),
            top: y(626.4),
            width: pt(46.9),
            height: pt(67.1),
            objectFit: 'contain',
            display: 'block',
          }}
        />

        {/* ============================================================
            4.  "Decoding visual thinking"  – section sub-heading + intro
            ============================================================ */}
        <div
          data-testid="vp-decoding-title"
          style={{
            position: 'absolute',
            left: pt(54.82),
            top: y(720),
            fontFamily: '"IM Fell DW Pica SC", "IM Fell DW Pica", serif',
            fontWeight: 400,
            fontSize: pt(9),
            lineHeight: 1,
            letterSpacing: '0.01em',
            color: COLOR_TITLE,
            whiteSpace: 'nowrap',
          }}
        >
          Decoding visual thinking
        </div>

        <p
          data-testid="vp-decoding-intro"
          style={{
            position: 'absolute',
            left: pt(29.89),
            top: y(732),
            width: pt(121.5),
            margin: 0,
            fontFamily: '"IBM Plex Serif", serif',
            fontWeight: 400,
            fontSize: pt(3.6),
            lineHeight: 1.35,
            color: COLOR_TITLE,
            textAlign: 'center',
          }}
        >
          Including a detailed explanation of the design decisions, creative
          process, and visual thinking behind one selected poster, showing how
          individual elements work together to communicate an idea.
        </p>

        {/* ============================================================
            5.  FEATURED POSTER (banana) + hand-written annotations
            ============================================================ */}
        <img
          data-testid="vp-poster-6"
          src="/assets/02 visual posters/poster6.svg"
          alt="Fresh Produce Store — banana"
          style={{
            position: 'absolute',
            left: pt(52.0),
            top: y(754.5),
            width: pt(91.7),
            height: pt(120.5),
            objectFit: 'cover',
            display: 'block',
          }}
        />

        {/* Green annotation – left side */}
        <div
          data-testid="vp-annot-green"
          style={{
            position: 'absolute',
            left: pt(13),
            top: y(787),
            width: pt(35),
            fontFamily: '"Just Me Again Down Here", "Homemade Apple", cursive',
            fontWeight: 400,
            fontSize: pt(4.2),
            lineHeight: 1.25,
            color: COLOR_GREEN,
            textAlign: 'center',
          }}
        >
          Painterly textures and grain were introduced to add warmth and move
          away from photographic realism.
        </div>

        {/* Violet annotation – right side (top) */}
        <div
          data-testid="vp-annot-violet"
          style={{
            position: 'absolute',
            left: pt(131),
            top: y(758),
            width: pt(47),
            fontFamily: '"Just Me Again Down Here", "Homemade Apple", cursive',
            fontWeight: 400,
            fontSize: pt(4.2),
            lineHeight: 1.25,
            color: COLOR_VIOLET,
            textAlign: 'center',
          }}
        >
          I chose a deep violet background to create strong contrast and make
          the banana immediately command attention.
        </div>

        {/* Orange annotation – right side (bottom) */}
        <div
          data-testid="vp-annot-orange-right"
          style={{
            position: 'absolute',
            left: pt(133),
            top: y(845),
            width: pt(45),
            fontFamily: '"Just Me Again Down Here", "Homemade Apple", cursive',
            fontWeight: 400,
            fontSize: pt(4.2),
            lineHeight: 1.25,
            color: COLOR_ORANGE,
            textAlign: 'center',
          }}
        >
          Minimal typography keeps the focus on the illustration while allowing
          the colours and textures to tell the story.
        </div>

        {/* Orange annotation – bottom-left (wider) */}
        <div
          data-testid="vp-annot-orange-bottom"
          style={{
            position: 'absolute',
            left: pt(4),
            top: y(878),
            width: pt(100),
            fontFamily: '"Just Me Again Down Here", "Homemade Apple", cursive',
            fontWeight: 400,
            fontSize: pt(4.2),
            lineHeight: 1.25,
            color: COLOR_ORANGE,
            textAlign: 'center',
          }}
        >
          Minimal typography keeps the focus on the illustration while allowing
          the colours and textures to tell the story.
        </div>
      </div>
    </section>
  );
}
