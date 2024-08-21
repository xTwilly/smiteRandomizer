package randomizer;

public class Loki extends godClass{ 
    public Loki() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Loki test = new Loki();
    System.out.println(test.getDamageType());
    }
}
