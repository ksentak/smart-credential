<template>
  <div class="container">
    <h2>Smart Credential</h2>
    <div class="result-container">
      <span id="result">{{ generatedVal }}</span>
      <button class="btn" id="clipboard" @click="copy()">
        <i class="fa fa-clipboard"></i>
      </button>
    </div>
    <div class="settings">
      <div class="setting">
        <label>Password length</label>
        <input type="number" id="length" min="4" max="20" v-model="length" />
      </div>
      <div class="setting">
        <label>Include uppercase letters</label>
        <input type="checkbox" id="uppercase" checked v-model="hasUpper" />
      </div>
      <div class="setting">
        <label>Include lowercase letters</label>
        <input type="checkbox" id="lowercase" checked v-model="hasLower" />
      </div>
      <div class="setting">
        <label>Include numbers</label>
        <input type="checkbox" id="numbers" checked v-model="hasNumber" />
      </div>
      <div class="setting">
        <label>Include symbols</label>
        <input type="checkbox" id="symbols" checked v-model="hasSymbol" />
      </div>
    </div>
    <button
      class="btn btn-large"
      id="generate"
      @click="generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)"
    >
      Generate password
    </button>
  </div>
</template>

<script>
export default {
  name: 'PassGenerator',
  data() {
    return {
      generatedVal: '',
      hasLower: true,
      hasUpper: true,
      hasNumber: true,
      hasSymbol: true,
      length: 12
    };
  },
  methods: {
    // Generator functions
    randomLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    },
    randomUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    },
    randomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    },
    randomSymbol() {
      const symbolString = '!@#$%^&*(){}[]=<>/,.';
      return symbolString[Math.floor(Math.random() * symbolString.length)];
    },

    // Shuffle function
    shuffleString(str) {
      let array = str.split('');

      array.sort(function() {
        return 0.5 - Math.random();
      });
      str = array.join('');
      return str;
    },

    // Generate password function
    generatePassword(lower, upper, number, symbol, length) {
      // Initialize password variable
      let generatedPassword = '';

      const randomFunc = {
        lower: this.randomLower,
        upper: this.randomUpper,
        number: this.randomNumber,
        symbol: this.randomSymbol
      };

      // Filter unchecked types
      const typesCount = lower + upper + number + symbol;
      const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(
        (i) => Object.values(i)[0]
      );

      if (typesCount === 0) {
        return '';
      }

      // Loop over length call generator function for each type
      for (let i = 0; i < length; i += typesCount) {
        typesArray.forEach((type) => {
          const funcName = Object.keys(type)[0];
          generatedPassword += randomFunc[funcName]();
        });
      }
      // Add final password to password variable, shuffle, and return
      const randomPassword = generatedPassword.slice(0, length);

      let finalPassword = this.shuffleString(randomPassword);

      this.generatedVal = finalPassword;
    },
    copy() {
      console.log('tes');
      const textarea = document.createElement('textarea');
      const password = this.generatedVal;

      if (!password) {
        return;
      }

      textarea.value = password;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
      alert('Password copied to clipboard');
    }
  }
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
