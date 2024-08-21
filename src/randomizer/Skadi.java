package randomizer;

public class Skadi extends godClass{ 
    public Skadi() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Skadi test = new Skadi();
    System.out.println(test.getDamageType());
    }
}
