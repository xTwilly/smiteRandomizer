package randomizer;

public class Anubis extends godClass{ 
    public Anubis() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Anubis test = new Anubis();
    System.out.println(test.getDamageType());
    }
}
