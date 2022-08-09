<template>
  <div class="hello">
    <div id="binding-text">
      <div id="using-moustache-syntax">
        <h1>Hello Diego</h1>
        <h1>Hello {{ name }}</h1>
        <h1>{{ name }}</h1>
        <h1>{{ greet }} {{ name }}</h1>
      </div>
      <div id="using-v-text-directive">
        <h1 v-text="band"></h1>

        <!-- IMPORTANTE  -->
        <!-- 1. Cuendo usamos la directiva de v-text, siempre sobreEscribiremos el texto o el contenido que contenga de hijos el elemento donde estes apuntando. -->
        <!-- 2. Si queremos trabajar dinamicamente con nuestra data, por favor acatarse a usar el syntax de bigotes :) -->
      </div>
    </div>
    <div id="binding-html">
      <div v-html="bidingHtml"></div>
      <div v-html="bidingHtmlCrossSide"></div>
    </div>
    <div id="binding-attributes">
      Si queremos bindearatributos dentro de ..
      <h1 v-bind:id="headingIdExample">Heading - with Binding ID Attribute</h1>

      <!-- Binding with a Boolean Value -->
      <button v-bind:disabled="isDisabled">Binding with a Boolean Value</button>

      <!-- Binding with a Class Attribute -->
      <h1 v-bind:class="status">Underlines Text - With a Class Attribute</h1>

      <!-- Binding with more than one Class -->
      <h1 v-bind:class="status" class="underline">
        Underlines Text - With more than one Class
      </h1>
    </div>
    <div id="binding-conditional-attributes">
      <!-- Conditionally binding a class attribute to an element depending if the dataProperty = true || false -->
      <h1 v-bind:class="isPromoted && 'promoted'">Promoted movies</h1>

      <!-- Operador ternario - Ternary Operator -->
      <!-- This checks for bot conditions -->
      <h1 v-bind:class="isSoldOut ? 'sold-out' : 'available'">
        Sold out movies
      </h1>

      <!-- Binding an array of classes  -->
      <h1 v-bind:class="['underline', 'available']">
        Binding an array of classes
      </h1>

      <!-- Conditionally attaching classes by combing expressions -->
      <h1
        v-bind:class="[
          isPromoted && 'promoted',
          isSoldOut ? 'sold-out' : 'available',
        ]"
      >
        Array of Conditional Classes
      </h1>

      <!-- Conditionally attaching classes by combing expressions within an Object -->
      <h1
        v-bind:class="{
          promoted: isPromoted,
          new: !isSoldOut,
          'sold-out': isSoldOut,
        }"
      >
        Object of Conditional Classes
      </h1>
    </div>
    <div id="binding-styles">
      <!-- // Dynamic binding inline attributes by an object -->
      <h1
        v-bind:style="{
          padding: '20px',
          color: textColor,
          fontSize: textSize + 'px',
        }"
      >
        Inline Styling done through an object approach
      </h1>

      <!-- Dynamically bind an object fetched from data property -->
      <h1 v-bind:style="[baseStyleObject, successDtyleObject]">
        Injecting an array of objects inside the style tag via binding
      </h1>
    </div>
    <div id="short-hand-binding">
      <!-- sShort hand syntax  -->
      <h1 :style="{}"></h1>
    </div>
    <div id="conditional-rendering-part-1">
      <h1 v-if="num === 0">The number is zero</h1>
      <h1 v-else>The number is not zero</h1>
    </div>
    <div id="conditional-rendering-part-2">
      <h1 v-if="num === 0">The number is zero</h1>
      <h1 v-else-if="num < 0">The number is negative</h1>
      <h1 v-else-if="num > 0">The number is positive</h1>
      <h1 v-else>This is not a number</h1>
    </div>
    <div id="conditional-rendering-part-3">
      <template v-if="dislpay">
        <h1>Outkast</h1>
        <h1>Wu Tang Clan</h1>
        <h1>A tribe Called Quest</h1>
      </template>
    </div>
    <div id="conditional-rendering-part-4">
      <!-- en el caso del v-show, si showElement es false al elemento h1 se le aplicara un display:none -->
      <h1 v-show="showElement">Using vshow directive</h1>
      <!-- en el caso del v-if, si showElement es false al elemento h1 desaparecreá del arbol -->
      <h1 v-if="showElement">Using v-if directive</h1>
    </div>
    <div id="practicando">
      <div :class="clase_dinamica">
        <h1
          :style="{
            color: 'white',
            padding: '2rem',
            fontSize: '45px',
          }"
        >
          {{ estado }} {{ conclusion }}
        </h1>
        <h1 v-if="edad < 21">Aun no puedes beber alcohol</h1>
        <h1 v-else-if="edad >= 21 && edad < 60">Disfruta de tu combinado</h1>
        <h1 v-else-if="edad >= 60">Eres demasiado viejo para beber.</h1>
      </div>
    </div>
    <div id="practicando2">
      <div>
        <h1>
          Hola mi nombre es {{ bioName }} y nací en {{ bioCountry }} el
          {{ bioDateString }}.
        </h1>
      </div>
      <div v-html="bioHtml"></div>
      <div></div>
    </div>
    <div id="iterating-elements">
      <hr />
      <div id="iterating-arrays">
        <!-- TA, La manera sencilla, iterando en base a un elemento y usando un key para asegurarnos de no tener errores al fetchar nuestra data. -->
        <h1 v-for="name in names" v-bind:key="name">{{ name }}</h1>
        <!-- Using the index of each array -->
        <hr />
        <h1 v-for="(name, index) in names" v-bind:key="index">
          {{ index }} - {{ name }}
        </h1>
      </div>
      <hr />
      <div id="iterating-with-objects">
        <h1 v-for="teacherFullName in teachersFullNames" :key="teacherFullName">
          {{ teacherFullName.first }} - {{ teacherFullName.last }}
        </h1>
      </div>
    </div>
    <div id="practicando3">
      <hr />
      <h1 v-for="artist in bestArtists" :key="artist">{{ artist }}</h1>
      <hr />
      <h1 v-for="(infoArtist, index) in infoArtists" :key="index">
        {{ index }} - {{ infoArtist.name }} - {{ infoArtist.song }} ({{
          infoArtist.genre
        }})
      </h1>
    </div>
    <div id="iterating-an-array-of-an-array">
      <hr />
      <div v-for="(actor, index) in actors" :key="index">
        <h1>{{ actor.name }}</h1>
        <h4 v-for="movie in actor.movies" :key="movie">
          {{ movie }}
        </h4>
      </div>
    </div>
    <div id="iterating-through-properties-of-an-object">
      <h1 v-for="value in myInfo" :key="value">
        {{ value }}
      </h1>

      <h1 v-for="(value, key, index) in myInfo" :key="index">
        {{ index }} - {{ value }} - {{ key }}
      </h1>
    </div>
    <div id="practicando4">
      <hr />
      <div v-for="(actor, index) in myActors" :key="index">
        <h1>{{ actor.name }}</h1>
        <h4 v-for="movie in actor.movies" :key="movie">{{ movie }}</h4>
      </div>
      <hr />
      <h2 v-for="(value, key, index) in myUser" :key="index">
        {{ key }} : {{ value }}
      </h2>
    </div>
    <div id="iterating-using-a-template-tag-directive">
      <template v-for="(name, index) in names" :key="index"> </template>
    </div>
    <div id="conditionally-rendering-listItems-using-vFor-directive">
      <template v-for="artist in hipHopArtist" :key="artist">
        <h2 v-if="aritst === 'Ms. Lautyn Hill'">
          {{ artist }}
        </h2>
      </template>
    </div>
    <div id="methods">
      <!-- Using bigotes syntax -->
      <h1>{{ 100 + 200 - 40 }}</h1>
      <h1>Using a static method called add() {{ add() }}</h1>
      <h1>{{ baseMultiplier }}</h1>
      <h1>{{ multiply(5) }}</h1>
      <div id="methods-part-1"></div>
      <div id="methods-part-2">
        <div id="inline-events">
          <h1>{{nameEvent}}</h1>
          <!-- Usando un click event -->
          <button v-on:click="nameEvent = 'Lebron James'">Click me to change name</button>
        </div>
        <div id="inline-event-counter-example">
          <h1>The current count is: {{ count }}</h1>
          <button v-on:click="count--">Resta 1</button>
          <button v-on:click="count++">Suma 1</button>
        </div>
        <div id="event-counter-example">
          <h1>The current count is: {{ countInsideMethod }}</h1>
          <button v-on:click="decrement">Resta 1</button>
          <button v-on:click="increment">Suma 1</button>
        </div>
        <div id="event-counter-example-with-params">
          <h1>The current count is: {{ countWithParams }}</h1>
          <button v-on:click="decrementWithParams(5)">Resta 5</button>
          <button v-on:click="incrementWithParams(5)">Suma 5</button>
        </div>
        <div id="event-function-to-change-name">
          <h1> {{ nameEvent2 }}</h1>
          <button v-on:click="changeName">Click to change name</button>
          <!-- la short hand de v-on: es @ -->
          <button @click="changeName">Click to change name</button>
        </div>
      </div>
    </div>
    <div id="practicando5">
      <h1>{{ (500 + 30) / 2 }}</h1>
      <h1>{{ operation() }}</h1>
      <h1>{{ operationDynamics(500, 30, 2) }}</h1>
      <h1></h1>
    </div>
    <div id="practicando6">
      <div id="cambioDeTexto">
        <h1>{{textoPractica}}</h1>
        <button @click="cambiaTexto()">Click para cambiar el texto</button>
      </div>
      <div id="multiplicaResta">
        <h1>{{resultado}}</h1>
        <button @click="resta(15)">Resta 15</button>
        <button @click="multiplica(2)">Multiplica x2</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // binding text
      // Usamos la regla de el syntax de bigotes para poder acceder a nuestra data dentro del templateTag que es nuestro HTML.
      // Este principio de llama text interpolation / interpolation de texto ?
      name: "Diego",
      greet: "Hello",
      // binding tect using the v-text directive
      band: "Fleetwod Mac",
      // binding html using the v-html directive, please always use templateLiterals for inyecting html into the templateLiterals = ``
      bindingHtml: `<b>Wu Tang Clan</b>`,
      bindingHtmlCrossSide: `<a href="#" onClick="alert('Yo yo yo you')">Win a prize by clicking here!</a>`,
      // binding Attributes - ID Attribute
      headingIdExample: "balmas-heading",
      // binding with a Boolean value
      isDisabled: false,
      // binding Attributes - Class Attribute
      status: "danger",
      //Conditionally render attributes/properties with classes
      isPromoted: false,
      isSoldOut: true,
      //Dynamically inyect style properties within an object
      textColor: "#3590F3",
      textSize: 40,
      styleObject: {
        color: "blue",
        fontSize: "50px",
        padding: "20px",
      },
      baseStyleObject: {
        color: "orange",
        fontSize: "60px",
        padding: "20px",
      },
      successStyleObject: {
        color: "green",
        backgroundColor: "lightgreen",
        border: "1px solid darkgreen",
        padding: "20px",
      },
      num: 1,
      display: true,
      clase_dinamica: "dinamico",
      estado: "Practicando",
      conclusion: "se aprende",
      edad: 59,

      bioName: "Pauman",
      bioCountry: "Barcelona",
      bioDateString: "17-08-1989",
      bioHtml: `<div><h1>A los 12 años me mude a usa y tuve la oportunidad de ver un cambio cultural bastante interesante.</h1></div>`,

      names: ["Diego", "Jarko", "Aleix"],

      teachersFullNames: [
        { first: "Diego", last: "Zito" },
        { first: "Jarko", last: "Garrido" },
        { first: "Aleix", last: "Abuli" },
      ],

      bestArtists: [
        "JamieXX",
        "Nicolas Jaar",
        "Disclosure",
        "Rusowsky",
        "Caribou",
        "Polo&Pan",
        "Four Tet",
        "Session Victim",
        "Motor City Drum Ensemble",
        "Pablo Bolivar",
      ],

      infoArtists: [
        { name: "JamieXX", genre: "dance/electronica", song: "On Hold" },
        { name: "Nicolas Jaar", genre: "slow/electronica", song: "Mi Mujer" },
        { name: "Disclosure", genre: "dance/electronica", song: "You & Me" },
        { name: "Rusowsky", genre: "dance/electronica", song: "So So" },
        { name: "Caribou", genre: "dance/electronica", song: "Odessa" },
        { name: "Polo&Pan", genre: "dance/electronica", song: "Nana" },
        { name: "Four Tet", genre: "slow/electronica", song: "Nova" },
        {
          name: "Session Victim",
          genre: "dance/electronica",
          song: "Good Intentions",
        },
        {
          name: "Motor City Drum Ensemble",
          genre: "dance/electronica",
          song: "Raw Cuts",
        },
        { name: "Pablo Bolivar", genre: "deep/electronica", song: "Reflect" },
      ],

      actors: [
        {
          name: "Robert De Niro",
          movies: ["The Godfather II", "Casino", "Goodfellas"],
        },
        {
          name: "Daniel Day-Lewis",
          movies: ["Gandhi", "The Last of the Mohicans", "Lincoln"],
        },
        {
          name: "Meryl Streep",
          movies: ["The Devil Wears Prada", "Don't Look Up", "The Post"],
        },
      ],

      myInfo: {
        name: "Diego",
        school: "Ironhack",
        course: "FE Vue",
      },

      myActors: [
        {
          name: "Denzel Washington",
          movies: ["American Gangster ", "El libro de Eli", "Déjà vu"],
        },
        {
          name: "Russell Crowe",
          movies: ["Gladiator", "A Beautiful Mind", "Master and Commander"],
        },
        {
          name: "Nicole Kidman",
          movies: ["Australia", "Days of Thunder", "Nine"],
        },
      ],

      myUser: {
        name: "Pauman",
        countryBirth: "Spain",
        favouriteFood: "Pork Ribs",
      },

      baseMultiplier: 5,

      hipHopArtist: ["Wu Tang Clan", "Ms. Lautyn Hill", "A tribe Called Quest"],

      nameEvent: "Michael Jordan",

      count: 0,

      countInsideMethod: 0,

      countWithParams: 0,

      nameEvent2: "Stephen Curry",

      textoPractica: "Hola!",

      resultado: 8,
    };
  },
  methods: {
    add() {
      return 100 + 200 - 40;
    },

    addDynamics(a, b, c) {
      return a + b - c;
    },

    multiply(num) {
      return num * this.baseMultiplier;
    },

    operation() {
      return (500 + 30) / 2;
    },

    operationDynamics(a, b, c) {
      return (a + b) / c;
    },

    increment() {
      this.countInsideMethod += 1;
    },

    decrement() {
      this.countInsideMethod--;
    },

    incrementWithParams(num) {
      this.countWithParams += num;
    },

    decrementWithParams(num) {
      this.countWithParams -= num;
    },

    changeName(event) {
      this.nameEvent2 = "Dwaine Wade";
      console.log(event);
    },

    cambiaTexto() {
      this.textoPractica = "Adios!!";
    },

    multiplica(num) {
      this.resultado *= num;
    },

    resta(num) {
      this.resultado -= num;
    },

  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.danger {
  text-decoration: underline;
}
.promoted {
  font-style: italic;
  color: blue;
}
.sold-out {
  color: red;
}
.available {
  color: green;
}

.dinamico {
  background-color: lightcoral;
}
</style>
