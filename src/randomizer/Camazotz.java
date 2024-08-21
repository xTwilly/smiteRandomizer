package randomizer;

public class Camazotz extends godClass{ 
    public Camazotz() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Camazotz test = new Camazotz();
    System.out.println(test.getDamageType());
    }
}
