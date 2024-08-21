package randomizer;

public class Hera extends godClass{ 
    public Hera() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Hera test = new Hera();
    System.out.println(test.getDamageType());
    }
}
