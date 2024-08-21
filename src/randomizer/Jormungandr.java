package randomizer;

public class Jormungandr extends godClass{ 
    public Jormungandr() {
    	 this.role = "Solo";
         this.damageType = "Magical";
         this.gameDefinedClass = "Guardian";
    }


public static void main(String args[]){
    Jormungandr test = new Jormungandr();
    System.out.println(test.getDamageType());
    }
}
