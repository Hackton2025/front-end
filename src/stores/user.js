import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import api from "@/plugins/axios";

export const useUserStore = defineStore("user", () => {
    const usuario = reactive({
        email: '',
        fullname: '',
        name: '',
        phone: '',
        birthday: '',
        password: '',
        accept_notification: false,
        is_master: false,
    });

    const usuarioLogin = reactive({
        email: '',
        password: '',
    });
    const confirmPassword = ref('');




    async function createAccount() {
        if (usuario.password !== confirmPassword.value) {
            alert('As senhas não coincidem!');
            return;
        }

        try {
            const response = await api.post('/users/', usuario);
            console.log('Usuário cadastrado:', response.data);
            alert('Conta criada com sucesso!');
        } catch (error) {
            console.error('Erro ao criar conta:', error);
            alert('Erro ao criar conta. Tente novamente.');
        }
    }


    const token = ref(localStorage.getItem('token') || null);

    async function loginUser() {
        try {
            const response = await api.post('/users/login/', {
                email: usuarioLogin.email,
                password: usuarioLogin.password,
            });

            const { token: userToken, user } = response.data;

            token.value = userToken;
            localStorage.setItem('token', userToken);

            usuario.email = user.email;
            usuario.fullname = user.fullname;

            console.log('Login bem-sucedido:', response.data);
            alert('Login bem-sucedido!');
            window.location.href = '/home';
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
        }
    }
    return { usuario, confirmPassword, createAccount, usuarioLogin, loginUser, token };
});