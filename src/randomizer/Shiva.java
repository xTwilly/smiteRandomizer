package randomizer;

public class Shiva extends godClass{ 
    public Shiva() {
    	 this.role = "Solo";
         this.damageType = "Physical";
         this.gameDefinedClass = "Warrior";
    }


public static void main(String args[]){
    Shiva test = new Shiva();
    System.out.println(test.getDamageType());
    }
}
