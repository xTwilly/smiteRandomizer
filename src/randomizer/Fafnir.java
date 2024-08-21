package randomizer;

public class Fafnir extends godClass{ 
    public Fafnir() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Fafnir test = new Fafnir();
    System.out.println(test.getDamageType());
    }
}
