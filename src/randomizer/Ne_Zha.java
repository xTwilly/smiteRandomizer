package randomizer;

public class Ne_Zha extends godClass{ 
    public Ne_Zha() {
    	 this.role = "Jungle";
         this.damageType = "Physical";
         this.gameDefinedClass = "Assassin";
    }


public static void main(String args[]){
    Ne_Zha test = new Ne_Zha();
    System.out.println(test.getDamageType());
    }
}
