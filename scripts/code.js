//globals


let globals = {
//Search
    searchInput: $("#searchInput"),
    searchInputContent: '',
}



const setup = () => {

    $('#nowView').hide();
    $('#todayView').hide();
    $('#tomorrowView').hide();
    $('#overmorrowView').hide();
    $('#allW').hide();


    $('#nowBox').hide();
    $('#todayBox').hide();
    $('#tomorrowBox').hide();
    $('#overmorrowBox').hide();

    $('#nowBox').hover(()=>$('#nowView').show(), ()=> $('#nowView').hide());
    $('#todayBox').hover(()=>$('#todayView').show(), ()=> $('#todayView').hide());
    $('#tomorrowBox').hover(()=>$('#tomorrowView').show(), ()=> $('#tomorrowView').hide());
    $('#overmorrowBox').hover(()=>$('#overmorrowView').show(), ()=> $('#overmorrowView').hide());

    if($("#searchInput").is(':focus')){
        $('#searchpop').show();
    }
    //searchbar, if in focus and enter is pressed then searchinput is in searchinputcontent
    $(document).on('keypress',function(e) {
        if($("#searchInput").is(':focus') && e.which === 13) {
            globals.searchInputContent = $("#searchInput").val();
            console.log(globals.searchInputContent)
            GetAndSetWeather();
            setInterval(GetAndSetWeather, 60000);
            $('#searchpop').hide();
            $('#allW').show();
            changeBG();


        }
    });
}

const changeBG = () =>{

    $("#bodyID").css("background-image", 'url("../Weather/assets/backgrounds/snow.jpg")');
}


const GetAndSetWeather = () =>{
    currentURL = "https://api.weatherapi.com/v1/forecast.json?key=a9f26adcfd3d4e2fbda204136201611&q=" + globals.searchInputContent + "&days=3"
    //get and set current
    $.ajax( {
        url: currentURL,
        type: "get",
        success: setCurrentWeather
    })

}
const setCurrentWeather = (receivedData) =>{
    //now: nowdate, nowimage, nowtemp

    let data = receivedData;
    console.log(data);

    //current
    $("#nowTemp").text(data.current.temp_c + "°C");
    $("#nowTitle").text("//" + data.location.name);
    $("#nowDate").text(data.location.localtime);
    $("#nowImage").attr("src", `https:${data.current.condition.icon}`);

    $("#nowvisibility").text("//Visibility: " + data.current.vis_km +" KM");
    $("#nowwindpeed").text("//Wind Speed: " + data.current.wind_kph +" KM/H");



    //today
    $("#todayForecast").text(data.forecast.forecastday[0].day.condition.text);
    $("#todayImage").attr("src", `https:${data.forecast.forecastday[0].day.condition.icon}`);
    $("#todayMin").text(data.forecast.forecastday[0].day.mintemp_c + "°C");
    $("#todayMax").text(data.forecast.forecastday[0].day.maxtemp_c + "°C");

    $("#todayvisibility").text("//Average Visibility: " + data.forecast.forecastday[0].day.avgvis_km + " KM");
    $("#todaywindspeed").text("//Maximum Wind Speed: " + data.forecast.forecastday[0].day.maxwind_kph + " KM/H");




    //tomorrow
    $("#tomorrowForecast").text(data.forecast.forecastday[1].day.condition.text);
    $("#tomorrowImage").attr("src", `https:${data.forecast.forecastday[0].day.condition.icon}`);
    $("#tomorrowMin").text(data.forecast.forecastday[1].day.mintemp_c + "°C");
    $("#tomorrowMax").text(data.forecast.forecastday[1].day.maxtemp_c + "°C");


    $("#tomorrowvisibility").text("//Average Visibility: " + data.forecast.forecastday[1].day.avgvis_km + " KM");
    $("#tomorrowwindspeed").text("//Maximum Wind Speed: " + data.forecast.forecastday[1].day.maxwind_kph + " KM/H");

    //overmorrow (yes its a word i double checked)

        let date = new Date(data.forecast.forecastday[2].date);
        let datestring =  date.toLocaleDateString('en-US', { weekday: 'long' });


    $("#overmorrowTitle").text("//" + datestring +"'s Forecast");
    $("#overmorrowForecast").text(data.forecast.forecastday[2].day.condition.text);
    $("#overmorrowImage").attr("src", `https:${data.forecast.forecastday[0].day.condition.icon}`);
    $("#overmorrowMin").text(data.forecast.forecastday[2].day.mintemp_c + "°C");
    $("#overmorrowMax").text(data.forecast.forecastday[2].day.maxtemp_c + "°C");

    $("#overmorrowvisibility").text("//Average Visibility: " + data.forecast.forecastday[2].day.avgvis_km + " KM");
    $("#overmorrowwindspeed").text("//Maximum Wind Speed: " + data.forecast.forecastday[2].day.maxwind_kph + " KM/H");

    $('#nowBox').show();
    $('#todayBox').show();
    $('#tomorrowBox').show();
    $('#overmorrowBox').show();
}


window.addEventListener("load", setup)