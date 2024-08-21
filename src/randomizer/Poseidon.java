package randomizer;

public class Poseidon extends godClass{ 
    public Poseidon() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Poseidon test = new Poseidon();
    System.out.println(test.getDamageType());
    }
}
