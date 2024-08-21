package randomizer;

public class Atlas extends godClass{ 
    public Atlas() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Atlas test = new Atlas();
    System.out.println(test.getDamageType());
    }
}
