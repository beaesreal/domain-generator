const { pronouns, adjetives, nouns, tlds } = require("./variables");

var domainNameGenerator = (a, b, c, d) => {
  for (let w = 0; w < a.length; w++) {
    for (let x = 0; x < b.length; x++) {
      for (let y = 0; y < c.length; y++) {
        for (let z = 0; z < d.length; z++) {
          console.log(a[w] + b[x] + c[y] + d[z]);
        }
      }
    }
  }
};

domainNameGenerator(pronouns, adjetives, nouns, tlds);
