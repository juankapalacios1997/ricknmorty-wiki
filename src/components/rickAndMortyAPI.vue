<template>
    <div>
        <div class="header-container">
            <h1>The Rick & Morty API</h1>
        </div>
        <div class="main-container" >
            <div v-for="character in characters.results" :key="character.id">
                <!-- <div class="character-container">
                    <router-link class="link" :to="{name: 'character', params: {id: character.id}}" ><h1>{{ character.name }}</h1></router-link>
                    <img :src="character.image" />
                    <p>Status: <span id="status" :class="character.status == 'Alive' ? 'green' : character.status == 'Dead' ? 'red' : 'gray'">&#9679;</span> {{ character.status }}</p>
                    <p>Type: {{ character.type ? character.type : "N/D" }}</p>
                    <p>Gender: {{ character.gender }}</p>
                    <p>Location: {{ character.location.name }}</p>
                </div> -->
                <character
                    :name="character.name"
                    :image="character.image"
                    :status="character.status"
                    :type="character.type"
                    :gender="character.gender"
                    :location="character.location.name"
                />
            </div>
        </div>
        <div class="buttons">
            <button class="button previous" id="previous" v-on:click="previous ? callingAPI(previous) : ''">Previous</button>
            <button class="button next" id="next" v-on:click="next ? callingAPI(next) : ''">Next</button>
        </div>
    </div>
</template>

<script>
    import character from './character.vue';

    export default {
        name: 'rickAndMortyAPI',
        components: {
            character
        },
        // props: {
        //     name: {
        //         type: String
        //     }
        // },
        data() {
            return {
                characters: [],
                next: '',
                previous: ''
            }
        },
        methods: {
            callingAPI(url) {
                this.$emit("pepe", 'Paco')
                fetch(url).then(res => res.json().then(json => {
                    this.characters = json;
                    this.next = json.info.next;
                    this.previous = json.info.prev;
                }))
            },
            openCharacter(id) {
                // this.$router.push(`/character/${id}`)
                // this.$router.push({path: '/character', params: {id: id} })
                this.$router.push({name: 'character', params: {id: id} })
            }
        },
        mounted() {
            this.callingAPI("https://rickandmortyapi.com/api/character");
            // const nextButton = document.getElementById('next'); 
            // const prevButton = document.getElementById('previous');              
            // nextButton.addEventListener("click", () => {
            //     this.callingAPI(this.next)
            // });
            // prevButton.addEventListener("click", () => {
            //     this.callingAPI(this.previous)
            // });
        }
    }
</script>

<style>
    .header-container {
        margin: 0 auto 60px;
        height: 180px;
        background-color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header-container h1 {
        margin: 0;
        font-family: 'Courier New', Courier, monospace;
        font-size: 42px;
        color: white;
    }

    .main-container {
        width: 1170px;
        margin: 0 auto 30px;
        display: flex;
        flex-wrap: wrap;
        background-color: gray;
        justify-content: space-between;
        align-items: center;
    }
    
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
        text-decoration: none;
    }

    .character-container .link {
        margin: 0 auto;
        font-size: 24px;
        text-decoration: none;
    }

    .character-container .link>h1 {
        color: gold;
        margin: 0 auto;
        font-size: 24px;
        text-decoration: none;
    }

    .character-container .link>h1:hover {
        color: rgb(255, 180, 0);
        margin: 0 auto;
        font-size: 24px;
        text-decoration: none;
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

    .buttons {
        height: 120px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }    

    .button {
        width: 180px;
        height: 60px;
        border-width: 3px;
        border-radius: 25px;
    }

    .previous {
        background-color: rgb(255, 100, 100);
        border-color: red;
    }

    .next {
        background-color: rgb(100, 100, 255);
        border-color: blue;
    }

    .previous:hover {
        background-color: rgb(255, 50, 50);
        border-color: red;
    }

    .next:hover {
        background-color: rgb(50, 50, 255);
        border-color: blue;
    }

</style>