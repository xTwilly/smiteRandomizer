package randomizer;

public class Morgan_Le_Fay extends godClass{ 
    public Morgan_Le_Fay() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Morgan_Le_Fay test = new Morgan_Le_Fay();
    System.out.println(test.getDamageType());
    }
}
