<template>
  <section class="section">
    <div class="container has-text-centered">
      <div class="columns is-mobile is-centered">
        <div class="column is-one-fifth">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img v-bind:src="characterPortrait" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <h1 class="title is-1 charname">{{ characterName }}</h1>
      <h2 class="subtitle">{{ characterDescription }}</h2>
    </div>
  </section>
</template>

<script>
import { BACKEND_URL } from "../../../config.js";

// TODO move in util file
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getAbenteurertyp(abenteurertyp) {
    switch(abenteurertyp) {
        case 'as':
            return {
                maennlich: 'Assassine',
                weiblich: 'Assassine'
            };
        case 'bb':
            return {
                maennlich: 'Barbar',
                weiblich: 'Barbarin'
            };
        case 'ba':
            return {
                maennlich: 'Barde',
                weiblich: 'Bardin'
            };
        case 'gl':
            return {
                maennlich: 'Glücksritter',
                weiblich: 'Glücksritterin'
            };
        case 'ha':
            return {
                maennlich: 'Händler',
                weiblich: 'Händlerin'
            };
        case 'kr':
            return {
                maennlich: 'Krieger',
                weiblich: 'Kriegerin'
            };
        case 'or':
            return {
                maennlich: 'Ordenskrieger',
                weiblich: 'Ordenskriegerin'
            };
        case 'sp':
            return {
                maennlich: 'Spitzbube',
                weiblich: 'Spitzbübin'
            };
        case 'wa':
            return {
                maennlich: 'Waldläufer',
                weiblich: 'Waldläuferin'
            };
        case 'dr':
            return {
                maennlich: 'Druide',
                weiblich: 'Druidin'
            };
        case 'hx':
            return {
                maennlich: 'Hexer',
                weiblich: 'Hexerin'
            };
        case 'ma':
            return {
                maennlich: 'Magier',
                weiblich: 'Magierin'
            };
        case 'pb':
            return {
                maennlich: 'Priester (Beschützer)',
                weiblich: 'Priesterin (Beschützer)'
            };
        case 'ps':
            return {
                maennich: 'Priester (Streiter)',
                weiblich: 'Priesterin (Streiter)'
            };
        case 'sc':
            return {
                maennlich: 'Schmanae',
                weiblich: 'Schamanin'
            };
        case 'zk':
            return {
                maennlich: 'Zauberkrämer',
                weiblich: 'Zauberkrämerin'
            };
        default:
            return {
                maennlich: '[kein Typ gewählt]',
                weiblich: '[kein Typ gewählt]'
            }
    }
}

export default {
  computed: {
    characterName() {
      return this.$store.state.character.name;
    },
    characterPortrait() {
      return BACKEND_URL + this.$store.state.character.portrait;
    },
    characterDescription() {
      let description = "";
      
      let geschlecht = this.$store.state.character.geschlecht;
      let rasse = this.$store.state.character.rasse;
      let abenteuerertyp = this.$store.state.character.abenteurertyp;
      let herkunft = this.$store.state.character.herkunft;

      description += rasse;
      description += ", ";
      abenteuerertyp = getAbenteurertyp(abenteuerertyp);
      description += abenteuerertyp[geschlecht];
      if (geschlecht === "weiblich") {
        abenteuerertyp += "in";
      }
      description += " aus ";
      description += herkunft;
      return description;
    },
  },
};
</script>

<style>
</style>