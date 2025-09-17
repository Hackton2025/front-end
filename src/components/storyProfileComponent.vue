<script setup>
import { ref, computed } from 'vue'

const items = ref([
  { id: 1, img: "/img/motomoto.png", name: 1 },
  { id: 2, img: "/img/motomoto.png", name: 2 },
  { id: 3, img: "/img/motomoto.png", name: 3 },
  { id: 4, img: "/img/motomoto.png", name: 4 },
  { id: 5, img: "/img/motomoto.png", name: 5 },
  { id: 6, img: "/img/motomoto.png", name: 6 },
  { id: 7, img: "/img/motomoto.png", name: 7 },
  { id: 8, img: "/img/motomoto.png", name: 8 },
  { id: 9, img: "/img/motomoto.png", name: 9 },
  { id: 10, img: "/img/motomoto.png", name: 10 },
])

const visibleCount = 5
const itemWidth = 80
const gap = 40
const step = itemWidth + gap

const currentIndex = ref(0)
const maxIndex = computed(() => Math.max(0, items.value.length - visibleCount))

const containerWidth = computed(() => `${visibleCount * itemWidth + (visibleCount - 1) * gap}px`)
const translate = computed(() => `translateX(-${currentIndex.value * step}px)`)

const scrollLeft = () => {
  currentIndex.value = Math.max(0, currentIndex.value - 1)
}

const scrollRight = () => {
  currentIndex.value = Math.min(maxIndex.value, currentIndex.value + 1)
}
</script>

<template>
  <div class="carousel-wrapper">
    <button class="nav-btn" @click="scrollLeft" :disabled="currentIndex === 0">
      <img src="/img/arrowRight.png" alt="Scroll left" />
    </button>

    <div class="carousel" :style="{ width: containerWidth }">
      <div class="carousel-inner" :style="{ transform: translate }">
        <div v-for="item in items" :key="item.id" class="bubble">
          <img :src="item.img" />
        </div>
      </div>
    </div>

    <button class="nav-btn" @click="scrollRight" :disabled="currentIndex === maxIndex">
      <img src="/img/arrowLeft.png" alt="Scroll right" />
    </button>
  </div>
</template>

<style scoped>
.carousel-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}
.nav-btn:disabled {
  opacity: 0.3;
  cursor: default;
}

.nav-btn img {
  width: 30px;
  height: 30px;
}

.carousel {
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  gap: 40px;
  transition: transform 0.45s cubic-bezier(.22,.9,.25,1);
  will-change: transform;
}

.bubble {
  flex: 0 0 auto;
  width: 80px;
  height: 80px;
  border-radius: 12px;
  border: 3px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
}

.bubble img {
  width: 92%;
  height: 92%;


}
</style>
