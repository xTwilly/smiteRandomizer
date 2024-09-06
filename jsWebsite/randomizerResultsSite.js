import godClass from 'godClassSite';
import populate from 'populateMapsSite';
class randomizeOutcomes {
	//public static Random rand = new Random();
	
	//runs the populate method from populateMaps, fills each HashMap with the relevant characters
	startRandomizer() {
		populate();
	}
	
	//character's played roles
	//java's random starts from 0 and is inclusive to the number given, and my HashMaps all start at 1.
	//So need to call each nextInt with a + 1 while using an initial number that is one less than the maximum to effectively make it randomize from 1 to Max
	//1-49
	randomizeMid() {
		result = Math.floor(Math.random() * 48)+1;
		return midList.get(result).getName();
	}
	//1-56
	randomizeSolo() {
		result = Math.floor(Math.random() * 55)+1;
		return soloList.get(result).getName();
	}
	//1-47
	randomizeJungle() {
		result = Math.floor(Math.random() * 46)+1;
		return jungleList.get(result).getName();
	}
	//1-30
	randomizeADC() {
		result = Math.floor(Math.random() * 29)+1;
		return adcList.get(result).getName();
	}
	//1-43
	randomizeSupport() {
		result = Math.floor(Math.random() * 42)+1;
		return supportList.get(result).getName();
	}
	
	//game defined roles
	
	//1-24
	randomizeHunter() {
		result = Math.floor(Math.random() * 23)+1;
		return hunterList.get(result).getName();
	}
	//1-24
	randomizeAssassin() {
		result = Math.floor(Math.random() * 23)+1;
		return assassinList.get(result).getName();
	}
	//1-38
	randomizeMage() {
		result = Math.floor(Math.random() * 37)+1;
		return mageList.get(result).getName();
	}
	//1-24
	randomizeGuardian() {
		result = Math.floor(Math.random() * 23)+1;
		return guardianList.get(result).getName();
	}
	//1-20
	randomizeWarrior() {
		result = Math.floor(Math.random() * 19)+1;
		return warriorList.get(result).getName();
	}
	
}