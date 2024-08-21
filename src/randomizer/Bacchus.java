package randomizer;

public class Bacchus extends godClass{ 
    public Bacchus() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Bacchus test = new Bacchus();
    System.out.println(test.getDamageType());
    }
}
