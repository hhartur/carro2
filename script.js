class Veiculo {
    constructor(modelo, cor) {
      this.modelo = modelo;
      this.cor = cor;
      this.ligado = false;
      this.velocidade = 0;
    }

    ligar() {
      this.ligado = true;
      console.log("Veículo ligado.");
    }

    desligar() {
      this.ligado = false;
      this.velocidade = 0; // Resetar a velocidade ao desligar
      console.log("Veículo desligado.");
    }

    buzinar() {
      console.log("Beep! (Som genérico de veículo)");
    }
  }

  class Carro extends Veiculo {
    constructor(modelo, cor) {
      super(modelo, cor); // Chama o construtor da classe pai (Veiculo)
    }

    acelerar(incremento) {
      if (!this.ligado) {
        console.log("O carro precisa estar ligado para acelerar.");
        return;
      }
      this.velocidade += incremento;
      console.log(`Acelerando. Velocidade atual: ${this.velocidade}`);
    }

    frear(decremento) {
      this.velocidade -= decremento;
      if (this.velocidade < 0) {
        this.velocidade = 0;
      }
      console.log(`Freando. Velocidade atual: ${this.velocidade}`);
    }

    buzinar() {
      console.log("Fon-fon! (Buzina de carro)");
    }
  }

  class CarroEsportivo extends Carro {
    constructor(modelo, cor) {
      super(modelo, cor);
      this.turboAtivado = false;
    }

    ativarTurbo() {
      if (!this.ligado) {
        console.log("O carro precisa estar ligado para ativar o turbo.");
        return;
      }
      if (!this.turboAtivado) {
        this.turboAtivado = true;
        this.velocidade += 50; // Aumenta a velocidade em 50 quando o turbo é ativado
        console.log("Turbo ativado! Velocidade aumentada.");
        this.exibirEstadoTurbo();
      }
    }

    desativarTurbo() {
      if (this.turboAtivado) {
        this.turboAtivado = false;
        console.log("Turbo desativado.");
        this.exibirEstadoTurbo();
      }
    }

    exibirEstadoTurbo() {
        const turboStatusElement = document.getElementById("turboStatus");
        turboStatusElement.textContent = this.turboAtivado ? "Ligado" : "Desligado";
    }

    buzinar() {
      console.log("Vrummm! (Buzina de carro esportivo)");
    }
  }

  class Caminhao extends Carro {
    constructor(modelo, cor, capacidadeCarga) {
      super(modelo, cor);
      this.capacidadeCarga = capacidadeCarga;
      this.cargaAtual = 0;
    }

    carregar(kg) {
      if (this.cargaAtual + kg <= this.capacidadeCarga) {
        this.cargaAtual += kg;
        console.log(`Carga adicionada. Carga atual: ${this.cargaAtual} kg`);
        this.exibirCarga();
      } else {
        console.log("Capacidade máxima de carga excedida!");
      }
    }

    exibirCarga() {
        const cargaAtualElement = document.getElementById("cargaAtual");
        cargaAtualElement.textContent = this.cargaAtual;
    }

    buzinar() {
      console.log("Bóóóó! (Buzina de caminhão)");
    }
  }

  // Instanciar CarroEsportivo
  const meuCarroEsportivo = new CarroEsportivo("Buggati", "Azul");
  document.getElementById("modeloEsportivo").textContent = meuCarroEsportivo.modelo;
  document.getElementById("corEsportivo").textContent = meuCarroEsportivo.cor;

  // Instanciar Caminhao
  const meuCaminhao = new Caminhao("Scania", "Vermelho", 10000); // 10000 kg de capacidade
  document.getElementById("modeloCaminhao").textContent = meuCaminhao.modelo;
  document.getElementById("corCaminhao").textContent = meuCaminhao.cor;
  document.getElementById("capacidadeCarga").textContent = meuCaminhao.capacidadeCarga;

  // Funções para atualizar a interface
  function atualizarEstadoCarroEsportivo() {
    document.getElementById("ligadoEsportivo").textContent = meuCarroEsportivo.ligado ? "Sim" : "Não";
    document.getElementById("velocidadeEsportivo").textContent = meuCarroEsportivo.velocidade;
  }

  function atualizarEstadoCaminhao() {
    document.getElementById("ligadoCaminhao").textContent = meuCaminhao.ligado ? "Sim" : "Não";
    document.getElementById("velocidadeCaminhao").textContent = meuCaminhao.velocidade;
  }

  // Event Listeners para CarroEsportivo
  document.getElementById("ligarEsportivo").addEventListener("click", () => {
    meuCarroEsportivo.ligar();
    atualizarEstadoCarroEsportivo();
  });

  document.getElementById("desligarEsportivo").addEventListener("click", () => {
    meuCarroEsportivo.desligar();
    atualizarEstadoCarroEsportivo();
  });

  document.getElementById("acelerarEsportivo").addEventListener("click", () => {
    meuCarroEsportivo.acelerar(10);
    atualizarEstadoCarroEsportivo();
  });

  document.getElementById("frearEsportivo").addEventListener("click", () => {
    meuCarroEsportivo.frear(5);
    atualizarEstadoCarroEsportivo();
  });

  document.getElementById("ativarTurbo").addEventListener("click", () => {
    meuCarroEsportivo.ativarTurbo();
    atualizarEstadoCarroEsportivo();
  });

  document.getElementById("desativarTurbo").addEventListener("click", () => {
    meuCarroEsportivo.desativarTurbo();
    atualizarEstadoCarroEsportivo();
  });

  // Event Listeners para Caminhao
  document.getElementById("ligarCaminhao").addEventListener("click", () => {
    meuCaminhao.ligar();
    atualizarEstadoCaminhao();
  });

  document.getElementById("desligarCaminhao").addEventListener("click", () => {
    meuCaminhao.desligar();
    atualizarEstadoCaminhao();
  });

  document.getElementById("acelerarCaminhao").addEventListener("click", () => {
    meuCaminhao.acelerar(5);
    atualizarEstadoCaminhao();
  });

  document.getElementById("frearCaminhao").addEventListener("click", () => {
    meuCaminhao.frear(2);
    atualizarEstadoCaminhao();
  });

  document.getElementById("carregar").addEventListener("click", () => {
    const carga = parseInt(document.getElementById("carga").value);
    meuCaminhao.carregar(carga);
  });

  document.getElementById("buzinarCaminhao").addEventListener("click", () => {
    meuCaminhao.buzinar();
  });