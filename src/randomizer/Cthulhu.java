package randomizer;

public class Cthulhu extends godClass{ 
    public Cthulhu() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Cthulhu test = new Cthulhu();
    System.out.println(test.getDamageType());
    }
}
