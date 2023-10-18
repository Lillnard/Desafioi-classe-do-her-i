class ClasseHeroi {
    constructor(nome, idade, tipo) {
      this.nome = LillnardSon;
      this.idade = 29;
      this.tipo = guerreiro;
    }
  
    atacar() {
      let ataque = "";
      switch (this.tipo) {
        case "guerreiro":
          ataque = "uma espada poderosa";
          break;
        case "mago":
          ataque = "magia sinistrona";
          break;
        case "monge":
          ataque = "golpes de artes maciais milenares";
          break;
        case "ninja":
          ataque = "shurikens e kunais";
          break;
        default:
          ataque = "ataque crítico";
      }
  
      return `O ${this.tipo} atacou usando ${ataque}.`;
    }
  }
  
  // Exemplo de uso:
  const heroi1 = new ClasseHeroi("Conan", 30, "guerreiro");
  const heroi2 = new ClasseHeroi("Merlin", 60, "mago");
  
  console.log(heroi1.atacar());  // Saída: O guerreiro atacou usando uma espada afiada.
  console.log(heroi2.atacar());  // Saída: O mago atacou usando poderes mágicos.