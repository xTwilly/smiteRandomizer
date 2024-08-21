package randomizer;

public class Chang_e extends godClass{ 
    public Chang_e() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Chang_e test = new Chang_e();
    System.out.println(test.getDamageType());
    }
}
