package randomizer;

public class Da_Ji extends godClass{ 
    public Da_Ji() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Da_Ji test = new Da_Ji();
    System.out.println(test.getDamageType());
    }
}
