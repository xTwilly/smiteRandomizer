package randomizer;

public class Ymir extends godClass{ 
    public Ymir() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Ymir test = new Ymir();
    System.out.println(test.getDamageType());
    }
}
