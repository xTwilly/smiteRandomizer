package randomizer;

public class Merlin extends godClass{ 
    public Merlin() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Merlin test = new Merlin();
    System.out.println(test.getDamageType());
    }
}
