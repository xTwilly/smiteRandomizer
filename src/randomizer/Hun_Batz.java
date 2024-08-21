package randomizer;

public class Hun_Batz extends godClass{ 
    public Hun_Batz() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Hun_Batz test = new Hun_Batz();
    System.out.println(test.getDamageType());
    }
}
