import godClass from 'godClassSite.js'; 
class populateMaps {
	//creating all the HashMaps that correlate with the various roles within the game. Will be used to find each randomly selected character
	fullGodList = new HashMap();
	assassinList = new HashMap();
	warriorList = new HashMap();
	guardianList = new HashMap();
	mageList = new HashMap();
	hunterList = new HashMap();
	
	soloList = new HashMap();
	midList = new HashMap();
	jungleList = new HashMap();
	adcList = new HashMap();
	supportList = new HashMap();
populate() {
	//map of every character, with assigned numbers for eventually randomization

	//creates a godClass object of each character in the game, and immediately assigns their traits. Then adds them to the largest list, the one that contains every character
	//role, damage, game class
	achilles = new godClass("Solo", "Physical", "Warrior", "Achilles");
	fullGodList.put(1, achilles);
	agni = new godClass("Mid", "Magical", "Mage", "Agni");
	fullGodList.put(2,agni);
	amc = new godClass("ADC", "Physical", "Hunter", "Ah Muzen Cab");
	fullGodList.put(3,amc);
	ahpuch = new godClass("Mid", "Magical", "Mage", "Ah Puch");
	fullGodList.put(4,ahpuch);
	ama = new godClass("Solo", "Physical", "Warrior", "Amaterasu");
	fullGodList.put(5,ama);
	 anhur = new godClass("ADC", "Physical", "Hunter", "Anhur");
	fullGodList.put(6,anhur);
	 anubis = new godClass("Mid", "Magical", "Mage", "Anubis");
	fullGodList.put(7,anubis);
	 aokuang = new godClass("Jungle", "Magical", "Mage", "Ao Kuang");
	fullGodList.put(8, aokuang);
	 aphro = new godClass("Mid", "Magical", "Mage", "Aphrodite");
	fullGodList.put(9,aphro);
	 apollo = new godClass("ADC", "Physical", "Hunter", "Apollo");
	fullGodList.put(10,apollo);
	 arachne = new godClass("Jungle", "Physical", "Assassin", "Arachne");
	fullGodList.put(11,arachne);
	 ares = new godClass("Support", "Magical", "Guardian", "Ares");
	fullGodList.put(12,ares);
	 artemis = new godClass("ADC", "Physical", "Hunter", "Artemis");
	fullGodList.put(13,artemis);
	 artio = new godClass("Support", "Magical", "Guardian", "Artio");
	fullGodList.put(14,artio);
	 athena = new godClass("Support", "Magical", "Guardian", "Athena");
	fullGodList.put(15,athena);
	 atlas = new godClass("Support", "Magical", "Guardian", "Atlas");
	fullGodList.put(16,atlas);
	 awilix = new godClass("Jungle", "Physical", "Assassin", "Awilix");
	fullGodList.put(17,awilix);
	 baba = new godClass("Mid", "Magical", "Mage", "Baba Yaga");
	fullGodList.put(18,baba);
	 bacchus = new godClass("Support", "Magical", "Guardian", "Bacchus");
	fullGodList.put(19,bacchus);
	 baka = new godClass("Jungle", "Physical", "Assassin", "Bakasura");
	fullGodList.put(20,baka);
	 bake = new godClass("Solo", "Magical", "Guardian", "Bake Kujira");
	fullGodList.put(21,bake);
	 baron = new godClass("Mid", "Magical", "Mage", "Baron Samedi");
	fullGodList.put(22,baron);
	 bastet = new godClass("Jungle", "Physical", "Assassin", "Bastet");
	fullGodList.put(23,bastet);
	 bellona = new godClass("Solo", "Physical", "Warrior", "Bellona");
	fullGodList.put(24,bellona);
	 cabrakan = new godClass("Support", "Magical", "Guardian", "Cabrakan");
	fullGodList.put(25,cabrakan);
	 cama = new godClass("Jungle", "Physical", "Assassin", "Camazotz");
	fullGodList.put(26,cama);
	 cerb = new godClass("Support", "Magical", "Guardian", "Cerberus");
	fullGodList.put(27,cerb);
	 cern = new godClass("ADC", "Physical", "Hunter", "Cernunnos");
	fullGodList.put(28,cern);
	 chaac = new godClass("Solo", "Physical", "Warrior", "Chaac");
	fullGodList.put(29,chaac);
	 change = new godClass("Mid", "Magical", "Mage", "Chang'e");
	fullGodList.put(30,change);
	 charon = new godClass("Support", "Magical", "Guardian", "Charon");
	fullGodList.put(31,charon);
	 cherry = new godClass("ADC", "Physical", "Hunter", "Charybdis");
	fullGodList.put(32,cherry);
	 cherno = new godClass("ADC", "Physical", "Hunter", "Chernobog");
	fullGodList.put(33,cherno);
	 chiron = new godClass("ADC", "Physical", "Hunter", "Chiron");
	fullGodList.put(34,chiron);
	 chronos = new godClass("ADC", "Magical", "Mage", "Chronos");
	fullGodList.put(35,chronos);
	 clio = new godClass("Jungle", "Physical", "Assassin", "Cliodhna");
	fullGodList.put(36,clio);
	 cthu = new godClass("Solo", "Magical", "Guardian", "Cthulhu");
	fullGodList.put(37,cthu);
	 cuchu = new godClass("Solo", "Physical", "Warrior", "Cu Chulainn");
	fullGodList.put(38,cuchu);
	 cupid = new godClass("ADC", "Physical", "Hunter", "Cupid");
	fullGodList.put(39,cupid);
	 daji = new godClass("Jungle", "Physical", "Assassin", "Da Ji");
	fullGodList.put(40,daji);
	 danza = new godClass("ADC", "Physical", "Hunter", "Danzaburou");
	fullGodList.put(41,danza);
	 discord = new godClass("Mid", "Magical", "Mage", "Discordia");
	fullGodList.put(42,discord);
	 erlang = new godClass("Solo", "Physical", "Warrior", "Erlang Shen");
	fullGodList.put(43,erlang);
	 eset = new godClass("Mid", "Magical", "Mage", "Eset");
	fullGodList.put(44,eset);
	 fafnir = new godClass("Support", "Magical", "Guardian", "Fafnir");
	fullGodList.put(45,fafnir);
	 fenrir = new godClass("Jungle", "Physical", "Assassin", "Fenrir");
	fullGodList.put(46,fenrir);
	 freya = new godClass("ADC", "Magical", "Mage", "Freya");
	fullGodList.put(47,freya);
	 ganesha = new godClass("Support", "Magical", "Guardian", "Ganesha");
	fullGodList.put(48,ganesha);
	 geb = new godClass("Support", "Magical", "Guardian", "Geb");
	fullGodList.put(49,geb);
	 gilga = new godClass("Solo", "Physical", "Warrior", "Gilgamesh");
	fullGodList.put(50,gilga);
	 guan = new godClass("Solo", "Physical", "Warrior", "Guan Yu");
	fullGodList.put(51,guan);
	 hachi = new godClass("ADC", "Physical", "Hunter", "Hachiman");
	fullGodList.put(52,hachi);
	 hades = new godClass("Mid", "Magical", "Mage", "Hades");
	fullGodList.put(53,hades);
	 hebo = new godClass("Mid", "Magical", "Mage", "He Bo");
	fullGodList.put(54,hebo);
	 heim = new godClass("ADC", "Physical", "Hunter", "Heimdallr");
	fullGodList.put(55,heim);
	 hel = new godClass("Mid", "Magical", "Mage", "Hel");
	fullGodList.put(56,hel);
	 hera = new godClass("Mid", "Magical", "Mage", "Hera");
	fullGodList.put(57,hera);
	 herc = new godClass("Solo", "Physical", "Warrior", "Hercules");
	fullGodList.put(58,herc);
	 horus = new godClass("Solo", "Physical", "Warrior", "Horus");
	fullGodList.put(59,horus);
	 houyi = new godClass("ADC", "Physical", "Hunter", "Hou Yi");
	fullGodList.put(60,houyi);
	 hun = new godClass("Jungle", "Physical", "Assassin", "Hun Batz");
	fullGodList.put(61,hun);
	 ishtar = new godClass("ADC", "Physical", "Hunter", "Ishtar");
	fullGodList.put(62,ishtar);
	 chel = new godClass("Mid", "Magical", "Mage", "Ix Chel");
	fullGodList.put(63,chel);
	 iza = new godClass("ADC", "Physical", "Hunter", "Izanami");
	fullGodList.put(64,iza);
	 janus = new godClass("Mid", "Magical", "Mage", "Janus");
	fullGodList.put(65,janus);
	 jing = new godClass("ADC", "Physical", "Hunter", "Jing Wei");
	fullGodList.put(66,jing);
	 jorm = new godClass("Solo", "Magical", "Guardian", "Jormungandr");
	fullGodList.put(67,jorm);
	 kali = new godClass("Jungle", "Physical", "Assassin", "Kali");
	fullGodList.put(68,kali);
	 khepri = new godClass("Support", "Magical", "Guardian", "Khepri");
	fullGodList.put(69,khepri);
	 king = new godClass("Solo", "Physical", "Warrior", "King Arthur");
	fullGodList.put(70,king);
	 kuku = new godClass("Mid", "Magical", "Mage", "Kukulkan");
	fullGodList.put(71,kuku);
	 kumba = new godClass("Support", "Magical", "Guardian", "Kumbhakarna");
	fullGodList.put(72,kumba);
	 kuzenbo = new godClass("Support", "Magical", "Guardian", "Kuzenbo");
	fullGodList.put(73,kuzenbo);
	 lance = new godClass("Jungle", "Physical", "Assassin", "Lancelot");
	fullGodList.put(74,lance);
	 loki = new godClass("Jungle", "Physical", "Assassin", "Loki");
	fullGodList.put(75,loki);
	 maman = new godClass("Jungle", "Magical", "Mage", "Maman Brigitte");
	fullGodList.put(76,maman);
	 marti = new godClass("ADC", "Physical", "Hunter", "Martichoras");
	fullGodList.put(77,marti);
	 maui = new godClass("Support", "Magical", "Guardian", "Maui");
	fullGodList.put(78,maui);
	 medusa = new godClass("ADC", "Physical", "Hunter", "Medusa");
	fullGodList.put(79,medusa);
	 merc = new godClass("Jungle", "Physical", "Assassin", "Mercury");
	fullGodList.put(80,merc);
	 merlin = new godClass("Mid", "Magical", "Mage", "Merlin");
	fullGodList.put(81,merlin);
	 morgan = new godClass("Mid", "Magical", "Mage", "Morgan Le Fey");
	fullGodList.put(82,morgan);
	 mulan = new godClass("Solo", "Physical", "Warrior", "Mulan");
	fullGodList.put(83,mulan);
	 nezha = new godClass("Jungle", "Physical", "Assassin", "Ne Zha");
	fullGodList.put(84,nezha);
	 neith = new godClass("ADC", "Physical", "Hunter", "Neith");
	fullGodList.put(85,neith);
	 nem = new godClass("Jungle", "Physical", "Assassin", "Nemesis");
	fullGodList.put(86,nem);
	 nike = new godClass("Solo", "Physical", "Warrior", "Nike");
	fullGodList.put(87,nike);
	 nox = new godClass("Mid", "Magical", "Mage", "Nox");
	fullGodList.put(88,nox);
	 nuwa = new godClass("Mid", "Magical", "Mage", "Nu Wa");
	fullGodList.put(89,nuwa);
	 odin = new godClass("Solo", "Physical", "Warrior", "Odin");
	fullGodList.put(90,odin);
	 olo = new godClass("ADC", "Magical", "Mage", "Olorun");
	fullGodList.put(91,olo);
	 osiris = new godClass("Solo", "Physical", "Warrior", "Osiris");
	fullGodList.put(92,osiris);
	 pele = new godClass("Jungle", "Physical", "Assassin", "Pele");
	fullGodList.put(93,pele);
	 perse = new godClass("Mid", "Magical", "Mage", "Persephone");
	fullGodList.put(94,perse);
	 poe = new godClass("Mid", "Magical", "Mage", "Poseidon");
	fullGodList.put(95,poe);
	 ra = new godClass("Mid", "Magical", "Mage", "Ra");
	fullGodList.put(96,ra);
	 raijin = new godClass("Mid", "Magical", "Mage", "Raijin");
	fullGodList.put(97,raijin);
	 rama = new godClass("ADC", "Physical", "Hunter", "Rama");
	fullGodList.put(98,rama);
	 rat = new godClass("Jungle", "Physical", "Assassin", "Ratatoskr");
	fullGodList.put(99,rat);
	 ravana = new godClass("Jungle", "Physical", "Assassin", "Ravana");
	fullGodList.put(100,ravana);
	 scylla = new godClass("Mid", "Magical", "Mage", "Scylla");
	fullGodList.put(101,scylla);
	 serq = new godClass("Jungle", "Physical", "Assassin", "Serqet");
	fullGodList.put(102,serq);
	 set2 = new godClass("Jungle", "Physical", "Assassin", "Set");
	fullGodList.put(103,set2);
	 shiva = new godClass("Solo", "Physical", "Warrior", "Shiva");
	fullGodList.put(104,shiva);
	 skadi = new godClass("ADC", "Physical", "Hunter", "Skadi");
	fullGodList.put(105,skadi);
	 sobek = new godClass("Support", "Magical", "Guardian", "Sobek");
	fullGodList.put(106,sobek);
	 sol = new godClass("ADC", "Magical", "Mage", "Sol");
	fullGodList.put(107,sol);
	 sun = new godClass("Solo", "Physical", "Warrior", "Sun Wukong");
	fullGodList.put(108,sun);
	 surtr = new godClass("Solo", "Physical", "Warrior", "Surtr");
	fullGodList.put(109,surtr);
	 sus = new godClass("Jungle", "Physical", "Assassin", "Susano");
	fullGodList.put(110,sus);
	 syl = new godClass("Support", "Magical", "Guardian", "Sylvanus");
	fullGodList.put(111,syl);
	 terra = new godClass("Support", "Magical", "Guardian", "Terra");
	fullGodList.put(112,terra);
	 thana = new godClass("Jungle", "Physical", "Assassin", "Thanatos");
	fullGodList.put(113,thana);
	 morri = new godClass("Mid", "Magical", "Mage", "The Morrigan");
	fullGodList.put(114,morri);
	 thor = new godClass("Jungle", "Physical", "Assassin", "Thor");
	fullGodList.put(115,thor);
	 thoth = new godClass("Mid", "Magical", "Mage", "Thoth");
	fullGodList.put(116,thoth);
	 tiamat = new godClass("Mid", "Magical", "Mage", "Tiamat");
	fullGodList.put(117,tiamat);
	 tsu = new godClass("Jungle", "Physical", "Assassin", "Tsukuyomi");
	fullGodList.put(118,tsu);
	 tyr = new godClass("Solo", "Physical", "Warrior", "Tyr");
	fullGodList.put(119,tyr);
	 ullr = new godClass("ADC", "Physical", "Hunter", "Ullr");
	fullGodList.put(120,ullr);
	 vamana = new godClass("Solo", "Physical", "Warrior", "Vamana");
	fullGodList.put(121,vamana);
	 vulcan = new godClass("Mid", "Magical", "Mage", "Vulcan");
	fullGodList.put(122,vulcan);
	 xbal = new godClass("ADC", "Physical", "Hunter", "Xbalanque");
	fullGodList.put(123,xbal);
	 xing = new godClass("Support", "Magical", "Guardian", "Xing Tian");
	fullGodList.put(124,xing);
	 yemoja = new godClass("Support", "Magical", "Guardian", "Yemoja");
	fullGodList.put(125,yemoja);
	 ymir = new godClass("Support", "Magical", "Guardian", "Ymir");
	fullGodList.put(126,ymir);
	 yu = new godClass("Mid", "Magical", "Mage", "Yu Huang");
	fullGodList.put(127,yu);
	 zeus = new godClass("Mid", "Magical", "Mage", "Zeus");
	fullGodList.put(128,zeus);
	 zhong = new godClass("Mid", "Magical", "Mage", "Zhong Kui");
	fullGodList.put(129,zhong);
	 nut = new godClass("ADC", "Physical", "Hunter", "Nut");
	fullGodList.put(130,nut);
	
	//Set fgl = fullGodList.entrySet();
	//Iterator it = fgl.iterator();
	
	//setting up a group for randomizing assassins
	//HashMap<Integer, godClass> assassinList = new HashMap<Integer, godClass>();
	assassinList.put(1, arachne);
	assassinList.put(2, baka);
	assassinList.put(3, bastet);
	assassinList.put(4, awilix);
	assassinList.put(5, cama);
	assassinList.put(6, clio);
	assassinList.put(7, daji);
	assassinList.put(8, fenrir);
	assassinList.put(9, hun);
	assassinList.put(10, kali);
	assassinList.put(11, lance);
	assassinList.put(12, loki);
	assassinList.put(13, merc);
	assassinList.put(14, nezha);
	assassinList.put(15, nem);
	assassinList.put(16, pele);
	assassinList.put(17, rat);
	assassinList.put(18, ravana);
	assassinList.put(19, serq);
	assassinList.put(20, set2);
	assassinList.put(21, sus);
	assassinList.put(22, thana);
	assassinList.put(23, thor);
	assassinList.put(24, tsu);
	
	//setting up a group for randomizing junglers
	//HashMap<Integer, godClass> jungleList = new HashMap<Integer, godClass>();
	jungleList.put(1, aokuang);
	jungleList.put(2, arachne);
	jungleList.put(3, baka);
	jungleList.put(4, bastet);
	jungleList.put(5, awilix);
	jungleList.put(6, cama);
	jungleList.put(7, clio);
	jungleList.put(8, daji);
	jungleList.put(9, fenrir);
	jungleList.put(10, hun);
	jungleList.put(11, kali);
	jungleList.put(12, lance);
	jungleList.put(13, loki);
	jungleList.put(14, maman);
	jungleList.put(15, merc);
	jungleList.put(16, nezha);
	jungleList.put(17, nem);
	jungleList.put(18, pele);
	jungleList.put(19, rat);
	jungleList.put(20, ravana);
	jungleList.put(21, serq);
	jungleList.put(22, set2);
	jungleList.put(23, sus);
	jungleList.put(24, thana);
	jungleList.put(25, thor);
	jungleList.put(26, tsu);
	jungleList.put(27, achilles);
	jungleList.put(28, ama);
	jungleList.put(29, cabrakan);
	jungleList.put(30, charon);
	jungleList.put(31, cthu);
	jungleList.put(32, hades);
	jungleList.put(33, hebo);
	jungleList.put(34, herc);
	jungleList.put(35, janus);
	jungleList.put(36, mulan);
	jungleList.put(37, odin);
	jungleList.put(38, osiris);
	jungleList.put(39, poe);
	jungleList.put(40, scylla);
	jungleList.put(41, sun);
	jungleList.put(42, surtr);
	jungleList.put(43, morri);
	jungleList.put(44, tyr);
	jungleList.put(45, ullr);
	jungleList.put(46, vamana);
	jungleList.put(47, ymir);
	
	//setting up a group for adcs
	//HashMap<Integer, godClass> adcList = new HashMap<Integer, godClass>();
	adcList.put(1, amc);
	adcList.put(2, anhur);
	adcList.put(3, apollo);
	adcList.put(4, artemis);
	adcList.put(5, cern);
	adcList.put(6, cherry);
	adcList.put(7, cherno);
	adcList.put(8, chiron);
	adcList.put(9, chronos);
	adcList.put(10, cupid);
	adcList.put(11, danza);
	adcList.put(12, freya);
	adcList.put(13, heim);
	adcList.put(14, houyi);
	adcList.put(15, hachi);
	adcList.put(16, ishtar);
	adcList.put(17, iza);
	adcList.put(18, jing);
	adcList.put(19, marti);
	adcList.put(20, medusa);
	adcList.put(21, neith);
	adcList.put(22, olo);
	adcList.put(23, rama);
	adcList.put(24, skadi);
	adcList.put(25, sol);
	adcList.put(26, ullr);
	adcList.put(27, xbal);
	adcList.put(28, nut);
	adcList.put(29, poe);
	adcList.put(30, zhong);
	
	//setting up a group for hunters
	//HashMap<Integer, godClass> hunterList = new HashMap<Integer, godClass>();
	hunterList.put(1, amc);
	hunterList.put(2, anhur);
	hunterList.put(3, apollo);
	hunterList.put(4, artemis);
	hunterList.put(5, cern);
	hunterList.put(6, cherry);
	hunterList.put(7, cherno);
	hunterList.put(8, chiron);
	hunterList.put(9, cupid);
	hunterList.put(10, danza);
	hunterList.put(11, heim);
	hunterList.put(12, houyi);
	hunterList.put(13, hachi);
	hunterList.put(14, ishtar);
	hunterList.put(15, iza);
	hunterList.put(16, jing);
	hunterList.put(17, marti);
	hunterList.put(18, medusa);
	hunterList.put(19, neith);
	hunterList.put(20, rama);
	hunterList.put(21, skadi);
	hunterList.put(22, ullr);
	hunterList.put(23, xbal);
	hunterList.put(24, nut);
	
	//setting up a group for warriors
	//HashMap<Integer, godClass> warriorList = new HashMap<Integer, godClass>();
	warriorList.put(1, achilles);
	warriorList.put(2, ama);
	warriorList.put(3, bellona);
	warriorList.put(4, chaac);
	warriorList.put(5, cuchu);
	warriorList.put(6, erlang);
	warriorList.put(7, gilga);
	warriorList.put(8, guan);
	warriorList.put(9, herc);
	warriorList.put(10, horus);
	warriorList.put(11, king);
	warriorList.put(12, mulan);
	warriorList.put(13, nike);
	warriorList.put(14, odin);
	warriorList.put(15, osiris);
	warriorList.put(16, shiva);
	warriorList.put(17, sun);
	warriorList.put(18, surtr);
	warriorList.put(19, tyr);
	warriorList.put(20, vamana);
	
	//setting up a group for solos
	//HashMap<Integer, godClass> soloList = new HashMap<Integer, godClass>();
	soloList.put(1, achilles);
	soloList.put(2, ama);
	soloList.put(3, bellona);
	soloList.put(4, chaac);
	soloList.put(5, cuchu);
	soloList.put(6, erlang);
	soloList.put(7, gilga);
	soloList.put(8, guan);
	soloList.put(9, herc);
	soloList.put(10, horus);
	soloList.put(11, king);
	soloList.put(12, mulan);
	soloList.put(13, nike);
	soloList.put(14, odin);
	soloList.put(15, osiris);
	soloList.put(16, shiva);
	soloList.put(17, sun);
	soloList.put(18, surtr);
	soloList.put(19, tyr);
	soloList.put(20, vamana);
	soloList.put(21, aphro);
	soloList.put(22, ares);
	soloList.put(23, artio);
	soloList.put(24, athena);
	soloList.put(25, bacchus);
	soloList.put(26, bake);
	soloList.put(27, baron);
	soloList.put(28, cabrakan);
	soloList.put(29, cama);
	soloList.put(30, cerb);
	soloList.put(31, change);
	soloList.put(32, charon);
	soloList.put(33, cthu);
	soloList.put(34, eset);
	soloList.put(35, fafnir);
	soloList.put(36, hades);
	soloList.put(37, hel);
	soloList.put(38, hera);
	soloList.put(39, jorm);
	soloList.put(40, kuzenbo);
	soloList.put(41, nem);
	soloList.put(42, nezha);
	soloList.put(43, perse);
	soloList.put(44, rat);
	soloList.put(45, ravana);
	soloList.put(46, serq);
	soloList.put(47, set2);
	soloList.put(48, sobek);
	soloList.put(49, syl);
	soloList.put(50, terra);
	soloList.put(51, thoth);
	soloList.put(52, tiamat);
	soloList.put(53, xing);
	soloList.put(54, yemoja);
	soloList.put(55, ymir);
	soloList.put(56, zhong);
	
	//setting a group for guardians
	//HashMap<Integer, godClass> guardianList = new HashMap<Integer, godClass>();
	guardianList.put(1, ares);
	guardianList.put(2, artio);
	guardianList.put(3, athena);
	guardianList.put(4, atlas);
	guardianList.put(5, bacchus);
	guardianList.put(6, bake);
	guardianList.put(7, cabrakan);
	guardianList.put(8, cerb);
	guardianList.put(9, charon);
	guardianList.put(10, cthu);
	guardianList.put(11, fafnir);
	guardianList.put(12, ganesha);
	guardianList.put(13, geb);
	guardianList.put(14, jorm);
	guardianList.put(15, khepri);
	guardianList.put(16, kumba);
	guardianList.put(17, kuzenbo);
	guardianList.put(18, maui);
	guardianList.put(19, sobek);
	guardianList.put(20, syl);
	guardianList.put(21, terra);
	guardianList.put(22, xing);
	guardianList.put(23, yemoja);
	guardianList.put(24, ymir);
	
	//setting a  group for supports
	//HashMap<Integer, godClass> supportList = new HashMap<Integer, godClass>();
	supportList.put(1, ares);
	supportList.put(2, artio);
	supportList.put(3, athena);
	supportList.put(4, atlas);
	supportList.put(5, bacchus);
	supportList.put(6, bake);
	supportList.put(7, cabrakan);
	supportList.put(8, cerb);
	supportList.put(9, charon);
	supportList.put(10, cthu);
	supportList.put(11, fafnir);
	supportList.put(12, ganesha);
	supportList.put(13, geb);
	supportList.put(14, jorm);
	supportList.put(15, khepri);
	supportList.put(16, kumba);
	supportList.put(17, kuzenbo);
	supportList.put(18, maui);
	supportList.put(19, sobek);
	supportList.put(20, syl);
	supportList.put(21, terra);
	supportList.put(22, xing);
	supportList.put(23, yemoja);
	supportList.put(24, ymir);
	supportList.put(25, ama);
	supportList.put(26, aphro);
	supportList.put(27, baron);
	supportList.put(28, change);
	supportList.put(29, erlang);
	supportList.put(30, eset);
	supportList.put(31, guan);
	supportList.put(32, hades);
	supportList.put(33, hel);
	supportList.put(34, hera);
	supportList.put(35, chel);
	supportList.put(36, horus);
	supportList.put(37, mulan);
	supportList.put(38, nem);
	supportList.put(39, nox);
	supportList.put(40, ra);
	supportList.put(41, serq);
	supportList.put(42, nezha);
	supportList.put(43, zhong);
	
	//setting a group for mages
	//HashMap<Integer, godClass> mageList = new HashMap<Integer, godClass>();
	mageList.put(1, agni);
	mageList.put(2, ahpuch);
	mageList.put(3, anubis);
	mageList.put(4, aokuang);
	mageList.put(5, aphro);
	mageList.put(6, baba);
	mageList.put(7, baron);
	mageList.put(8, change);
	mageList.put(9, chronos);
	mageList.put(10, discord);
	mageList.put(11, eset);
	mageList.put(12, freya);
	mageList.put(13, hades);
	mageList.put(14, hebo);
	mageList.put(15, hel);
	mageList.put(16, hera);
	mageList.put(17, chel);
	mageList.put(18, janus);
	mageList.put(19, kuku);
	mageList.put(20, maman);
	mageList.put(21, merlin);
	mageList.put(22, morgan);
	mageList.put(23, nox);
	mageList.put(24, nuwa);
	mageList.put(25, olo);
	mageList.put(26, perse);
	mageList.put(27, poe);
	mageList.put(28, ra);
	mageList.put(29, raijin);
	mageList.put(30, scylla);
	mageList.put(31, sol);
	mageList.put(32, morri);
	mageList.put(33, thoth);
	mageList.put(34, tiamat);
	mageList.put(35, vulcan);
	mageList.put(36, yu);
	mageList.put(37, zeus);
	mageList.put(38, zhong);
	
	//setting a group for mid
	//HashMap<Integer, godClass> midList = new HashMap<Integer, godClass>();
	midList.put(1, agni);
	midList.put(2, ahpuch);
	midList.put(3, anubis);
	midList.put(4, aokuang);
	midList.put(5, aphro);
	midList.put(6, baba);
	midList.put(7, baron);
	midList.put(8, change);
	midList.put(9, chronos);
	midList.put(10, discord);
	midList.put(11, eset);
	midList.put(12, freya);
	midList.put(13, hades);
	midList.put(14, hebo);
	midList.put(15, hel);
	midList.put(16, hera);
	midList.put(17, chel);
	midList.put(18, janus);
	midList.put(19, kuku);
	midList.put(20, maman);
	midList.put(21, merlin);
	midList.put(22, morgan);
	midList.put(23, nox);
	midList.put(24, nuwa);
	midList.put(25, olo);
	midList.put(26, perse);
	midList.put(27, poe);
	midList.put(28, ra);
	midList.put(29, raijin);
	midList.put(30, scylla);
	midList.put(31, sol);
	midList.put(32, morri);
	midList.put(33, thoth);
	midList.put(34, tiamat);
	midList.put(35, vulcan);
	midList.put(36, yu);
	midList.put(37, zeus);
	midList.put(38, zhong);
	midList.put(39, amc);
	midList.put(40, apollo);
	midList.put(41, cherno);
	midList.put(42, hachi);
	midList.put(43, heim);
	midList.put(44, jing);
	midList.put(45, marti);
	midList.put(46, medusa);
	midList.put(47, neith);
	midList.put(48, skadi);
	midList.put(49, ullr);
    }
}