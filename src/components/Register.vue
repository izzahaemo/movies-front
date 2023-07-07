<template lang="">
    <body class="hold-transition register-page">
        <div class="register-box">
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <a href="../../index2.html" class="h1"><b>Admin</b>LTE</a>
                </div>
                <div class="card-body">
                    <p class="login-box-msg">Register a new membership</p>

                    <form @submit.prevent="authStore.handleRegister(form)">
                        <div class="input-group mb-3">
                            <input
                                type="text"
                                v-model="form.name"
                                class="form-control"
                                placeholder="Full name"
                            />
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-user"></span>
                                </div>
                            </div>
                        </div>
                        <p v-if="authStore.errors.name" class="text-danger">
                            {{ authStore.errors.name[0] }}
                        </p>
                        <div class="input-group mb-3">
                            <input
                                type="email"
                                v-model="form.email"
                                class="form-control"
                                placeholder="Email"
                            />
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <p v-if="authStore.errors.email" class="text-danger">
                            {{ authStore.errors.email[0] }}
                        </p>
                        <div class="input-group mb-3">
                            <input
                                type="password"
                                v-model="form.password"
                                class="form-control"
                                placeholder="Password"
                            />
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <p v-if="authStore.errors.password" class="text-danger">
                            {{ authStore.errors.password[0] }}
                        </p>
                        <div class="input-group mb-3">
                            <input
                                type="password"
                                v-model="form.password_confirmation"
                                class="form-control"
                                placeholder="Retype password"
                            />
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <p
                            v-if="authStore.errors.password_confirmation"
                            class="text-danger"
                        >
                            {{ authStore.errors.password_confirmation[0] }}
                        </p>
                        <div class="row">
                            <div class="col-8">
                                <div class="icheck-primary">
                                    <input
                                        type="checkbox"
                                        id="agreeTerms"
                                        name="terms"
                                        value="agree"
                                    />
                                    <label for="agreeTerms">
                                        I agree to the <a href="#">terms</a>
                                    </label>
                                </div>
                            </div>
                            <!-- /.col -->
                            <div class="col-4">
                                <button
                                    type="submit"
                                    class="btn btn-primary btn-block"
                                >
                                    Register
                                </button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>

                    <router-link :to="{ name: 'Login' }" class="text-center"
                        >I already have a membership</router-link
                    >
                </div>
                <!-- /.form-box -->
            </div>
            <!-- /.card -->
        </div>
        <!-- /.register-box -->
    </body>
</template>
<script setup>
import { ref } from "vue";

import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();

// authStore.errors = [];

const form = ref({
    email: "",
    name: "",
    password: "",
    password_confirmation: "",
});
</script>
<style lang=""></style>
