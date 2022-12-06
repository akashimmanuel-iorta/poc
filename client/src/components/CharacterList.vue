<script lang="ts">
import axios from "axios";

export default {
  name: "CharacterList",
  data() {
    return {
      characters: [
        {
          id: "1",
          name: "hinata hyuga",
          image: "https://cdn.myanimelist.net/images/characters/16/55680.jpg",
          description:
            "Hinata Hyuga is a fictional character in the anime and manga Naruto, created by Masashi Kishimoto. Hinata is a kunoichi and the former heiress of the Hyūga clan from the fictional village of Konohagakure",
          power: "Kekkai genkai: Byakugan",
        },
        {
          id: "2",
          image:
            "https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png",
          name: "Naruto uzumaki",
          description:
            "Naruto Uzumaki is the titular protagonist of the manga Naruto, created by Masashi Kishimoto. As the series progresses, he is a young ninja from the fictional village of Konohagakure",
          power: "Kekkai genkai: Lava Release, Boil Release, Magnet Release",
        },
        {
          id: "3",
          image: "https://4kwallpapers.com/images/walls/thumbs_3t/6484.jpg",
          name: "Kakashi Hatake",
          description:
            "Kakashi Hatake [The Copy Ninja] is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. In the story, Kakashi is the teacher of Team 7, consisting of the series' primary characters, Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno",
          power: "Kekkai genkai: Mangekyō Sharingan, Sharingan",
        },
        {
          id: "4",
          image:
            "http://m.gettywallpapers.com/wp-content/uploads/2022/07/Jiraiya-Wallpaper.jpg",
          name: "Jiraiya",
          description:
            "Jiraiya is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. Introduced in the series' first part, he was a student of Third Hokage Hiruzen Sarutobi",
          power: "Kekkai genkai: Mangekyō Sharingan, Sharingan",
        },
        {
          id: "5",
          name: "hinata hyuga",
          image: "https://cdn.myanimelist.net/images/characters/16/55680.jpg",
          description:
            "Hinata Hyuga is a fictional character in the anime and manga Naruto, created by Masashi Kishimoto. Hinata is a kunoichi and the former heiress of the Hyūga clan from the fictional village of Konohagakure",
          power: "Kekkai genkai: Byakugan",
        },
        {
          id: "6",
          image:
            "https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png",
          name: "Naruto uzumaki",
          description:
            "Naruto Uzumaki is the titular protagonist of the manga Naruto, created by Masashi Kishimoto. As the series progresses, he is a young ninja from the fictional village of Konohagakure",
          power: "Kekkai genkai: Lava Release, Boil Release, Magnet Release",
        },
        {
          id: "7",
          image: "https://4kwallpapers.com/images/walls/thumbs_3t/6484.jpg",
          name: "Kakashi Hatake",
          description:
            "Kakashi Hatake [The Copy Ninja] is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. In the story, Kakashi is the teacher of Team 7, consisting of the series' primary characters, Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno",
          power: "Kekkai genkai: Mangekyō Sharingan, Sharingan",
        },
        {
          id: "8",
          image:
            "http://m.gettywallpapers.com/wp-content/uploads/2022/07/Jiraiya-Wallpaper.jpg",
          name: "Jiraiya",
          description:
            "Jiraiya is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. Introduced in the series' first part, he was a student of Third Hokage Hiruzen Sarutobi",
          power: "Kekkai genkai: Mangekyō Sharingan, Sharingan",
        },
        {
          id: "9",
          name: "hinata hyuga",
          image: "https://cdn.myanimelist.net/images/characters/16/55680.jpg",
          description:
            "Hinata Hyuga is a fictional character in the anime and manga Naruto, created by Masashi Kishimoto. Hinata is a kunoichi and the former heiress of the Hyūga clan from the fictional village of Konohagakure",
          power: "Kekkai genkai: Byakugan",
        },
      ],
    };
  },
  methods: {
    getProducts() {
      axios
        .get("http://localhost:5000/product")
        .then((res) => {
          //   this.characters.push(res.data);
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
  <v-container class="bg-surface-variant">
    <v-row align="start" no-gutters>
      <v-col v-for="n in characters" :key="n" cols="12" xs="12" md="4">
        <v-sheet class="pa-2 ma-2">
          <v-card variant="tonal" min-width="250" height="450">
            <v-img height="180" class="rounded" :src="n.image" />
            <v-card-title>{{ n?.name }}</v-card-title>
            <v-card-subtitle>
              {{ n?.power }}
            </v-card-subtitle>
            <v-card-text>
              {{ n?.description }}
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
