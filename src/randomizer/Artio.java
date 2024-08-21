package randomizer;

public class Artio extends godClass{ 
    public Artio() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Artio test = new Artio();
    System.out.println(test.getDamageType());
    }
}
