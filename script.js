function christmasCountdown() {
    const christmasDate = new Date('December 25, 2025 00:00');
    const now = new Date();
    const diff = christmasDate - now;
    
    const msInSecond = 1000; //количество милесекунд в минуте
    const msInMinutes = 60 * 1000; //количество милесекунд в часе
    const msInHours = 60 * 60 * 1000; //количество милесекунд в часе
    const msInDays = 24 * 60 * 60 * 1000; //количество милесекунд в дне

    const displayDay = Math.floor(diff / msInDays); //константа для показа сколько осталось дней до рождества, Math.floor для того, что бы округлить число.
    document.querySelector('.days').textContent = displayDay; //помещаем значение дисплейдэйс в класс дэйс.

    const displayHours = Math.floor((diff % msInDays) / msInHours); //Тут вычисляем остаток от дней с помощью "%", и делим на часы, что бы узнать сколько осталось часов.
    document.querySelector('.hours').textContent = displayHours;

    const displayMinute = Math.floor((diff % msInHours) / msInMinutes);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySeconds = Math.floor((diff % msInMinutes) / msInSecond)
    document.querySelector('.seconds').textContent = displaySeconds;

    if (diff <= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timerID); //функция для того, что бы джаваскрипт перестал считать минуты секунды...., не смотря на то что отображается 0 везде.
        merryChristmas() //вызываем функцию, которую написали ниже тут, чтобы когда таймер обнулился, сменилась надпись.
    }
    console.log(diff)
}

let timerID = setInterval(christmasCountdown, 1000); // setInterval вызывает функцию через определенный интервал времени, в скобках сначала пишется название функции, через запятую пишем время в миллисекундах. setTimeout в отличае от этой функции вызывает функцию только 1 раз.  !! Помещаем эту функцию в переменную, для того, что бы в дальнейшем задать стоп интервала выше.

function merryChristmas() {
    const heading = document.querySelector('h1');
    heading.textContent = 'Merry Christmas! HO-HO-HO!';
    heading.classList.add('red');
}

const button = document.querySelector('#myButton');
button.addEventListener('click', function() {
    document.querySelector('#myAudio').play(); //функция плей запускает воспроизведение.
})

const pause = document.querySelector('#buttonPause');
pause.addEventListener('click', function() {
    document.querySelector('#myAudio').pause();
})



particlesJS("particles-js", {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 631.3280775270874
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 1,
          sync: false
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 0.5
          }
        },
        bubble: {
          distance: 400,
          size: 4,
          duration: 0.3,
          opacity: 1,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  
