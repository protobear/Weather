//globals


let globals = {
    //not assigned by init
    backgroundImage: '',
    location: '',
//Search
    searchInput: $("#searchInput"),
    searchInputContent: ''
}



const setup = () => {
// Assigning all the globals because I hate myself

    //searchbar, if in focus and enter is pressed then searchinput is in searchinputcontent
    $(document).on('keypress',function(e) {
        if($("#searchInput").is(':focus') && e.which === 13) {
            globals.searchInputContent = $("#searchInput").val();
            console.log(globals.searchInputContent)
        }
    });

}

const getCurrent = () =>{
    let personInfo = $("#inputUsername").val();

    baseURL = baseURL.concat(personInfo);
    console.log(baseURL);

    $.ajax({
        url: baseURL,
        key: a9f26adcfd3d4e2fbda204136201611,
        type: "get",
        success: toPage,
        error: nope
    })
    baseURL = "https://api.github.com/users/";
    currentURL = "http://api.weatherapi.com/v1/current.json?key=&q=Gent,BE";
    forecastURL = "http://api.weatherapi.com/v1/forecast.json?key=&q=Gent,BE&days=3";
}

const getForecast = () =>{

}


const topage = (dataFromServer) =>{

}

const nope = () =>{
    window.alert("Marnick made a fucky wucky and wants to grab the bottle again")

}


window.addEventListener("load", setup)