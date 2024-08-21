package randomizer;

public class Sylvanus extends godClass{ 
    public Sylvanus() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Sylvanus test = new Sylvanus();
    System.out.println(test.getDamageType());
    }
}
