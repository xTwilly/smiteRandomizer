package randomizer;

public class Cliodhna extends godClass{ 
    public Cliodhna() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Cliodhna test = new Cliodhna();
    System.out.println(test.getDamageType());
    }
}
