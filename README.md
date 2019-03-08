
podgląd dostępny pod adresem https://upbeat-ride-5c1adf.netlify.com


# Game of Life



Celem tego ćwiczenia jest napisanie prostej aplikacji w JavaScripcie, która pokazywać będzie interaktywną animację opartą o jeden z pierwszych i najbardziej znanych przykładów automatu komórkowego, wymyślony w roku 1970 przez brytyjskiego matematyka Johna Conwaya. Będziemy pisać w czystym JavaScripcie, opierając się na założeniach programowania obiektowego.

→ o Game Of Life możesz poczytać tutaj: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

→ obejrzyj też kilkuminutowy film tutaj: https://www.youtube.com/watch?v=C2vgICfQawE

##Przypomnijmy podstawowe założenia:
* Game of Life to tak zwana *zero-player game*, która rozwija się na podstawie swojego pierwotnego stanu.
* Komórki powstają i umierają na dwuwymiarowej planszy, a ich stan uzależniony jest od ich otoczenia (ośmiu komórek będących ich sąsiadami):
    * każda żywa komórka z mniej niż dwoma żywymi sąsiadami umiera z powodu zbyt małego zaludnienia,
    * każda żywa komórka z dwoma lub trzema żywymi sąsiadami żyje dalej,
    * każda żywa komórka z więcej niż trzema żywymi sąsiadami umiera z powodu przeludnienia,
    * każda martwa komórka ożywa, kiedy ma dokładnie trzech żywych sąsiadów.

Użytkownik powinien zadeklarować, na jakiej planszy chce oglądać animacje (podając jej szerokość i wysokość). Powinna wyświetlić mu się plansza ze startową animacją (np. pojedynczym gliderem), na której może on za pomocą kliknięcia myszką włączać i wyłączać poszczególne pola. Poniżej planszy powinny znajdować się przycisk PLAY i PAUSE, które będą uruchamiać lub zatrzymać animację w danym stanie, aby w każdym momencie użytkownik mógł zatrzymać animację, zmienić jej stan i włączyć ją na nowo. 





