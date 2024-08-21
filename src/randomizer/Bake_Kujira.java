package randomizer;

public class Bake_Kujira extends godClass{ 
    public Bake_Kujira() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Bake_Kujira test = new Bake_Kujira();
    System.out.println(test.getDamageType());
    }
}
