package randomizer;

public class Set2 extends godClass{ 
    public Set2() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Set2 test = new Set2();
    System.out.println(test.getDamageType());
    }
}
