// Navbar scroll effect

window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");
  if (window.scrollY > 200 && window.scrollY < 3400) {
    nav.classList.add(`scroll`);
  } else {
    nav.classList.remove(`scroll`);
  }
});

//This code triggers the collapse of the about me text.
$(".aboutmeContainer").on("mouseover", function () {
  $(".collapse").collapse("show");
});
$(".aboutmeContainer").on("mouseleave", function () {
  $(".collapse").collapse("hide");
});

//This code triggers the collapse of the contact form.
$(".connect").on("mouseover", function () {
  $(".collapse").collapse("show");
});
$(".connect").on("mouseleave", function () {
  $(".collapse").collapse("hide");
});

// This code enables the gallery back button on every themed gallery
let galleryMain = $(".gallerycontainer").html();
$(".gallery").on("click", ".backbutton", function () {
  $(".gallerycontainer").html(galleryMain);
});

// This code triggers the main gallery to slide to the right and
// have the Sunset gallery move into its place.
$(".gallery").on("click", ".sunsetOverlay", function () {
  $(".gallerycontainer")
    .animate({ "margin-left": "2000px" }, "slow")
    .queue(function (next) {
      $(".gallerycontainer")
        .replaceWith(
          `<div class="container gallerycontainer overflow-hidden">
        <div class="row text-center">
            <div class="col-12">
                <h4 class="text-bright animate__animated animate__fadeInLeft pt-5">Sunset Gallery</h4>
            </div>
            <div class="col-xs-12 col-lg-4 imageCard py-5 leftrightwrapper">
                <img class="image_img animate__animated animate__fadeInLeft py-5"
                    src="./Media/Galleryphotos/sunset_1.jpg" alt="sunset picture">
            </div>
            <div class="col-xs-12 col-lg-4 imageCard py-5 leftrightwrapper">
                <img class="img-fluid image_img wow animate__animated animate__fadeInLeft py-5"
                    src="./Media/Galleryphotos/sunset3.jpeg" alt="sunset picture">
            </div>
            <div class="col-xs-12 col-lg-4 imageCard py-5 leftrightwrapper">
                <img class="img-fluid image_img wow animate__animated animate__fadeInLeft py-5"
                    src="./Media/Galleryphotos/sunset_4.jpeg" alt="sunset picture">
            </div>
            <div class="col-12 backbutton"><button class="btn btn-outline-light">Back</button></div>
        </div>
    </div>`
        )
        .dequeue();
    });
});

// This code triggers the main gallery to slide to the right and
// have the Music gallery move into its place.
$(".gallery").on("click", ".musicOverlay", function () {
  $(".gallerycontainer")
    .animate({ "margin-left": "2000px" }, "slow")
    .queue(function (next) {
      $(".gallerycontainer")
        .replaceWith(
          `<div class="container gallerycontainer overflow-hidden">
          <div class="row text-center">
              <div class="col-12">
                  <h4 class="text-bright animate__animated animate__fadeInLeft pt-5">Music Gallery</h4>
              </div>
              <div class="col-xs-12 col-lg-4 imageCard py-5 leftrightwrapper">
                  <img class="image_img animate__animated animate__fadeInLeft py-5"
                      src="./Media/Galleryphotos/IMG_0806.jpeg" alt="Music picture">
              </div>
              <div class="col-xs-12 col-lg-4 imageCard py-5 leftrightwrapper">
                  <img class="img-fluid image_img wow animate__animated animate__fadeInLeft py-5"
                      src="./Media/Galleryphotos/LocoCaravana.jpg" alt="Music picture">
              </div>
              <div class="col-xs-12 col-lg-4 imageCard py-5 leftrightwrapper">
                  <img class="img-fluid image_img wow animate__animated animate__fadeInLeft py-5"
                      src="./Media/Galleryphotos/music_3.JPG" alt="Music picture">
              </div>
              <div class="col-12 backbutton"><button class="btn btn-outline-light">Back</button></div>
          </div>
      </div>`
        )
        .dequeue();
    });
});

// This code triggers the main gallery to slide to the right and
// have the Sports gallery move into its place.
$(".gallery").on("click", ".sportOverlay", function () {
  $(".gallerycontainer")
    .animate({ "margin-left": "2000px" }, "slow")
    .queue(function (next) {
      $(".gallerycontainer")
        .replaceWith(
          `        <div class="container gallerycontainer overflow-hidden">
          <div class="row text-center">
              <div class="col-12">
                  <h4 class="text-bright animate__animated animate__fadeInLeft pt-5">Sports Gallery</h4>
              </div>
              <div class="col-xs-12 col-lg-4 imageCard py-5 leftrightwrapper">
                  <img class="image_img animate__animated animate__fadeInLeft py-5"
                      src="./Media/Galleryphotos/Beachvolleyball.jpg" alt="team portret picture">
              </div>
              <div class="col-xs-12 col-lg-4 imageCard py-5 leftrightwrapper">
                  <img class="img-fluid image_img wow animate__animated animate__fadeInLeft py-5"
                      src="./Media/Galleryphotos/backfloop.jpg" alt="cliffdive picture">
              </div>
              <div class="col-xs-12 col-lg-4 imageCard py-5 leftrightwrapper">
                  <img class="img-fluid image_img wow animate__animated animate__fadeInLeft py-5"
                      src="./Media/Galleryphotos/Vin wakesurfing.jpg" alt="wakesurf picture">
              </div>
              <div class="col-12 backbutton"><button class="btn btn-outline-light">Back</button></div>
          </div>
      </div>`
        )
        .dequeue();
    });
});

// This code triggers the main gallery to slide to the right and
// have the Pets gallery move into its place.
$(".gallery").on("click", ".petsOverlay", function () {
  $(".gallerycontainer")
    .animate({ "margin-left": "2000px" }, "slow")
    .queue(function (next) {
      $(".gallerycontainer")
        .replaceWith(
          `<div class="container gallerycontainer overflow-hidden">
          <div class="row text-center">
              <div class="col-12">
                  <h4 class="text-bright animate__animated animate__fadeInLeft pt-5">Pet Gallery</h4>
              </div>
              <div class="col-xs-12 col-lg-4 imageCard py-5 leftrightwrapper">
                  <img class="image_img animate__animated animate__fadeInLeft py-5"
                      src="./Media/Galleryphotos/Harrie 1.jpg" alt="Pet picture">
              </div>
              <div class="col-xs-12 col-lg-4 imageCard py-5 leftrightwrapper">
                  <img class="img-fluid image_img wow animate__animated animate__fadeInLeft py-5"
                      src="./Media/Galleryphotos/Sjors 1.jpg" alt="Pet picture">
              </div>
              <div class="col-xs-12 col-lg-4 imageCard py-5 leftrightwrapper">
                  <img class="img-fluid image_img wow animate__animated animate__fadeInLeft py-5"
                      src="./Media/Galleryphotos/avy2.jpeg" alt="Pet picture">
              </div>
              <div class="col-12 backbutton"><button class="btn btn-outline-light">Back</button></div>
          </div>
      </div>`
        )
        .dequeue();
    });
});
