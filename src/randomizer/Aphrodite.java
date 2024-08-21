package randomizer;

public class Aphrodite extends godClass{ 
    public Aphrodite() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Aphrodite test = new Aphrodite();
    System.out.println(test.getDamageType());
    }
}
