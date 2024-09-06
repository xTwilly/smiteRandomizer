let fullGodList = new Map();
let assassinList = new Map();
let warriorList = new Map();
let guardianList = new Map();
let mageList = new Map();
let hunterList = new Map();

let soloList = new Map();
let midList = new Map();
let jungleList = new Map();
let adcList = new Map();
let supportList = new Map();
class godClass{
    role;
    damageType;
    gameDefinedClass;
    name;

    constructor(role,damageType,gameDefinedClass,name){
        //super();
        this.role = role;
        this.damageType = damageType;
        this.gameDefinedClass = gameDefinedClass;
        this.name = name;
    }
    //setters
    setRole(newRole){
        this.role = newRole;
    }
    setDamageType(newDamageType){
        this.damageType = newDamageType;
    }
    setGameDefinedClass(newGameDefinedClass){
        this.gameDefinedClass = newGameDefinedClass;
    }
    setName(newName) {
    	this.name = newName;
    }
    
    //getters
    getRole(){
        return this.role;
    }
    getDamageType(){
        return this.damageType;
    }
    getGameDefinedClass(){
        return this.gameDefinedClass;
    }
    getName() {
    	return this.name;
    }

//class populateMaps {
	//creating all the HashMaps that correlate with the various roles within the game. Will be used to find each randomly selected character

    populate() {
	//map of every character, with assigned numbers for eventually randomization

	//creates a godClass object of each character in the game, and immediately assigns their traits. Then adds them to the largest list, the one that contains every character
	//role, damage, game class
	let achilles = new godClass("Solo", "Physical", "Warrior", "Achilles");
	fullGodList.set(1, achilles);
	let agni = new godClass("Mid", "Magical", "Mage", "Agni");
	fullGodList.set(2,agni);
	let amc = new godClass("ADC", "Physical", "Hunter", "Ah Muzen Cab");
	fullGodList.set(3,amc);
	let ahpuch = new godClass("Mid", "Magical", "Mage", "Ah Puch");
	fullGodList.set(4,ahpuch);
	let ama = new godClass("Solo", "Physical", "Warrior", "Amaterasu");
	fullGodList.set(5,ama);
    let anhur = new godClass("ADC", "Physical", "Hunter", "Anhur");
	fullGodList.set(6,anhur);
    let anubis = new godClass("Mid", "Magical", "Mage", "Anubis");
	fullGodList.set(7,anubis);
    let aokuang = new godClass("Jungle", "Magical", "Mage", "Ao Kuang");
	fullGodList.set(8, aokuang);
    let aphro = new godClass("Mid", "Magical", "Mage", "Aphrodite");
	fullGodList.set(9,aphro);
    let apollo = new godClass("ADC", "Physical", "Hunter", "Apollo");
	fullGodList.set(10,apollo);
    let arachne = new godClass("Jungle", "Physical", "Assassin", "Arachne");
	fullGodList.set(11,arachne);
    let ares = new godClass("Support", "Magical", "Guardian", "Ares");
	fullGodList.set(12,ares);
    let artemis = new godClass("ADC", "Physical", "Hunter", "Artemis");
	fullGodList.set(13,artemis);
    let artio = new godClass("Support", "Magical", "Guardian", "Artio");
	fullGodList.set(14,artio);
    let athena = new godClass("Support", "Magical", "Guardian", "Athena");
	fullGodList.set(15,athena);
    let atlas = new godClass("Support", "Magical", "Guardian", "Atlas");
	fullGodList.set(16,atlas);
    let awilix = new godClass("Jungle", "Physical", "Assassin", "Awilix");
	fullGodList.set(17,awilix);
    let baba = new godClass("Mid", "Magical", "Mage", "Baba Yaga");
	fullGodList.set(18,baba);
    let bacchus = new godClass("Support", "Magical", "Guardian", "Bacchus");
	fullGodList.set(19,bacchus);
    let baka = new godClass("Jungle", "Physical", "Assassin", "Bakasura");
	fullGodList.set(20,baka);
    let bake = new godClass("Solo", "Magical", "Guardian", "Bake Kujira");
	fullGodList.set(21,bake);
    let baron = new godClass("Mid", "Magical", "Mage", "Baron Samedi");
	fullGodList.set(22,baron);
    let bastet = new godClass("Jungle", "Physical", "Assassin", "Bastet");
	fullGodList.set(23,bastet);
    let bellona = new godClass("Solo", "Physical", "Warrior", "Bellona");
	fullGodList.set(24,bellona);
    let cabrakan = new godClass("Support", "Magical", "Guardian", "Cabrakan");
	fullGodList.set(25,cabrakan);
    let cama = new godClass("Jungle", "Physical", "Assassin", "Camazotz");
	fullGodList.set(26,cama);
    let cerb = new godClass("Support", "Magical", "Guardian", "Cerberus");
	fullGodList.set(27,cerb);
    let cern = new godClass("ADC", "Physical", "Hunter", "Cernunnos");
	fullGodList.set(28,cern);
    let chaac = new godClass("Solo", "Physical", "Warrior", "Chaac");
	fullGodList.set(29,chaac);
    let change = new godClass("Mid", "Magical", "Mage", "Chang'e");
	fullGodList.set(30,change);
    let charon = new godClass("Support", "Magical", "Guardian", "Charon");
	fullGodList.set(31,charon);
    let cherry = new godClass("ADC", "Physical", "Hunter", "Charybdis");
	fullGodList.set(32,cherry);
    let cherno = new godClass("ADC", "Physical", "Hunter", "Chernobog");
	fullGodList.set(33,cherno);
    let chiron = new godClass("ADC", "Physical", "Hunter", "Chiron");
	fullGodList.set(34,chiron);
    let chronos = new godClass("ADC", "Magical", "Mage", "Chronos");
	fullGodList.set(35,chronos);
    let clio = new godClass("Jungle", "Physical", "Assassin", "Cliodhna");
	fullGodList.set(36,clio);
    let cthu = new godClass("Solo", "Magical", "Guardian", "Cthulhu");
	fullGodList.set(37,cthu);
    let cuchu = new godClass("Solo", "Physical", "Warrior", "Cu Chulainn");
	fullGodList.set(38,cuchu);
    let cupid = new godClass("ADC", "Physical", "Hunter", "Cupid");
	fullGodList.set(39,cupid);
    let daji = new godClass("Jungle", "Physical", "Assassin", "Da Ji");
	fullGodList.set(40,daji);
    let danza = new godClass("ADC", "Physical", "Hunter", "Danzaburou");
	fullGodList.set(41,danza);
    let discord = new godClass("Mid", "Magical", "Mage", "Discordia");
	fullGodList.set(42,discord);
    let erlang = new godClass("Solo", "Physical", "Warrior", "Erlang Shen");
	fullGodList.set(43,erlang);
    let eset = new godClass("Mid", "Magical", "Mage", "Eset");
	fullGodList.set(44,eset);
    let fafnir = new godClass("Support", "Magical", "Guardian", "Fafnir");
	fullGodList.set(45,fafnir);
    let fenrir = new godClass("Jungle", "Physical", "Assassin", "Fenrir");
	fullGodList.set(46,fenrir);
    let freya = new godClass("ADC", "Magical", "Mage", "Freya");
	fullGodList.set(47,freya);
    let ganesha = new godClass("Support", "Magical", "Guardian", "Ganesha");
	fullGodList.set(48,ganesha);
    let geb = new godClass("Support", "Magical", "Guardian", "Geb");
	fullGodList.set(49,geb);
    let gilga = new godClass("Solo", "Physical", "Warrior", "Gilgamesh");
	fullGodList.set(50,gilga);
    let guan = new godClass("Solo", "Physical", "Warrior", "Guan Yu");
	fullGodList.set(51,guan);
    let hachi = new godClass("ADC", "Physical", "Hunter", "Hachiman");
	fullGodList.set(52,hachi);
    let hades = new godClass("Mid", "Magical", "Mage", "Hades");
	fullGodList.set(53,hades);
    let hebo = new godClass("Mid", "Magical", "Mage", "He Bo");
	fullGodList.set(54,hebo);
    let heim = new godClass("ADC", "Physical", "Hunter", "Heimdallr");
	fullGodList.set(55,heim);
    let hel = new godClass("Mid", "Magical", "Mage", "Hel");
	fullGodList.set(56,hel);
    let hera = new godClass("Mid", "Magical", "Mage", "Hera");
	fullGodList.set(57,hera);
    let herc = new godClass("Solo", "Physical", "Warrior", "Hercules");
	fullGodList.set(58,herc);
    let horus = new godClass("Solo", "Physical", "Warrior", "Horus");
	fullGodList.set(59,horus);
    let houyi = new godClass("ADC", "Physical", "Hunter", "Hou Yi");
	fullGodList.set(60,houyi);
    let hun = new godClass("Jungle", "Physical", "Assassin", "Hun Batz");
	fullGodList.set(61,hun);
    let ishtar = new godClass("ADC", "Physical", "Hunter", "Ishtar");
	fullGodList.set(62,ishtar);
    let chel = new godClass("Mid", "Magical", "Mage", "Ix Chel");
	fullGodList.set(63,chel);
    let iza = new godClass("ADC", "Physical", "Hunter", "Izanami");
	fullGodList.set(64,iza);
    let janus = new godClass("Mid", "Magical", "Mage", "Janus");
	fullGodList.set(65,janus);
    let jing = new godClass("ADC", "Physical", "Hunter", "Jing Wei");
	fullGodList.set(66,jing);
    let jorm = new godClass("Solo", "Magical", "Guardian", "Jormungandr");
	fullGodList.set(67,jorm);
    let kali = new godClass("Jungle", "Physical", "Assassin", "Kali");
	fullGodList.set(68,kali);
    let khepri = new godClass("Support", "Magical", "Guardian", "Khepri");
	fullGodList.set(69,khepri);
    let king = new godClass("Solo", "Physical", "Warrior", "King Arthur");
	fullGodList.set(70,king);
    let kuku = new godClass("Mid", "Magical", "Mage", "Kukulkan");
	fullGodList.set(71,kuku);
    let kumba = new godClass("Support", "Magical", "Guardian", "Kumbhakarna");
	fullGodList.set(72,kumba);
    let kuzenbo = new godClass("Support", "Magical", "Guardian", "Kuzenbo");
	fullGodList.set(73,kuzenbo);
    let lance = new godClass("Jungle", "Physical", "Assassin", "Lancelot");
	fullGodList.set(74,lance);
    let loki = new godClass("Jungle", "Physical", "Assassin", "Loki");
	fullGodList.set(75,loki);
    let maman = new godClass("Jungle", "Magical", "Mage", "Maman Brigitte");
	fullGodList.set(76,maman);
    let marti = new godClass("ADC", "Physical", "Hunter", "Martichoras");
	fullGodList.set(77,marti);
    let maui = new godClass("Support", "Magical", "Guardian", "Maui");
	fullGodList.set(78,maui);
    let medusa = new godClass("ADC", "Physical", "Hunter", "Medusa");
	fullGodList.set(79,medusa);
    let merc = new godClass("Jungle", "Physical", "Assassin", "Mercury");
	fullGodList.set(80,merc);
    let merlin = new godClass("Mid", "Magical", "Mage", "Merlin");
	fullGodList.set(81,merlin);
    let morgan = new godClass("Mid", "Magical", "Mage", "Morgan Le Fey");
	fullGodList.set(82,morgan);
    let mulan = new godClass("Solo", "Physical", "Warrior", "Mulan");
	fullGodList.set(83,mulan);
    let nezha = new godClass("Jungle", "Physical", "Assassin", "Ne Zha");
	fullGodList.set(84,nezha);
    let neith = new godClass("ADC", "Physical", "Hunter", "Neith");
	fullGodList.set(85,neith);
    let nem = new godClass("Jungle", "Physical", "Assassin", "Nemesis");
	fullGodList.set(86,nem);
    let nike = new godClass("Solo", "Physical", "Warrior", "Nike");
	fullGodList.set(87,nike);
    let nox = new godClass("Mid", "Magical", "Mage", "Nox");
	fullGodList.set(88,nox);
    let nuwa = new godClass("Mid", "Magical", "Mage", "Nu Wa");
	fullGodList.set(89,nuwa);
    let odin = new godClass("Solo", "Physical", "Warrior", "Odin");
	fullGodList.set(90,odin);
    let olo = new godClass("ADC", "Magical", "Mage", "Olorun");
	fullGodList.set(91,olo);
    let osiris = new godClass("Solo", "Physical", "Warrior", "Osiris");
	fullGodList.set(92,osiris);
    let pele = new godClass("Jungle", "Physical", "Assassin", "Pele");
	fullGodList.set(93,pele);
    let perse = new godClass("Mid", "Magical", "Mage", "Persephone");
	fullGodList.set(94,perse);
    let poe = new godClass("Mid", "Magical", "Mage", "Poseidon");
	fullGodList.set(95,poe);
    let ra = new godClass("Mid", "Magical", "Mage", "Ra");
	fullGodList.set(96,ra);
    let raijin = new godClass("Mid", "Magical", "Mage", "Raijin");
	fullGodList.set(97,raijin);
    let rama = new godClass("ADC", "Physical", "Hunter", "Rama");
	fullGodList.set(98,rama);
    let rat = new godClass("Jungle", "Physical", "Assassin", "Ratatoskr");
	fullGodList.set(99,rat);
    let ravana = new godClass("Jungle", "Physical", "Assassin", "Ravana");
	fullGodList.set(100,ravana);
    let scylla = new godClass("Mid", "Magical", "Mage", "Scylla");
	fullGodList.set(101,scylla);
    let serq = new godClass("Jungle", "Physical", "Assassin", "Serqet");
	fullGodList.set(102,serq);
    let set2 = new godClass("Jungle", "Physical", "Assassin", "Set");
	fullGodList.set(103,set2);
    let shiva = new godClass("Solo", "Physical", "Warrior", "Shiva");
	fullGodList.set(104,shiva);
    let skadi = new godClass("ADC", "Physical", "Hunter", "Skadi");
	fullGodList.set(105,skadi);
    let sobek = new godClass("Support", "Magical", "Guardian", "Sobek");
	fullGodList.set(106,sobek);
    let sol = new godClass("ADC", "Magical", "Mage", "Sol");
	fullGodList.set(107,sol);
    let sun = new godClass("Solo", "Physical", "Warrior", "Sun Wukong");
	fullGodList.set(108,sun);
    let surtr = new godClass("Solo", "Physical", "Warrior", "Surtr");
	fullGodList.set(109,surtr);
    let sus = new godClass("Jungle", "Physical", "Assassin", "Susano");
	fullGodList.set(110,sus);
    let syl = new godClass("Support", "Magical", "Guardian", "Sylvanus");
	fullGodList.set(111,syl);
    let terra = new godClass("Support", "Magical", "Guardian", "Terra");
	fullGodList.set(112,terra);
    let thana = new godClass("Jungle", "Physical", "Assassin", "Thanatos");
	fullGodList.set(113,thana);
    let morri = new godClass("Mid", "Magical", "Mage", "The Morrigan");
	fullGodList.set(114,morri);
    let thor = new godClass("Jungle", "Physical", "Assassin", "Thor");
	fullGodList.set(115,thor);
    let thoth = new godClass("Mid", "Magical", "Mage", "Thoth");
	fullGodList.set(116,thoth);
    let tiamat = new godClass("Mid", "Magical", "Mage", "Tiamat");
	fullGodList.set(117,tiamat);
    let tsu = new godClass("Jungle", "Physical", "Assassin", "Tsukuyomi");
	fullGodList.set(118,tsu);
    let tyr = new godClass("Solo", "Physical", "Warrior", "Tyr");
	fullGodList.set(119,tyr);
    let ullr = new godClass("ADC", "Physical", "Hunter", "Ullr");
	fullGodList.set(120,ullr);
    let vamana = new godClass("Solo", "Physical", "Warrior", "Vamana");
	fullGodList.set(121,vamana);
    let vulcan = new godClass("Mid", "Magical", "Mage", "Vulcan");
	fullGodList.set(122,vulcan);
    let xbal = new godClass("ADC", "Physical", "Hunter", "Xbalanque");
	fullGodList.set(123,xbal);
    let xing = new godClass("Support", "Magical", "Guardian", "Xing Tian");
	fullGodList.set(124,xing);
    let yemoja = new godClass("Support", "Magical", "Guardian", "Yemoja");
	fullGodList.set(125,yemoja);
    let ymir = new godClass("Support", "Magical", "Guardian", "Ymir");
	fullGodList.set(126,ymir);
    let yu = new godClass("Mid", "Magical", "Mage", "Yu Huang");
	fullGodList.set(127,yu);
    let zeus = new godClass("Mid", "Magical", "Mage", "Zeus");
	fullGodList.set(128,zeus);
    let zhong = new godClass("Mid", "Magical", "Mage", "Zhong Kui");
	fullGodList.set(129,zhong);
    let nut = new godClass("ADC", "Physical", "Hunter", "Nut");
	fullGodList.set(130,nut);
	
	//Set fgl = fullGodList.entrySet();
	//Iterator it = fgl.iterator();
	
	//setting up a group for randomizing assassins
	//HashMap<Integer, godClass> assassinList = new HashMap<Integer, godClass>();
	assassinList.set(1, arachne);
	assassinList.set(2, baka);
	assassinList.set(3, bastet);
	assassinList.set(4, awilix);
	assassinList.set(5, cama);
	assassinList.set(6, clio);
	assassinList.set(7, daji);
	assassinList.set(8, fenrir);
	assassinList.set(9, hun);
	assassinList.set(10, kali);
	assassinList.set(11, lance);
	assassinList.set(12, loki);
	assassinList.set(13, merc);
	assassinList.set(14, nezha);
	assassinList.set(15, nem);
	assassinList.set(16, pele);
	assassinList.set(17, rat);
	assassinList.set(18, ravana);
	assassinList.set(19, serq);
	assassinList.set(20, set2);
	assassinList.set(21, sus);
	assassinList.set(22, thana);
	assassinList.set(23, thor);
	assassinList.set(24, tsu);
	
	//setting up a group for randomizing junglers
	//HashMap<Integer, godClass> jungleList = new HashMap<Integer, godClass>();
	jungleList.set(1, aokuang);
	jungleList.set(2, arachne);
	jungleList.set(3, baka);
	jungleList.set(4, bastet);
	jungleList.set(5, awilix);
	jungleList.set(6, cama);
	jungleList.set(7, clio);
	jungleList.set(8, daji);
	jungleList.set(9, fenrir);
	jungleList.set(10, hun);
	jungleList.set(11, kali);
	jungleList.set(12, lance);
	jungleList.set(13, loki);
	jungleList.set(14, maman);
	jungleList.set(15, merc);
	jungleList.set(16, nezha);
	jungleList.set(17, nem);
	jungleList.set(18, pele);
	jungleList.set(19, rat);
	jungleList.set(20, ravana);
	jungleList.set(21, serq);
	jungleList.set(22, set2);
	jungleList.set(23, sus);
	jungleList.set(24, thana);
	jungleList.set(25, thor);
	jungleList.set(26, tsu);
	jungleList.set(27, achilles);
	jungleList.set(28, ama);
	jungleList.set(29, cabrakan);
	jungleList.set(30, charon);
	jungleList.set(31, cthu);
	jungleList.set(32, hades);
	jungleList.set(33, hebo);
	jungleList.set(34, herc);
	jungleList.set(35, janus);
	jungleList.set(36, mulan);
	jungleList.set(37, odin);
	jungleList.set(38, osiris);
	jungleList.set(39, poe);
	jungleList.set(40, scylla);
	jungleList.set(41, sun);
	jungleList.set(42, surtr);
	jungleList.set(43, morri);
	jungleList.set(44, tyr);
	jungleList.set(45, ullr);
	jungleList.set(46, vamana);
	jungleList.set(47, ymir);
	
	//setting up a group for adcs
	//HashMap<Integer, godClass> adcList = new HashMap<Integer, godClass>();
	adcList.set(1, amc);
	adcList.set(2, anhur);
	adcList.set(3, apollo);
	adcList.set(4, artemis);
	adcList.set(5, cern);
	adcList.set(6, cherry);
	adcList.set(7, cherno);
	adcList.set(8, chiron);
	adcList.set(9, chronos);
	adcList.set(10, cupid);
	adcList.set(11, danza);
	adcList.set(12, freya);
	adcList.set(13, heim);
	adcList.set(14, houyi);
	adcList.set(15, hachi);
	adcList.set(16, ishtar);
	adcList.set(17, iza);
	adcList.set(18, jing);
	adcList.set(19, marti);
	adcList.set(20, medusa);
	adcList.set(21, neith);
	adcList.set(22, olo);
	adcList.set(23, rama);
	adcList.set(24, skadi);
	adcList.set(25, sol);
	adcList.set(26, ullr);
	adcList.set(27, xbal);
	adcList.set(28, nut);
	adcList.set(29, poe);
	adcList.set(30, zhong);
	
	//setting up a group for hunters
	//HashMap<Integer, godClass> hunterList = new HashMap<Integer, godClass>();
	hunterList.set(1, amc);
	hunterList.set(2, anhur);
	hunterList.set(3, apollo);
	hunterList.set(4, artemis);
	hunterList.set(5, cern);
	hunterList.set(6, cherry);
	hunterList.set(7, cherno);
	hunterList.set(8, chiron);
	hunterList.set(9, cupid);
	hunterList.set(10, danza);
	hunterList.set(11, heim);
	hunterList.set(12, houyi);
	hunterList.set(13, hachi);
	hunterList.set(14, ishtar);
	hunterList.set(15, iza);
	hunterList.set(16, jing);
	hunterList.set(17, marti);
	hunterList.set(18, medusa);
	hunterList.set(19, neith);
	hunterList.set(20, rama);
	hunterList.set(21, skadi);
	hunterList.set(22, ullr);
	hunterList.set(23, xbal);
	hunterList.set(24, nut);
	
	//setting up a group for warriors
	//HashMap<Integer, godClass> warriorList = new HashMap<Integer, godClass>();
	warriorList.set(1, achilles);
	warriorList.set(2, ama);
	warriorList.set(3, bellona);
	warriorList.set(4, chaac);
	warriorList.set(5, cuchu);
	warriorList.set(6, erlang);
	warriorList.set(7, gilga);
	warriorList.set(8, guan);
	warriorList.set(9, herc);
	warriorList.set(10, horus);
	warriorList.set(11, king);
	warriorList.set(12, mulan);
	warriorList.set(13, nike);
	warriorList.set(14, odin);
	warriorList.set(15, osiris);
	warriorList.set(16, shiva);
	warriorList.set(17, sun);
	warriorList.set(18, surtr);
	warriorList.set(19, tyr);
	warriorList.set(20, vamana);
	
	//setting up a group for solos
	//HashMap<Integer, godClass> soloList = new HashMap<Integer, godClass>();
	soloList.set(1, achilles);
	soloList.set(2, ama);
	soloList.set(3, bellona);
	soloList.set(4, chaac);
	soloList.set(5, cuchu);
	soloList.set(6, erlang);
	soloList.set(7, gilga);
	soloList.set(8, guan);
	soloList.set(9, herc);
	soloList.set(10, horus);
	soloList.set(11, king);
	soloList.set(12, mulan);
	soloList.set(13, nike);
	soloList.set(14, odin);
	soloList.set(15, osiris);
	soloList.set(16, shiva);
	soloList.set(17, sun);
	soloList.set(18, surtr);
	soloList.set(19, tyr);
	soloList.set(20, vamana);
	soloList.set(21, aphro);
	soloList.set(22, ares);
	soloList.set(23, artio);
	soloList.set(24, athena);
	soloList.set(25, bacchus);
	soloList.set(26, bake);
	soloList.set(27, baron);
	soloList.set(28, cabrakan);
	soloList.set(29, cama);
	soloList.set(30, cerb);
	soloList.set(31, change);
	soloList.set(32, charon);
	soloList.set(33, cthu);
	soloList.set(34, eset);
	soloList.set(35, fafnir);
	soloList.set(36, hades);
	soloList.set(37, hel);
	soloList.set(38, hera);
	soloList.set(39, jorm);
	soloList.set(40, kuzenbo);
	soloList.set(41, nem);
	soloList.set(42, nezha);
	soloList.set(43, perse);
	soloList.set(44, rat);
	soloList.set(45, ravana);
	soloList.set(46, serq);
	soloList.set(47, set2);
	soloList.set(48, sobek);
	soloList.set(49, syl);
	soloList.set(50, terra);
	soloList.set(51, thoth);
	soloList.set(52, tiamat);
	soloList.set(53, xing);
	soloList.set(54, yemoja);
	soloList.set(55, ymir);
	soloList.set(56, zhong);
	
	//setting a group for guardians
	//HashMap<Integer, godClass> guardianList = new HashMap<Integer, godClass>();
	guardianList.set(1, ares);
	guardianList.set(2, artio);
	guardianList.set(3, athena);
	guardianList.set(4, atlas);
	guardianList.set(5, bacchus);
	guardianList.set(6, bake);
	guardianList.set(7, cabrakan);
	guardianList.set(8, cerb);
	guardianList.set(9, charon);
	guardianList.set(10, cthu);
	guardianList.set(11, fafnir);
	guardianList.set(12, ganesha);
	guardianList.set(13, geb);
	guardianList.set(14, jorm);
	guardianList.set(15, khepri);
	guardianList.set(16, kumba);
	guardianList.set(17, kuzenbo);
	guardianList.set(18, maui);
	guardianList.set(19, sobek);
	guardianList.set(20, syl);
	guardianList.set(21, terra);
	guardianList.set(22, xing);
	guardianList.set(23, yemoja);
	guardianList.set(24, ymir);
	
	//setting a  group for supports
	//HashMap<Integer, godClass> supportList = new HashMap<Integer, godClass>();
	supportList.set(1, ares);
	supportList.set(2, artio);
	supportList.set(3, athena);
	supportList.set(4, atlas);
	supportList.set(5, bacchus);
	supportList.set(6, bake);
	supportList.set(7, cabrakan);
	supportList.set(8, cerb);
	supportList.set(9, charon);
	supportList.set(10, cthu);
	supportList.set(11, fafnir);
	supportList.set(12, ganesha);
	supportList.set(13, geb);
	supportList.set(14, jorm);
	supportList.set(15, khepri);
	supportList.set(16, kumba);
	supportList.set(17, kuzenbo);
	supportList.set(18, maui);
	supportList.set(19, sobek);
	supportList.set(20, syl);
	supportList.set(21, terra);
	supportList.set(22, xing);
	supportList.set(23, yemoja);
	supportList.set(24, ymir);
	supportList.set(25, ama);
	supportList.set(26, aphro);
	supportList.set(27, baron);
	supportList.set(28, change);
	supportList.set(29, erlang);
	supportList.set(30, eset);
	supportList.set(31, guan);
	supportList.set(32, hades);
	supportList.set(33, hel);
	supportList.set(34, hera);
	supportList.set(35, chel);
	supportList.set(36, horus);
	supportList.set(37, mulan);
	supportList.set(38, nem);
	supportList.set(39, nox);
	supportList.set(40, ra);
	supportList.set(41, serq);
	supportList.set(42, nezha);
	supportList.set(43, zhong);
	
	//setting a group for mages
	//HashMap<Integer, godClass> mageList = new HashMap<Integer, godClass>();
	mageList.set(1, agni);
	mageList.set(2, ahpuch);
	mageList.set(3, anubis);
	mageList.set(4, aokuang);
	mageList.set(5, aphro);
	mageList.set(6, baba);
	mageList.set(7, baron);
	mageList.set(8, change);
	mageList.set(9, chronos);
	mageList.set(10, discord);
	mageList.set(11, eset);
	mageList.set(12, freya);
	mageList.set(13, hades);
	mageList.set(14, hebo);
	mageList.set(15, hel);
	mageList.set(16, hera);
	mageList.set(17, chel);
	mageList.set(18, janus);
	mageList.set(19, kuku);
	mageList.set(20, maman);
	mageList.set(21, merlin);
	mageList.set(22, morgan);
	mageList.set(23, nox);
	mageList.set(24, nuwa);
	mageList.set(25, olo);
	mageList.set(26, perse);
	mageList.set(27, poe);
	mageList.set(28, ra);
	mageList.set(29, raijin);
	mageList.set(30, scylla);
	mageList.set(31, sol);
	mageList.set(32, morri);
	mageList.set(33, thoth);
	mageList.set(34, tiamat);
	mageList.set(35, vulcan);
	mageList.set(36, yu);
	mageList.set(37, zeus);
	mageList.set(38, zhong);
	
	//setting a group for mid
	//HashMap<Integer, godClass> midList = new HashMap<Integer, godClass>();
	midList.set(1, agni);
	midList.set(2, ahpuch);
	midList.set(3, anubis);
	midList.set(4, aokuang);
	midList.set(5, aphro);
	midList.set(6, baba);
	midList.set(7, baron);
	midList.set(8, change);
	midList.set(9, chronos);
	midList.set(10, discord);
	midList.set(11, eset);
	midList.set(12, freya);
	midList.set(13, hades);
	midList.set(14, hebo);
	midList.set(15, hel);
	midList.set(16, hera);
	midList.set(17, chel);
	midList.set(18, janus);
	midList.set(19, kuku);
	midList.set(20, maman);
	midList.set(21, merlin);
	midList.set(22, morgan);
	midList.set(23, nox);
	midList.set(24, nuwa);
	midList.set(25, olo);
	midList.set(26, perse);
	midList.set(27, poe);
	midList.set(28, ra);
	midList.set(29, raijin);
	midList.set(30, scylla);
	midList.set(31, sol);
	midList.set(32, morri);
	midList.set(33, thoth);
	midList.set(34, tiamat);
	midList.set(35, vulcan);
	midList.set(36, yu);
	midList.set(37, zeus);
	midList.set(38, zhong);
	midList.set(39, amc);
	midList.set(40, apollo);
	midList.set(41, cherno);
	midList.set(42, hachi);
	midList.set(43, heim);
	midList.set(44, jing);
	midList.set(45, marti);
	midList.set(46, medusa);
	midList.set(47, neith);
	midList.set(48, skadi);
	midList.set(49, ullr);
    }

//class randomizeOutcomes {
	//public static Random rand = new Random();
	
	//runs the populate method from populateMaps, fills each HashMap with the relevant characters
	startRandomizer() {
		populate();
	}

	randomizeAll(){
		let result = Math.floor(Math.random()*130)+1;
		return fullGodList.get(result).getName();
	}
	
	//character's played roles
	//java's random starts from 0 and is inclusive to the number given, and my HashMaps all start at 1.
	//So need to call each nextInt with a + 1 while using an initial number that is one less than the maximum to effectively make it randomize from 1 to Max
	//1-49
	randomizeMid() {
		let result = Math.floor(Math.random() * 49)+1;
		return midList.get(result).getName();
	}
	//1-56
	randomizeSolo() {
		let result = Math.floor(Math.random() * 56)+1;
		return soloList.get(result).getName();
	}
	//1-47
	randomizeJungle() {
		let result = Math.floor(Math.random() * 47)+1;
		return jungleList.get(result).getName();
	}
	//1-30
	randomizeADC() {
		let result = Math.floor(Math.random() * 30)+1;
		return adcList.get(result).getName();
	}
	//1-43
	randomizeSupport() {
		let result = Math.floor(Math.random() * 43)+1;
		return supportList.get(result).getName();
	}
	
	//game defined roles
	
	//1-24
	randomizeHunter() {
		let result = Math.floor(Math.random() * 24)+1;
		return hunterList.get(result).getName();
	}
	//1-24
	randomizeAssassin() {
		let result = Math.floor(Math.random() * 24)+1;
		return assassinList.get(result).getName();
	}
	//1-38
	randomizeMage() {
		let result = Math.floor(Math.random() * 38)+1;
		return mageList.get(result).getName();
	}
	//1-24
	randomizeGuardian() {
		let result = Math.floor(Math.random() * 24)+1;
		return guardianList.get(result).getName();
	}
	//1-20
	randomizeWarrior() {
		let result = Math.floor(Math.random() * 20)+1;
		return warriorList.get(result).getName();
	}
	
}