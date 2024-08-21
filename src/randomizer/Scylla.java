package randomizer;

public class Scylla extends godClass{ 
    public Scylla() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Scylla test = new Scylla();
    System.out.println(test.getDamageType());
    }
}
