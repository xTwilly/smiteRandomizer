package randomizer;

public class Athena extends godClass{ 
    public Athena() {
    	 this.role = "Support";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Athena test = new Athena();
    System.out.println(test.getDamageType());
    }
}
