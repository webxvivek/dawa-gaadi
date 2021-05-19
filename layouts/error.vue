<template>
<!-- ======= About Section ======= -->
    <section id="error" class="about inner-page">
      <div class="container" data-aos="fade-up">
        <div class="row gx-0">

          <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div class="content text-center">
             <h2 v-if="error.statusCode === 404">Page not found</h2>
               <h2 v-else>An error occurred</h2>
               <p>You can retry from following link.</p>
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
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>