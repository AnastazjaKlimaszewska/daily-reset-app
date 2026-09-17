# Test Cases

## TC-01 — Dashboard ładuje się poprawnie

### Warunki wstępne

Aplikacja uruchamia się bez krytycznego błędu.

### Kroki

1. Otwórz `/`.
2. Poczekaj na załadowanie lokalnych danych.

### Oczekiwany rezultat

Dashboard wyświetla się poprawnie i pokazuje sekcje podsumowania.

---

## TC-02 — Ukończenie Daily Check-in

### Kroki

1. Otwórz `/check-in`.
2. Wybierz poziom energii.
3. Wybierz nastrój.
4. Wybierz obciążenie mentalne.
5. Wybierz dostępny czas.
6. Zatwierdź check-in.

### Oczekiwany rezultat

Aplikacja:

- przyjmuje kompletny check-in,
- klasyfikuje stan użytkownika,
- wyświetla dokładnie trzy rekomendacje.

---

## TC-03 — Niekompletny check-in

### Kroki

1. Otwórz `/check-in`.
2. Pozostaw co najmniej jedno wymagane pole bez wyboru.
3. Spróbuj przejść dalej.

### Oczekiwany rezultat

Niekompletny check-in nie jest przetwarzany jako pełny reset.

---

## TC-04 — Klasyfikacja Recovery

### Przykładowe dane

- energy: low

### Oczekiwany rezultat

Stan zostaje sklasyfikowany jako:

`recovery`

zgodnie z deterministycznymi regułami klasyfikacji.

---

## TC-05 — Klasyfikacja Active

### Przykładowe dane

- energy: high
- mood: good
- mental load: wartość, która nie wymusza recovery

### Oczekiwany rezultat

Stan zostaje sklasyfikowany jako:

`active`

zgodnie z zaimplementowanymi regułami klasyfikacji.

---

## TC-06 — Klasyfikacja Balanced

### Dane

Użyj wartości, które nie spełniają warunków dla recovery ani active.

### Oczekiwany rezultat

Stan zostaje sklasyfikowany jako:

`balanced`

---

## TC-07 — Liczba rekomendacji

### Kroki

1. Ukończ poprawny check-in.
2. Wyświetl wyniki rekomendacji.

### Oczekiwany rezultat

Wyświetlają się dokładnie trzy rekomendacje.

---

## TC-08 — Wybór rekomendacji

### Kroki

1. Wygeneruj rekomendacje.
2. Wybierz jedną z nich.

### Oczekiwany rezultat

Wybrana rekomendacja jest wizualnie oznaczona jako aktywna.

---

## TC-09 — Ukończenie wybranej akcji

### Kroki

1. Wygeneruj rekomendacje.
2. Wybierz jedną rekomendację.
3. Oznacz ją jako wykonaną.

### Oczekiwany rezultat

Wykonana akcja zostaje zapisana i powiązana z check-inem, który ją wygenerował.

Użytkownik otrzymuje widoczne potwierdzenie ukończenia.

---

## TC-10 — History pokazuje zapisany reset

### Warunki wstępne

Istnieje co najmniej jeden zapisany check-in.

### Kroki

1. Otwórz `/history`.

### Oczekiwany rezultat

Wyświetlają się informacje o zapisanym check-inie.

Jeśli istnieje wykonana akcja dla tego check-inu, również zostaje wyświetlona.

---

## TC-11 — Kolejność historii

### Warunki wstępne

Istnieje kilka zapisanych check-inów.

### Kroki

1. Otwórz `/history`.

### Oczekiwany rezultat

Nowsze wpisy są wyświetlane przed starszymi.

---

## TC-12 — Statystyki Dashboardu

### Warunki wstępne

W lokalnej bazie istnieją dane.

### Kroki

1. Otwórz `/`.

### Oczekiwany rezultat

Dashboard poprawnie wyświetla:

- liczbę check-inów,
- liczbę wykonanych akcji,
- completion rate,
- najnowszy stan,
- ostatnią wykonaną akcję.

---

## TC-13 — Rozkład stanów w Insights

### Warunki wstępne

Istnieje kilka check-inów z różnymi stanami.

### Kroki

1. Otwórz `/insights`.

### Oczekiwany rezultat

Rozkład stanów odpowiada zapisanym danym.

---

## TC-14 — Najczęstszy stan w Insights

### Warunki wstępne

Jeden ze stanów występuje częściej niż pozostałe.

### Kroki

1. Otwórz `/insights`.

### Oczekiwany rezultat

Najczęstszy stan wyświetlany przez aplikację odpowiada zapisanym danym.

---

## TC-15 — Kategorie wykonanych akcji

### Warunki wstępne

Istnieją wykonane akcje.

### Kroki

1. Otwórz `/insights`.

### Oczekiwany rezultat

Kategorie wykonanych akcji są poprawnie podsumowane.

---

## TC-16 — Usuwanie danych lokalnych

### Warunki wstępne

Istnieją zapisane check-iny lub wykonane akcje.

### Kroki

1. Otwórz `/settings`.
2. Wybierz opcję usunięcia danych.
3. Potwierdź operację.

### Oczekiwany rezultat

Dane Daily Reset zostają usunięte, a użytkownik otrzymuje potwierdzenie.

---

## TC-17 — Anulowanie usunięcia danych

### Warunki wstępne

Istnieją zapisane dane.

### Kroki

1. Otwórz `/settings`.
2. Wybierz opcję usunięcia danych.
3. Anuluj okno potwierdzenia.

### Oczekiwany rezultat

Dane nie zostają usunięte.

---

## TC-18 — Nawigacja

### Kroki

Przejdź kolejno między:

- Dashboard,
- Check-in,
- History,
- Insights,
- Settings.

### Oczekiwany rezultat

Każda trasa otwiera się poprawnie, a wspólna nawigacja pozostaje dostępna.

---

## TC-19 — Pełny zestaw testów automatycznych

### Kroki

Uruchom:

```bash
npx.cmd vitest run