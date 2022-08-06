<template>
  <b-container>
    <div class="textCenter spacedOut">
      <h1>My Music Projects</h1>
      <p class="textCenter">
        A list the musical projects I work on and bands/groups I play with
      </p>
    </div>
    <div>
      <h2 class="textCenter spacedOut">Personal Projects</h2>
      <div v-for="(video, i) in videos" :key="i">
        <hr />
        <h3 class="textCenter">{{ video.title }}</h3>
        <div>
          <p>{{ video.subtitle }}</p>
        </div>
        <div class="textCenter videoContainer">
          <iframe
            width="1000em"
            height="550em"
            :src="`${video.src}`"
            :title="`${video.title}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          title: "Mini Bass Grooves",
          subtitle: "I record and post weekly bass grooves for #musicMonday",
          src: "https://www.youtube.com/embed/videoseries?list=PLwcHBvR9QTnGgW2JTty_ytboYpVCT1rWJ",
        },
        {
          title: "Bass Solos",
          subtitle: "Improvised Bass Solos",
          src: "https://www.youtube.com/embed/videoseries?list=PLwcHBvR9QTnF_VwKZ4GjcVdUj_pDYukxY",
        },
        {
          title: "Collaborations",
          subtitle: "Collaborations with other artists",
          src: "https://www.youtube.com/embed/videoseries?list=PLwcHBvR9QTnFgFmKEglBHxq-eOgyufHfZ",
        },
        {
          title: "3# Jazz Trio",
          subtitle:
            "I play with a sick jazz trio locally, playing weddings, corporate events and other parties.",
          src: "https://www.youtube.com/embed/YBFQ2aVHFZ4",
        },
        {
          title: "The Civilians",
          subtitle: "The Civilians Band",
          src: "",
        },
      ],
    };
  },
};
</script>

<style>
.videoContainer {
  margin: 0 auto;
}

.spacedOut {
  margin: 1em;
}

hr {
  border: 1px solid blue;
  margin-top: 2.5em;
}
</style>
