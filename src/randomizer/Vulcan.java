package randomizer;

public class Vulcan extends godClass{ 
    public Vulcan() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Vulcan test = new Vulcan();
    System.out.println(test.getDamageType());
    }
}
