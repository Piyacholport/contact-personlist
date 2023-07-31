<script setup>
import SideBar from "./components/navbar/ButtonSideBar.vue";
import TobBar from "./components/navbar/TobBar.vue";
import ListMenu from "./components/navbar/ListMenu.vue";
import Footercontent from "./components/footer/Footercontent.vue";
</script>

<template>
  <v-app>
    <div class="content">
     <TobBar/>

      <div class="d-flex" id="wrapper">
        <ListMenu />
        <div id="page-content-wrapper">
          <SideBar />
          <div class="container-fluid bg-light">
            <router-view />
          </div>
          <Footercontent />
        </div>
      </div>
    </div>
  </v-app>
</template>
<style>
@import "./assets/css/font.css";
@import "./assets/css/buttonsidebar.css";
@import "./assets/css/listmenu.css";
@import "./assets/css/navbar.css";
</style>