// Project Info
let projects = [    
    {
        name: "Tag it, WA",
        id: "tagitwa",
        githubUrl: "https://github.com/origin-42/Tag-It-WA",
        description: "Track local issues and contribute.",
        releaseDate: "August 2022",
        releaseYear: "2022",
        technologies: ["Javascript", "MERN", "GraphQL", "Mongoose", "Google Maps API"],
        projectType: "Individual Project",
        image: "./assets/images/portfolio-images/tag_it_wa.jpg",
        longDescription: "This application is for community members to engage with one another to solve local issues and communicate updates.",
        pointOne: "Track local issues across criteria",
        pointTwo: "Communicate directly with 'poster'",
        pointThree: "Create issues quickly and easily",
        purpose: "Developing skills using React and GraphQL for one end point querying."
    },
    {
        name: "Book Search Engine",
        id: "booksearchengine",
        githubUrl: "https://github.com/origin-42/book_search-n-save",
        description: "Use google books API to find information about a topic that interests you.",
        releaseDate: "July 2022",
        releaseYear: "2022",
        technologies: ["Javascript", "React.js", "JSX", "Babel", "Express", "Apollo", "GraphQL NoSql", "MVC", "Google Books API", "Local Storage", "Auth with "],
        projectType: "Individual Project",
        image: "./assets/images/portfolio-images/book_searchn_save.jpg",
        longDescription: "An application build to help find interesting books based on topics easily.",
        pointOne: "Create an account to save books",
        pointTwo: "Easily navigate the Google book library",
        pointThree: "Find new and exciting books",
        purpose: "Developing skills using React and GraphQL for one end point querying."
    },
    {
        name: "Code Snip-It",
        id: "codesnipit",
        githubUrl: "https://github.com/origin-42/code-snip-it",
        description: "Create code, download to local machine.",
        releaseDate: "June 2022",
        releaseYear: "2022",
        technologies: ["Express", "MVC", "Service Workers", "PWA", "Webpacks", "Caching data", "Javascript"],
        projectType: "Individual Project",
        image: "./assets/images/portfolio-images/code_snip_it.jpg",
        longDescription: "A downloadeable application used to instantiate code as a console.",
        pointOne: "Create code from anywhere",
        pointTwo: "Download and install as a program",
        pointThree: "Works completely offline",
        purpose: "Further development on the fundamental ideas of service workers and webpacks."
    },
    {
        name: "The Social Network",
        id: "thesocialnetwork",
        githubUrl: "https://github.com/origin-42/the_social_network",
        description: "Share you thoughts and ideas with others.",
        releaseDate: "June 2022",
        releaseYear: "2022",
        technologies: ["Insomnia", "Javascript", "Node.js", "Restful API", "Express", "NoSql", "MongoDB", "Sequelize", "Authentication"],
        projectType: "Individual Project",
        image: "./assets/images/portfolio-images/social_network.jpg",
        longDescription: "This application tracks messaging using a restful API with MongoDB to track information shared between users.",
        pointOne: "Update friends, track friends comments",
        pointTwo: "See which other users are interacting with one another.",
        pointThree: "Uses a restful API and combined with Insomnia helps encapsulate the the application.",
        purpose: "Test how data is collected using a social networking instance."
    },
    {
        name: "Medic Manager",
        id: "medicmanager",
        githubUrl: "https://github.com/bernardjbs/Medic-Manager",
        description: "Medic Manager is an interactive system for storage expiry tracking and replacement schedules featuring email reminders and a chatbot.",
        releaseDate: "June 2022",
        releaseYear: "2022",
        technologies: ["HTML", "CSS", "Javascript", "Node.js", "Restful API", "Handlebars", "Express", "MySql", "Sequelize", "Emailer", "MVC", "Heroku", "Authentication"],
        projectType: "Individual Project",
        image: "./assets/images/portfolio-images/medic_manager.jpg",
        longDescription: "This application provides a means for users of various age groups to keep track of medications and receive email reminders of expiry dates of that information.",
        pointOne: "Add any medications with pre-defined and custom fields to display a graph of information for any user",
        pointTwo: "Update and delete options available",
        pointThree: "Polished user interface and user specific login options",
        purpose: "Too many things to keep track of. Let this application do it for you."
    },
    {
        name: "Awesome Tech Blog",
        id: "techblog",
        githubUrl: "https://github.com/origin-42/awesome-tech-blog",
        description: "A simple tech blog to keep track of your thoughts and ideas.",
        releaseDate: "May 2022",
        releaseYear: "2022",
        technologies: ["JavaScript", "Node.JS", "MySql", "Express", "Handlebars", "MVC"],
        projectType: "Individual Project",
        image: "./assets/images/portfolio-images/tech_blog.jpg",
        longDescription: "I wanted a place for users to be able to store ideas about current and future ideas relative to web design and programming. This provides an easy-to-use place to log in, create, and share ideas with like-minded individuals.",
        pointOne: "Add and edit informqation related to ideas in the tech industry",
        pointTwo: "Share ideas with others",
        pointThree: "Collaborate with others on posts and ideas",
        purpose: "Mingle with other tech enthusiasts regarding ideas related to any particular industryz."
    },
    {
        name: "E-Commerce Application",
        id: "ecommerce",
        githubUrl: "https://github.com/origin-42/e-commerce",
        description: "A web application to store, view, add to, update, and remove product data from.",
        releaseDate: "May 2022",
        releaseYear: "2022",
        technologies: ["JavaScript", "Node.JS", "MySql", "Express"],
        projectType: "Individual Project",
        image: "./assets/images/portfolio-images/ecommerce.jpg",
        longDescription: "This application serves as a base for creating and populating an e-commerce backend with database information relative to your products and product categories.",
        pointOne: "Easily add information into a products database",
        pointTwo: "Reduce inconsistency with products through tags relating each category",
        pointThree: "Update, delete, add, retrieve information",
        purpose: "Keep track of products and category information."
    },
    {
        name: "Employee Database",
        id: "employee_database",
        githubUrl: "https://github.com/origin-42/employee-database",
        description: "An application to hold employee information.",
        releaseDate: "May 2022",
        releaseYear: "2022",
        technologies: ["JavaScript", "Node.JS", "MySql", "Express"],
        projectType: "Individual Project",
        image: "./assets/images/portfolio-images/employee_database.jpg",
        longDescription: "The idea was to further my knowledge with asyncronous code whilst also creating an intuitive employee registry that is updateable.",
        pointOne: "Keep track of company information",
        pointTwo: "Includes department, role, and employee information in one location",
        pointThree: "Display information on the click of a button",
        purpose: "Ensure consistency across departments and easy to obtain information for the company."
    },
    {
        name: "Scribbles",
        id: "scribbles",
        githubUrl: "https://github.com/origin-42/scribbles",
        description: "Take notes from the browser in an easily accessible location with a clean and polished interface.",
        releaseDate: "May 2022",
        releaseYear: "2022",
        technologies: ["JavaScript", "Node.JS", "MySql", "HTML", "CSS", "Express"],
        projectType: "Individual Project",
        image: "./assets/images/portfolio-images/scribbles.jpg",
        longDescription: "This application is intended to server as an update to note taker using mysql2 CLI, developing a databasing system for the application. Watch this space for further development.",
        pointOne: "Add notes as they come to you.",
        pointTwo: "Easily remove or update information",
        pointThree: "Polished user interface and browser support",
        purpose: "Notes accessible from any device in one location."
    },
    {
        name: "Employee Registry",
        id: "employeeRegistry",
        githubUrl: "https://github.com/origin-42/employee-registry",
        description: "A application designed to save employee data in an easily accesible location",
        releaseDate: "April 2022",
        releaseYear: "2022",
        technologies: ["JavaScript", "Node.JS", "Inquirer", "Jest", "HTML", "CSS"],
        projectType: "Individual Project",
        image: "./assets/images/portfolio-images/employee_registry.jpg",
        longDescription: "This was developed to keep track of emplyees in a business to improve communication across the company and consistency in the team..",
        pointOne: "Start application and run through prompts to add information on employees",
        pointTwo: "Easily adjust information by locating and altering said information",
        pointThree: "Clean and polished output, viewable in the browser",
        purpose: "Provision a means to keep track of employee information."
    },
    {
        name: "Readme Generator",
        id: "readmeGenerator",
        githubUrl: "https://github.com/origin-42/readme-generator",
        description: "A simple application that generates a quality readme file with Node.js & Inquirer",
        releaseDate: "April 2022",
        releaseYear: "2022",
        technologies: ["JavaScript", "Node.JS", "Inquirer"],
        projectType: "Individual Project",
        image: "./assets/images/portfolio-images/readme_generator.jpg",
        longDescription: "Creating multiple repositories can be time consuming with the number of repositories developed. Here we can simply type the desired information and the formatting will be completed automatically, whilst ensuring formatting is consistent. This will save time searching for information that will be the same everytime, ensuring consistency across all applications, creating a clean and presenteable README.md file.",
        pointOne: "Develop an application and run program to develop an in depth readme file",
        pointTwo: "Easily adjust output by directly altering text",
        pointThree: "Easy to use prompt based application",
        purpose: "Cut time developing a readme file and create more consistency."
    },
    {
        name: "Where to Watch",
        id: "whereToWatch",
        githubUrl: "https://github.com/origin-42/where-to-watch",
        overlayUrl: "./assets/images/portfolio-images/overlay_images/movies.jpg",
        description: "Got a show you're interested in? Get all of its information here in one easy search",
        releaseDate: "March, 2022",
        releaseYear: "2022",
        technologies: ["HTML", "CSS", "JavaScript", "APIs", "Boostrap", "JQuery", "JQueryUI", "Github"],
        projectType: "Group Project",
        image: "./assets/images/portfolio-images/where-to-watch.jpg",
        longDescription: "Here is an application designed to help movie enthusiasts decide which movie to watch and navigate where, and how to watch it, weather it be bought, rented, or streamed.",
        pointOne: "Consider a movie title and get matching titles from criteria",
        pointTwo: "Click to view movie more in depth, including reviews, actors, actors latest movies and more",
        pointThree: "View available streaming websites and how to watch",
        purpose: "We wanted to be able to link end-points for streaming a movie whilst checking reviews all in one place."
    },
    {
        name: "Your Weather Host",
        id: "weatherHost",
        githubUrl: "https://github.com/origin-42/weather_host",
        overlayUrl: "./assets/images/portfolio-images/overlay_images/weather.jpg",
        description: "A dashboard using the 'openweathermap' api to displlay weather info.",
        releaseDate: "March, 2022",
        releaseYear: "2022",
        technologies: ["HTML", "CSS", "JavaScript", "APIs", "Boostrap", "JQuery", "JQueryUI", "Github"],
        projectType: "Individual Project",
        image: "./assets/images/portfolio-images/weather_host.jpg",
        longDescription: "Here is an application to check cities on the globe for weather conditions. Helpful for those travelling, scouting, or just planning a trip to the beach, don't forget your sunscreen!",
        pointOne: "Search a Country from anywhere in the world",
        pointTwo: "Receive feedback on current and future weather conditions",
        pointThree: "Save and refresh previous searches",
        purpose: "This application was designed to received information on weather and specifically UV information."
    },
    {
        name: "Done Daily",
        id: "doneDaily",
        githubUrl: "https://github.com/origin-42/DoneDaily",
        overlayUrl: "./assets/images/portfolio-images/overlay_images/calendar.jpg",
        description: "Schedule events with this simple daily planner.",
        releaseDate: "March, 2022",
        releaseYear: "2022",
        technologies: ["HTML", "CSS", "JavaScript", "Web APIs", "Boostrap", "JQuery", "Github", "Moment.js"],
        projectType: "Individual Project",
        image: "./assets/images/portfolio-images/DoneDaily.jpg",
        longDescription: "This calendar day planner is a simple alternative to the many complicated applications out there that are used for everyday time scheduling. Simply load it in your browser and plan away. No need to keep the application open, as it will remember your schedule years from now.",
        pointOne: "Plan an event and monitor it for the day, week, month or even year",
        pointTwo: "Save information to page and come back to update later",
        pointThree: "User friendly application with calendar for date selection",
        purpose: "This application was designed to help keep track daily activities on the hour to keep a schedule."
    },
    {
        name: "Quiz Timeout",
        id: "quizTimeout",
        githubUrl: "https://github.com/origin-42/quiztimeout",
        overlayUrl: "./assets/images/portfolio-images/overlay_images/multichoice.jpg",
        description: "A timed coding quiz where to test your knowledge of javascript and web API's, CSS, and HTML.",
        releaseDate: "March, 2022",
        releaseYear: "2022",
        technologies: ["HTML", "CSS", "JavaScript"],
        projectType: "Individual Project",
        image: "./assets/images/portfolio-images/quiztimeout.png",
        longDescription: "This game is designed as a test to Javascript fundamentals using nested timeout and interval functions and recursion. Plan through and beat your own high score, save your initials and try again until you achieve a perfect score for the round.",
        pointOne: "Reiterate over your JavaScript knowledge",
        pointTwo: "Save scores to track against yourself and others",
        pointThree: "Mobile responsive to play on the phone whilst travelling",
        purpose: "This was a game designed to practise Javascript front-end development and web api's, setTimeout and setInterval."
    },
    {
        name: "Password Generator",
        id: "passwordGen",
        githubUrl: "https://github.com/origin-42/password-generator",
        overlayUrl: "./assets/images/portfolio-images/overlay_images/password.jpg",
        description: "Randomly generate a password for use with online applications.",
        releaseDate: "February, 2022",
        releaseYear: "2022",
        technologies: ["HTML", "CSS", "JavaScript"],
        projectType: "Individual Project",
        image: "./assets/images/portfolio-images/password-generator.png",
        longDescription: "Here you can generate a password from 8 to 128 characters in length and check criteria to allow for a more customiseable and secure password for use in applications.",
        pointOne: "Generate a password for online applications",
        pointTwo: "Select from criteria to reduce brute force hacking attempts",
        pointThree: "Easy click to save clickboard functionality for mobile devices",
        purpose: "This was a game designed to provide an easy to use application to generate a password and help users reduce potential security breaches on their devices by not using the same password twice."
    },
    {
        name: "ChoreDoor",
        id: "choredoor",
        githubUrl: "https://github.com/origin-42/choredoor",
        overlayUrl: "./assets/images/portfolio-images/overlay_images/chorebot.jpg",
        description: "A basic game with javascript. Avoid the chore bot!.",
        releaseDate: "February, 2022",
        releaseYear: "2022",
        technologies: ["HTML", "CSS", "JavaScript"],
        projectType: "Individual Project",
        image: "./assets/images/portfolio-images/choredoor.jpg",
        longDescription: "Here is a game designed to test your knowledge. there's always a way to around doing your chores. Try NOT to find Chorebot.",
        pointOne: "Calculate where Chorebot might be",
        pointTwo: "Receive feedback on wins and losses",
        pointThree: "Gain advantage and defeat, not defeating your chores",
        purpose: "I created a game from scratch as a requirement of work from Codecademy where the goal was to use Javascript to alter the page and results based on user input and outcome."
    },
    {
        name: "West Wolf Media",
        id: "wwMedia",
        githubUrl: "https://westwolfmedia.com/",
        overlayUrl: "./assets/images/portfolio-images/overlay_images/westwolf",
        description: "A company website for wedding videography and related services.",
        releaseDate: "February, 2020",
        releaseYear: "2020",
        technologies: ["WordPress", "CSS"],
        projectType: "Company Website",
        image: "./assets/images/portfolio-images/west-wolf.jpg",
        longDescription: "This website provides wedding and related videography services for anybody looking to get married.",
        pointOne: "Book a meetup with owners to discuss videography details",
        pointTwo: "Check pricing directly from the website prior to engaging",
        pointThree: "View previous services rendered to clients for weddings and other events",
        purpose: "This website was created for a small business along with a marketing campaign to help the owners establish an online presence and content with the market, mostly through word of mouth."
    }
]

// render each project to page
projects.forEach(project => {

    let card = $(`<div class="card" id="${project.id}" style="width: 15rem;" data-bs-toggle="modal" data-bs-target="#portfolio-selection">
                    <img src="${project.image}" class="card-img-top" alt="${project.id}">
                    <div class="card-body">
                    <h5 class="card-title">${project.name} (${project.releaseYear})</h5>
                    <p class="card-text">${project.description}</p>
                    </div>
                </div>`);

    $("#portfolio-container").append(card);

    // setup portfolio

    $(`#${project.id}`).on("click", function () {

        $("#pf-techUsed").empty();
        
        $("#projectType").text(project.projectType);
        $("#pf-title").text(project.name);
        $("#pf-dateReleased").text(project.releaseDate);
        $("#pf-description").text(project.longDescription);
        $("#pf-tagOne").text(project.pointOne);
        $("#pf-tagTwo").text(project.pointTwo);
        $("#pf-tagThree").text(project.pointThree);
        $("#pf-purpose").text(project.purpose);
        $("#pf-image").attr("src", `${project.image}`)
        $("#pf-image-wrapper").attr("href", `${project.githubUrl}`)
        $("#pf-image").attr("alt", `${project.name} Website`)
        
        let arr = [];
        project.technologies.forEach(tech => {

            let li = $("<li>");
            li.text(tech);
            arr.push(li);
            
        })
        
        arr.forEach(li => {
            $("#pf-techUsed").append(li);
        })
        
    })

})
