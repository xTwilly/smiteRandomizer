package randomizer;

public class Charon extends godClass{ 
    public Charon() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Charon test = new Charon();
    System.out.println(test.getDamageType());
    }
}
