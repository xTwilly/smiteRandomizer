package randomizer;

public class Odin extends godClass{ 
    public Odin() {
    	 this.role = "Solo";
         this.damageType = "Physical";
         this.gameDefinedClass = "Warrior";
    }


public static void main(String args[]){
    Odin test = new Odin();
    System.out.println(test.getDamageType());
    }
}
