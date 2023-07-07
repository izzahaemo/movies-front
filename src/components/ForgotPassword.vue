<template lang="">
    <body class="hold-transition login-page">
        <div class="login-box">
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <a href="../../index2.html" class="h1"><b>Admin</b>LTE</a>
                </div>
                <div class="card-body">
                    <p class="login-box-msg">
                        You forgot your password? Here you can easily retrieve a
                        new password.
                    </p>
                    <form
                        @submit.prevent="authStore.handleForgotPassword(email)"
                    >
                        <div
                            class="alert alert-success alert-dismissible"
                            v-if="authStore.status"
                        >
                            <button
                                type="button"
                                class="close"
                                data-dismiss="alert"
                                aria-hidden="true"
                            >
                                ×
                            </button>
                            <h5><i class="icon fas fa-check"></i> Success!</h5>
                            {{ authStore.status }}
                        </div>
                        <div class="input-group mb-3">
                            <input
                                v-model="email"
                                type="email"
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
                        <div class="row">
                            <div class="col-12">
                                <button
                                    type="submit"
                                    class="btn btn-primary btn-block"
                                >
                                    Request new password
                                </button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>
                    <p class="mt-3 mb-1">
                        <router-link :to="{ name: 'Login' }">Login</router-link>
                    </p>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>
        <!-- /.login-box -->
    </body>
</template>
<script setup>
import { ref } from "vue";

import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();

const email = ref("");
</script>
<style lang=""></style>
