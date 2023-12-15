<template>
  <div class="banner">
    <div class="parent">
      <img src="../../assets/images/banner-bg.jpg" alt="">
      <div class="cont">
        <h3>
          <span>Huge Saving</span> on
          <br />
          UHD Televisions
        </h3>
        <p class="hint">Sale up to 70% off on selected items*</p>
        <v-btn
          variant="outlined"
          class=" px-10"
          style="
            margin-top: 30px;
            border-radius: 30px;
            text-transform: none;
          "
          >Shop Now</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpperBanner",
};
</script>

<style lang="scss">
.banner {
  .parent {
    height: 550px;
    position: relative;
    .img{
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
    
    .cont {
      color: white;
      padding: 80px 0 0 150px;
      position: absolute;
      top: 40px;
      left: 40px;
      width: 40%;

      h3 {
        font-size: 45px;
        font-weight: 900;
        span {
          color: #10ffda;
        }
      }
      .hint {
        margin: 20px 0 40px;
      }
    }
  }
}
</style>
