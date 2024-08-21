package randomizer;

public class Hel extends godClass{ 
    public Hel() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Hel test = new Hel();
    System.out.println(test.getDamageType());
    }
}
