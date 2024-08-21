package randomizer;

public class Vamana extends godClass{ 
    public Vamana() {
    	 this.role = "Solo";
         this.damageType = "Physical";
         this.gameDefinedClass = "Warrior";
    }


public static void main(String args[]){
    Vamana test = new Vamana();
    System.out.println(test.getDamageType());
    }
}
