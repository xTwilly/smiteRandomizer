package randomizer;

public class Zhong_Kui extends godClass{ 
    public Zhong_Kui() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Zhong_Kui test = new Zhong_Kui();
    System.out.println(test.getDamageType());
    }
}
