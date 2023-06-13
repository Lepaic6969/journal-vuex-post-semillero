<template>
  <div class="mb-3 pointer p-2 entry-container" @click="$router.push({name:'entry',params:{id:10}})">
    <!-- Título de la entrada -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021, Jueves</span>
    </div>
    <div class="entry-description">
      Consequat ipsum excepteur consequat et nulla officia consequat labore laboris fugiat eu aute. Aute elit ad fugiat consectetur. Laborum nulla excepteur consequat fugiat sint aliquip consectetur minim exercitation. Ea do amet reprehenderit incididunt est aliquip amet non ullamco. Sit nostrud ipsum occaecat nisi aute.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .entry-container{
    border-bottom: 1px solid #2c3e50;
    transform: 0.2s all ease-in;
    &:hover{
      background-color: lighten($color:grey,$amount:45);
    }
    .entry-description{
      font-size: 12px;
    }
  }
 
</style>