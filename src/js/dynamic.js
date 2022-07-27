const agente_1 = ["Brimstone", "Controlador", "Vindo diretamente dos EUA, o arsenal orbital de Brimstone garante que o esquadrão dele esteja sempre em vantagem. Sua capacidade de oferecer utilidade com precisão a distância faz dele um comandante inigualável na linha de frente."]
const agente_2 = ["Phoenix", "Duelista", "Chegando com tudo diretamente do Reino Unido, o poder estelar de Phoenix reluz em seu estilo de luta, incendiando o campo de batalha com luz e estilo. Tendo ajuda ou não, ele entra na luta como e quando achar que deve."]
const agente_3 = ["Sage", "Sentinela", "Como uma verdadeira fortaleza chinesa, Sage traz segurança para si mesma e para a equipe aonde quer que vá. Capaz de reviver aliados e rechaçar investidas agressivas, ela oferece um centro de calmaria em meio ao caos da batalha."]
const agente_4 = ["Sova", "Iniciador", "Nascido sob o eterno inverno das tundras russas, Sova rastreia, encontra e elimina inimigos com eficiência e precisão implacáveis. Seu arco personalizado e suas habilidades inigualáveis de reconhecimento garantem que nenhuma presa escape."]
const agente_5 = ["Viper", "Controlador", "Viper, a química dos Estados Unidos, emprega uma variedade de dispositivos químicos venenosos para controlar o campo de batalha e prejudicar a visão do inimigo. Se as toxinas não matarem a presa, seus jogos mentais certamente o farão."]
const agente_6 = ["Cypher", "Sentinela", "Cypher, um vendedor de informações do Marrocos, é uma verdadeira rede de vigilância de um homem só que fica de olho em cada movimento dos inimigos. Nenhum segredo está a salvo. Nenhuma manobra passa despercebida. Cypher está sempre vigiando."]
const agente_7 = ["Reyna", "Duelista", "Criada no coração do México, Reyna domina o combate individual, destacando-se a cada abate efetuado. Sua capacidade só é limitada por sua própria perícia, tornando-a bastante dependente de desempenho."]
const agente_8 = ["KillJoy", "Sentinela", "Killjoy, uma alemã genial, defende o campo de batalha facilmente usando seu arsenal de invenções. Se o dano causado por seu equipamento não der cabo dos inimigos, os efeitos negativos de seus queridos robôs dão conta do recado."]
const agente_9 = ["Breach", "Iniciador", "Breach, o homem-biônico sueco, dispara poderosos jatos cinéticos para forçar a abertura de um caminho pelo território inimigo. O dano e a interrupção que ele causa garantem que nenhuma luta seja justa."]
const agente_10 = ["Omen", "Controlador", "Omen, uma lembrança fantasmagórica, caça nas sombras. Ele cega os inimigos, teleporta-se pelo campo e deixa a paranoia assumir o controle enquanto o adversário tenta descobrir de onde virá seu próximo ataque."]
const agente_11 = ["Jett", "Duelista", "Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu."]
const agente_12 = ["Raze", "Duelista", "Raze chega do Brasil em uma explosão de carisma e armas letais. Com seu estilo de jogo \"porradeiro\", ela é craque em desentocar inimigos entrincheirados e limpar espaços apertados com uma bela dose de BUUUM!"]
const agente_13 = ["Skye", "Iniciador", "Mandando um salve direto da Austrália, Skye e sua equipe de feras desbravam territórios hostis. Com seus poderes de cura e suas criações que partem pra cima dos inimigos, qualquer equipe ficará mais forte e mais segura tendo Skye como aliada."]
const agente_14 = ["Yoru", "Duelista", "Yoru, nativo do Japão, abre fendas na realidade para infiltrar as linhas inimigas sem ser visto. Ele usa tanto artimanhas quanto táticas agressivas, e os alvos são abatidos sem saber de onde o ataque veio."]
const agente_15 = ["Astra", "Controlador", "Astra, a Agente ganense, utiliza energias cósmicas para moldar o campo de batalha a seu bel-prazer. Com total domínio da sua forma astral e um talento estratégico nato, ela está sempre anos-luz à frente dos inimigos."]
const agente_16 = ["Kay/O", "Iniciador", "KAY/O é uma máquina de guerra construída com um único propósito: neutralizar Radiantes. Ele é capaz de suprimir habilidades inimigas, comprometendo a capacidade de contra-ataque dos adversários e dando a si próprio e a seus aliados uma vantagem essencial em combate."]
const agente_17 = ["Chamber", "Sentinela", "Bem vestido e armado até os dentes, o criador de armas francês Chamber coloca os inimigos para correr com uma precisão mortal. Use e abuse do arsenal personalizado dele para segurar posições e abater inimigos de longe, criando a defesa perfeita para qualquer plano."]
const agente_18 = ["Neon", "Duelista", "Neon, nossa Agente filipina, avança em velocidades incríveis, descarregando surtos de radiância bioelétrica tão rapidamente quanto seu corpo consegue gerá-los. Ela corre à frente para pegar os inimigos de surpresa, abatendo-os mais rápido do que um raio."]
const agente_19 = ["Fade", "Iniciador", "Fade, uma caçadora de recompensas turca, usa o poder dos pesadelos para capturar os segredos dos inimigos. Personificando o próprio terror, ela persegue os alvos e revela seus medos mais profundos para, depois, destruí-los na escuridão."]

const agentes = [agente_1, agente_2, agente_3, agente_4, agente_5, agente_6, agente_7, agente_8, agente_9, agente_10, agente_11, agente_12, agente_13, agente_14, agente_15, agente_16, agente_17, agente_18, agente_19]
const numero_de_agentes= 19;
let contador = 0;

function loop_contador(){
    if (contador >= 0 && contador <= numero_de_agentes-1){
        return contador
    }
    else if (contador > numero_de_agentes-1){
        contador = 0
        return contador
    }
    else if (contador < 0){
        contador = numero_de_agentes-1
        return contador
    }
}

function ajustar_carta(contadorf){
    const classe_agente = document.getElementById("classe");
    const nome_agente = document.getElementById("nome");
    const imagem_agente = document.getElementById("imagem");
    const informacoes_agente = document.getElementById("informacoes");

    classe_agente.setAttribute("src", "src/img/classes/" + agentes[contadorf][1] + ".png");
    nome_agente.innerHTML = agentes[contadorf][0];
    imagem_agente.setAttribute("src", "src/img/agentes/" + agentes[contadorf][0].replace("/", "") + ".png")
    informacoes_agente.innerHTML = agentes[contadorf][2];
}

function passar_carta(){
    contador ++;
    var contadorp = loop_contador();
    ajustar_carta(contadorp);
}

function voltar_carta(){
    contador --;
    var contadorv = loop_contador();
    ajustar_carta(contadorv)
}