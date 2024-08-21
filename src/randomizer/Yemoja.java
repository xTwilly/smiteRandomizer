package randomizer;

public class Yemoja extends godClass{ 
    public Yemoja() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Yemoja test = new Yemoja();
    System.out.println(test.getDamageType());
    }
}
