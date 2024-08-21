package randomizer;

public class Janus extends godClass{ 
    public Janus() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Janus test = new Janus();
    System.out.println(test.getDamageType());
    }
}
