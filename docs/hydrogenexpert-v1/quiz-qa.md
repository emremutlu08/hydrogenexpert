# Should I Use Hydrogen Quiz QA

Last updated: May 7, 2026

## Implementation

- Page: `app/should-i-use-it/page.tsx`
- Interactive component: `components/quiz/HydrogenFitQuiz.tsx`
- Questions: five yes/no answers
- Result paths:
  - 0-2 yes answers: stay on Liquid or refactor first
  - 3-4 yes answers: run a Fit & Risk Audit
  - 5 yes answers: Hydrogen deserves serious planning

## QA Cases

| Case | Expected behavior | Status |
| --- | --- | --- |
| Initial score | Displays `0/5`. | Done |
| Yes answer | Increases score and marks button pressed. | Done |
| No answer | Keeps score unchanged and marks button pressed. | Done |
| Result disabled | `See your result` is disabled until all questions are answered. | Done |
| 0-2 result | Shows Liquid/refactor-first result. | Done |
| 3-4 result | Shows Fit & Risk Audit result. | Done |
| 5 result | Shows serious Hydrogen planning result. | Done |
| Keyboard | Native buttons and checkbox/input are keyboard reachable. | Done |
| Mobile | Layout uses responsive cards and wrapping button rows. | Needs browser review |
| No-JS fallback | Static explanation and questions remain readable; only scoring/email submission requires JS. | Done |
| Analytics | Answer clicks emit `quiz_answer_click`; first result reveal emits `quiz_result_view`; email CTA emits `cta_click_email_brief`. | Done |

## Manual Browser Checklist

1. Open `/should-i-use-it`.
2. Answer all questions with 0, 3, and 5 yes combinations.
3. Confirm the right result text appears for each.
4. Tab through answers, result button, CTA links, checkbox, email input, and submit button.
5. At mobile width, confirm no horizontal overflow and no hidden CTA text.
