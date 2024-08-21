package randomizer;

public class Ratatoskr extends godClass{ 
    public Ratatoskr() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Ratatoskr test = new Ratatoskr();
    System.out.println(test.getDamageType());
    }
}
