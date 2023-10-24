<template>
  <div
    class="offer-two"
    style="padding: 0 30px 0 100px; background-color: rgb(225, 219, 219)"
  >
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-hover v-slot="{isHovering,props}">

            <div class="parent" v-bind="props" style="overflow: hidden ;border-radius:7px">
              <img
                src="../../assets/images/iphones.webp"
                alt=""
                :style="` width: 100% ;cursor:pointer ; transition:0.5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="6">
          <v-hover v-slot="{isHovering,props}">

            <div class="parent" v-bind="props" style="overflow: hidden ;border-radius:7px">
              <img
                src="../../assets/images/laptops.webp"
                alt=""
                :style="` width: 100% ;cursor:pointer ; transition:0.5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>
