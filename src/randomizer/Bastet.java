package randomizer;

public class Bastet extends godClass{ 
    public Bastet() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Bastet test = new Bastet();
    System.out.println(test.getDamageType());
    }
}
