package randomizer;

public class Hades extends godClass{ 
    public Hades() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Hades test = new Hades();
    System.out.println(test.getDamageType());
    }
}
