package randomizer;

public class Gilgamesh extends godClass{ 
    public Gilgamesh() {
    	 this.role = "Solo";
         this.damageType = "Physical";
         this.gameDefinedClass = "Warrior";
    }


public static void main(String args[]){
    Gilgamesh test = new Gilgamesh();
    System.out.println(test.getDamageType());
    }
}
