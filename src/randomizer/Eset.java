package randomizer;

public class Eset extends godClass{ 
    public Eset() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Eset test = new Eset();
    System.out.println(test.getDamageType());
    }
}
