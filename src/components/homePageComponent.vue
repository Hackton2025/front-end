<script setup>
import { ref } from 'vue'

import headerComponent from './headerComponent.vue'
import instituicaoComponent from './instituicaoComponent.vue'
import comunidadesComponent from './comunidadesComponent.vue'
import configPanelComponent from './configPanelComponent.vue'
import postComponentFeed from './postComponentFeed.vue'
import thinkingFeed from './ThinkingFeed.vue'
import nowFeedComponent from './nowFeedCompoent.vue'
import storyProfileComponent from './storyProfileComponent.vue'

const mostrarConfig = ref(false)
const isOn = ref(false)
</script>

<template>
  <header-component />
  <nav>
    <div class="left">
      <instituicao-component />
      <comunidades-component />
    </div>
    <div class="center">
        <story-profile-component />
      <thinking-feed />
      <post-component-feed />
    </div>
    <div class="right">
      <now-feed-component />
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: grid;
  grid-template-columns: 1fr 4fr 1.6fr;
  gap: 0px; 
  padding: 10px;
  align-items: start;
  margin-top: 10px;
  margin-left: 0;
}

.left, .center, .right {
  display: flex;
  flex-direction: column;
  gap: 15px;

}
.center {
  border: 1px solid white;
  height: 100%
}
.left, .right {
  border: 1px solid black;
}
.left {
  align-items: start;
}


.center {
    align-items: center;
    width: 98%;
    
    }
</style>
