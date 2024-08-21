package randomizer;

public class Yu_Huang extends godClass{ 
    public Yu_Huang() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Yu_Huang test = new Yu_Huang();
    System.out.println(test.getDamageType());
    }
}
