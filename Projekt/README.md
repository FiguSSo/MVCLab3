# System zarządzania zadaniami domowymi

## Spis treści
1. Opis projektu
2. Funkcjonalności
3. Instrukcja uruchomienia
4. Uruchomienie w Dockerze

## Opis projektu
Projekt zaliczeniowy zrealizowany w oparciu o wzorzec architektoniczny MVC (Model-View-Controller). Aplikacja służy do zarządzania listą zadań domowych.

## Funkcjonalności
* Wyświetlanie listy wszystkich zadań.
* Dodawanie nowego zadania za pomocą formularza.
* Zmiana statusu zadań (Nowe / W toku / Zrobione) bezpośrednio w tabeli.
* Filtrowanie listy zadań według statusu.
* Schludny widok tabelaryczny z podziałem na kolumny.

## Instrukcja uruchomienia

1. Upewnij się, że masz zainstalowany Node.js.
2. Pobierz projekt i przejdź do folderu w terminalu.
3. Zainstaluj wymagane paczki komendą: `npm install`.
4. Uruchom aplikację komendą: `node app.js`.
5. Otwórz przeglądarkę pod adresem: ` `.

6. Jeśli chcesz w przyszłości uruchamiać aplikację jednym kliknięciem, skorzystaj z dołączonego pliku start.bat. Automatycznie uruchomi on serwer i otworzy stronę w Twojej przeglądarce.

## Uruchomienie w Dockerze
1. Zbuduj obraz: `docker build -t system-zadan .`
2. Uruchom kontener: `docker run -p 3000:3000 system-zadan`
3. Otwórz w przeglądarce: `http://localhost:3000`