package randomizer;
import java.util.Random;

public class randomizeOutcomes extends populateMaps {
	public static Random rand = new Random();
	
	//runs the populate method from populateMaps, fills each HashMap with the relevant characters
	public static void startRandomizer() {
		populate();
	}
	
	//character's played roles
	//java's random starts from 0 and is inclusive to the number given, and my HashMaps all start at 1.
	//So need to call each nextInt with a + 1 while using an initial number that is one less than the maximum to effectively make it randomize from 1 to Max
	//1-49
	public static String randomizeMid() {
		int result = rand.nextInt(48)+1;
		return midList.get(result).getName();
	}
	//1-56
	public static String randomizeSolo() {
		int result = rand.nextInt(55)+1;
		return soloList.get(result).getName();
	}
	//1-47
	public static String randomizeJungle() {
		int result = rand.nextInt(46)+1;
		return jungleList.get(result).getName();
	}
	//1-30
	public static String randomizeADC() {
		int result = rand.nextInt(29)+1;
		return adcList.get(result).getName();
	}
	//1-43
	public static String randomizeSupport() {
		int result = rand.nextInt(42)+1;
		return supportList.get(result).getName();
	}
	
	//game defined roles
	
	//1-24
	public static String randomizeHunter() {
		int result = rand.nextInt(23)+1;
		return hunterList.get(result).getName();
	}
	//1-24
	public static String randomizeAssassin() {
		int result = rand.nextInt(23)+1;
		return assassinList.get(result).getName();
	}
	//1-38
	public static String randomizeMage() {
		int result = rand.nextInt(37)+1;
		return mageList.get(result).getName();
	}
	//1-24
	public static String randomizeGuardian() {
		int result = rand.nextInt(23)+1;
		return guardianList.get(result).getName();
	}
	//1-20
	public static String randomizeWarrior() {
		int result = rand.nextInt(19)+1;
		return warriorList.get(result).getName();
	}
	
	public static void main(String[] args) {
		startRandomizer();
		System.out.println(randomizeJungle());
	}
}
