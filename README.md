## Logging und Fehlerbehandlung

Erstelle eine Express App mit den Routen:
(GET) /
(GET) /data
(POST) /data
(PUT) /data
(DELETE) /data
Führe Logging für alle Anfragen und eine zentrale Fehlerbehandlung ein.

## Funktionen:
Middleware, die die Details jeder Anfrage loggt. Also z.B. http Methode, Path, Statuscode usw. Recherchiere auf welche Information du in diesem Context noch Zugriff hast.
Eine zentrale Fehlerbehandlungsroutine, die Fehler fängt und behandelt.

## Hinweise:
Verwende `morgan` als Logging-Middleware, um Anfragedetails zu loggen.
Setze eine Middleware am Ende aller Routen ein, um Fehler zu fangen und eine einheitliche Fehlerantwort zu senden.

## Zugriff auf weitere Informationen
Ich habe in diesem Beispiel `morgan` verwendet um eine Middleware zu erstellen, die die Details jeder Anfrage loggt. `morgan` ist eine HTTP-Request-Logging-Middleware für Node.js und kann folgende Informationen über eine Anfrage loggen:

- HTTP-Methode
- URL
- Statuscode der Antwort
- Antwortzeit
- User-Agent
- IP-Adresse des Clients