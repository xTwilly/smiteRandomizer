package randomizer;

public class Susano extends godClass{ 
    public Susano() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Susano test = new Susano();
    System.out.println(test.getDamageType());
    }
}
