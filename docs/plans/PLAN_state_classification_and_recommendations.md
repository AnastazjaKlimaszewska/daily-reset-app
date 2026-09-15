# State Classification and Recommendations

## 1. Goal

Interpret the user's completed daily check-in and generate a small number of context-aware micro-action recommendations.

## 2. Scope

The feature includes:

- deterministic classification of the user's current state,
- generation of three recommendations,
- use of energy, mood, mental load and available time,
- recommendation categories such as rest, movement, focus and environment.

The feature does not include:

- machine learning,
- external AI APIs,
- medical diagnosis,
- personalized treatment advice.

## 3. Functional requirements

- The application must classify every complete check-in.
- The possible classified states are:
  - recovery,
  - balanced,
  - active.
- Low energy, low mood or high mental load should prioritize recovery.
- High energy, good mood and non-high mental load may result in active state.
- Other combinations should result in balanced state.
- The application must generate exactly three recommendations.
- Recommendations must depend on the classified state.
- Recommendations must also respect available time.
- Every recommendation must contain:
  - activity name,
  - category.

## 4. Non-functional requirements

### Explainability

The classification logic must be deterministic and easy to understand.

### Performance

Classification and recommendation generation should happen immediately in the browser.

### Privacy

No check-in data should leave the browser.

### Maintainability

Classification logic should remain separate from UI components.

## 5. Technical context

The logic is implemented in:

`/lib/recommendations.ts`

The feature uses types from:

`/lib/db.ts`

Main functions:

`classifyState()`

`getRecommendations()`

## 6. Implementation steps

1. Define the input type for a complete check-in.
2. Define the recommendation type.
3. Implement deterministic state classification.
4. Implement recommendation rules for recovery state.
5. Implement recommendation rules for balanced state.
6. Implement recommendation rules for active state.
7. Adjust recommendations based on available time.
8. Return exactly three recommendations.
9. Add automated unit tests.
10. Update project registers.

## 7. Acceptance criteria

- Every valid check-in produces one classified state.
- Only recovery, balanced or active can be returned.
- The same input always produces the same state.
- Exactly three recommendations are returned.
- Recommendations change depending on state.
- Recommendations change depending on available time.
- Every recommendation contains activity and category.
- Automated tests pass.

## 8. Tests

### Unit tests

- low energy produces recovery,
- high energy with good mood can produce active,
- moderate inputs produce balanced,
- recommendation list contains exactly three items,
- available time affects recommendation content.

### Integration tests

- submit a complete check-in,
- classify the check-in,
- generate recommendations,
- verify that the recommendation stage receives the generated data.