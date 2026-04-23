// via — a modern, earthy-wellness palette.
// Previously "Eve" / "Aurora". Palette preserved across rebrands:
// aubergine + terracotta + Arabian spice + muted sage on Cloud Dancer.
// Typography shifted to Bricolage Grotesque (loaded via index.html from
// Google Fonts) for a contemporary geometric-sans feel that matches the
// brand's "path / pathway" meaning.
export const colors = {
  // Primary (renamed from plum for familiarity; still imported as `plum` everywhere)
  plum: '#3D2E3D',       // Deep aubergine
  rose: '#D9886E',       // Terracotta
  coral: '#B8794A',      // Caramel
  gold: '#C9A961',       // Muted gold
  spice: '#7A4232',      // Arabian spice — the pop accent color
  sage: '#8B9F7E',       // Muted sage
  teal: '#6B8F8F',       // Dusty teal
  text: '#2B2B2B',       // Warm near-black
  textLight: '#7A7574',  // Warm gray
  border: '#DDD8CC',     // Warm cream border that reads against Cloud Dancer
  bg: '#EDEAE0',         // Pantone Cloud Dancer — warm off-white page background
  white: '#FFFFFF',
  deepTwilight: '#1F1825', // Deep aubergine for hero backgrounds
};

export const gradients = {
  // Softer, warmer hero gradient — less dawn-rainbow, more sunset-at-dusk
  dawn: 'linear-gradient(180deg, #1F1825 0%, #3D2E3D 35%, #6B4F52 65%, #D9886E 100%)',
  purpleRose: 'linear-gradient(135deg, #3D2E3D, #D9886E)',
  roseGold: 'linear-gradient(135deg, #D9886E, #C9A961)',
  tealGold: 'linear-gradient(135deg, #6B8F8F, #C9A961)',
  // Spice gradients — for pop CTAs and emphasis moments
  spice: 'linear-gradient(135deg, #7A4232, #C9A961)',
  spiceDeep: 'linear-gradient(135deg, #5C3126, #7A4232)',
};

export const fonts = {
  // Bricolage Grotesque is the via brand font — a contemporary geometric
  // grotesque with an optical-size axis. Falls back to system sans-serif
  // if Google Fonts fails to load.
  family: '"Bricolage Grotesque", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
  // Keep the serif token for the wordmark treatment if a designer ever
  // wants a contrasting editorial moment. Currently unused — the via
  // wordmark uses Bricolage Grotesque itself.
  serif: '"Bricolage Grotesque", Georgia, "Times New Roman", serif',
};

export const cardStyle = {
  background: colors.white,
  borderRadius: 14,
  border: `1px solid ${colors.border}`,
  padding: 20,
};
