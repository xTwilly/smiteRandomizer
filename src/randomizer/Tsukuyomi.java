package randomizer;

public class Tsukuyomi extends godClass{ 
    public Tsukuyomi() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Tsukuyomi test = new Tsukuyomi();
    System.out.println(test.getDamageType());
    }
}
