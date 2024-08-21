package randomizer;

public class Hercules extends godClass{ 
    public Hercules() {
    	 this.role = "Solo";
         this.damageType = "Physical";
         this.gameDefinedClass = "Warrior";
    }


public static void main(String args[]){
    Hercules test = new Hercules();
    System.out.println(test.getDamageType());
    }
}
