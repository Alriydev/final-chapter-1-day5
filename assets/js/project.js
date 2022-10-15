let data = []

function addProject(){


    let title = document.getElementById("input-title").value
    let startDate = document.getElementById("input-startdate").value
    let endDate = document.getElementById("input-enddate").value
    let description = document.getElementById("input-desc").value
    let image = document.getElementById("input-image").files

    let html = document.getElementById("input-html").checked
    let css = document.getElementById("input-css").checked
    let js = document.getElementById("input-js").checked
    let bootstrap = document.getElementById("input-bootstrap").checked

    if(html){
        html = document.getElementById("input-html").value
    } else {
        html = ""
    }

    if(css){
        css = document.getElementById("input-css").value
    } else {
        css = ""
    }

    if(js){
        js = document.getElementById("input-js").value
    } else {
        js = ""
    }

    if(bootstrap){
        bootstrap = document.getElementById("input-bootstrap").value
    } else {
        bootstrap = ""
    }

    image = URL.createObjectURL(image[0])
    
    let projects = {
        title,
        description,
        image,
        html,
        css,
        js,
        bootstrap,
        duration: distanceTime(startDate, endDate)
    }

    data.push(projects)
    console.log(data);
    renderProject()
    alert("Project Added!");
    
}

function renderProject(){

    document.getElementById("project-list").innerHTML = ''

    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);

        document.getElementById("project-list").innerHTML +=`
        <div class="container">
            <div class="card">
                <img src="${data[i].image}" alt="">
                <h3>${data[i].title}</h3>
                <span>duration: ${data[i].duration}</span>
                <p>${data[i].description}
                </p>
                <div class="tech">
                    <i class="fa-brands fa-${data[i].html}"></i>
                    <i class="fa-brands fa-${data[i].css}"></i>
                    <i class="fa-brands fa-${data[i].js}"></i>
                    <i class="fa-brands fa-${data[i].bootstrap}"></i>
                </div>
                <div class="project-option">
                    <div class="left-button">
                        <button>edit</button>
                    </div>
                    <div class="right-button">
                        <button>delete</button>
                    </div>
                </div>
            </div>
        </div>
        `
}
}

function distanceTime(startDate, endDate){


    let start = new Date(startDate)
    let end = new Date(endDate)
    let duration = end - start

    let milisecond = 1000
    let secondInHours = 3600
    let hoursInDay = 23

    let distanceDay = Math.floor(duration / (milisecond * secondInHours * hoursInDay));
    let distanceMonth = Math.floor(distanceDay / 31);
    let distanceWeek = Math.floor(distanceDay/7)

    
    if (distanceWeek <= 0) {
        return distanceDay + " Days"
    } else if (distanceDay >=7 && distanceDay <= 30) {
        return distanceWeek + " Weeks"
    } else
        return distanceMonth + " Months "
    
}
