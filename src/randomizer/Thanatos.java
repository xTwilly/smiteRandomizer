package randomizer;

public class Thanatos extends godClass{ 
    public Thanatos() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Thanatos test = new Thanatos();
    System.out.println(test.getDamageType());
    }
}
