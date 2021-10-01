const breakpoints = {
  mobile: '767px',
  desktop: '768px',
};

const device = {
  isMobile: `(max-width: ${breakpoints.mobile})`,
  isDesktop: `(min-width: ${breakpoints.desktop})`,
};

export default device;
