package randomizer;

public class Mercury extends godClass{ 
    public Mercury() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Mercury test = new Mercury();
    System.out.println(test.getDamageType());
    }
}
