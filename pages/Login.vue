<template>
  <base-card>
    <div class="main-div">
      <div class="login-title">
        <h3>Login</h3>
      </div>
      <div class="row">
        <form onsubmit="submitForm">
          <div class="form-group">
            <input
              @blur="validate"
              v-model="email.value"
              type="text"
              class="form-control"
              placeholder="Your Email *"
              value=""
            />
          </div>
          <p class="validation-message" v-if="!email.isValid">Fill in email</p>
          <div class="form-group">
            <input
              @blur="validate"
              v-model="password.value"
              type="password"
              class="form-control"
              placeholder="Your Password *"
              value=""
            />
          </div>
          <p class="validation-message" v-if="!password.isValid">
            Fill in password
          </p>
          <div class="button-container">
            <button @click="submitForm" type="button" class="btn btn-secondary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      admins: this.$store.getters["userStore/getAdminList"],
      email: {
        value: "",
        isValid: true,
      },
      password: {
        value: "",
        isValid: true,
      },
      formIsValid: false,
    };
  },

  methods: {
    submitForm() {
      this.validate();
      if (this.email.value != "" && this.password.value != "") {
        this.admins.forEach((admin) => {
          if (
            admin.email === this.email.value &&
            admin.password === this.password.value
          ) {
            this.$store.dispatch("userStore/setAdminState");
            this.$router.push("servers");
          }
        });
      }
    },
    validate() {
      if (this.email.value === "") {
        this.email.isValid = false;
      } else {
        this.email.isValid = true;
      }
      if (this.password.value === "") {
        this.password.isValid = false;
      } else {
        this.password.isValid = true;
      }
    },
  },
};
</script>

<style scoped>
.main-div {
  margin: auto;
}
.validation-message {
  color: red;
  border-block-width: 1px;
  text-align: center;
}

.login-title {
  text-align: center;
}

.button-container {
  text-align: center;
  padding: 5%;
}

.login-form-1 {
  padding: 5%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-1 h3 {
  text-align: center;
  color: #333;
}

.login-container form {
  padding: 10%;
}

.btn-secondary {
  width: 100px;
}
</style>
