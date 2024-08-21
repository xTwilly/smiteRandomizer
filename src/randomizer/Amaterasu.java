package randomizer;

public class Amaterasu extends godClass{ 
    public Amaterasu() {
    	 this.role = "Solo";
         this.damageType = "Physical";
         this.gameDefinedClass = "Warrior";
    }


public static void main(String args[]){
    Amaterasu test = new Amaterasu();
    System.out.println(test.getDamageType());
    }
}
