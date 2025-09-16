<template>
  <div class="card">
    <div class="card-top">
      <div class="avatar"></div>
      <div class="user-info">
        <div class="handle"><p>@LittlePotas <img src="/img/verifiedIcon.png" alt=""></p></div>
            <div class="username">
          <div class="name">Kaua Martins Barros | 1 hora atrás</div>
        </div>
      </div>
    </div>

    <div class="card-content">
      <div class="images">
        <div class="img-placeholder"></div>
      </div>
    </div>

    <div class="card-actions">
      <div class="icons">
        <div class="icon"></div>
        <div class="icon"></div>
        <div class="icon"></div>
      </div>
      <div class="save">
      </div>
    </div>

    <div class="card-bottom">
      <div class="comment-avatar"></div>
      <div class="input-placeholder"></div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ff0000;
  border-radius: 10px;
  background: #fff;
  width: 100%;       
  margin: 0 auto 20px auto;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  overflow: hidden;
  font-family: Arial, sans-serif;
  height: 500px;
}

.card-top {
  display: grid;
  align-items: center;
  padding: 15px;
  gap: 10px;
  grid-template-columns: 1fr 20fr;
}

.avatar {
  width: 55px;
  height: 55px;
  border-radius: 10px;
  border: 1px solid black;
}

.user-info {
  display: grid;
  width: 57%;
  height: 100%;
  grid-template-rows: 1fr 1fr;
  gap: 5px;


}
.username {
  align-items: start;
  margin-top: 4px;
  padding: 0; }
.name, .time, .handle {
  height: 10px;
  border-radius: 10px;
}

.name { 
  width: 100%; 
  }
.dot { 
  width: 6px; 
  height: 6px; 
  }


.handle {
  display: flex;
  align-items: center;  
  color: 8E8E8E;
  font-size: 100%;
  width: 100%;
  height: 100%;
  margin-top: 2px;
}

.handle p {
  display: flex;
  align-items: center;
}

.handle img {
  width: 18px;          
  height: 18px;
}


.images {
  display: flex;
  gap: 4px;
  padding: 15px;
}

.img-placeholder {
  flex: 1;
  height: 300px;
  border: 2px solid #bbb;
  border-radius: 10px;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 15px;
}

.icons {
  display: flex;
  gap: 15px;
}

.icon {
  width: 20px;
  height: 20px;
  border: 2px solid #bbb;
  border-radius: 10px;
}

.save {
  width: 15%;
  height: 22px;
  border: 2px solid #bbb;
  border-radius: 10px;
}

.card-bottom {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-top: 1px solid #eee;
  gap: 10px;
}


.comment-avatar {
  width: 35px;
  height: 35px;
  border-radius: 10px;
  border: 2px solid #bbb;
}

.input-placeholder {
  flex: 1;
  height: 25px;
  border: 1px solid #bbb;
  border-radius: 10px;
}
</style>
