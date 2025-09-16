// stores/ui.js
import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    avisoSaidaAtivo: false
  }),

  actions: {
    ativarAvisoSaida() {
      if (!this.avisoSaidaAtivo) {
        window.addEventListener('beforeunload', this._handleBeforeUnload)
        this.avisoSaidaAtivo = true
      }
    },

    desativarAvisoSaida() {
      if (this.avisoSaidaAtivo) {
        window.removeEventListener('beforeunload', this._handleBeforeUnload)
        this.avisoSaidaAtivo = false
      }
    },

    _handleBeforeUnload(event) {
      event.preventDefault()
      event.returnValue = ''
    }
  }
})

