package randomizer;

public class Achilles extends godClass{ 
    public Achilles() {
    	 this.role = "Solo";
         this.damageType = "Physical";
         this.gameDefinedClass = "Warrior";
    }


public static void main(String args[]){
    Achilles test = new Achilles();
    System.out.println(test.getDamageType());
    }
}
