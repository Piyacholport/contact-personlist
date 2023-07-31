<template>
  <div class="top">
    <div class="sectionleft">
      <div class=""><img src="../../assets/svg/Logo.svg" alt="" /></div>
      <div class="div-head">
        <span class="head">Company’s name</span> <br />
        <span class="subhead">Slogan of the company</span>
      </div>
    </div>

    <div class="sectionright">
      <div class="">
        <div class="form-group right">
          <label for="search" class="label-search">
            <img src="../../assets/svg/Search.svg" alt="User Icon" class="left"/>
          </label>
          <input type="text" id="search" placeholder="Search" />
        </div>
      </div>
      <div class="right"><img src="../../assets/svg/Pipe.svg" alt="" /></div>
      <div class="">
        <img src="../../assets/svg/Chat.svg" alt="" class="right20"/>
        <img src="../../assets/svg/Notify.svg" alt="" class="right20"/>
        <img src="../../assets/svg/Help.svg" alt="" class="right20"/>
        <img src="../../assets/svg/Allmenu.svg" alt="" class="right20"/>
        <img src="../../assets/svg/User.svg" alt="" class="right20"/>
      </div>
    </div>
  </div>
</template>
<style>
@import "../../assets/css/inputgroup.css";
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
}
.div-head {
  line-height: normal;
  margin-left: 10px;
  line-height: 15px;
}
.head {
  font-size: 13px;
  font-weight: bold;
}
.subhead {
  color: #747988;
  font-size: 10px;
  font-weight: 400;
}
.sectionleft {
  display: flex;
  align-items: center;
}
.sectionright {
  display: flex;
  align-items: center;
}
</style>