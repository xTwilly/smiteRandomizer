package randomizer;

public class Persephone extends godClass{ 
    public Persephone() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Persephone test = new Persephone();
    System.out.println(test.getDamageType());
    }
}
