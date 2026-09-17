# Resource Analysis

## Cel

Celem tego dokumentu jest ocena zasobów potrzebnych do zbudowania, przetestowania, wdrożenia i utrzymania MVP Daily Reset.

Projekt został zaprojektowany tak, aby był możliwy do wykonania przez jedną osobę, przy ograniczonym czasie i bez rozbudowanej infrastruktury.

## Zasoby deweloperskie

MVP może zostać zrealizowany przez jednego dewelopera.

Główne zadania obejmują:

- implementację interfejsu,
- implementację logiki klasyfikacji,
- implementację logiki rekomendacji,
- lokalne przechowywanie danych,
- testy automatyczne,
- dokumentację,
- wdrożenie aplikacji.

Nie jest wymagany osobny backend developer, ponieważ obecne MVP nie korzysta z zewnętrznego backendu.

## Zasoby techniczne

Do pracy nad projektem potrzebne są:

- Node.js,
- npm,
- Git,
- GitHub,
- edytor kodu,
- nowoczesna przeglądarka internetowa.

Projekt korzysta głównie z darmowych i otwartoźródłowych technologii.

Główne technologie:

- Next.js,
- React,
- TypeScript,
- Tailwind CSS,
- Dexie,
- IndexedDB,
- Vitest,
- Testing Library.

## Infrastruktura

Obecny MVP ma bardzo małe wymagania infrastrukturalne.

Nie wymaga:

- osobnego serwera aplikacyjnego,
- zdalnej bazy danych,
- systemu logowania,
- systemu płatności,
- zewnętrznego API AI,
- systemu kolejek,
- zewnętrznego systemu przechowywania plików.

Dane użytkownika są przechowywane lokalnie w przeglądarce.

## Hosting

Aplikacja jest wdrożona przy użyciu Vercel.

Dla obecnego MVP podstawowy deployment jest wystarczający.

Nie jest wymagany dedykowany serwer.

## Baza danych

Projekt wykorzystuje IndexedDB przez bibliotekę Dexie.

Dzięki temu:

- nie jest wymagana zdalna baza danych,
- nie ma kosztów hostingu bazy,
- nie trzeba zarządzać hasłami do bazy,
- nie trzeba utrzymywać osobnego backendu.

Ograniczeniem tego rozwiązania jest to, że dane pozostają na konkretnym urządzeniu i w konkretnej przeglądarce.

Dla obecnego MVP jest to akceptowalne.

## Usługi zewnętrzne

Obecna wersja Daily Reset nie wymaga usług zewnętrznych do działania podstawowych funkcji.

Nie są potrzebne:

- OpenAI API,
- zewnętrzny silnik rekomendacji,
- system uwierzytelniania,
- system płatności,
- usługa e-mail,
- zewnętrzna analityka.

Zmniejsza to:

- koszt,
- złożoność,
- ryzyko awarii zależności zewnętrznych,
- wymagania konfiguracyjne.

## Zasoby testowe

Testy są wykonywane lokalnie przy użyciu:

- Vitest,
- Testing Library,
- jsdom.

Testy obejmują główne funkcjonalności i logikę aplikacji.

Nie jest potrzebna zewnętrzna infrastruktura testowa.

## Zasoby ludzkie

Projekt może być rozwijany przez jedną osobę.

Repozytorium zawiera dodatkowo dokumentację ról:

- Product Owner,
- UX/UI,
- Architect,
- Developer,
- Tester.

Role te definiują sposób pracy i odpowiedzialności, mimo że projekt jest realizowany przez jednego studenta.

## Ograniczenia czasowe

Zakres MVP został celowo ograniczony.

Najważniejsze elementy to:

- cztery dane wejściowe w check-inie,
- trzy możliwe stany,
- trzy rekomendacje,
- dwa główne typy danych,
- pięć głównych widoków aplikacji.

Dzięki temu projekt jest realistyczny do wykonania w ramach zajęć.

## Koszty

Obecne MVP może działać bez istotnych kosztów infrastrukturalnych.

Główne narzędzia i biblioteki są darmowe.

Potencjalne przyszłe koszty mogłyby obejmować:

- płatny hosting,
- własną domenę,
- zewnętrzną bazę danych,
- system logowania,
- API AI,
- płatną analitykę.

Żaden z tych elementów nie jest obecnie wymagany.

## Ryzyka

### Dane tylko lokalne

Ryzyko:

Dane są przypisane do konkretnej przeglądarki i urządzenia.

Ograniczenie:

To zachowanie jest świadomie przyjętym ograniczeniem MVP.

### Ograniczony czas

Ryzyko:

Jedna osoba ma ograniczoną możliwość rozwoju rozbudowanego systemu.

Ograniczenie:

Projekt ma wąski zakres i nie zawiera zbędnej infrastruktury.

### Aktualizacje zależności

Ryzyko:

Aktualizacje bibliotek mogą powodować problemy kompatybilności.

Ograniczenie:

Projekt korzysta z `package.json` i `package-lock.json`, a poprawność zmian jest sprawdzana przez testy i build produkcyjny.

## Podsumowanie

Daily Reset jest projektem możliwym do realizacji przy ograniczonych zasobach ludzkich, technicznych i finansowych.

Architektura local-first ogranicza wymagania infrastrukturalne i pozwala zachować pełny przepływ MVP bez backendu.

Model zasobów jest odpowiedni dla obecnego zakresu projektu studenckiego.