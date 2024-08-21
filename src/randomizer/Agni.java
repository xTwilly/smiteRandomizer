package randomizer;

public class Agni extends godClass{ 
    public Agni() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Agni test = new Agni();
    System.out.println(test.getDamageType());
    }
}
