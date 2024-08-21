package randomizer;

public class Martichoras extends godClass{ 
    public Martichoras() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Martichoras test = new Martichoras();
    System.out.println(test.getDamageType());
    }
}
