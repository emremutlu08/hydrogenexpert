# Project Rules

- In the final completion response to Emre, include both a clickable pull request link and a clickable live environment link.
- Do not force these links into every interim status update unless they are directly useful in that moment.
- The pull request link should point to the active/current PR for the completed work when one exists; otherwise use the most recent relevant PR.
- The live environment link should point to the verified live environment for the project, usually `https://hydrogenexpert.co`.

- Every image used in this project must include meaningful alt text.
- Every meaningful image used in this project must also include a meaningful `title` attribute.
- Do not add decorative or content images without an explicit `alt` attribute or equivalent accessible text.
- When using `next/image`, always provide alt text that describes the image's purpose in context.
- When using `next/image`, set `title` as well unless the image is purely decorative.
- If an image is purely decorative, use `alt=\"\"` and ensure it is truly non-essential.
- Before shipping UI changes, check that all newly added images and logo assets remain accessible to screen readers and understandable to AI agents reviewing the codebase.
