package randomizer;

public class Xing_Tian extends godClass{ 
    public Xing_Tian() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Xing_Tian test = new Xing_Tian();
    System.out.println(test.getDamageType());
    }
}
