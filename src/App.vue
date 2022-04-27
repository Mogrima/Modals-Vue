<template>
  <div class="wrapper">

    <div class="wrapper-content">
      <section>
        <div class="container">
          <button class="btn btnPrimary" @click="modalFirst = !modalFirst" type="button">Show First modal</button>
          <modals 
          title="First modal"
          v-show="modalFirst"
          @close="modalFirst = !modalFirst">
          <div slot="body">
            <p>Anything text body</p>
            <button class="btn btnPrimary" @click="modalFirst = false" type="button">Well done!</button>
          </div>
          </modals>

          <button class="btn btnPrimary" @click="modalSecond.show = !modalSecond.show" type="button">Show modal with form</button>
          <modals 
          title="Modal with form"
          v-show="modalSecond.show"
          @close="modalSecond.show = false">
          <div slot="body">
            <form @submit.prevent="submitSecondForm">
              <label for="">Name</label>
              <input name="name" v-model="modalSecond.name" type="text" required>
              <label for="">Email</label>
              <input name="email" v-model="modalSecond.email" type="email" required>
              <button class="btn btnPrimary">Submit</button>
            </form>
          </div>
          </modals>

          <button class="btn btnPrimary" @click="modalValidate = !modalValidate" type="button">Show modal with form + validate</button>
          <modalValidate v-show="modalValidate" @close="modalValidate = false"></modalValidate>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
import modals from "@/components/UI/Modal.vue"
import modalValidate from "@/components/ModalValidate.vue"

export default {
  components: { modals, modalValidate },
  data() {
    return {
      modalFirst: false,
      modalSecond: {
        show: false,
        name: '',
        email: ''
      },
      modalValidate: false
    }
  },
  methods: {
    submitSecondForm() {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email
      })

      this.modalSecond.name = ''
      this.modalSecond.email = ''
      this.modalSecond.show = false
    }
  }
}
</script>
