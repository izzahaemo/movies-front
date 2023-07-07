<template lang="">
    <aside
        class="main-sidebar main-sidebar-custom sidebar-dark-primary elevation-4"
    >
        <!-- <router-link :to="{ name: 'home.dashboard' }" class="brand-link">
            <img
                :src="`${logo}`"
                alt="AdminLTE Logo"
                class="brand-image img-circle elevation-3"
                style="opacity: 0.8"
            />
            <span class="brand-text font-weight-light">Izzah APP</span>
        </router-link> -->
        <div class="sidebar">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img
                        :src="`${userimg}`"
                        class="img-circle elevation-2"
                        alt="User Image"
                    />
                </div>
                <div class="info">
                    <a href="#" class="d-block">Alexander Pierce</a>
                </div>
            </div>
            <nav class="mt-2">
                <ul
                    class="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                >
                    <li class="nav-header">EXAMPLES</li>
                    <li class="nav-item">
                        <!-- <router-link
                            class="nav-link"
                            :to="{ name: 'home.test' }"
                        >
                            <i class="nav-icon far fa-image"></i>
                            <p>Test</p>
                        </router-link> -->
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>
<script>
export default {
    data() {
        return {
            logo: window.url + "assets/img/AdminLTELogo.png",
            userimg: window.url + "assets/img/avatar4.png",
        };
    },
};
</script>
<style lang=""></style>
