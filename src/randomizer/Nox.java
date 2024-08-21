package randomizer;

public class Nox extends godClass{ 
    public Nox() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Nox test = new Nox();
    System.out.println(test.getDamageType());
    }
}
