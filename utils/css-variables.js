import getFontSize from './typography/font-size.js';

// minScreen, maxScreen, and units are optional
export const BREAKPOINTS = {
  small: 320 / 16,
  medium: 600 / 16,
  large: 1248 / 16,
  larger: 1440 / 16
};

/* Base units of typography system.
 * Update these numbers to change how type is set throughout the app */
export const TYPEUNITS = {
  bodyFont: {
    small: 20,
    large: 20,
    lineHeight: 23,
  },
  typeScale: {
    small: 1.2,
    large: 1.5,
  },
  spaceScale: {
    small: 2,
    large: 2.5,
  }
}

export const TYPESTYLES = {
  'small': `
    ${getFontSize(-1)}
     font-weight: var(--font-weight-bold);
     font-feature-settings: c2sc, 'smcp';
     text-transform: uppercase;
     letter-spacing: var(--letter-spacing);
    `,

   'base': `
     ${getFontSize(0)}
    `,

   'large': `
     ${getFontSize(1)}
    `,

   'larger': `
     ${getFontSize(2)}
     font-family: var(--font-family-serif);
    `,

   'largest': `
     ${getFontSize(3)}
     font-family: var(--font-family-serif);
    `,
}


export const COLORS = {
  'neutral': {
    'lightest': `#ffffff`,
    'lighter':  `#f8f8ff`,
    'light':    `#f0f0f6`,
    'dark':     `#adb7d8`,
    'darker':   `#747f8d`,
    'darkest':  `#000000`
  },

  'primary': {
    'base':     `#5849fe`,
  },

  'success': {
    'base':     `#00E3AB`,
  }
}
