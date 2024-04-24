const itemEl = document.querySelectorAll('.item')
console.log('Number of categories:', itemEl.length);
const arreyElem = Array.from(itemEl)
arreyElem.forEach(element => {
   const category = element.querySelector("h2");
   console.log('Category:', category.textContent);
   const elements = element.querySelectorAll("ul > li")
   console.log('Elements:', elements.length)
}
);
