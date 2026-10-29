/* nomes: matheus reffatti mello, everton canal costa, diogo machado de oliveira, miguel machado de oliveira e benito dos passos rosa.
turma: 1T */

// Array de strings com a lista de todas palavras aceitas no TERMUS
var palavras = [

 // A 
"ACENO", "AVISA", "AFINO", "ARPÃO", "AMBOS", "ÁPICE", "AXILA", "APITA", "ALUGA", "ANTAS", "ANUAL", "ALMAS", "APAGO", "APAGA", "ASPAS", "ASNOS", "AFETO", "AFETA", "AGUAR", "ATIVE", "ATIVA", "AVIAR", "ABRIL", "ANDOU", "ANDEI", "AFOGA", "ALFAS", "ADERI", "ADORO", "ADORE", "ABANO", "ABANA", "ABUSO", "ABUSE", "ABUSA", "ARMAM", "AGRAR", "ALADA", "ALAGA", "ALAGO", "AÉREO", "ÁUREO", "AURAS", "ARCAS", "AIPIM", "APARO", "APARA", "ALTAS", "ALGAS", "ALVOS", "AUTOR", "ALÇAS", "ARCOS", "ATIRA", "ATIRO", "ATIRE", "ÁCARO", "ANDEM", "ALISO", "ÁCIDO", "ACIMA", "ADAGA", "ADEUS", "ADORA", "ADOTE", "AFIAR", "AFINA", "AFLUI", "AFOGO", "AGITO", "AGORA", "AJUDA", "ALADO", "ALGUM", "ALIAR", "ALUNO", "ALTAR", "ALTOS", "AMADA", "AMADO", "AUDIO", "AMEBA", "AMENO", "AMIGO", "AMIDO", "AMORA", "ÍMPAR", "AMPLA", "ANÉIS", "ANIMA", "ANÕES", "ANTES", "ABRIU", "AONDE", "APITO", "APOIO", "ARAME", "ARARA", "ARCAR", "ARCOU", "ARDER", "AREIA", "ARENA", "ÁRIDO", "ARMAR", "ARMAS", "ARROZ", "ARTES", "ASILO", "ASSAR", "ASSIM", "ASTRO", "ATIVO", "ÁTOMO", "ATUAL", "ATRÁS", "ÁTRIO", "ATUAR", "AVEIA", "AVIÃO", "AVISO", "AZEDO", "AROMA", "ABRIR", "ANDAR", "APELO",

// B
"BABAR", "BACON", "BRIGO", "BRUXO", "BRUXA", "BAIXO", "BAIXA", "BENÇA", "BANDA", "BARÃO", "BOLAS", "BASTA", "BOTES", "BACIA", "BANJO", "BAGRE", "BAILE", "BALAS", "BALÃO", "BALDE", "BANCO", "BANDO", "BANAL", "BOLHA", "BANIR", "BANHA", "BARCO", "BARDO", "BREGA", "BARRO", "BARRA", "BASES", "BATEM", "BATIA", "BATOM", "BARCA", "BAURU", "BEBER", "BEIRA", "BEIJO", "BELAS", "BELGA", "BERRO", "BERÇO", "BINGO", "BICHO", "BIGAS", "BIRRA", "BISPO", "BLUSA", "BOATE", "BOCAL", "BOCAS", "BOCHA", "BODES", "BOINA", "BOIAR", "BOLAR", "BOLOS", "BOMBA", "BESTA", "BONDE", "BÔNUS", "BORDA", "BORRA", "BOSTA", "BOTAR", "BOTAS", "BRADO", "BRASA", "BRAVA", "BRAVO", "BREVE", "BRIGA", "BRISA", "BROCA", "BROTO", "BRUTO", "BUCAL", "BUCHA", "BUNDA", "BURRO", "BUSCA", "BUSTO", "BOTÃO", "BANHO", "BLEFE", "BENTO", "BATER", "BATEU",

// C
"CROMA", "CORAL", "CORES", "CERVO", "CLARA", "CASCA", "CAÇAR", "CENTO", "CEIAR", "CANTA", "CURSO", "COMBO", "CLIPS", "CINTA", "CURVO", "CLICA", "CABER", "CLUBE", "CALDO", "CALMO", "CURTA", "CURTO", "COROA", "CRUZE", "CRUZA", "CONTA", "CATAR", "CULTO", "CULTA", "CINZA", "CRAVO", "CRAVE", "CRAVA", "CLAVA", "CURVA", "CURVE", "CUSTA", "CUSTO", "CONTE", "CORNO", "CANTO", "CANTE", "CONTO", "CORVO", "CAÇAS", "CABOS", "CACAU", "CACHO", "CANOS", "CAFÉS", "CORTE", "CORTA", "CORTO", "CÔRTE", "CAGAR", "CALVO", "CAGÃO", "CAIAM", "CAÍDA", "CAÍDO", "CAJUS", "CALAR", "CALÇA", "CALDA", "CALOR", "CALMA", "CALOS", "CAMAS", "CAMPO", "CANAL", "CANAS", "CANGA", "CANIL", "CANJA", "CANOA", "CAPAS", "CAPAZ", "CAPIM", "CAPTA", "CAPTO", "CAPUZ", "CARÃO", "CARDE", "CARAS", "CARGO", "CARGA", "CÁRIE", "CARNE", "CAROS", "CARPA", "CEGOS", "CINTO", "CARRO", "CASAR", "CASAS", "CASCO", "CASEI", "COSTA", "CARTA", "CESTA", "CAUDA", "CAUSA", "CAVAR", "CAIXA", "CEBOS", "CEDER", "CEGAS", "CEGAR", "CEIAS", "CELAS", "CELTA", "CENAS", "CASAL", "CERCA", "CERAS", "CERTO", "CHAVE", "CHATO", "CHEIO", "CHINA", "CHORA", "CHUVA", "CICLO", "CIFRA", "CINCO", "COVAS", "CIPÓS", "CIRCO", "COICE", "CISCO", "CLARO", "CLIMA", "COALA", "COBRA", "COCOS", "COXAS", "COFRE", "COISA", "COLAR", "COLHE", "COLMA", "CALOR", "COMER", "CONDE",

// D 
"DRAMA", "DEVER", "DURMA", "DARDO", "DORMI", "DORME", "DENTE", "DATAS", "DOBRA", "DOBRE", "DUBLÊ", "DOBRO", "DOIDA", "DOIDO", "DOCES", "DOCAS", "DÓCIL", "DUBLA", "DOGMA", "DETER", "DEIXA", "DEIXO", "DÓLAR", "DEIXE", "DOMAR", "DURMO", "DÚZIA", "DROGA", "DAMAS", "DORES", "DORAR", "DADOS", "DANOS", "DANÇA", "DANÇO", "DEUSA", "DEVEM", "DONDE", "DEVES", "DANDO", "DIZER", "DUCHA", "DURAR", "DITOS", "DISSE", "DISCO", "DITAR", "DUELO", "DUETO", "DUROS", "DUQUE", "DUNAS", "DELAS", "DELIR", "DELTA", "DESSA", "DESCE", "DESCI", "DESÇA", "DEDOS", "DITOU", "DICAS", "DIQUE", "DOZES", "DUPLA", "DUPLO",  

// E 
"ENTES", "ENTRE", "ERGUE", "ESTES", "ESTAS", "ESSAS", "ESSES", "ÉPOCA", "ERVAS", "ENTRO", "ENTRA", "ERROS", "ERETO", "EIXOS", "ELITE", "ECOAR", "EDUCA", "EMPOR", "EMANA", "EMITE", "EMITO", "EMULA", "ENFIM", "ENCHI", "ENCHO", "ENTRA", "ENVIA", "ENVIO", "ERETA", "ERGAM", "ERGUI", "ESPIA", "ESPIE", "ESTAR", "ESTOU", "EXATO", "EXATA", "EXIBE", "EXIBI", "EXIJO", "EXAME", "ÊXITO", "EXALA", "EXALO", "EXALE", "EXILA", "EXILO", "EXILE", "EXIGE", "EDEMA", "EDUCO", "EMAIL", "EXITE",  "ENTÃO",  "ENXER", "ERETA", "ERGAS", "ESQUI", "ESTÃO", "ETAPA", "ETNIA", "EUROS", "EVITA", "EVITO","EXTRA", "EXIGI", "ÊXITA", "ECOAM", "EMANO", "ECOOU", "EVITE", 
 
// F 
"FÚTIL", "FOSSA", "FURTO", "FROXO", "FROXA", "FINCO", "FINCA", "FICOU", "FAROL", "FUMAR", "FUGAZ", "FUMOS",  "FUMEI", "FAIXA", "FUMOU", "FUNGO", "FARPA", "FOFÃO", "FOGÃO", "FUGIU", "FOICE", "FARÇA", "FUNDI", "FUNDO", "FUNDE", "FUGIR",  "FUGAS", "FUZÍL", "FALAS", "FETOS", "FEUDO", "FOGOS", "FALOU", "FALAR", "FALHA", "FALHO", "FILME", "FILMA", "FILMO", "FEBRE", "FOLGA", "FARDO", "FAZER", "FACAS", "FACHO", "FÁCIL", "FADAR", "FACÃO", "FANHO", "FALTO", "FARRA", "FASES", "FEZES", "FATAL", "FATIA", "FATOR", "FRACO", "FRACA",  "FAVOR", "FRUTA", "FARDA", "FALTA", "FACES", "FORMA", "FECAL", "FINJA", "FAUNA", "FAUNO", "FEIRA", "FEDER", "FERRO", "FEDOR", "FEIOS", "FÊMEA", "FEIXO", "FEIXE", "FORJA", "FALIR", "FARTA", "FARTO", "FALSA", "FALSO", "FALIU", "FELIZ", "FÊNIX", "FERAS", "FERIA", "FÊMUR", "FEROZ", "FLORA", "FERIR", "FERIU", "FEITO", "FEITA", "FESTA", "FOCAS", "FOCOU", "FORNO", "FOCOS", "FINJO", "FADAS", "FLUXO", "FLUIR", "FOBIA", "FLASH", "FOFOS", "FOFAS", "FIRMA", "FIADO", "FORCA", "FORÇA", "FOCAR", "FONTE", "FICAR", "FATOS", "FISGA", "FINAL", "FISGO", "FIXAR", "FIRMO", "FIRME", "FROTA", "FIXOS", "FORTE", "FIBRA", "FILHA", "FILHO", "FIGOS", "FENDA", "FICHA", "FISCO", "FITAS", 

// G 
"GÊMEO", "GANHE", "GABAR", "GENRO", "GERAL", "GANHO", "GRILO", "GRITO", "GRIFE", "GRIFO", "GRUDE", "GEADA", "GELAR", "GANSO", "GARÇA", "GADOS", "GAMBÁ", "GALÃO", "GATOS", "GERME", "GEMER", "GORDO", "GORDA", "GRAMA", "GRIPE", "GELOS", "GIRAR", "GRANA", "GATAS", "GRUPO", "GAITA", "GALHO", "GOSMA", "GAROA", "GASTE", "GÊNIO", "GÊNIA", "GROTA", "GENTE", "GRUTA", "GRAVE", "GOMAS", "GOSTA", "GASTO", "GESTO", "GREGO", "GRADE", "GOSTO", "GAGOS", "GREGA", "GALÊS", "GIROS", "GURIA", "GURIS", "GARFO", "GASTA", "GOTAS", "GÍRIA", "GOZAR", "GOELA", "GOLPE", "GORRO", "GLOBO",

// H 
"HORTA", "HARPA", "HERÓI", "HIENA", "HONRA", "HAVER", "HAVIA", "HONRE", "HUMOR", "HIATO", "HORDA", "HOMEM", "HÍFEN", "HOTEL", "HINOS", "HOUVE", "HIPER", "HARÉM", "HIDRO", "HINDU", "HÉLIO",

// I 
"ÍNDIO", "IDEIA", "IDEAL", "IRMÃO", "IRMÃS", "IMPOR", "INATO", "IMPAR", "INATA", "IGUAL", "INVÉS", "IRADO", "IRADA", "INTER", "IDOSO", "IDOSA", "IMUNE", "IDADE", "ILESO", "ILESA", "INFRA", "ILUDA", "IDEAR", "IMITO", "IMITA", "IMITE", "ILEAL", "INOVE", "ISCAR", "ISOLE", "ISOLA", "ISOLO", "INALE", "INCHE", "INFLE", "INFLA", "IATES",

// J
"JARRA", "JOGOS", "JANTO", "JEITO", "JARRO", "JASPE", "JATOS", "JEJUM", "JENGA", "JIPES", "JOGAR", "JOGUE", "JOGOU", "JÓIAS", "JOVEM", "JUDIA", "JUDEU", "JULGA", "JUNTO", "JANTA",

// L
"LAGAR", "LIMPA", "LUZES", "LUTAR", "LUTOU", "LERDO", "LERDA", "LAZER", "LASER", "LARGO", "LINDO", "LONAS",  "LENTA", "LENTE", "LAGOA", "LOJAS", "LHAMA", "LUVAS", "LONGA", "LINCE", "LUPAS", "LIVRO", "LIVRE", "LÍTIO", "LAGOS", "LAMAS", "LAMBE", "LAMPA", "LENÇO", "LANÇO", "LANÇA", "LANCE", "LANDO", "LARVA", "LASCA", "LASSE", "LATAS", "LATIM", "LATIR", "LAVAR", "LAVRA", "LAVOU", "LEAIS", "LEGAL", "LEIGO", "LEITE", "LEMAS", "LENDO", "LENHA", "LENTO", "LERAM", "LEREM", "LERIA", "LESMA", "LEVAM", "LEVAR", "LEVOU", "LIBRA", "LIDAR", "LIDOS", "LIGAR", "LIGOU", "LIMÃO", "LIMAR", "LIMBO", "LIMPO", "LINDA", "LINHA", "LÍRIO", "LISAS", "LISOS", "LISTA", "LITRO", "LIXAR", "LIXOS", "LOCAR", "LODOS", "LOIRA", "LOIRO", "LOMBA", "LOMBO", "LONGE", "LORDE", "LOUCA", "LOUCO", "LOURO", "LOUVA", "LOUVE", "LOUVO", "LUGAR", "LUNAR",

// M
"MACAU", "MILHO", "MOÍDA", "MOÍDO", "MASSA", "MERDA", "MULTA", "MINTO", "MINTA", "MOTOR", "MENOS", "MUNDO", "MORNO",  "MENOR", "MANTO", "MURAL", "MOLHO", "MOLHA", "MUITA", "MOITA", "MOÇAS", "MUITO", "MENTA", "MORTE", "MONTE", "MONTA", "MONTO", "MUROS", "MONGE", "MORTO", "MACHO", "MACIA", "MACIO", "MAÇÃS", "MADAS", "MADRE", "MAIOR", "MAIAS", "MALES", "MALHA", "MALTA", "MAMÃO", "MAMÃE", "MANAS", "MANDO", "MANGA", "MANGO", "MANHÃ", "MANIA", "MANOS", "MANTA", "MAPAS", "MARCA", "MARCO", "MARES", "MARTE", "MATAR", "MATEI", "MATOS", "MATOU", "MEADA", "MECHA", "MÉDIA", "MEDIR", "MEDOS", "MEIGO", "MEIOS", "MELÃO", "MELAR", "MENTE", "MEXAM", "MEXAS", "MEXER", "MEXEU", "MEXIA", "MIADO", "MÍDIA", "MIMAR", "MINAS", "MINHA", "MIRAR", "MISSA", "MITOS",

// N
"NABOS", "NADAR", "NÍVEL", "NADEI", "NADOU", "NARIZ", "NASAL", "NASCE", "NASCI", "NATAS", "NATAL", "NAVAL", "NAVES", "NAVIO", "NEGAR", "NEGOU", "NENÉM", "NETAS", "NETOS", "NEVAR", "NEVOU", "NEVES", "NÉVOA", "NINAR", "NINFA", "NINHO", "NITRO", "NOBRE", "NOITE", "NOMES",  "NORMA", "NORTE", "NOTAR", "NOTEI", "NOTOU", "NOTAS", "NOVAS", "NOVOS", "NOZES", "NUDEZ", "NUNCA", "NUVEM", "NEXOS",

// O
"OBRAS", "OLIVA", "OSTRA", "ÓTIMO", "OBTER", "ÓBVIO", "ODEIO", "OFUSO", "OLHAR", "OLHEI", "OLHOS", "OMBRO", "ONÇAS", "ONDAS", "OPACO", "ÓPERA", "OPINE", "OPINO", "OPTAR", "OPTOU", "ORAIS", "ORDEM", "ÓRFÃS", "ÓRFÃO", "ORGIA", "ORLAS", "OSSOS", "OUTRA", "OUTRO", "OUVIR", "ONTEM", "OUVEM", "OBTÉM",

// P
"PARES", "PERDE", "POÇAS", "POUSA", "POROS", "PISCO", "PALHA", "PAJEM", "PATAS", "PENTA", "PEIXE", "PAVÃO", "PASSA", "PANÇA", "PASSO", "PESTE", "PENTE", "PINÇA", "PEDAL", "PODRE", "PANDA", "PLANA", "PORTE", "PERTO", "PORTA", "PORCO", "PORCA", "PONTE", "PALCO", "PÊNIS", "POUSO", "PLACA", "PERDA", "PERCA", "PERDI", "POSTE", "PORTO", "PARTE", "PARTO", "PARAR", "PAREI", "PAREM", "PAROU", "PARDO", "PASTA", "PASTO", "PATOS", "PÁTIO", "PAVIO", "PAVOR", "PAGAR", "PAGOU", "PAGAM", "PAGUE", "PAUSA", "PAPEL", "PAPAI", "PAPAS", "PAPAR", "PAPOS", "PINGO", "PINGA", "PINHA", "PINTO", "PINTA", "PINOS", "PISAR", "PISEI", "PISOU", "PISCA", "PISTA", "PILHA", "PILAR", "PIANO", "PIADA", "PIRÃO", "PIPAS", "POBRE", "PODAR", "PODER", "PODIA", "PUDER", "PUDIM", "PUDOR", "POSAR", "POSSA", "POSSO", "POSSE", "POUCA", "PIRAR", "POUCO", "PANOS", "POLPA", "POLIR", "POEMA", "POETA", "PONTO", "PONTA", "POMAR", "POMBO", "POMBA", "PULAR", "PULOU", "PULGA", "PULOS", "PUNHA", "PUNIR", "PUNHO", "PUXAR", "PUXOU", "PUXEI", "PRAIA", "PRADO", "PRAGA", "PRATO", "PRATA", "PRAZO", "PRIMO", "PRIMA", "PREÇO", "PRETA", "PRETO", "PREGA", "PRECE", "PREVE", "PROVA", "PROSA", "PROVO", "PELOS", "PELAS", "PÓDIO", "PORÉM", "PLANO", "PLEBE", "PLENO", "PLUMA", "PEGAR", "PEITO", "PENSA", "PENAS"," PESAR", "PESCA",

// Q
"QUAIS","QUASE", "QUEDA", "QUILO", "QUINA", "QUITE", "QUATI", "QUERO",

// R
"RAIVA", "RENTE", "RISÃO", "RÓSEA", "RAIOS", "AREIO", "RUELA", "REGAR", "RASGA", "ROLAR", "RAIAR", "RALAR", "RALOU", "RALOS", "RAMOS", "RAMPA", "RANÇO", "RANGO","RAPAZ", "RAÇAS", "RASPA","RASGO", "RASOS", "RATOS", "REAIS", "RECÉM","REDES", "REDOR", "REDUZ", "REFÉM", "REGRA","REINO", "REINA", "RELER", "RELVA","REMAR", "REMOS", "RENDA", "RENDE", "RENDO","REPÕE", "REPOR", "RESTA", "RESTO", "RETAS","RETÉM", "RETER", "RETOS", "REÚNE", "REVER","REZAR", "REZOU", "REZAS", "RICAS", "RICOS","RIMAR", "RIMOU", "RIMAS", "RINHA", "RINDO","RIVAL", "RIXAS", "RISCO", "RISOS", "RISCA","RITMO", "RITOS", "ROÇAR", "ROÇOU", "ROJÃO","ROMBO", "ROMPE", "RONCO", "RONCA", "RONDA","RODEI", "RODAR", "RODAS", "RODOU", "ROGAR","ROGOU", "ROLAM", "ROLHA", "ROLOS","ROSTO", "ROSAS", "ROSCA", "ROSNA", "ROUBO", "ROUPA","ROUCO", "RUBIS", "RUBOR", "RUGAS", "RUGIR", "RUÍDO", "RUÍNA", "RUINS,", "RUMOS", "RURAL", "RUSSO",

// S
"SALTO", "SIRVA", "SIRVO", "SAGAZ", "SONSO", "SERVO", "SORVA", "SITES", "SONHA", "SEXTA", "SAÍDA", "SOCAR", "SOCOU", "SUMAS", "SUMIR", "SOQUE", "SECAR", "SECOU", "SALTA", "SONDA", "SALTE", "SOLDE", "SARNA", "SALDO", "SALGO", "SALÃO", "SALAS", "SOLTA", "SOLTE", "SOMAS", "SOLTO", "SOLDA", "SOLDO", "SAUNA", "SOPRO", "SOFRO", "SINTA", "SAPOS", "SANTO", "SENTA", "SENTO", "SANTA", "SOPAS", "SINTO", "SEIXA", "SOLAS", "SUNGA", "SELAR", "SÊMEN", "SOFRI", "SOFRA", "SUGAR", "SELVA", "SEXOS", "SUPER", "SUMIU", "SUBIU", "SUTIL", "SUCOS", "SÓCIO", "SORTE", "SABOR", "SINAL", "SINOS", "SOGRA", "SÓTÃO", "SÍTIO", "SUÍTE", "SABRE", "SABES", "SABER", "SENTE", "SORRI", "SAQUE", "SUJOS", "SUAVE", "SÉRIA", "SÁBIA", "SOBRE", "SALVE", "SALVO", "SÁBIO", "SACAR", "SACAS", "SACOS", "SAFRA", "SAIAS", "SALMO", "SAMBA", "SANAR", "SAPAS", "SENHA", "SEARA", "SECAS", "SEDES", "SEDUZ", "SEGUE", "SEGAR", "SEIOS", "SEITA", "SELAS", "SENDO", "SENTE", "SERRA", "SERES", "SÉRIO", "SERVE", "SERRO", "SITIA", "SOBRA", "SOLAR", "SOMAR", "SONAR", "SONHO", "SONOS", "SORRI", "SORTE", "SOVAR", "SUADO", "SUAVE", "SUÍNA", "SUÍNO", "SUJAR", "SUJAS", "SUMIR", "SUPOR", "SURDO", "SURGE", "SURTA", "SURTO", "SUSTO", "SUTIL", "SENÃO", "SÉRIE", "SALDA", "SOPRA", "SACIO", "SACIA", "SACOU", "SOMOS", "SERÁS", "SERÁ", "SABEU", "SOMOU", "SOMAI", "SUFRA", "SUFRO",

// T 
"TÁBUA", "TONTA", "TERÇA", "TESTE", "TESTA", "TESTO", "TRAGO", "TRAGA", "TERNO", "TENTO", "TENTA", "TREVA", "TOQUE", "TORNO", "TORNA", "TOSCA", "TAMPA", "TRIPA", "TRECO", "TALCO", "TANGO", "TARDE", "TÁTIL", "TATUA", "TECLA", "TEIMA", "TELHA", "TEMPO", "TÊNIS", "TERÇO", "TERMO", "TERRA", "TESÃO", "TESLA", "TEXTO", "TIARA", "TIGRE", "TINHA", "TINTA", "TÍTUL", "TOCHA", "TODAS", "TOLOS", "TOMAR", "TOMBO", "TONTO", "TOPAR", "TORNE", "TORRE", "TORSO", "TORTA", "TORVO", "TOSCO", "TOSSE", "TOTAL", "TOUCA", "TOURO", "TRAMA", "TREMA", "TREVO", "TRIGO", "TRONO", "TROPA", "TROTE", "TROÇO", "TRUFA", "TRUTA", "TUBOS", "TUMBA", "TÚNEL", "TURMA", "TURNO", "TUTOR", "TURVA", "TURVO",

// U 
"ÚMIDO", "ÚNICA", "ÚNICO", "URANO",  "URINA", "URROS", "URSÃO", "URSOS", "URUBU", "USINA", "USUAL", "ÚTERO", "ULTRA", "UNHAS", "UNIDA", "UNIDO", "UNIRÁ",  "USADO", "USAVA",

// V
"VAGAR", "VINDO", "VADIA", "VEIAS", "VASCO", "VILÃO",  "VIADO", "VASTA", "VÁCUO", "VENHO", "VALHE", "VALES", "VALEU", "VULGO", "VAGEM", "VALER", "VALHA", "VALIA", "VALOR", "VAPOR", "VARAL", "VARAS", "VARIA",  "VASTO", "VASOS",  "VAZAR", "VAZIO", "VELAR", "VELAS", "VELHA", "VELHO", "VENDA", "VENHA", "VENTO", "VERÃO", "VERBO", "VERDE", "VERME", "VERSA", "VERSO", "VINGA", "VINGO", "VESPA", "VISTA", "VETAR", "VETOR", "VIAJE", "VICIA", "VIDAS", "VÍDEO", "VIGIA", "VIGOR", "VINHO", "VINTE", "VIOLA", "VIRAL", "VIRAR", "VIRIL", "VÍRUS", "VISTO", "VITAL", "VIVAS", "VIVER", "VIVOS", "VOLTA", "VOLTE", "VOTAR", "VULTO",

// X 
"XÉROX", "XAMPU",

// Z
 "ZANGO", "ZARPA", "ZEBRA", "ZELAR", "ZINCO", "ZÍPER", "ZOMBA",  "ZONAS",  "ZORRA", "ZUMBI", "ZUNIR", "ZURRA","ZURRO", "ZARPO", "ZELAM", "ZIGUE"
];

// Variáveis para a geração da palavra sorteada
var sorteio;
var escolhido;


// Função para gerar um numero aleatório, e depois adicionar a palavra sorteada a variável "escolhido"
function aleatorio() {
    sorteio =  Math.floor(Math.random() * palavras.length);
escolhido = palavras[sorteio];
}

// Variáveis para serem usadas no código
var i;
var conta = 1;
var posicao = 0;
var pausar = false;

// Variáveis usadas para simplificar as palavras 
var palavraSimples = "";
var escolhidoSimples = "";


// Seleciona o "bloco" do momento (bloco = linha que está sendo usada)
var bloco = document.querySelectorAll("#bloco" + conta +  " td");

// Adiciona a classe "foco" para o bloco de agora
document.getElementById("bloco" + conta).classList.add("foco");

// Percebe quando uma tecla é usada, e então ativa a função "pressionado"
document.addEventListener("keydown", pressionado);

// Função principal, vai detectar qual tecla foi apertada, e o que fazer
function pressionado(matheus){
 
// Se a variável pausar estiver ativada (true), impede a função de funcionar (o jogador não pode digitar, excluir ou enviar palavras)  
if(pausar){
  return;
}

  // Transforma a tecla apertada (matheus.key) para maiúsculo (toUpperCase)
    var digito = matheus.key.toUpperCase();    

// Se a tecla for "Backspace" (botão de deletar) deleta a letra
if(matheus.key === "Backspace"){
   
  // Exclui a função normal da tecla "Backspace", para garantir que não ocorra erros 
  matheus.preventDefault();

  // Garante que você só pode usar o botão de deletar se tiver digitado algo (posicap = ultimo quadrado digitado)
if(matheus.key === "Backspace" && posicao > 0){

  // Diminui a posição (volta para a anterior) e preenche o quadrado com espaço vazio (deletar o que foi escrito)
  posicao--;
bloco[posicao].textContent = "";

  }
}

// Verifica se a tecla apertada for "Enter"
if(matheus.key === "Enter"){
 
  // Exclui a função normal da tecla "Enter", para garantir que não ocorra erros
matheus.preventDefault();

// Varíaveis usadas para aprovar a palavra digitada
    var palavrateste = "";
    var aprovado = 0;
    
    // Pega todas letras digitadas e transforma em uma palavra (palavrateste)
    for(var i = 0; i < bloco.length; i++){

    palavrateste += bloco[i].textContent

}

// Função para simplificar a palavra sorteada, palavra digitada e todas palavras do array gigante
function simplificar(palavra){
  
  // Define uma variável que só vai ser usada como exemplo na função
var simples = "";

// For que percorre a palavra escolhida (muda de tamanho dependendo do tamanho da palavra a ser simplificada)
for(var i = 0; i < palavra.length; i++){

  // Variável letra recebe o valor da palavra escolhida a ser simplificada (da primeira letra á última)
   var letra = palavra[i]; 
  
  // Se a letra da palavra for Ç, ele transforma em C
   if (letra == 'Ç'){ letra = 'C'}
  
  // Se qualquer letra (A E I O U) abaixo possuir qualquer acento, remove a acentuação
   if (letra == 'Á' || letra == 'À' || letra == 'Ã' || letra == 'Â'){ letra = 'A'}
   if (letra == 'É' || letra == 'Ê'){ letra = 'E'}
   if (letra == 'Í') { letra = 'I'}
   if (letra == 'Ó' || letra == 'Õ' || letra == 'Ô'){ letra = 'O'}
   if (letra == 'Ú'){ letra = 'U'}

   // Concactena a letra simplificada (acentuação removida) a variável de exemplo "simples", assim vai formando a palavra inteira simplificada
 simples += letra; 

  }
// Quando o loop acaba, retorna apenas o valor da variável "simples", que possui o valor da palavra escolhida só que simplificada
return simples;
}

// Simplifica a palavra digitada (palavrateste) e passa o seu valor simplificado para a variável "palavraSimples"
palavraSimples = simplificar(palavrateste);

// Simplifica a palavra sorteada (escolhido) e passa o seu valor simplificado para a variável "escolhidoSimples"
escolhidoSimples = simplificar(escolhido);


// Apenas aprova a palavra digitada se sua versão simples existir no nosso array de palavras
for(i = 0;  i < palavras.length; i++){

  // Simplifica nosso array de palavras uma por uma, e compara com a versão simplificada da palavra digitada. Se encontrar, a palavra é aprovada
   if(simplificar(palavras[i]) === palavraSimples){
    aprovado++;
   } 

}

// Se a sua palavra não for aprovada aparece esse LINDO efeitinho vermelho
if(posicao < 5 || aprovado < 1){

for(i = 0; i < bloco.length; i++){
    bloco[i].style.backgroundColor = "red";
} 

// Depois de 250 milissegundos ativa a função voltando
setTimeout(voltando, 250);

// Função para voltar a cor de fundo para branco,e parar o MARAVILHOSO efeito de antes
function voltando(){
for(i = 0; i < bloco.length; i++){
    bloco[i].style.backgroundColor = "white";
    }    
  }
}

// Se a palavra digitada tem 5 letras E a palavra for aprovada (está presente no array), ela é aceita
else if(posicao == 5 && aprovado >= 1){

// Ativa a variável pausar, e impedi que a função pressionado funcione (não deixa o jogador digitar até que a animação esteja completa)  
pausar = true;


// Começa a animação, removendo drasticamente a opcidade do bloco selecionado
for(let i = 0; i < bloco.length; i++){
bloco[i].style.opacity = "0.2";

}



// Variável para copiar a palavra sorteada, começa vazia
var copia = [];
for (var i = 0; i < escolhido.length; i++) {
  copia[i] = escolhidoSimples[i]; 
} 

// Inicialmente deixa todas letras do bloco cinzas
for (i = 0; i < bloco.length; i++) {
  bloco[i].style.backgroundColor = "gray";
}

// Se as letras simplificadas combinam perfeitamente na mesma posição, elas ficam verdes. E a sua posição na "copia" vira um *
for (i = 0; i < bloco.length; i++) {
  if (palavraSimples[i] == escolhidoSimples[i]) {
    bloco[i].style.backgroundColor = "green";
    copia[i] = "*"; 
  }
}

// Se a letra já não for verde, mas existir na palavra, deixa amarelo e deleta da variável "copia" (vira *)
// Assim no próximo loop do for, ele só vai deixar outra letra amarela caso existir duas delas, pois a antiga sumiu (virou *)
for (i = 0; i < bloco.length; i++) {
  if (bloco[i].style.backgroundColor != "green") {

    for (var j = 0; j < copia.length; j++) {
      if (palavraSimples[i] == copia[j]) {
        bloco[i].style.backgroundColor = "yellow";
        copia[j] = "*"; 
        break;
      }
    }  
  }
}

/* Percorre todas palavras do array na versão simplificada, e quando encontrar a palavra que o jogador digitou, mostra a versão não simplificada dessa palavra
 Exemplo - Digitou: "MACAS", ele vai encontrar a versão simplificada da palavra no array -> "MACAS" (versão simplificada de MAÇÃS que está no array)
E depois vai mostrar a versão acentuada (a que está dentro do array original) invés da palavra que o cara digitou. Nesse caso MACAS vira MAÇÃS */ 


for(let i = 0; i < palavras.length; i++){
  if(palavraSimples == simplificar(palavras[i])){
    
    for(let j = 0; j < bloco.length; j++){
      
      bloco[j].textContent = palavras[i][j]; 
     

      // Espera um delay de j * 300, de pois define a opacidade de cada letra individual para 1 (normal)
     setTimeout(() => {
      bloco[j].style.opacity = "1";
     }, j * 300);
    }
  }
} 

// Espera um delay de 1500 milissegundos para continuar com o código e depois habilitar a função pressionado.
// Ou seja, pausa o código por 1500 ms até que a animação do for anterior (muda a opacidade) termine completamente, desabilitando a capacidade de digitar
setTimeout(() => {
// Remove o foco da linha atual
document.getElementById("bloco" + conta).classList.remove("foco");

// Se as palavras simplificadas batem, você ganha o jogo! (conta = 500 pro jogo parar de funcionar)
if(palavraSimples == escolhidoSimples){
  
  conta = 500;

// Cria um novo elemento <div> na página
var div = document.createElement("div");

// Dá um nome (id) para essa div, para poder estilizar depois no CSS
div.id = "retangulo2";


// Define o texto que vai aparecer dentro da div
// Aqui, ele mostra a mensagem "parabens! voce acertou" junto com a palavra que estava em 'escolhido' que é a palavra aleatoria.
   div.textContent = "Você acertou! a palavra era: " + escolhido;

   // Adiciona (mostra) essa div dentro do corpo da página (body)
document.body.appendChild(div);
}

// Se você chegou na última linha e as palavras simplificadas não correspondem, você perde o jogo! (conta = 500 pro jogo parar de funcionar)
if(conta >= 6 && palavraSimples != escolhidoSimples){

conta = 500;
// Cria um novo elemento <div> na página
var div = document.createElement("div");

// Dá um nome (id) para essa div, para poder estilizar depois no CSS
div.id = "retangulo";

// Define o texto que vai aparecer dentro da div
// Aqui, ele mostra a mensagem "Você perdeu..." junto com a palavra que estava em 'escolhido' que é a palavra aleatoria.
div.textContent = "Você perdeu, a palavra era: " + escolhido;

// Adiciona (mostra) essa div dentro do corpo da página (body)
document.body.appendChild(div);
}

// Conta aumenta para pular para a próxima linha (bloco + conta, ou seja, vai pro próximo bloco)
conta++;

// Posicao é zerada denovo, para voltar a primeira letra do proximo bloco
posicao = 0;

// Selecionamos o bloco depois da conta aumentar, indo para o próximo bloco
bloco = document.querySelectorAll("#bloco" + conta +  " td"); 

// Novamente adiciona foco ao bloco selecionado
document.getElementById("bloco" + conta).classList.add("foco");

// Desativa a variável pausar, permitindo que o jogador digite, delete e envie palavras novamente
pausar = false;
  }, 1500);    
}
}
// Garante que você apenas possa digitar letras, comparando maiúsculo com minúsculo e aceitando só um caractere
// Também não permite digitar na última posicao
if(matheus.key.length === 1 && matheus.key.toUpperCase() != matheus.key.toLowerCase() && posicao < 5){
    
  // Adiciona a letra digitada para a posicao de agora do bloco
  bloco[posicao].textContent = digito;
    
  // Aumenta a posição para digitar a próxima letra
  posicao++;
  }
}

// Função para reiniciar o jogo. 
function reiniciar(){

// Reinicia (reload) a página atual (location())
location.reload();
}

// Função que te manda para a página inicial com as regras do jogo
function inicio(){
  
  // Muda a página atual para a selecionada (href = "trabalho.html")
  window.location.href = "trabalho.html";
}