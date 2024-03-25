<!-- @format -->

<template>
  <div class="card-container">
    <div v-for="el in 2" :key="el" class="cardBox">
      <div v-for="(card, index) in cards[el - 1]" :key="index" :class="{ card: true, flipped: card.flipped,cardItem:true }" @click="flipCard(el - 1, index)">
        <div class="front">
          <img :src="'https://picsum.photos/180/250/?' + 'random=' + Math.random()" onerror="this.src='https://picsum.photos/180/250/'" />
        </div>
        <div class="back">
          <p>{{ card.greeting }}</p>
        </div>
      </div>
    </div>
    <p class="img_describe">点击卡片抽取祝福...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        [
          { greeting: "鹏程万里", flipped: false },
          { greeting: "日进斗金", flipped: false },
          { greeting: "时运亨通", flipped: false },
          { greeting: "锦绣前程", flipped: false },
          { greeting: "财源滚滚", flipped: false },
        ],
        [
          { greeting: "恭喜发财", flipped: false },
          { greeting: "官运亨通", flipped: false },
          { greeting: "笑口常开", flipped: false },
          { greeting: "紫气东来", flipped: false },
          { greeting: "心想事成", flipped: false },
        ],
      ],
    };
  },
  methods: {
    flipCard(el, index) {
      this.cards[el][index].flipped = !this.cards[el][index].flipped;
    },
  },
};
</script>

<style scoped>
.card-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
}
.cardBox {
  width: 100%;
  height: 50vh;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
}
.cardItem{
  transition: transform 0.1s;
  transform: translateY(0px);
}
.cardItem:hover{
  transform: translateY(5px);
}
.card {
  width: 180px;
  height: 250px;
  margin: 10px;
  perspective: 1000px;
  cursor: pointer;
  transition: transform 0.6s;
}

.flipped .front {
  transform: rotateY(180deg);
}

.flipped .back {
  transform: rotateY(0deg);
}

.front,
.back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
img {
  border-radius: 10px;
  width: 100%;
  height: 100%;
}
.front {
  background-color: #3498db;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(0deg);
  transition: transform 0.6s;
}

.back {
  background-color: #e74c3c;
  font-size: 4vw;
  color: #fff;
  text-shadow: 1px 1px #000;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  transform: rotateY(-180deg);
  transition: transform 0.6s;
}
.img_describe {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 18px;
  color: #333;
  font-weight: bold;
  text-shadow: 1px 1px #666;
}
</style>
