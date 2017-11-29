'use strict';


// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array:
/*
 <li>
 <figure>
 <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
 <figcaption>
 <h3>Title</h3>
 </figcaption>
 </figure>
 </li>
 */
// After the loop print the HTML into <ul> element using innerHTML.

const showImages = () => {
  const ul = document.querySelector('ul');

  fetch('images.json').then((response) => {
    return response.json();
  }).then((json) => {
    let html = '';
    json.forEach((image) => {
      html +=
          `<li>
          <figure>
            <a href="img/original/${image.mediaUrl}"><img src="img/thumbs/${image.mediaThumb}"></a>
            <figcaption>
                <h3>${image.mediaTitle}</h3>
            </figcaption>
          </figure>
        </li>`;
    });
    ul.innerHTML = html;
    // now links can be selected
      linkActions();
  });
};

showImages();


const linkActions = () => {
    // select all a elements inside ul
    // select img element inside modal
    // loop links
    // when link is clicked
    // prevent default action
    // get href value of link
    // set modal image src to href value
    // display modal (use lightbox class)
    

    /*
    var $thumbs = $(".thumbnails");
    var $lbImg = $(".lightbox-img");
    var $lb = $(".lightbox");
    var @btnClose = $(".closeBtn");
    */

    var modal = document.getElementsById("myModal");

    var img = document.getElementById("img");
    var modalImg = document.getElementById("lightbox-img");
    img.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function(){
      modal.style.display = "none";
    }

    };

    /*
    $thumbs.on("click", "a", function (e)){
      e.preventDefault();
      var big = $(this).attr("href");
      $lbImg.attr("src", big);
      $lb.attr("data-state", "visible");
    });

  $btnClose.on("click", function () {
      $lb.attr ("data-state", "hidden");
  });
};

show linkActions();
    */

// select close button of modal
// when close button is clicked hide modal