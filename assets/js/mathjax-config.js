window.MathJax = {
  loader: {
    load: ['input/tex', 'output/chtml'],
  },
  output: {
    // Use the Euler font.
    fontExtensions: ['mathjax-euler'],
  },
  options: {
    renderActions: {
      find: [10, (doc) => {
        for (const element of document.querySelectorAll('[data-math-style="inline"]')) {
          const math = new doc.options.MathItem(element.textContent, doc.inputJax.tex, false);
          const text = document.createTextNode('');
          element.parentNode.replaceChild(text, element);
          math.start = {node: text, delim: '', n: 0};
          math.end = {node: text, delim: '', n: 0};
          doc.math.push(math);
        }
      }, '', false],
    },
  },
};
