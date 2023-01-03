let audiowork = new Audio("./mp3/peasantwhat3.mp3");
let audiochil = new Audio("./mp3/gruntherodies1.mp3");
audiowork.volume = 0.1;
audiochil.volume = 0.1;

const App = {
  data() {
    return {
      workTime: 300,
      chilTime: 60,
      timer: null,
      time: 0,
      flag: false,
    };
  },

  //   mounted() {
  //     this.startClock();
  //   },
  destroyed() {
    this.stopClock();
  },
  computed: {
    prettyTime() {
      let workTime = this.workTime / 60;
      let minutes = parseInt(workTime);
      let secondes = Math.round((workTime - minutes) * 60);
      if (secondes < 10) {
        return minutes + ":" + "0" + secondes;
      } else {
        return minutes + ":" + secondes;
      }
    },
    prettyTime1() {
      let chilTime = this.chilTime / 60;
      let minutes = parseInt(chilTime);
      let secondes = Math.round((chilTime - minutes) * 60);
      if (secondes < 10) {
        return minutes + ":" + "0" + secondes;
      } else {
        return minutes + ":" + secondes;
      }
    },
  },
  methods: {
    startClock() {
      this.flag = true;
      this.timer = setInterval(() => {
        this.workTime--;
      }, 1000);
    },
    startchillClock() {
      this.timer = setInterval(() => {
        this.chilTime--;
      }, 1000);
    },
    stopClock() {
      clearTimeout(this.timer);
    },
  },
  watch: {
    workTime(time) {
      if (time === 0) {
        this.stopClock();
        this.startchillClock();
        audiochil.play();
      }
    },
    chilTime(time) {
      if (time === 0) {
        this.stopClock();
        audiowork.play();
      }
    },
  },
};

Vue.createApp(App).mount("#App");

function changeColor(el) {
  document.querySelector(".form-control").style.color = el.value;
}
