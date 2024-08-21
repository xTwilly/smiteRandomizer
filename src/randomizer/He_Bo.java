package randomizer;

public class He_Bo extends godClass{ 
    public He_Bo() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    He_Bo test = new He_Bo();
    System.out.println(test.getDamageType());
    }
}
