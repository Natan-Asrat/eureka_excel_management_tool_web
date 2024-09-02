<template>
    <div class="container mt-5">
    <div class="row">
      <!-- Hero Section (Left Column) -->
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <h1 class="display-4">Eureka Excel Management Tool</h1>
        <p class="lead">Say goodbye to endless searching through folders.<br> Our Excel Management Tool allows you to index your spreadsheets by any specific column, such as names, and store both the values and files in an easily searchable database.<br> Instantly find the exact file you need, along with its folder structure, with just a few clicks.</p>

        <a href="https://drive.google.com/file/d/1Fsjgii1436fY4ZfaSwUemRMN-4As7VmU/view?usp=sharing" target="_blank">
          <img src="/download.png" alt="Download Setup" class="img-fluid mt-3" style="max-width: 50%;"/>
        </a>
      </div>

      <!-- Screenshots Section (Right Column) -->
      <div class="col-md-6">
        <img class="rounded-3" width="100%" src="/pick_file.jfif"/>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
/* Optional: Add custom styles here */
.hero-section {
  text-align: left;
}

.screenshot {
  max-width: 100%;
  height: auto;

}

.screenshot-t {
    margin-top: 50px;
}
.screenshot-b {
    margin-top: -50px;
}
.phone-mockup {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 400px; /* Adjust based on the phone mockup size */
}

.phone-image {
  width: 100%;
  height: auto;
}

.screenshots {
  position: relative;
}

.screenshot {
  height: auto;
  width: 20%;
  margin-left: 20px;
  object-fit: fit;
  margin-bottom: 10px; /* Adjust spacing between screenshots */
  border-radius: 10px; /* Optional: Rounded corners for screenshots */
}

@media (max-width: 767px) {
  .screenshot {
  height: auto;
  width: 200px;
  object-fit: fit;
  margin-bottom: 10px; /* Adjust spacing between screenshots */
  border-radius: 10px; /* Optional: Rounded corners for screenshots */
  }
  .screenshot-t {
    margin-top: 20px;
}
.screenshot-b {
    margin-top: 20px;
}
}
</style>
