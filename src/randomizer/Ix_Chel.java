package randomizer;

public class Ix_Chel extends godClass{ 
    public Ix_Chel() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Ix_Chel test = new Ix_Chel();
    System.out.println(test.getDamageType());
    }
}
