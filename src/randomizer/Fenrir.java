package randomizer;

public class Fenrir extends godClass{ 
    public Fenrir() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Fenrir test = new Fenrir();
    System.out.println(test.getDamageType());
    }
}
