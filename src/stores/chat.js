// src/stores/chat.js
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import io from 'socket.io-client'; // Dependendo do seu backend, pode ser diferente

// URL do servidor WebSocket
const SOCKET_URL = 'http://localhost:8000'; // Substitua pela URL do seu servidor WebSocket

export const useChatStore = defineStore('chat', () => {
  // Estado do chat
  const messages = ref([]);  // Mensagens do chat
  const currentChat = ref(null); // A sala de chat atual
  const socket = ref(null); // Conexão WebSocket

  // Função para conectar ao WebSocket
  const connectSocket = () => {
    socket.value = io(SOCKET_URL, {
      transports: ['websocket'],
    });

    // Quando uma nova mensagem é recebida, adiciona ao estado
    socket.value.on('new_message', (message) => {
      messages.value.push(message);
    });

    // Quando a conexão WebSocket for aberta
    socket.value.on('connect', () => {
      console.log('Conectado ao WebSocket');
    });

    // Lidar com desconexão
    socket.value.on('disconnect', () => {
      console.log('Desconectado do WebSocket');
    });
  };

  // Função para enviar mensagem
  const sendMessage = (messageContent) => {
    if (!messageContent.trim() || !currentChat.value) return;

    // Enviar a mensagem para o servidor WebSocket
    const message = {
      content: messageContent,
      chatId: currentChat.value.uuid,
      senderUuid: currentChat.value.profile1.uuid, // Ajuste conforme necessário
    };

    // Emite a mensagem para o servidor
    socket.value.emit('send_message', message);

    // Adiciona a mensagem ao estado local para renderizar imediatamente
    messages.value.push({
      ...message,
      sender: { name: 'Você', uuid: message.senderUuid },
      timestamp: new Date().toISOString(),
    });
  };

  // Função para selecionar um chat
  const selectChat = (chat) => {
    currentChat.value = chat;
    messages.value = []; // Limpa as mensagens anteriores quando um novo chat é selecionado
    socket.value.emit('join_chat', chat.uuid); // Envia um evento para o servidor para juntar à sala de chat
  };

  // Função para desconectar do WebSocket
  const disconnectSocket = () => {
    if (socket.value) {
      socket.value.disconnect();
    }
  };

  // Função para carregar as mensagens ao selecionar um chat
  const loadMessages = (chat) => {
    // Aqui você pode fazer uma chamada para a API para buscar as mensagens do servidor
    // Exemplo fictício: API.get(`/chats/${chat.uuid}/messages`)
    // .then(response => {
    //   messages.value = response.data;
    // });

    // Para simulação, você pode definir mensagens estáticas inicialmente:
    messages.value = [
      {
        sender: { name: 'Alice', uuid: '123' },
        content: 'Oi, como você está?',
        timestamp: '2023-09-16T10:00:00Z',
      },
      {
        sender: { name: 'Você', uuid: '456' },
        content: 'Oi, estou bem, e você?',
        timestamp: '2023-09-16T10:01:00Z',
      },
    ];
  };

  // Função para formatar as mensagens
  const formatMessage = (message) => {
    return {
      ...message,
      sender: message.sender || { name: 'Desconhecido', uuid: '0' },
    };
  };

  // Assista o estado de `currentChat` para carregar mensagens
  watch(currentChat, (newChat) => {
    if (newChat) {
      loadMessages(newChat);
    }
  });

  // Função de inicialização do WebSocket
  const initSocket = () => {
    connectSocket();
  };

  // Desconectar do WebSocket ao destruir o componente
  const cleanupSocket = () => {
    disconnectSocket();
  };

  return {
    messages,
    currentChat,
    socket,
    sendMessage,
    selectChat,
    initSocket,
    cleanupSocket,
  };
});
