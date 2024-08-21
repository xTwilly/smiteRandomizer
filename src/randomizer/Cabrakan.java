package randomizer;

public class Cabrakan extends godClass{ 
    public Cabrakan() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Cabrakan test = new Cabrakan();
    System.out.println(test.getDamageType());
    }
}
