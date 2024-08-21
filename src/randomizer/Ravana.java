package randomizer;

public class Ravana extends godClass{ 
    public Ravana() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Ravana test = new Ravana();
    System.out.println(test.getDamageType());
    }
}
