//globals


let globals = {
    //not assigned by init
    backgroundImage: '',
    location: '',
//Search
    searchInput: '',
    searchInputContent: '',
//now
    nowDate: ' ',
    nowImage: '',
    nowTemp: '',
// today
    todayForecast: '',
    todayImage: '',
    todayMin: '',
    todayMax: '',
//tomorrow
    tomorrowForecast : '',
    tomorrowImage: '',
    tomorrowMin: '',
    tomorrowMax: '',
//overmorrow -- Yes I checked, overmorrow is in fact a word.
    overmorrowTitle: '',
    overmorrowForecast: '',
    overmorrowImage: '',
    overmorrowMin: '',
    overmorrowMax: '',

//clicks for the divs
    nowBox: '',
    todayBox: '',
    tomorrowBox: '',
    overmorrowBox: ''

}



const setup = () => {
// Assigning all the globals because I hate myself
    globalsInit();

    //searchbar, if in focus and enter is pressed then searchinput is in searchinputcontent
    $(document).on('keypress',function(e) {
        if($("#searchInput").is(':focus') && e.which === 13) {
            globals.searchInputContent = $("#searchInput").val();
            console.log(globals.searchInputContent)
        }
    });

    $("#nowBox").click(function() { console.log("test") });

}

const test = () =>{
    console.log("test");
}


const  globalsInit = () =>{
    globals.searchInput = $("#searchInput");

    //now
    globals.nowDate = $("#nowDate");
    globals.nowImage = $("#nowImage");
    globals.nowTemp = $("#nowTemp");

    //today
    globals.todayForecast = $("#todayForecast");
    globals.todayImage = $("#todayImage");
    globals.todayMin = $("#todayMin");
    globals.todayMax = $("#todayMax");

    //tomorrow
    globals.tomorrowForecast = $("#tomorrowForecast");
    globals.tomorrowImage = $("#tomorrowImage");
    globals.tomorrowMin = $("#tomorrowMin");
    globals.tomorrowMax = $("#tomorrowMax");

    //overmorrow
    globals.overmorrowTitle = $("#overmorrowTitle");
    globals.overmorrowForecast = $("#overmorrowForecast");
    globals.overmorrowImage = $("#overmorrowImage");
    globals.overmorrowMin = $("#overmorrowMin");
    globals.overmorrowMax = $("#overmorrowMax");

    //div click
    globals.nowBox = $("#nowBox");
    globals.todayBox = $("#todayBox");
    globals.tomorrowBox = $("#tomorrowBox");
    globals.overmorrowBox = $("#overmorrowBox");

}

window.addEventListener("load", setup)