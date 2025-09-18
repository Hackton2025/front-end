<template>
  <main>
    <section class="comunidades">
      <div
        v-for="comunidade in comunidades"
        :key="comunidade.uuid"
        class="comunidade-item"
      >
        <span>{{ comunidade.name }}</span>

        <!-- Botão de excluir (ícone lixeira) -->
        <button class="delete-btn" @click="abrirModal(comunidade)">
          <span class="mdi mdi-delete"></span>
        </button>
      </div>
    </section>

    <!-- Modal de exclusão -->
    <div v-if="showExcluirModal" class="modal-overlay">
      <div class="modal-content">
        <h3>Excluir Comunidade</h3>
        <p>
          Tem certeza que deseja excluir a comunidade
          <strong>{{ comunidadeSelecionada?.name }}</strong>?
        </p>

        <div class="modal-actions">
          <button class="btn cancelar" @click="showExcluirModal = false">
            Cancelar
          </button>
          <button class="btn excluir" @click="excluirComunidade">
            Excluir
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import api from "@/plugins/axios";

export default {
  name: "comunidadesComponent",
  data() {
    return {
      comunidades: [],
      showExcluirModal: false,
      comunidadeSelecionada: null,
    };
  },
  methods: {
    async fetchComunidades() {
      try {
        const res = await api.get("/api/community/");
        this.comunidades = res.data;
      } catch (error) {
        console.error("Erro ao buscar comunidades", error);
      }
    },
    abrirModal(comunidade) {
      this.comunidadeSelecionada = comunidade;
      this.showExcluirModal = true;
    },
    async excluirComunidade() {
      try {
       await api.delete(`/api/comunidades/${this.comunidadeSelecionada.uuid}/`);
        this.comunidades = this.comunidades.filter(
          (c) => c.uuid !== this.comunidadeSelecionada.uuid
        );
        this.showExcluirModal = false;
      } catch (error) {
        console.error("Erro ao excluir comunidade", error);
      }
    },
  },
  mounted() {
    this.fetchComunidades();
  },
};
</script>

<style scoped>
.comunidade-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f5f5;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 6px;
}

.delete-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  color: #e63946;
  font-size: 18px;
}

.delete-btn:hover {
  color: #c53030;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  text-align: center;
}

.modal-actions {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.btn {
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.cancelar {
  background: #ccc;
}

.excluir {
  background: #e63946;
  color: white;
}
</style>
