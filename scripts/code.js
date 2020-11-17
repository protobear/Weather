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
            GetAndSetWeather();
        }
    });

}

const GetAndSetWeather = () =>{

    currentURL = "http://api.weatherapi.com/v1/current.json?key=a9f26adcfd3d4e2fbda204136201611&q=Gent,BE";
    //get and set current
    $.ajax( {
        url: currentURL,
        //key: "a9f26adcfd3d4e2fbda204136201611",
        type: "get",
        success: setCurrentWeather,
        error: myCodeIsACrime
    })

}

const myCodeIsACrime = (err) =>{
    console.log(err);
}

const setCurrentWeather = (receivedData) =>{
    //now: nowdate, nowimage, nowtemp

    let test = receivedData;
    console.log(test);
    $('nowTemp').val(receivedData.temp_c + " °C");


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
        error: console.log("Something went wrong")
    })
    baseURL = "https://api.github.com/users/";
    currentURL = "http://api.weatherapi.com/v1/current.json?key=&q=Gent,BE";
    forecastURL = "http://api.weatherapi.com/v1/forecast.json?key=&q=Gent,BE&days=3";
}


const nope = () =>{
    window.alert("Marnick made a fucky wucky and wants to grab the bottle again")

}


window.addEventListener("load", setup)