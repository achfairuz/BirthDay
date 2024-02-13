// trigger to play music in the background with sweetalert
window.addEventListener("load", () => {
  Swal.fire({
    title: "Do you want to play music in the background?",
    // text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector(".song").play();
      animationTimeline();
    } else {
      animationTimeline();
    }
  });
});

// animation timeline
const animationTimeline = () => {
  // Memecah karakter dalam elemen dengan class "hbd-chatbox" dan "wish-hbd" menjadi elemen-elemen <span>
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  // Mengatur transisi animasi untuk teks ide
  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  // Mengatur transisi animasi untuk meninggalkan teks ide
  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  // timeline
  const tl = new TimelineMax(); // Membuat objek timeline dengan GSAP

  // Animasi berbagai elemen HTML menggunakan GSAP
  tl.to(".thanks", 0.6, {
    visibility: "hidden",
  });
  tl.to(".container", 0.6, {
    visibility: "visible",
  })

    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
      visibility: "visible",
    })
    .to(".one", 0.8, {
      scale: 0.2,
      opacity: 0,
      y: -10,
      delay: 3,
    })

    .from(".two", 0.7, {
      opacity: 0,
      y: 10,
      visibility: "visible",
    })

    .to(".two", 0.8, {
      scale: 0.2,
      opacity: 0,
      y: -10,
      delay: 3,
    })
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
      visibility: "visible",
    })

    .to(".three", 0.8, {
      scale: 0.2,
      opacity: 0,
      y: -10,
      delay: 3,
    })

    .from(".ucapan", 0.8, {
      opacity: 0,
      y: 10,
    })
    .from(".name", 0.8, {
      opacity: 0,
      y: 10,
    })

    .from(".date", 0.8, {
      opacity: 0,
      y: 10,
    })

    .to(".ucapan", 0.8, {
      scale: 0.2,
      opacity: 0,
      y: -10,
      delay: 2,
    })

    .to(".name", 0.8, {
      scale: 0.2,
      opacity: 0,
      y: -10,
    })
    .to(".date", 0.8, {
      scale: 0.2,
      opacity: 0,
      y: -10,
    })

    .from(".title-five", 0.8, {
      opacity: 0,
      y: 10,
      visibility: "visible",
    })

    .from(".text-box", 0.4, {
      scale: 0.2,
      opacity: 0,
    })

    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })

    .staggerTo(
      ".hbd-chatbox span",
      1.5,
      {
        visibility: "visible",
      },
      0.08
    )

    .to(
      ".fake-btn",
      0.1,
      {
        backgroundColor: "rgba(0, 76, 116, 1)",
      },
      "=+2"
    )

    .to(
      ".five",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=1"
    )

    .from(".idea-0", 0.7, ideaTextTrans)
    .to(".idea-0", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=1.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=1.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1.5"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )

    .from(
      ".profile-picture",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".nine svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".seven", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".ten p", 1, ideaTextTrans, 1.2)
    .staggerFrom(".ten button", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    )

    .to(".last-smile", 0.5, {
      rotation: 90,
    });

  // Memulai ulang animasi saat tombol "replay" ditekan
  const replyBtn = document.getElementById("comeback");
  replyBtn.addEventListener("click", () => {
    tl.restart(); // Memulai ulang animasi
  });

  const no = document.getElementById("notagain");
  no.addEventListener("click", () => {
    tl.to(".container", 0.6, {
      visibility: "visible",
    })
      .to(".ten", 0.5, {
        opacity: 0,
        y: 30,
        zIndex: "-1",
      })
      .from(".thanks", 0.7, {
        opacity: 0,
        y: 10,
        visibility: "visible",
      });
  });
};
