import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface Manuscript {
  title: string;
  content: string;
}

const ManuscriptsSection = () => {
  const [expandedManuscripts, setExpandedManuscripts] = useState<{ [key: string]: boolean }>({});

  const manuscripts: Manuscript[] = [
    {
      title: "General e Soldado",
      content: `
O GENERAL E O SOLDADO

O general e o soldado: todo plano é dividido em duas fases, a fase de planejamento e a fase de execução da operação. Isso pode ser você fazendo uma dieta ou você elaborando um plano para sua empresa; todo plano se divide em duas fases, minimamente. O que é interessante dessa divisão é que ela permite que você se oriente como se portar em cada estágio. Na hora de fazer o planejamento, você é o general. Você deve entender e conhecer a si mesmo para conhecer as suas capacidades na hora de lidar com as propostas que você vai fazer. Por isso escrevi tanto até aqui: para que você não decida sob pressão, para que você entenda o fator tempo, para que você perceba o que é a curva angular. Então, tudo isso o planejador deve ter como mentalidade na hora de construir. O planejador deve estar sóbrio no momento da construção do seu plano; ele não pode estar emocionado, não pode estar apaixonado, não pode estar com raiva, senão ele não vai fazer isso direito, lembra, não decida sobre assédios.
Já falamos aqui sobre quanto o nosso cérebro custa para pensar e o quanto é mais fácil seguir instintos. Por isso, os instintos predominam com mais facilidade, porque é muito mais barato utilizá-los — instinto, hábito, vícios... Então, quando você planeja você consome muita energia criando métodos, estratégias, ordem de eventos, por isso você é o general, por isso você tem que estar sóbrio. E aí você deve organizar conforme as suas perspectivas. Eu vou falar sobre três fases do planejamento que você tem que ter. E quando você for o operador, o executor, você só faz, você não para para pensar mais. Porque se você parar para pensar, você vai ter dúvidas. Se você tem dúvida, você congela para tentar diluir a dúvida. E no meio de uma operação, você, cansado, criando dúvidas e congelando, vai perder, e isso é muito frequente aqui com os seguidores, as pessoas super estimam os pensamentos e querem o fazer na hora de executar, ai seus planos chafurdam. Portanto, é muito importante que você sendo o general saiba que está fazendo um plano como se fosse para alguém que você ama,” você mesmo”. E o seu soldado saiba que quem fez esse plano é alguém que se importa muito com ele. Esse é o principal viés que deve existir entre a ligação do general para o soldado, porque o entusiasmado, quando faz um plano motivado e cheio de adrenalina, não dá brecha para erro, totalmente estático, não dá brecha para falhas. E aí, quando chega a hora da crise, o soldado questiona a si mesmo: "Cara, esse plano não está dando certo.  Exemplo: “Tive um problema familiar agora, vou ter que abrir mão do plano hoje. Pô, tive uma reunião com meu chefe, eu tive que sair da dieta". E aí você, por não saber planejar, o seu soldado também não vai saber executar. E aí ele desiste do plano.

E.S.A.O.N (entenda bem esse tópico)
Perceba que um mau planejador transforma um soldado em um mau executor. Se você fizer um plano muito consciente, naturalmente será um executor muito melhor. Então, sempre que você fizer um plano, lembre-se daquilo que Cristo falou: "Ame ao próximo como a ti mesmo". Isso fará com que você elabore um plano pensando: "Cara, se eu estivesse ali executando esse plano, como eu gostaria que fosse feito?" Isso naturalmente te dará a condição de fazer um plano sensato. Mas você precisa se conhecer; não pode fazer isso com base em vaidade ou orgulho, porque você também será o executor. Claro, quando falamos de uma operação em uma empresa, você está colocando seus funcionários, sua tropa, para serem os executores. Mas é aquilo, se você não trata sua tropa como gostaria de ser tratado, você é um líder fraco. Não há o que se dizer então, é muito importante ter sensatez na hora de fazer a execução. "Ah, Cadar, como faço isso?" Existe um diagrama com um código de letras (que o Major Edson me ensinou)que é muito bom para você se organizar para realizar um plano, para sair de uma crise, como planejar, como decidir para fazer sua curva angular. Vou explicar agora.
ESAON, se pronuncia "ESA ON", que significa: 
Estacione, 
Sente-se, 
Alimente-se, 
Oriente-se e  
Navegue. 
Essas cinco letras você pode aplicar em qualquer momento de crise, porque percebe que no meio de uma crise você às vezes está cansado, fatigado, com fome, com dor. Então você para em algum ponto, se alimenta bem, descansa, se orienta, reorganiza seu plano e volta a navegar. É assim que o general deve fazer. Claro que em momento de criticos você terá que decidir no "menos pior", mas estamos falando do que pode ser feito com o planejamento. Tirando uma operação em que você tem que decidir em frações de segundos, quase tudo na vida tem um delay para tomar a decisão. É que às vezes você se sabota tanto que chega um momento em que já não dá mais para decidir, ela já decidiu por si mesmo. Mas, no geral, em uma empresa, uma organização de um grupo, você consegue ter um planejamento clamo se não tiver com risco de vida em jogo. E isso, o ESAON, te ajuda a se reconectar com seu porquê. Sem nenhum assédio de fome, cansaço, desgaste, você consegue se concentrar e organizar aquilo que é primordial.  Perceba decidindo com fome, você vai ao mercado com fome, e não faz as compras direito, compreende? Decidindo angustiado, você não vai decidir rápido. Esses são alguns dos fatores que já falamos na parte de assédio que atrapalham a vida de alguém ser um bom general.
Então pratique ESAON antes de decidir, precisou reestruturar um plano, vai iniciar um plano, pratica o ESAON, descansa bem, tira o dia para descansar, desopilar, ver coisas mais leves que não sobrecarregam, para deixar seu cérebro zerado. Aí você para, senta e só você decide, dentro da sensatez, isso dará um salto na sua zona de planejamento.
SENSATEZ 
Então, quando você for ser o general do seu plano, precisa ter a sensatez como prioridade para organizar, de modo que, quando for o soldado do seu plano, você tenha credibilidade em quem planejou para você, na consciência de que quem planejou aquilo pensou como você gostaria, como você saberia lidar com aquilo. Muitas vezes, um mau executor, um mau operador, deriva de um mau planejador. 
É aquilo "Eu não temerei uma tropa de leões comandados por uma ovelha, mas eu me preocupo com uma tropa de ovelhas comandadas por um leão" — Napoleão Bonaparte. 

Quem lidera a tropa tem condições de potencializar todos os seus efeitos, bem como tem condições de arruinar todas as suas operações. Um mau planejador, um cara que não se coloca no lugar do seu operador, é um cara fraco, sem experiência, e experiência não é apenas tempo; experiência é a soma de intensidade mais tempo. Uma pessoa que só teve tempo, ela só é velha. Uma pessoa que teve intensidade nesse tempo, por mais que seja curto, ela se torna experiente. O que faz um operador do BOPE-RJ em dois anos se tornar maduro não é o brevê; é estar operando com pessoas de nível muito elevado e sendo testado e testando suas habilidades constantemente. O operador amadurece muito mais rápido no BOPE por sua condição de intensidade. Você vai pegar um operador com pouco tempo de operação e ele consegue ter a experiência de pessoas com muito tempo, porque tiveram baixa intensidade. A intensidade vai definir o nível de experiência. Quando você vai planejar,  mas às vezes você não tem toda a experiência, mas você tem que ter a humildade de deixar brechas para suas falhas, o plano também vai andar bem.
PLANO COM POUCA EXPERIENCIA 
Não é demérito nenhum deixar brechas para o seu erro, dar uma margem no seu planejamento para lidar com contingências; isso não é fraqueza, é sensatez. Vejo algumas pessoas tentando planejar, fazendo planos perfeitos, obras de artes, as vezes me parece que tá mais preocupado em ganhar o titulo de planejador, do que realmente deseje que o plano da certo, e naturalmente eu sei que aquilo vai falhar, porque tenho experiência em planos, os faço tanto no trabalho, tanto na minha vida, dependendo do que se trata. Eu digo: "Cara, isso não vai dar certo." , eu olho o plano e vejo que o cara coloca alta intensidade, sem espaço para respirar na rotina, sem margem de erro. Sem espaço para falha, pode anotar no fator tempo daqui a pouco ele mesmo se sabota. Quando você não tem experiência, você tem que ser humilde para ouvir. Quando cheguei no BOPE, você acha que eu tomava todas as decisões sozinha? Isso veio com o tempo. Mas mesmo com o tempo, eu ainda parava para ouvir quem era mais experiente que eu. Sempre decidi sozinho, porque a responsabilidade depois recai sobre mim. Então, nunca deixei ninguém decidir por mim, mas ouvia todo mundo. Eu ouvia os mais experientes, qual o caminho melhor, qual o trajeto melhor. Aí, eu olhava todas as opções, o que eu entendia de planejamento, fazia o meu raciocínio e, graças a Deus, nunca perdi um terreno, nunca tive um policial fatalmente ferido na minha equipe. Poderia acontecer, porque bem ou mal você envolve risco, é complicado. Mas sempre priorizei decidir sozinho, porque às vezes o operador que te sugestiona é muito agressivo, então ele não calcula a proteção. Às vezes, o operador não calcula o resgate, ele não calcula, e eu tinha essa responsabilidade. Eu sabia o que não podia faltar na minha operação, e aí eu somava com as experiências deles e decidia. Até porque, se fosse errado, depois eu que teria que pagar esse preço. Então, tenha humildade de ouvir, deixe a margem para aprender, deixe a margem de erro. Você não está vivendo uma operação que está valendo vida, então é muito mais fácil você se dispor a risco, a falhas. Não vai morrer, então dá para continuar se desafiando.

Antes de abrir a internet, a primeira coisa que pensei para ter um futuro melhor para minha família foi construir. Eu disse: "Cara, vou construir, vou fazer umas casinhas bem simples e vou alugar. Assim, não só ganho um patrimônio, mas também terei aquela renda ali como um futuro salário. Se eu tiver, se de repente houver uma crise na minha vida e eu for demitido(não farei nada por onde, mas tenho que entender que isso é possível, ser planejador é enteder que “merda acontece”) Terei uma fonte ali que não deixará faltar nada para minha família." Eu tinha experiência com obra? Nenhuma. Então abri margem para aprender. Ia para a obra junto com os pedreiros. Acompanhava o que o mestre de obra falava. Percebi que meu engenheiro não sabia nada, então o troquei. Percebi que meu empreiteiro não ficava na obra, então eu não precisava dele. Porque para dar ordens eu também posso, só para ficar falando o que tem que fazer, e fazer também. Mas fiz a obra com o planejamento todo amarrado? Não, fiz cheio de brechas, para eu ter espaço de mobilidade, para  conseguir na hora crise de decidir. E talvez se eu fosse eu fosse fazer ela, hj, ficaria pronta em um ano e meio. Mas sem experiência ficou pronta em quase três anos. E foi tudo bem pois eu tinha me prepararado para algo que eu não sabia lidar. Era um terreno totalmente novo, eu não sabia como lidar com nada. Tudo para mim era novidade. E aí eu buscava conhecimento, perguntava, tirava dúvidas, estudava. Sobre planejar, quando não se tem experiência, você tem que ser modesto com suas capacidades. Você não pode querer fazer um plano vaidoso, um plano orgulhoso. "Olha, eu nunca falharei, eu nunca vou errar, eu sei o que é importante para mim." Você vai falhar, acredite.  Se você está em um processo de curva angular muito forte. Você tem mais derrotas do que vitórias. Só que na constância de não existir, no final, você ganha, essa a magica do processo. Mas é fato no processo todo, você tem muito mais derrota do que vitória. E isso não sou só eu que falo, tá? Michael Jordan, Jobs. Todos os caras que são fenômenos no que fazem, que são campeões na sua categoria, eles dizem a mesma coisa. O processo de aprendizado é muito mais de derrota do que de vitória, então você tem que ser humilde para aprender mais derrota do que de vitória, então se você humilde para passar o processo de aprender você vai chafurdar, vaidade precede a queda....

CULPA SUA
Então, entenda, na sua vida você é duas pessoas: você é o general que planeja e você é o executor. Se a sua vida não está boa, é porque você não é um bom planejador ou não é um bom executor. Você quer planejar na hora de executar e aí fica pensando demais; ou então, você não quer planejar, quer só executar porque na hora parece mais simples e você acaba sendo imprudente, isso traduz que você é fraco para um projeto de longo prazo. Entenda força é apenas uma das formas de elucidar problemas; ser realmente forte é sobre conseguir elucidar mais problemas. E você, que não consegue planejar nem executar por natureza, é fraco, nunca será forte. Nada que lhe for dado, você dará conta. Você começa projetos de luta e não chega até a faixa preta, você começa projetos de dieta e abandona porque hoje está muito cansado e não aguenta continuar comendo de maneira restritiva, quem mandou incluir restrições tão severas na dieta? Você nem se conhece, como vai conseguir planejar? Então, você vai se tornando o cara que não dá conta. Meu grande obstáculo na vida, graças a Deus, é nunca aceitar ser o cara que não dá conta. Em tudo que faço, irmão, perceba eu odeio escrever e estou fazendo um livro. Já falei para vocês, os medos são a sinalização de uma  limitação nossa e você tem que vencer todas as suas limitações para evoluir, se não, você não vai conseguir ser o potencial que você pode ser. E onde é que eu descubro as limitações? Nos desafios, se testando na zona de risco e desconforto. E É por isso que estamos escrevendo sobre o horizonte de consciência, pois nele observaremos algumas limitações comuns a todos. Mas precisamos nos expor aos desafios e a cada desafio de fase que a vida apresenta uma limitação e um medo que impedem a gente de evoluir aparece, medo de ficar sozinho, medo de critica, medo sofrer...são muitos medos bobos que limitam a gente.  Se conseguimos ultrapassar essas barreiras melhor percebendo o mundo em diversas dimensões, conseguimos nos colocar em vários pontos para sermos melhores planejadores. Então, você percebe que todo esse livro está sendo construído para te dar uma ferramenta para evoluir, para se tornar uma pessoa melhor, mas se você não abraçar a ideia, você vai continuar sendo o cara que não dá conta.

Eu aceito muita coisa na minha vida. Tenho uma estabilidade emocional que considero muito boa para lidar com muita coisa. Estava falando sobre isso com meu chefe um dia e disse: "Chefe, você precisa entender uma coisa. Não respondo bem com ameaças. Se me ameaçar, eu respondo à altura. Pressões e gritos comigo não me afetam. Fui criado por um pai que gritava muito mais do que vocês, isso não me afeta. Mas quando o senhor diz 'esperava mais de você', aí sim, eu fico abalado. Não vou dormir, vou virar a noite para resolver o que o senhor mandar fazer, porque não sou o cara que não entrega o que promete. Então, é melhor me tirar do time." E ele tinha dito isso, vou te falar, em tom de brincadeira. Foi numa conversa informal entre oficiais, ele brincou com isso sobre uma missão que, bom, não passou totalmente por mim, mas ele me incluiu na piada. Mas isso me afeta profundamente, não conseguir resolver algo. Então fui conversar com ele e disse: "Senhor, pode gritar, isso não vai me afetar; pode ameaçar, isso também não. Mas dizer que 'não dou conta', isso sim me afeta. Então, por favor, então se precisar do meu cargo, eu entrego, se o sr enxerga que não respondendo mesmo faca vontade” Ele riu, falou que era piada, que nem se ligou mas entendeu. Porque quando falar, esquece, eu faço o que for necessário para resolver. E eu vou resolver, não importa como. Existem coisas que realmente não tenho habilidade, mas vou encontrar uma solução. Sempre fui assim e é assim que eu tenho que ser, meu irmão. Caso contrário, não seria quem eu sou.

Agora que você entende que você é o general e também o executor, seja para organizar sua empresa, liderar sua empresa, ou organizar sua vida, você precisa saber lidar com essas duas faces. E, cara, isso não foge ao mandamento do Novo Testamento: ame o próximo como a ti mesmo. Pense no executor como alguém que é seu filho; assim, você nunca fará um plano colocando-o em risco. Eu nunca escolhi ir a uma operação onde o pior lugar não fosse o meu. Não é questão de querer aparecer, ou provar nada, entende? Mas se eu acho que ali é mais perigoso, eu não quero arriscar outra pessoa porque, se precisar tomar alguma decisão emergencial, até parar tudo e voltar, eu consigo. Sou líder, então sempre fiz essa escolha. Por quê? Porque o líder deve se colocar no lugar de sua tropa. Se ele não sabe fazer isso, ele não é um líder; ele é um fraco. Se ele faz um plano totalmente arriscado e coloca alguém para executá-lo, então ele é um falastrão. Sabe, ele é o cara que vive da fama dos outros. Deu certo, mas quem arriscou a pele? Pô, foi o Sargento e o Cabo. Então, foram o Cabo e o Sargento que tiveram sucesso, graças a Deus. Portanto, você deve se colocar na posição do seu executor. Se você praticar isso em suas rotinas, na dieta, nos treinos, nos seus planos de musculação, nos seus projetos de vida, quando você liderar os outros, é só repetir. É só repetir esse raciocínio que você vai voar. 
O livro "Monge Executivo" trata disso de uma forma sublime. É um excelente livro de liderança. Para mim, é o melhor. Eu já li vários, mas esse continua sendo o melhor para mim. "Monge Executivo" vai abordar exatamente isso, algo que eu sempre pensei, mas está muito bem escrito, de forma simples, em um livro pequeno. Vale a pena a leitura.

Nas próximas partes, sobre a criação e construção de um plano, vamos abordar a divisão do plano. Como você deve dividir seu plano quando se senta como general para garantir seu sucesso? Estamos trabalhando nas partes precursoras, aquilo que vem antes, aquilo que precisamos entender, para que, na hora de dividir o plano nas três fases, você consiga fazê-lo bem. Você conseguirá criar algo coerente, plausível, funcional e conectivo. Explicarei tudo isso na próxima fase. Isso será benéfico para você. Isso ajudará você a construir um futuro melhor para si mesmo, para sua família e, espero, para uma sociedade melhor. Certo? Conto com vocês. 

E isso é apenas o começo.      
      `,
    },
    {
      title: "Senhor do Tempo",
      content: `
Como me tornei o Sr do tempo: Eu sempre fui sozinho, sempre fiquei em casa(tinha meus motivos)  e e de ficar em casa com a minha mãe. Ora com meus comandos em ação, ora vendo tv. E era através dessa programação que eu cultivava meus valores e criei alguns dos princípios que fizeram construir quem sou. Um dos princípios que mais me fortaleceu foi o do senhor do tempo, além dele me livrar das minhas angustias, ele também me deu força, pois a energia que iria embora com a ansiedade de ter o q não tinha, com o martírio de me fazer um coitado....acabaram. vou tentar traduzir nessas linhas a minha experiência e como eu aprendi um dos maiores conhecimentos estoicos sem nem saber o que era isso.

Eu devia ter uns 11 ou 12 anos, a gente tinha uma vida bem escassa e bastante tumultuada, meu pai não ficava em casa, a maioria do tempo passava só eu e minha mãe,  minha vida era em torno estudar(de forma precária) e trabalhar, nessa época, acho que era na praia fim de semana. Não sobrava muito na minha casa e eu me comparava as pessoas e por mais que eu não expusesse minha realidade em uma vitrine, era nítido que ninguém ali usava sapato a um ano, porque não tinha dinheiro para chinelo e isso, em dias de dificuldade me massacrava, pois ficava me cobrando e culpando Deus por tudo, me vitimizando por ser um coitado e etc.

Eu tinha uma tv tubo de 20 polegadas no meu quarto e minha antena era um fio, que eu atravessava atrás dela e corria com ele o quarto todo, eu  precisava ficar mudando de lugar para melhorar o sinal. No sbt, na super terça passava um filme do Densel Whashiton chamado “huricane”.

Contexto do filme: 
O personagem principal é um lutador de boxe negro chamado Huricane que foi preso injustamente e que na prisão, também sofria retaliações. E ele era forte, mesmo sem parentes, mesmo sem apoio, mesmo sendo condenado e massacrado e ele atribuía  isso a uma frase que ele sempre repetia “Eu sou o senhor do meu tempo e nada que eu n tenho me faz falta, me basta tudo que tenho”.(eu n revi o filme para ser preciso, fiquei preocupado de não ser mais a mesma percepção e acabar contaminando o raciocínio e a importância dele)

E em um dos momentos que os guardas vão entrar na cela dele ele repetia essa frase para enfrenta-los, em um momento que ele era pressionado a mudar alguma conduta ele repetia essa frase. Ele usava frase diante todo castigo e desafio e isso foi o que mais marco no filme, como ele ajustava a mente dele para não se importar.

Essa frase é um salto de consciência se bem entendida vamos la tentar explicar:
Entenda que o tempo é a figura de linguagem representando a emoção, quando ele diz “eu sou o Senhor do meu tempo” é que ele não consome ou desperdiça seu tempo com reações, ele age conforme ele quer e não como resposta.

Exemplo: Mohamend ali, costumava insultar seus adversários para provocar reações e assim controlar a luta, pois seus adversários reagiam ao efeito dele, filosoficamente falando eles eram escravos de suas reações e ali, vencia lutas por entender isso. Ele conduzia as pessoas para onde ele queria, para o descontrole, para falta de estratégia, para o consumo desnecessário de energia, até que ele preservado, finalizava a luta.  Um lugar que retrata bem isso é no filme Sobre Jorge Foreman, la eles retratam bem essa habilidade do Ali, que ele fazia com todos.

Então percebe, Ser o Senhor do seu tempo, é controlar suas emoções e reações, te impedindo de ser escravo de ninguém.

Epiteto tem um episodio atribuído a ele, onde seu Senhor, ao se irritar com a postura dele de dizer que era livre, mesmo legalmente sendo escravo, manda outros escravos o segurar e quebrar a sua perna e diz –“esta vendo eu tenho controle sobre você escravo”. E ele retruca “você quebrou a perna do meu corpo, assim como uma gripe me contamina e eu também n posso controlar, mas o meu modo de pensar e decidir, continua livre”. Não sei se de fato essa passagem aconteceu, mas ela exemplifica o controle sobre as emoções que o mestre estoico epicteto tinha.

A outra parte é um código que ensina a se livrar dos anseios e preocupação, é “me satisfaço com tudo que tenho e nada q não tenho me faz falta”, aqui, nesse trecho ele tirou de mim, toda necessidade de comparação e me fez ser grato pelo o que tinha, aqui eu comecei o processo de parar de culpar Deus e abandonar o coitadismo. 

Ao se contentar com o que tem, nada que não tem fará falta e aqui se você entender bem, se liberta de qualquer chantagem, pois nada do que esta fora da sua esfera de controle (comportamento, decisão e reação) lhe interessam.

No filme ele mostra ele entendendo isso, ele é jogado na solitária e ao invés de chorar ou lamentar que era uma medida injusta ele dizia “ eu quero ir para solitária”, ele trazia para sua mente que aquilo era um processo onde o guarda queria tirar algo dele, para satisfazer suas iniquidades ao vê lo sofrer ou se dobrar, contudo ele dizia, eu quero ir, ai tiraram sua comida ele dizia “hoje eu quero jejuar”.  Percebe o poder de uma chantagem se esvaindo?
Imagina, em um ambiente onde você se compara por não ter, pela sua falta, pela ausência... o quanto essa linha de raciocínio despressuriza ? Começa a te sobrar energia, começa a te dar auto estima, começa em você a criar uma mentalidade que não ira oscilar com as desaventuras da vida.

Eu não sei se consigo expressar claramente o quanto entender esse raciocínio pode mudar a vida de um garoto pobre, nada mais podia me ser retirado sem minha decisão, minha paz, minha confiança não mais dependiam de aprovação ou consoantes, estavam em mim.

Como se o Kiko perdesse o poder de atribular mente do chaves.

Esse filme, foi com certeza o mais significativo na construção do monstro, as experiências da vida, mais para frente me fizeram empregar e amadurecer esse pensamento, mas aqui eu botei um alicerce que iria sustentar todas as outras.

Pois essa linha de raciocínio, nos dias difíceis me faziam não me abater, não me tornar escravo das circunstâncias, não quero aqui alongar sobre minhas dificuldades além do necessário, mas quando a vida me empurrou para baixo, quando eu tava no meio de lixo eu tava na minha cabeça inabalável, não colocava satisfeito mas não me lamentava, como teria feito anos antes. Eu projetava o meu tamanho e não me limitava à realidade que ainda habitava. Então nos dias difíceis ser o Senhor TEMPO não me deixou me abalar nem me limitar, eu escolhi minha reação. 


A TUDO DE GRAÇAS
Em 2005 nos corredores do gpt-fnrj, eu debatendo assuntos religiosos(embora eu bem cético nessa época) com o então soldado Phelipe(última vez que o vi, estava como pqdt na esa), ele  garoto evangélico, muito evangélico diga-se de passagem e nesse debates ele deu mais um ponto ao senhor do tempo, ele disse uma passagem bíblica “a tudo de graças” e essa simples frase bíblica me deu um alivio na hora de controlar minhas inquietudes diante as injustiças que me eram impostas.

Ai dava merda e eu falava, graças a Deus, dava certo, eu graças a Deus, essa frase me fez lembrar que eu devia ser grato por tudo que tinha e por tudo que acontecesse também.

Ela futuramente me alinhou com oração de serenidade 
” Concedei-nos, Senhor, a Serenidade necessária 
para aceitar as coisas que não podemos modificar, 
Coragem para modificar aquelas que podemos, 
e Sabedoria para distinguir umas das outras.”

Não é sobre bloquear emoções, mas aprender lidar com ela e com os eventos em torno dela, o philipe, eu não tive mais contato e provavelmente ele não sabe como contribuiu para minha serenidade em lidar com as coisas.

vou citar 3 passagens na minha vida que fui o senhor do tempo e tive serenidade de aceitar o que não controlava.

Eu era soldado e fui escalado  para um treinamento no batalhão de infantaria, era uma pista de treinamento de obstáculo e combate localidade(um misto de maneabilidade e conduta de patrulha) o campo de aquecimento era suga, sendo revezada pelos instrutores, então a suga era constante, sem pausa para gente..e li no aquecimento, os instrutores tocavam gás e lembro de um instrutor falar em tom de pejorativo “ ta arrependido  de tanto sofrer né recruta” respondi “ não, sr, sofrimento era minha vida aqui tão me pagando para treinar isso é maneiro demais” o instrutor me tacou mais gas, mas não mudou o que eu pensava, todo mundo só era obrigado a passar uma vez, eu passei 3, tava vibrando parada maneira d mais.
Alguns alunos escolheram chorar, ficar reclamando que era absurdo aquilo e tal, provavelmente reagindo a dor física, eu escolhi curtir e parecia que dor não importava.

No corpo de fuzileiros, eu tive meu armário arrombado e todos os meus pertences particulares foram furtados, o sargento cumpriu uma ordem mal dada e de forma absurda passou o alicate em uma dezena de armários na cia do gpt, eu morava no quartel e perdi todos meus pertences pessoais e fardas....zerei tudo que eu tinha de uma vez só, todo mundo recuou porque os outros sargentos, intimidaram, eu escrevi tudo e botei para frente . Abriu se um procedimento entre eu e o sgt, fui perseguido, tive meu conceito reduzido, me dando a entender que minha carreira já era. Sub tenente Gilmar disse que essa carreira não era para mim, todo mundo da minha turma, viu meu conceito cair por isso e minha escala apertar, ali ele me fez entender que precisava estudar para sair e graças a isso, abandonei sonho de ser  1° Cão e comecei a estudar para oficial da polícia. Um amigo de turma sempre dizia para esses sgt e sub q eu tinha mágoa, que mandava abraço, mas eu nunca fiz isso, sou grato a todos que me perseguiram, pois sem eles, eu não seria o que sou hoje.

Sou, se não engano o último oficial promovido por bravura, um tipo de promoção rara de acontecer e por ser oficial e ter chance de pular muitas turmas, me deram uma atrasada na hora de me promover. Esperam chegar perto da minha promoção e publicaram, “fui promovido 20 dias antes de ser realmente”, se esperassem 20 dias eu ia a capitão e saltava 5 anos na minha carreira. Mas eu agradeci, quando abriu o curso do bope, só tenente poderia fazer, capitão não. Então por terem sido desleais comigo e atrasar minha carreira em 5 anos, eles me deram a chance conquistar meu maior objetivo, ser CAVEIRA, sou grato a eles.
* Eu não tenho padrinho, não sou filho de ninguém, não sou amigo de ninguém antes de trabalhar comigo, então tenho muitos amigos por onde trabalhei. Então não tinha a quem pedir para mudar, digo eles** porque falaram que foi proposital a data de publicação, mas de certo não sei e também não procurei saber.

Sempre que me perguntam, sobre a bravura de 20 dias, que é uma piada comum quando alguém descobre, eu sempre amenizo dizendo “que Deus sabe sobre tudo, sai de casa para ser soldado, hoje sou capitão e caveira, Deus é muito bom comigo”

Chegando no ESTOICISMO
 Em 2019, eu encontrei meu amigos do colégio, e o marido da Monique, leandro que era um concurseiro contumaz, estava dizendo que concurso publico era frágil, que após ler taleb percebeu o quanto estava remando para fora do seu próprio caminho e que agora ira botar a pele em jogo e que estava operando na b13(bolsa de valores) e bla bla bla tudo tão diferente de seu padrão normal que eu fui questiona-lo o que havia mudado, ele atribuiu tudo isso a um livro q leu a trilogia do taleb (o cisne negro, antifragil e pele em jogo). Eu não tinha habito de ler nessa época e também não me importava com bolsa de valores, mas pensei o “ um livro que é capaz de mudar uma pessoa deve ser um livro que valha a pena ler”

No meu caso o livro* abriu as portas para o estoicismo, o autor citava com sua palavras vários ensinamentos e alguns autores, marco Aurélio, Sêneca e Epiteto, o que me fez buscar suas obras para entender melhor.

*O livro me cobrou que eu tava acomodado com as minhas conquistas e que se quisesse ser o cara que cresce nos desafios, eu tinha que criar desafios, construção, pagina, projeto cão pastor, ler mais de 100 livros, tudo foi por causa dele e da sua provocação. Mas creio que terei que explicar isso em um capitulo próprio.

Os três grandes mestres do estoicismo são Professor Sêneca(cartas morais), escravo Epiteto e o imperador marco aurelio, percebe o titulo de cada um só de ver isso pensei “ uma filosofia que conforta um escravo é ensinada por um professor e aplicada por um imperador é algo que vale a minha dedicação.

Após ter acesso a obra eu percebi o quanto eu já praticava aquele comportamento pregado pela filosofia.
Na filosofia estoica, esse pensamento que eu discorri, sobre o Senhor do tempo, será conhecido como, dicotomia do controle, onde você divide o mundo em duas partes: o que você controla e o que não controla, basicamente.

O estoicismo aborda a dicotomia resumidamente dessa forma:
1. Controle Interno:
Os estoicos ensinam que o único controle verdadeiro que temos é sobre nossas próprias reações e escolhas internas, acreditam que devemos aceitar as circunstâncias externas com serenidade, pois não temos controle direto sobre elas.
2. Controle Externo:
Situações externas, eventos e as ações de outras pessoas estão além do nosso controle real, a sabedoria estoica envolve aprender a distinguir entre o que podemos controlar (nossas atitudes e escolhas) e o que não podemos (eventos externos).
O estoicismo incentiva a aceitação serena das circunstâncias externas e a focalização no desenvolvimento do controle interno, cultivando virtudes como coragem, sabedoria e autodisciplina. A ideia-chave é que a verdadeira liberdade está na capacidade de escolher nossas respostas às situações, independentemente das circunstâncias externas.
Essa dicotomia do controle é aplicada em diversas áreas, como psicologia, educação e gestão, para entender as percepções das pessoas em relação ao controle sobre suas vidas e comportamentos.

Área de influencia e área de preocupação
Em outras palavras, no mundo, existem apenas dois tipos de coisas - aquelas que você controla (influencia) e aquelas que você não controla(se preocupa, se aflinge sem ter capacidade de alterala).
O que está sob seu controle é limitado, principalmente sua reação aos acontecimentos. Nada é intrinsecamente bom ou ruim(essa é uma chave boa para entender); tudo depende de como você escolhe reagir. Quanto ao que está além do seu controle(influencia), a recomendação é entregá-lo sem preocupações, pois está fora de seu alcance. 'Se não tem o que fazer, feito está.’
Assim como o famoso exemplo do copo, se está meio vazio, meio cheio ou na metade, você não controla a quantidade no copo, mas tem controle sobre como reage a isso. O erro comum, muitas vezes cometido, é a tentativa de controlar tudo e todos, incluindo os resultados. Não podemos controlar o resultado, apenas nossas ações.

Você não pode controlar ganhar o campeonato, você controla, treinar, se dedicar e se aprimorar.
Por exemplo, não posso controlar passar em uma prova, mas posso controlar o estudo. O resultado está fora do meu controle; o que me cabe é estudar mais e o resto está além da minha influência.
Perceba a dor é inevitável, mas o sofrimento é opcional. Você caiu e se cortou, a dor da queda do ralado é real, aconteceu,  mas depois disso vem o lamento(reação), ai porque comigo, porque aconteceu, porque isso....esse lamento é desnecessário e opcional.

 Aqueles que se afligem, muitas vezes ansiosos ou depressivos, sofrem ao tentar controlar o incontrolável, esse caminho é angustiante e não saudável. Esse paradoxo pode causar traumas, pois a busca por controlar o que não está sob nosso domínio é uma fonte constante de frustração e sofrimento.

EXERCICIO: aplicação na vida

Beleza Cadar, mas como aplicar isso na minha vida de forma pratica, você usou na sua vida difícil, mas a minha ta em outro jogo
Com imaginação essa ferramenta do senhor do tempo,  que npo meu começo sme servia para despressurizar, no futuro se tornou um modelo pronto de como lidar com as inquietudes de montagem e de um processo de um plano, um direcionamento no que focar e oque não focar, o que se dedicar e o que deixar correr, isso lhe dará mais tempo, energia e resultado como me deu, TIRANDO DE MIM A REATIVIDADE E ME DANDO CONTROLE SOBRE AS ESCOLHAS.`,
    },
    {
      title: "Horizonte de Consciência",
      content: `
Quando falamos de horizonte de Consciência, devemos entender que horizonte é sobre
escolher como agir(proatividade) sem se influenciar, cada horizonte avançado você
consegue ser menos reativo. Mas para evoluir isso precisamos aprender as dimensões que
cercam todos os seres e com isso perceber a limitação de alguns ao entender os
acontecimentos. Na parte que falamos sobre busca da verdade relatamos que alguns tem
visão limitada da verdade e por isso se portam como mentirosos, por pura ignorância.
A ignorância pode fazer pessoas boas caminhar de forma errada, pois tomando percepções
errada, você decide errado tirando o bem pelo mal e vice versa.
Hoje eu compreendo que existe pelo menos 4 dimensões em torno de toda ação ou
omissão humana, uma é você(sua ação) outra é o opositor( o que resiste) a outra é o
efeito(a outra é causado) e a ultima seria a ressonância(aquilo que ocorrer no decorrer do
tempo e espaço), mas porque eu digo “pelo menos”, pois no meu nível de intelecto, onde
me acho no meu horizonte, eu só enxergo essas quatros dimensões, contudo, creio que
pessoas mais evoluídas podem enxergar mais níveis, precisamos ser humildes ao propor
minhas teorias. Assim com um jogador de xadrez, o iniciante observa a sua jogada o
experientes a sua e de seu oponente o profissional uma ou duas jogadas a frente,
jogadores de ponta calculam tantas jogadas que nem um computador consegue vencer.
Essa pode ser minha condição de avaliar as dimensões.
E eu preciso que vocês compreendam ela de forma que apliquem em sua vida, pois
perceber as dimensões em suas ações os projetaram jogadas a frente de quase todos os
médios, isso alavancará sua vida para o sucesso, bem como te possibilitara se proteger e
proteger os seus.
Perceba, se você conseguir entender a ressonância de suas ações você conseguirá
move-las de forma eficaz, projetando suas causas e efeitos.
Mas entenda não é como um jogo de xadrez, sobre calcular as jogadas, perceber as
dimensões não quer dizer que vocês as controlas, contudo entendendo elas você começa a
processar melhor suas ações e entender melhor as pessoas e suas limitações.
1º dimensão: visão unilateral, pessoas que só conquistou os primeiros horizontes, só
enxerga a si, e seus pontos e no geral, suas percepções de verdade são tomadas como
únicas, as vezes vai aparentar ser uma pessoa mimada ou egoísta ou mandona. Pois ao
perceber só o seu aspecto ele tenderá a ignorar as necessidades alheias, bem como seus
pontos de vistas. A pessoa nessa camada pode ser um Pai mandão, que tem boas
intenções mas é intransigente por que só tem o seu ponto de vista. Um pessoa simples que
tem dificuldade de socializar, então não consegue observer outras visões. Uma tv, um
autoridade, facilmente guia uma pessoa assim, embora sejam as vezes resistentes, eles
quando aceitam não questionaram, pois não tem dimensões para fazer contra ponto. Quem
habita essa dimensão como media em seus domínios precisa ser direcionado, pois o
caminho que ele achou ele ira persistir nele por demasiado, ele não tem percepção das
dimensões. Então no domínio que ele só tem uma dimensão ele irá persistir muito. São
excelentes executores, com ganancia controlada pela sua limitação de percepção. São
aquela pessoa que trabalha todo dia em um trabalho pesado que se tivesse conhecimento,
com essa força de trabalho, contudo devido sua limitação de ver outros pontos, acaba
sendo um repetidor, não conseguindo entender o que falta. São pessoas que você precisa
sempre ficar explicando, caso queira lhe abrir um novo a caminho, até que ela entenda e
tenha confiança para ficar segura no caminho.
2º dimensão: Visão bilateral, entende que tem o seu ponto, tem o outro, mas não calcula o
efeito da ação, oportunistas, vitimistas, buscadores da felicidade. Basicamente aquele que
não calcula amanhã o cara que vive sem entender as consequências, o cara que só
entende a oposição, mas não entende que pode causar um embate, é pouco calculista em
suas ações. Relações sociais de baixa profundidade, egoísmo, raso em seus projetos, é
imediatista, ganhos rápidos melhores que do que dedicação longa, as penalidades medias
então no geral com seus domínios nessa dimensão. Com seus dominós nessa direção essa
personalidade é influenciável pelo ambiente e sofre a consequência disso, o cara tomou
atitudes positivas colhe um futuro positivo, ele plantou uma vida de negatividade colherá no
futuro de consequência. Perceba o futuro de quem está aqui é uma questão de sorte, pouca
habilidade de geri-lo.
3º Dimensão: Visão tri dimensional, pioneiro da justiça e dos planos aqueles que
conseguem entender si, opositor e o efeito. Bom professor, lideres ou “referencia em seus
domínios”. Então ele consegue calcular os pontos após a ação, nos domínios que ele
enxergar a terceira dimensão, ele poderá se tornar um gerenciador, planejador e até um
manipulador. Em linhas virtuosas, tenderá o efeitos positivos, poderá compensar as ações
dos outros, pois calcula o efeito que outros não calculam. Por isso no domínio que você tem
3 dimensões você terá superioridade sobre os demais, podendo deixar arrogante e vaidoso
e isso é comum, dando aquela frase, “vaidade que precede a queda”, você calcula o efeito,
mas não calcula a ressonância. E em longo prazo você sofre o rebolt, o que nos ditados
comuns diria ser “ lei do retorno”. Poucas pessoas evoluídas vão adquirir mais de um
domínio ou área nessa dimensão. A personalidade profissional do individuo é
tridimensional, fazendo dele uma referencia nesse domínio, contudo no campo pessoal
social ele ainda não alcançou fazendo ele um dependente emocional e etc.
4º Dimensão: visão 4d, o que entende a ressonância, ele que percebe a profundidade do
efeito no fator tempo, se o unilateral enxerga ele e a pedra, o bidimensional compreende a
força que precisara empregar para lança-la , o tridimensional o efeito a curto prazo dela
batendo na agua, quem está na quarta dimensão entende que após o efeito do mergulho a
pedra criará ondulações que elas vão causar e talvez ate a onde ira ondular. Aqui você
entende o efeito borboleta ( teoria quântica que diz que o bater de asa de uma borboleta na
índia, causa um furacão no Havaí, fenômeno de pequena expressão que desencadeia a
longo prazo um grande fenômeno). As pessoas passaram a vida toda se dedicando e em
um domínio talvez, alcançaram a 4 dimensão. Aqui estão os fenômenos dentro de um
campo, os prodígios de uma área. Aqui você consegue entender que plantar boas coisas
hoje proveram, em um logo prazo uma retribuições na colheita, ficando mais claro como
funciona o que chamam “lei do retorno”, quem está nessa dimensão no campo pessoal, terá
entendimento que as virtudes são o caminho mais inteligente para uma colheita boa e que
os vícios são fraquezas que afugentam essa colheita.
Ex: A ressonância é o efeito borboleta e sua magnitude é a Eva que não calculou que
comer a maça iria da nessa confusão toda. Rs
Outro exemplo mais próximo
Quando Enzo Ferrari menospreza o seu admirador lamburguini, calculou só sua arrogância,
mas não percebeu que criaria dois grandes concorrentes, sendo que no processo da
lamburguini um engenheiro que não conseguiu ver seu projeto ir a frente , abre uma
segunda escuderia de carros luxuosos.
Percebe o efeito borboleta, que uma atitude danosa pode causar?
Você precisa compreender que cada dimensão aumenta a dificuldade de controlar sua
resultante, assim na primeira dimensão você contra você, na segunda dimensão você lida
com oposição e tem um certo controle até certo ponto, na terceira dimensão voce imagina
possíveis efeitos, a pratica irá lhe dar confiança,
Então entender as dimensões não quer dizer que você as controle, entendendo que elas
existem em todos os aspectos e domínios o faz perceber que proporções sua ação podem
chegar, mas não necessariamente controla-las, claro que alguns efeitos por repetições você
sabe que irá ocorrer, mas isso demanda experiência e pratica nesse domínio.
Para os leitores, a pertinência de entender essa dimensões é poder calcular suas ações
bem como entender em que área dimensional você está em um domínio pode lhe ajudara
refletir sobre sua evoluções e fraquezas, bem como entender melhor as pessoas e assim
entender melhor suas ações, muitas vezes uma visão unilateral por boa ação ou um
egoísmo infantil, pode causar um efeito nocivo ou uma ressonância desastrosa. Nesse
ponto que vocês precisam entender o quanto ações ruins podem ser causadas por pessoas
boas, que colocam só os seus interesses como prioridades.
E se na ressonância a gente percebeu que a lei do retorno nada mais é que a colheita
futura de uma ação e que ações viciosas, desvirtuadas que a curto prazo são inofensivas no
longo causam grandes transtornos, percebendo isso entendemos o significado da palavra
“pecado”
E por que a bíblia pontifica tão bem os hábitos que os geram, em latim essa palavra vem de
picar, com o entendimento de que é aquilo que separa, como um papel picado, que se
separa do papel original, como a Eva que ao pecar sai do paraíso, assim o homem que
peca hoje amanha, pelo efeito ressonância sai do caminho do paraíso. A bíblia vem mais
uma vez nos avisando através de suas palavras como nos, mesmo que da primeira
dimensão não sejamos separados de nosso caminho.
Assim o processo dimensional, a meu ver é uma forma de compreender melhor suas ações,
as dos seus iguais e suas consequências para que assim você possa com melhor
discernimento decidir sobre o que é justo ao rumo da sua vida.
Aplicando:
No cotidiano eu uso essa percepção para tentar entender as pessoas, suas motivações e
finalidades.
Essa busca da verdade no entendimento das pessoas me ajuda a dar o apoio certo, bem
como de serviço nas entrevistas e liderança em atividades. Essa leitura é fundamental para
desfazer rótulos, má interpretações e ajudar guiar as pessoas para o melhor caminho.
Entender as dimensões ajuda a chagar na verdade.
Essa habilidade no trato com as pessoas cria uma grande sinergia com a empatia,
facilitando assim lidar melhor com as pessoas, perceba o mundo não é manequeista “bem
ou mau” ele tem milhares de trações e variáveis que no geral impede alguém de ser o “ser
mal puro”, pois em aspectos da nossa vida nosso comportamento cria resultados negativos
mas não em todos os aspectos. Eu quero dizer que ao perceber as dimensões, você
consegue ter a percepção da intenção de alguém e assim começa a entender o
comportamento padrão que ele reproduzirá.
Exemplo: Compreendendo que a pessoa esta no unilateral, sendo ela boa em execução,
pensar em verdade como seu ponto, ele produzirá ações por imprudência, inconsequência
e isso te faz entender que certas tarefas ele pode causar transtorno, não porque é mal, mas
sim por n entender a dimensão.
Um pai intransigente, parece um vilão quando contrariado, contudo você consegue entender
que ele tem uma visão limitada, sua percepção não alcança os contra pontos, agindo com
linguagem n agressiva você terá mais chance de lidar com ele sem conflito, fazendo ele
concluir que o caminho apresentado é o melhor. Ele precisa aceitar o numero 5, você na
pode dizer que 5 é certo por seus argumentos, você precisa ir construindo com ele os
argumentos para que ele, sem se sentir pressionado, chegue a conclusão por conta própria
que o 5 é o melhor.
Uma pessoa bidimensional, no geral so enxerga uma jogada a frente, então ele não se
preocupa com o efeito, pois não tem pleno entendimento de como ele vai surgir ou agir,
então ela pode ser impulsiva e influenciada, pois no seu trato o objetivou ou a causa fim ta
tão distante e longe de se controle que ele prefere o momento, “um dia por vz”, ao lidar com
elas prometendo coisas muito futuras, no tratar com eles ganhos hoje, são melhores que
ganhos amanha.
Um adolescente, devera ter suas companhias fiscalizadas, pois elas o influenciaram e se
elas optarem por caminhos de ganhos impulsivos, drogas, promiscuidade ou algo do tipo,
ele tem grandes chances de segui-los. Até o nível dois a ambiência (ambiente+convivência
diz muito sobre a pessoa. Aqui estão os aprendizes, que buscam algo, mas n sabem como,
aqui estão os que podem ser manipulados, poia eles buscam algo, mas não calculam as
consequências. “mente vazia oficina de coach” essa piada bate aqui. (nad contra coach,
gosto de vários, mas a piada a gente não pode perder)
Uma pessoa Tridimensional exerga o efeito, começa a entender o longo prazo, é aquele
jovem que ta estudando invés de está na balada como a media, é o cara que nega hoje
para colher amanha, aqui começam a nascer aqueles que tem objetivo e buscam com eles.
Uma garota que troca encontros casuais pois entende que o melhor para ela é algo que
busque ser duradouro, essas pessoas precisam ser convencidas para serem movidas,
ofertas rasas tendem a não funcionar. Aqui por começar a entender o efeito, a pessoa
começa a entender o significado do que é justo, virtuoso no aspecto da lei do retorno,
mesmo não entendo todo o prologar das coisas. Essa personalidade esta no caminho da
razão, entaõ precisa refletir e ser convencido para ser conduzido.
Na quarta dimensão, estão aquelas pessoas que enxergam quase todos os ângulos do seu
campo, elas acabam sendo as pessoas que dominam o campo de atuação sua
movimentação por indução é parecida com a do unilateral, ele “só faz o que ele quer no
campo de domínio”, precisa fazer ele querer. Como no filme Whatcman, onde o Dr
Manhatan é induzido a uma ação, crendo que quis fazer isso. O jeito é apresentar o
proposito a ele para que ele aceite ou não colaborar. Eles compreendem a justiça, o
proposito, esta no caminho da razão, estando muito além dos efeitos próximos.      
      `,
    },
  ];

  const toggleExpanded = (title: string) => {
    setExpandedManuscripts(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const MAX_CHARS = 300;

  return (
    <section id="manuscritos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <BookOpen className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Manuscritos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reflexões profundas sobre desenvolvimento pessoal e fortalecimento interior
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {manuscripts.map((manuscript, idx) => {
            const isExpanded = expandedManuscripts[manuscript.title] || false;
            const shouldTruncate = manuscript.content.length > MAX_CHARS;
            const displayContent = isExpanded || !shouldTruncate 
              ? manuscript.content 
              : manuscript.content.substring(0, MAX_CHARS) + "...";

            return (
              <Card
                key={manuscript.title}
                className="group hover:border-primary transition-all duration-300 bg-card animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-heading font-bold text-primary group-hover:text-primary/80 transition-colors">
                    {manuscript.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    {displayContent}
                  </p>
                  
                  {shouldTruncate && (
                    <Button
                      variant="outline"
                      onClick={() => toggleExpanded(manuscript.title)}
                    >
                      {isExpanded ? "Ler menos" : "Ler mais"}
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ManuscriptsSection;
