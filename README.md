# DOM-Segment-4

Wir sind Betreiber eines Hotels in Berlin.

Über unsere Seite sollen Besucher den Preis ihres Aufenthaltes berechnen können.

## Aufbau
Wir benötigen eine `index.html`, eine `style.css` und eine `index.js`.

Verbinde die Dateien miteinander.

Diesmal wirst du auch das CSS Stylesheet brauchen (oder SASS wem das lieb ist).

## Formular
Arbeite nun an deinem Formular.

Mit dem Formular kann ein Anwender Buchungsdaten eintragen und einen Preis anfordern.
Daraufhin wird ihm der Preis seiner Buchungsanfrage angezeigt.

Es gibt folgende Eingabefelder:
* Anzahl der Nächte (number, Minimum: 1, eingabepflichtig).
* Anzahl der Gäste (number, Minimum: 1, eingabepflichtig).
* Frühstück (checkbox, eingabepflichtig).

Dein Formular braucht noch einen Submit Button

## Style
Das Formular sollte mittig auf der Seite platziert sein.

Verleihe deiner Seite ein schlichtes Design.

## JavaScript
Deine JavaScript soll die Funktion `run()` verfügen.

Verknüpfe sie im Formular unter `action` mit dem Wert `javascript:run()`.

### Teil 1

Speichere in der Funktion nun die Eingaben aus den Formularfeldern in einzelnen Konstanten ab.

Ob ein Anwender das Häckchen unter der Frühstück Checkbox gesetzt hast, prüft du mit:

`const withBreakfast = document.querySelector("#breakfast").checked;`

Die Konstante wird mit `true` (Häckchen gesetzt) oder `false` (nicht gesetzt) belegt.

### Teil 2

Berechne nun den Preis der Buchung.

Die Preisgestaltung:
* Preis pro Nacht für eine Person: **50€**
* Aufschlag für jede weitere Person: **10€**
* Preis für jedes Frühstück: **8€**

Beispiel: 2 Nächte, 3 Personen, mit Früstück: `2 * 50 + 2 * 10 + 3 * 8`

Beispiel: 2 Nächte, 1 Person ohne Früstück: `2 * 50`

Du darfst auch eine andere Preisgestaltung wählen.

### Bonus
Theoretisch kannst du alles in die `run` Funktion schreiben.

Besser wäre es aber, die Berechnung des Preises in einer eigenen Funtkion `calc` zu machen.

Diese Funktion bekommt die Eingaben als Parameter übergeben, berechnet den Preis und gibt das Ergebnis mit return an die `run` Funktion zurück.

## Teil 3
Zuletzt muss der berechnete Preis in einem Platzhalter dem Anwender angezeigt werden.

Benutze `innerHTML`.

## Test
Teste deine Seite mit unterschiedlichen Werten.
