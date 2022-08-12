<template>
  <b-container>
    <div class="textCenter spacedOut">
      <h1>Contact Me</h1>
    </div>
    <b-form @submit="onSubmit">
      <b-form-group id="name-group" label="Name" label-for="name">
        <b-form-input
          id="name"
          label="Name"
          v-model="form.name"
          placeholder="Enter name"
          required
        >
        </b-form-input>
      </b-form-group>
      <b-form-group id="email-group" label="Email Address" label-for="email">
        <b-form-input
          id="email"
          label="Email Address"
          v-model="form.email"
          placeholder="Enter email"
          type="email"
          required
        >
        </b-form-input>
      </b-form-group>
      <b-form-group id="request-group" label="Request" label-for="request">
        <b-form-textarea
          id="request"
          v-model="form.request"
          placeholder="What'cha wanna talk about?"
          required
        >
        </b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        request: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.request = "";
    },
  },
};
</script>
