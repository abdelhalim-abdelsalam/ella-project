<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="6">
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
          </v-col>
        </v-row>
      </v-container>
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
    height: 500px;
    background-image: url(../../assets/images/banner-bg.jpg);
    background-size: cover;
    background-position:left top;
    .cont {
      color: white;
      padding: 80px 0 0 150px;

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
