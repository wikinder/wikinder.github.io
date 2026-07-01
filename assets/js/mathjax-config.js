window.MathJax = {
  tex: {
    inlineMath: [['$', '$']],
    packages: ['base', 'ams'],
  },
  loader: {
    load: ['input/tex-base', '[tex]/ams', 'output/chtml'],
  },
  output: {
    // Use the Euler font.
    fontExtensions: ['mathjax-euler'],
  },
};
