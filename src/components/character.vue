<template>
    <div class="character-container">
        <h1>{{ name }}</h1>
        <img :src="image" />
        <p>Status: <span id="status" :class="status == 'Alive' ? 'green' : status == 'Dead' ? 'red' : 'gray'">&#9679;</span> {{ status }}</p>
        <p>Type: {{ type ? type : "N/D" }}</p>
        <p>Gender: {{ gender}}</p>
        <p>Location: {{ location }}</p>
    </div>
</template>

<script>
export default {
        name: 
        'character',
        // data() {
        //     return {
        //         character: {}
        //     }
        // },
        props: {
            name: {
                type: String
            },
            image: {
                type: String
            },
            status: {
                type: String
            },
            type: {
                type: String
            },
            gender: {
                type: String
            },
            location: {
                type: String
            }
        },
        // methods: {
        //     callingAPI(url) {
        //         fetch(url).then(res => res.json().then(json => {
        //             this.character = json
        //         }))
        //     },
        // },
        // mounted() {
        //     this.callingAPI(`https://rickandmortyapi.com/api/character/${this.$route.params.id}`);
        //     this.callingAPI(`https://rickandmortyapi.com/api/character/${this.id}`);
        // }
    }
</script>

<style>
    .character-container {
        font-family: 'Courier New', Courier, monospace;
        font-size: 16px;
        font-weight: bold;
        height: 360px;
        width: 180px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 12px;
        background-color: green;
        border: 5px solid gold;
        border-radius: 16px;
        padding: 16px;
    }

    .character-container h1 {
        color: gold;
        margin: 0 auto;
        font-size: 24px;
    }

    .character-container img {
        margin: 8px auto;
        width: 180px;
        height: auto;
    }

    .character-container p {
        color: silver;
        width: 100%;
        margin: 0 auto;
        text-align: left;
    }

    .green {
        color: lightgreen;
    }

    .red {
        color: red;
    }

    .gray {
        color: #333;
    }

</style>