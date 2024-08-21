package randomizer;

public class Serqet extends godClass{ 
    public Serqet() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Serqet test = new Serqet();
    System.out.println(test.getDamageType());
    }
}
