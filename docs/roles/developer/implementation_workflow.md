# Implementation Workflow

## Cel

Ten plik opisuje sposób implementowania funkcjonalności w projekcie Daily Reset zgodnie z podejściem Spec Driven Development.

Repozytorium jest źródłem prawdy dla:

- wymagań,
- planów,
- implementacji,
- testów,
- dokumentacji.

## Proces implementacji

Każda większa funkcjonalność powinna przejść przez następujące etapy:

1. zdefiniowanie wymagania,
2. przygotowanie planu implementacji,
3. przegląd zakresu,
4. implementacja,
5. testy,
6. aktualizacja dokumentacji,
7. aktualizacja rejestrów implementacji,
8. commit zmian.

## 1. Definicja wymagania

Przed rozpoczęciem implementacji należy określić:

- problem użytkownika,
- oczekiwane zachowanie,
- zakres funkcjonalności,
- elementy poza zakresem.

Wymagania powinny być zapisane w dokumentacji projektu.

## 2. Plan implementacji

Każda większa funkcjonalność powinna posiadać plan w:

`docs/plans/`

Plan powinien zawierać:

- Goal,
- Scope,
- Functional requirements,
- Non-functional requirements,
- Technical context,
- Implementation steps,
- Acceptance criteria,
- Tests.

Plan pełni funkcję kontraktu implementacyjnego.

## 3. Przegląd planu

Przed rozpoczęciem kodowania należy sprawdzić:

- czy wymaganie jest jednoznaczne,
- czy zakres jest odpowiednio mały,
- czy zależności są znane,
- czy kryteria akceptacji są testowalne,
- czy funkcjonalność mieści się w zakresie MVP.

## 4. Implementacja

Funkcjonalność powinna być implementowana możliwie małymi krokami.

Należy:

- korzystać z istniejącej architektury,
- zachować spójność z aktualnym kodem,
- nie dodawać funkcji niezwiązanych z planem,
- nie duplikować logiki domenowej,
- nie wprowadzać nowych technologii bez uzasadnienia.

## 5. Testy automatyczne

Po implementacji należy uruchomić odpowiednie testy.

Pełny zestaw testów uruchamiany jest poleceniem:

```bash
npx.cmd vitest run