<template lang="">
    <body class="hold-transition login-page">
        <div class="login-box">
            <div class="login-logo">
                <a href="../../index2.html"><b>Admin</b>LTE</a>
            </div>
            <!-- /.login-logo -->
            <div class="card">
                <div class="card-body login-card-body">
                    <p class="login-box-msg">
                        You are only one step a way from your new password,
                        recover your password now.
                    </p>

                    <form @submit.prevent="authStore.handleResetPassword(form)">
                        <div class="input-group mb-3">
                            <input
                                v-model="form.password"
                                type="password"
                                class="form-control"
                                placeholder="Password"
                            />
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input
                                v-model="form.password_confirmation"
                                type="password"
                                class="form-control"
                                placeholder="Confirm Password"
                            />
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button
                                    type="submit"
                                    class="btn btn-primary btn-block"
                                >
                                    Change password
                                </button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>

                    <p class="mt-3 mb-1">
                        <a href="login.html">Login</a>
                    </p>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>
        <!-- /.login-box -->
    </body>
</template>
<script setup>
import { useAuthStore } from "../stores/auth";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const authStore = useAuthStore();

const form = ref({
    password: "",
    password_confirmation: "",
    email: route.query.email,
    token: route.params.token,
});
</script>
<style lang=""></style>
