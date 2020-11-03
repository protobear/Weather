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
    overmorrowMax: ''

//clicks for the divs
    //todo: clicks for the divs
}



const setup = () => {
// Assigning all the globals because I hate myself
    globalsInit();
    $(document).on('keypress',function(e) {
        if($("#searchInput").is(':focus') && e.which === 13) {
            globals.searchInputContent = $("#searchInput").val();
            console.log(globals.searchInputContent)
        }
    });


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

}

window.addEventListener("load", setup)