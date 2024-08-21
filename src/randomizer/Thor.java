package randomizer;

public class Thor extends godClass{ 
    public Thor() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Thor test = new Thor();
    System.out.println(test.getDamageType());
    }
}
