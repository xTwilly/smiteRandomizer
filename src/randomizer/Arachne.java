package randomizer;

public class Arachne extends godClass{ 
    public Arachne() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Arachne test = new Arachne();
    System.out.println(test.getDamageType());
    }
}
