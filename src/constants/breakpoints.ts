const sizes = {
  tinyScreen: "320px",
  phone: "480px",
  phoneLandscape: "400px",
  tabletPortrait: "768px",
  tabletLandscape: "1024px",
  desktop: "1448px",
  bigDesktop: "1800px",
};

const breakPoints = {
  tinyScreenOnly: `(max-width: ${sizes.tinyScreen})`,
  phoneOnly: `(max-width: ${sizes.phone})`,
  phoneLandscape: `(orientation: landscape) and (max-height: ${sizes.phoneLandscape})`,
  tabletPortraitUp: `(max-width: ${sizes.tabletPortrait})`,
  tabletLandscapeUp: `(min-width: ${sizes.tabletLandscape})`,
  desktopDown: `(max-width: ${sizes.desktop})`,
  bigDesktopUp: `(min-width: ${sizes.bigDesktop})`,
};

export default breakPoints;
