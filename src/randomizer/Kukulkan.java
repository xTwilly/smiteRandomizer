package randomizer;

public class Kukulkan extends godClass{ 
    public Kukulkan() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Kukulkan test = new Kukulkan();
    System.out.println(test.getDamageType());
    }
}
