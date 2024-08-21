package randomizer;

public class Bellona extends godClass{ 
    public Bellona() {
    	 this.role = "Solo";
         this.damageType = "Physical";
         this.gameDefinedClass = "Warrior";
    }


public static void main(String args[]){
    Bellona test = new Bellona();
    System.out.println(test.getDamageType());
    }
}
