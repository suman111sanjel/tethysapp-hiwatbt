<template>
  <nav class="navbar navbar-light template-nabar full-height">
    <a class="navbar-brand" href="">High Impact Extreme Weather Tool - Bhutan</a>
    <div class="nav-logo-image">
<!--      <img class="logo-image-style" src="@/assets/logo-icimod.png" alt="">-->
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.template-nabar {
  background-color: rgb(0, 113, 150);
  overflow: hidden;
}

.navbar {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.full-height {
  height: 100%;
}

.template-nabar .navbar-brand {
  /* padding-bottom: .3125rem; */
  /* margin-right: 1rem; */
  font-size: 1.7rem;
  /* line-height: inherit; */
  /* white-space: nowrap; */
}

.template-nabar a {
  color: white !important;
}

.navbar-brand {
  display: inline-block;
  padding-top: .3125rem;
  padding-bottom: .3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
}

a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}

.navbar-brand {
  margin-left: 1rem;
}

.nav-logo-image {
  margin-right: 15px;
  margin-top: 9px;
}

</style>