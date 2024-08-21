package randomizer;

public class Cerberus extends godClass{ 
    public Cerberus() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Cerberus test = new Cerberus();
    System.out.println(test.getDamageType());
    }
}
