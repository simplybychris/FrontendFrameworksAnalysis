# FrontendFrameworksAnalysis

**Projekt Badawczy**

## Wstęp

Celem projektu jest porównanie wydajności popularnych frameworków JavaScriptowych Angular, React.js i Vue.js w kontekście performance’u. Kryteria porównawcze są następujące: czas wymiany danych z serwerem oraz renderowania różnych

komponentów aplikacji, ilość zajmowanej pamięci podczas odświeżania informacji, stopień obciążenia przeglądarki oraz rozmiar plików wykonywalnych.

## Obiekty Badań

Do celów badawczych wzięliśmy 3 frameworki frontendowe: Angular, React.js, Vue.js. Są to popularne frameworki frontendowe, używane przy tworzeniu nowoczesnych aplikacji internetowych.

### ANGULAR

**Podstawowe informacje**

Angular to otwarty framework i platforma do tworzenia aplikacji typu Single Page, napisany w TypeScript, wspierany i rozwijany przez Google. Angular początkowo miał być wersją 2 popularnego frameworka AngularJS. Mimo to decyzje projektowe sprawiły, że Google zdecydowało się wydać go jako osobny byt, w tym brak kompatybilności wstecznej i prostej ścieżki aktualizacji aplikacji napisanych w AngularJS do Angular 2. Framework jest wydany na licencji MIT.

  


**Zalety i wady frameworka Angular**

Zalety:

**Implementacja architektury MVC**

Dzięki architekturze MVC możliwe jest odizolowanie logiki aplikacji od warstwy UI i wsparcie separacji obszarów. Kontroler odbiera wszystkie żądania dla aplikacji i działa z modelem, aby przygotować dane potrzebne dla widoku. Widok wykorzystuje dane przygotowane przez kontroler i wyświetla ostateczną, prezentowalną odpowiedź.

**Enhanced Design Architecture**

Niektóre z dużych aplikacji internetowych zawierają wiele komponentów. Angular upraszcza sposób zarządzania tymi komponentami, nawet jeśli nowy programista dołączy do projektu już po rozpoczęciu procesu tworzenia. Architektura jest zbudowana w taki sposób, że pomaga programiście łatwo zlokalizować i rozwinąć kod.

**Moduły**

Moduł to mechanizm, który grupuje dyrektywy, komponenty, rury i usługi, które są powiązane, w taki sposób, że mogą być połączone z innymi modułami w celu stworzenia aplikacji. Aplikacja oparta na frameworku Angular może być traktowana jako układanka, w której każdy moduł jest potrzebny, aby móc zobaczyć pełny obraz.

**Usługi i wstrzykiwanie zależności (DI)**

Usługa lub komponent może czasami potrzebować innych zależnych usług do wykonania zadania. Wzorzec projektowy - wstrzykiwanie zależności - jest używany w celu spełnienia tych zależności. Dzieli on zadanie pomiędzy różne usługi. Usługa klienta nie będzie tworzyć zależnego obiektu, raczej zostanie utworzona i wstrzyknięta przez injector. Injector jest odpowiedzialny za tworzenie instancji usług i wstrzykiwanie ich do klas takich jak komponenty i usługi.

**Niestandardowe dyrektywy**

Niestandardowe dyrektywy poprawiają funkcjonalność HTML i są odpowiednie dla dynamicznych aplikacji po stronie klienta. Wszystkie zaczynają się od przedrostka ng, aby HTML mógł je zidentyfikować.

  


Wady:

**Ograniczone opcje SEO**

Główną wadą korzystania z Angulara są ograniczone opcje SEO i słaba dostępność dla wyszukiwarek.

**Angular jest zawiły i skomplikowany**

Częstą skargą, którą usłyszałbyś od deweloperów Angulara, jest czasownikowość instrumentu. I ten problem nie zmienił się zbytnio od czasu AngularJS.

**Stroma krzywa uczenia się**

Dla początkujących programistów, którzy są zaznajomieni z JavaScript, aby użyć Angulara, potrzeba zrozumieć więcej konceptów, niż w porównaniu do React czy Vue.Dzieje się tak dlatego, że wachlarz tematów i aspektów do pokrycia jest dość duży. Różne kombinacje takie jak ngModules (unikalna architektura), dekoratory z przypisanymi obowiązkami wymagają zmiany podejścia dewelopera.

**Dokumentacja CLI jest pozbawiona szczegółów**

Niektórzy deweloperzy wyrażają obawy co do obecnego stanu dokumentacji CLI. Podczas gdy command line jest bardzo przydatny dla programistów Angular, nie znajdziesz wystarczających informacji w ich oficjalnej dokumentacji na GitHubie i musisz spędzić więcej czasu na eksploracji wątków na GitHubie, aby uzyskać odpowiedzi.

  
  
  


**Instalacja**

Angular CLI jest używany do tworzenia projektów, generowania kodu aplikacji i bibliotek oraz wykonywania różnych zadań związanych z bieżącym rozwojem, takich jak testowanie, łączenie i wdrażanie.

**Instalacja Angular CLI**

Aby zainstalować Angular CLI, otwórz okno terminala i uruchom następujące polecenie:

**npm install -g @angular/cli**

**Tworzenie obszaru roboczego aplikacji**

Aplikacje tworzysz w kontekście obszaru roboczego Angular.

Aby utworzyć nową przestrzeń roboczą i początkową aplikację startową:

Uruchom polecenie CLI:

**ng new** i podaj nazwę **my-app**, jak pokazano tutaj:

**ng new my-app**

Polecenie** ng new** prosi o informacje na temat właściwości, które mają być zawarte w początkowej aplikacji. Zaakceptuj wartości domyślne, naciskając klawisz Enter lub Return.

Angular CLI instaluje niezbędne pakiety npm Angular i inne zależności. Może to zająć kilka minut.

CLI tworzy nowy obszar roboczy i prostą aplikację Welcome, gotową do uruchomienia.

**Uruchomienie aplikacji**

Angular CLI zawiera serwer, abyś mógł zbudować i obsłużyć swoją aplikację lokalnie.

Przejdź do folderu obszaru roboczego, takiego jak my-app.

Uruchom następujące polecenie:

**cd my-app**

**ng serve --open**

Polecenie ng serve uruchamia serwer, obserwuje Twoje pliki i odbudowuje aplikację, gdy dokonujesz zmian w tych plikach.

Opcja**--open** (lub po prostu -o) automatycznie otwiera przeglądarkę na stronie http&#x3A;//localhost:4200/.

Jeśli instalacja i konfiguracja przebiegła pomyślnie, powinieneś zobaczyć stronę podobną do poniższej.

![](https://lh3.googleusercontent.com/WBst8zA3qzBmD1EvmrxIlyUEhC-eC5-KBEXqttfrF0D7beHsFAxnX8-MK8ll8vAajHCwnKVVrarZBEjSp62AXlLw9dJlZ50jH-kKKkXIX2lOY5J9YEJ430ZC_vCodP6Ic7D4NLk7nP-ElWWd_G7d2fYc8SNzvEUj83to36qqjn0x71MEZoZEsh7ba8yUxg)

**Struktura aplikacji Angular:**

Domyślnie polecenie CLI ng new my-app tworzy folder przestrzeni roboczej o nazwie "my-app" i generuje nowy szkielet aplikacji w folderze src/ na najwyższym poziomie przestrzeni roboczej. Nowo wygenerowana aplikacja zawiera pliki źródłowe dla modułu root, z komponentem root i szablonem.

**app-root/**

**├── package.json**

**├── tslint.json**

**├── tsconfig.json**

**├── angular.json**

**├── src/**

**└── e2e/**

Katalog e2e był generowany automatycznie do czasu Angular 12, który zrezygnował z narzędzia Protractor jako domyślnego narzędzia do testowania e2e.

**src/**

**├── app/**

**├── assets/**

**└── environments/**

Podczas budowania pojedynczej aplikacji katalog app/ jest centrum kodu. Wszystko zaczyna się od app.module, gdzie odbywa się bootstrapping. Nie ma nic specjalnego ani szczególnego w tym module. Po skonfigurowaniu, wspiera on leniwe ładowanie modułów poprzez routing. W dalszej części artykułu zakładamy, że leniwe ładowanie i routing są używane. Poniżej przedstawiamy rdzeń i moduł współdzielony, które są bezpośrednio importowane w app.module.

**Tworzenie nowego komponentu:**

Komponenty są głównym elementem konstrukcyjnym aplikacji Angular. Każdy komponent składa się z:

- Szablonu HTML, który deklaruje, co jest renderowane na stronie
- Klasy TypeScript, która definiuje zachowanie
- Selektora CSS, który definiuje sposób użycia składnika w szablonie
- Opcjonalnie, style CSS zastosowane do szablonu

Aby stworzyć komponent za pomocą Angular CLI:

Z okna terminala przejdź do katalogu zawierającego Twoją aplikację.

Uruchom polecenie**ng generate component &lt;component-name>**, gdzie &lt;component-name> to nazwa Twojego nowego komponentu.

Domyślnie, polecenie to tworzy następujące elementy:

Katalog o nazwie pochodzącej od komponentu

Plik komponentu, &lt;component-name>.component.ts

Plik szablonu, &lt;component-name>.component.html

Plik CSS, &lt;component-name>.component.css

Plik specyfikacji testów, &lt;component-name>.component.spec.ts

  


### VUE JS

**Podstawowe informacje**

Vue.js to progresywna platforma JavaScript typu open source do tworzenia dynamicznych interfejsów użytkownika i aplikacji jednostronicowych. Został stworzony przez Evan You w 2014 roku. Vue staje się coraz bardziej popularny. Vue ma obecnie najwięcej gwiazdek na GitHubie (193 000) w porównaniu z Reactem (182 000) i Angularem (79 000) (dane z dnia 2 sierpnia 2021 roku), co pokazuje, jak popularny jest ten framework wśród programistów, mimo że jest najmłodszą z wymienionych powyżej technologii.

Vue.js to biblioteka do budowania prostych komponentów aplikacji internetowych opartych na architekturze modelu ModelView (MVVM). Posiada m.in. przydatne mechanizmy, takie jak model kodu czy powiązanie danych z elementami DOM.

Wielką zaletą Vue.js jest to, że jest bardzo kompaktowy i intuicyjny. Nauka Vue to świetny sposób na wejście do świata aplikacji internetowych bez konieczności natychmiastowego stawiania czoła takim gigantom jak Angular. Dużym plusem Vue.js jest jego prostota i jednoczesna funkcjonalność. Według autora miał on łączyć najlepsze cechy Reacta i Angulara. Vue korzysta z wirtualnego DOM, dzięki czemu działa bardzo szybko. Wyróżnia się niewielką wagą plików oraz dużą elastycznością w tworzeniu złożonych projektów. Posiada prosty, przejrzysty kod i doskonałą dokumentację, a przy tym stale rosnącą społeczność i daje wiele możliwości wdrożenia ciekawych rozwiązań w projekcie. Vue posiada również wiele bibliotek i narzędzi. W tym miejscu warto wspomnieć o Nuxt, frameworku zbudowanym na Vue, który dzięki SSR znacząco poprawia wszystkie wskaźniki SEO w porównaniu do aplikacji napisanych w „czystym” Vue. Znajdziemy również biblioteki z elementami UI (BootstrapVue) oraz biblioteki do zarządzania stanem aplikacji (Vuex).

Vue to ciekawa alternatywa dla Angulara, jeśli potrzebujemy tylko podstawowej funkcjonalności. Czasami ogromna, rozdęta ramka to za dużo, jeśli chcemy tylko wprowadzić na stronę jakieś interaktywne elementy. W tym przypadku Vue.js jest idealny.

**Zalety i wady frameworka Vue.js**

Zalety Vue.js:

Jak już wspomnieliśmy, Vue.js jest bardzo ceniony przez programistów. Dlaczego? Po pierwsze, wokół tego frameworka jest zgromadzona duża społeczność deweloperów, którzy stale pracują nad ulepszaniem tej technologii. Dodatkowo dostępna dokumentacja jest wyczerpująca i zrozumiała. Wiele osób twierdzi, że – między innymi dzięki temu – Vue.js jest łatwy do nauczenia się nawet przez osobę o niewielkim doświadczeniu w programowaniu. Po drugie, Vue.js jest wszechstronny – można go wykorzystać np. do tworzenia aplikacji typu SPA, ale też i innych projektów internetowych. Po trzecie, Vue.js ma licencję open-source, co oznacza, że bez żadnych ograniczeń można go wykorzystywać do dowolnych projektów, także komercyjnych. I wreszcie, warto wspomnieć o jeszcze jednej korzyści wynikającej z pracy z tym frameworkiem – efektywności. Dzięki dobrze przemyślanej strukturze Vue.js działa szybko i sprawnie, co na pewno docenią osoby pracujące nad złożonymi projektami.

**Wady Vue.js:**

Pracując z programistami zauważyłem, że wady, które wynikają z Vue.js, zależą w dużym stopniu od skomplikowania realizowanego projektu.

Vue.js ma także swoje wady, które niektórych odstraszają od tego frameworka. Paradoksalnie jedną z nich jest… elastyczność. Vue.js jako biblioteka JavaScript daje tyle możliwości, że czasem ciężko zaimplementować ten framework przy dużym projekcie, kiedy współpracuje ze sobą kilku lub też kilkunastu software developerów. Wówczas pojawiają się duże szanse na błędy i nieścisłości w kodzie czy aplikacjach.

Często zdarza się, że gdy zespół musi zintegrować ze sobą kilka sporych elementów i chce na przykład wykorzystać Vue.js, to w projekt może się wkraść chaos, który będzie wymagał czasu na uprzątnięcie, a to przełoży się na dodatkowy budżet, jaki inwestor będzie musiał przeznaczyć na realizację aplikacji.

Dodatkowo patrząc na to, że Vue.js jest relatywnie nowym frameworkiem, to wielu software developerów po prostu nie chce zmieniać swoich dotychczasowych narzędzi pracy. Nawet jeśli to biblioteka intuicyjna, to wymaga zapoznania się z dokumentacją i dokładnego przestudiowania wszystkich funkcjonalności. Dla kogoś, kto przez dłuższy czas pracuje z Reactem czy Angularem, może to być problem oraz niepotrzebna komplikacja codziennej pracy.

Minusy korzystania z Vue.js się jednak na tym nie kończą. Pomimo długiego stażu frameworka dostępnego publicznie nadal część elementów dokumentacji nie została jeszcze przetłumaczona z języka chińskiego (informacja z dnia 31 marca 2021), natomiast społeczność rozwijająca tą bibliotekę stara się, aby jak najwięcej elementów było w języku angielskim.

**Instalacja**

KROK 01: Najpierw musisz zainstalować Node.js & NPM (Node Package Manager) na swoim komputerze, jeśli jeszcze tego nie zrobiłeś.

Sprawdź, czy zainstalowałeś Node za pomocą następującego polecenia w Terminalu:

**node -v**

KROK 02: Zainstaluj vue za pomocą vue cli global (-g), co jest najprostszym sposobem na rozpoczęcie pracy z Vue:

**npm install -g vue-cli**

KROK 03: Zainicjuj projekt Vue poprzez Web Pack za pomocą następującego polecenia i zmień my-project na swoją nazwę projekt:.

**vue init webpack my-project**

Następnie zostanie Ci zadana seria pytań:

- Project name (yourprojectname) — The name must be URL friendly (no space)
- Project description (A Vue.js project)
- Author (SoftAuthor)
- Vue build (Use arrow keys) ❯ Runtime + Compiler: rekomendowane dla większości użytkowników
- Install vue-router? (Y/N) ❯ Yes
- Use ESLint to lint your code? (Y/N) ❯ No
- Set up unit tests (Y/N) ❯ No
- Setup e2e tests with Nightwatch? (Y/N) ❯ No
- Should we run \`npm install\` for you after the project has been created? (recommended) (Use arrow keys) ❯ Yes, use NPM

Po naciśnięciu enter, zacznie pobierać i instalować zależności, co zajmie minutę lub dwie.

Po tym wejdź do katalogu swojego projektu do swojego projektu.

**cd yourprojectname**

Następnie:

**npm run dev**

Na tym etapie Twój projekt zostanie skompilowany, a Vue poda Ci adres localhost. Przejdź dalej i uruchom go w przeglądarce.

**Struktura projektu**

Po otwarciu projektu za pomocą edytora kodu, zauważymy następującą strukturę folderów:

![](https://lh4.googleusercontent.com/_eR0JUGhygNpb5U1W8HM07OX91rvzPt04XniUuIwsNdQARI4L0rrqNmB22paaIWyZ3PS2hgnB_cF4QGn5JylrAnfYfuNMtrtuMa8JvGXakBGvxIw7W1mb_zbIqCNBh-GT8CkWyKK3DRYIZH6F_YuHFnha2RXtYd-o7wInNHO2JsDtVWPWuHsxPm4q6amJA)

Objaśnienie najważniejszych plików i folderów:

- src - Kod źródłowy naszego projektu:
- assets - assety, które będą przetwarzane za pomocą Webpacka
- components - Tutaj trzymamy nasze komponenty UI
- router - Tutaj piszemy routyi łączymy je z naszymi komponentami UI
- App.vue - To jest komponent wejściowy, jest to główny komponent UI, w którym będą renderowane wszystkie inne komponenty
- main.js - Plik punktu wejścia, który będzie montował App.vue - nasz główny komponent UI
- static - czyste assety, które nie będą przetwarzane przez Webpack
- index.html - Być może pamiętasz, że aplikacja SPA zawsze przepisuje zawartość jednego pliku, więc, to jest ten plik. Jest to plik, który serwujemy naszym odwiedzającym. Po zbudowaniu projektu, ten plik będzie ładował statyczne pliki, które zostały dołączone do Webpacka

  


Przyjrzyjmy się plikowi App.vue:

![](https://lh4.googleusercontent.com/hrUNgWECqXIJo7HkoJ2lvite4OCi48DjSbZ50S3bDLR4mux7Wfm3ms17_-rzWTWJMkrcRijsA0k_TIW8JY7kz29L_CZ0opnBqB_sTX2yfrrnfNPHlHa7mXSNEPmM-3DFY2u7s-agjvbKw1n2eqbtH101nDp4cjorSkDPgwUAC-m4FZkbVNpWzC_kW3C-Mg)

Każdy komponent Vue może zawierać szablon, skrypt i sekcję stylu.

- Szablon jest widoczną zawartością komponentu
- Skrypt jest logiką komponentu
- Styl jest stylem dla szablonu

Template - W szablonie możemy używać zarówno natywnych znaczników HTML, jak i naszych niestandardowych komponentów Vue. Tutaj widzimy element &lt;router-view/> i to jest miejsce, w którym nasz router będzie renderował dopasowany komponent dla danej trasy.

Script - W znaczniku script, piszemy logikę dla tego komponentu. W tym komponencie mamy tylko właściwość name, ponieważ ten komponent nie jest dynamiczny, jest niczym innym jak opakowaniem wokół naszego widoku routera.

Style - Tutaj możemy napisać styl dla szablonu. Styl może być scoped lub global. Styl scoped jest napisany w ten sposób: &lt;style scoped>. Ten typ stylu wpływa tylko na szablon danego komponentu i element główny komponentów potomnych, więc nie ma możliwości, aby styl wyciekł do innego komponentu. W przeciwnym razie, styl non-scoped będzie współdzielony pomiędzy komponentami.

Przyjrzyjmy się plikowi router/index.js:

![](https://lh3.googleusercontent.com/hg8c5TUpRIi-ORNUV_lI3Dz8EYAkLTOOKJ_IjassjQFee4mB4B5ZqC90LzL5xlNTJBNktAbkDwWv0sZdcNV9LF-bQGybXFKMI6rQ3OqmguiS0zRYdnuMbvpXRuVkXrtJlm_8zdztW-qYS_SGNIfOc9qNfvElMg9GyQXqS2AxAKWuMkdAVpywezhywDVstw)

W tym pliku ponownie importujemy Vue, abyśmy mogli powiadomić Vue o użyciu Routera, który jest importowany z pakietu o nazwie vue-router. Ponadto importujemy komponent HelloWorld z folderu components. Symbol @ w ścieżce jest aliasem Webpacka dla root-a projektu, więc zawsze gdy chcemy coś zaimportować i nawigować do folderu głównego możemy użyć @.

Następnie zauważamy instancję Routera i listy tras. Możemy zauważyć ścieżkę /, co oznacza, że gdy otworzymy naszą aplikację i przejdziemy do katalogu głównego (/), to zaserwuje nam ona komponent HelloWorld. Zawartość tego komponentu będzie serwowana w komponencie App.vue wewnątrz znacznika &lt;router-view/>.

  


**Dodanie pierwszego komponentu**

Żeby zacząć korzystać z Vue, wystarczy, że dodasz odpowiedni tag &lt;script> do pliku html:

&lt;scriptsrc="https&#x3A;//cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js">&lt;/script>

Wyświetlanie danych we Vue odbywa się dzięki tzw. wąsom znanym z wielu języków szablonów (takich jak Handlebars). Wystarczy, że nazwę zmiennej owiniesz w podwójne nawiasy klamrowe ({{ appTitle }}), a framework sam poszuka odpowiedniego pola z danymi i wyświetli jego wartość. Zadba również o to, żeby zaktualizować wyświetlany tekst, gdy wartość ta ulegnie zmianie:

&lt;div id="app">

&lt;h1>{{ appTitle }}&lt;/h1>

&lt;/div>

Aby Vue mogło zmienić zwykłe dane w reaktywne, musisz zwrócić je z metody data(). Dzięki temu framework będzie w stanie śledzić ich zmiany i odpowiednio aktualizować elementy DOM.

Teraz musisz już tylko zainicjalizować nową instancję Vue i podłączyć ją do elementu DOM za pomocą metody $mount:

new Vue({

data() {

return {

appTitle: 'Pierwsza aplikacja Vue!',

};

},

}).$mount('#app');

Zróbmy coś ciekawszego. W tym celu wykorzystamy dyrektywę v-model. Odpowiada ona za powiązanie wartości inputa z polem danych. W tym wypadku ustawia ona value inputa na wartość pola appTitle i podpina się pod zdarzenie input w celu aktualizacji pola appTitle kiedy użytkownik coś w nie wpisze:

&lt;divid="app">

&lt;inputv-model="appTitle" />

&lt;h1>{{ appTitle }}&lt;/h1>

&lt;/div>

Powoduje to, że nasza aplikacja jest dynamiczna.

### React

**Podstawowe informacje**

React JS jest javascriptową biblioteką stworzoną przez pracownika Facebooka – Jordana Walke. Powstał, aby uprościć i przyspieszyć proces tworzenia aplikacji webowych. Został wydany w 2013 roku i od tego czasu zmienił się w znacznym stopniu, w wersji 16.8 zostały dodane tkz. React Hooks, pozwalające pisać komponenty wyłącznie za pomocą funkcji co zmniejszyło ilość kodu oraz uczyniło Reacta jeszcze łatwiejszym w nauce.  
  


Dzięki React programista może stworzyć złożony interfejs, który będzie składał się z wielu małych elementów zwanych komponentami. Duże możliwości react wynikają z wykorzystywania nowoczesnych sposobów renderowaniu dynamicznych stron internetowych.

**Dlaczego warto uczyć się Reacta:**

- jeden z najpopularniejszych frameworków - jest bardzo często wybierany przy budowie nowych aplikacji
- niski próg wejścia - już znajomość javascriptu pozwala na budowę pierwszej aplikacji
- wydajność - react jest naprawdę szybki dzięki implementacji wirtualnego DOM, który optymalizuje renderowanie komponentów
- wsparcie dla technologii Progressive Web App
- umożliwia tworzenie aplikacji na urządzenia mobilne
- elastyczność - react nie narzuca struktury projektu

  


**Wady:**

- architektura - brak sztywnych reguł przy pisaniu kodu może powodować trudności w rozbudowie, ponieważ sami musimy wypracować zasady budowy aplikacji oraz się ich trzymać
- wymaga dodatkowych narzędzi - react nie zawiera wielu gotowych rozwiązań (np. routing) przez co musimy sami je znaleźć, wybrać odpowiednie i nauczyć się ich używać

**Instalacja**

Do stworzenia pierwszej reactowej aplikacji wystarczy zainstalować Node.js i jednym poleceniem ‘npx create-react-app nazwa-projektu’ tworzymy projekt startowy, którego struktura wygląda następująco:

![](https://lh4.googleusercontent.com/ioxWNpDnEhBv_prAcoaTSMaz-72R6xH2WVR_fbFzg4cB3m-v-_oBHAeLrc2Y3MnnbfZeBr1Uvbzvz7o-i7WMF6FfgPLenRcnPlQAe0w4MftFrIqgqKaaoXmExNn1z8WHkODpSBY_AwHnDVW5mcGdRBfqgUjd7hVtsBkoCHeiXPzpHQPhVottARQhTEtXhA)

Używając polecenia ‘npm start’ możemy zbudować naszą aplikację i wyświetlić w przeglądarce

![](https://lh4.googleusercontent.com/tVNGt1mKR58Dmnp2NbZmRRUlr6LIUuQuRoUzngrGdi61d1wGr4hYZrTp9XGmp_2J1P8cVFePlrjreZeWthsN5zwu_UwNMMfkYIxkSUyUwoyYvEIF50p9NgX1kDROWgqCon7E4WEMFT5UqCl9cYNVtdUX8kHWS__qG6amQ9JE8roh4dCAgbSmaDJWTCnT8w)

  


**Struktura aplikacji Reacta:**

React nie sugeruje, w jaki sposób należy umieścić pliki w folderach. Istnieje wiele sposobów na rozmieszczenie plików, najpopularniejsze z nich to:

- sortowanie według typu
- sortowanie według funkcjonalności

oba rozwiązania mają plusy i minusy, lecz nawet dokumentacja wskazuje że nie trzeba się ich sztywno trzymać. React w tym aspekcie jest bardzo elastyczny.

  
