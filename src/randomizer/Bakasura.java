package randomizer;

public class Bakasura extends godClass{ 
    public Bakasura() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Bakasura test = new Bakasura();
    System.out.println(test.getDamageType());
    }
}
