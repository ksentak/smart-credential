<template>
  <div class="container">
    <h2>Smart Credential</h2>
    <div class="result-container">
      <span id="result"></span>
      <button class="btn" id="clipboard">
        <i class="fa fa-clipboard"></i>
      </button>
    </div>
    <div class="settings">
      <div class="setting">
        <label>Password length</label>
        <input type="number" id="length" min="4" max="20" value="12" />
      </div>
      <div class="setting">
        <label>Include uppercase letters</label>
        <input type="checkbox" id="uppercase" checked />
      </div>
      <div class="setting">
        <label>Include lowercase letters</label>
        <input type="checkbox" id="lowercase" checked />
      </div>
      <div class="setting">
        <label>Include numbers</label>
        <input type="checkbox" id="numbers" checked />
      </div>
      <div class="setting">
        <label>Include symbols</label>
        <input type="checkbox" id="symbols" checked />
      </div>
    </div>
    <button class="btn btn-large" id="generate">Generate password</button>
  </div>
</template>

<script>
export default {
  name: 'PassGenerator'
};
</script>

<style>
.container {
  background-color: #6094d2;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.2);
  padding: 20px;
  width: 350px;
  max-width: 100%;
}

.result-container {
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 12px 10px;
  height: 50px;
  width: 100%;
}

.result-container #result {
  word-wrap: break-word;
  max-width: calc(100% - 40px);
}

.result-container .btn {
  font-size: 20px;
  position: absolute;
  top: 5px;
  right: 5px;
  height: 40px;
  width: 40px;
}

.btn {
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 12px;
  background-color: #3d75c2;
}

.btn-large {
  display: block;
  width: 100%;
}

.setting {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
}

@media screen and (max-width: 400px) {
  .result-container {
    font-size: 14px;
  }
}
</style>
