import sff from '../images/projects-info/sff.jpeg'
import nasa from '../images/projects-info/nasa.png'
import cointax from '../images/projects-info/cointax.png'
import auktioner from '../images/projects-info/auktioner.jpeg'
import uppfinnaren from '../images/projects-info/uppfinnaren.jpeg'
import museet from '../images/projects-info/museet.jpeg'
import leftToDo from '../images/projects-info/lefttodo.jpeg'
import multifabriken from '../images/projects-info/multifabriken.jpeg'
import hostel from '../images/projects-info/hostel.png'
import meddelandecentralen from '../images/projects-info/Meddelandecentralen.png'

export const ProjectsInfo = [
    {
        id: 10,
        name: "Meddelandecentralen",
        date: 'Oktober 2022',
        image: meddelandecentralen,
        info: 'Twitter-liknande chatt-applikation byggd med .NET 6 och React. Realtidskommunikationen skapad med hjälp av SignalR.',
        skills: "ReactJS, Single Page Application, ASP.NET Core, C#, Microsoft-SignalR, SignalR-Hub, WebSockets, REST-API, Fetch-API, JavaScript, HTML, CSS, Parcel",
        repoUrl: "https://github.com/johannesjakobsson/Meddelandecentralen",
        liveUrl: null
    },
    {
        id: 9,
        name: "Projekt SmartHut",
        date: 'September 2022',
        image: hostel,
        info: 'Hotellet Chelsea International Hostel har påbörjat sin digitaliseringsprocess med hjälp av SmartHuts smarta \
        sensorer som kan mäta exempelvis värme och luftfuktighet. Nu vill de ha hjälp att skapa ett användargränssnitt för \
        att kunna styra sina smarta sensorer.',
        skills: "ReactJS, Single Page Application, MSAL, Microsoft-SignalR, WebSockets, REST-API, Fetch-API, HTML, CSS, Parcel",
        repoUrl: "https://github.com/johannesjakobsson/chelsea-international-hostel",
        liveUrl: null
    },
    {
        id: 8,
        name: "Cointax",
        date: 'Maj 2022',
        image: cointax,
        info: 'Under utbildningen i kursen "Affärsmannaskap för IT" så gjorde vi en affärsplan för en egen applikationsidé. \
        Detta är resultatet av idén som konkretiserades i kursen "Moderna webbapplikationer". Resultatet är en Pitchsida för \
        Cointax samt en MVP på applikationen. Mer detaljer och information finns på GitHub.',
        skills: "ReactJS, Single Page Application, REST-API, Fetch-API, HTML, CSS, C#, ASP.NET Core, Entity Framework Core, Swagger UI, SQlite",
        repoUrl: "https://github.com/johannesjakobsson/cointax",
        liveUrl: null
    }, {
        id: 7,
        name: "Filmstudion",
        date: 'Februari 2022',
        image: sff,
        info: 'I denna skoluppgift ska jag skapa en webbapplikation riktad till föreningar som är anslutna till \
            Sveriges Förenade Filmstudios (SFF) där man via ett API och klientgränssnitt kan boka/beställa filmer \
            till sin förening. Mer information finns i README.md om ni tar er vidare till GitHub',
        skills: "C#, ASP.NET Core, ASP.NET Core Identity, Entity Framework Core, REST-API, Swagger UI, Automapper, \
            Jwt Bearer Tokens, SQLite, JavaScript inkl. moduler, Fetch-API, HTML, CSS",
        repoUrl: "https://github.com/johannesjakobsson/Filmstudion",
        liveUrl: null
    }, {
        id: 6,
        name: "En komplett webbapplikation",
        date: 'Januari 2022',
        image: nasa,
        info: 'Här ska jag bygga ett klientgränssnitt som hämtar data från NASA:s API, men även lägga till funktionalitet \
            från ett eget skapat REST-API för att demonstrera att jag har förståelse för båda delarna.',
        skills: "C#, ASP.NET Core, Entity Framework Core, REST-API, Automapper, In memory database, JavaScript, Fetch-API, HTML, CSS",
        repoUrl: "https://github.com/johannesjakobsson/En-komplett-webbapplikation",
        liveUrl: null
    }, {
        id: 5,
        name: "Auktioner.NET",
        date: 'Januari 2022',
        image: auktioner,
        info: 'Det första större (hittills) mer realistiska projekt där vi ska sätta upp ett digitalt arbetsverktyg för ett företag som \
            håller på med auktioner. Mer information finns i README.md på GitHub',
        skills: "C#, ASP.NET Core MVC, ASP.NET Core Identity, Entity Framework Core, In Memory Database, xUnit, Razor",
        repoUrl: "https://github.com/johannesjakobsson/Auktioner",
        liveUrl: null
    }, {
        id: 4,
        name: "Uppfinnaren",
        date: 'December 2021',
        image: uppfinnaren,
        info: 'Målet med denna uppgift är att utveckla en dynamisk webbapplikation med ASP.NET och designmönstret MVC.',
        skills: "C#, ASP.NET Core MVC, Entity Framework Core, In Memory Database, xUnit, Razor",
        repoUrl: "https://github.com/johannesjakobsson/Uppfinnaren",
        liveUrl: null
    }, {
        id: 3,
        name: "En natt på museet",
        date: 'December 2021',
        image: museet,
        info: 'Jag jobbar i det här scenariot som frilansande programmerare år 1979 och har fått ett uppdrag att göra ett \
            modernt arbetsverkyg till ett konstmuseum, som personalen kan använda från deras splirrans ny datorterminal. \
            Datorn har alla moderna program installerade man kan tänkas behöva - men personalen skulle behöva ett arbetsverktyg \
            för att hålla koll på och inventera deras olika rum och konstverk! Du har pitchat en idé att programmet ska fungera \
            precis som alla andra program via command line arguments - vilket personalen är väldigt positivt inställda till.',
        skills: "C#, .NET Core, .NET Core CLI, OOP, xUnit",
        repoUrl: "https://github.com/johannesjakobsson/En-natt-pa-museet",
        liveUrl: null
    }, {
        id: 2,
        name: "Left to do",
        date: 'December 2021',
        image: leftToDo,
        info: 'Utveckla en digital att-göra-lista. Applikationen ska ha namnet Left To Do. En användare ska vid användning av \
            programmet kunna se vad som är kvar att göra i listan, markera uppgifter som avklarade, lägga till nya uppgifter i \
            listan samt arkivera avklarade uppgifter.',
        skills: "C#, .NET Core, .NET Core CLI, OOP, xUnit",
        repoUrl: "https://github.com/johannesjakobsson/Left-To-Do",
        liveUrl: null
    }, {
        id: 1,
        name: "Multifabriken",
        date: 'November 2021',
        image: multifabriken,
        info: 'Utveckla en konsolapplikation för bolaget Multifabriken AB. De vill skapa en konsolapplikation för sina kunder \
            där man kan välja att beställa nya produkter från deras fabrik.',
        skills: "C#, .NET Core, .NET Core CLI, OOP",
        repoUrl: "https://github.com/johannesjakobsson/Multifabriken",
        liveUrl: null
    }
];