<template lang="">
    <body class="hold-transition login-page">
        <div class="login-box">
            <!-- /.login-logo -->
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <h1>
                        <router-link :to="{ name: 'Home' }"
                            >Movies APP</router-link
                        >
                    </h1>
                </div>
                <div class="card-body">
                    <p class="login-box-msg">Sign in to start your session</p>

                    <form @submit.prevent="authStore.handleLogin(form)">
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
                        <div class="row">
                            <div class="col-8">
                                <div class="icheck-primary">
                                    <input type="checkbox" id="remember" />
                                    <label for="remember"> Remember Me </label>
                                </div>
                            </div>
                            <!-- /.col -->
                            <div class="col-4">
                                <button
                                    type="submit"
                                    class="btn btn-primary btn-block"
                                >
                                    Sign In
                                </button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>
                    <!-- /.social-auth-links -->

                    <p class="mb-1">
                        <router-link :to="{ name: 'ForgotPassword' }"
                            >I forgot my password</router-link
                        >
                    </p>
                    <p class="mb-0">
                        <router-link
                            :to="{ name: 'Register' }"
                            class="text-center"
                            >Register a new membership</router-link
                        >
                    </p>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
        <!-- /.login-box -->
    </body>
</template>
<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();
const form = ref({
    email: "",
    password: "",
});
</script>
<style lang=""></style>
