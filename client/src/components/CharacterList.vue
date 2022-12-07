<script lang="ts">
import axios from "axios";

// {
//           id: "1",
//           name: "hinata hyuga",
//           image: "https://cdn.myanimelist.net/images/characters/16/55680.jpg",
//           description:
//             "Hinata Hyuga is a fictional character in the anime and manga Naruto, created by Masashi Kishimoto. Hinata is a kunoichi and the former heiress of the Hyūga clan from the fictional village of Konohagakure",
//           power: "Kekkai genkai: Byakugan",
//         },
//         {
//           id: "2",
//           image:
//             "https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png",
//           name: "Naruto uzumaki",
//           description:
//             "Naruto Uzumaki is the titular protagonist of the manga Naruto, created by Masashi Kishimoto. As the series progresses, he is a young ninja from the fictional village of Konohagakure",
//           power: "Kekkai genkai: Lava Release, Boil Release, Magnet Release",
//         },
//         {
//           id: "3",
//           image: "https://4kwallpapers.com/images/walls/thumbs_3t/6484.jpg",
//           name: "Kakashi Hatake",
//           description:
//             "Kakashi Hatake [The Copy Ninja] is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. In the story, Kakashi is the teacher of Team 7, consisting of the series' primary characters, Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno",
//           power: "Kekkai genkai: Mangekyō Sharingan, Sharingan",
//         },
//         {
//           id: "4",
//           image:
//             "http://m.gettywallpapers.com/wp-content/uploads/2022/07/Jiraiya-Wallpaper.jpg",
//           name: "Jiraiya",
//           description:
//             "Jiraiya is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. Introduced in the series' first part, he was a student of Third Hokage Hiruzen Sarutobi",
//           power: "Kekkai genkai: Mangekyō Sharingan, Sharingan",
//         },
//         {
//           id: "5",
//           name: "hinata hyuga",
//           image: "https://cdn.myanimelist.net/images/characters/16/55680.jpg",
//           description:
//             "Hinata Hyuga is a fictional character in the anime and manga Naruto, created by Masashi Kishimoto. Hinata is a kunoichi and the former heiress of the Hyūga clan from the fictional village of Konohagakure",
//           power: "Kekkai genkai: Byakugan",
//         },
//         {
//           id: "6",
//           image:
//             "https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png",
//           name: "Naruto uzumaki",
//           description:
//             "Naruto Uzumaki is the titular protagonist of the manga Naruto, created by Masashi Kishimoto. As the series progresses, he is a young ninja from the fictional village of Konohagakure",
//           power: "Kekkai genkai: Lava Release, Boil Release, Magnet Release",
//         },
//         {
//           id: "7",
//           image: "https://4kwallpapers.com/images/walls/thumbs_3t/6484.jpg",
//           name: "Kakashi Hatake",
//           description:
//             "Kakashi Hatake [The Copy Ninja] is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. In the story, Kakashi is the teacher of Team 7, consisting of the series' primary characters, Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno",
//           power: "Kekkai genkai: Mangekyō Sharingan, Sharingan",
//         },
//         {
//           id: "8",
//           image:
//             "http://m.gettywallpapers.com/wp-content/uploads/2022/07/Jiraiya-Wallpaper.jpg",
//           name: "Jiraiya",
//           description:
//             "Jiraiya is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. Introduced in the series' first part, he was a student of Third Hokage Hiruzen Sarutobi",
//           power: "Kekkai genkai: Mangekyō Sharingan, Sharingan",
//         },
//         {
//           id: "9",
//           name: "hinata hyuga",
//           image: "https://cdn.myanimelist.net/images/characters/16/55680.jpg",
//           description:
//             "Hinata Hyuga is a fictional character in the anime and manga Naruto, created by Masashi Kishimoto. Hinata is a kunoichi and the former heiress of the Hyūga clan from the fictional village of Konohagakure",
//           power: "Kekkai genkai: Byakugan",
//         },

export default {
  name: "CharacterList",
  data() {
    return {
      dialog: false,
      characterData: {},
      characters: [],
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
    toggleUpdate(n) {
      this.characterData = n;
      this.dialog = true;
    },
    handleSubmit(n) {
      this.dialog = false;
      this.updateProducts();
    },
    getProducts() {
      axios
        .get("http://localhost:5000/product")
        .then((res) => {
          this.characters = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateProducts() {
      axios
        .patch(
          `http://localhost:5000/product/${this.characterData._id}`,
          this.characterData
        )
        .then((res) => {
          this.getProducts();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteProduct(id) {
      console.log(id);

      axios
        .delete(`http://localhost:5000/product/${id._id}`, this.characterData)
        .then((res) => {
          this.getProducts();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<template>
  <v-row align="start" no-gutters>
    <v-col
      v-for="n in characters"
      :key="n"
      cols="12"
      xs="12"
      sm="6"
      md="4"
      lg="3"
    >
      <v-sheet class="pa-2 ma-2">
        <v-card variant="tonal" min-width="250" height="480">
          <v-img height="180" class="rounded" :src="n.avatar" />
          <v-card-title>{{ n?.name }}</v-card-title>
          <v-card-subtitle>
            {{ n?.power }}
          </v-card-subtitle>
          <v-card-text>
            {{ n?.description }}
          </v-card-text>

          <v-card-actions class="ma-5">
            <div class="text-center">
              <v-dialog v-model="dialog" class="justify-center" width="450">
                <template v-slot:activator="{ props }">
                  <v-btn
                    variant="tonal"
                    v-bind="props"
                    @click="() => toggleUpdate(n)"
                  >
                    Update</v-btn
                  >
                </template>

                <v-card class="bg-surface-variant">
                  <v-card-title
                    >Update Character
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
                      :model-value="characterData?.name"
                    ></v-text-field>
                    <v-file-input
                      label="Avatar"
                      name="avatar"
                      variant="solo"
                    ></v-file-input>
                    <v-text-field
                      label="Power"
                      name="power"
                      :model-value="characterData?.power"
                      variant="solo"
                    ></v-text-field>
                    <v-textarea
                      label="Description"
                      variant="solo"
                      name="description"
                      :model-value="characterData?.description"
                    ></v-textarea>
                    <v-card-actions class="ma-5">
                      <v-btn variant="tonal" block @click="handleSubmit"
                        >Update</v-btn
                      >
                    </v-card-actions>
                  </v-form>
                </v-card>
              </v-dialog>
            </div>
            <v-btn
              variant="tonal"
              class="ml-2"
              color="red"
              @click="() => deleteProduct(n)"
            >
              Delete</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-sheet>
    </v-col>
  </v-row>
</template>
