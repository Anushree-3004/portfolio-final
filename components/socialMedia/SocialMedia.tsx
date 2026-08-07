import React from 'react';

/**
 * Social Media — recreated from the approved PDF (Frame 9 (7).pdf).
 *
 * Same 1 PDF-pt → 5.56 CSS-px scale used across the whole portfolio.
 * All positions traceable to the PDF via pdftotext -bbox-layout + pixel scans.
 *
 * NOTE:  The middle campaign poster in the top campaign row (KNOW YOUR ROAST)
 * does not exist as a distinct asset in /public/assets/03 social media/ —
 * poster1.svg and poster2.svg are byte-identical (STRAWBERRY FERMENTED).
 * Until the correct asset is supplied, poster2.svg is used as a placeholder
 * in that slot.
 */

const SCALE = 5.56;
const DESIGN_WIDTH_PT = 184;
const SECTION_HEIGHT_PT = 468; // y ≈ 917 – 1385 pt
const pt = (n: number) => `${n * SCALE}px`;

// Introduction (225) + TOC (130) + Visual Posters (565) = 920 pt above.
const Y0 = 920;
const y = (absolutePt: number) => pt(absolutePt - Y0);

const COLOR_TITLE = '#965510';       // Social Media title / subtitle / intro
const COLOR_CAMPAIGN = '#A85F0B';    // Caramelly Social Campaign heading
const COLOR_SCRIPT = '#3B2A1A';      // new launches! / new flavours!
const COLOR_PARA = '#6C4A07';        // final descriptive paragraph

export default function SocialMedia() {
  return (
    <section
      data-testid="social-media-section"
      aria-label="Social Media"
      className="w-full flex justify-center"
      style={{ backgroundColor: 'var(--portfolio-bg)' }}
    >
      <div
        data-testid="social-media-canvas"
        className="relative"
        style={{
          width: pt(DESIGN_WIDTH_PT),
          height: pt(SECTION_HEIGHT_PT),
          maxWidth: '100%',
        }}
      >
        {/* ================================================================
            1.  SECTION TITLE  Social  /  Media.  +  coffee-bean decoration
            ================================================================ */}
        <h2
          data-testid="sm-title-social"
          style={{
            position: 'absolute',
            left: pt(7),
            top: y(905),
            margin: 0,
            fontFamily: '"IM Fell DW Pica SC", "IM Fell DW Pica", serif',
            fontWeight: 400,
            fontSize: pt(37),
            lineHeight: 1,
            color: COLOR_TITLE,
            whiteSpace: 'nowrap',
          }}
        >
          Social
        </h2>

        <h2
          data-testid="sm-title-media"
          style={{
            position: 'absolute',
            left: pt(7),
            top: y(935),
            margin: 0,
            fontFamily: '"IM Fell DW Pica SC", "IM Fell DW Pica", serif',
            fontWeight: 400,
            fontSize: pt(37),
            lineHeight: 1,
            color: COLOR_TITLE,
            whiteSpace: 'nowrap',
          }}
        >
          Media.
        </h2>

        {/* Coffee-bean decorative image at upper right */}
        <img
          data-testid="sm-coffee-bean-top"
          src="/assets/03 social media/coffee bean1.png"
          alt=""
          aria-hidden
          style={{
            position: 'absolute',
            left: pt(126),
            top: y(945.5),
            width: pt(49.5),
            height: pt(67.6),
            objectFit: 'contain',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />

        {/* ================================================================
            2.  SUBTITLE + INTRO PARAGRAPH
            ================================================================ */}
        <div
          data-testid="sm-subtitle"
          style={{
            position: 'absolute',
            left: pt(86.22),
            top: y(988),
            fontFamily: '"IM Fell DW Pica SC", "IM Fell DW Pica", serif',
            fontWeight: 400,
            fontSize: pt(9),
            lineHeight: 1,
            letterSpacing: '0.01em',
            color: COLOR_TITLE,
            whiteSpace: 'nowrap',
          }}
        >
          Designing for Engagement
        </div>

        <p
          data-testid="sm-intro"
          style={{
            position: 'absolute',
            left: pt(48.97),
            top: y(1002),
            width: pt(125),
            margin: 0,
            fontFamily: '"IBM Plex Serif", serif',
            fontWeight: 400,
            fontSize: pt(3.8),
            lineHeight: 1.35,
            color: COLOR_TITLE,
            textAlign: 'right',
          }}
        >
          A collection of social media posts exploring promotional
          storytelling, campaign design, and engaging visual communication.
        </p>

        {/* ================================================================
            3.  CARAMELLY SOCIAL CAMPAIGN heading
            ================================================================ */}
        <div
          data-testid="sm-campaign-heading"
          style={{
            position: 'absolute',
            left: pt(36.51),
            top: y(1020),
            fontFamily: '"IM Fell DW Pica SC", "IM Fell DW Pica", serif',
            fontWeight: 400,
            fontSize: pt(11.5),
            lineHeight: 1,
            letterSpacing: '0.02em',
            color: COLOR_CAMPAIGN,
            whiteSpace: 'nowrap',
          }}
        >
          Caramelly Social Campaign
        </div>

        {/* ================================================================
            4.  TOP CAMPAIGN ROW  – 3 posters
                FRUIT BOMB  |  KNOW YOUR ROAST  |  STRAWBERRY FERMENTED
            ================================================================ */}
        <img
          data-testid="sm-poster-fruit-bomb"
          src="/assets/03 social media/poster3.svg"
          alt="Fruit Bomb campaign"
          style={{
            position: 'absolute',
            left: pt(9.0),
            top: y(1043.2),
            width: pt(50.9),
            height: pt(63.8),
            objectFit: 'contain',
            display: 'block',
          }}
        />

        {/* MISSING asset — poster2.svg placeholders as duplicate of poster1 */}
        <img
          data-testid="sm-poster-know-your-roast"
          src="/assets/03 social media/poster2.svg"
          alt="Know Your Roast campaign (asset missing)"
          style={{
            position: 'absolute',
            left: pt(66.9),
            top: y(1043.2),
            width: pt(49.8),
            height: pt(63.8),
            objectFit: 'contain',
            display: 'block',
          }}
        />

        <img
          data-testid="sm-poster-strawberry"
          src="/assets/03 social media/poster1.svg"
          alt="Strawberry Fermented campaign"
          style={{
            position: 'absolute',
            left: pt(125.9),
            top: y(1043.2),
            width: pt(49.8),
            height: pt(63.8),
            objectFit: 'contain',
            display: 'block',
          }}
        />

        {/* Captions */}
        <div
          data-testid="sm-caption-launches"
          style={{
            position: 'absolute',
            left: pt(20.12),
            top: y(1109),
            fontFamily: '"Jim Nightshade", "Homemade Apple", cursive',
            fontStyle: 'italic',
            fontSize: pt(6.5),
            lineHeight: 1,
            color: COLOR_SCRIPT,
            whiteSpace: 'nowrap',
          }}
        >
          new launches!
        </div>

        <div
          data-testid="sm-caption-flavours"
          style={{
            position: 'absolute',
            left: pt(140.27),
            top: y(1109),
            fontFamily: '"Jim Nightshade", "Homemade Apple", cursive',
            fontStyle: 'italic',
            fontSize: pt(6.5),
            lineHeight: 1,
            color: COLOR_SCRIPT,
            whiteSpace: 'nowrap',
          }}
        >
          new flavours!
        </div>

        {/* ================================================================
            5.  FEATURED CARAMELLY CAMPAIGN  (poster4 — Discover our new notes)
            ================================================================ */}
        <img
          data-testid="sm-poster-caramelly-featured"
          src="/assets/03 social media/poster4.svg"
          alt="Caramelly — Discover our new notes"
          style={{
            position: 'absolute',
            left: pt(62.6),
            top: y(1125),
            width: pt(57.2),
            height: pt(78),
            objectFit: 'contain',
            display: 'block',
          }}
        />

        {/* ================================================================
            6.  COFFEE CAMPAIGN — top row (SUMMER + americano + affogato)
            ================================================================ */}
        <img
          data-testid="sm-post-summer"
          src="/assets/03 social media/post1.svg"
          alt="This summer, treat yourself with our coffees"
          style={{
            position: 'absolute',
            left: pt(18.0),
            top: y(1227),
            width: pt(38.8),
            height: pt(54),
            objectFit: 'contain',
            display: 'block',
          }}
        />

        <img
          data-testid="sm-post-americano"
          src="/assets/03 social media/post3.svg"
          alt="Americano"
          style={{
            position: 'absolute',
            left: pt(72.8),
            top: y(1227),
            width: pt(39),
            height: pt(54),
            objectFit: 'contain',
            display: 'block',
          }}
        />

        <img
          data-testid="sm-post-affogato"
          src="/assets/03 social media/post4.svg"
          alt="Affogato"
          style={{
            position: 'absolute',
            left: pt(127.9),
            top: y(1227),
            width: pt(38.8),
            height: pt(54),
            objectFit: 'contain',
            display: 'block',
          }}
        />

        {/* ================================================================
            7.  COFFEE CAMPAIGN — bottom row (cold brew + iced coffee)
            ================================================================ */}
        <img
          data-testid="sm-post-cold-brew"
          src="/assets/03 social media/post5.svg"
          alt="Cold brew"
          style={{
            position: 'absolute',
            left: pt(41.9),
            top: y(1290),
            width: pt(39),
            height: pt(50),
            objectFit: 'contain',
            display: 'block',
          }}
        />

        <img
          data-testid="sm-post-iced-coffee"
          src="/assets/03 social media/post2.svg"
          alt="Iced coffee"
          style={{
            position: 'absolute',
            left: pt(101.8),
            top: y(1290),
            width: pt(38),
            height: pt(50),
            objectFit: 'contain',
            display: 'block',
          }}
        />

        {/* ================================================================
            8.  FINAL DESCRIPTIVE PARAGRAPH
            ================================================================ */}
        <p
          data-testid="sm-final-paragraph"
          style={{
            position: 'absolute',
            left: pt(19.30),
            top: y(1358),
            width: pt(146),
            margin: 0,
            fontFamily: '"IBM Plex Serif", serif',
            fontWeight: 400,
            fontSize: pt(4.6),
            lineHeight: 1.35,
            color: COLOR_PARA,
            textAlign: 'center',
          }}
        >
          A cohesive social media campaign designed to promote seasonal
          beverages, introduce products, and strengthen Caramelly&rsquo;s
          playful brand identity.
        </p>
      </div>
    </section>
  );
}
