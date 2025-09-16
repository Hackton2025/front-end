<template>
  <div v-if="currentChat" class="chat-container">
    <div class="messages-list">
      <div v-for="message in messages" :key="message.timestamp" class="message-item">
        <strong>{{ message.sender.name }}:</strong>
        <p>{{ message.content }}</p>
        <small>{{ formatDate(message.timestamp) }}</small>
      </div>
    </div>

    <div class="input-container">
      <input v-model="messageContent" @keyup.enter="sendMessage" placeholder="Digite sua mensagem" />
      <button @click="sendMessage">Enviar</button>
    </div>
  </div>

  <div v-else>
    <p>Selecione um chat para começar a conversar.</p>
  </div>
</template>

<script setup>
import { useChatStore } from '@/stores/chat';
import { onMounted, onBeforeUnmount, ref } from 'vue';

const chatStore = useChatStore();
const messageContent = ref('');

// Quando o componente for montado, inicializa a conexão WebSocket
onMounted(() => {
  chatStore.initSocket();
});

// Limpa a conexão WebSocket ao destruir o componente
onBeforeUnmount(() => {
  chatStore.cleanupSocket();
});

// Função para enviar a mensagem
const sendMessage = () => {
  if (messageContent.value.trim()) {
    chatStore.sendMessage(messageContent.value);
    messageContent.value = ''; // Limpa o campo após o envio
  }
};

// Formatar a data da mensagem
const formatDate = (timestamp) => {
  return new Date(timestamp).toLocaleString();
};
</script>

<style scoped>
.chat-container {
  max-width: 600px;
  margin: 0 auto;
}

.messages-list {
  max-height: 400px;
  overflow-y: auto;
}

.message-item {
  margin-bottom: 10px;
}

.input-container {
  display: flex;
  margin-top: 20px;
}

input {
  flex-grow: 1;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
