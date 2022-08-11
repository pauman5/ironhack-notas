const user = {
    name: "Diego",
    age: 31,
    music: "Rock",
    education: "High School",
    location: "Barcelona, Spain",
    yourOwnKey: function () {
      console.log(`Hola, mi nombre es ${this.name} tengo ${this.age} años y me encanta la musica ${this.music}. Mi educación es ${this.education} y vivo en ${this.location}. `);
    },
  };
  console.log(user.yourOwnKey());


  function printBio () {
    console.log(`Hola, mi nombre es ${arguments[0]} tengo ${arguments[1]} años y me encanta la musica ${arguments[2]}. Mi educación es ${arguments[3]} y vivo en ${arguments[4]}.`)
  };

  console.log(printBio("Diego", 31, "Rock", "High School", "Barcelona, Spain"));