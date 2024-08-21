package randomizer;

public class Pele extends godClass{ 
    public Pele() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Pele test = new Pele();
    System.out.println(test.getDamageType());
    }
}
