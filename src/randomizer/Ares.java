package randomizer;

public class Ares extends godClass{ 
    public Ares() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Ares test = new Ares();
    System.out.println(test.getDamageType());
    }
}
