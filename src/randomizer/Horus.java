package randomizer;

public class Horus extends godClass{ 
    public Horus() {
    	 this.role = "Solo";
         this.damageType = "Physical";
         this.gameDefinedClass = "Warrior";
    }


public static void main(String args[]){
    Horus test = new Horus();
    System.out.println(test.getDamageType());
    }
}
