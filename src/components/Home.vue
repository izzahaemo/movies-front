<template>
    <div class="wrapper">
        <NavbarLayout></NavbarLayout>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">
                                Top Navigation <small>Example 3.0</small>
                            </h1>
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li class="breadcrumb-item">
                                    <a href="#">Layout</a>
                                </li>
                                <li class="breadcrumb-item active">
                                    Top Navigation
                                </li>
                            </ol>
                        </div>
                        <!-- /.col -->
                    </div>
                    <!-- /.row -->
                </div>
                <!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <!-- Main content -->
            <div class="content">
                <div class="container">
                    <div class="row">
                        <!-- /.col-md-6 -->
                        <div v-if="authStore.user" class="col-lg-6">
                            <!-- Widget: user widget style 1 -->
                            <div class="card card-widget widget-user shadow">
                                <!-- Add the bg color to the header using any of the bg-* classes -->
                                <div class="widget-user-header bg-info">
                                    <h3 class="widget-user-username">
                                        {{ authStore.user?.name }}
                                    </h3>
                                    <h5 class="widget-user-desc">
                                        {{ authStore.user?.email }}
                                    </h5>
                                </div>
                                <div class="widget-user-image">
                                    <img
                                        class="img-circle elevation-2"
                                        src="../../img/user1-128x128.jpg"
                                        alt="User Avatar"
                                    />
                                </div>
                                <div class="card-footer">
                                    <div class="row">
                                        <div class="col-sm-4 border-right">
                                            <div class="description-block">
                                                <h5 class="description-header">
                                                    3,200
                                                </h5>
                                                <span class="description-text"
                                                    >SALES</span
                                                >
                                            </div>
                                            <!-- /.description-block -->
                                        </div>
                                        <!-- /.col -->
                                        <div class="col-sm-4 border-right">
                                            <div class="description-block">
                                                <h5 class="description-header">
                                                    13,000
                                                </h5>
                                                <span class="description-text"
                                                    >FOLLOWERS</span
                                                >
                                            </div>
                                            <!-- /.description-block -->
                                        </div>
                                        <!-- /.col -->
                                        <div class="col-sm-4">
                                            <div class="description-block">
                                                <h5 class="description-header">
                                                    35
                                                </h5>
                                                <span class="description-text"
                                                    >PRODUCTS</span
                                                >
                                            </div>
                                            <!-- /.description-block -->
                                        </div>
                                        <!-- /.col -->
                                    </div>
                                    <!-- /.row -->
                                </div>
                            </div>
                            <!-- /.widget-user -->

                            <div class="card card-primary card-outline">
                                <div class="card-header">
                                    <h5 class="card-title m-0">Featured</h5>
                                </div>
                                <div class="card-body">
                                    <h6 class="card-title">
                                        Special title treatment
                                    </h6>

                                    <p class="card-text">
                                        With supporting text below as a natural
                                        lead-in to additional content.
                                    </p>
                                    <a href="#" class="btn btn-primary"
                                        >Go somewhere</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <h1>go login</h1>
                        </div>
                        <!-- /.col-md-6 -->
                    </div>
                    <!-- /.row -->
                </div>
                <!-- /.container-fluid -->
            </div>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->

        <!-- Main Footer -->
        <footer class="main-footer">
            <!-- To the right -->
            <div class="float-right d-none d-sm-inline">Anything you want</div>
            <!-- Default to the left -->
            <strong
                >Copyright &copy; 2014-2021
                <a href="https://adminlte.io">AdminLTE.io</a>.</strong
            >
            All rights reserved.
        </footer>
    </div>
    <!-- ./wrapper -->
</template>

<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "../stores/auth";
import NavbarLayout from "../layouts/NavbarLayout.vue";

const authStore = useAuthStore();

onMounted(async () => {
    await authStore.getUser();
    // console.log(process.env.VITE_API_BASE_URL);
});
</script>
