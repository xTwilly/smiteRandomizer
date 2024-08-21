package randomizer;

public class Zeus extends godClass{ 
    public Zeus() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Zeus test = new Zeus();
    System.out.println(test.getDamageType());
    }
}
