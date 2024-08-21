package randomizer;

public class Geb extends godClass{ 
    public Geb() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Geb test = new Geb();
    System.out.println(test.getDamageType());
    }
}
