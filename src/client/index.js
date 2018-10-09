let request = new XMLHttpRequest();

request.open("GET", "https://newsapi.org/v2/everything?sources=national-geographic&apiKey=58314004c9b44065968db4b96c22f504");

// https://newsapi.org/v2/everything?q=bitcoin&apiKey=58314004c9b44065968db4b96c22f504

// https://newsapi.org/v2/everything?sources=national-geographic&apiKey=58314004c9b44065968db4b96c22f504

// http://www.splashbase.co/api/v1/images/search

// http://www.splashbase.co/api/v1/images/latest

request.onload = function () {
    let rootElem = document.getElementById("root");
    let modalElem;
    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0];
    // let currImage;
    let data = this.response;
    let start = 0;
    let finish = 10;
    // console.log('data: ', data);
    let json = JSON.parse(data);

    // default:
    modal.style.display = "none";

    const mountImages = () => {
        for(let i = start; i < finish; i++) {
            if (json.articles[i].urlToImage) {
                let currUrl = (json.articles[i].urlToImage); 
                currImage = new Image(100);
                currImage.src = currUrl;
                currImage.id = "image" + i;
                currImage.src = currUrl;
                rootElem.appendChild(currImage);
                currImage.addEventListener("dblclick", () => {
                    modal.style.display = "block";
                    modalElem = document.createElement("img");
                    modalElem.id = "modal" + i;
                    modalElem.src = currUrl;
                    modal.appendChild(modalElem);
                });
            }
        }
    }

    span.onclick = () => {
        modal.style.display = "block";
    }

    // look into this some more:
    window.onclick = (event) => {
        if(event.target !== modalElem) {
            modal.removeChild(modalElem);
            modal.style.display = "none";
        }
    }

    const initialMount = () => {
        mountImages();
    }

    const getImagesButton = document.getElementById("get-images");

    getImagesButton.onclick = () => {
        initialMount();
    }

    const nextButton = document.getElementById("next-button");

    const incrementSliceIndexes = () => {
        start += 10;
        finish += 10;
    }

    nextButton.onclick = () => {
        const dismountImages = () => {
            for (let j = start; j < finish; j++) {
                let elemToDelete = document.getElementById("image" + j);
                rootElem.removeChild(elemToDelete);
            }
        }
        dismountImages();
        incrementSliceIndexes();
        // console.log('start: ', start);
        // console.log('finish: ', finish);
        mountImages();
    }
}
  
request.send();

// FROM USING SPLASHBASE:
// mountImages();

    // const mountImages = () => {
    //     for (let i = start; i < finish; i++) {
    //         let currentUrl = json.images[i].url;
    //         let currImage = new Image(100);
    //         currImage.src = currentUrl;
    //         currImage.id = "image" + i;
    //         console.log("currImage.id: ", currImage.id);
    //         rootElem.appendChild(currImage);
    //     }
    // }