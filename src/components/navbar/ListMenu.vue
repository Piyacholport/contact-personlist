<template>
  <div class="sidebar bg-dark border-right" id="sidebar-wrapper">
    <div class="sidebar-heading">Contact</div>
    <div class="list-group">
      <a href="#" class="list-group-item item-color bg-dark"
        ><img
          src="../../assets/svg/Dashboard.svg"
          alt=""
          class="list-menu-icon"
        />Dashboard</a
      >
      <a href="#" class="list-group-item item-color bg-dark"
        ><img
          src="../../assets/svg/Contact.svg"
          alt=""
          class="list-menu-icon"
        />Contact Person List</a
      >
      <a href="#" class="list-group-item item-color bg-dark"
        ><img
          src="../../assets/svg/Report.svg"
          alt=""
          class="list-menu-icon"
        />Report</a
      >

      <button
        class="list-group-item item-color bg-dark flexmenu"
        @click="toggleDropdown"
      >
        <div class="">
          <img
            src="../../assets/svg/WhiteGear.svg"
            alt=""
            class="list-menu-icon"
          />Setting
        </div>
        <button class="btn-sub-dropdown">
          <img :src="isDropdownOpen ? Chevronup : Chevrondown" alt="" />
        </button>
      </button>
      <div class="dropdown" v-if="isDropdownOpen">
        <a href="#" class="list-group-item item-color bg-dark"
          ><img :src="Ellipse" alt="" class="icon-sub-menu" /> Manage
          Layout</a
        >
        <a href="#" class="list-group-item item-color bg-dark"
          ><img :src="Ellipse" alt="" class="icon-sub-menu" /> Member</a
        >
        <a href="#" class="list-group-item item-color bg-dark"
          ><img :src="Ellipse" alt="" class="icon-sub-menu" /> Data
          Access</a
        >
        <a href="#" class="list-group-item item-color bg-dark"
          ><img :src="Ellipse" alt="" class="icon-sub-menu" /> System log</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import Chevronup from "../../assets/svg/Chevronup.svg";
import Chevrondown from "../../assets/svg/Chevrondownbold.svg";
import Ellipse from "../../assets/svg/Ellipse.svg";
export default {
  data() {
    return {
      isDropdownOpen: false,
      Chevronup: Chevronup,
      Chevrondown: Chevrondown,
      Ellipse:Ellipse,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>

