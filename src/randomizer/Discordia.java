package randomizer;

public class Discordia extends godClass{ 
    public Discordia() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Discordia test = new Discordia();
    System.out.println(test.getDamageType());
    }
}
