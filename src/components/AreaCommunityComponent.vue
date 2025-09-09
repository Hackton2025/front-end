<template>
    <main>
        <section>
                <div class="corDiferente">
                    <h1>Infromática para a Internet</h1>
                </div>
            <div class="conteudo">

                <div class="lado">
                    <img src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80" alt="imagem">
                     <h2>@Informática</h2>
                </div>

                <div class="informacoes">

                    <div class="seguidores">
                        <p>Seguidores</p>
                        <p>205</p>
                    </div>

                    <div class="seguindo">
                        <p>Seguindo</p>
                        <p>205</p>

                    </div>

                    <div class="publicacoes">
                        <p>Publicações</p>
                        <p>205</p>
                    </div>
                </div>

                <div class="descricao">
                    <p>
                        💻 Bem-vindo à comunidade do curso Técnico em Informática para a Internet! Este é um espaço de
                        integração entre estudantes, professores e colaboradores do curso. Aqui você encontrará
                        conteúdos relevantes, avisos importantes, eventos, oportunidades e discussões sobre
                        desenvolvimento web, programação, redes, design digital, e muito mais.
                    </p>
                </div>

                <button>Entrar na comunidade</button>
            </div>
        </section>
    </main>
</template>

<style scoped>
section{
    margin-right: 6vw;
}

.corDiferente{
    background-color: #0A7C00;
    padding: 6vw 0 0.5vw 7vw;
    color: white;
    font-size: 1.7rem;
    border-radius: 1vw 1vw 0 0;
    position: relative;
}
.corDiferente h1{
    margin-left: 3.8vw;
    font-weight: 600;
}
.lado h2{
    position: absolute;
    margin: -5.8vw 0 0 10.8vw;
    font-size: 0.9rem;
    color: #00000085;
}
img{
    position: absolute;
    border-radius: 50%;
    width: 9vw;
    height: 9vw;
    object-fit: cover;
    top: -5vw;
    right: 58.9vw;
}
.conteudo{
    background-color: white;
    border-radius: 0 0 1vw 1vw;
    padding: 6vw 0 2vw 0;
    position: relative;
}
.descricao{
    background-color: #d3d3d388;
    margin: 1vw 2vw 2vw 2vw;
    font-size: 1.05rem;
    padding: 2vw;
    border-radius: 10px;
    text-align: justify;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
    line-height: 130%;
    justify-content: space-around;
}
.informacoes{
    display: flex;
    justify-content: right;
    text-align: center;
    margin-top: 1vw;
}
.informacoes div{
    margin: -4vw 1vw 2vw 4vw;
    border-right: 1px solid black;
    padding-right: 6.5vw;
}
.informacoes div:last-child{
    border-right: none;
}
.informacoes p{
    margin-top: 0.3vw;
}
button{
    display: block;
    margin: 0 auto;
    background-color: #0A7C00;
    border: none;
    font-size: 1.02rem;
    color: white;
    padding: 6px 30px;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.2s ease
}
button:hover{
    background-color:  #086600f5;
    cursor: pointer;
    transform: scale(1.01);
}
</style>