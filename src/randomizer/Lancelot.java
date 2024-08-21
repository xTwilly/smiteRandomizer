package randomizer;

public class Lancelot extends godClass{ 
    public Lancelot() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Lancelot test = new Lancelot();
    System.out.println(test.getDamageType());
    }
}
