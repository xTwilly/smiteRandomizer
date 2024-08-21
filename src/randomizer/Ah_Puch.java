package randomizer;

public class Ah_Puch extends godClass{ 
    public Ah_Puch() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Ah_Puch test = new Ah_Puch();
    System.out.println(test.getDamageType());
    }
}
