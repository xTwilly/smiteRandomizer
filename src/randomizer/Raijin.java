package randomizer;

public class Raijin extends godClass{ 
    public Raijin() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Raijin test = new Raijin();
    System.out.println(test.getDamageType());
    }
}
