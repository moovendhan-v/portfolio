import React from "react";
const village = { padding: "75% 0 0 0", position: "relative" };
const myVideo = { padding: "100% 0 0 0", position: "relative" };
function Gallery() {
  const galleryFirstRow = [
    {
      src: "https://blogger.googleusercontent.com/img/a/AVvXsEjGxNgvab03qqiCSwFbzVv9ETIzCOW41oIM7U4VHyrQIJi4hmQwih9Mr_GEPPQ51AJvgqWgAQk8hu6ujZMDFXtNdT2dNNcvyJY3wspvFBrh4NTMl6iWxKjAOifdCUyTCZb5F0fKxvfBan-K6mO9lAfVCF9cH8YfHqiMiWxoRlCFLw37H46HzsEjToPA4Q=w256-h320",
      alt: "agricreations poster editing gallery shanchi",
    },
    {
      src: "https://1.bp.blogspot.com/-SHOyHAnJSQk/XzPULsf4FQI/AAAAAAAABio/Vl05QVIUc8MOZfWaxWmDZqhGazTt3j29QCLcBGAsYHQ/s640/IMG_20200720_165415.jpg",
      alt: "agricreations poster editing gallery godofwar",
    },
    {
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfAh9_ekbO4bONlX4FGRizkzSgsRrA9UrasE5k1Gqk-HDD6n_Jen0t8e_DZH9liuIfR-_8q4Y5_HhYHsT1nx9z-iXGCkhHehyJDne-Ly01Io0uKovgtL0gqrSZonGXmIC4I0gK_V2k8qF_GKxKmJ7WleMjzL-xaZwZXdmafwETPLF6Wcv4HpRWvLGRjQ/s1600/agri%20dp.jpg",
      alt: "agricreations  gallery moovendhan",
    },
    {
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKwlvb3-mNhhvQzVrAOEeFokfrQ2Q5z9S1LCJZrFBzO8wPSpz0omPtaewN8KiX47LIQxfOZOfm5pNBxQdlEtvA0Lb6diT9QZK7q70BzR1ogOCniD6BVw_7ZHuG48p_nPir0WC9JknvDPZed0XkYk17MHt9HZtJv9upARY9nDL6pTzLpHxslQVbtD4X5w/s16000/profile.jpg",
      alt: "agricreations  gallery moovendhan",
    },
  ];
  const gallerySecondRow = [
    {
      src: "https://blogger.googleusercontent.com/img/a/AVvXsEiabOqWqzTxIX_Q28LC4mYioRbigQdKDysM2FDjTRvp4qMTnEW1zziQQVgjUNzI9vpquHjGjth2ZHB2o6ODSLXthbIIaaGvQqayUW_LD0CDh7iNLKEPieevnZIWLF9PzOU9KEbnAr1j9cxcSsFq_qRe_Ax_hJB2pN_mMOKguUChnvLITU9cEU7cCKcIRw=s16000",
      alt: "agricreations moovendhan images",
    },
    {
      src: "https://lh3.googleusercontent.com/-cGOwoF6Trd8/YQoPYsoJkjI/AAAAAAAACJ8/mdMDGDQjeIwHEboT3R3i5NYzVR0MhkOhgCLcBGAsYHQ/24%2Bagri.jpg",
      alt: "agricreations moovendhan images birthday",
    },
    {
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0cFscbx6o8HL3yoswa-sm23u9kKmyQSgZMbQGyv630BKbz5Zluze4fgJE-XM0pm9IyrxyoQkfdxNpWVFrCqRXPC2a-quhRP0aFmrq6fN3bd05_7x-S3IonZTFVhrW-LV56-UhDEzG45P2kh6NbjyRrwy5C3Km7DvOU8xZPNdBTN9Igtag938uWpzlNA/s1600/moovendhan%20chandrumech.jpg",
      alt: "agricreations moovendhan images with chandru",
    },
    {
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhi9MEetj-nq4oOh47hg1uPD1_psEaNTq7HMiT4kCkgSvgyWVK-KgSvQ5DINO53cgSGb67rL95XO4jgPu2bp2jwoq-C2h1BmZqM13WLGDjbz93OffGmOd6N1q1eMxVLQIgChM2WDiHUIe_wy_JB1ZdNkbEGCu-_QlYiGQal3tv04lK525O7JP-y2Wgb7A/s1600/moovendhan%20agricreations%20moneyheist.jpg",
      alt: "agricreations moovendhan images money heist",
    },
    {
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhz_P6ojNPqjOBJemCBEW5HXsk6XH3Usua6lNqzeoRZIrg4ArwC9wOShel4wXSA0FP1xN4EV_5DRblNH9IF9SHG3-S2gG4bokNbrBDAaT6zEkR1W1ME9h6nNlSkN_6SqluF-QFeYs5iZtUqQxQdWDlUXBjhPPtZsPcDsDUis4dmY3X5nSsnT12Zg6Mmmw/s16000/kalthirampet%20guys%20(1).jpg",
      alt: "agricreations moovendhan images kalthirampet",
    },
  ];
  const galleryThirdRow = [
    {src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUATCyuK7Pk_2WRuDPxNkXCK0I5WXFmeGNPSTrI3vrlFyedcFffYlx_eEp5BXTtqCDt2hSjFfEV-PvS6DDAUezVvtSOH8-SV7GCRWPP6bJEyFtkPqzrLJjmrzac1BZz_xYHay19Fz0zc8jNBaeQUsncF3D6fwZEuN6ViYPgRHflMaN3G07oG-_FBfbXA/s960/moovenedhan%20agricreations%20image%20logo.jpg", alt:"agricreations moovendhan image"},
    {src:"https://lh3.googleusercontent.com/-N7KgnsELdKs/YQoPRfgh5DI/AAAAAAAACJ4/f3immAZBIqstEqIX_R8J3d_1fpCOcOvywCLcBGAsYHQ/fire%2Bin%2Bhand%2Bfinal%2Boutpput.jpg", alt:"agricreations moovendhan image fire posters"},
    {src:"https://lh3.googleusercontent.com/-ta09F8aJub8/YQoPcEuNMTI/AAAAAAAACKE/6j0-KaiJjp4Que-_49P-uL_DAjgovEIUQCLcBGAsYHQ/moovendhan%2Bagriculture.jpg", alt:"agricreations moovendhan images"},
    {src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKUCQ-P1kX44mwn1gutpz9CY1S9l0upEg8TKmv1SvQq_K52hz-w6d2kcnyQUiu_D_rRqXx82WDvtY3zFKBk3vKincmUhfM00uXYEfJvgf_4kdSze_D0C61fwzBovH40iTaljnPa12jUW45tlWX9n6rYd2yaM-o-mC3gJaB-1kRPIYAuPU30tjAUf3iUw/s1600/moovendha%20agricreations%20pubg%20poster%20editing.jpg", alt:"agricreations moovendhan pubg posters"},
    {src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDeFl3EAuf3_9qejl9keScIJPmlnKMwAsK2l7zMAYDBGVdwzoxQBSqQZE1Ug83V4qiXeczZm4AyF1ijEprsZPUdGVslSiEzL1IaIK8CVBQjFpN15tCPcXHuxS0ANPLqaB_d71lu5IKZOSt4-WtD5_Ue_QSbCXMkAXx2q3LNwI_jNAryPGa_G9hwwL9wA/s1600/moovendhan%20agricreatins%20pubg%20poster.jpg", alt:"agricreations moovendhan pubg posters"},
    {src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8ruUdkR73uXRTHl3bBHM8KuubztoUgYoYG88VCKnznmsZpNB-gqiXZhWMEdz2u1QJZnKvNVOjLxgJ6yxMpf2U8CGqJZ7qyftTas9RraTtSKX0eTvlakfECwOkdcmgs_7jVQYMqhu4SR6ll5C-YS5JD9ukNocMc1_8vO-BVEQBo-VOM36Fne36uAX3bQ/s1600/moovendhan%20agricreations%20poster%20gta.jpg", alt:"agricreations moovendhan poster grand theft auto"},
    {src:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiR6onfBkyD9mD1coMaSLBrkuYw5GNSXDO-G4oGrd3tMSD3EONeQ9YrtBHgEH2rRtrf9tsHwT7Gy0k0vQbKRJTe02GL_qBJqGLOrFFhJVsbQ2BV_tRftRsijRRMC9RywUR0KU0TUEukuqC7gKJi16gLNkBvwu4Zos3BNnqUx0ohw99ytC936J6gQZXGLA/s16000/kalthirampet%20guys%20(3).jpg", alt:"agricreations moovendhan kalthirampet"},
  ]
  return (
    <>
      <div class="container-fluid">
        <div class="row mt-3">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <GallerVid id="820074522?h=31166c451a" style={village} />
            <GallerVid id="820078116?h=bec42926ac" style={myVideo} />
            <script src="https://player.vimeo.com/api/player.js"></script>
            {galleryFirstRow.map((values) => {
              return <GalleryImg src={values.src} alt={values.alt} />;
            })}
          </div>
          <div class="col-lg-4 mb-4 mb-lg-0">
            {gallerySecondRow.map((send) => {
              return <GalleryImg src={send.src} alt={send.alt} />;
            })}
          </div>
          <div class="col-lg-4 mb-4 mb-lg-0">
          {galleryThirdRow.map((send) => {
              return <GalleryImg src={send.src} alt={send.alt} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

function GalleryImg(get) {
  return (
    <img
      src={get.src}
      class="w-100 shadow-1-strong rounded mb-4"
      alt={get.alt}
    />
  );
}
function GallerVid(get) {
  const src = `https://player.vimeo.com/video/${get.id};badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=5847&amp;autoplay=true&amp;loop=true`;

  return (
    <>
      <div
        style={get.style}
        class="bg-light w-100 shadow-1-strong rounded mb-4"
      >
        <iframe
          src={src}
          frameborder="0"
          allow="fullscreen; picture-in-picture"
          allowfullscreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title="My Vimeo Video"
        ></iframe>
      </div>
    </>
  );
}
export default Gallery;
