<template>
  <div class="white-space"></div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="btn-menu-toggle nav-icon" id="menu-toggle">
      <img src="../../assets/svg/SimpleNavbar.svg" alt="" />
    </button>

    <nav class="navbar bg-light">
      <div class="container-fluid">
        <div class="navbar-brand">
          Contact Person List
          <button type="button" class="btn btn-icon-light">
            <img src="../../assets/svg/Chevrondown.svg" alt="" />
          </button>
        </div>

        <div class="d-flex">
          <button
            type="button"
            class="btn-nav-outline"
            @click="showUploadModal"
          >
            <span class="plus">+</span>Add Contact Person
          </button>
          <button type="button" class="btn-nav-outline">Imported</button>

          <button class="btn-menu-toggle btn-nav-icon">
            <img src="../../assets/svg/Gear.svg" alt="" />
          </button>
        </div>
      </div>
    </nav>
  </nav>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js/dist/umd/popper.min.js";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
export default {
  mounted() {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  },
  
};
</script>
