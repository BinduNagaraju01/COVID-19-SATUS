function fetchData() {
    const URL = "https://disease.sh/v3/covid-19/all";
    fetch(URL)
        .then(function(response) {
            jsonData = response.json();
            console.log(jsonData);
            return jsonData;
        })
        .then(function(data) {
            display(data);
        })
}

function convertToIndianRep(num) {
    const formattedNum = new Intl.NumberFormat("en-IN").format(num);
    return formattedNum;
}



function display(data) {
    const stat = document.querySelectorAll(".stat");
    stat[0].children[1].textContent = convertToIndianRep(data.active);
    stat[0].children[2].textContent = convertToIndianRep(data.todayCases);

    stat[1].children[1].textContent = convertToIndianRep(data.recovered);
    stat[1].children[2].textContent = convertToIndianRep(data.todayRecovered);

     stat[2].children[1].textContent = convertToIndianRep(data.total);
     stat[2].children[2].textContent = convertToIndianRep(data.daily);

    stat[3].children[1].textContent = convertToIndianRep(data.deaths);
    stat[3].children[2].textContent = convertToIndianRep(data.todayDeaths);

    const headerConfrmedStat = document.querySelector("header");
    headerConfrmedStat.children[1].textContent = convertToIndianRep(data.cases);
}




window.onload = function() {
    fetchData();
}




