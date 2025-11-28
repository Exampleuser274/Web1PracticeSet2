# JS Practice Set 2

Practice functions, conditionals, and Git deployment with realistic scenarios.

## Git Deployment

Initialize repo and commit regularly:

```bash
git init
git add .
git commit -m "initial commit"
```

After each solution:

```bash
git add .
git commit -m "descriptive message"
```

**GitHub Setup:**

- Create new repo (without files) → run provided commands to connect
- _Alternative:_ clone empty repo first, then add files

**Deploy:** Settings → Pages → set branch to main

---

## URL Slug Generator

Transform strings into URL-friendly slugs (e.g., "My Blog Post!" → "my-blog-post").

**Key Syntax:**

- Function with parameter and return statement
- String methods: `.toLowerCase()`, `.trim()`, `.split()`, `.join()`, `.replace()`
- [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
- Test with `console.log()` or DOM rendering

---

## Simple Calculator

Build a calculator with input fields and operator selection.

**Key Syntax:**

- Access input values: `element.value`
- Type coercion: `Number(inputValue)`
- Conditionals to handle operator selection
- Event listeners for button clicks
- DOM manipulation to display results

---

## Carousel Interface

Navigate through array items with forward/back buttons.

**Key Syntax:**

- Array iteration and index tracking
- Event listeners on navigation buttons
- DOM updates: `element.textContent` or `.innerHTML`
- **Wrap-around hint:** Use modulo operator to cycle through array: `index = (index + 1) % array.length` for forward, and `index = (index - 1 + array.length) % array.length` for backward

---

## Dynamic Calculator (Bonus Challenge)

Parse a single string input (e.g., "5 + 3") into numbers and operator.

**Key Syntax:**

- String splitting: `.split()` with space delimiter
- Pattern matching: check if substring is operator (`+`, `-`, `*`, `/`)
- Type checking and validation
- Error handling for invalid input
- Combine techniques from URL Slug Generator and Simple Calculator

**Tip:** Think through edge cases—what happens with extra spaces, invalid operators, or non-numeric input?
