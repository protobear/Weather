//globals


let globals = {
    //general
    backgroundImage: '',
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
//overmorrow
    overmorrowTitle: '',
    overmorrowForecast: '',
    overmorrowImage: '',
    overmorrowMin: '',
    overmorrowMax: ''
}



const setup = () => {
// Assigning all the globals because I hate myself
    globalsInit();

}

const  globalsInit = () =>{
    //now
    globals.nowDate = $("#nowDate");
    globals.nowImage = $("#nowImage");
    globals.nowTemp = $("#nowTemp");

    //today
    globals.todayForecast = $("#todayForecast");
    globals.todayImage = $("#todayImage")


}

window.addEventListener("load", setup)