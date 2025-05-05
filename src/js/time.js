const date = new Date();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// const stations = ['spring', 'summer', 'fall', 'winter'] //
//          'autumn' it's the same thing as 'fall'         //

// season : {Station} ## String ##
// colors : {MainColor}, {SecondaryColor}, {ComplementaryColor}, {TextColor} ## String ##
const SiteThemes = [
    { season: 'Spring', colors: ['','','',''] },
    { season: 'Summer', colors: ['','','',''] },
    { season: 'Fall', colors: ['','','',''] },
    { season: 'Winter', colors: ['','','',''] }
]

var StationMonths = [
    { season: 'Spring', months: [3,4,5]   },
    { season: 'Summer', months: [6,7,8]   },
    { season: 'Fall'  , months: [9,10,11] },
    { season: 'Winter', months: [1,2,12]  }
]

var SpecialEvents = [
    // { event: '', months:[],  days: []}, //
    { event: 'My Birthday', months:[8],  days: [4]},
    { event: 'April Fools', months:[4],  days: [1]},
    { event: 'Halloween',   months:[10], days: [24,25,26,27,28,29,30,31]},
    { event: 'Last Day of the Year',  months:[12], days: [31]},
    { event: 'First Day of the Year', months:[1],  days: [1] }
]

function CheckStation(){
    // USA Stations
    // 3 - March     # Spring
    // 6 - June      # Summer
    // 9 - September # Fall/Autumn
    // 12 - December # Winter

    var CurrentMonth = date.getMonth() + 1 // current month(0-11) + 1  (The twelve months but javascript being annoying lol)

    for (var i = 0; i < StationMonths.length; i++) {
        if (StationMonths[i].months.includes(CurrentMonth)) {
            console.log(StationMonths[i].season);
            return; // Encontrou a estação, pode sair da função
        }
    }
        
    console.log("Estação não identificada"); // Caso o mês não corresponda a nenhuma estação
    
}

function setFooterDate() {
    var currentYear = date.getFullYear() // YYYY format
    var startYear = 2025

    if (currentYear > startYear){
        document.getElementById('footerCopyright').innerHTML = `© ${startYear} - ${currentYear} <a href="http://github.com/SimplyOrtiz" target="_blank" rel="noopener noreferrer">SimplyOrtiz</a>`    
    } else {
        document.getElementById('footerCopyright').innerHTML = `© ${startYear} <a href="http://github.com/SimplyOrtiz" target="_blank" rel="noopener noreferrer">SimplyOrtiz</a>`
    }
}

setFooterDate()
CheckStation()