# Tailwind CSS Hover State Conflicts
This repository demonstrates a common issue encountered when using Tailwind CSS hover states: unintended style application due to class name collisions.

## Bug Description
When applying a hover state using Tailwind's `hover:` modifier, unexpected styling might be applied to other elements if those elements share the same class names as the hover styles.

## How to reproduce the bug
1. Clone this repository.
2. Open `index.html` in your browser.
3. Notice that when you hover over the button, both the button and the div below get the same hover styles.

## Solution
The best solution is to use more specific class names to avoid naming collisions. Add unique identifiers, making the class names more targeted. For Example, rather than applying  `bg-blue-700` to both the base state and the hover state, create separate class names for each state.