let inputFile = document.getElementById("addImg1");
    let rowOfPhotos = document.getElementById("row-of-product-photos");
        let numOfFiles = 0;
    inputFile.addEventListener("change", function (e) {
      let files = e.target.files;
      let output = rowOfPhotos;
            if(numOfFiles + files.length > 5){
                e.preventDefault();
                $('.popup-bg20').fadeIn(1000);
                $('.popup-bg20').fadeOut(1000);
        return;
      }
      numOfFiles += files.length;
      for (let i = 0; i < files.length; i++) {
        let file = files[i];

        if (file) {
          const reader = new FileReader();
          reader.addEventListener("load", function (e) {

            let imageFile = e.target;

            let divDocument = document.createElement("div");
            let divDocumentClose = document.createElement("div");
            let image = document.createElement("img");

            divDocument.setAttribute("class", "id-document");
            divDocumentClose.setAttribute("class", "id-document-close");

            image.setAttribute("class", "image-preview");
            image.setAttribute("style", "width: inherit; height: inherit; border-radius: 20px;");
            image.setAttribute("src", imageFile.result);

            divDocument.appendChild(divDocumentClose);
            divDocument.appendChild(image);
            divDocumentClose.addEventListener("click", e => {
              divDocument.style.display = "none";
              numOfFiles--;
            });
            rowOfPhotos.appendChild(divDocument);
          });

          reader.readAsDataURL(file);
        } else {
          image.style.display = null;
        }
      }
    });
    