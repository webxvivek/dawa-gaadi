<template>
<!-- ======= About Section ======= -->
    <section id="about" class="about inner-page">

      <div class="container" data-aos="fade-up">
        <div class="row gx-0">

          <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div class="content">
              <h3>{{$t('about')}}</h3>
              <h2>{{$t('about_heading')}}</h2>
              <p>
                {{$t('about_content')}}              
              </p>
              <div class="text-center text-lg-start">
                <nuxt-link :to="localePath('index')" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                  <span>{{$t('home')}}</span>
                </nuxt-link>
              </div>
            </div>
          </div>

          <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">

          </div>

        </div>
      </div>

    </section><!-- End About Section -->

</template>

<script>
export default {
 methods: {
 
} 
  }
  </script>

<style> 
  .whatsapp-btn{
    background: #4caf50 !important;
 }
</style>
