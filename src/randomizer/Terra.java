package randomizer;

public class Terra extends godClass{ 
    public Terra() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Terra test = new Terra();
    System.out.println(test.getDamageType());
    }
}
