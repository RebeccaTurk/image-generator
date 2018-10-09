let request = new XMLHttpRequest();

request.open("GET", "https://newsapi.org/v2/everything?sources=national-geographic&apiKey=58314004c9b44065968db4b96c22f504");

request.onload = function () {
    let modalElem;
    let rootElem = document.getElementById("root");
    let modal = document.getElementById("myModal");
    let closeButton = document.getElementsByClassName("close")[0];
    let modalInner = document.getElementById("modal-inner");
    let mountImageHere = document.getElementById("mount-image-here");

    let data = this.response;
    let start = 0;
    let finish = 10;
    let json = JSON.parse(data);

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
                    modalElem = new Image(800);
                    modalElem.id = "modal" + i;
                    modalElem.src = currUrl;
                    mountImageHere.appendChild(modalElem);
                });
            }
        }
    };

    closeButton.onclick = () => {
        mountImageHere.removeChild(modalElem);
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            mountImageHere.removeChild(modalElem);
            modal.style.display = "none";
        }
    };

    const initialMount = () => {
        mountImages();
    };

    const getImagesButton = document.getElementById("get-images");

    getImagesButton.onclick = () => {
        initialMount();
    };

    const nextButton = document.getElementById("next-button");

    const incrementSliceIndexes = () => {
        start += 10;
        finish += 10;
    };

    nextButton.onclick = () => {
        const dismountImages = () => {
            for (let j = start; j < finish; j++) {
                let elemToDelete = document.getElementById("image" + j);
                rootElem.removeChild(elemToDelete);
            }
        }
        dismountImages();
        incrementSliceIndexes();
        mountImages();
    };
};
  
request.send();