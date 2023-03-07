<template>
    <section class="slider-obj">
        <div class="slider-inner">
            <div class="content" v-for="(slide, index) in slides">
                <img :class="'slide-'+`${index}`" :src="slide">
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Slider',
  data () {
    return {
        slides: [
            'https://picsum.photos/id/10/450/200',
            'https://picsum.photos/id/11/450/200',
            'https://picsum.photos/id/12/450/200',
        ]
    }
  }
}
</script>

<style scoped>
.slider-obj {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}
.slider-inner {
    display: flex;
    background-color: #efefef;
    border: 1.5px solid #ccc;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
    border-radius: 7px;
}
.slide-0, .slide-1, .slide-2 {
    margin: 10px;
    outline: 5px solid #034;
}
</style>