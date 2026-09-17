# Test Strategy

## Cel

Celem testów w projekcie Daily Reset jest sprawdzenie, czy MVP działa zgodnie z wymaganiami, planami implementacji i aktualną architekturą systemu.

Testy koncentrują się na:

- logice klasyfikacji,
- logice rekomendacji,
- głównych przepływach użytkownika,
- poprawnym renderowaniu stron,
- obsłudze danych lokalnych,
- zapobieganiu regresjom.

## Narzędzia testowe

Projekt wykorzystuje:

- Vitest,
- Testing Library,
- jsdom.

## Zakres testów automatycznych

### Logika rekomendacji

Testy sprawdzają:

- klasyfikację stanu,
- deterministyczne działanie logiki,
- poprawną liczbę rekomendacji,
- dopasowanie rekomendacji do stanu i dostępnego czasu.

Plik:

`tests/recommendations.test.ts`

### Dashboard

Testy sprawdzają:

- ładowanie zapisanych danych,
- wyświetlanie podsumowania,
- najnowszy stan,
- ostatnią wykonaną akcję,
- podstawowe elementy nawigacyjne.

Plik:

`tests/page.test.tsx`

### Daily Check-in

Testy sprawdzają:

- wybór energii,
- wybór nastroju,
- wybór obciążenia mentalnego,
- wybór dostępnego czasu,
- klasyfikację,
- wygenerowanie dokładnie trzech rekomendacji,
- wybór rekomendacji,
- zapis wykonanej akcji.

Plik:

`tests/checkin.test.tsx`

### History

Testy sprawdzają:

- ładowanie zapisanych check-inów,
- ładowanie wykonanych akcji,
- powiązanie akcji z odpowiednim check-inem,
- wyświetlanie historii użytkownika.

Plik:

`tests/history.test.tsx`

### Insights

Testy sprawdzają:

- liczbę check-inów,
- liczbę wykonanych akcji,
- completion rate,
- rozkład stanów,
- najczęstszy stan,
- kategorie wykonanych akcji.

Plik:

`tests/insights.test.tsx`

### Settings

Testy sprawdzają:

- wyświetlanie informacji o danych lokalnych,
- potwierdzenie przed usunięciem danych,
- wywołanie operacji czyszczenia danych,
- komunikat po zakończeniu operacji.

Plik:

`tests/settings.test.tsx`

## Uruchamianie testów

Pełny zestaw testów uruchamiany jest poleceniem:

```bash
npx.cmd vitest run