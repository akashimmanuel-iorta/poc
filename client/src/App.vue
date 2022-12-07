<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      dialog: false,
      characterData: {},
    };
  },
  methods: {
    handleChange(e: any) {
      if (e.target.name === "avatar") {
        const reader = new FileReader();
        let rawImg;
        reader.onloadend = () => {
          rawImg = reader.result;
          this.characterData[e.target.name] = rawImg;
        };
        reader.readAsDataURL(e.target.files[0]);
      } else {
        this.characterData[e.target.name] = e.target.value;
      }
    },
    handleSubmit() {
      this.dialog = false;
      this.createProducts();
    },
    createProducts() {
      axios
        .post("http://localhost:5000/product", this.characterData)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>Fictional Characters</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container class="bg-surface-variant">
        <div class="text-center absolute">
          <v-dialog v-model="dialog" class="justify-center" width="450">
            <template v-slot:activator="{ props }">
              <v-btn
                color="green"
                class="float-right"
                elevation="24"
                v-bind="props"
                fab
                >+</v-btn
              >
            </template>

            <v-card class="bg-surface-variant">
              <v-card-title
                >Create Character
                <v-btn
                  variant="tonal"
                  class="float-right"
                  @click="dialog = false"
                  >X</v-btn
                >
              </v-card-title>
              <v-form class="ma-5" @change="handleChange">
                <v-text-field
                  label="Name"
                  name="name"
                  variant="solo"
                ></v-text-field>
                <v-file-input
                  label="Avatar"
                  name="avatar"
                  variant="solo"
                ></v-file-input>
                <v-text-field
                  label="Power"
                  name="power"
                  variant="solo"
                ></v-text-field>
                <v-textarea
                  label="Description"
                  name="description"
                  variant="solo"
                ></v-textarea>
                <v-card-actions class="ma-5">
                  <v-btn variant="tonal" block @click="handleSubmit">
                    Create</v-btn
                  >
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
        </div>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>
