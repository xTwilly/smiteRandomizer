package randomizer;

public class Chernobog extends godClass{ 
    public Chernobog() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Chernobog test = new Chernobog();
    System.out.println(test.getDamageType());
    }
}
