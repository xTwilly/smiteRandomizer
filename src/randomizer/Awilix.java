package randomizer;

public class Awilix extends godClass{ 
    public Awilix() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Awilix test = new Awilix();
    System.out.println(test.getDamageType());
    }
}
